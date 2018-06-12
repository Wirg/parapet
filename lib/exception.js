"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtendableError = function (_Error) {
  _inherits(ExtendableError, _Error);

  function ExtendableError(message) {
    _classCallCheck(this, ExtendableError);

    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

    Error.captureStackTrace(_this, ExtendableError);
    return _this;
  }

  return ExtendableError;
}(Error);

var ParapetException = function (_ExtendableError) {
  _inherits(ParapetException, _ExtendableError);

  function ParapetException(name, message, tags) {
    _classCallCheck(this, ParapetException);

    var _this2 = _possibleConstructorReturn(this, (ParapetException.__proto__ || Object.getPrototypeOf(ParapetException)).call(this, message));

    _this2.name = name;
    _this2.tags = tags;
    return _this2;
  }

  return ParapetException;
}(ExtendableError);

exports.default = ParapetException;
//# sourceMappingURL=exception.js.map