import { updateConfig } from './add-aliases';
import { componentAdder } from './add-components';

const ejectComponents = async () => {
  await componentAdder('--all');
  await updateConfig();
};

export { ejectComponents };
