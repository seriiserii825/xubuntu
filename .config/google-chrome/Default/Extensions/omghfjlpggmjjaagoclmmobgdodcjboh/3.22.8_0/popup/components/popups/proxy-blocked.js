define(["../head.js", "../../tools/sendMessage.js"], function (_head, _sendMessage) {
  "use strict";

  function _templateObject_72a879d08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n      background: rgba(255, 255, 255, 0.5);\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;right:0px;bottom:40px;left:0px;\n      border: 1px solid transparent;\n      border-width: 5px 4px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top:-3px;right:-4px;bottom:-5px;left:-4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n    :host > .In > .Bg > .t,\n    :host > .In > .Bg > .b{\n      height: 11px;\n      text-indent: -9999px;\n      background: url('/images/popup-help/bg_h.png') 0 -22px repeat-x;\n      position: absolute;\n      left: 11px;\n      right: 11px;\n    }\n    :host > .In > .Bg > .t{\n      top: 0;\n    }\n    :host > .In > .Bg > .b{\n      bottom: 0;\n      background-position: 0 -55px;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before,\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      width: 11px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:11px;\n      background: url('/images/popup-help/bg_h.png') 0 0 no-repeat;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before{\n      left: -11px;\n      background-position-x: 0;\n    }\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      right: -11px;\n      background-position-x: 100%;\n    }\n    :host > .In > .Bg > .t:after{\n      background-position-y: -11px;\n    }\n    :host > .In > .Bg > .b:before{\n      background-position-y: -33px;\n    }\n    :host > .In > .Bg > .b:after{\n      background-position-y: -44px;\n    }\n\n    :host > .In > .Bg > .m{\n      position: absolute;\n      top:11px;right:-4px;bottom:11px;left:0px;\n      background:\n        url('/images/popup-help/bg_v.png') -4px 0 repeat-y,\n        url('/images/popup-help/bg_v.png') 100% 0 repeat-y;\n    }\n    :host > .In > .Bg:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top:3px;\n      right:4px;\n      bottom:5px;\n      left:4px;\n      background: #fff;\n      border-radius: 4px;\n    }\n\n    :host > .In > .In{\n      position: relative;\n      display: table;\n      width: 100%;\n      height: 100%;\n    }\n    :host > .In > .In > .In{\n      display: table-cell;\n      vertical-align: middle;\n    }\n\n    .Description{\n      color: #28344f;\n      font-size: 16px;\n      line-height: 1.375;\n      padding: 0 25px;\n      text-align: center;\n    }\n    .Button{\n      text-align: center;\n      padding-top: 25px;\n    }\n    .Button input{\n      display:inline-block;vertical-align:top;\n      box-sizing: content-box;\n      height: 45px;\n      line-height: 45px;\n      border: 0;\n      cursor: pointer;\n      min-width: 200px;\n      padding: 0 15px;\n      background: #3b9946;\n      text-align: center;\n      border-radius: 5px;\n      color: #fff;\n      font-size: 16px;\n      font-weight: 600;\n    }\n    </style>\n\n    <div class=\"Overlay\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\">\n        <div class=\"t\">&nbsp;</div>\n        <div class=\"m\">&nbsp;</div>\n        <div class=\"b\">&nbsp;</div>\n      </div>\n      <div class=\"In\"><div class=\"In\">\n        <div class=\"Description\">\n          [[translations.cantStartBecauseYourProxySettingsBlocked]]\n        </div>\n        <div class=\"Button\"><!--\n       --><input type=\"button\" value=\"[[translations.fixIt]]\" on-click=\"fixIt\"/><!--\n     --></div>\n      </div></div>\n    </div>\n    "]);

    _templateObject_72a879d08dbd11e9a0fdfb2d872ed93a = function _templateObject_72a879d08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'cantStartBecauseYourProxySettingsBlocked': 'cant_start_because_your_proxy_settings_blocked',
    'fixIt': 'fix_it'
  });

  var PopupProxyBlocked =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(PopupProxyBlocked, _PolymerElement);

    function PopupProxyBlocked() {
      babelHelpers.classCallCheck(this, PopupProxyBlocked);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupProxyBlocked).apply(this, arguments));
    }

    babelHelpers.createClass(PopupProxyBlocked, [{
      key: "fixIt",
      // Methods
      value: function () {
        var _fixIt = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _sendMessage.$sendMessageDefault)({
                    'type': 'create tab',
                    'options': '/pages/unblock_proxy/unblock_proxy.html'
                  });

                case 2:
                  window.close();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function fixIt() {
          return _fixIt.apply(this, arguments);
        }

        return fixIt;
      }()
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_72a879d08dbd11e9a0fdfb2d872ed93a());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          }
        };
      }
    }]);
    return PopupProxyBlocked;
  }(_head.PolymerElement);

  customElements.define('popup-proxy-blocked', PopupProxyBlocked);
});