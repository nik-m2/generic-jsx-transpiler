"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DefaultSerializer =
/*#__PURE__*/
function () {
  function DefaultSerializer() {
    _classCallCheck(this, DefaultSerializer);
  }
  /**
   * Should recursively serialize a parsed component
   * 
   * @param ParsedComponent parsedComponent 
   * @returns a string containing a valid JS statement resulting in a single value
   */


  _createClass(DefaultSerializer, [{
    key: "serialize",
    value: function serialize(parsedComponent) {
      return parsedComponent.toJS();
    }
  }, {
    key: "createImports",
    value: function createImports() {
      return "";
    }
  }]);

  return DefaultSerializer;
}();

exports.default = DefaultSerializer;