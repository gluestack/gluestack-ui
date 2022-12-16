'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _uiStyled = require('@gluestack/ui-styled');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const Option = (_ref) => {
  let { ...props } = _ref;
  return /*#__PURE__*/ _react.default.createElement('option', props);
};
var _default = (0, _uiStyled.styled)(
  Option,
  {
    baseStyle: {
      style: {
        bg: '$amber.900',
        p: 4,
      },
    },
  },
  {}
);
exports.default = _default;
//# sourceMappingURL=index.js.map
