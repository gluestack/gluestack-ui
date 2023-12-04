function add(a, b) {
  return a + b;
}
test('add 2 + 5', () => {
  expect(add(2, 5)).toBe(7);
});
