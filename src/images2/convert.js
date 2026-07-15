const fs = require('fs');
const sharp = require('sharp');

const files = fs.readdirSync('.'); // dossier contenant tes images

files.forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const output = file.replace(/\.(jpg|png)$/i, '.webp');
    sharp(file)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`${file} → ${output}`))
      .catch(err => console.error(err));
  }
});
