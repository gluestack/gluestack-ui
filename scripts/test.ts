import { execSync } from 'child_process';

function runTests() {
  try {
    console.log('Running tests for starter-kit-next...');
    execSync('cd apps/starter-kit-next && yarn test', { stdio: 'inherit' });

    console.log('Running tests for kitchen-sink...');
    execSync('cd apps/kitchen-sink && yarn test', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running tests:', error);
  }
}

runTests(); 