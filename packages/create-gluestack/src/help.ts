export function displayHelp() {
  console.log('Usage: create-gluestack [project-name] [options]');
  console.log('Options:\n');
  // framework options
  console.log('  framework options:');
  console.log(`    --starter-kit-next        Next.js with app router
    --starter-kit-expo        Expo app with Expo router
    --universal               Universal app (Next.js with app router + Expo router)
    `);
  // help options
  console.log('  help options:');
  console.log(`    --help                    show help
    -h                        show help
    `);
  process.exit(0);
}
