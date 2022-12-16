'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SmallCloseIcon = exports.CloseIcon = void 0;
var _react = _interopRequireDefault(require('react'));
var _uiCreator = require('@gluestack/ui-creator');
var _styledComponents = require('../../../styled-components');
var _reactNativeSvg = require('react-native-svg');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const CloseIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 24 24',
  d: 'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
});
exports.CloseIcon = CloseIcon;
const SmallCloseIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 16 16',
  path: /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
    d: 'M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z',
    fillRule: 'evenodd',
    fill: 'currentColor',
  }),
});
exports.SmallCloseIcon = SmallCloseIcon;
//# sourceMappingURL=Close.js.map
