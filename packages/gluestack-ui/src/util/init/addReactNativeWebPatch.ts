import { log, spinner } from '@clack/prompts';
import { setupReactNativeWebPatch } from '../add-patch-file';
import { execSync } from 'child_process';
import { updatePackageJson } from './modify-package-json';

export async function addReactNativeWebPatch() {
  const s = spinner();
  s.start('⏳ Adding react-native-web patch');
  const isPatchAdded = await setupReactNativeWebPatch();
  if (!isPatchAdded) {
    log.error('Failed to add react-native-web patch');
    process.exit(1);
  }
  updatePackageJson(process.cwd());
  s.stop(`\x1b[32mReact-native-web patch added.\x1b[0m`);
}
