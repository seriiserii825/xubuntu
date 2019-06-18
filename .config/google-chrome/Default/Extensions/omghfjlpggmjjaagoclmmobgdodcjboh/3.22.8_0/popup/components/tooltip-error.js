define(["./head.js"], function (_head) {
  "use strict";

  function _templateObject_728b7bf08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      position: absolute;\n    }\n    :host > .Shadow{\n      position: absolute;\n      top:-10px;right:-14px;bottom:-18px;left:-14px;\n      font-size: 0;\n      background:\n        url('/images/tooltip-error/shadow_v.png') -14px 24px no-repeat,\n        url('/images/tooltip-error/shadow_v.png') calc(100% + 14px) 24px no-repeat;\n      background-size: 28px calc(100% - 54px), 28px calc(100% - 54px);\n    }\n    :host > .Shadow:before,\n    :host > .Shadow:after{\n      content: '';\n      display: block;\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n    :host > .Shadow:before{\n      top: 0;\n      background:\n        url('/images/tooltip-error/shadow_h.png') 0 0 no-repeat,\n        url('/images/tooltip-error/shadow_h.png') 100% -24px no-repeat,\n        url('/images/tooltip-error/shadow_h.png') 30px -48px no-repeat;\n      background-size: auto, auto, calc(100% - 60px) 162px;\n      overflow:hidden;text-indent:-9999px;height:0;padding-top:24px;\n    }\n    :host > .Shadow:after{\n      bottom: 0;\n      background:\n        url('/images/tooltip-error/shadow_h.png') 0 -72px no-repeat,\n        url('/images/tooltip-error/shadow_h.png') 100% -102px no-repeat,\n        url('/images/tooltip-error/shadow_h.png') 30px -132px no-repeat;\n      background-size: auto, auto, calc(100% - 60px) 162px;\n      overflow:hidden;text-indent:-9999px;height:0;padding-top:30px;\n    }\n    :host > .Bg{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      background: #faf5f5;\n      border-radius: 4px;\n      border: 1px solid #8e3c33;\n      font-size: 0;\n    }\n    :host > .Bg:after{\n      content: '';\n      display: block;\n      background: url('/images/tooltip-error/bg_corner.png') 0 0 no-repeat;\n      width: 10px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:6px;\n      position: absolute;\n      left: 16px;\n      top: -6px;\n    }\n    :host > .In{\n      position: relative;\n      color: #994136;\n      font-size: 12px;\n      padding: 4px 11px;\n      line-height: 19px;\n      min-height: 19px; /* NOTE border in .Bg */\n      min-width: 12px;\n    }\n    </style>\n\n    <div class=\"Shadow\"></div>\n    <div class=\"Bg\"></div>\n    <div class=\"In\">[[text]]</div>\n    "]);

    _templateObject_728b7bf08dbd11e9a0fdfb2d872ed93a = function _templateObject_728b7bf08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var TooltipError =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(TooltipError, _PolymerElement);

    function TooltipError() {
      babelHelpers.classCallCheck(this, TooltipError);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TooltipError).apply(this, arguments));
    }

    babelHelpers.createClass(TooltipError, null, [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_728b7bf08dbd11e9a0fdfb2d872ed93a());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'text': {
            'type': String,
            'value': ''
          }
        };
      }
    }]);
    return TooltipError;
  }(_head.PolymerElement);

  customElements.define('tooltip-error', TooltipError);
});