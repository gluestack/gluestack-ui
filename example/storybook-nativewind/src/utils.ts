// Transform code To Remove Wrapper And Function Name
export function transformedCode(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  let codeFormat = code;
  const importRegex = /import[^;]*;/g;
  codeFormat = codeFormat.replace(importRegex, '');
  if (type === 'function') {
    return `function App() {
      ${codeFormat}
    return <Wrapper><${componentName} /></Wrapper>;
  };`;
  }
  return `function App() {
    return <Wrapper>${codeFormat}</Wrapper>;
  };`;
}

export function transformedThemedCode(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <GluestackUIProvider><${componentName} /></GluestackUIProvider>;
  };`;
  }
  return `function App() {
    return <GluestackUIProvider>${code}</GluestackUIProvider>;
  };`;
}

export function transformedCodeWithoutWrapper(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <${componentName} />;
  };`;
  }
  return `function App() {
    return ${code};
  };`;
}
