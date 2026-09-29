const sharp = require('sharp');
const path = require('path');

async function createCoachCard() {
  const cardW = 840;
  const cardH = 1266;
  const publicDir = path.resolve(__dirname, '../public');

  const photoPath = path.join(publicDir, 'trainers/trainer-rayhan.webp');
  const photoBuf = await sharp(photoPath)
    .resize(cardW, cardH, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.05, saturation: 1.15 })
    .sharpen()
    .toBuffer();

  const overlaySvg = `
    <svg width="${cardW}" height="${cardH}" viewBox="0 0 ${cardW} ${cardH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#040a02" stop-opacity="0" />
          <stop offset="30%" stop-color="#040a02" stop-opacity="0.65" />
          <stop offset="65%" stop-color="#040a02" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#040a02" stop-opacity="0.98" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#facc15" />
          <stop offset="50%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
      </defs>

      <!-- Smooth dark vignette at the bottom of the card -->
      <rect x="0" y="880" width="${cardW}" height="386" fill="url(#bottomFade)" />

      <!-- Subtle gold accent rule -->
      <line x1="180" y1="1080" x2="660" y2="1080" stroke="#facc15" stroke-width="2" opacity="0.6" />

      <!-- Coach Name at the base of the card -->
      <text x="420" y="1145" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="46" letter-spacing="4">
        DEVENDER DAHIYA
      </text>
      <text x="420" y="1185" text-anchor="middle" fill="url(#goldGrad)" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="19" letter-spacing="5">
        HEAD COACH • P ACADEMY
      </text>
    </svg>
  `;

  await sharp(photoBuf)
    .composite([{
      input: Buffer.from(overlaySvg),
      top: 0,
      left: 0
    }])
    .toFile(path.join(publicDir, 'coach-card.png'));

  console.log('✓ Successfully generated public/coach-card.png');
}

createCoachCard().catch(err => {
  console.error('Error creating card:', err);
  process.exit(1);
});
