const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    const logoPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'logo.png');
    const outputDir = path.join(__dirname, '..', 'public');
    
    // Create favicon.ico (32x32)
    await sharp(logoPath)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    // Create favicon-32x32.png
    await sharp(logoPath)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon-32x32.png'));
    
    // Create favicon-16x16.png
    await sharp(logoPath)
      .resize(16, 16)
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
    
    // Create apple-touch-icon.png (180x180)
    await sharp(logoPath)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    // Create site.webmanifest
    const manifest = {
      name: 'Sri Ananth Hospital',
      short_name: 'Sri Ananth',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    };
    
    fs.writeFileSync(
      path.join(outputDir, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
