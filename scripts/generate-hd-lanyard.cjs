const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateHDLanyard() {
  console.log('Generating Ultra-HD Glitch-Free Lanyard Strap Texture (No Coach Name)...');

  const publicDir = path.resolve(__dirname, '../public');

  // Ultra-crisp 2048 x 512 texture for high-DPI screens
  const strapWidth = 2048;
  const strapHeight = 512;

  const strapSvg = `
    <svg width="${strapWidth}" height="${strapHeight}" viewBox="0 0 ${strapWidth} ${strapHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Deep Athletic Fabric Gradient -->
        <linearGradient id="strapBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a1506" />
          <stop offset="50%" stop-color="#040802" />
          <stop offset="100%" stop-color="#0a1506" />
        </linearGradient>

        <!-- Rich Metallic Gold Gradient for Text and Borders -->
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="25%" stop-color="#facc15" />
          <stop offset="70%" stop-color="#eab308" />
          <stop offset="100%" stop-color="#ca8a04" />
        </linearGradient>

        <pattern id="ribbonWeave" width="16" height="16" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="16" y2="16" stroke="#1f3812" stroke-width="2" opacity="0.35"/>
          <line x1="16" y1="0" x2="0" y2="16" stroke="#1f3812" stroke-width="2" opacity="0.35"/>
        </pattern>
      </defs>

      <!-- Base Fabric -->
      <rect width="${strapWidth}" height="${strapHeight}" fill="url(#strapBg)" />
      <rect width="${strapWidth}" height="${strapHeight}" fill="url(#ribbonWeave)" />

      <!-- Top and Bottom Gold Solid Edge Trims -->
      <rect x="0" y="0" width="${strapWidth}" height="14" fill="url(#goldGradient)" />
      <rect x="0" y="${strapHeight - 14}" width="${strapWidth}" height="14" fill="url(#goldGradient)" />

      <!-- Precise Athletic Stitching -->
      <line x1="0" y1="38" x2="${strapWidth}" y2="38" stroke="#facc15" stroke-width="6" stroke-dasharray="14 10" opacity="0.9" />
      <line x1="0" y1="${strapHeight - 38}" x2="${strapWidth}" y2="${strapHeight - 38}" stroke="#facc15" stroke-width="6" stroke-dasharray="14 10" opacity="0.9" />

      <!-- Fine Inner Guidelines -->
      <line x1="0" y1="58" x2="${strapWidth}" y2="58" stroke="#facc15" stroke-width="2" opacity="0.35" />
      <line x1="0" y1="${strapHeight - 58}" x2="${strapWidth}" y2="${strapHeight - 58}" stroke="#facc15" stroke-width="2" opacity="0.35" />

      <!-- Bold, Perfectly Centered, Non-Overlapping Gym Branding (No Coach Name) -->
      <!-- Cycle 1: Exactly centered at x = 512 in [0, 1024] -->
      <g font-family="Arial Black, Impact, system-ui, sans-serif" font-weight="900">
        <text
          x="512"
          y="282"
          text-anchor="middle"
          dominant-baseline="central"
          fill="url(#goldGradient)"
          font-size="78"
          letter-spacing="7"
        >
          &#9733;  P ACADEMY GYM  &#9733;
        </text>

        <!-- Cycle 2: Exactly centered at x = 1536 in [1024, 2048] -->
        <text
          x="1536"
          y="282"
          text-anchor="middle"
          dominant-baseline="central"
          fill="url(#goldGradient)"
          font-size="78"
          letter-spacing="7"
        >
          &#9733;  P ACADEMY GYM  &#9733;
        </text>
      </g>
    </svg>
  `;

  const destPath = path.join(publicDir, 'p-academy-lanyard.png');
  await sharp(Buffer.from(strapSvg))
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(destPath);

  // Copy to all component/asset fallback paths
  const compPath = path.resolve(__dirname, '../src/components/lanyard.png');
  fs.copyFileSync(destPath, compPath);

  const assetPath = path.resolve(__dirname, '../src/assets/lanyard/lanyard.png');
  if (fs.existsSync(path.dirname(assetPath))) {
    fs.copyFileSync(destPath, assetPath);
  }

  console.log('✓ Ultra-clean lanyard texture created with zero overlaps and no coach name!');
}

generateHDLanyard().catch(console.error);
