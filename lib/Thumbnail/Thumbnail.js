'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thumbnailSizes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Thumbnail.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var thumbnailSizes = exports.thumbnailSizes = {
  'small': 'thumbnailSmall',
  'medium': 'thumbnailMedium',
  'large': 'thumbnailLarge'
};

var Thumbnail = function (_Component) {
  _inherits(Thumbnail, _Component);

  function Thumbnail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Thumbnail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call.apply(_ref, [this].concat(args))), _this), _this.renderThumbnail = function () {
      if (_this.props.source) {
        return _react2.default.createElement('img', { src: _this.props.source, alt: _this.props.alt });
      } else {
        return _react2.default.createElement('div', { className: 'thumbnailPlaceholder' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Thumbnail, [{
    key: 'render',
    value: function render() {
      var classes = ['thumbnail'];
      classes.push(thumbnailSizes[this.props.size]);
      return _react2.default.createElement(
        'span',
        { className: classes.join(' ') },
        this.renderThumbnail()
      );
    }
  }]);

  return Thumbnail;
}(_react.Component);

Thumbnail.propTypes = {
  source: _propTypes2.default.string,
  alt: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(Object.keys(thumbnailSizes))
};
Thumbnail.defaultProps = {
  size: 'medium'
};
exports.default = Thumbnail;