export default (headingText: string) => {
  return headingText.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};
