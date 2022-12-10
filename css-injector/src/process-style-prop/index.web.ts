import { addCss } from "../utils/inject";
import createDeclarationBlock from "../utils/create-declaration-block";
import hash from "../hash";
import { isMediaOrPseudo, deepClone, createCssRule } from "../utils/common";
import flattenStyle from "../utils/flatten-style";

const processStyleProp = (styleWithQuery: any) => {
  if (!styleWithQuery) return { ids: "", styles: {}, fullStyles: {} };
  styleWithQuery = flattenStyle(styleWithQuery);

  let ids = "";
  const cleanStyles = deepClone(styleWithQuery);

  const mediaQueriesAndPseudoClasses =
    Object.keys(styleWithQuery).filter(isMediaOrPseudo);

  mediaQueriesAndPseudoClasses.map((query) => {
    const css = createDeclarationBlock(styleWithQuery[query]);
    const stringHash = `rnmq-${hash(`${query}${css}`)}`;
    const rule = createCssRule(stringHash, css);

    addCss(`${stringHash}`, rule);
    delete cleanStyles[query];

    ids = `${!!ids ? ids + " " : ""}${stringHash}`;
  });

  return { ids, styles: cleanStyles, fullStyles: styleWithQuery };
};

export default processStyleProp;
