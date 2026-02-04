import websiteMapper from './website';
import kitchenSinkMapper from './kitchen-sink';
import starterKitsMapper from './starter-kits';
import starterKitExpoUniwindMapper from './starter-kit-expo-uniwind';

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
    name: 'starter-kit-expo-uniwind',
    mapper: starterKitExpoUniwindMapper,
  },
];
