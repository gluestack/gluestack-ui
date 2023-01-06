const folders = [
  'config',
  'config/jest',
  'scripts',
  'config/webpack/persistentCachen',
];

const fse = require('fs-extra');
const path = require('path');

getTemplate();
function getTemplate() {
  const srcDir = path.resolve(__dirname, '../');
  const destDir = path.resolve(process.cwd(), './');
  console.log(srcDir, destDir);
  // To copy a folder or file, select overwrite accordingly
  try {
    fs.copySync(srcDir, destDir, { overwrite: true | false });
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
}
