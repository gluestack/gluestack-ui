import path from 'path';
import {
  processComponentChange,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/kitchen-sink/components/ui'),
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};

export const copyComponent = (component: string, event: string = 'added') => {
  processComponentChange(component, event, mapperConfig);
};

export const processSidebarFile = (filePath: string) => {
  const destPath = path.resolve('apps/kitchen-sink/constants/sidebar.json');
  copySpecialFile(filePath, destPath);
};
