const fs = require('fs');
const path = require('path');
const processPath = process.cwd();
console.log('🚀 ~ processPath:', processPath);
const userDirectory = path.resolve(processPath, '..', '..', '..');
console.log('🚀 ~ userDirectory:', userDirectory);

function CopyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      CopyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  // check if next.config.mjs or next.config.js file exists in project
  if (
    !fs.existsSync(path.join(userDirectory, 'next.config.mjs')) &&
    !fs.existsSync(path.join(userDirectory, 'next.config.js'))
  ) {
    return;
  }

  CopyDirectory(
    path.join(processPath, 'scripts', 'patches'),
    path.join(userDirectory, 'patches')
  );
  // read package json file
  const packageJsonPath = path.join(userDirectory, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  // add postinstall script
  packageJson.scripts = packageJson.scripts || {};
  if (
    packageJson.scripts.postinstall &&
    !packageJson.scripts.postinstall.includes('patch-package')
  ) {
    packageJson.scripts.postinstall = `${packageJson.scripts.postinstall} && patch-package`;
  } else if (!packageJson.scripts.postinstall) {
    packageJson.scripts.postinstall = 'patch-package';
  }
  // write package json file
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

main();
