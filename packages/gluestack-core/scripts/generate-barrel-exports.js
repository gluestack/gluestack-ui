const fs = require('fs');
const path = require('path');

const components = [
  'accordion',
  'actionsheet', 
  'alert',
  'alert-dialog',
  'avatar',
  'button',
  'checkbox',
  'fab',
  'form-control',
  'icon',
  'image',
  'input',
  'link',
  'menu',
  'modal',
  'overlay',
  'popover',
  'pressable',
  'progress',
  'radio',
  'select',
  'slider',
  'switch',
  'textarea',
  'toast',
  'tooltip'
];

const subdirs = ['creator', 'aria'];

// Create barrel files for each component and subdir
components.forEach(component => {
  subdirs.forEach(subdir => {
    const srcPath = path.join(__dirname, '..', 'src', component, subdir);
    const barrelPath = path.join(__dirname, '..', component, `${subdir}.ts`);
    
    // Check if the source directory exists
    if (fs.existsSync(srcPath)) {
      // Ensure the component directory exists
      const componentDir = path.dirname(barrelPath);
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
      }
      
      // Create barrel file
      const content = `export * from '../lib/esm/${component}/${subdir}';`;
      fs.writeFileSync(barrelPath, content);
      console.log(`Created: ${barrelPath}`);
    }
  });
});

console.log('Barrel exports generated successfully!'); 