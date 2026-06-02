import websiteMapper from './website';
import kitchenSinkMapper from './kitchen-sink';
import starterKitsMapper from './starter-kits';
import figmaKitMapper from './figma-kit';

export default [
  {
    name: 'website',
    mapper: websiteMapper,
  },
  {
    name: 'kitchen-sink',
    mapper: kitchenSinkMapper,
  },
  {
    name: 'starter-kits',
    mapper: starterKitsMapper,
  },
  {
    name: 'figma-kit',
    mapper: figmaKitMapper,
  },
];
