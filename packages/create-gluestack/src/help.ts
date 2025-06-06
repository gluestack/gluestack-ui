export function displayHelp() {
  console.log('Usage: create-gluestack [project-name] [options]');
  console.log('Options:\n');
  // framework options
  console.log('  framework options:');
  console.log(`    --next-app-router         Next.js with app router
    --expo-router             Expo app with Expo router V3
    --universal               Universal app (Next.js with app router + Expo router)
    `);
  // help options
  console.log('  help options:');
  console.log(`    --help                    show help
    -h                        show help
    `);
  process.exit(0);
}
