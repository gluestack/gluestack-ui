const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const { parse } = require('@babel/parser');
const generate = require('@babel/generator').default;
const babel = require('@babel/core');

const packagesPath = path.join(__dirname, '..', 'packages');
const storybookExamplePath = path.join(__dirname, '..', 'example', 'storybook');

const babelTemplate = require('./templates/babel-template')();
const npmIgnoreTemplate = require('./templates/npmignore-template')();
const packageJsonTemplate = require('./templates/packagejson-template')();
const srcIndexTemplate = require('./templates/src-index-template')();
const tsConfigTemplate = require('./templates/tsconfig-template')();

const inputName = argv._[0];

if (inputName) {
  main();
} else {
  console.error('Please enter the `{package name}`.');
  process.exit(1);
}

function main() {
  try {
    // Check for already existing packages with the same name
    const packages = fs.readdirSync(packagesPath);
    for (const pName of packages) {
      if (pName === inputName) {
        throw 'ERR: Package already exists';
      }
      const packagePath = path.join(packagesPath, pName);
      const packageJsonPath = findPackageJson(packagePath);

      if (packageJsonPath) {
        const packageJson = require(packageJsonPath);
        const packageName = packageJson.name;
        if (packageName === '@gluestack-ui/' + inputName) {
          throw `ERR: Package name already exists in ${packageJsonPath}`;
        }
      }
    }

    let newPackagePath = path.join(packagesPath, inputName);

    // Create new package folder
    fs.mkdirSync(newPackagePath);

    // Create all the files from templates
    writeFile(path.join(newPackagePath, 'babel.config.js'), babelTemplate);
    writeFile(path.join(newPackagePath, '.npmignore'), npmIgnoreTemplate);
    writeFile(path.join(newPackagePath, 'src', 'index.tsx'), srcIndexTemplate);
    writeFile(path.join(newPackagePath, 'tsconfig.json'), tsConfigTemplate);
    writeFile(
      path.join(newPackagePath, 'package.json'),
      packageJsonTemplate.replace('{**PACKAGE_NAME**}', inputName)
    );

    // Add alias in tsconfig.json in storybook for local development
    let tsconfigStorybookPath = path.join(
      storybookExamplePath,
      'tsconfig.json'
    );
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigStorybookPath, 'utf8'));

    tsconfig.compilerOptions.paths['@gluestack-ui/' + inputName] = [
      '../../packages/' + inputName + '/src',
    ];

    fs.writeFileSync(tsconfigStorybookPath, JSON.stringify(tsconfig, null, 2));

    // Add alias in babel.config.js in storybook for local development
    let babelConfigStorybookPath = path.join(
      storybookExamplePath,
      'babel.config.js'
    );

    const babelConfig = fs.readFileSync(babelConfigStorybookPath, 'utf-8');

    const ast = parse(babelConfig, { sourceType: 'module' });

    babel.traverse(ast, {
      ReturnStatement(path) {
        if (path.node.argument.type === 'ObjectExpression') {
          let parent = path.getFunctionParent();
          if (
            parent.node.id &&
            parent.node.id.name &&
            parent.node.id.name === 'getAliases'
          ) {
            path.node.argument.properties.push(
              babel.types.objectProperty(
                babel.types.stringLiteral('@gluestack-ui/' + inputName),
                babel.types.callExpression(
                  babel.types.memberExpression(
                    babel.types.identifier('path'),
                    babel.types.identifier('join')
                  ),
                  [
                    babel.types.identifier('__dirname'),
                    babel.types.stringLiteral(
                      '../../packages/' + inputName + '/src'
                    ),
                  ]
                )
              )
            );
          }
        }
      },
    });

    const { code } = babel.transformFromAstSync(ast);
    fs.writeFileSync(babelConfigStorybookPath, code, 'utf8');

    // console.log(
    //   chalk.green(
    //     'Successfully Created the package and added aliases to storybook'
    //   )
    // );
  } catch (error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
}

function findPackageJson(dirPath) {
  const packageJsonPath = path.join(dirPath, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    return packageJsonPath;
  }
  return null;
}

function writeFile(filePath, content) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  fs.writeFileSync(filePath, content, {
    encoding: 'utf8',
    flag: 'w',
  });
}
