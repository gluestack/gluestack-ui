// Transform code To Remove Wrapper And Function Name
export function transformedCode(code: string) {
  return `function App() {
    return <Wrapper>${code}</Wrapper>;
  };`;
}
