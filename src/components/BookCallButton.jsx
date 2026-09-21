import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact, setWasmUrl } from '@lottiefiles/dotlottie-react';
import { ChevronRight } from 'lucide-react';

// Configure WASM URL to load from local public directory (avoids CDN latency and 404s)
if (typeof window !== 'undefined') {
  try {
    setWasmUrl('/dotlottie-player.wasm');
  } catch (e) {
    // Ignore if already set
  }
}

// Clean direct URL (without /embed/) and local offline-reliable fallback
const LOCAL_ANIMATION_SRC = "/animations/book-call.lottie";
const REMOTE_ANIMATION_SRC = "https://lottie.host/b1e08e0d-d0ee-440f-8c53-3c411eacb227/4p7Bs3aZvf.lottie";
const STATE_MACHINE_ID = "StateMachine2";

class BookCallErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('[BookCallButton] ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <button
          type="button"
          onClick={this.props.onClick}
          aria-label="Book a call"
          className={`w-[260px] sm:w-[320px] aspect-[3.8/1] bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer ${this.props.className || ''}`}
        >
          <span>Book a call</span>
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      );
    }
    return this.props.children;
  }
}

function BookCallButtonInner({ onClick, className = '' }) {
  const [dotLottie, setDotLottie] = useState(null);
  const [currentSrc, setCurrentSrc] = useState(LOCAL_ANIMATION_SRC);
  const [hasError, setHasError] = useState(false);
  const isMountedRef = useRef(true);

  const sizeClasses = className || "w-[185px] sm:w-[205px] h-[44px] sm:h-[48px]";

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!dotLottie) return;

    let cleanupListeners = () => {};

    const startStateMachine = async () => {
      try {
        if (typeof dotLottie.setLayout === 'function') {
          dotLottie.setLayout({ fit: 'cover', align: [0.5, 0.5] });
        }
        if (typeof dotLottie.stateMachineLoad === 'function') {
          await dotLottie.stateMachineLoad(STATE_MACHINE_ID);
        }
        if (typeof dotLottie.stateMachineStart === 'function') {
          await dotLottie.stateMachineStart();
        }
      } catch (err) {
        console.warn(`[BookCallButton] Could not load or start state machine "${STATE_MACHINE_ID}":`, err);
      }
    };

    const handleLoad = () => {
      startStateMachine();
    };

    const handleLoadError = (err) => {
      console.warn('[BookCallButton] Animation load error:', err);
      if (isMountedRef.current) {
        if (currentSrc === LOCAL_ANIMATION_SRC) {
          // Attempt remote fallback
          setCurrentSrc(REMOTE_ANIMATION_SRC);
        } else {
          setHasError(true);
        }
      }
    };

    if (dotLottie.isLoaded) {
      startStateMachine();
    } else {
      if (typeof dotLottie.addEventListener === 'function') {
        dotLottie.addEventListener('load', handleLoad);
        dotLottie.addEventListener('loadError', handleLoadError);

        cleanupListeners = () => {
          if (typeof dotLottie.removeEventListener === 'function') {
            dotLottie.removeEventListener('load', handleLoad);
            dotLottie.removeEventListener('loadError', handleLoadError);
          }
        };
      }
    }

    return () => {
      cleanupListeners();
      try {
        if (typeof dotLottie.stateMachineStop === 'function') {
          dotLottie.stateMachineStop();
        }
      } catch (cleanupErr) {
        // Safe cleanup
      }
    };
  }, [dotLottie, currentSrc]);

  if (hasError) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Book a call"
        className={`bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer ${sizeClasses}`}
      >
        <span>Book a call</span>
        <ChevronRight className="w-4 h-4 stroke-[3]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Book a call"
      className={`relative cursor-pointer overflow-hidden p-0 bg-transparent border-0 flex items-center justify-center transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] ${sizeClasses}`}
    >
      <DotLottieReact
        src={currentSrc}
        autoplay
        loop
        layout={{ fit: 'cover', align: [0.5, 0.5] }}
        stateMachineId={STATE_MACHINE_ID}
        dotLottieRefCallback={setDotLottie}
        className="w-full h-full flex items-center justify-center scale-[1.18] origin-center"
        style={{ width: '100%', height: '100%' }}
      />
    </button>
  );
}

export default function BookCallButton(props) {
  return (
    <BookCallErrorBoundary {...props}>
      <BookCallButtonInner {...props} />
    </BookCallErrorBoundary>
  );
}
