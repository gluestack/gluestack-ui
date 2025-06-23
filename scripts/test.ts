import { execSync } from 'child_process';

function runYarnSync() {
  try {
    console.log('🔄 Running yarn sync command...');
    // Run the dev.ts script with --sync flag to process all files and exit
    execSync('npx tsx scripts/dev.ts --sync', { stdio: 'inherit' });
    console.log('✅ Yarn sync completed successfully!');
  } catch (error) {
    console.error('❌ Error running yarn sync:', error);
    throw error;
  }
}

function runTests() {
  try {
    console.log('🧪 Running tests for starter-kit-next...');
    execSync('cd apps/starter-kit-next && yarn test', { stdio: 'inherit' });

    console.log('🧪 Running tests for kitchen-sink...');
    execSync('cd apps/kitchen-sink && yarn test', { stdio: 'inherit' });
    
    console.log('✅ All tests completed successfully!');
  } catch (error) {
    console.error('❌ Error running tests:', error);
    throw error;
  }
}

async function main() {
  try {
    // First run yarn sync and wait for completion
    await runYarnSync();
    
    // Then run all tests
    await runTests();
    
    console.log('🎉 Sync and tests completed successfully!');
  } catch (error) {
    console.error('❌ Process failed:', error);
    process.exit(1);
  }
}

main(); 