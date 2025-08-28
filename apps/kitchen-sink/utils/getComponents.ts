import components from '../constants/sidebar.json';
import {
  getNestedComponents,
  type NestedComponents,
} from '../types/components';

export function getAllComponents(): NestedComponents {
  return getNestedComponents(components);
}

