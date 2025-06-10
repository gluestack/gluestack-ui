const path = require('path');
const fs = require('fs');

const updatePackageJson = (fileDir) => {
  const filePath = path.join(fileDir, 'package.json');
  const data = require(filePath);

  if (!data?.scripts?.postinstall?.includes('patch-package')) {
    const command = data?.scripts?.postinstall
      ? 'patch-package && ' + data?.scripts?.postinstall
      : 'patch-package';

    const newData = {
      ...data,
      scripts: { ...data?.scripts, postinstall: command },
    };

    fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
      if (err) throw err;
    });
  }
};

module.exports = { updatePackageJson };
