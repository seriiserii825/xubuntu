define(["./head.js"], function (_head) {
  "use strict";

  function _templateObject_70335b208dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      position: absolute;\n    }\n    :host > .Bg{\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    :host > .Bg:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top:0px;left:0px;\n      width: 100%;\n      height: 100%;\n      background: #28344f;\n      border-radius: 4px;\n      overflow: hidden;\n      text-indent: -9999px;\n    }\n    :host > .Bg > .Corner{\n      position: absolute;\n      left: 16px;\n      bottom: 100%;\n      width: 10px;\n      height: 5px;\n      overflow: hidden;\n    }\n    :host > .Bg > .Corner:after{\n      content: '';\n      display: block;\n      border: 5px solid transparent;\n      border-bottom-color: #28344f;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      margin-top: -5px;\n    }\n    :host > .In{\n      position: relative;\n      padding: 5px 14px;\n      color: #fff;\n      font-size: 12px;\n    }\n    </style>\n\n    <div class=\"Bg\"><div class=\"Corner\"></div></div>\n    <div class=\"In\">[[text]]</div>\n    "]);

    _templateObject_70335b208dbd11e9a0fdfb2d872ed93a = function _templateObject_70335b208dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var GeneralTooltip =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(GeneralTooltip, _PolymerElement);

    function GeneralTooltip() {
      babelHelpers.classCallCheck(this, GeneralTooltip);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GeneralTooltip).apply(this, arguments));
    }

    babelHelpers.createClass(GeneralTooltip, null, [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_70335b208dbd11e9a0fdfb2d872ed93a());
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
    return GeneralTooltip;
  }(_head.PolymerElement);

  customElements.define('general-tooltip', GeneralTooltip);
});