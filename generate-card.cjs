const sharp = require('sharp');

async function createPurePhotoCard() {
  const width = 840;
  const height = 1266;
  
  // Resize photo to fill 840x1266 perfectly
  const photo = await sharp('public/coach-pure-photo.png')
    .resize(width, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Create an elegant rounded card frame with dual luxury gold border
  const borderSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FACC15" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#CA8A04" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#FACC15" stop-opacity="0.95"/>
        </linearGradient>
        <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.25"/>
          <stop offset="15%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" rx="45" ry="45" fill="url(#vignette)"/>
      <rect x="10" y="10" width="${width - 20}" height="${height - 20}" rx="38" ry="38" fill="none" stroke="url(#goldGlow)" stroke-width="4.5"/>
      <rect x="18" y="18" width="${width - 36}" height="${height - 36}" rx="30" ry="30" fill="none" stroke="#FACC15" stroke-width="1.5" opacity="0.6"/>
    </svg>
  `);

  const maskSvg = Buffer.from(`
    <svg width="${width}" height="${height}">
      <rect x="0" y="0" width="${width}" height="${height}" rx="45" ry="45" fill="#FFFFFF"/>
    </svg>
  `);

  const roundedPhoto = await sharp(photo)
    .composite([
      { input: maskSvg, blend: 'dest-in' }
    ])
    .png()
    .toBuffer();

  await sharp(roundedPhoto)
    .composite([
      { input: borderSvg }
    ])
    .png()
    .toFile('public/coach-id-front.png');

  // Also write to coach-pure-photo-card.png
  await sharp(roundedPhoto)
    .composite([
      { input: borderSvg }
    ])
    .png()
    .toFile('public/coach-pure-photo-card.png');

  console.log('Successfully created pure photo card in public/coach-id-front.png');
}

createPurePhotoCard().catch(console.error);
