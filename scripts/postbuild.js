import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (fs.existsSync(distDir)) {
  const indexHtml = path.join(distDir, 'index.html');
  const fourOhFour = path.join(distDir, '404.html');
  const noJekyll = path.join(distDir, '.nojekyll');

  // 1. Create 404.html from index.html for SPA fallback on GitHub Pages
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, fourOhFour);
    console.log('Postbuild: Successfully created dist/404.html');
  }

  // 2. Ensure .nojekyll exists in dist
  fs.writeFileSync(noJekyll, '');
  console.log('Postbuild: Successfully verified dist/.nojekyll');
}
