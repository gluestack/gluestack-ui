const { execSync } = require('child_process');
const fs = require('fs');

async function verifyPackages() {
  console.log('🔍 Verifying preview packages before build...');
  
  // Read package.json to get dependencies
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  
  const gluestackPackages = Object.keys(deps).filter(dep => 
    dep.startsWith('@gluestack-ui-nightly/') || 
    dep.startsWith('@gluestack-nightly/') ||
    dep === 'gluestack-ui-nightly'
  );
  
  console.log('📦 Checking packages:', gluestackPackages);
  
  for (const pkg of gluestackPackages) {
    const version = deps[pkg];
    console.log(`🔍 Verifying ${pkg}@${version}...`);
    
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      try {
        execSync(`npm view ${pkg}@${version} version`, { 
          stdio: 'pipe',
          timeout: 30000 
        });
        console.log(`✅ ${pkg}@${version} is available`);
        break;
      } catch (error) {
        attempts++;
        if (attempts === maxAttempts) {
          console.error(`❌ ${pkg}@${version} is not available after ${maxAttempts} attempts`);
          process.exit(1);
        }
        console.log(`⏳ ${pkg}@${version} not ready, waiting... (attempt ${attempts}/${maxAttempts})`);
        await new Promise(resolve => setTimeout(resolve, 15000)); // Wait 15s
      }
    }
  }
  
  console.log('🎉 All packages verified and ready!');
}

verifyPackages().catch(console.error);