'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  Button: true,
  Switch: true,
  Icon: true,
  Radio: true,
  Slider: true,
  Progress: true,
  Pressable: true,
  Modal: true,
  ActionSheet: true,
};
Object.defineProperty(exports, 'ActionSheet', {
  enumerable: true,
  get: function () {
    return _ActionSheet.ActionSheet;
  },
});
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () {
    return _Button.Button;
  },
});
Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function () {
    return _Icon.Icon;
  },
});
Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function () {
    return _Modal.Modal;
  },
});
Object.defineProperty(exports, 'Pressable', {
  enumerable: true,
  get: function () {
    return _Pressable.Pressable;
  },
});
Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function () {
    return _Progress.Progress;
  },
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function () {
    return _Radio.Radio;
  },
});
Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function () {
    return _Slider.Slider;
  },
});
Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function () {
    return _Switch.Switch;
  },
});
var _Button = require('./ui-components/Button');
var _Switch = require('./ui-components/Switch');
var _Icon = require('./ui-components/Icon');
var _Radio = require('./ui-components/Radio');
var _Slider = require('./ui-components/Slider');
var _Progress = require('./ui-components/Progress');
var _Pressable = require('./ui-components/Pressable');
var _Modal = require('./ui-components/Modal');
var _ActionSheet = require('./ui-components/ActionSheet');
var _Icons = require('./ui-components/Icon/Icons');
Object.keys(_Icons).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Icons[key];
    },
  });
});
//# sourceMappingURL=index.js.map
