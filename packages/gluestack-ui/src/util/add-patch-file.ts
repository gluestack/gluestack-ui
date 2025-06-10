import fs from 'fs';
import path from 'path';
import { log } from '@clack/prompts';

/**
 * Sets up the patch file for react-native-web in the patches directory
 * @param projectPath - Root path of the project
 * @param templatePath - Path to the scripts/template directory
 * @returns Promise with the result of the operation
 */
async function setupReactNativeWebPatch(
  projectPath: string = process.cwd()
): Promise<boolean> {
  try {
    // Define paths
    const templatePath = path.join(
      __dirname,
      '..',
      '..',
      'template',
      'nextjs',
      'next15'
    );
    const patchesDir = path.join(projectPath, 'patches');
    const patchFileName = 'react-native-web+0.19.13.patch';

    const sourcePatchPath = path.join(templatePath, patchFileName);
    const targetPatchPath = path.join(patchesDir, patchFileName);

    // Check if template patch file exists
    if (!fs.existsSync(sourcePatchPath)) {
      log.error(`Template patch file not found at: ${sourcePatchPath}`);
      return false;
    }

    // Create patches directory if it doesn't exist
    if (!fs.existsSync(patchesDir)) {
      fs.mkdirSync(patchesDir, { recursive: true });
    }

    // Copy patch file if it doesn't exist or force update
    if (!fs.existsSync(targetPatchPath)) {
      fs.copyFileSync(sourcePatchPath, targetPatchPath);
    } else {
      // Compare files to see if they're different
      const sourceContent = fs.readFileSync(sourcePatchPath, 'utf8');
      const targetContent = fs.readFileSync(targetPatchPath, 'utf8');

      if (sourceContent !== targetContent) {
        // Backup existing file
        const backupPath = `${targetPatchPath}.backup`;
        fs.copyFileSync(targetPatchPath, backupPath);

        // Update patch file
        fs.copyFileSync(sourcePatchPath, targetPatchPath);
      }
    }

    return true;
  } catch (error) {
    log.error(
      error instanceof Error ? error.message : 'Unknown error occurred'
    );
    return false;
  }
}

/**
 * Validates the patch file setup
 * @param patchPath - Path to the patch file
 * @returns boolean indicating if patch file is valid
 */
function validatePatchFile(patchPath: string): boolean {
  try {
    if (!fs.existsSync(patchPath)) {
      return false;
    }

    const content = fs.readFileSync(patchPath, 'utf8');
    // Basic validation - check if it looks like a patch file
    return content.includes('diff --git') || content.includes('@@');
  } catch {
    return false;
  }
}

export { setupReactNativeWebPatch, validatePatchFile };
