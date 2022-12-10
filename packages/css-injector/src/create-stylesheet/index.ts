import { StyleSheet } from "react-native";

const createStyleSheet = (stylesObject = {}) => {
  console.log("IOS AND ANDROID");
  if (!stylesObject) return { styles: {} };

  let cleanStyles = JSON.parse(JSON.stringify(stylesObject));

  const styles = StyleSheet.create(cleanStyles);
  return { ids: {}, styles: styles, fullStyles: stylesObject };
};

export default createStyleSheet;
