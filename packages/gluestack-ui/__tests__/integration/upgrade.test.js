const fs = require('fs-extra');
const path = require('path');

// Mock the updateFileImports function behavior
function updateImportPath(importPath) {
  // Special case for nativewind-utils imports
  if (importPath.startsWith('@gluestack-ui/nativewind-utils')) {
    return '@gluestack-ui/utils/nativewind-utils';
  }

  // Check if it's a utils import (already in correct format)
  if (importPath.startsWith('@gluestack-ui/utils/')) {
    // Already in the correct format, don't modify
    return importPath;
  }

  // Check if already upgraded (contains /core/ and ends with /creator)
  if (importPath.includes('/core/') && importPath.endsWith('/creator')) {
    // Already in the new format, don't modify
    return importPath;
  }

  // Extract component name from import path
  const componentName = importPath.replace('@gluestack-ui/', '');
  const newImportPath = `@gluestack-ui/core/${componentName}/creator`;
  return newImportPath;
}

describe('Upgrade command - Import transformation', () => {
  test('should upgrade old imports correctly', () => {
    expect(updateImportPath('@gluestack-ui/image')).toBe('@gluestack-ui/core/image/creator');
    expect(updateImportPath('@gluestack-ui/button')).toBe('@gluestack-ui/core/button/creator');
    expect(updateImportPath('@gluestack-ui/input')).toBe('@gluestack-ui/core/input/creator');
  });

  test('should not duplicate nested paths on multiple upgrades', () => {
    // First upgrade
    const firstUpgrade = updateImportPath('@gluestack-ui/image');
    expect(firstUpgrade).toBe('@gluestack-ui/core/image/creator');
    
    // Second upgrade - should not change
    const secondUpgrade = updateImportPath(firstUpgrade);
    expect(secondUpgrade).toBe('@gluestack-ui/core/image/creator');
    
    // Third upgrade - should still not change
    const thirdUpgrade = updateImportPath(secondUpgrade);
    expect(thirdUpgrade).toBe('@gluestack-ui/core/image/creator');
  });

  test('should handle nativewind-utils imports correctly', () => {
    expect(updateImportPath('@gluestack-ui/nativewind-utils')).toBe('@gluestack-ui/utils/nativewind-utils');
    
    // Should not change if already upgraded
    expect(updateImportPath('@gluestack-ui/utils/nativewind-utils')).toBe('@gluestack-ui/utils/nativewind-utils');
  });

  test('should not modify utils imports', () => {
    expect(updateImportPath('@gluestack-ui/utils/common')).toBe('@gluestack-ui/utils/common');
    expect(updateImportPath('@gluestack-ui/utils/hooks')).toBe('@gluestack-ui/utils/hooks');
  });

  test('should handle various component names', () => {
    const components = [
      'accordion',
      'action-sheet',
      'alert',
      'alert-dialog',
      'avatar',
      'button',
      'checkbox',
      'divider',
      'fab',
      'form-control',
      'icon',
      'image',
      'input',
      'link',
      'menu',
      'modal',
      'popover',
      'pressable',
      'progress',
      'radio',
      'select',
      'slider',
      'spinner',
      'switch',
      'textarea',
      'toast',
      'tooltip'
    ];

    components.forEach(component => {
      const oldImport = `@gluestack-ui/${component}`;
      const newImport = updateImportPath(oldImport);
      expect(newImport).toBe(`@gluestack-ui/core/${component}/creator`);
      
      // Verify it doesn't change on subsequent upgrades
      expect(updateImportPath(newImport)).toBe(newImport);
    });
  });
});

