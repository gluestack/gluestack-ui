import { updateConfig } from './add-aliases';
import { componentAdder } from './add-components';
import { addGluestackConfig } from './add-config';

const ejectComponents = async () => {
  await addGluestackConfig();
  await componentAdder('--all');
  await updateConfig();
};

export { ejectComponents };
