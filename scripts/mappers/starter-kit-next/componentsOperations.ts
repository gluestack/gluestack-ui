import path from 'path';
import {
  processComponentChange,
  MapperConfig,
} from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/starter-kit-next/components/ui'),
  ignoreFiles: ['docs', 'examples', 'dependencies.json'], // ignore docs, examples and dependencies.json files
};

export const copyComponent = (component: string, event: string = 'added') => {
  processComponentChange(component, event, mapperConfig);
};

// export const processNonComponentFile = (filePath: string) => {
//   // Utils are now published as a package, no need to copy them
// };
