const fs = require('fs');
const path = require('path');
const componentPath = path.join(__dirname, '../ui-components');

// console.log(componentPath);
main();

function main() {
  const paths = fs.readdirSync(componentPath);

  // console.log(paths);
  for (let i = 0; i < paths.length; i++) {
    if (
      fs.existsSync(
        path.join(__dirname, '../ui-components', paths[i], 'config.json')
      )
    ) {
      // fs.renameSync(
      //   path.join(__dirname, '../ui-components', paths[i], 'package.json'),
      //   path.join(__dirname, '../ui-components', paths[i], 'config.json')
      // );
      const newObj = {
        dependencies: {},
        keywords: {},
      };

      const data = fs.readFileSync(
        path.join(__dirname, '../ui-components', paths[i], 'config.json'),
        { encoding: 'utf8' }
      );
      // if (paths[i] == 'Actionsheet') {
      //   console.log(JSON.parse(data).dependencies);
      // }
      newObj.dependencies = { ...JSON.parse(data).dependencies };
      newObj.keywords = [...JSON.parse(data).keywords];
      fs.writeFileSync(
        path.join(__dirname, '../ui-components', paths[i], 'config.json'),
        JSON.stringify(newObj)
      );
      // console.log(data);
    }
  }
}
