// Code copied from the open source library 'react-native-web'
// https://github.com/necolas/react-native-web

import createPrefixer from 'inline-style-prefixer/lib/createPrefixer';
import staticData from './static';

const prefixAll = createPrefixer(staticData);

export default prefixAll;
