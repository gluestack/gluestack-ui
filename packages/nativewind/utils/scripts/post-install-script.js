const fs = require('fs');
const path = require('path');
var finder = require('./find-package-json');
const { spawnSync } = require('child_process');
const processPath = process.cwd();
const f = finder(path.join(processPath, '..'));
const userDirectory = f.next().filename.replace('package.json', '');
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
  CopyDirectory(
    path.join(processPath, 'scripts', 'patches'),
    path.join(userDirectory, 'patches')
  );

  fs.writeFileSync(
    path.join(userDirectory, 'patches', 'text.txt'),
    'Hello World'
  );
  // use npm if user is using npm or yarn if user is using yarn
  try {
    const packageManager = fs.existsSync(path.join(userDirectory, 'yarn.lock'))
      ? 'yarn'
      : 'npm';

    const results = spawnSync(packageManager, ['patch-package'], {
      cwd: userDirectory,
      stdio: 'inherit',
    });
  } catch (error) {}
}

main();
