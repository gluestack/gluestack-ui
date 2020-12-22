const fs = require('fs');
const path = require('path');
const parseArguments = (argv) => {
  const moduleName = argv[3];
  return moduleName;
};

const projectSrcFolder = path.resolve(__dirname, 'src');
const exampleSrcFolder = path.resolve(__dirname, 'example', 'src');
const moduleName = parseArguments(process.argv);

const generateFilesAndFolders = () => {
  // Create Project directory structure
  if (!fs.existsSync(`${projectSrcFolder}/${moduleName}`)) {
    fs.mkdirSync(`${projectSrcFolder}/${moduleName}`);
  }

  fs.writeFileSync(
    `${projectSrcFolder}/${moduleName}/index.ts`,
    'export * from "./src/native"'
  );
  fs.writeFileSync(
    `${projectSrcFolder}/${moduleName}/index.web.ts`,
    'export * from "./src/web"'
  );

  if (!fs.existsSync(`${projectSrcFolder}/${moduleName}/src`)) {
    fs.mkdirSync(`${projectSrcFolder}/${moduleName}/src`);
  }

  // native

  if (!fs.existsSync(`${projectSrcFolder}/${moduleName}/src/native`)) {
    fs.mkdirSync(`${projectSrcFolder}/${moduleName}/src/native`);
  }

  fs.writeFileSync(`${projectSrcFolder}/${moduleName}/src/native/index.ts`, '');

  // web
  if (!fs.existsSync(`${projectSrcFolder}/${moduleName}/src/web`)) {
    fs.mkdirSync(`${projectSrcFolder}/${moduleName}/src/web`);
  }

  fs.writeFileSync(
    `${projectSrcFolder}/${moduleName}/src/web/index.ts`,
    `export * from "@react-aria/${moduleName}"`
  );

  // Create example directory structure
  if (!fs.existsSync(`${exampleSrcFolder}/components/${moduleName}`)) {
    fs.mkdirSync(`${exampleSrcFolder}/components/${moduleName}`);
  }

  fs.writeFileSync(`${exampleSrcFolder}/components/${moduleName}/index.ts`, '');
};

generateFilesAndFolders();
