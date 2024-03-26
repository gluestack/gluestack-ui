// Import required modules
const { execSync } = require('child_process');

// Get arguments
const args = process.argv.slice(2);

// Loop through each argument
args.forEach((arg) => {
  // Extract component name
  const key = arg.replace(/^--/, '').split('=')[0];

  // Extract testing type name
  const value = arg.includes('=') ? arg.split('=')[1] : 'default';

  if (key === 'multiple') {
    process.env.multipleArgs = true;
  } else {
    // Set environment variables
    process.env[key] = value;
  }
});

if (args.length === 0) {
  process.env.emptyArgs = true;
}
// Run playwright test
execSync('yarn playwright test', { stdio: 'inherit' });
