const fs = require('fs');
const path = require('path');
var finder = require('./find-package-json');
const { exec } = require('child_process');
const findWorkspaceRoot = require('find-yarn-workspace-root');
const { updatePackageJson } = require('./modify-package-json');

const processPath = process.cwd();
const workspaceRoot = findWorkspaceRoot(processPath);
const f = finder(path.join(processPath, '..'));
const filename = f.next().filename;
const userDirectory = filename.replace('package.json', '');

function CopyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      CopyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installPatch(cwd) {
  // use npm if user is using npm or yarn if user is using yarn
  const packageManager = fs.existsSync(path.join(cwd, 'yarn.lock'))
    ? 'yarn'
    : 'npx';

  const command = packageManager + ' patch-package';
  exec(command, {
    cwd: cwd,
    stdio: 'inherit',
  });
}

function main() {
  let rootDir = userDirectory;
  if (workspaceRoot && workspaceRoot !== userDirectory) {
    rootDir = workspaceRoot;
  }
  CopyDirectory(
    path.join(processPath, 'scripts', 'patches'),
    path.join(rootDir, 'patches')
  );
  installPatch(rootDir);
  updatePackageJson(rootDir);
}

main();
