'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ArrowUpIcon =
  exports.ArrowForwardIcon =
  exports.ArrowDownIcon =
  exports.ArrowBackIcon =
    void 0;
var _react = _interopRequireDefault(require('react'));
var _uiCreator = require('@gluestack/ui-creator');
var _styledComponents = require('../../../styled-components');
var _reactNativeSvg = require('react-native-svg');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const ArrowUpIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.G,
    null,
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M20.2362 13.0666L13.6036 6.43395L12.75 5.58039V6.7875L12.75 21.5H11.25L11.25 6.7875V5.58192L10.3968 6.43363L3.76282 13.0557L2.70711 12L12 2.70711L21.2941 12.0012L20.2362 13.0666Z',
      stroke: 'currentColor',
    })
  ),
});
exports.ArrowUpIcon = ArrowUpIcon;
const ArrowDownIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.G,
    null,
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M3.76375 10.9334L10.3964 17.5661L11.25 18.4196V17.2125L11.25 2.5H12.75L12.75 17.2125V18.4181L13.6032 17.5664L20.2372 10.9443L21.2929 12L12 21.2929L2.70586 11.9988L3.76375 10.9334Z',
      stroke: 'currentColor',
    })
  ),
});
exports.ArrowDownIcon = ArrowDownIcon;
const ArrowForwardIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.G,
    null,
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M10.9334 3.76375L17.5661 10.3964L18.4196 11.25H17.2125H2.5V12.75H17.2125H18.4181L17.5664 13.6032L10.9443 20.2372L12 21.2929L21.2929 12L11.9988 2.70586L10.9334 3.76375Z',
      stroke: 'currentColor',
    })
  ),
});
exports.ArrowForwardIcon = ArrowForwardIcon;
const ArrowBackIcon = (0, _uiCreator.createIcon)({
  StyledIcon: _styledComponents.StyledIcon,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.G,
    null,
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M13.0666 3.76375L6.43395 10.3964L5.58039 11.25H6.7875H21.5V12.75H6.7875H5.58192L6.43363 13.6032L13.0557 20.2372L12 21.2929L2.70711 12L12.0012 2.70586L13.0666 3.76375Z',
      stroke: 'currentColor',
    })
  ),
});
exports.ArrowBackIcon = ArrowBackIcon;
//# sourceMappingURL=Arrow.js.map
