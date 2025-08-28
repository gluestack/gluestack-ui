import * as fs from 'fs-extra';
import * as path from 'path';

const isIncludedInDependency = (arr: any[], inputString: string) => {
  return arr.includes(inputString);
};

function traverseFolder(
  dir: any,
  prefixes: any[] = [],
  deps: Set<any> = new Set()
) {
  const files = fs.readdirSync(dir);
  files.forEach((file: any) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (isIncludedInDependency(prefixes, file)) {
        deps.add(file);
      } else {
        traverseFolder(filePath, prefixes, deps);
      }
    }
  });
  return deps;
}

const getExactDependenciesFromNodeModules = (
  dir: any,
  prefixes: any[] = []
) => {
  const nodeModulesDirectory = path.join(dir, 'node_modules');
  const dependenciesSet = traverseFolder(nodeModulesDirectory, prefixes);

  const dependencyList: any = [];
  dependenciesSet.forEach(dependency => {
    dependencyList.push(dependency);
  });

  return dependencyList;
};

function startsWithAny(string: any, array: any) {
  for (let i = 0; i < array.length; i++) {
    if (string.startsWith(array[i])) {
      return true;
    }
  }
  return false;
}

const getDependenciesFromNodeModules = (
  dir: any,
  nodeModulePackages: any = []
) => {
  const myDependencies = new Map();

  const traverse = (directory: any) => {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (stat.isFile() && file === 'package.json') {
        try {
          const packageJsonContent = fs.readFileSync(filePath, 'utf8');
          const packageJson = JSON.parse(packageJsonContent);

          if (
            packageJson.name &&
            startsWithAny(packageJson.name, nodeModulePackages)
          ) {
            //TODO: add dependencies if needed
            myDependencies.set(packageJson.name, {});
          }
        } catch (error) {
          // Skip invalid package.json files
        }
      }
    }
  };

  nodeModulePackages.map((nodeModulePackage: any) => {
    const nodeModulesDirectory = path.join(
      dir,
      'node_modules',
      nodeModulePackage
    );

    if (fs.existsSync(nodeModulesDirectory)) {
      traverse(nodeModulesDirectory);
    }
  });

  const dependencyList: any = [];

  myDependencies.forEach((packageDependencies, packageName) => {
    dependencyList.push(packageName);
    Object.entries(packageDependencies).forEach(([dependencyName]) => {
      dependencyList.push(dependencyName);
    });
  });

  return dependencyList;
};

const checkIfWorkspace = (currDir: any) => {
  return checkIfWorkspaceRecursively(currDir);
};

const checkIfWorkspaceRecursively: any = (currDir: any) => {
  const parentFiles = fs.readdirSync(currDir);
  const metadata: any = {};

  if (parentFiles.includes('package.json')) {
    try {
      const packageJsonPath = path.resolve(currDir, 'package.json');
      const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
      const parentPackageJson = JSON.parse(packageJsonContent);

      const workspaces = parentPackageJson.workspaces;
      if (workspaces) {
        metadata['isWorkspace'] = true;
        metadata['workspaces'] = workspaces;
        metadata['workspacePath'] = currDir;
      }
    } catch (error) {
      // Skip invalid package.json files
    }
  }

  const parentDir = path.resolve(currDir, '..');
  if (parentDir !== currDir) {
    const parentMetadata = checkIfWorkspaceRecursively(parentDir);
    if (parentMetadata.isWorkspace) {
      return parentMetadata;
    }
  }

  return metadata;
};

export {
  getDependenciesFromNodeModules,
  checkIfWorkspace,
  getExactDependenciesFromNodeModules,
};