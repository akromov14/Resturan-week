"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    img {\n        height: 400px !important;\n       \n    }\n    .tabiat{\n        object-fit: cover;\n        width: 400px;\n        height: 400px !important;\n        clip-path: polygon(0 0, 0% 100%, 100% 100%);\n      \n    }\n    .Resturan{\n        object-fit: cover;\n        width: 400px;\n        height: 400px !important;\n        clip-path: polygon(0 0, 100% 0, 100% 100%);\n        margin-left: 20px !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents["default"].div(_templateObject());

exports.ImgWrapper = ImgWrapper;