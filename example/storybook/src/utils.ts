// Transform code To Remove Wrapper And Function Name
export function transformedCode(code: string) {
  if (code.includes('function')) {
    return `function App() {
      ${code}
    return <Wrapper><Example /></Wrapper>;
  };`;
  }
  return `function App() {
    return <Wrapper>${code}</Wrapper>;
  };`;
}
