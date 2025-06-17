import path from 'path';
import {
  processComponentChange,
  copyUtils,
  MapperConfig,
} from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('packages/components/ui'),
  destPath: path.resolve('apps/todo-app/components/ui'),
  utilsSourcePath: path.resolve('src/utils/gluestack-utils'),
  utilsDestPath: path.resolve('apps/todo-app/utils/gluestack-utils'),
  ignoreFiles: ['docs', 'examples'],
};

export const copyComponent = (component: string, event: string = 'added') => {
  processComponentChange(component, event, mapperConfig);
};

export const processNonComponentFile = (filePath: string) => {
  copyUtils(mapperConfig);
};
