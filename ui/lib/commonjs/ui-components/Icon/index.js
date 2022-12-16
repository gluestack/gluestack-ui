'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Icon = void 0;
var _react = _interopRequireDefault(require('react'));
var _styledComponents = require('../../styled-components');
var _uiCreator = require('@gluestack/ui-creator');
var _reactNativeSvg = require('react-native-svg');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const Icon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 36 36',
  // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
  path: [
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Circle, {
      cx: '18',
      cy: '18',
      r: '17.5',
      fill: '#06B6D4',
      stroke: '#0E7490',
    }),
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Circle, {
      cx: '18',
      cy: '18',
      r: '13.5',
      fill: 'white',
      stroke: '#0E7490',
    }),
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Circle, {
      cx: '18',
      cy: '18',
      r: '9.5',
      fill: '#06B6D4',
      stroke: '#0E7490',
    }),
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Circle, {
      cx: '18',
      cy: '18',
      r: '5.5',
      fill: 'white',
      stroke: '#0E7490',
    }),
  ],
});
exports.Icon = Icon;
//# sourceMappingURL=index.js.map
