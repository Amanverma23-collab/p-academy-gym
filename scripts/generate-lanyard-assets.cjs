const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateAssets() {
  console.log('Generating Lanyard Assets...');

  // Ensure public directory exists
  const publicDir = path.resolve(__dirname, '../public');

  // ==========================================
  // 1. BRANDED LANYARD STRAP (1025 x 250)
  // ==========================================
  // In Three.js MeshLine, the texture wraps along the band length.
  // We want repeating text: ★ P ACADEMY GYM ★ HEAD COACH ★ STRENGTH & DISCIPLINE ★
  const strapWidth = 1025;
  const strapHeight = 250;

  const strapSvg = `
    <svg width="${strapWidth}" height="${strapHeight}" viewBox="0 0 ${strapWidth} ${strapHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="strapBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a1205" />
          <stop offset="50%" stop-color="#040802" />
          <stop offset="100%" stop-color="#0a1205" />
        </linearGradient>
        <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#facc15" />
          <stop offset="50%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
        <pattern id="weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke="#1c2d12" stroke-width="1.5" opacity="0.35"/>
          <line x1="8" y1="0" x2="0" y2="8" stroke="#1c2d12" stroke-width="1.5" opacity="0.35"/>
        </pattern>
      </defs>

      <!-- Base Strap -->
      <rect width="${strapWidth}" height="${strapHeight}" fill="url(#strapBg)" />
      <rect width="${strapWidth}" height="${strapHeight}" fill="url(#weave)" />

      <!-- Gold Accent Edge Stitching -->
      <line x1="0" y1="18" x2="${strapWidth}" y2="18" stroke="#facc15" stroke-width="4" stroke-dasharray="8 6" opacity="0.85" />
      <line x1="0" y1="${strapHeight - 18}" x2="${strapWidth}" y2="${strapHeight - 18}" stroke="#facc15" stroke-width="4" stroke-dasharray="8 6" opacity="0.85" />

      <!-- Inner Fine Lines -->
      <line x1="0" y1="28" x2="${strapWidth}" y2="28" stroke="#facc15" stroke-width="1" opacity="0.4" />
      <line x1="0" y1="${strapHeight - 28}" x2="${strapWidth}" y2="${strapHeight - 28}" stroke="#facc15" stroke-width="1" opacity="0.4" />

      <!-- Repeating Lanyard Text (Rendered 2.5 times across width) -->
      <g fill="url(#goldText)" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" letter-spacing="4">
        <!-- Repeat 1 -->
        <text x="30" y="142">★ P ACADEMY GYM ★</text>
        <text x="430" y="142" font-size="34" fill="#ffffff" opacity="0.9" font-weight="800">HEAD COACH</text>
        <text x="690" y="142">★ STRENGTH &amp; FORM ★</text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(strapSvg))
    .png()
    .toFile(path.join(publicDir, 'p-academy-lanyard.png'));
  console.log('✓ Created public/p-academy-lanyard.png');


  // ==========================================
  // 2. COACH ID CARD - FRONT (840 x 1266)
  // ==========================================
  const cardW = 840;
  const cardH = 1266;

  // Read trainer image and resize to fit inside the photo frame
  const trainerPhotoPath = path.join(publicDir, 'trainers/trainer-rayhan.webp');
  const trainerPhotoBuf = await sharp(trainerPhotoPath)
    .resize(760, 680, { fit: 'cover', position: 'top' })
    .toBuffer();

  const cardFrontSvg = `
    <svg width="${cardW}" height="${cardH}" viewBox="0 0 ${cardW} ${cardH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#071504" />
          <stop offset="50%" stop-color="#0f2908" />
          <stop offset="100%" stop-color="#050d03" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ca8a04" />
          <stop offset="35%" stop-color="#fef08a" />
          <stop offset="70%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>
        <linearGradient id="photoBorder" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#854d0e" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#facc15" flood-opacity="0.3"/>
        </filter>
      </defs>

      <!-- Background with Rounded corners -->
      <rect width="${cardW}" height="${cardH}" rx="36" fill="url(#cardBg)" />

      <!-- Luxury Outer Gold Border -->
      <rect x="16" y="16" width="${cardW - 32}" height="${cardH - 32}" rx="28" fill="none" stroke="url(#goldGradient)" stroke-width="4" opacity="0.9" />
      <rect x="24" y="24" width="${cardW - 48}" height="${cardH - 48}" rx="22" fill="none" stroke="#facc15" stroke-width="1" opacity="0.35" />

      <!-- Lanyard Slot Clip Area / Top Header -->
      <g transform="translate(0, 40)">
        <!-- Gym Logo Text -->
        <text x="420" y="32" text-anchor="middle" fill="url(#goldGradient)" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" letter-spacing="6" filter="url(#goldGlow)">
          P ACADEMY GYM
        </text>
        <text x="420" y="58" text-anchor="middle" fill="#ffffff" opacity="0.8" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" letter-spacing="4">
          ★ OFFICIAL ACCREDITED COACH PASS ★
        </text>
      </g>

      <!-- Photo Frame Container -->
      <rect x="36" y="126" width="768" height="688" rx="20" fill="none" stroke="url(#photoBorder)" stroke-width="4" />

      <!-- Photo Vignette Overlay Gradient -->
      <linearGradient id="photoVignette" x1="0%" y1="60%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#071504" stop-opacity="0" />
        <stop offset="100%" stop-color="#071504" stop-opacity="0.95" />
      </linearGradient>
      <rect x="40" y="130" width="760" height="680" rx="16" fill="url(#photoVignette)" />

      <!-- Name & Title Section -->
      <g transform="translate(0, 850)">
        <!-- VIP Badge Pill -->
        <rect x="290" y="0" width="260" height="34" rx="17" fill="#facc15" />
        <text x="420" y="23" text-anchor="middle" fill="#081303" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="14" letter-spacing="2">
          MASTER TRAINER &amp; FOUNDER
        </text>

        <!-- Coach Name -->
        <text x="420" y="80" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" letter-spacing="2">
          DEVENDER DAHIYA
        </text>

        <!-- Specialization summary -->
        <text x="420" y="116" text-anchor="middle" fill="#facc15" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="17" letter-spacing="3">
          HYPERTROPHY • BIOMECHANICS • MACRO NUTRITION
        </text>

        <!-- 3 Highlight Badges -->
        <g transform="translate(60, 150)">
          <!-- Badge 1 -->
          <rect x="0" y="0" width="215" height="54" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#facc15" stroke-opacity="0.3" stroke-width="1.5" />
          <text x="107" y="26" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="18">8+ YEARS</text>
          <text x="107" y="44" text-anchor="middle" fill="#d4d4d8" font-family="system-ui, sans-serif" font-weight="600" font-size="11">COACHING EXP</text>

          <!-- Badge 2 -->
          <rect x="252" y="0" width="215" height="54" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#facc15" stroke-opacity="0.3" stroke-width="1.5" />
          <text x="360" y="26" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="18">500+</text>
          <text x="360" y="44" text-anchor="middle" fill="#d4d4d8" font-family="system-ui, sans-serif" font-weight="600" font-size="11">TRANSFORMATIONS</text>

          <!-- Badge 3 -->
          <rect x="505" y="0" width="215" height="54" rx="12" fill="#ffffff" fill-opacity="0.06" stroke="#facc15" stroke-opacity="0.3" stroke-width="1.5" />
          <text x="612" y="26" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="18">4.9 ★</text>
          <text x="612" y="44" text-anchor="middle" fill="#d4d4d8" font-family="system-ui, sans-serif" font-weight="600" font-size="11">MEMBER RATING</text>
        </g>
      </g>

      <!-- Bottom Accreditation Bar & Barcode -->
      <g transform="translate(60, 1110)">
        <line x1="0" y1="0" x2="720" y2="0" stroke="#facc15" stroke-width="1" opacity="0.3" />

        <!-- Barcode simulation -->
        <g fill="#facc15" opacity="0.85" transform="translate(10, 18)">
          <rect x="0" y="0" width="4" height="42" />
          <rect x="8" y="0" width="8" height="42" />
          <rect x="20" y="0" width="3" height="42" />
          <rect x="28" y="0" width="10" height="42" />
          <rect x="44" y="0" width="4" height="42" />
          <rect x="54" y="0" width="7" height="42" />
          <rect x="66" y="0" width="3" height="42" />
          <rect x="74" y="0" width="12" height="42" />
          <rect x="92" y="0" width="5" height="42" />
          <rect x="102" y="0" width="8" height="42" />
          <rect x="115" y="0" width="3" height="42" />
          <rect x="124" y="0" width="10" height="42" />
          <rect x="140" y="0" width="4" height="42" />
          <rect x="150" y="0" width="8" height="42" />
          <rect x="164" y="0" width="5" height="42" />
          <rect x="175" y="0" width="12" height="42" />
          <rect x="194" y="0" width="4" height="42" />
          <rect x="204" y="0" width="7" height="42" />
          <rect x="216" y="0" width="4" height="42" />
          <rect x="226" y="0" width="10" height="42" />
          <rect x="242" y="0" width="3" height="42" />
          <rect x="250" y="0" width="8" height="42" />
        </g>
        <text x="140" y="84" fill="#a1a1aa" font-family="monospace" font-size="12" letter-spacing="3">
          PA-HC-2026-001
        </text>

        <!-- Right Security Seal -->
        <g transform="translate(560, 10)">
          <circle cx="60" cy="36" r="34" fill="none" stroke="url(#goldGradient)" stroke-width="2" opacity="0.8" />
          <circle cx="60" cy="36" r="28" fill="none" stroke="#facc15" stroke-dasharray="3 3" stroke-width="1.5" opacity="0.6" />
          <text x="60" y="32" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="10" letter-spacing="1">
            VERIFIED
          </text>
          <text x="60" y="46" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="9" letter-spacing="1">
            ACCREDITED
          </text>
        </g>
      </g>
    </svg>
  `;

  // Composite the trainer photo onto the SVG
  const cardFrontBase = await sharp(Buffer.from(cardFrontSvg)).png().toBuffer();
  await sharp(cardFrontBase)
    .composite([
      {
        input: trainerPhotoBuf,
        top: 130,
        left: 40,
        blend: 'over'
      },
      {
        input: Buffer.from(`
          <svg width="${cardW}" height="${cardH}">
            <rect x="36" y="126" width="768" height="688" rx="20" fill="none" stroke="#facc15" stroke-width="4" opacity="0.85" />
            <linearGradient id="photoBottomGrad" x1="0%" y1="65%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#071504" stop-opacity="0" />
              <stop offset="100%" stop-color="#071504" stop-opacity="0.95" />
            </linearGradient>
            <rect x="40" y="130" width="760" height="680" rx="16" fill="url(#photoBottomGrad)" />
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .toFile(path.join(publicDir, 'coach-id-front.png'));
  console.log('✓ Created public/coach-id-front.png');


  // ==========================================
  // 3. COACH ID CARD - BACK (840 x 1266)
  // ==========================================
  const cardBackSvg = `
    <svg width="${cardW}" height="${cardH}" viewBox="0 0 ${cardW} ${cardH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="backBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050d03" />
          <stop offset="50%" stop-color="#0b1e06" />
          <stop offset="100%" stop-color="#030802" />
        </linearGradient>
        <linearGradient id="goldBack" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ca8a04" />
          <stop offset="50%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>
        <pattern id="gridBack" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#facc15" stroke-width="1" opacity="0.04"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="${cardW}" height="${cardH}" rx="36" fill="url(#backBg)" />
      <rect width="${cardW}" height="${cardH}" rx="36" fill="url(#gridBack)" />

      <!-- Outer Borders -->
      <rect x="16" y="16" width="${cardW - 32}" height="${cardH - 32}" rx="28" fill="none" stroke="url(#goldBack)" stroke-width="4" opacity="0.9" />
      <rect x="24" y="24" width="${cardW - 48}" height="${cardH - 48}" rx="22" fill="none" stroke="#facc15" stroke-width="1" opacity="0.35" />

      <!-- P Academy Crest Center-Top -->
      <g transform="translate(420, 110)">
        <circle cx="0" cy="0" r="48" fill="#facc15" fill-opacity="0.1" stroke="#facc15" stroke-width="2" />
        <text x="0" y="14" text-anchor="middle" fill="url(#goldBack)" font-family="system-ui, sans-serif" font-weight="900" font-size="44">P</text>
      </g>

      <text x="420" y="200" text-anchor="middle" fill="url(#goldBack)" font-family="system-ui, sans-serif" font-weight="900" font-size="28" letter-spacing="6">
        P ACADEMY GYM
      </text>
      <text x="420" y="232" text-anchor="middle" fill="#ffffff" opacity="0.75" font-family="system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="4">
        COACHING STANDARDS &amp; CODE
      </text>

      <!-- Motto banner -->
      <g transform="translate(100, 270)">
        <rect x="0" y="0" width="640" height="50" rx="10" fill="#facc15" fill-opacity="0.12" stroke="#facc15" stroke-width="1.5" />
        <text x="320" y="32" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="16" letter-spacing="3">
          &quot;DISCIPLINE OVER MOTIVATION&quot;
        </text>
      </g>

      <!-- 4 Core Pillars Checklist -->
      <g transform="translate(90, 360)">
        <!-- Item 1 -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#facc15" />
          <path d="M12 20 L18 26 L28 14" fill="none" stroke="#081303" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <text x="56" y="24" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="19">Biomechanical Form Execution</text>
          <text x="56" y="46" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="500" font-size="14">Strict joint-friendly lifting to prevent injury</text>
        </g>

        <!-- Item 2 -->
        <g transform="translate(0, 80)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#facc15" />
          <path d="M12 20 L18 26 L28 14" fill="none" stroke="#081303" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <text x="56" y="24" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="19">Indian Macro &amp; Nutrition Plans</text>
          <text x="56" y="46" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="500" font-size="14">Ghar ka khana engineered for lean muscle gain</text>
        </g>

        <!-- Item 3 -->
        <g transform="translate(0, 160)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#facc15" />
          <path d="M12 20 L18 26 L28 14" fill="none" stroke="#081303" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <text x="56" y="24" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="19">Daily WhatsApp Accountability</text>
          <text x="56" y="46" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="500" font-size="14">Direct daily coach feedback on food &amp; lifts</text>
        </g>

        <!-- Item 4 -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#facc15" />
          <path d="M12 20 L18 26 L28 14" fill="none" stroke="#081303" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <text x="56" y="24" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="19">100% In-House Transformation</text>
          <text x="56" y="46" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="500" font-size="14">Never outsourced to junior or contract trainers</text>
        </g>
      </g>

      <!-- QR Consultation Box in Back Side -->
      <g transform="translate(100, 720)">
        <rect x="0" y="0" width="640" height="260" rx="18" fill="#ffffff" fill-opacity="0.04" stroke="#facc15" stroke-opacity="0.25" stroke-width="1.5" />

        <!-- Stylized QR Code placeholder -->
        <g transform="translate(40, 35)">
          <rect x="0" y="0" width="190" height="190" rx="12" fill="#ffffff" />
          <rect x="15" y="15" width="50" height="50" fill="#081303" />
          <rect x="25" y="25" width="30" height="30" fill="#ffffff" />
          <rect x="125" y="15" width="50" height="50" fill="#081303" />
          <rect x="135" y="25" width="30" height="30" fill="#ffffff" />
          <rect x="15" y="125" width="50" height="50" fill="#081303" />
          <rect x="25" y="135" width="30" height="30" fill="#ffffff" />
          <!-- QR pattern dots -->
          <rect x="80" y="25" width="20" height="20" fill="#081303" />
          <rect x="90" y="60" width="30" height="20" fill="#081303" />
          <rect x="30" y="80" width="30" height="25" fill="#081303" />
          <rect x="80" y="90" width="20" height="20" fill="#081303" />
          <rect x="130" y="85" width="35" height="20" fill="#081303" />
          <rect x="80" y="125" width="25" height="35" fill="#081303" />
          <rect x="125" y="125" width="30" height="20" fill="#081303" />
          <rect x="110" y="155" width="45" height="20" fill="#081303" />
        </g>

        <!-- QR Info Text -->
        <g transform="translate(260, 50)">
          <text x="0" y="30" fill="#facc15" font-family="system-ui, sans-serif" font-weight="900" font-size="22">
            SCAN FOR VIP PASS
          </text>
          <text x="0" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="600" font-size="15">
            Direct WhatsApp Consultation
          </text>
          <text x="0" y="86" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="400" font-size="13">
            Claim 1 Free Biomechanics &amp;
          </text>
          <text x="0" y="106" fill="#a1a1aa" font-family="system-ui, sans-serif" font-weight="400" font-size="13">
            Posture Assessment Session
          </text>

          <rect x="0" y="125" width="240" height="32" rx="8" fill="#facc15" />
          <text x="120" y="146" text-anchor="middle" fill="#081303" font-family="system-ui, sans-serif" font-weight="900" font-size="12" letter-spacing="1">
            PRIORITY VIP DESK
          </text>
        </g>
      </g>

      <!-- Bottom Gym Info -->
      <g transform="translate(420, 1060)">
        <text x="0" y="40" text-anchor="middle" fill="#facc15" font-family="system-ui, sans-serif" font-weight="700" font-size="15" letter-spacing="2">
          P ACADEMY GYM • SECTOR 12 DWARKA, DELHI
        </text>
        <text x="0" y="70" text-anchor="middle" fill="#71717a" font-family="system-ui, sans-serif" font-weight="500" font-size="12" letter-spacing="1">
          ISSUED BY P ACADEMY ATHLETICS • OFFICIAL ACCREDITATION
        </text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(cardBackSvg))
    .png()
    .toFile(path.join(publicDir, 'coach-id-back.png'));
  console.log('✓ Created public/coach-id-back.png');

  console.log('All Lanyard assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
