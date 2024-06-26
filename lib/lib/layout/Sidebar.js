"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _generic = require("../utility/generic");
var _GroupSortable = _interopRequireDefault(require("./GroupSortable"));
var _GroupContent = _interopRequireDefault(require("./GroupContent"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sidebar = exports["default"] = /*#__PURE__*/function (_Component) {
  function Sidebar() {
    _classCallCheck(this, Sidebar);
    return _callSuper(this, Sidebar, arguments);
  }
  _inherits(Sidebar, _Component);
  return _createClass(Sidebar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(nextProps.keys === this.props.keys && nextProps.width === this.props.width && nextProps.height === this.props.height && (0, _generic.arraysEqual)(nextProps.groups, this.props.groups) && (0, _generic.arraysEqual)(nextProps.groupHeights, this.props.groupHeights) && nextProps.isShowInforGemba === this.props.isShowInforGemba && nextProps.isShowDragHandleButton === this.props.isShowDragHandleButton && nextProps.sortOrderTaskList === this.props.sortOrderTaskList);
    }
  }, {
    key: "renderGroupContent",
    value: function renderGroupContent(group, isRightSidebar, groupTitleKey, groupRightTitleKey) {
      if (this.props.groupRenderer) {
        return /*#__PURE__*/_react["default"].createElement(this.props.groupRenderer, {
          group: group,
          isRightSidebar: isRightSidebar
        });
      } else {
        return (0, _generic._get)(group, isRightSidebar ? groupRightTitleKey : groupTitleKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        width = _this$props.width,
        groupHeights = _this$props.groupHeights,
        height = _this$props.height,
        isRightSidebar = _this$props.isRightSidebar,
        isShowDragHandleButton = _this$props.isShowDragHandleButton,
        sortOrderTaskList = _this$props.sortOrderTaskList,
        canSortableGroups = _this$props.canSortableGroups,
        groupRenderer = _this$props.groupRenderer;
      var _this$props$keys = this.props.keys,
        groupIdKey = _this$props$keys.groupIdKey,
        groupTitleKey = _this$props$keys.groupTitleKey,
        groupRightTitleKey = _this$props$keys.groupRightTitleKey;
      var sidebarStyle = {
        width: "".concat(width, "px"),
        height: "".concat(height, "px")
      };
      var groupsStyle = {
        width: "".concat(width, "px")
      };
      var groupLines = this.props.groups.map(function (group, index) {
        var elementStyle = {
          height: "".concat(groupHeights[index], "px"),
          lineHeight: "".concat(groupHeights[index], "px")
        };
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
          key: (0, _generic._get)(group, groupIdKey)
        }, !(group !== null && group !== void 0 && group.isHide) && !(group !== null && group !== void 0 && group.isMerge) || group !== null && group !== void 0 && group.isMerge ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "rct-sidebar-row rct-sidebar-row-".concat(index % 2 === 0 ? 'even' : 'odd', " ").concat(group !== null && group !== void 0 && group.isMerge ? 'rct-sidebar-row-full-width' : ''),
          style: elementStyle
        }, /*#__PURE__*/_react["default"].createElement(_GroupContent["default"], {
          group: group,
          isRightSidebar: isRightSidebar,
          groupTitleKey: groupTitleKey,
          groupRightTitleKey: groupRightTitleKey,
          groupRenderer: groupRenderer
        })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'rct-sidebar' + (isRightSidebar ? ' rct-sidebar-right' : ''),
        style: sidebarStyle
      }, canSortableGroups ? /*#__PURE__*/_react["default"].createElement("div", {
        style: groupsStyle
      }, /*#__PURE__*/_react["default"].createElement(_GroupSortable["default"], {
        groups: this.props.groups,
        groupHeights: groupHeights,
        isRightSidebar: isRightSidebar,
        groupTitleKey: groupTitleKey,
        groupRightTitleKey: groupRightTitleKey,
        groupIdKey: groupIdKey,
        groupRenderer: this.props.groupRenderer,
        sortOrderTaskList: sortOrderTaskList,
        isShowDragHandleButton: isShowDragHandleButton,
        openAddGroupForm: this.props.openAddGroupForm
      })) : /*#__PURE__*/_react["default"].createElement("div", {
        style: groupsStyle
      }, groupLines));
    }
  }]);
}(_react.Component);
_defineProperty(Sidebar, "propTypes", {
  groups: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  groupHeights: _propTypes["default"].array.isRequired,
  keys: _propTypes["default"].object.isRequired,
  groupRenderer: _propTypes["default"].func,
  isRightSidebar: _propTypes["default"].bool,
  isShowDragHandleButton: _propTypes["default"].bool,
  sortOrderTaskList: _propTypes["default"].func,
  openAddGroupForm: _propTypes["default"].func
});