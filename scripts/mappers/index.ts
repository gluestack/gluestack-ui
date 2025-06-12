import websiteMapper from './website';
import kitchenSinkMapper from './kitchen-sink';
import starterKitExpoMapper from './starter-kit-expo';
import starterKitNextMapper from './starter-kit-next';
import todoAppMapper from './todo-app';

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
    name: 'starter-kit-expo',
    mapper: starterKitExpoMapper,
  },
  {
    name: 'starter-kit-next',
    mapper: starterKitNextMapper,
  },
  {
    name: 'todo-app',
    mapper: todoAppMapper,
  },
];
