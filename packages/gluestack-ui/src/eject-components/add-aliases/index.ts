import { Resolver } from 'dns';
import fs, { exists } from 'fs-extra';
import path, { join } from 'path';
const currDir = process.cwd();

export const updateConfig = () => {
  // Check if babel.config.js exists
  // Check if babel.rc exists

  // babel.rc
  //  check for module Resolver in babel.rc
  //   if exist
  //     update alias in module Resolver
  //   if not exist create alias in babel.rc
  //     install babel module resolver
  //     update alias in module Resolver

  const babelConfigPath = path.join(currDir, 'babel.config.js');
  if (fs.existsSync(babelConfigPath)) {
    const data = fs.readFileSync(babelConfigPath, 'utf-8');
    const configObjectRegex = /return\s*([\s\S]*)};/;
    const configMatch = data.match(configObjectRegex);
    if (!configMatch) {
      console.error('Configuration object not found.');
      process.exit(1);
    }
    const returnData = configMatch[1];
    // Remove outer curly braces to make the content JSON-like
    if (!fs.existsSync(join(currDir, 'temp'))) {
      fs.mkdirSync(join(currDir, 'temp'));
    }
    // Regular expression to match both require and import statements
    const importRegex = /(require\s*\(|import\s+(?:\w+\s+)?from\s+)(["'])([^"']+)\2\s*\)?;?/g;

    // Array to store matched import paths
    const importPaths = [];
    // let match;

    // Find all matches of the import regex in the string
    // while ((match = importRegex.match(returnData))) {
    //   importPaths.push(match[3]);
    // }

    // console.log(importPaths);
    // fs.writeFileSync(join(currDir, 'temp', 'temp.js'), returnData);
    // const res = require(join(currDir, 'temp', 'temp.js'));
    // console.log(res, res.plugins);

    // // Parse the JSON-like string as an object
    // const configObject = JSON.parse(`{${jsonString}}`);

    // // Remove unwanted characters and create a JSON-parseable string
    // const jsonConfigString = returnData.replace(/(^\s*{)|(\}\s*$)/g, '');
    // // console.log(JSON.parse(`{${jsonConfigString}}`));
  }
};
