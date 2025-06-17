import path from 'path';
import {
  processComponentChange,
  copyUtils,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('packages/components/ui'),
  destPath: path.resolve('apps/kitchen-sink/components/ui'),
  utilsSourcePath: path.resolve('src/utils/gluestack-utils'),
  utilsDestPath: path.resolve('apps/kitchen-sink/utils/gluestack-utils'),
  ignoreFiles: ['docs', 'examples'],
};

export const copyComponent = (component: string, event: string = 'added') => {
  processComponentChange(component, event, mapperConfig);
};

export const processNonComponentFile = (filePath: string) => {
  copyUtils(mapperConfig);
};

export const processSidebarFile = (filePath: string) => {
  const sourcePath = path.resolve('src/sidebar.json');
  const destPath = path.resolve('apps/kitchen-sink/components.json');
  copySpecialFile(sourcePath, destPath);
};
