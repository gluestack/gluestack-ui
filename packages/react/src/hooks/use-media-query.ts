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

const isNil = (value: any) => {
  return value === null || value === undefined;
};

const calculateQuery = (
  key: string,
  val?: number | string,
  height?: number,
  width?: number
) => {
  let retval;
  if (isNil(width) || isNil(height) || isNil(val)) {
    return;
  }
  switch (key) {
    case 'maxWidth':
      retval = !isNil(val) ? width <= val : undefined;
      break;
    case 'minWidth':
      retval = !isNil(val) ? width >= val : undefined;
      break;
    case 'maxHeight':
      retval = !isNil(val) ? height <= val : undefined;
      break;
    case 'minHeight':
      retval = !isNil(val) ? height >= val : undefined;
      break;
    case 'orientation':
      if (!isNil(val)) {
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
};

const queryResolver = (query: any, width?: number, height?: number) => {
  for (const queryKey in query) {
    if (!calculateQuery(queryKey, query[queryKey], height, width)) {
      return false;
    }
  }
  return true;
};

const iterateQuery = (
  query: SubQuery | Query,
  height?: number,
  width?: number
) => {
  const queryResults = [];
  if (Array.isArray(query)) {
    query.forEach((subQuery: SubQuery) => {
      queryResults.push(queryResolver(subQuery, width, height));
    });
  } else {
    queryResults.push(queryResolver(query, width, height));
  }
  return queryResults;
};

const useMediaQuery = (query: SubQuery | Query) => {
  const dims = useWindowDimensions();
  const height = dims?.height;
  const width = dims?.width;

  return iterateQuery(query, height, width);
};

export default useMediaQuery;
