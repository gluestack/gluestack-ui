const getDataFiles = () => {
  const indexData = `
 export * from "./components"
 export { config } from "./gluestack-ui.config"
 `;

  return { indexData };
};

export { getDataFiles };
