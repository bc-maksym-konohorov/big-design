webpackHotUpdate("static/development/pages/GettingStarted/GettingStartedPage.js",{

/***/ "../big-design/dist/big-design.es.js":
/*!*******************************************!*\
  !*** ../big-design/dist/big-design.es.js ***!
  \*******************************************/
/*! exports provided: Badge, Box, Button, Checkbox, Chip, Dropdown, Flex, Form, GlobalStyles, Grid, H0, H1, H2, H3, H4, Input, Link, Modal, Pagination, Panel, ProgressBar, ProgressCircle, Radio, Select, Small, Table, TableFigure, Tabs, Text, Textarea, Tooltip, withMargins, withPaddings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return Chip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H0", function() { return H0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressCircle", function() { return ProgressCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFigure", function() { return TableFigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMargins", function() { return withMargins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaddings", function() { return withPaddings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design-theme */ "../big-design-theme/dist/big-design-theme.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ "../big-design-icons/dist/big-design-icons.es.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "../../node_modules/polished/dist/polished.es.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "../../node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scroll-into-view-if-needed */ "../../node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);










function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function getSpacingStyles(spacing, theme) {
  for (var _len = arguments.length, spacingKeys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    spacingKeys[_key - 2] = arguments[_key];
  }

  if (_typeof(spacing) === 'object') {
    return getResponsiveSpacings(spacing, theme, spacingKeys);
  }

  if (typeof spacing === 'string') {
    return getSimpleSpacings(spacing, theme, spacingKeys);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])([""]);
}

function getSimpleSpacings(spacing, theme, spacingKeys) {
  return spacingKeys.reduce(function (acc, spacingKey) {
    acc[spacingKey] = theme.spacing[spacing];
    return acc;
  }, {});
}

function getResponsiveSpacings(responsiveSpacing, theme, spacingKeys) {
  var breakpointKeys = Object.keys(responsiveSpacing).sort(function (a, b) {
    return _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(a) - _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(b);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleSpacings(responsiveSpacing[breakpointKey], theme, spacingKeys));
  });
}

var withMargins = function withMargins() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var margin = _ref.margin,
        theme = _ref.theme;
    return margin && getSpacingStyles(margin, theme, 'margin');
  }, function (_ref2) {
    var marginTop = _ref2.marginTop,
        theme = _ref2.theme;
    return marginTop && getSpacingStyles(marginTop, theme, 'margin-top');
  }, function (_ref3) {
    var marginRight = _ref3.marginRight,
        theme = _ref3.theme;
    return marginRight && getSpacingStyles(marginRight, theme, 'margin-right');
  }, function (_ref4) {
    var marginBottom = _ref4.marginBottom,
        theme = _ref4.theme;
    return marginBottom && getSpacingStyles(marginBottom, theme, 'margin-bottom');
  }, function (_ref5) {
    var marginLeft = _ref5.marginLeft,
        theme = _ref5.theme;
    return marginLeft && getSpacingStyles(marginLeft, theme, 'margin-left');
  }, function (_ref6) {
    var marginVertical = _ref6.marginVertical,
        theme = _ref6.theme;
    return marginVertical && getSpacingStyles(marginVertical, theme, 'margin-top', 'margin-bottom');
  }, function (_ref7) {
    var marginHorizontal = _ref7.marginHorizontal,
        theme = _ref7.theme;
    return marginHorizontal && getSpacingStyles(marginHorizontal, theme, 'margin-left', 'margin-right');
  });
};

var withPaddings = function withPaddings() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var padding = _ref.padding,
        theme = _ref.theme;
    return padding && getSpacingStyles(padding, theme, 'padding');
  }, function (_ref2) {
    var paddingTop = _ref2.paddingTop,
        theme = _ref2.theme;
    return paddingTop && getSpacingStyles(paddingTop, theme, 'padding-top');
  }, function (_ref3) {
    var paddingRight = _ref3.paddingRight,
        theme = _ref3.theme;
    return paddingRight && getSpacingStyles(paddingRight, theme, 'padding-right');
  }, function (_ref4) {
    var paddingBottom = _ref4.paddingBottom,
        theme = _ref4.theme;
    return paddingBottom && getSpacingStyles(paddingBottom, theme, 'padding-bottom');
  }, function (_ref5) {
    var paddingLeft = _ref5.paddingLeft,
        theme = _ref5.theme;
    return paddingLeft && getSpacingStyles(paddingLeft, theme, 'padding-left');
  }, function (_ref6) {
    var paddingVertical = _ref6.paddingVertical,
        theme = _ref6.theme;
    return paddingVertical && getSpacingStyles(paddingVertical, theme, 'padding-top', 'padding-bottom');
  }, function (_ref7) {
    var paddingHorizontal = _ref7.paddingHorizontal,
        theme = _ref7.theme;
    return paddingHorizontal && getSpacingStyles(paddingHorizontal, theme, 'padding-left', 'padding-right');
  });
};

var StyledBadge =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "styled__StyledBadge",
  componentId: "sc-1oik56k-0"
})(["", ";color:", ";border-radius:", ";display:inline-block;font-size:", ";font-weight:", ";text-align:center;text-transform:uppercase;padding:", ";", " ", " ", " ", ""], withMargins(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.helpers.remCalc(12);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "".concat(theme.spacing.xxSmall, " ").concat(theme.spacing.xSmall);
}, function (_ref6) {
  var theme = _ref6.theme,
      variant = _ref6.variant;
  return variant === 'secondary' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], theme.colors.secondary60);
}, function (_ref7) {
  var theme = _ref7.theme,
      variant = _ref7.variant;
  return variant === 'success' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], theme.colors.success50);
}, function (_ref8) {
  var theme = _ref8.theme,
      variant = _ref8.variant;
  return variant === 'warning' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";background-color:", ";"], theme.colors.secondary70, theme.colors.warning40);
}, function (_ref9) {
  var theme = _ref9.theme,
      variant = _ref9.variant;
  return variant === 'danger' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], theme.colors.danger40);
});
StyledBadge.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"],
  variant: 'secondary'
};

var Badge = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBadge, props);
});

var StyledBox =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledBox",
  componentId: "sj5f1m-0"
})(["", ";", ";box-sizing:border-box;", ";", ";", ";", ";", ";", ";", ";", ";"], withMargins(), withPaddings(), function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      theme = _ref.theme;
  return backgroundColor && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], theme.colors[backgroundColor]);
}, function (_ref2) {
  var shadow = _ref2.shadow,
      theme = _ref2.theme;
  return shadow && theme.shadow[shadow];
}, function (_ref3) {
  var border = _ref3.border,
      theme = _ref3.theme;
  return border && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:", ";"], theme.border[border]);
}, function (_ref4) {
  var borderTop = _ref4.borderTop,
      theme = _ref4.theme;
  return borderTop && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-top:", ";"], theme.border[borderTop]);
}, function (_ref5) {
  var borderRight = _ref5.borderRight,
      theme = _ref5.theme;
  return borderRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-right:", ";"], theme.border[borderRight]);
}, function (_ref6) {
  var borderBottom = _ref6.borderBottom,
      theme = _ref6.theme;
  return borderBottom && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-bottom:", ";"], theme.border[borderBottom]);
}, function (_ref7) {
  var borderLeft = _ref7.borderLeft,
      theme = _ref7.theme;
  return borderLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-left:", ";"], theme.border[borderLeft]);
}, function (_ref8) {
  var borderRadius = _ref8.borderRadius,
      theme = _ref8.theme;
  return borderRadius && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-radius:", ";"], theme.borderRadius[borderRadius]);
});
StyledBox.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Box = function Box(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBox, props);
};

var CIRCLE_DIMENSIONS = {
  large: 80,
  medium: 48,
  small: 32,
  xSmall: 16
};
var CIRCLE_STROKE_WIDTHS = {
  large: 8,
  medium: 4,
  small: 4,
  xSmall: 2
};
var CIRCLE_CIRCUMFERENCES = {
  large: (CIRCLE_DIMENSIONS.large / 2 - CIRCLE_STROKE_WIDTHS.large / 2) * 2 * Math.PI,
  medium: (CIRCLE_DIMENSIONS.medium / 2 - CIRCLE_STROKE_WIDTHS.medium / 2) * 2 * Math.PI,
  small: (CIRCLE_DIMENSIONS.small / 2 - CIRCLE_STROKE_WIDTHS.small / 2) * 2 * Math.PI,
  xSmall: (CIRCLE_DIMENSIONS.xSmall / 2 - CIRCLE_STROKE_WIDTHS.xSmall / 2) * 2 * Math.PI
};

var StyledProgressCircle =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].svg.withConfig({
  displayName: "styled__StyledProgressCircle",
  componentId: "n3drku-0"
})(["", ""], function (_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["height:", ";width:", ";"], theme.helpers.remCalc(getDimensions(size)), theme.helpers.remCalc(getDimensions(size)));
});
var StyledCircle =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].circle.attrs(function (_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  return {
    cx: theme.helpers.remCalc(getDimensions(size) / 2),
    cy: theme.helpers.remCalc(getDimensions(size) / 2),
    r: theme.helpers.remCalc(getDimensions(size) / 2 - getStrokeWidth(size) / 2)
  };
}).withConfig({
  displayName: "styled__StyledCircle",
  componentId: "n3drku-1"
})(["fill:transparent;stroke-width:", ";stroke:", ";"], function (_ref3) {
  var size = _ref3.size,
      theme = _ref3.theme;
  return theme.helpers.remCalc(getStrokeWidth(size));
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary20;
});
var StyledCircleFiller =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyledCircle).withConfig({
  displayName: "styled__StyledCircleFiller",
  componentId: "n3drku-2"
})(["stroke-dasharray:", ";stroke:", ";transform-origin:50% 50%;", ";"], function (_ref5) {
  var size = _ref5.size;
  return getStrokeDashArray(size);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var percent = _ref7.percent,
      size = _ref7.size;
  return typeof percent === 'number' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], typeof percent === 'number' ? "".concat(fillLength(percent, size)) : 0) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " 1s ease infinite;stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], spin(size), fillLength(0, size));
});
var StyledText =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].text.attrs(function () {
  return {
    dominantBaseline: 'central',
    textAnchor: 'middle',
    x: '50%',
    y: '50%'
  };
}).withConfig({
  displayName: "styled__StyledText",
  componentId: "n3drku-3"
})(["font-size:", ";font-weight:", ";"], function (_ref8) {
  var size = _ref8.size,
      theme = _ref8.theme;
  return size === 'large' ? theme.typography.fontSize.large : theme.typography.fontSize.small;
}, function (_ref9) {
  var size = _ref9.size,
      theme = _ref9.theme;
  return size === 'large' ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular;
});

var spin = function spin(size) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{stroke-dashoffset:", ";transform:rotate(-90deg);}50%{stroke-dashoffset:", ";}100%{stroke-dashoffset:", ";transform:rotate(270deg);}"], fillLength(0, size) * -1, fillLength(37.5, size) * -1, fillLength(0, size) * -1);
};

function getDimensions() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return CIRCLE_DIMENSIONS[size];
}

function getStrokeDashArray() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return "".concat(CIRCLE_CIRCUMFERENCES[size], " ").concat(CIRCLE_CIRCUMFERENCES[size]);
}

function getStrokeWidth() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return CIRCLE_STROKE_WIDTHS[size];
}

function fillLength(percent) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';
  return CIRCLE_CIRCUMFERENCES[size] - percent / 100 * CIRCLE_CIRCUMFERENCES[size];
}

StyledProgressCircle.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledCircle.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledCircleFiller.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledText.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var ProgressCircle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ProgressCircle, _React$PureComponent);

  function ProgressCircle() {
    _classCallCheck(this, ProgressCircle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressCircle).apply(this, arguments));
  }

  _createClass(ProgressCircle, [{
    key: "render",
    value: function render() {
      var error = this.props.error;
      return error ? this.renderError() : this.renderCircle();
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      var size = this.props.size;
      return size ? CIRCLE_DIMENSIONS[size] : CIRCLE_DIMENSIONS.medium;
    }
  }, {
    key: "renderCircle",
    value: function renderCircle() {
      var _this$props = this.props,
          percent = _this$props.percent,
          size = _this$props.size;

      if (typeof percent !== 'number') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressCircle, {
          role: "progressbar",
          size: size
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCircle, {
          size: size
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCircleFiller, {
          size: size
        }));
      }

      if (percent === 100) {
        return this.renderSuccess();
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressCircle, {
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": percent,
        role: "progressbar",
        size: size
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCircle, {
        size: size
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCircleFiller, {
        percent: percent,
        size: size
      }), (size === 'large' || size === 'medium') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledText, {
        size: size
      }, percent ? Math.floor(percent) : 0, "%"));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var percent = this.props.percent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ErrorIcon"], {
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": percent ? percent : 0,
        "aria-valuetext": "Error",
        color: "danger",
        role: "progressbar",
        size: this.getDimensions()
      });
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckCircleIcon"], {
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": 100,
        color: "success",
        role: "progressbar",
        size: this.getDimensions()
      });
    }
  }]);

  return ProgressCircle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
ProgressCircle.defaultProps = {
  size: 'medium'
};

var withFlexedContainer = function withFlexedContainer() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";"], function (_ref) {
    var alignContent = _ref.alignContent,
        theme = _ref.theme;
    return alignContent && getFlexedStyles(alignContent, theme, 'align-content');
  }, function (_ref2) {
    var alignItems = _ref2.alignItems,
        theme = _ref2.theme;
    return alignItems && getFlexedStyles(alignItems, theme, 'align-items');
  }, function (_ref3) {
    var flexDirection = _ref3.flexDirection,
        theme = _ref3.theme;
    return flexDirection && getFlexedStyles(flexDirection, theme, 'flex-direction');
  }, function (_ref4) {
    var flexWrap = _ref4.flexWrap,
        theme = _ref4.theme;
    return flexWrap && getFlexedStyles(flexWrap, theme, 'flex-wrap');
  }, function (_ref5) {
    var justifyContent = _ref5.justifyContent,
        theme = _ref5.theme;
    return justifyContent && getFlexedStyles(justifyContent, theme, 'justify-content');
  });
};
var withFlexedItems = function withFlexedItems() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";"], function (_ref6) {
    var alignSelf = _ref6.alignSelf,
        theme = _ref6.theme;
    return alignSelf && getFlexedStyles(alignSelf, theme, 'align-self');
  }, function (_ref7) {
    var flexBasis = _ref7.flexBasis,
        theme = _ref7.theme;
    return flexBasis && getFlexedStyles(flexBasis, theme, 'flex-basis');
  }, function (_ref8) {
    var flexGrow = _ref8.flexGrow,
        theme = _ref8.theme;
    return flexGrow && getFlexedStyles(flexGrow, theme, 'flex-grow');
  }, function (_ref9) {
    var flexOrder = _ref9.flexOrder,
        theme = _ref9.theme;
    return flexOrder && getFlexedStyles(flexOrder, theme, 'order');
  }, function (_ref10) {
    var flexShrink = _ref10.flexShrink,
        theme = _ref10.theme;
    return flexShrink && getFlexedStyles(flexShrink, theme, 'flex-shrink');
  });
};

var getFlexedStyles = function getFlexedStyles(flexedProp, theme, cssKey) {
  if (_typeof(flexedProp) === 'object') {
    return getResponsiveFlex(flexedProp, theme, cssKey);
  }

  if (typeof flexedProp === 'string' || typeof flexedProp === 'number') {
    return getSimpleFlex(flexedProp, cssKey);
  }

  return [];
};

var getSimpleFlex = function getSimpleFlex(flexedProp, cssKey) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ":", ""], cssKey, flexedProp);
};

var getResponsiveFlex = function getResponsiveFlex(flexedProp, theme, cssKey) {
  var breakpointKeys = Object.keys(flexedProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(firstBreakpoint) - _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleFlex(flexedProp[breakpointKey], cssKey));
  });
};

var StyledFlex =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "hcvk8l-0"
})(["", " display:flex;"], withFlexedContainer());
StyledFlex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  flexDirection: {
    mobile: 'column',
    tablet: 'row'
  },
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var StyledFlexItem =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledFlexItem",
  componentId: "smjqtt-0"
})(["", ""], withFlexedItems());
StyledFlexItem.defaultProps = {
  alignSelf: 'auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexOrder: 0,
  flexShrink: 1,
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var FlexItem = function FlexItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFlexItem, props);
};

var Flex =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Flex, _React$PureComponent);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, _getPrototypeOf(Flex).apply(this, arguments));
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFlex, this.props);
    }
  }]);

  return Flex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Flex.Item = FlexItem;

var StyledButton =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-3yq204-0"
})(["&&{", ";}align-items:center;appearance:none;border:", ";border-radius:", ";color:", ";cursor:pointer;display:inline-flex;flex:none;font-size:", ";font-weight:", ";height:", ";justify-content:center;line-height:", ";outline:none;padding:", ";pointer-events:", ";position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:middle;white-space:nowrap;width:100%;&:focus{outline:none;}&[disabled]{border-color:", ";pointer-events:none;}& + .bd-button{margin-top:", ";", "{margin-top:", ";margin-left:", ";}}", "{width:auto;}", ";", ";", ";", ""], withMargins(), function (_ref) {
  var theme = _ref.theme;
  return theme.border.box;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontSize.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref6) {
  var theme = _ref6.theme;
  return Object(_bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["addValues"])(theme.spacing.xxLarge, theme.spacing.xxSmall);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.lineHeight.xLarge;
}, function (_ref8) {
  var theme = _ref8.theme;
  return "0 ".concat(theme.spacing.medium);
}, function (_ref9) {
  var isLoading = _ref9.isLoading;
  return isLoading ? 'none' : 'auto';
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary30;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.xSmall;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.tablet;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing.none;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.xSmall;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.breakpoints.tablet;
}, function (_ref16) {
  var icon = _ref16.iconOnly,
      theme = _ref16.theme;
  return icon && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding:0 ", ";"], theme.spacing.xSmall);
}, function (_ref17) {
  var iconLeft = _ref17.iconLeft,
      theme = _ref17.theme;
  return iconLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-left:", ";"], theme.spacing.xSmall);
}, function (_ref18) {
  var iconRight = _ref18.iconRight,
      theme = _ref18.theme;
  return iconRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-right:", ";"], theme.spacing.xSmall);
}, function (props) {
  return getButtonStyles(props);
});
var ContentWrapper =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({}).withConfig({
  displayName: "styled__ContentWrapper",
  componentId: "sc-3yq204-1"
})(["align-content:center;align-items:center;display:inline-grid;grid-auto-flow:column;grid-gap:", ";visibility:", ";"], function (_ref19) {
  var theme = _ref19.theme;
  return theme.spacing.xSmall;
}, function (_ref20) {
  var isLoading = _ref20.isLoading;
  return isLoading ? 'hidden' : 'visible';
});
var LoadingSpinnerWrapper =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "styled__LoadingSpinnerWrapper",
  componentId: "sc-3yq204-2"
})(["position:absolute;"]);
/**
 * These can be generated dynamically but I'm leaning towards being extra
 * explicit and being able to handle corner cases and changes from design easily
 */

var ButtonPrimary =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";border-color:", ";font-weight:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{background-color:", ";}"], function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.primary;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.colors.primary;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.primary60;
}, function (_ref25) {
  var theme = _ref25.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.colors.primary50;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.colors.secondary30;
});
var ButtonPrimaryDestructive =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";border-color:", ";font-weight:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{background-color:", ";}"], function (_ref28) {
  var theme = _ref28.theme;
  return theme.colors.danger;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.colors.danger;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.colors.danger60;
}, function (_ref32) {
  var theme = _ref32.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.colors.danger50;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.colors.secondary30;
});
var ButtonSecondary =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:transparent;border-color:", ";color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{color:", ";}"], function (_ref35) {
  var theme = _ref35.theme;
  return theme.colors.primary;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.colors.primary;
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.colors.primary20;
}, function (_ref38) {
  var theme = _ref38.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.colors.primary10;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.colors.secondary30;
});
var ButtonSecondaryDestructive =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:transparent;border-color:", ";color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{color:", ";}"], function (_ref41) {
  var theme = _ref41.theme;
  return theme.colors.danger;
}, function (_ref42) {
  var theme = _ref42.theme;
  return theme.colors.danger;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.colors.danger20;
}, function (_ref44) {
  var theme = _ref44.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.colors.danger10;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.colors.secondary30;
});
var ButtonSubtle =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:transparent;border-color:transparent;color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{border-color:transparent;color:", ";}"], function (_ref47) {
  var theme = _ref47.theme;
  return theme.colors.primary;
}, function (_ref48) {
  var theme = _ref48.theme;
  return theme.colors.primary20;
}, function (_ref49) {
  var theme = _ref49.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.colors.primary10;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.colors.secondary30;
});
var ButtonSubtleDestructive =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:transparent;border-color:transparent;color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{border-color:transparent;color:", ";}"], function (_ref52) {
  var theme = _ref52.theme;
  return theme.colors.danger;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.colors.danger20;
}, function (_ref54) {
  var theme = _ref54.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref55) {
  var theme = _ref55.theme;
  return theme.colors.danger10;
}, function (_ref56) {
  var theme = _ref56.theme;
  return theme.colors.secondary30;
});

function getButtonStyles(props) {
  var actionType = props.actionType,
      variant = props.variant;

  switch (variant) {
    case 'primary':
      return actionType === 'destructive' ? ButtonPrimaryDestructive : ButtonPrimary;

    case 'secondary':
      return actionType === 'destructive' ? ButtonSecondaryDestructive : ButtonSecondary;

    case 'subtle':
      return actionType === 'destructive' ? ButtonSubtleDestructive : ButtonSubtle;
  }
}

StyledButton.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
ContentWrapper.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
LoadingSpinnerWrapper.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var RawButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var handleClick = function handleClick(event) {
    var disabled = props.disabled,
        isLoading = props.isLoading,
        onClick = props.onClick;

    if (onClick && !disabled && !isLoading) {
      onClick(event);
    }
  };

  var renderLoadingSpinner = function renderLoadingSpinner() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingSpinnerWrapper, {
      alignItems: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressCircle, {
      size: "xSmall"
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, _extends({
    className: "bd-button",
    role: "button",
    tabIndex: 0
  }, props, {
    onClick: handleClick,
    ref: forwardedRef
  }), props.isLoading ? renderLoadingSpinner() : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, {
    isLoading: props.isLoading,
    theme: props.theme
  }, !props.iconOnly && props.iconLeft, props.iconOnly, !props.iconOnly && props.children, !props.iconOnly && props.iconRight));
});
var StyleableButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawButton, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Button = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawButton, _extends({}, props, {
    forwardedRef: ref
  }));
});
var defaultProps = {
  actionType: 'normal',
  isLoading: false,
  variant: 'primary'
};
Button.displayName = 'Button';
Button.defaultProps = _objectSpread2({}, defaultProps);
StyleableButton.displayName = 'StyleableButton';
StyleableButton.defaultProps = _objectSpread2({}, defaultProps);

var typedMemo = react__WEBPACK_IMPORTED_MODULE_0__["memo"];

var counter = 0;
function uniqueId(prefix) {
  counter += 1;
  var id = counter;
  return prefix + id;
}

var commonTextStyles = function commonTextStyles(props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";margin:0 0 ", ";", ";"], function (_ref) {
    var theme = _ref.theme;
    return props.color ? theme.colors[props.color] : theme.colors.secondary70;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.medium;
  }, props.ellipsis && Object(polished__WEBPACK_IMPORTED_MODULE_5__["ellipsis"])());
};

var StyledH0 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "styled__StyledH0",
  componentId: "tqnj75-0"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontSize.xxxLarge;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontWeight.extraLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.lineHeight.xxxLarge;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.xLarge;
}, withMargins());
var StyledH1 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "styled__StyledH1",
  componentId: "tqnj75-1"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.fontSize.xxLarge;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.fontWeight.light;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.lineHeight.xxLarge;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.xLarge;
}, withMargins());
var StyledH2 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "styled__StyledH2",
  componentId: "tqnj75-2"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.fontSize.xLarge;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.lineHeight.xLarge;
}, withMargins());
var StyledH3 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "styled__StyledH3",
  componentId: "tqnj75-3"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.fontSize.large;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.lineHeight.large;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.small;
}, withMargins());
var StyledH4 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "styled__StyledH4",
  componentId: "tqnj75-4"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.fontSize.medium;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.lineHeight.medium;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.spacing.xSmall;
}, withMargins());
var StyledText$1 =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "styled__StyledText",
  componentId: "tqnj75-5"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";&:last-child{margin-bottom:0;}", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.typography.fontSize.medium;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.lineHeight.medium;
}, withMargins());
var StyledSmall =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "styled__StyledSmall",
  componentId: "tqnj75-6"
})(["", ";color:", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";&:last-child{margin-bottom:0;}", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref25) {
  var color = _ref25.color,
      theme = _ref25.theme;
  return color ? theme.colors[color] : theme.colors.secondary60;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.typography.fontSize.small;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.lineHeight.small;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.spacing.small;
}, withMargins());
StyledH0.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledH1.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledH2.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledH3.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledH4.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledText$1.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledSmall.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var StyleableText = StyledText$1;
var StyleableSmall = StyledSmall;
var StyleableH0 = StyledH0;
var StyleableH1 = StyledH1;
var StyleableH2 = StyledH2;
var StyleableH3 = StyledH3;
var StyleableH4 = StyledH4; // Public

var Text = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableText, props);
});
var Small = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableSmall, props);
});
var H0 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      props = _objectWithoutProperties(_ref3, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableH0, props);
});
var H1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      props = _objectWithoutProperties(_ref4, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableH1, props);
});
var H2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref5) {
  var className = _ref5.className,
      style = _ref5.style,
      props = _objectWithoutProperties(_ref5, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableH2, props);
});
var H3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref6) {
  var className = _ref6.className,
      style = _ref6.style,
      props = _objectWithoutProperties(_ref6, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableH3, props);
});
var H4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref7) {
  var className = _ref7.className,
      style = _ref7.style,
      props = _objectWithoutProperties(_ref7, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableH4, props);
});

var CheckboxContainer =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__CheckboxContainer",
  componentId: "s1u0st-0"
})(["align-items:center;display:flex;"]);
var HiddenCheckbox =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "styled__HiddenCheckbox",
  componentId: "s1u0st-1"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_5__["hideVisually"])());
var StyledCheckbox =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "styled__StyledCheckbox",
  componentId: "s1u0st-2"
})(["align-items:center;background:", ";border:", ";border-color:", ";border-radius:", ";color:", ";display:inline-flex;height:", ";justify-content:center;transition:all 150ms;user-select:none;width:", ";", ":focus + &{box-shadow:", ";}svg{visibility:", ";}"], function (_ref) {
  var checked = _ref.checked,
      isIndeterminate = _ref.isIndeterminate,
      theme = _ref.theme;
  return checked || isIndeterminate ? theme.colors.primary : theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.box;
}, function (_ref3) {
  var checked = _ref3.checked,
      isIndeterminate = _ref3.isIndeterminate,
      theme = _ref3.theme;
  return checked || isIndeterminate ? theme.colors.primary : theme.colors.secondary30;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius.normal;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.large;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.large;
}, HiddenCheckbox, function (_ref8) {
  var theme = _ref8.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref9) {
  var checked = _ref9.checked,
      isIndeterminate = _ref9.isIndeterminate;
  return checked || isIndeterminate ? 'visible' : 'hidden';
});
var StyledLabel =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableText).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "s1u0st-3"
})(["margin-left:", ";", ""], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.medium;
}, function (_ref11) {
  var disabled = _ref11.disabled,
      theme = _ref11.theme;
  return disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";"], theme.colors.secondary40);
});
StyledCheckbox.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledLabel.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var RawCheckbox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawCheckbox, _React$PureComponent);

  function RawCheckbox() {
    var _this;

    _classCallCheck(this, RawCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RawCheckbox).apply(this, arguments));
    _this.uniqueId = uniqueId('checkBox_');
    _this.labelUniqueId = uniqueId('checkBox_label_');
    return _this;
  }

  _createClass(RawCheckbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          className = _this$props.className,
          isIndeterminate = _this$props.isIndeterminate,
          label = _this$props.label,
          forwardedRef = _this$props.forwardedRef,
          style = _this$props.style,
          props = _objectWithoutProperties(_this$props, ["checked", "className", "isIndeterminate", "label", "forwardedRef", "style"]);

      var id = this.getInputId();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckboxContainer, {
        className: className,
        style: style,
        theme: props.theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HiddenCheckbox, _extends({
        type: "checkbox",
        checked: checked,
        id: id
      }, props, {
        "aria-labelledby": this.labelUniqueId,
        ref: function ref(checkbox) {
          if (checkbox && typeof isIndeterminate === 'boolean') {
            checkbox.indeterminate = !checked && isIndeterminate;
          }

          if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
              forwardedRef(checkbox);
            } else {
              // RefObject.current is readonly in DefinitelyTyped but in practice you
              // can still write to it.
              // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
              // @ts-ignore
              forwardedRef.current = checkbox;
            }
          }
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCheckbox, {
        isIndeterminate: isIndeterminate,
        checked: checked,
        htmlFor: id,
        "aria-hidden": true,
        theme: props.theme
      }, !checked && isIndeterminate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["RemoveIcon"], {
        theme: props.theme
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckIcon"], {
        theme: props.theme
      })), this.renderLabel());
    }
  }, {
    key: "getInputId",
    value: function getInputId() {
      var id = this.props.id;
      return id ? id : this.uniqueId;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var htmlFor = this.getInputId();
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          label = _this$props2.label,
          theme = _this$props2.theme;

      if (typeof label === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
          disabled: disabled,
          htmlFor: htmlFor,
          "aria-hidden": disabled,
          id: this.labelUniqueId,
          theme: theme
        }, label);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(label) && label.type === Checkbox.Label) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(label, {
          htmlFor: htmlFor,
          id: this.labelUniqueId
        });
      }

      return null;
    }
  }]);

  return RawCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

RawCheckbox.Label = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(StyledLabel);
var CheckboxWithForwardedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawCheckbox, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Checkbox = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(CheckboxWithForwardedRef, RawCheckbox);
var StyleableCheckbox = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawCheckbox, _extends({}, props, {
    forwardedRef: ref
  }));
});
Checkbox.displayName = 'Checkbox';
StyleableCheckbox.displayName = 'StyleableCheckbox';

var StyledChip =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledChip",
  componentId: "bia514-0"
})(["align-items:center;display:inline-flex;user-select:none;"]);
var StyledCloseButton =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableButton).withConfig({
  displayName: "styled__StyledCloseButton",
  componentId: "bia514-1"
})(["color:", ";height:auto;padding:0;width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary60;
});
StyledChip.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledCloseButton.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Chip = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children,
      label = _ref.label,
      onDelete = _ref.onDelete,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["children", "label", "onDelete", "theme"]);

  var ariaLabel = label ? {
    'aria-label': "Remove ".concat(label)
  } : {};

  var handleOnDelete = function handleOnDelete(event) {
    event.preventDefault();

    if (typeof onDelete === 'function') {
      onDelete();
    }
  };

  var renderDeleteButton = function renderDeleteButton() {
    return onDelete && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCloseButton, _extends({}, ariaLabel, {
      variant: "subtle",
      onClick: handleOnDelete,
      iconOnly: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {
        size: "medium",
        title: "Delete",
        theme: theme
      }),
      theme: theme
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledChip, _extends({
    backgroundColor: "secondary30",
    paddingLeft: "xSmall",
    paddingRight: "xxSmall",
    margin: "xxSmall",
    borderRadius: "normal",
    theme: theme
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    margin: "none",
    marginRight: "xxSmall",
    theme: theme
  }, label), renderDeleteButton());
});

var StyledLink =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "n9mww9-0"
})(["", ";color:", ";cursor:pointer;font-size:", ";font-weight:", ";text-decoration:none;"], withMargins(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontSize.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontWeight.regular;
});
StyledLink.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var StyleableLink = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, props);
});
var Link = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableLink, _extends({}, props, {
    forwardedRef: ref
  }));
});

var StyledList =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "styled__StyledList",
  componentId: "sc-5w3dcq-0"
})(["", ";", " background-color:", ";color:", ";display:inline-block;margin:0;max-height:", ";outline:none;overflow-y:scroll;padding:", " 0;z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadow.raised;
}, function (props) {
  return !props.isOpen && Object(polished__WEBPACK_IMPORTED_MODULE_5__["hideVisually"])();
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
}, function (_ref4) {
  var theme = _ref4.theme,
      maxHeight = _ref4.maxHeight;
  return maxHeight ? theme.helpers.remCalc(maxHeight) : '';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xSmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.zIndex.popover;
});
StyledList.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var ListPopperElement =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ListPopperElement, _React$PureComponent);

  function ListPopperElement() {
    _classCallCheck(this, ListPopperElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListPopperElement).apply(this, arguments));
  }

  _createClass(ListPopperElement, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen || react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children) !== react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(prevProps.children)) {
        this.props.scheduleUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ListPopperElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var List = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      handleListRef = _ref.handleListRef,
      isOpen = _ref.isOpen,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 250 : _ref$maxHeight,
      _ref$placement = _ref.placement,
      selectedPlacement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      positionFixed = _ref.positionFixed,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["children", "className", "handleListRef", "isOpen", "maxHeight", "placement", "positionFixed", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"], {
    innerRef: handleListRef,
    placement: selectedPlacement,
    positionFixed: positionFixed,
    modifiers: {
      offset: {
        offset: '0, 10'
      }
    }
  }, function (_ref2) {
    var placement = _ref2.placement,
        ref = _ref2.ref,
        scheduleUpdate = _ref2.scheduleUpdate,
        popperStyle = _ref2.style;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledList, _extends({
      "data-placement": placement,
      isOpen: isOpen,
      maxHeight: maxHeight,
      ref: ref,
      style: popperStyle,
      tabIndex: -1
    }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListPopperElement, {
      isOpen: isOpen,
      scheduleUpdate: scheduleUpdate
    }, children));
  });
});

var StyledListItem =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "styled__StyledListItem",
  componentId: "surxtv-0"
})(["align-items:center;box-sizing:border-box;cursor:pointer;display:flex;height:", ";justify-content:space-between;min-width:", ";outline:none;padding:0 ", ";&[aria-selected='true']{font-weight:", ";}&[data-highlighted='true'],&[data-highlighted='true'] a{", "}", " a{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.helpers.remCalc(36);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.helpers.remCalc(256);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref5) {
  var actionType = _ref5.actionType,
      disabled = _ref5.disabled;
  return !disabled && (actionType === 'normal' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.primary10;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.primary;
  }) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";color:", ";"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.danger10;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.danger50;
  }));
}, function (_ref10) {
  var disabled = _ref10.disabled,
      theme = _ref10.theme;
  return disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";cursor:not-allowed;"], theme.colors.secondary40);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.secondary70;
});
StyledListItem.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var StyleableListItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var _ref$actionType = _ref.actionType,
      actionType = _ref$actionType === void 0 ? 'normal' : _ref$actionType,
      children = _ref.children,
      className = _ref.className,
      forwardedRef = _ref.forwardedRef,
      style = _ref.style,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["actionType", "children", "className", "forwardedRef", "style", "value"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledListItem, _extends({}, rest, {
    actionType: actionType,
    ref: forwardedRef,
    tabIndex: -1,
    onMouseDown: preventFocus
  }), children, rest['aria-selected'] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckIcon"], {
    color: "primary",
    size: "large"
  }));
});

function preventFocus(event) {
  event.preventDefault();
}

var ListItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableListItem, _extends({}, props, {
    forwardedRef: ref
  }));
});

var Dropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
    _this.state = {
      highlightedItem: null,
      isOpen: false
    };
    _this.listRef = null;
    _this.triggerRef = null;
    _this.uniqueDropdownId = uniqueId('dropdown_');
    _this.uniqueTriggerId = uniqueId('trigger_');
    _this.listItemsRefs = [];

    _this.toggleList = function () {
      _this.state.isOpen ? _this.closeList() : _this.openList();
    };

    _this.handleListRef = function (ref) {
      if (ref) {
        _this.listRef = ref;
      }
    };

    _this.handleOnClickOutside = function (event) {
      if (!_this.listRef || !_this.triggerRef) {
        return;
      }

      if (_this.listRef.contains(event.target) || _this.triggerRef.contains(event.target)) {
        return;
      }

      _this.toggleList();
    };

    _this.handleOnItemClick = function (item) {
      if (item.disabled) {
        return;
      }

      if (typeof item.onClick === 'function') {
        item.onClick(item);
      }

      _this.toggleList();
    }; // Need to handle focus event for cases when VO manipulate the list via the keyboard hotkeys


    _this.handleOnItemHighlighted = function (event) {
      return _this.updateHighlightedItem(event.currentTarget);
    };
    /**
     * Accessiblilty Menu Keyboard Support
     * Learn more: https://www.w3.org/TR/wai-aria-practices/#menu
     */


    _this.handleOnDropdownKeyDown = function (event) {
      if (!_this.listItemsRefs.length || !_this.listRef) {
        return;
      }

      var highlightedItemIndex = _this.listItemsRefs.findIndex(function (ref) {
        return ref.current === _this.state.highlightedItem;
      });

      var nextItem = _this.listItemsRefs[highlightedItemIndex + 1] ? _this.listItemsRefs[highlightedItemIndex + 1].current : _this.listItemsRefs[0].current;
      var prevItem = _this.listItemsRefs[highlightedItemIndex - 1] ? _this.listItemsRefs[highlightedItemIndex - 1].current : _this.listItemsRefs[_this.listItemsRefs.length - 1].current;

      switch (event.key) {
        case 'Enter':
        case ' ':
          {
            if (_this.state.isOpen) {
              event.preventDefault();

              if (_this.state.highlightedItem) {
                _this.state.highlightedItem.click();
              }
            }

            break;
          }

        case 'ArrowUp':
        case 'ArrowLeft':
          {
            event.preventDefault();

            _this.updateHighlightedItem(prevItem, true);

            break;
          }

        case 'ArrowDown':
        case 'ArrowRight':
          {
            event.preventDefault();

            _this.updateHighlightedItem(nextItem, true);

            break;
          }

        case 'Home':
          {
            event.preventDefault();

            _this.updateHighlightedItem(_this.listItemsRefs[0].current, true);

            break;
          }

        case 'End':
          {
            event.preventDefault();

            _this.updateHighlightedItem(_this.listItemsRefs[_this.listItemsRefs.length - 1].current, true);

            break;
          }

        case 'Tab':
        case 'Esc':
        case 'Escape':
          {
            _this.toggleList();

            break;
          }
      }
    };

    _this.scrollIntoView = function () {
      var instantScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = _this.state.highlightedItem;

      if (!element) {
        return;
      }

      return Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_7__["default"])(element, {
        behavior: instantScroll ? 'instant' : 'smooth',
        block: 'nearest',
        inline: 'nearest',
        scrollMode: 'if-needed'
      });
    };

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          maxHeight = _this$props.maxHeight,
          options = _this$props.options,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          rest = _objectWithoutProperties(_this$props, ["children", "maxHeight", "options", "placement", "trigger"]);

      var _this$state = this.state,
          highlightedItem = _this$state.highlightedItem,
          isOpen = _this$state.isOpen;
      this.listItemsRefs = [];
      var aria = highlightedItem ? {
        'aria-activedescendant': highlightedItem.id
      } : {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Reference"], {
        innerRef: function innerRef(node) {
          return _this2.triggerRef = node;
        }
      }, function (_ref) {
        var ref = _ref.ref;
        return _this2.renderTrigger(ref);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, _extends({}, rest, {
        "aria-labelledby": this.getTriggerId(),
        handleListRef: this.handleListRef,
        id: this.getDropdownId(),
        isOpen: isOpen,
        maxHeight: maxHeight,
        onKeyDown: this.handleOnDropdownKeyDown,
        placement: placement,
        role: "listbox"
      }, aria), this.renderOptions()));
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this3 = this;

      var options = this.props.options;
      var highlightedItem = this.state.highlightedItem;
      return Array.isArray(options) && options.map(function (option, index) {
        if (!option.content) {
          return null;
        }

        var id = _this3.getItemId(option, index);

        var isHighlighted = Boolean(highlightedItem && id === highlightedItem.id);
        var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

        if (!option.disabled) {
          _this3.listItemsRefs.push(ref);
        }

        var content = option.content,
            icon = option.icon,
            onClick = option.onClick,
            type = option.type,
            value = option.value,
            rest = _objectWithoutProperties(option, ["content", "icon", "onClick", "type", "value"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, _extends({}, rest, {
          "data-highlighted": isHighlighted,
          id: id,
          key: index,
          onClick: function onClick() {
            return _this3.handleOnItemClick(option);
          },
          onFocus: _this3.handleOnItemHighlighted,
          onMouseOver: _this3.handleOnItemHighlighted,
          ref: ref,
          role: "option"
        }), option.type === 'link' && !option.disabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
          href: option.url,
          target: option.target
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          alignItems: "center",
          flexDirection: "row"
        }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexItem, {
          paddingRight: "xSmall"
        }, _this3.renderIcon(option, isHighlighted)), content)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          alignItems: "center",
          flexDirection: "row"
        }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexItem, {
          paddingRight: "xSmall"
        }, _this3.renderIcon(option, isHighlighted)), content));
      });
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger(ref) {
      var trigger = this.props.trigger;
      var aria = this.state.isOpen ? {
        'aria-expanded': true
      } : {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(trigger) && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger, _objectSpread2({
        'aria-haspopup': true,
        id: this.getTriggerId(),
        onClick: this.toggleList,
        ref: ref,
        role: 'button'
      }, aria));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(item, isHighlighted) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(item.icon) && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(item.icon, {
        color: this.iconColor(item, isHighlighted),
        size: 'large'
      });
    }
  }, {
    key: "iconColor",
    value: function iconColor(item, isHighlighted) {
      if (item.disabled) {
        return 'secondary40';
      }

      if (!isHighlighted) {
        return 'secondary60';
      }

      return item.actionType === 'destructive' ? 'danger50' : 'primary';
    }
  }, {
    key: "openList",
    value: function openList() {
      var _this4 = this;

      var firstItem = this.listItemsRefs[0].current;
      this.setState({
        highlightedItem: firstItem,
        isOpen: true
      }, function () {
        document.addEventListener('mousedown', _this4.handleOnClickOutside, false);
        return _this4.listRef && _this4.listRef.focus({
          preventScroll: true
        });
      });
    }
  }, {
    key: "closeList",
    value: function closeList() {
      var _this5 = this;

      this.setState({
        isOpen: false
      }, function () {
        document.removeEventListener('mousedown', _this5.handleOnClickOutside, false);
        return _this5.triggerRef && _this5.triggerRef.focus({
          preventScroll: true
        });
      });
    }
  }, {
    key: "getDropdownId",
    value: function getDropdownId() {
      var id = this.props.id;
      return id || this.uniqueDropdownId;
    }
  }, {
    key: "getItemId",
    value: function getItemId(item, index) {
      var id = item.id;
      return id || "".concat(this.getDropdownId(), "-item-").concat(index);
    }
  }, {
    key: "getTriggerId",
    value: function getTriggerId() {
      var trigger = this.props.trigger;
      var triggerId = trigger.props.id;
      return triggerId || this.uniqueTriggerId;
    }
  }, {
    key: "updateHighlightedItem",
    value: function updateHighlightedItem(element, scroll, instantScroll) {
      var _this6 = this;

      if (!element) {
        return;
      }

      this.setState({
        highlightedItem: element
      }, function () {
        return scroll && _this6.scrollIntoView(instantScroll);
      });
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var StyledForm =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "styled__StyledForm",
  componentId: "qzey9b-0"
})([""]);
StyledForm.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Error = function Error(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Small, _extends({
    color: "danger",
    margin: "none",
    marginLeft: "xxSmall"
  }, props));
};

var StyledFieldset =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].fieldset.withConfig({
  displayName: "styled__StyledFieldset",
  componentId: "sc-1hi969j-0"
})(["border:none;margin:0 0 ", ";padding:0;&:last-child{margin:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xLarge;
});
var StyledFieldsetDescription =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableSmall).withConfig({
  displayName: "styled__StyledFieldsetDescription",
  componentId: "sc-1hi969j-1"
})([""]);
var StyledFieldsetLegend =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableH3).attrs({
  as: 'legend'
}).withConfig({
  displayName: "styled__StyledFieldsetLegend",
  componentId: "sc-1hi969j-2"
})(["&:not(:last-child){margin-bottom:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
});
StyledFieldset.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledFieldsetLegend.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledFieldsetDescription.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Fieldset =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Fieldset, _React$PureComponent);

  function Fieldset() {
    _classCallCheck(this, Fieldset);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fieldset).apply(this, arguments));
  }

  _createClass(Fieldset, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          legend = _this$props.legend,
          description = _this$props.description,
          children = _this$props.children,
          style = _this$props.style,
          props = _objectWithoutProperties(_this$props, ["className", "legend", "description", "children", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFieldset, props, this.renderLegend(), this.renderDescription(), children);
    }
  }, {
    key: "renderLegend",
    value: function renderLegend() {
      var legend = this.props.legend;

      if (typeof legend === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fieldset.Legend, null, legend);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(legend) && legend.type === Fieldset.Legend) {
        return legend;
      }

      return null;
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var description = this.props.description;

      if (typeof description === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fieldset.Description, null, description);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(description) && description.type === Fieldset.Description) {
        return description;
      }

      return null;
    }
  }]);

  return Fieldset;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Fieldset.Legend = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(StyledFieldsetLegend);
Fieldset.Description = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(StyledFieldsetDescription);

var RadioContainer =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__RadioContainer",
  componentId: "sc-1x9u9a8-0"
})(["align-items:center;display:flex;"]);
var HiddenRadio =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "styled__HiddenRadio",
  componentId: "sc-1x9u9a8-1"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_5__["hideVisually"])());
var StyledLabel$1 =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableText).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "sc-1x9u9a8-2"
})(["margin-left:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.medium;
});
var StyledRadio =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "styled__StyledRadio",
  componentId: "sc-1x9u9a8-3"
})(["border:", ";border-color:", ";border-radius:", ";color:", ";display:inline-block;height:", ";position:relative;transition:all 150ms;user-select:none;width:", ";", ":focus + &{box-shadow:", ";}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.box;
}, function (props) {
  return props.checked ? props.theme.colors.primary40 : props.theme.colors.secondary30;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius.circle;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.large;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.large;
}, HiddenRadio, function (_ref7) {
  var theme = _ref7.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (props) {
  return props.checked && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["&:after{background-color:", ";border-radius:50%;content:'';height:", ";left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:", ";}"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.primary40;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.spacing.small;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.spacing.small;
  });
});
StyledRadio.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledLabel$1.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var RawRadio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawRadio, _React$PureComponent);

  function RawRadio() {
    var _this;

    _classCallCheck(this, RawRadio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RawRadio).apply(this, arguments));
    _this.uniqueId = uniqueId('radio_');
    _this.labelUniqueId = uniqueId('checkBox_label_');
    return _this;
  }

  _createClass(RawRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          className = _this$props.className,
          label = _this$props.label,
          forwardedRef = _this$props.forwardedRef,
          style = _this$props.style,
          props = _objectWithoutProperties(_this$props, ["checked", "className", "label", "forwardedRef", "style"]);

      var id = this.getInputId();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioContainer, {
        className: className,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HiddenRadio, _extends({
        type: "radio",
        checked: checked,
        id: id
      }, props, {
        "aria-labelledby": this.labelUniqueId,
        ref: forwardedRef
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRadio, {
        checked: checked,
        htmlFor: id,
        "aria-hidden": true
      }), this.renderLabel());
    }
  }, {
    key: "getInputId",
    value: function getInputId() {
      var id = this.props.id;
      return id ? id : this.uniqueId;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var htmlFor = this.getInputId();
      var label = this.props.label;

      if (typeof label === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel$1, {
          htmlFor: htmlFor,
          id: this.labelUniqueId
        }, label);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(label) && label.type === Radio.Label) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(label, {
          htmlFor: htmlFor,
          id: this.labelUniqueId
        });
      }

      return null;
    }
  }]);

  return RawRadio;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

RawRadio.Label = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(StyledLabel$1);
var RadioWithForwardedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawRadio, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Radio = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(RadioWithForwardedRef, RawRadio);
var StyleableRadio = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawRadio, _extends({}, props, {
    forwardedRef: ref
  }));
});
Radio.displayName = 'Radio';
StyleableRadio.displayName = 'StyleableRadio';

var StyledInputWrapper =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "styled__StyledInputWrapper",
  componentId: "g32raa-0"
})(["align-items:center;background-color:", ";border-radius:", ";box-sizing:border-box;display:flex;min-height:", ";padding:", ";width:100%;", ";&:hover:not([disabled]){", "}", ";&[disabled]{background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return Object(_bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["addValues"])(theme.spacing.xxLarge, theme.spacing.xxSmall);
}, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.spacing.xxSmall, " ").concat(theme.spacing.small);
}, function (_ref5) {
  var error = _ref5.error,
      theme = _ref5.theme;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:", ";"], error ? theme.border.boxError : theme.border.box);
}, function (_ref6) {
  var error = _ref6.error,
      theme = _ref6.theme;
  return error ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:", ";"], theme.border.boxError) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:1px solid ", ";"], theme.colors.secondary40);
}, function (_ref7) {
  var error = _ref7.error,
      focus = _ref7.focus,
      theme = _ref7.theme;
  return focus && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["outline:none;box-shadow:0 0 0 4px ", ";"], error ? theme.colors.danger20 : theme.colors.primary20);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.secondary20;
});
var StyledInput =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "styled__StyledInput",
  componentId: "g32raa-1"
})(["border:0;box-sizing:border-box;color:", ";flex:1;height:", ";margin-top:", ";padding:0;width:100%;&:focus{outline:none;}&::placeholder{color:", ";font-size:", ";}", ";", ";", ";&[disabled]{background-color:", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.secondary70;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.xLarge;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.xxSmall;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.secondary40;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.fontSize.medium;
}, function (props) {
  return props.iconRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-right:", ";"], props.theme.spacing.xxSmall);
}, function (props) {
  return props.iconLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-left:", ";"], props.theme.spacing.xxSmall);
}, function (props) {
  return props.chips && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["padding-left:", ";"], props.theme.spacing.xxSmall);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.secondary20;
});
var StyledIconWrapper =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledIconWrapper",
  componentId: "g32raa-2"
})(["color:", ";flex:0 0 ", ";height:", ";"], function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.secondary60;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.xLarge;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.xLarge;
});
var StyledInputContent =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledInputContent",
  componentId: "g32raa-3"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;flex:1;height:100%;margin-top:-", ";", ";"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.xxSmall;
}, function (props) {
  return props.chips && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["margin-left:-", ";"], props.theme.spacing.xxSmall);
});
StyledInput.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledInputWrapper.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledIconWrapper.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledInputContent.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var StyledTextareaWrapper =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "styled__StyledTextareaWrapper",
  componentId: "c1uos0-0"
})(["align-items:center;display:flex;position:relative;"]);
var StyledTextarea =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "styled__StyledTextarea",
  componentId: "c1uos0-1"
})(["background-color:", ";border-radius:", ";box-sizing:border-box;color:", ";line-height:", ";max-height:", ";padding:", ";width:100%;", ";", ";&:hover:not([disabled]){", "}&:focus{outline:none;box-shadow:0 0 0 4px ", ";}&[disabled]{background-color:", ";}&::placeholder{color:", ";line-height:", ";font-size:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeight.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.helpers.remCalc(224);
}, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.spacing.xxSmall, " ").concat(theme.spacing.small);
}, function (_ref7) {
  var resize = _ref7.resize;
  return resize ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["resize:vertical;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["resize:none;"]);
}, function (_ref8) {
  var error = _ref8.error,
      theme = _ref8.theme;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:", ";"], error ? theme.border.boxError : theme.border.box);
}, function (_ref9) {
  var error = _ref9.error,
      theme = _ref9.theme;
  return error ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:", ";"], theme.border.boxError) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:1px solid ", ";"], theme.colors.secondary40);
}, function (props) {
  return props.error ? props.theme.colors.danger20 : props.theme.colors.primary20;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary20;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.secondary40;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.lineHeight.medium;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.fontSize.medium;
});
StyledTextarea.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledTextareaWrapper.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var SharedGroupStyles =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["display:grid;grid-gap:", ";margin-bottom:", ";", "{", ",", "{max-width:", ";}}&:last-child{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.xSmall, " ").concat(theme.spacing.medium);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.tablet;
}, StyledInputWrapper, StyledTextareaWrapper, function (_ref4) {
  var theme = _ref4.theme;
  return theme.helpers.remCalc(416);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.none;
});
var StyledError =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "styled__StyledError",
  componentId: "sc-1a6yr6l-0"
})(["flex-direction:row;"]);
var StyledGroup =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledGroup",
  componentId: "sc-1a6yr6l-1"
})(["", ";"], SharedGroupStyles);
var StyledInlineGroup =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledInlineGroup",
  componentId: "sc-1a6yr6l-2"
})(["", ";", "{", " ", "}"], SharedGroupStyles, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoints.tablet;
}, function (_ref7) {
  var childrenCount = _ref7.childrenCount,
      theme = _ref7.theme;
  return childrenCount === 2 && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["grid-template-columns:repeat(2,", ");", "{grid-column:1 / 3;}"], theme.helpers.remCalc(200), StyledError);
}, function (_ref8) {
  var childrenCount = _ref8.childrenCount,
      theme = _ref8.theme;
  return childrenCount === 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["grid-template-columns:repeat(3,", ");", "{grid-column:1 / 4;}"], theme.helpers.remCalc(128), StyledError);
});
StyledError.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledGroup.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledInlineGroup.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Group = function Group(props) {
  var children = props.children,
      groupErrors = props.errors;
  var childrenCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children);
  var inline = !react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children).every(function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child) && (child.type === Checkbox || child.type === Radio);
  });

  var renderErrors = function renderErrors() {
    // If Form.Group has errors prop, don't generate errors from children
    if (groupErrors) {
      return generateErrors(groupErrors);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
        var error = child.props.error;
        return error && generateErrors(error);
      }
    });
  };

  if (inline) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInlineGroup, {
      childrenCount: childrenCount
    }, children, renderErrors());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGroup, null, children, renderErrors());
};

function generateErrors(errors) {
  var errorKey = uniqueId('formGroup_error_');

  if (typeof errors === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledError, {
      alignItems: "center",
      key: errorKey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ErrorIcon"], {
      color: "danger"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, errors));
  }

  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(errors) && errors.type === Error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledError, {
      alignItems: "center",
      key: errorKey
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ErrorIcon"], {
      color: "danger"
    }), errors);
  }

  if (Array.isArray(errors)) {
    return errors.map(function (error) {
      return error && generateErrors(error);
    });
  }

  return null;
}

var StyledLabel$2 =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableH4).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "m3fyue-0"
})(["display:inline-block;margin-bottom:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (_ref2) {
  var renderOptional = _ref2.renderOptional;
  return renderOptional && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["&::after{color:", ";content:' (optional)';font-weight:", ";}"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.secondary60;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.typography.fontWeight.regular;
  });
});
StyledLabel$2.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Label = function Label(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel$2, props);
};

var StyleableForm =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(StyleableForm, _React$PureComponent);

  function StyleableForm() {
    _classCallCheck(this, StyleableForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleableForm).apply(this, arguments));
  }

  _createClass(StyleableForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          props = _objectWithoutProperties(_this$props, ["forwardedRef"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledForm, _extends({}, props, {
        ref: forwardedRef
      }));
    }
  }]);

  return StyleableForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

StyleableForm.Label = Label;
StyleableForm.Error = Error;
StyleableForm.Fieldset = Fieldset;
StyleableForm.Group = Group;
var FormWithForwardedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableForm, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Form = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(FormWithForwardedRef, StyleableForm);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');\n\n  body {\n    font-family: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_5__["normalize"])(), function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontFamily;
});
GlobalStyles.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var withGridedContainer = function withGridedContainer() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var gridAreas = _ref.gridAreas,
        theme = _ref.theme;
    return gridAreas && getGridedStyles(gridAreas, theme, 'grid-template-areas');
  }, function (_ref2) {
    var gridAutoColumns = _ref2.gridAutoColumns,
        theme = _ref2.theme;
    return gridAutoColumns && getGridedStyles(gridAutoColumns, theme, 'grid-auto-columns');
  }, function (_ref3) {
    var gridAutoFlow = _ref3.gridAutoFlow,
        theme = _ref3.theme;
    return gridAutoFlow && getGridedStyles(gridAutoFlow, theme, 'grid-auto-flow');
  }, function (_ref4) {
    var gridAutoRows = _ref4.gridAutoRows,
        theme = _ref4.theme;
    return gridAutoRows && getGridedStyles(gridAutoRows, theme, 'grid-auto-rows');
  }, function (_ref5) {
    var gridColumns = _ref5.gridColumns,
        theme = _ref5.theme;
    return gridColumns && getGridedStyles(gridColumns, theme, 'grid-template-columns');
  }, function (_ref6) {
    var gridGap = _ref6.gridGap,
        theme = _ref6.theme;
    return gridGap && getGridedStyles(gridGap, theme, 'grid-gap');
  }, function (_ref7) {
    var gridRows = _ref7.gridRows,
        theme = _ref7.theme;
    return gridRows && getGridedStyles(gridRows, theme, 'grid-template-rows');
  }, function (_ref8) {
    var gridTemplate = _ref8.gridTemplate,
        theme = _ref8.theme;
    return gridTemplate && getGridedStyles(gridTemplate, theme, 'grid-template');
  });
};
var withGridedItems = function withGridedItems() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref9) {
    var gridArea = _ref9.gridArea,
        theme = _ref9.theme;
    return gridArea && getGridedStyles(gridArea, theme, 'grid-area');
  }, function (_ref10) {
    var gridColumn = _ref10.gridColumn,
        theme = _ref10.theme;
    return gridColumn && getGridedStyles(gridColumn, theme, 'grid-column');
  }, function (_ref11) {
    var gridColumnEnd = _ref11.gridColumnEnd,
        theme = _ref11.theme;
    return gridColumnEnd && getGridedStyles(gridColumnEnd, theme, 'grid-column-end');
  }, function (_ref12) {
    var gridColumnStart = _ref12.gridColumnStart,
        theme = _ref12.theme;
    return gridColumnStart && getGridedStyles(gridColumnStart, theme, 'grid-column-start');
  }, function (_ref13) {
    var gridRow = _ref13.gridRow,
        theme = _ref13.theme;
    return gridRow && getGridedStyles(gridRow, theme, 'grid-row');
  }, function (_ref14) {
    var gridRowEnd = _ref14.gridRowEnd,
        theme = _ref14.theme;
    return gridRowEnd && getGridedStyles(gridRowEnd, theme, 'grid-row-end');
  }, function (_ref15) {
    var gridRowStart = _ref15.gridRowStart,
        theme = _ref15.theme;
    return gridRowStart && getGridedStyles(gridRowStart, theme, 'grid-row-start');
  });
};

var getGridedStyles = function getGridedStyles(gridedProp, theme, cssKey) {
  if (_typeof(gridedProp) === 'object') {
    return getResponsiveGrid(gridedProp, theme, cssKey);
  }

  if (typeof gridedProp === 'string' || typeof gridedProp === 'number') {
    return getSimpleGrid(gridedProp, cssKey);
  }

  return [];
};

var getSimpleGrid = function getSimpleGrid(gridedProp, cssKey) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ":", ""], cssKey, gridedProp);
};

var getResponsiveGrid = function getResponsiveGrid(gridedProp, theme, cssKey) {
  var breakpointKeys = Object.keys(gridedProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(firstBreakpoint) - _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["breakpointsOrder"].indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleGrid(gridedProp[breakpointKey], cssKey));
  });
};

var StyledGrid =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledGrid",
  componentId: "sv7ojr-0"
})(["", " display:grid;"], withGridedContainer());
StyledGrid.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"],
  gridGap: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"].spacing.medium
};

var StyledGridItem =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledGridItem",
  componentId: "sc-9gcq2s-0"
})(["", ""], withGridedItems());

var GridItem = function GridItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGridItem, props);
};

var Grid =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Grid, _React$PureComponent);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGrid, this.props);
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Grid.Item = GridItem;

var StyleableInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(StyleableInput, _React$PureComponent);

  function StyleableInput() {
    var _this;

    _classCallCheck(this, StyleableInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleableInput).apply(this, arguments));
    _this.state = {
      focus: false
    };
    _this.uniqueId = uniqueId('input_');

    _this.onInputFocus = function (event) {
      var onFocus = _this.props.onFocus;

      _this.setFocus(true);

      return onFocus && onFocus(event);
    };

    _this.onInputBlur = function (event) {
      var onBlur = _this.props.onBlur;

      _this.setFocus(false);

      return onBlur && onBlur(event);
    };

    return _this;
  }

  _createClass(StyleableInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          chips = _this$props.chips,
          description = _this$props.description,
          disabled = _this$props.disabled,
          error = _this$props.error,
          label = _this$props.label,
          forwardedRef = _this$props.forwardedRef,
          onChipDelete = _this$props.onChipDelete,
          props = _objectWithoutProperties(_this$props, ["chips", "description", "disabled", "error", "label", "forwardedRef", "onChipDelete"]);

      var id = this.getId();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderLabel(), this.renderDescription(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputWrapper, {
        disabled: disabled,
        error: error,
        focus: this.state.focus
      }, this.renderIconLeft(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputContent, {
        chips: chips
      }, this.renderChips(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({}, props, {
        disabled: disabled,
        chips: chips,
        error: error,
        id: id,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        ref: forwardedRef
      }))), this.renderIconRight()));
    }
  }, {
    key: "getId",
    value: function getId() {
      var id = this.props.id;
      return id ? id : this.uniqueId;
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var description = this.props.description;

      if (typeof description === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input.Description, null, description);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(description) && description.type === Input.Description) {
        return description;
      }

      return null;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          required = _this$props2.required;
      var id = this.getId();

      if (typeof label === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input.Label, {
          htmlFor: id,
          renderOptional: !required
        }, label);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(label) && label.type === Input.Label) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(label, {
          htmlFor: id
        });
      }

      return null;
    }
  }, {
    key: "renderIconLeft",
    value: function renderIconLeft() {
      if (!this.props.iconLeft) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIconWrapper, null, this.props.iconLeft);
    }
  }, {
    key: "renderIconRight",
    value: function renderIconRight() {
      if (!this.props.iconRight) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIconWrapper, null, this.props.iconRight);
    }
  }, {
    key: "setFocus",
    value: function setFocus(toggle) {
      this.setState({
        focus: toggle
      });
    }
  }, {
    key: "renderChips",
    value: function renderChips() {
      var _this$props3 = this.props,
          chips = _this$props3.chips,
          onChipDelete = _this$props3.onChipDelete;

      if (!chips) {
        return null;
      }

      return chips.map(function (chip, key) {
        return onChipDelete ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chip, {
          key: key,
          label: chip,
          marginBottom: "none",
          onDelete: onChipDelete(chip)
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chip, {
          key: key,
          label: chip,
          marginBottom: "none",
          marginTop: "none"
        });
      });
    }
  }]);

  return StyleableInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

StyleableInput.Description = Small;
StyleableInput.Error = Form.Error;
StyleableInput.Label = Form.Label;
var InputWithForwardedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableInput, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Input = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(InputWithForwardedRef, StyleableInput);

var StyledModal =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  'aria-modal': true,
  role: 'dialog',
  tabIndex: -1
}).withConfig({
  displayName: "styled__StyledModal",
  componentId: "b0pzor-0"
})(["height:100%;left:0;position:fixed;top:0;width:100%;z-index:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.modalBackdrop;
}, function (props) {
  return props.backdrop && props.variant && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background:", ";"], function () {
    return Object(polished__WEBPACK_IMPORTED_MODULE_5__["rgba"])(props.theme.colors.secondary70, props.variant === 'dialog' ? 0.5 : 0.7);
  });
});
var StyledModalContent =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "styled__StyledModalContent",
  componentId: "b0pzor-1"
})(["background:", ";box-sizing:border-box;position:fixed;z-index:", ";", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndex.modal;
}, function (_ref4) {
  var variant = _ref4.variant;
  return variant === 'dialog' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ";max-width:", ";left:50%;top:50%;transform:translate(-50%,-50%);width:90%;"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.shadow.floating;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.breakpointValues.tablet;
  });
}, function (_ref7) {
  var variant = _ref7.variant;
  return variant === 'modal' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["height:100%;width:100%;", "{", ";height:auto;left:50%;max-height:90vh;max-width:", ";top:50%;transform:translate(-50%,-50%);}", "{max-height:80vh;}"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.breakpoints.tablet;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.shadow.floating;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.breakpointValues.tablet;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.breakpoints.desktop;
  });
});
var StyledModalActions =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "styled__StyledModalActions",
  componentId: "b0pzor-2"
})(["padding:", ";", "{padding:", ";}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.medium;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.breakpoints.tablet;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.xLarge;
});
var StyledModalHeader =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledModalHeader",
  componentId: "b0pzor-3"
})(["padding:", ";", "{padding:", ";}"], function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.medium;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.breakpoints.tablet;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.xLarge;
});
var StyledModalClose =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledModalClose",
  componentId: "b0pzor-4"
})(["position:absolute;top:", ";right:", ";", "{display:none;}"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.xxSmall;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.spacing.xxSmall;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.breakpoints.tablet;
});
var StyledModalBody =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledModalBody",
  componentId: "b0pzor-5"
})(["flex-grow:1;padding:0 ", ";overflow-y:auto;", "{padding:0 ", ";}"], function (_ref21) {
  var theme = _ref21.theme;
  return theme.spacing.medium;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.breakpoints.tablet;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.spacing.xLarge;
});
StyledModal.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledModalActions.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledModalBody.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledModalClose.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledModalContent.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledModalHeader.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
    _this.state = {
      initialBodyOverflowY: '',
      modalContainer: null
    };
    _this.modalRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.headerUniqueId = uniqueId('modal_header_');

    _this.autoFocus = function () {
      if (_this.props.isOpen && _this.modalRef.current) {
        _this.modalRef.current.focus();
      }
    };

    _this.onClickAway = function (event) {
      if (_this.props.closeOnClickOutside && _this.modalRef.current === event.target) {
        _this.props.onClose();
      }
    };

    _this.onKeyDown = function (event) {
      if (_this.props.closeOnEscKey && event.key === 'Escape') {
        _this.props.onClose();
      }
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var modalContainer = document.createElement('div');
      document.body.appendChild(modalContainer);
      this.setState({
        modalContainer: modalContainer
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state = this.state,
          initialBodyOverflowY = _this$state.initialBodyOverflowY,
          modalContainer = _this$state.modalContainer;

      if (modalContainer) {
        document.body.removeChild(modalContainer);
      }

      document.body.style.overflowY = initialBodyOverflowY;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Check that the previous state was not open and is now open before auto focusing on modal
      if (!prevProps.isOpen && this.props.isOpen) {
        this.autoFocus();
        this.setState({
          initialBodyOverflowY: document.body.style.overflowY || ''
        });
      }

      this.props.isOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = this.state.initialBodyOverflowY;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backdrop = _this$props.backdrop,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          variant = _this$props.variant;
      var modalContainer = this.state.modalContainer;
      var modalContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModal, {
        backdrop: backdrop,
        onClick: this.onClickAway,
        onKeyDown: this.onKeyDown,
        ref: this.modalRef,
        variant: variant
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalContent, {
        variant: variant,
        "aria-labelledby": this.headerUniqueId,
        flexDirection: "column"
      }, this.renderClose(), this.renderHeader(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalBody, null, children), this.renderActions()));
      return isOpen && modalContainer ? Object(react_dom__WEBPACK_IMPORTED_MODULE_8__["createPortal"])(modalContent, modalContainer) : null;
    }
  }, {
    key: "renderClose",
    value: function renderClose() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          variant = _this$props2.variant;
      return variant === 'modal' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalClose, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: onClose,
        iconOnly: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {
          title: "Close"
        }),
        variant: "subtle"
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var header = this.props.header;
      return header && typeof header === 'string' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalHeader, {
        id: this.headerUniqueId
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, {
        margin: "none"
      }, header));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var actions = this.props.actions;
      return Array.isArray(actions) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledModalActions, {
        justifyContent: "flex-end"
      }, actions.map(function (_ref, index) {
        var text = _ref.text,
            props = _objectWithoutProperties(_ref, ["text"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({
          key: index
        }, props), text);
      }));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Modal.defaultProps = {
  backdrop: true,
  closeOnClickOutside: false,
  closeOnEscKey: true,
  isOpen: false,
  onClose: function onClose() {
    return null;
  },
  variant: 'modal'
};

var StyledButton$1 =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableButton).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-12shuvi-0"
})(["color:", ";width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
});
StyledButton$1.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Pagination = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var itemsPerPage = _ref.itemsPerPage,
      currentPage = _ref.currentPage,
      totalItems = _ref.totalItems,
      _ref$itemsPerPageOpti = _ref.itemsPerPageOptions,
      itemsPerPageOptions = _ref$itemsPerPageOpti === void 0 ? [] : _ref$itemsPerPageOpti,
      onPageChange = _ref.onPageChange,
      onItemsPerPageChange = _ref.onItemsPerPageChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.ceil(totalItems / itemsPerPage)),
      _useState2 = _slicedToArray(_useState, 2),
      maxPages = _useState2[0],
      setMaxPages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    start: 0,
    end: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      itemRange = _useState4[0],
      setItemRange = _useState4[1];

  var handlePageOutOfBounds = function handlePageOutOfBounds() {
    if (currentPage < 1 || isNaN(currentPage) || currentPage === undefined) {
      onPageChange(1);
    } else if (currentPage > maxPages) {
      onPageChange(maxPages);
    }
  };

  var handlePerPageOutOfBounds = function handlePerPageOutOfBounds() {
    if (itemsPerPage < 1 || isNaN(itemsPerPage) || itemsPerPage === undefined) {
      onItemsPerPageChange(itemsPerPageOptions[0]);
    }
  };

  var calculateRange = function calculateRange() {
    var firstItemInRange = itemsPerPage * (currentPage - 1) + 1;
    var lastItemInRange = itemsPerPage * currentPage;
    firstItemInRange = Math.min(firstItemInRange, totalItems);
    lastItemInRange = Math.min(lastItemInRange, totalItems);

    if (lastItemInRange === 0 || isNaN(lastItemInRange) || isNaN(firstItemInRange)) {
      firstItemInRange = 0;
      lastItemInRange = 0;
    }

    setItemRange({
      start: firstItemInRange,
      end: lastItemInRange
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handlePageOutOfBounds();
    handlePerPageOutOfBounds();
    calculateRange();
    setMaxPages(Math.ceil(totalItems / itemsPerPage));
  }, [currentPage, itemsPerPage, totalItems]);

  var handlePageIncrease = function handlePageIncrease() {
    onPageChange(currentPage + 1);
  };

  var handlePageDecrease = function handlePageDecrease() {
    onPageChange(currentPage - 1);
  };

  var handleRangeChange = function handleRangeChange(item) {
    return item.value && onItemsPerPageChange(item.value);
  };

  var showRanges = function showRanges() {
    return itemRange.start === itemRange.end ? "".concat(itemRange.start, " of ").concat(totalItems) : "".concat(itemRange.start, " - ").concat(itemRange.end, " of ").concat(totalItems);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    role: "navigation",
    "aria-label": "pagination",
    flexDirection: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
    options: itemsPerPageOptions.map(function (range) {
      return {
        content: "".concat(range, " per page"),
        onClick: handleRangeChange,
        value: range
      };
    }),
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton$1, {
      variant: "subtle",
      iconRight: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowDropDownIcon"], {
        size: "xxLarge"
      })
    }, showRanges())
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton$1, {
    variant: "subtle",
    disabled: currentPage <= 1,
    onClick: handlePageDecrease
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronLeftIcon"], {
    title: "Previous page"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton$1, {
    variant: "subtle",
    disabled: currentPage >= maxPages,
    onClick: handlePageIncrease
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronRightIcon"], {
    title: "Next page"
  }))));
});

var StyledPanel =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Box).withConfig({
  displayName: "styled__StyledPanel",
  componentId: "sc-1h6ef3q-0"
})(["", "{", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadow.floating;
});
StyledPanel.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var RawPanel = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (props) {
  var action = props.action,
      children = props.children,
      header = props.header,
      margin = props.margin,
      marginBottom = props.marginBottom,
      marginHorizontal = props.marginHorizontal,
      marginLeft = props.marginLeft,
      marginRight = props.marginRight,
      marginTop = props.marginTop,
      marginVertical = props.marginVertical;

  var renderHeader = function renderHeader() {
    if (!header && !action) {
      return null;
    }

    if (typeof header !== 'string') {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
      justifyContent: "space-between",
      flexDirection: "row"
    }, header && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, null, header)), action && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, action, action.text)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPanel, {
    backgroundColor: "white",
    shadow: "raised",
    padding: {
      mobile: 'medium',
      tablet: 'xxLarge'
    },
    borderRadius: "none",
    margin: margin,
    marginBottom: marginBottom || 'medium',
    marginHorizontal: marginHorizontal,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginVertical: marginVertical
  }, renderHeader(), children);
});
var Panel = function Panel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RawPanel, props);
};

var StyledProgressBar =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledProgressBar",
  componentId: "sc-1b2lkfu-0"
})(["background-color:", ";height:", ";overflow:hidden;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary20;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
});
var StyledProgressBarFiller =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledProgressBarFiller",
  componentId: "sc-1b2lkfu-1"
})(["background-color:", ";height:100%;overflow:hidden;", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
}, function (_ref4) {
  var percent = _ref4.percent,
      theme = _ref4.theme;
  return typeof percent === 'number' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["transition:width 0.2s ease-in;width:", "%;"], percent) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " 2s ease-in-out infinite;position:relative;width:6.25%;"], theme.keyframes.loading);
});
StyledProgressBar.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledProgressBarFiller.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var ProgressBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ProgressBar, _React$PureComponent);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var percent = this.props.percent;
      return typeof percent === 'number' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressBar, {
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": percent,
        role: "progressbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressBarFiller, {
        percent: percent
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressBar, {
        role: "progressbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProgressBarFiller, null));
    }
  }]);

  return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var StyleableListCheckboxItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children,
      checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      style = _ref.style,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["children", "checked", "className", "disabled", "forwardedRef", "style", "value"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledListItem, _extends({}, rest, {
    actionType: "normal",
    disabled: disabled,
    onMouseDown: preventFocus$1,
    ref: forwardedRef,
    tabIndex: -1
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {
    checked: checked,
    disabled: disabled,
    label: typeof children === 'string' ? children : '',
    onChange: function onChange() {
      return null;
    }
  }));
});

function preventFocus$1(event) {
  event.preventDefault();
}

var ListCheckboxItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableListCheckboxItem, _extends({}, props, {
    forwardedRef: ref
  }));
});

var StyledStatusMessage =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledStatusMessage",
  componentId: "sc-1v66t78-0"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_5__["hideVisually"])());
var StyledDropdownIcon =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowDropDownIcon"]).withConfig({
  displayName: "styled__StyledDropdownIcon",
  componentId: "sc-1v66t78-1"
})([":hover{cursor:pointer;}"]);
var Test =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyledInput).attrs({
  as: 'div'
}).withConfig({
  displayName: "styled__Test",
  componentId: "sc-1v66t78-2"
})(["display:flex;"]);
Test.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Select =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
    _this.state = {
      filterChildren: false,
      highlightedItem: null,
      inputText: '',
      isOpen: false,
      selectedElement: null,
      selectedOptionContent: ''
    };
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.listRef = null;
    _this.uniqueInputId = uniqueId('input_');
    _this.uniqueLabelId = uniqueId('label_');
    _this.uniqueSelectId = uniqueId('select_');
    _this.listItems = [];

    _this.toggleList = function () {
      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      return _this.state.isOpen ? _this.closeList() : _this.openList();
    };

    _this.handleListRef = function (node) {
      _this.listRef = node;
    };

    _this.handleOnActionClick = function (action) {
      if (action.onClick) {
        action.onClick(_this.state.inputText);
      }

      _this.toggleList();
    };

    _this.handleOnClickOutside = function (event) {
      if (!_this.listRef) {
        return;
      }

      if (_this.listRef && _this.listRef.contains(event.target) || _this.inputRef && _this.inputRef.current && _this.inputRef.current.parentElement && _this.inputRef.current.parentElement.parentElement && _this.inputRef.current.parentElement.parentElement.contains(event.target)) {
        return;
      }

      _this.toggleList();
    };

    _this.handleOnCheckboxOptionClick = function (option) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var highlightedItem = _this.state.highlightedItem;
      var updatedValues = [];

      if (option.disabled || !highlightedItem || !Array.isArray(value)) {
        return;
      }

      var checkbox = highlightedItem.querySelector('input[type="checkbox"]');

      if (checkbox.checked) {
        updatedValues = value.filter(function (val) {
          return val !== option.value;
        });
      } else {
        updatedValues = value.concat(option.value);
      }

      onChange(updatedValues, _this.getSelectedOptions(updatedValues));

      _this.focusInput();
    };

    _this.handleOnOptionClick = function (option) {
      var onChange = _this.props.onChange;

      if (option.disabled) {
        return;
      }

      onChange(option.value, option);

      _this.toggleList();
    };

    _this.handleOnOptionHighlighted = function (event) {
      return _this.updateHighlightedItem(event.currentTarget);
    };

    _this.handleOnInputFocus = function () {
      if (!_this.state.isOpen) {
        _this.toggleList();
      }
    };

    _this.handleOnInputChange = function (event) {
      if (!_this.state.isOpen) {
        _this.toggleList();
      }

      _this.setState({
        filterChildren: true,
        inputText: event.target.value
      }, function () {
        _this.scrollIntoView(true);
        /**
         * VO CODE
         * Need to think about way to translate this text in the future. There are no tools to translate atm.
         * Might become an optional prop that can change the text.
         */


        if (!_this.listRef) {
          return;
        }

        var length = _this.listRef.children.length;
        var status = document.getElementById("a11y-status-message-".concat(_this.getSelectId()));

        if (!status) {
          return;
        }

        status.innerHTML = '';
        var node = document.createElement('div');
        var text;

        switch (length) {
          case 0:
            {
              text = document.createTextNode('0 results are available.');
              break;
            }

          case 1:
            {
              text = document.createTextNode('1 result is available, use up and down arrow keys to navigate. Press Enter key to select.');
              break;
            }

          default:
            {
              text = document.createTextNode("".concat(length, " results are available, use up and down arrow keys to navigate. Press Enter key to select."));
            }
        }

        node.appendChild(text);
        status.appendChild(node);
      });
    };
    /**
     * Accessibility Listbox Keyboard Support
     * Learn more: https://www.w3.org/TR/wai-aria-practices/#Listbox
     */


    _this.handleOnInputKeyDown = function (event) {
      if (!_this.listItems.length || !_this.listRef) {
        return;
      }

      var highlightedItemIndex = _this.listItems.findIndex(function (item) {
        return item.ref.current === _this.state.highlightedItem;
      });

      var nextItem = _this.listItems[highlightedItemIndex + 1] ? _this.listItems[highlightedItemIndex + 1].ref.current : _this.listItems[0].ref.current;
      var prevItem = _this.listItems[highlightedItemIndex - 1] ? _this.listItems[highlightedItemIndex - 1].ref.current : _this.listItems[_this.listItems.length - 1].ref.current;

      if (!_this.listRef) {
        return;
      }

      switch (event.key) {
        case 'Enter':
          {
            if (_this.state.isOpen) {
              if (_this.state.highlightedItem) {
                _this.state.highlightedItem.click();
              }
            } else {
              _this.toggleList();
            }

            break;
          }

        case 'Backspace':
          {
            if (_this.state.inputText === '' && _this.props.multi) {
              if (Array.isArray(_this.props.value)) {
                var updatedValues = _this.props.value.slice(0, _this.props.value.length - 1);

                _this.props.onChange(updatedValues, _this.getSelectedOptions(updatedValues));
              }
            }

            break;
          }

        case ' ':
          {
            if (!_this.state.isOpen) {
              event.preventDefault();

              _this.toggleList();
            }

            break;
          }

        case 'ArrowUp':
        case 'ArrowLeft':
          {
            event.preventDefault();

            _this.updateHighlightedItem(prevItem, true);

            break;
          }

        case 'ArrowDown':
        case 'ArrowRight':
          {
            event.preventDefault();

            _this.updateHighlightedItem(nextItem, true);

            break;
          }

        case 'Home':
          {
            event.preventDefault();

            _this.updateHighlightedItem(_this.listItems[0].ref.current, true);

            break;
          }

        case 'End':
          {
            event.preventDefault();

            _this.updateHighlightedItem(_this.listItems[_this.listItems.length - 1].ref.current, true);

            break;
          }

        case 'Tab':
        case 'Esc':
        case 'Escape':
          {
            _this.closeList();

            break;
          }
      }
    };

    _this.scrollIntoView = function () {
      var instantScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = _this.state.highlightedItem;

      if (!element) {
        return;
      }

      Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_7__["default"])(element, {
        behavior: instantScroll ? 'instant' : 'smooth',
        block: 'nearest',
        inline: 'nearest',
        scrollMode: 'if-needed'
      });
    };

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatedSelectedItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          options = _this$props2.options,
          value = _this$props2.value; // Reset input if value was reset to empty string
      // or match input text to select value

      if (prevProps.value && !value || prevProps.value !== value || prevProps.options !== options) {
        this.updatedSelectedItem();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          label = _this$props3.label,
          maxHeight = _this$props3.maxHeight,
          multi = _this$props3.multi,
          onChange = _this$props3.onChange,
          placeholder = _this$props3.placeholder,
          placement = _this$props3.placement,
          value = _this$props3.value,
          rest = _objectWithoutProperties(_this$props3, ["children", "label", "maxHeight", "multi", "onChange", "placeholder", "placement", "value"]);

      var isOpen = this.state.isOpen;
      var labelId = this.getLabelId();
      var selectId = this.getSelectId();
      this.listItems = [];
      var ariaLabelledBy = label ? {
        'aria-labelledby': labelId
      } : {};
      var ariaMultiSelect = multi ? {
        'aria-multiselectable': true
      } : {};
      var ariaOwns = isOpen ? {
        'aria-owns': selectId
      } : {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        role: "combobox",
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox"
      }, ariaOwns), this.renderLabel(), this.renderInput(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, _extends({}, rest, {
        handleListRef: this.handleListRef,
        id: selectId,
        isOpen: isOpen,
        maxHeight: maxHeight,
        placement: placement,
        role: "listbox"
      }, ariaLabelledBy, ariaMultiSelect), this.renderOptions(), this.renderAction())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStatusMessage, {
        id: "a11y-status-message-".concat(selectId),
        role: "status",
        "aria-live": "polite",
        "aria-relevant": "additions text"
      }));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props4 = this.props,
          label = _this$props4.label,
          required = _this$props4.required;
      var inputId = this.getInputId();
      var labelId = this.getLabelId();
      return typeof label === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        htmlFor: inputId,
        id: labelId,
        renderOptional: !required
      }, label) : null;
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this;

      var _this$props5 = this.props,
          placeholder = _this$props5.placeholder,
          error = _this$props5.error,
          required = _this$props5.required,
          disabled = _this$props5.disabled,
          onChange = _this$props5.onChange,
          options = _this$props5.options,
          value = _this$props5.value;
      var _this$state = this.state,
          highlightedItem = _this$state.highlightedItem,
          inputText = _this$state.inputText,
          isOpen = _this$state.isOpen;
      var ariaActiveDescendant = highlightedItem ? {
        'aria-activedescendant': highlightedItem.id
      } : {};
      var ariaControls = isOpen ? {
        'aria-controls': this.getSelectId()
      } : {};
      var chips = this.renderChips();

      var onChipDelete = function onChipDelete(chip) {
        return function () {
          var filteredValues = Array.isArray(value) ? value.filter(function (val) {
            var foundOption = options.find(function (option) {
              return option.value === val;
            });
            return foundOption && foundOption.content !== chip;
          }) : [];
          onChange(filteredValues, _this2.getSelectedOptions(filteredValues));

          _this2.focusInput();
        };
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Reference"], null, function (_ref) {
        var ref = _ref.ref;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: ref
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends({
          "aria-autocomplete": "list",
          autoComplete: "off",
          chips: chips,
          disabled: disabled,
          error: error,
          iconRight: _this2.renderDropdownIcon(),
          id: _this2.getInputId(),
          onChange: _this2.handleOnInputChange,
          onChipDelete: chips && onChipDelete,
          onFocus: _this2.handleOnInputFocus,
          onKeyDown: _this2.handleOnInputKeyDown,
          placeholder: placeholder,
          ref: _this2.inputRef,
          required: required,
          type: 'text',
          value: inputText
        }, ariaActiveDescendant, ariaControls)));
      });
    }
  }, {
    key: "renderChips",
    value: function renderChips() {
      var _this$props6 = this.props,
          options = _this$props6.options,
          multi = _this$props6.multi,
          value = _this$props6.value;

      if (!multi || !value || !Array.isArray(value)) {
        return [];
      }

      var selectedOptions = value.map(function (val) {
        return options.find(function (option) {
          return option.value === val;
        });
      });
      return selectedOptions.map(function (option) {
        return option ? option.content : '';
      });
    }
  }, {
    key: "renderDropdownIcon",
    value: function renderDropdownIcon() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDropdownIcon, {
        "aria-haspopup": true,
        "aria-label": "toggle menu" // Will need to translate this label in the future
        ,
        onClick: this.toggleList,
        role: "button",
        style: {
          outline: 'none'
        },
        tabIndex: -1
      }));
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this3 = this;

      var _this$props7 = this.props,
          _this$props7$options = _this$props7.options,
          options = _this$props7$options === void 0 ? [] : _this$props7$options,
          multi = _this$props7.multi,
          selectValue = _this$props7.value;
      var _this$state2 = this.state,
          filterChildren = _this$state2.filterChildren,
          highlightedItem = _this$state2.highlightedItem,
          inputText = _this$state2.inputText;
      return options.map(function (option, index) {
        if (!option.content || !option.value) {
          return null;
        }

        if (!filterChildren || option.content.toLowerCase().startsWith(inputText.toLocaleLowerCase())) {
          var id = _this3.getOptionId(option, index);

          var isHighlighted = Boolean(highlightedItem && id === highlightedItem.id);
          var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

          if (!option.disabled) {
            _this3.listItems.push({
              item: option,
              ref: ref
            });
          }

          var content = option.content,
              icon = option.icon,
              value = option.value,
              rest = _objectWithoutProperties(option, ["content", "icon", "value"]);

          var ariaSelected = value === selectValue ? {
            'aria-selected': true
          } : {};
          return multi ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListCheckboxItem, _extends({}, rest, {
            "aria-selected": _this3.isChecked(option),
            checked: _this3.isChecked(option),
            "data-highlighted": isHighlighted,
            id: id,
            key: index,
            onClick: function onClick(event) {
              event.stopPropagation();
              event.preventDefault();

              _this3.handleOnCheckboxOptionClick(option);
            },
            onFocus: _this3.handleOnOptionHighlighted,
            onMouseOver: _this3.handleOnOptionHighlighted,
            ref: ref,
            role: "option"
          }), content) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, _extends({}, rest, ariaSelected, {
            actionType: "normal",
            "data-highlighted": isHighlighted,
            id: id,
            key: index,
            onClick: function onClick() {
              return _this3.handleOnOptionClick(option);
            },
            onFocus: _this3.handleOnOptionHighlighted,
            onMouseOver: _this3.handleOnOptionHighlighted,
            ref: ref,
            role: "option"
          }), content);
        }
      });
    }
  }, {
    key: "renderAction",
    value: function renderAction() {
      var _this4 = this;

      var action = this.props.action;
      var highlightedItem = this.state.highlightedItem;

      if (!action || !action.content) {
        return null;
      }

      var id = this.getActionId(action);
      var isHighlighted = Boolean(highlightedItem && id === highlightedItem.id);
      var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

      if (!action.disabled) {
        this.listItems.push({
          item: action,
          ref: ref
        });
      }

      var content = action.content,
          icon = action.icon,
          rest = _objectWithoutProperties(action, ["content", "icon"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
        borderTop: "box",
        marginTop: "xSmall",
        paddingTop: "xSmall"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, _extends({}, rest, {
        "data-highlighted": isHighlighted,
        id: id,
        onClick: function onClick() {
          return _this4.handleOnActionClick(action);
        },
        onFocus: this.handleOnOptionHighlighted,
        onMouseOver: this.handleOnOptionHighlighted,
        ref: ref,
        role: "option"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        alignItems: "center",
        flexDirection: "row"
      }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexItem, {
        paddingRight: "xSmall"
      }, this.renderIcon(action, isHighlighted)), content)));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(action, isHighlighted) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(action.icon) && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(action.icon, {
        color: this.iconColor(action, isHighlighted),
        size: 'large'
      });
    }
  }, {
    key: "iconColor",
    value: function iconColor(action, isHighlighted) {
      if (action.disabled) {
        return 'secondary40';
      }

      if (!isHighlighted) {
        return 'secondary60';
      }

      return action.actionType === 'destructive' ? 'danger50' : 'primary';
    }
  }, {
    key: "openList",
    value: function openList() {
      var _this5 = this;

      var selectedElement = this.state.selectedElement;
      this.setState({
        isOpen: true
      }, function () {
        document.addEventListener('mousedown', _this5.handleOnClickOutside, false);

        if (selectedElement) {
          _this5.updateHighlightedItem(selectedElement, true, true);
        }

        _this5.focusInput();
      });
    }
  }, {
    key: "closeList",
    value: function closeList() {
      var _this6 = this;

      var selectedOptionContent = this.state.selectedOptionContent;
      this.setState({
        filterChildren: false,
        highlightedItem: null,
        inputText: selectedOptionContent
      }, function () {
        document.removeEventListener('mousedown', _this6.handleOnClickOutside, false); // Need to wait for the state to be updated before we close for VO

        _this6.setState({
          isOpen: false
        });
      });
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.focus({
          preventScroll: true
        });
      }
    }
  }, {
    key: "getInputId",
    value: function getInputId() {
      return this.uniqueInputId;
    }
  }, {
    key: "getLabelId",
    value: function getLabelId() {
      return this.uniqueLabelId;
    }
  }, {
    key: "getSelectId",
    value: function getSelectId() {
      var id = this.props.id;
      return id || this.uniqueSelectId;
    }
  }, {
    key: "getOptionId",
    value: function getOptionId(option, index) {
      var id = option.id;
      return id || "".concat(this.getSelectId(), "-option-").concat(index);
    }
  }, {
    key: "getActionId",
    value: function getActionId(action) {
      var id = action.id;
      return id || "".concat(this.getSelectId(), "-action");
    }
  }, {
    key: "getSelectedOptions",
    value: function getSelectedOptions(values) {
      var options = this.props.options;
      return options.filter(function (option) {
        return values.find(function (value) {
          return value === option.value;
        });
      });
    }
  }, {
    key: "isChecked",
    value: function isChecked(option) {
      var value = this.props.value;
      return Array.isArray(value) && Boolean(value.find(function (val) {
        return val === option.value;
      }));
    }
  }, {
    key: "updateHighlightedItem",
    value: function updateHighlightedItem(element, scroll, instantScroll) {
      var _this7 = this;

      if (!element) {
        return;
      }

      this.setState({
        highlightedItem: element
      }, function () {
        return scroll && _this7.scrollIntoView(instantScroll);
      });
    }
  }, {
    key: "updatedSelectedItem",
    value: function updatedSelectedItem() {
      var _this$props8 = this.props,
          multi = _this$props8.multi,
          value = _this$props8.value;

      if (!value || multi) {
        return this.setState({
          inputText: '',
          selectedElement: null,
          selectedOptionContent: ''
        });
      }

      var selectedOption = this.listItems.find(function (item) {
        return 'value' in item.item && item.item.value === value;
      });

      if (selectedOption) {
        this.setState({
          inputText: selectedOption.item.content,
          selectedElement: selectedOption.ref.current,
          selectedOptionContent: selectedOption.item.content
        });
      }
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

function useEventCallback(fn, dependencies) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {// no-op default
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = fn;
  }, [fn].concat(_toConsumableArray(dependencies)));
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var fun = ref.current;
    return fun.apply(void 0, arguments);
  }, [ref]);
}

var StyledTableFigure =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].figure.withConfig({
  displayName: "styled__StyledTableFigure",
  componentId: "xns2ns-0"
})(["margin:0;margin-bottom:", ";max-width:100%;overflow-x:auto;position:relative;white-space:nowrap;", "{white-space:normal;}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.xLarge);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.tablet;
});
var StyledTable =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].table.withConfig({
  displayName: "styled__StyledTable",
  componentId: "xns2ns-1"
})(["", ";border-collapse:collapse;border-color:transparent;color:", ";text-align:left;width:100%;"], withMargins(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
});
StyledTableFigure.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledTable.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var SelectAll = function SelectAll(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onChange = _ref.onChange,
      selectedItems = _ref.selectedItems,
      totalItems = _ref.totalItems;
  var allInPageSelected = items.every(function (item) {
    return selectedItems.has(item);
  });
  var someInPageSelected = items.some(function (item) {
    return selectedItems.has(item);
  });

  var handleSelectAll = function handleSelectAll() {
    if (typeof onChange !== 'function') {
      return;
    }

    if (selectedItems.size === 0) {
      return onChange(_toConsumableArray(items));
    }

    if (allInPageSelected) {
      var newSelectedItems = new Set(selectedItems);
      items.forEach(function (item) {
        return newSelectedItems.delete(item);
      });
      return onChange(_toConsumableArray(newSelectedItems));
    }

    return onChange(_toConsumableArray(new Set([].concat(_toConsumableArray(selectedItems), _toConsumableArray(items)))));
  };

  if (typeof onChange !== 'function') {
    return null;
  }

  var totalSelectedItems = selectedItems.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, {
    marginRight: "xxSmall"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    flexDirection: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {
    isIndeterminate: someInPageSelected,
    checked: allInPageSelected,
    onChange: handleSelectAll
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    marginLeft: "small"
  }, totalSelectedItems === 0 ? "".concat(totalItems) : "".concat(totalSelectedItems, "/").concat(totalItems))));
};

var StyledPaginationContainer =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex.Item).withConfig({
  displayName: "styled__StyledPaginationContainer",
  componentId: "sc-1w0s9nk-0"
})(["margin-left:auto;"]);
StyledPaginationContainer.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var TablePagination = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var currentPage = _ref.currentPage,
      itemsPerPage = _ref.itemsPerPage,
      itemsPerPageOptions = _ref.itemsPerPageOptions,
      onItemsPerPageChange = _ref.onItemsPerPageChange,
      onPageChange = _ref.onPageChange,
      totalItems = _ref.totalItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaginationContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pagination, {
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    itemsPerPageOptions: itemsPerPageOptions,
    onItemsPerPageChange: onItemsPerPageChange,
    onPageChange: onPageChange,
    totalItems: totalItems
  }));
});

var InternalActions = function InternalActions(_ref) {
  var pagination = _ref.pagination,
      tableId = _ref.tableId,
      itemName = _ref.itemName,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onSelectionChange = _ref.onSelectionChange,
      selectedItems = _ref.selectedItems,
      props = _objectWithoutProperties(_ref, ["pagination", "tableId", "itemName", "items", "onSelectionChange", "selectedItems"]);

  var isSelectable = typeof onSelectionChange === 'function';
  var totalItems = pagination ? pagination.totalItems : items.length;

  var renderItemName = function renderItemName() {
    if (typeof itemName !== 'string') {
      return null;
    }

    var text = Boolean(isSelectable) ? itemName : "".concat(totalItems, " ").concat(itemName);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
      margin: "none"
    }, text));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, _extends({
    alignItems: "center",
    "aria-controls": tableId,
    flexDirection: "row",
    justifyContent: "stretch",
    padding: "small"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectAll, {
    onChange: onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    totalItems: totalItems
  }), renderItemName(), pagination && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TablePagination, pagination));
};

var Actions = typedMemo(InternalActions);

var StyledTableBody =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tbody.withConfig({
  displayName: "styled__StyledTableBody",
  componentId: "sc-1bwe2hn-0"
})(["& > tr{border-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border.box;
});
StyledTableBody.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Body = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableBody, props);
});

var StyledTableHead =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].thead.withConfig({
  displayName: "styled__StyledTableHead",
  componentId: "sc-1p8j1x-0"
})([""]);
StyledTableHead.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Head = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableHead, props);
});

var StyledTableHeaderCell =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
  displayName: "styled__StyledTableHeaderCell",
  componentId: "sc-1opnvtt-0"
})(["background-color:", ";box-shadow:", ";box-sizing:border-box;color:", ";font-size:", ";padding:", ";white-space:nowrap;", ";", ";", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary10;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "inset 0px -1px 0px ".concat(theme.colors.secondary30, ", inset 0px 1px 0px ").concat(theme.colors.secondary30);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary60;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontSize.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.small;
}, function (_ref6) {
  var align = _ref6.align;
  return align && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["text-align:", ";"], align);
}, function (_ref7) {
  var isSortable = _ref7.isSortable;
  return isSortable && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["cursor:pointer;"]);
}, function (_ref8) {
  var width = _ref8.width;
  return width !== undefined && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";"], typeof width === 'string' ? width : width + 'px');
}, function (_ref9) {
  var stickyHeader = _ref9.stickyHeader;
  return stickyHeader && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["position:sticky;top:0;"]);
});
var StyledTableHeaderCheckbox =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyledTableHeaderCell).withConfig({
  displayName: "styled__StyledTableHeaderCheckbox",
  componentId: "sc-1opnvtt-1"
})(["width:", ";white-space:nowrap;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
});
StyledTableHeaderCell.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledTableHeaderCheckbox.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var InternalHeaderCell = function InternalHeaderCell(_ref) {
  var children = _ref.children,
      column = _ref.column,
      isSorted = _ref.isSorted,
      onSortClick = _ref.onSortClick,
      sortDirection = _ref.sortDirection,
      stickyHeader = _ref.stickyHeader;
  var align = column.align,
      isSortable = column.isSortable,
      width = column.width;

  var renderSortIcon = function renderSortIcon() {
    if (!isSorted) {
      return null;
    }

    return sortDirection === 'ASC' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowUpwardIcon"], {
      size: "medium",
      "data-testid": "asc-icon",
      title: "Ascending order"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowDownwardIcon"], {
      size: "medium",
      "data-testid": "desc-icon",
      title: "Descending order"
    });
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (isSortable && typeof onSortClick === 'function') {
      onSortClick(column);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableHeaderCell, {
    align: align,
    isSortable: isSortable,
    stickyHeader: stickyHeader,
    onClick: handleClick,
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    alignItems: "center",
    flexDirection: "row"
  }, children, renderSortIcon()));
};

var HeaderCheckboxCell = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref2) {
  var stickyHeader = _ref2.stickyHeader;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableHeaderCheckbox, {
    stickyHeader: stickyHeader
  });
});
var HeaderCell = typedMemo(InternalHeaderCell);

var StyledTableDataCell =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].td.withConfig({
  displayName: "styled__StyledTableDataCell",
  componentId: "sc-16y6nzi-0"
})(["box-sizing:border-box;color:", ";font-size:", ";padding:", ";", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontSize.medium;
}, function (_ref3) {
  var theme = _ref3.theme,
      withPadding = _ref3.withPadding;
  return withPadding ? theme.spacing.small : 0;
}, function (_ref4) {
  var align = _ref4.align;
  return align && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["text-align:", ";"], align);
}, function (_ref5) {
  var verticalAlign = _ref5.verticalAlign;
  return verticalAlign && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["vertical-align:", ";"], verticalAlign);
}, function (_ref6) {
  var width = _ref6.width;
  return width !== undefined && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";"], typeof width === 'string' ? width : width + 'px');
});
var StyledTableDataCheckbox =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyledTableDataCell).withConfig({
  displayName: "styled__StyledTableDataCheckbox",
  componentId: "sc-16y6nzi-1"
})(["padding:", ";", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return "0 ".concat(theme.spacing.small);
}, function (props) {
  return props.isCheckbox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";white-space:nowrap;"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
  });
});
StyledTableDataCell.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledTableDataCheckbox.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var DataCell = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var align = _ref.align,
      children = _ref.children,
      isCheckbox = _ref.isCheckbox,
      verticalAlign = _ref.verticalAlign,
      width = _ref.width,
      _ref$withPadding = _ref.withPadding,
      withPadding = _ref$withPadding === void 0 ? true : _ref$withPadding;
  return isCheckbox ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableDataCheckbox, {
    align: align,
    width: width
  }, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableDataCell, {
    align: align,
    verticalAlign: verticalAlign,
    width: width,
    withPadding: withPadding
  }, children);
});

var StyledTableRow =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tr.withConfig({
  displayName: "styled__StyledTableRow",
  componentId: "xq0hr0-0"
})(["background-color:", ";&:hover{background-color:", ";}"], function (_ref) {
  var isSelected = _ref.isSelected,
      theme = _ref.theme;
  return isSelected ? theme.colors.primary10 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary10;
});
StyledTableRow.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var InternalRow = function InternalRow(_ref) {
  var columns = _ref.columns,
      _ref$isSelectable = _ref.isSelectable,
      isSelectable = _ref$isSelectable === void 0 ? false : _ref$isSelectable,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      item = _ref.item,
      onItemSelect = _ref.onItemSelect;

  var onChange = function onChange() {
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableRow, {
    isSelected: isSelected
  }, isSelectable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataCell, {
    key: "data-checkbox",
    isCheckbox: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {
    checked: isSelected,
    onChange: onChange
  })), columns.map(function (_ref2, columnIndex) {
    var CellContent = _ref2.render,
        align = _ref2.align,
        verticalAlign = _ref2.verticalAlign,
        width = _ref2.width,
        _ref2$withPadding = _ref2.withPadding,
        withPadding = _ref2$withPadding === void 0 ? true : _ref2$withPadding;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataCell, {
      key: columnIndex,
      align: align,
      verticalAlign: verticalAlign,
      width: width,
      withPadding: withPadding
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellContent, item));
  }));
};

var Row = typedMemo(InternalRow);

var InternalTable = function InternalTable(props) {
  var className = props.className,
      columns = props.columns,
      id = props.id,
      itemName = props.itemName,
      items = props.items,
      _props$keyField = props.keyField,
      keyField = _props$keyField === void 0 ? 'id' : _props$keyField,
      pagination = props.pagination,
      selectable = props.selectable,
      sortable = props.sortable,
      stickyHeader = props.stickyHeader,
      style = props.style,
      rest = _objectWithoutProperties(props, ["className", "columns", "id", "itemName", "items", "keyField", "pagination", "selectable", "sortable", "stickyHeader", "style"]);

  var tableIdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(id || uniqueId('table_'));
  var isSelectable = Boolean(selectable);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (selectable) {
      setSelectedItems(new Set(selectable.selectedItems));
    }
  }, [selectable ? selectable.selectedItems : null]);
  var onItemSelect = selectable ? useEventCallback(function (item) {
    if (!selectable || !item) {
      return;
    }

    var onSelectionChange = selectable.onSelectionChange;
    var nextIsSelected = !selectedItems.has(item);

    if (nextIsSelected) {
      onSelectionChange([].concat(_toConsumableArray(selectedItems), [item]));
    } else {
      onSelectionChange(_toConsumableArray(selectedItems).filter(function (selectedItem) {
        return selectedItem !== item;
      }));
    }
  }, [selectedItems]) : undefined;
  var onSortClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (column) {
    if (!sortable || !column.isSortable) {
      return;
    }

    var hash = column.hash;
    var sortDirection = sortable.direction === 'ASC' ? 'DESC' : 'ASC';

    if (typeof sortable.onSort === 'function') {
      sortable.onSort(hash, sortDirection, column);
    }
  }, [sortable]);

  var shouldRenderActions = function shouldRenderActions() {
    return Boolean(pagination) || Boolean(selectable) || Boolean(itemName);
  };

  var getItemKey = function getItemKey(item, index) {
    if (item[keyField] !== undefined) {
      return item[keyField];
    }

    return index;
  };

  var renderHeaders = function renderHeaders() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, isSelectable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderCheckboxCell, {
      stickyHeader: stickyHeader
    }), columns.map(function (column, index) {
      var hash = column.hash,
          header = column.header,
          isSortable = column.isSortable;
      var isSorted = isSortable && sortable && hash === sortable.columnHash;
      var sortDirection = sortable && sortable.direction;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderCell, {
        column: column,
        isSorted: isSorted,
        key: index,
        onSortClick: onSortClick,
        sortDirection: sortDirection,
        stickyHeader: stickyHeader
      }, header);
    })));
  };

  var renderItems = function renderItems() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, items.map(function (item, index) {
      var key = getItemKey(item, index);
      var isSelected = selectedItems.has(item);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
        columns: columns,
        isSelectable: isSelectable,
        isSelected: isSelected,
        item: item,
        key: key,
        onItemSelect: onItemSelect
      });
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, shouldRenderActions() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, {
    pagination: pagination,
    onSelectionChange: selectable && selectable.onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    itemName: itemName,
    tableId: tableIdRef.current
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTable, _extends({}, rest, {
    id: tableIdRef.current
  }), renderHeaders(), renderItems()));
};

var Table = typedMemo(InternalTable);
var TableFigure = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableFigure, props);
});

var StyledTabs =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "styled__StyledTabs",
  componentId: "sc-6je9le-0"
})(["overflow:auto;"]);
var StyledTab =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleableButton).withConfig({
  displayName: "styled__StyledTab",
  componentId: "sc-6je9le-1"
})(["border:none;border-bottom:", " solid transparent;border-bottom-color:", ";border-radius:0;color:", ";pointer-events:", ";width:auto;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (props) {
  return props.id === props.activeTab ? props.theme.colors.primary40 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (props) {
  return props.id === props.activeTab ? 'none' : 'auto';
}, function (props) {
  return props.id === props.activeTab && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";&:focus{box-shadow:none;}"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.secondary70;
  });
});
StyledTab.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"],
  variant: 'subtle'
};
StyledTabs.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children,
      className = _ref.className,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onTabClick = _ref.onTabClick,
      style = _ref.style,
      role = _ref.role,
      props = _objectWithoutProperties(_ref, ["activeTab", "children", "className", "items", "onTabClick", "style", "role"]);

  var handleOnTabClick = function handleOnTabClick(event) {
    event.preventDefault();
    var tabId = event.currentTarget.id;

    if (tabId !== activeTab && typeof onTabClick === 'function') {
      onTabClick(tabId);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTabs, _extends({}, props, {
    flexDirection: "row",
    role: "tablist"
  }), items.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        disabled = _ref2.disabled;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTab, {
      activeTab: activeTab,
      id: id,
      key: id,
      onClick: handleOnTabClick,
      role: "tab",
      tabIndex: id === activeTab ? -1 : 0,
      disabled: disabled
    }, title);
  })));
});

var StyleableTextarea =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(StyleableTextarea, _React$PureComponent);

  function StyleableTextarea() {
    var _this;

    _classCallCheck(this, StyleableTextarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleableTextarea).apply(this, arguments));
    _this.uniqueId = uniqueId('textarea_');
    _this.MAX_ROWS = 7;
    return _this;
  }

  _createClass(StyleableTextarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          description = _this$props.description,
          label = _this$props.label,
          resize = _this$props.resize,
          rows = _this$props.rows,
          forwardedRef = _this$props.forwardedRef,
          props = _objectWithoutProperties(_this$props, ["description", "label", "resize", "rows", "forwardedRef"]);

      var id = this.getId();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderLabel(), this.renderDescription(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextareaWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextarea, _extends({}, props, {
        id: id,
        rows: this.getRows(rows),
        resize: resize,
        ref: forwardedRef
      }))));
    }
  }, {
    key: "getId",
    value: function getId() {
      var id = this.props.id;
      return id ? id : this.uniqueId;
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var description = this.props.description;

      if (typeof description === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Textarea.Description, null, description);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(description) && description.type === Textarea.Description) {
        return description;
      }

      return null;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var label = this.props.label;
      var id = this.getId();

      if (typeof label === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Textarea.Label, {
          htmlFor: id
        }, label);
      }

      if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(label) && label.type === Textarea.Label) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(label, {
          htmlFor: id
        });
      }

      return null;
    }
  }, {
    key: "getRows",
    value: function getRows(rows) {
      if (rows && rows > this.MAX_ROWS) {
        return this.MAX_ROWS;
      }

      return rows;
    }
  }]);

  return StyleableTextarea;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

StyleableTextarea.defaultProps = {
  rows: 3,
  resize: true
};
StyleableTextarea.Description = Small;
StyleableTextarea.Error = Form.Error;
StyleableTextarea.Label = Form.Label;
var TextareaWithForwardedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleableTextarea, _extends({}, props, {
    forwardedRef: ref
  }));
});
var Textarea = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(TextareaWithForwardedRef, StyleableTextarea);

var StyledTooltipTrigger =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledTooltipTrigger",
  componentId: "sc-14xrlwe-0"
})(["display:inline-block;"]);
var StyledTooltip =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styled__StyledTooltip",
  componentId: "sc-14xrlwe-1"
})(["", ";background-color:", ";max-width:", ";padding:", ";z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadow.floating;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.helpers.remCalc(336);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.xSmall;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.zIndex.tooltip;
});
StyledTooltip.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};
StyledTooltipTrigger.defaultProps = {
  theme: _bigcommerce_big_design_theme__WEBPACK_IMPORTED_MODULE_1__["theme"]
};

var Tooltip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
    _this.state = {
      visible: false
    };

    _this.renderContent = function (content) {
      return typeof content === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Small, {
        color: "white"
      }, content) : content;
    };

    _this.hideTooltip = function () {
      _this.setState({
        visible: false
      });
    };

    _this.showTooltip = function () {
      _this.setState({
        visible: true
      });
    };

    _this.onKeyDown = function (event) {
      if (event.key === 'Escape') {
        _this.setState({
          visible: false
        });
      }
    };

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tooltipContainer = document.createElement('div');
      document.body.appendChild(this.tooltipContainer);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltipContainer) {
        document.body.removeChild(this.tooltipContainer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          trigger = _this$props.trigger;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Reference"], null, function (_ref) {
        var ref = _ref.ref;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTooltipTrigger, {
          onBlur: _this2.hideTooltip,
          onFocus: _this2.showTooltip,
          onKeyDown: _this2.onKeyDown,
          onMouseEnter: _this2.showTooltip,
          onMouseLeave: _this2.hideTooltip,
          ref: ref
        }, trigger);
      }), this.tooltipContainer ? Object(react_dom__WEBPACK_IMPORTED_MODULE_8__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"], {
        placement: this.props.placement,
        modifiers: {
          offset: {
            offset: '0, 8'
          }
        }
      }, function (_ref2) {
        var placement = _ref2.placement,
            ref = _ref2.ref,
            style = _ref2.style;
        return _this2.state.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTooltip, {
          ref: ref,
          style: style,
          "data-placement": placement
        }, _this2.renderContent(children));
      }), this.tooltipContainer) : null);
    }
  }]);

  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Tooltip.defaultProps = {
  placement: 'top'
};


//# sourceMappingURL=big-design.es.js.map


/***/ })

})
//# sourceMappingURL=GettingStartedPage.js.6b38ecbb31c9ecb929aa.hot-update.js.map