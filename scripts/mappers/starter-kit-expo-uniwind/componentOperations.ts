import path from 'path';
import fs from 'fs';
import { isValidComponent } from '../utils/componentOperations';
import { getProviderFileAction, transformCssInteropToUniwind, transformStyledToUniwind } from './transforms';

const MAPPER_NAME = 'starter-kit-expo-uniwind';
const sourcePath = path.resolve('src/components/ui');
const destPath = path.resolve('apps/starter-kit-expo-uniwind/components/ui');

/**
 * Copies a single component directory into the uniwind app.
 *
 * - Provider files are routed through getProviderFileAction (skip nativewind
 *   variants, rename .uniwind variants to canonical names).
 * - All other .tsx/.ts files that contain cssInterop are run through the
 *   AST-based transform before writing.
 * - Everything else is copied verbatim.
 */
const syncComponent = (component: string) => {
  if (!isValidComponent(component)) return;

  const srcDir = path.join(sourcePath, component);
  const destDir = path.join(destPath, component);

  if (!fs.existsSync(srcDir) || !fs.statSync(srcDir).isDirectory()) return;

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const files = entries.filter(
    (e) => e.isFile() && e.name !== 'dependencies.json'
  );

  if (files.length === 0) return;

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (const file of files) {
    const providerAction = getProviderFileAction(component, file.name);

    // Skip nativewind-specific provider files
    if (providerAction.action === 'skip') continue;

    const destFileName = providerAction.outputName ?? file.name;
    const srcFilePath = path.join(srcDir, file.name);
    const destFilePath = path.join(destDir, destFileName);

    // Provider renamed files are already the correct (uniwind) source — just copy
    if (providerAction.action === 'rename') {
      fs.copyFileSync(srcFilePath, destFilePath);
      console.log(`  📄 ${component}/${file.name} → ${destFileName}`);
      continue;
    }

    // For .tsx / .ts files: apply nativewind → withUniwind transforms if needed
    const ext = path.extname(file.name);
    if (ext === '.tsx' || ext === '.ts') {
      const source = fs.readFileSync(srcFilePath, 'utf-8');
      const hasCssInterop =
        source.includes('cssInterop') && source.includes("'nativewind'");
      // Use `styled(` to avoid false positives from withStyleContext / useStyleContext
      const hasStyled =
        source.includes('styled(') && source.includes("'nativewind'");

      if (hasCssInterop || hasStyled) {
        let code = source;
        const allWarnings: string[] = [];

        if (hasCssInterop) {
          const result = transformCssInteropToUniwind(code, file.name);
          code = result.code;
          allWarnings.push(...result.warnings);
        }
        if (hasStyled) {
          const result = transformStyledToUniwind(code, file.name);
          code = result.code;
          allWarnings.push(...result.warnings);
        }

        if (allWarnings.length > 0) {
          console.warn(`  ⚠️  ${component}/${file.name}:`);
          allWarnings.forEach((w) => console.warn(`      ${w}`));
        }
        fs.writeFileSync(destFilePath, code, 'utf-8');
        console.log(`  ✨ ${component}/${file.name} (transformed)`);
        continue;
      }
    }

    // No transform needed — plain copy
    fs.copyFileSync(srcFilePath, destFilePath);
  }

  console.log(`✅ Synced: ${component} → ${MAPPER_NAME}`);
};

const deleteComponent = (component: string) => {
  const destDir = path.join(destPath, component);
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
    console.log(`🗑️  Deleted: ${component} from ${MAPPER_NAME}`);
  }
};

export const copyComponent = (component: string, event: string = 'added', filePath?: string) => {
  if (!isValidComponent(component)) return;

  console.log(`📝 [${MAPPER_NAME}] ${event}: ${component}`);

  if (event === 'removed') {
    if (filePath) {
      // A specific file was removed — delete only that file in dest
      const componentSourcePath = path.join(sourcePath, component);
      const relPath = path.relative(componentSourcePath, filePath);
      const destFilePath = path.join(destPath, component, relPath);

      if (fs.existsSync(destFilePath)) {
        const stats = fs.statSync(destFilePath);
        if (stats.isDirectory()) {
          fs.rmSync(destFilePath, { recursive: true, force: true });
          console.log(`🗑️ Removed subdirectory: ${relPath} from ${component} in ${MAPPER_NAME}`);
        } else {
          fs.unlinkSync(destFilePath);
          console.log(`🗑️ Removed file: ${relPath} from ${component} in ${MAPPER_NAME}`);
        }
      }
    } else {
      deleteComponent(component);
    }
  } else {
    syncComponent(component);
  }
};
