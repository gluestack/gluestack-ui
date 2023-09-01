const path = require('path');
const fs = require('fs-extra');
const parser = require('@babel/parser');
const generator = require('@babel/generator');
const { template } = require('./template');

const packagesPath = path.join(
  __dirname,
  '../../../packages/themed/src/components'
);
const componentsIndexPath = path.join(packagesPath, 'index.tsx');

function main() {
  const exportedComponents = getIndexFile(componentsIndexPath);
  getStyles(exportedComponents);
}

function getStyles(exportedComponents) {
  exportedComponents.map((exportedComponent) => {
    const componentStylePath = path.join(
      packagesPath,
      exportedComponent,
      'styled-components'
    );
    getComponentStyles(componentStylePath, exportedComponent);
  });
}

function getComponentStyles(componentStylePath, exportedComponent) {
  // console.log(componentStylePath);
  if (fs.existsSync(componentStylePath)) {
    const fileNames = fs.readdirSync(componentStylePath);

    fileNames.map((fileName) => {
      const filePath = path.join(
        packagesPath,
        exportedComponent,
        'styled-components',
        fileName
      );
      getStyledObject(filePath, fileName, exportedComponent);
    });
  }
}

let secondParamObject = null;
function traverse(node) {
  if (
    node.type === 'CallExpression' &&
    node.callee.name === 'styled' &&
    node.arguments.length >= 2 &&
    node.arguments[1].type === 'ObjectExpression'
  ) {
    secondParamObject = node.arguments[1];
  }
  for (const key in node) {
    if (node[key] && typeof node[key] === 'object') {
      traverse(node[key]);
    }
  }
  // console.log('traverse', JSON.stringify(secondParamObject, null, 2));
  return secondParamObject;
}

function getValues(values) {
  let valuesArr = [];
  Object.keys(values).map((val) => {
    valuesArr.push(val);
  });
  return valuesArr;
}

function generatePropsTable(variants, fileName, exportedComponent) {
  let finalArr = [];
  Object.keys(variants).map((value) => {
    finalArr = [
      ...finalArr,
      {
        key: value,
        value: getValues(variants[value]),
      },
    ];
  });
  //   propsObject={
  // name:path.parse(fileName).name,

  //   };
  // console.log(variants, fileName, exportedComponent);
  return finalArr;
}

function getComponentStoryPath(component) {
  const allStoriesPath = path.join(__dirname, '../src/components');
  const dirNames = fs.readdirSync(allStoriesPath);
  let componentStoryPath = '';
  dirNames.map((dir) => {
    let stats = fs.statSync(path.join(allStoriesPath, dir));
    if (stats.isDirectory()) {
      const files = fs.readdirSync(path.join(allStoriesPath, dir));
      for (let i = 0; i < files.length; i++) {
        if (files[i] == component) {
          componentStoryPath = path.join(allStoriesPath, dir, files[i]);
        }
      }
      return `No stories found for ${component}`;
    }
  });
  if (componentStoryPath !== '') {
    return componentStoryPath;
  } else {
    return `No stories found for ${component}`;
  }
}

function writeStory(tableString, storyPath, fileName) {
  // console.log(tableString, storyPath, fileName);
  if (fileName === 'index' || fileName === 'Root') {
    if (fs.existsSync(path.join(storyPath, 'index.stories.mdx'))) {
      const data = fs.readFileSync(
        path.join(storyPath, 'index.stories.mdx'),
        'utf8'
      );
      const examplesHeading = '### Examples';
      const insertIndex = data.indexOf(examplesHeading);
      let updatedData;
      if (insertIndex !== -1) {
        updatedData =
          data.substring(0, insertIndex) +
          `### Props
         
         ${tableString}` +
          '\n\n' +
          // examplesHeading +
          data.substring(insertIndex);
      }
      fs.writeFile(
        path.join(storyPath, 'index.stories.mdx'),
        updatedData,
        'utf8',
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          /* eslint-disable no-console */
          console.log('Content updated successfully.');
        }
      );
    }
  }
}

function getStyledObject(filePath, fileName, exportedComponent) {
  const fileData = fs.readFileSync(filePath, 'utf-8');

  try {
    // Parse the code
    const ast = parser.parse(fileData, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
    let secondParamObjectAst = traverse(ast);

    if (secondParamObjectAst) {
      let secondParamObjectString = generator.default(
        secondParamObjectAst,
        {}
      ).code;
      try {
        /* eslint-disable no-eval */
        let secondParamObject = eval(
          `function getObjFromString(){return${secondParamObjectString}};  getObjFromString();`
        );

        if (secondParamObject.variants !== undefined) {
          let propsArr = generatePropsTable(
            secondParamObject.variants,
            fileName,
            exportedComponent
          );
          // console.log(propsArr, exportedComponent, fileName);
          const componentStoryPath = getComponentStoryPath(exportedComponent);
          const table = template(
            propsArr,
            path.parse(fileName).name == 'Root' ||
              path.parse(fileName).name == 'index'
              ? exportedComponent
              : fileName
          );
          writeStory(table, componentStoryPath, path.parse(fileName).name);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      /* eslint-disable no-console */
      console.log('Second parameter object not found.');
    }
  } catch (err) {
    console.error(err);
  }
  // const styledParameterRegex =
  //   /styled\([\s\S]*?,\s*({[\s\S]*?}),\s*{[\s\S]*?}\);/;

  // const match = fileData.match(styledParameterRegex);

  // if (match) {
  //   const secondParamObject = JSON.parse(match[1]);
  //   console.log(secondParamObject);
  // } else {
  //   console.log('Second parameter object not found.');
  // }
}

function getIndexFile(componentsIndexPath) {
  const data = fs.readFileSync(componentsIndexPath, 'utf-8');
  const exportRegex = /export\s+\*\s+from\s+'\.\/([\w/]+)';/g;
  const exportedComponents = [];
  let match;
  while ((match = exportRegex.exec(data)) !== null) {
    exportedComponents.push(match[1]);
  }
  return exportedComponents;
}

main();
