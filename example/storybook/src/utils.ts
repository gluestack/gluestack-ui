// Transform code To Remove Wrapper And Function Name
export function transformedCode(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <Wrapper><${componentName} /></Wrapper>;
  };`;
  }
  return `function App() {
    return <Wrapper>${code}</Wrapper>;
  };`;
}
