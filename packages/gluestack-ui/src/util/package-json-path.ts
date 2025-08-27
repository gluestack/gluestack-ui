import finder from 'find-package-json';
import { dirname } from 'path';

const currDir = process.cwd();

const getPackageJsonPath = (): string => {
  var f = finder(currDir);
  return f.next().filename || '';
};

export const rootPackageJsonPath = getPackageJsonPath();
export const projectRootPath: string = dirname(rootPackageJsonPath);
