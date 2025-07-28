// metro-gluestack-resolver.js
// SDK 52 compatibility resolver for @gluestack-ui-nightly packages

function createGluestackResolver() {
    return (context, moduleName, platform) => {
      // Handle @gluestack-ui-nightly/core subpath imports
      if (moduleName.startsWith('@gluestack-ui-nightly/core/')) {
        const parts = moduleName.split('/');
        
        if (parts.length >= 4) { // e.g., @gluestack-ui-nightly/core/overlay/creator
          const component = parts[2]; // 'overlay'
          const type = parts[3]; // 'creator' or 'aria'
          
          let redirected;
          if (type === 'creator') {
            redirected = `@gluestack-ui-nightly/core/src/${component}/creator/index.tsx`;
          } else if (type === 'aria') {
            redirected = `@gluestack-ui-nightly/core/src/${component}/aria/index.ts`;
          }
          
          if (redirected) {
            console.log(`🔄 Gluestack SDK 52: ${moduleName} -> ${redirected}`);
            return context.resolveRequest(context, redirected, platform);
          }
        }
      }
      
      // Handle @gluestack-ui-nightly/utils subpath imports
      if (moduleName.startsWith('@gluestack-ui-nightly/utils/')) {
        const subpath = moduleName.replace('@gluestack-ui-nightly/utils/', '');
        const redirected = `@gluestack-ui-nightly/utils/src/${subpath}/index.ts`;
        console.log(`🔄 Gluestack SDK 52: ${moduleName} -> ${redirected}`);
        return context.resolveRequest(context, redirected, platform);
      }
      
      // For all other imports, use default resolution
      return context.resolveRequest(context, moduleName, platform);
    };
  }
  
  module.exports = { createGluestackResolver };