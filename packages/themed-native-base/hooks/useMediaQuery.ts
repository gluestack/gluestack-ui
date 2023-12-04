//@ts-nocheck
import { useWindowDimensions } from 'react-native';

type QueryKeys =
  | 'maxWidth'
  | 'minWidth'
  | 'maxHeight'
  | 'minHeight'
  | 'orientation';

type SubQuery = {
  [queryKey in QueryKeys]?: number | string;
};
type Query = Array<SubQuery>;

export function useMediaQuery(query: SubQuery | Query) {
  const { height, width } = useWindowDimensions();

  return iterateQuery(query, height, width);
}

function queryResolver(query: any, width?: number, height?: number) {
  for (const queryKey in query) {
    if (!calculateQuery(queryKey, query[queryKey], height, width)) {
      return false;
    }
  }
  return true;
}

function iterateQuery(
  query: SubQuery | Query,
  height?: number,
  width?: number
) {
  const queryResults = [];
  if (Array.isArray(query)) {
    query.forEach((subQuery: SubQuery) => {
      queryResults.push(queryResolver(subQuery, width, height));
    });
  } else {
    queryResults.push(queryResolver(query, width, height));
  }
  return queryResults;
}

function calculateQuery(
  key: string,
  val?: number | string,
  height?: number,
  width?: number
) {
  let retval;
  if (!width && !height && !val) {
    return;
  }
  switch (key) {
    case 'maxWidth':
      retval = val ? width <= val : undefined;
      break;
    case 'minWidth':
      retval = val ? width >= val : undefined;
      break;
    case 'maxHeight':
      retval = val ? height <= val : undefined;
      break;
    case 'minHeight':
      retval = val ? height >= val : undefined;
      break;
    case 'orientation':
      if (val) {
        if (width > height) {
          retval = val === 'landscape';
        } else {
          retval = val === 'portrait';
        }
      }
      break;
    default:
      break;
  }
  return retval;
}
