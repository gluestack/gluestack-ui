export function displayHelp() {
  console.log('Usage: create-gluestack [project-name] [options]');
  console.log('Options:\n');
  // framework options
  console.log('  framework options:');
  console.log(`    --starter-kit-next        Next.js with app router (NativeWind)
    --starter-kit-expo        Expo app with Expo router (NativeWind - default)
    --starter-kit-expo-uniwind Expo app with Expo router (UniWind)
    --universal               Universal app (Coming Soon)
    `);
  // styling options
  console.log('  styling options (optional):');
  console.log(`    --nativewind              Use NativeWind (Tailwind v3) - default
    --uniwind                 Use UniWind (Tailwind v4) - only for Expo
    `);
  // help options
  console.log('  help options:');
  console.log(`    --help                    show help
    -h                        show help
    `);
  console.log('\nExamples:');
  console.log(`  create-gluestack my-app
  create-gluestack my-app --starter-kit-expo --uniwind
  create-gluestack my-app --starter-kit-expo-uniwind
  create-gluestack my-app --starter-kit-next
    `);
  process.exit(0);
}
