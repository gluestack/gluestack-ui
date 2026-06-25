export function displayHelp() {
  console.log('Usage: create-gluestack [project-name] [options]');
  console.log('\nOptions:\n');
  // framework options
  console.log('  Framework options:');
  console.log(`    --starter-kit-expo             Expo app with Expo Router (NativeWind v5, Tailwind v4)
    --starter-kit-expo-uniwind     Expo app with Expo Router (UniWind, Tailwind v4)
    `);
  // styling options
  console.log('  Styling engine options (for --starter-kit-expo):');
  console.log(`    --nativewind                   Use NativeWind v5 (default)
    --uniwind                      Use UniWind
    `);
  // package manager options
  console.log('  Package manager options:');
  console.log(`    --use-npm                      Use npm (default)
    --use-yarn                     Use yarn
    --use-pnpm                     Use pnpm
    --use-bun                      Use bun
    `);
  // help options
  console.log('  Help options:');
  console.log(`    --help, -h                     Show help
    `);
  console.log('\nExamples:');
  console.log(`  create-gluestack my-app
  create-gluestack my-app --starter-kit-expo
  create-gluestack my-app --starter-kit-expo --nativewind
  create-gluestack my-app --starter-kit-expo-uniwind
    `);
  process.exit(0);
}
