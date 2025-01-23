// this script is used to add imports to all the examples of the components.
const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { componentsImportMap } = require('./componentsImportList');

function removeEmptyLines(code) {
  return code
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n');
}

function removeComments(code) {
  // Remove only JSX comments wrapped in curly braces
  code = code.replace(/{\s*\/\*[\s\S]*?\*\/\s*}|{\s*\/\/.*?\s*}/g, '');

  const cleanedCode = removeEmptyLines(code);
  return cleanedCode;
}

function hasExistingImports(code) {
  const importRegex = /^\s*import\s+.*?['"].*?['"]\s*;?\s*$/gm;
  return importRegex.test(code);
}

// Function to extract code blocks from MDX content
function extractCodeBlocks(mdxContent) {
  const codeBlockRegex = /code: `([\s\S]*?)`/g;
  const matches = [];
  let match;

  while ((match = codeBlockRegex.exec(mdxContent)) !== null) {
    matches.push({
      fullMatch: match[0],
      codeContent: match[1],
      startIndex: match.index,
      endIndex: match.index + match[0].length,
    });
  }

  return matches;
}

// Updated component extraction function using the provided logic
function extractComponents(code) {
  const controller = require('jscodeshift');
  const ast = controller(code);
  const componentsList = new Set();
  const codeVariables = [];

  ast.find(controller.VariableDeclaration).forEach((item) => {
    codeVariables.push(item.value.declarations[0].id.name);
  });

  ast.find(controller.JSXIdentifier).forEach((item) => {
    if (item.parentPath.name === 'openingElement') {
      componentsList.add(item.value.name);
    }
  });

  ast.find(controller.JSXAttribute).forEach((item) => {
    if (item.value.name.name === 'as' && item.value.value.expression.name) {
      componentsList.add(item.value.value.expression.name);
    }
  });

  ast.find(controller.ConditionalExpression).forEach((item) => {
    if (item.value.consequent?.name) {
      componentsList.add(item.value.consequent.name);
    }
    if (item.value.alternate?.name) {
      if (item.value.alternate.name !== 'undefined') {
        componentsList.add(item.value.alternate.name);
      }
    }
  });

  ast.find(controller.Identifier).forEach((item) => {
    const specialIdentifiers = [
      'React',
      'Platform',
      'colors',
      'useToast',
      'createIcon',
    ];
    if (specialIdentifiers.includes(item.value.name)) {
      componentsList.add(item.value.name);
    }
  });

  return Array.from(componentsList).filter(
    (element) => !codeVariables.includes(element)
  );
}

// Updated import generation function using the provided logic
function generateImports(componentsList) {
  const controller = require('jscodeshift');

  const matchedComponentsImport = Object.entries(componentsImportMap)
    .map(([key, value]) => {
      const filteredComponents = value.filter((item) =>
        componentsList.includes(item)
      );

      if (filteredComponents.length > 0) {
        return { [key]: filteredComponents };
      }
      return undefined;
    })
    .filter((item) => item !== undefined);

  const leftComponents = componentsList.filter(
    (component) =>
      !matchedComponentsImport.some((entry) =>
        Object.values(entry)[0].includes(component)
      )
  );

  const allComponentsImport =
    leftComponents?.length > 0
      ? [
          ...matchedComponentsImport,
          { ['lucide-react-native']: leftComponents },
        ]
      : [...matchedComponentsImport];

  return allComponentsImport
    .map((entry) => {
      const [key, value] = Object.entries(entry)[0];
      const importPath = (() => {
        switch (key) {
          case 'react':
            return key;
          case 'react-native':
            return key;
          case 'tailwindcss/colors':
            return key;
          case 'lucide-react-native':
            return key;
          case 'react-native-svg':
            return key;
          default:
            return `@/components/ui/${key}`;
        }
      })();

      if (key === 'react' || key === 'tailwindcss/colors') {
        return `import ${value[0]} from "${importPath}";`;
      } else {
        return `import { ${value.join(', ')} } from "${importPath}";`;
      }
    })
    .join('\n');
}

// Function to check if code needs wrapping
function needsComponentWrapping(code) {
  // First, check if code already has a function or component structure
  const hasFunction = /function\s+\w+\s*\([^)]*\)/.test(code);
  const hasConstFunction = /const\s+\w+\s*=\s*(\([^)]*\)\s*=>|function)/.test(
    code
  );
  const hasExportDefault = /export\s+default\s+/.test(code);

  // If it already has any of these structures, don't wrap it
  if (hasFunction || hasConstFunction || hasExportDefault) {
    return false;
  }

  // Check if code contains JSX or starts with return
  const containsJSX = /<[A-Z][A-Za-z0-9]*/.test(code) || /<[a-z]+>/.test(code);
  const startsWithReturn = /^\s*return\s*[({]/.test(code);

  // Code needs wrapping if it contains JSX or starts with return
  return containsJSX || startsWithReturn;
}

// Function to wrap code in functional component
function wrapInFunctionalComponent(code) {
  return `function Example() {
  return (
    ${code}
  );
}`;
}

// Function to update transformCode parameter
function updateTransformCode(mdxContent, blockStartIndex) {
  const transformCodeRegex =
    /transformCode:\s*\(code\)\s*=>\s*{\s*return\s*transformedCode\(code[^}]*\);\s*}/;
  const match = mdxContent.slice(blockStartIndex).match(transformCodeRegex);

  if (match) {
    const newTransformCode = `transformCode: (code) => {
        return transformedCode(code, 'function', 'Example');
      }`;
    return (
      mdxContent.slice(0, blockStartIndex + match.index) +
      newTransformCode +
      mdxContent.slice(blockStartIndex + match.index + match[0].length)
    );
  }

  return mdxContent;
}

// Function to update a single MDX file
function updateMDXFile(filePath) {
  try {
    let mdxContent = fs.readFileSync(filePath, 'utf8');
    const codeBlocks = extractCodeBlocks(mdxContent);

    for (let i = codeBlocks.length - 1; i >= 0; i--) {
      const block = codeBlocks[i];
      let processedCode = block.codeContent.trim();

      // First check if imports exist
      if (hasExistingImports(processedCode)) {
        continue; // Skip this code block if imports exist
      }

      // Then check and handle functional component wrapping
      const needsWrapping = needsComponentWrapping(processedCode);
      if (needsWrapping) {
        processedCode = wrapInFunctionalComponent(processedCode);
        mdxContent = updateTransformCode(mdxContent, block.startIndex);
      }

      // Finally, generate and add imports
      const components = extractComponents(processedCode);
      const imports = generateImports(components);

      // Remove comments from the code
      processedCode = removeComments(processedCode);

      // Combine imports with processed code
      const newCodeContent = `code: \`${imports}${
        imports ? '\n' : ''
      }${processedCode}\``;

      mdxContent =
        mdxContent.slice(0, block.startIndex) +
        newCodeContent +
        mdxContent.slice(block.endIndex);
    }

    fs.writeFileSync(filePath, mdxContent);
    // eslint-disable-next-line no-console
    console.log(`✅ Updated ${path.basename(filePath)}`);
    // eslint-disable-next-line no-console
    console.log('📁 File path:', path.dirname(filePath));
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

// Function to process all component MDX files
function processAllComponents(componentsDir) {
  //to test single component
  // const componentName = 'accordion';
  // const mdxPath = path.join(
  //   componentsDir,
  //   componentName,
  //   'index.nw.stories.mdx'
  // );
  // if (fs.existsSync(mdxPath)) {
  //   updateMDXFile(mdxPath);
  // }
  const components = fs.readdirSync(componentsDir);

  components.forEach((component) => {
    const mdxPath = path.join(componentsDir, component, 'index.nw.stories.mdx');
    if (fs.existsSync(mdxPath)) {
      updateMDXFile(mdxPath);
    }
  });
}

// Main execution
const componentsDir = path.join(__dirname, '../src/components');
// eslint-disable-next-line no-console
console.log('🚀 Starting MDX update process...');
processAllComponents(componentsDir);
// eslint-disable-next-line no-console
console.log('✨ MDX update process completed!');
