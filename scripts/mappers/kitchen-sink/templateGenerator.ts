import path from 'path';
import * as fileOps from '../utils/fileOperations';
import * as regex from '../utils/regex';
import {
  componentPreviewerTemplate,
  importTemplate,
  wrappedComponentTemplate,
} from './templates';

interface ImportMap {
  [key: string]: string[];
}

export const generateCodePreviewer = (
  exampleName: string,
  component: string,
  importMap: ImportMap
) => {
  const sourcePath = path.resolve('src/components/ui');
  const examplePath = path.join(sourcePath, component, 'examples', exampleName);
  const codePath = path.join(examplePath, 'template.handlebars');
  const argsPath = path.join(examplePath, 'meta.json');
  try {
    if (!fileOps.pathExists(codePath) || !fileOps.pathExists(argsPath)) {
      console.error(`Missing files for example ${exampleName} in ${component}`);
      return {
        code: `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`,
        title: exampleName,
        exampleName: exampleName,
      };
    }
    let code = fileOps.readTextFile(codePath);
    const meta = fileOps.readJsonFile(argsPath);
    const argTypes = JSON.stringify(meta.argTypes || {}, null, 2);
    const title = JSON.stringify(meta.title);

    // Console log the handlebar code and props
    console.log(`\n📝 Handlebar Code for ${component}/${exampleName}:`);
    console.log('─'.repeat(80));
    console.log(code.trim());
    console.log('─'.repeat(80));

    console.log(
      `\n📋 Props/ArgTypes from meta.json for ${component}/${exampleName}:`
    );
    console.log('─'.repeat(80));
    console.log(argTypes);
    console.log('─'.repeat(80));

    // Extract default values from argTypes
    const defaultValues: Record<string, any> = {};
    if (meta.argTypes) {
      Object.entries(meta.argTypes).forEach(([key, value]: [string, any]) => {
        if (value.defaultValue !== undefined) {
          defaultValues[key] = value.defaultValue;
        }
      });
    }
    console.log('defaultValues', defaultValues);
    console.log('code', code.trim());

    // Use regex-based replacement to compile handlebars template
    let compiledCode = code.trim();

    // Step 1: Convert escaped handlebars to literal braces
    // Template file has: source=\\{{ (two backslashes in the file)
    // When read as string, it stays as: source=\\{{ (two backslashes)
    // We need to remove both backslashes to get: source={{
    // Match \\ (escaped as \\\\ in regex) followed by {{ or }} and remove the backslashes
    const beforeReplace = compiledCode;
    compiledCode = compiledCode.replace(/\\\\{{/g, '{{'); // Replace \\{{ with {{
    compiledCode = compiledCode.replace(/\\\\}}/g, '}}'); // Replace \\}} with }}

    // Debug: Check if replacement happened
    if (beforeReplace !== compiledCode) {
      console.log(`\n🔄 Escaped braces converted:`);
      console.log('─'.repeat(80));
      console.log('Before:', beforeReplace.substring(0, 200));
      console.log('After:', compiledCode.substring(0, 200));
      console.log('─'.repeat(80));
    }

    // Step 2: Replace handlebars variables {{variableName}} with default values
    // Match {{variableName}} pattern and replace with defaultValue if exists
    compiledCode = compiledCode.replace(
      /\{\{(\w+)\}\}/g,
      (match, variableName) => {
        // Check if we have a default value for this variable
        if (defaultValues.hasOwnProperty(variableName)) {
          const defaultValue = defaultValues[variableName];
          // Handle different value types - return proper syntax
          if (typeof defaultValue === 'string') {
            // Don't add quotes - template already has them (e.g., variant="{{variant}}")
            return defaultValue;
          } else if (typeof defaultValue === 'boolean') {
            return defaultValue.toString();
          } else if (typeof defaultValue === 'number') {
            return defaultValue.toString();
          } else if (defaultValue === null || defaultValue === undefined) {
            return 'null';
          } else {
            // For objects/arrays, stringify them properly
            return JSON.stringify(defaultValue);
          }
        }
        // If no default value, keep the original handlebars syntax
        return match;
      }
    );

    console.log(`\n🔧 Default Values extracted from argTypes:`);
    console.log('─'.repeat(80));
    console.log(JSON.stringify(defaultValues, null, 2));
    console.log('─'.repeat(80));

    console.log(
      `\n✨ Compiled Code (regex replacement with default values) for ${component}/${exampleName}:`
    );
    console.log('─'.repeat(80));
    console.log(compiledCode);
    console.log('─'.repeat(80));
    console.log(`\n`);

    // Generate variant examples for "basic" example only
    // Store variants in a property that can be accessed later
    let variantExamples: Array<{ code: string; title: string }> = [];
    if (exampleName === 'basic' && meta.argTypes) {
      variantExamples = generateVariantExamples(
        component,
        code.trim(),
        meta.argTypes,
        compiledCode
      );
    }
    
    // Store variants in importMap as a special property (we'll extract it later)
    if (variantExamples.length > 0) {
      (importMap as any).__variantExamples = variantExamples;
    }

    // Add reactLive imports to importMap
    if (meta.reactLive) {
      Object.entries(meta.reactLive).forEach(([key, value]) => {
        if (!importMap[value as string]) {
          importMap[value as string] = [];
        }
        if (!importMap[value as string].includes(key)) {
          importMap[value as string].push(key);
        }
      });
    }
    
    // Return compiled code with title/name
    // The compiledCode already has all variables replaced with default values
    return {
      code: compiledCode,
      title: meta.title || exampleName,
      exampleName: exampleName,
    };
  } catch (error) {
    console.error(
      `:x: Error building CodePreviewer for Example:${exampleName} in ${component}:`,
      error
    );
    return {
      code: `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`,
      title: exampleName,
      exampleName: exampleName,
    };
  }
};

// Generate variant examples for basic example
const generateVariantExamples = (
  component: string,
  originalTemplate: string,
  argTypes: Record<string, any>,
  defaultCompiledCode: string
): Array<{ code: string; title: string }> => {
  // Get default values for all argTypes
  const defaultValues: Record<string, any> = {};
  Object.entries(argTypes).forEach(([key, value]: [string, any]) => {
    if (value.defaultValue !== undefined) {
      defaultValues[key] = value.defaultValue;
    }
  });

  // Find all argTypes that have options array
  const argTypesWithOptions: Array<{
    name: string;
    options: string[];
    defaultValue: any;
  }> = [];

  Object.entries(argTypes).forEach(([key, value]: [string, any]) => {
    if (value.options && Array.isArray(value.options)) {
      argTypesWithOptions.push({
        name: key,
        options: value.options,
        defaultValue: value.defaultValue,
      });
    }
  });

  // If no argTypes with options, return empty array
  if (argTypesWithOptions.length === 0) {
    return [];
  }

  // Generate variants: each argType with its options, keeping others at default
  const allVariants: Array<Record<string, string>> = [];

  argTypesWithOptions.forEach((argType) => {
    argType.options.forEach((option) => {
      // Create combination with this option and defaults for others
      const combination: Record<string, string> = { ...defaultValues };
      combination[argType.name] = option;
      allVariants.push(combination);
    });
  });

  console.log(
    `\n🎨 Generating ${allVariants.length} variant examples for ${component}/basic:`
  );
  console.log('─'.repeat(80));

  // Compile all variants and return them with titles
  const compiledVariants: Array<{ code: string; title: string }> = [];

  allVariants.forEach((combination, index) => {
    // Create variant name: basicbuttondefault, basicbuttondestructive, etc.
    // Use the non-default value(s) in the name
    const nonDefaultValues = Object.entries(combination)
      .filter(([key, value]) => defaultValues[key] !== value)
      .map(([key, value]) => {
        // Capitalize first letter for display
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      .join(' ');
    
    // Create display title
    const variantTitle = nonDefaultValues || 'Default';
    
    // Compile template with this combination
    let variantCode = originalTemplate;
    
    // Replace escaped braces first
    variantCode = variantCode.replace(/\\\\{{/g, '{{');
    variantCode = variantCode.replace(/\\\\}}/g, '}}');
    
    // Replace variables with combination values
    Object.entries(combination).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      variantCode = variantCode.replace(regex, value);
    });

    console.log(`\n${index + 1}. Variant: ${variantTitle}`);
    console.log('─'.repeat(80));
    console.log('Combination:', JSON.stringify(combination, null, 2));
    console.log('─'.repeat(80));
    console.log('Compiled Code:');
    console.log('─'.repeat(80));
    console.log(variantCode);
    console.log('─'.repeat(80));
    
    // Add to compiled variants array with title
    compiledVariants.push({
      code: variantCode,
      title: variantTitle,
    });
  });

  console.log(`\n✅ Generated ${allVariants.length} variant examples\n`);
  
  return compiledVariants;
};

export const copyProcessedAnnotations = (
  sourcePath: string,
  destinationPath: string,
  component: string
): boolean => {
  try {
    // Read source file content
    const sourceContent = fileOps.readTextFile(sourcePath);
    const importMap: ImportMap = {};

    // Process each annotation match and collect examples with titles
    const examples: Array<{ code: string; title: string }> = [];
    let match;
    while ((match = regex.CodePreviewerRegex.exec(sourceContent)) !== null) {
      const exampleName = match[1].trim();
      const processedAnnotation = generateCodePreviewer(
        exampleName,
        component,
        importMap
      );
      examples.push(processedAnnotation);
      
      // Check if this example generated variant examples (for basic example)
      if ((importMap as any).__variantExamples) {
        examples.push(...(importMap as any).__variantExamples);
        // Clear the variant examples after adding them
        delete (importMap as any).__variantExamples;
      }
    }

    // If we found and processed any annotations
    if (examples.length > 0) {
      // Generate import statements
      const importContent = Object.entries(importMap)
        .map(([importPath, imports]) => {
          return importTemplate(imports, importPath);
        })
        .join('\n');

      // Convert each example function to a named component with heading
      const exampleComponents = examples
        .map((example, index) => {
          // Extract the function body (remove "function Example()" and closing brace)
          // The example is: "function Example() {\n  return (\n    ...\n  )\n}"
          let functionBody = example.code.trim();
          
          // Remove "function Example() {" from the start
          functionBody = functionBody.replace(/^function\s+Example\s*\(\)\s*\{/, '');
          
          // Remove closing brace from the end
          functionBody = functionBody.replace(/\}\s*$/, '');
          
          // Trim and indent properly
          functionBody = functionBody.trim();
          
          // Create named component with proper indentation
          const componentName = `Example${index + 1}`;
          return `const ${componentName} = () => {\n${functionBody}\n};\n`;
        })
        .join('\n');

      // Generate JSX to render all components with headings
      const renderedComponents = examples
        .map((example, index) => {
          const componentName = `Example${index + 1}`;
          // Capitalize first letter of title
          const headingTitle = example.title.charAt(0).toUpperCase() + example.title.slice(1);
          return `          <Heading size="md" className="text-typography-800 mb-4 mt-6">${headingTitle}</Heading>\n          <Example${index + 1} />`;
        })
        .join('\n');

      // Wrap the processed content in a component
      const wrappedContent = wrappedComponentTemplate(
        exampleComponents.trim(),
        renderedComponents
      );

      // Combine imports with wrapped content
      const finalContent = `${importContent}\n\n${wrappedContent}`;
      // console.log("finalcontent",finalContent); the

      // Ensure destination directory exists and write file
      const destDir = path.dirname(destinationPath);
      fileOps.ensureDirectoryExists(destDir);
      fileOps.writeTextFile(destinationPath, finalContent);

      return true;
    }

    return false;
  } catch (error) {
    console.error(
      `Error processing annotations from ${sourcePath} to ${destinationPath}:`,
      error
    );
    return false;
  }
};
