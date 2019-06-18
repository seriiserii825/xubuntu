define(["../head.js"], function (_head) {
  "use strict";

  function _templateObject_72936b308dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;right:0px;bottom:40px;left:0px;\n      border: 1px solid transparent;\n      border-width: 5px 4px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top:-3px;right:-4px;bottom:-5px;left:-4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n    :host > .In > .Bg > .t,\n    :host > .In > .Bg > .b{\n      height: 11px;\n      text-indent: -9999px;\n      background: url('/images/popup-help/bg_h.png') 0 -22px repeat-x;\n      position: absolute;\n      left: 11px;\n      right: 11px;\n    }\n    :host > .In > .Bg > .t{\n      top: 0;\n    }\n    :host > .In > .Bg > .b{\n      bottom: 0;\n      background-position: 0 -55px;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before,\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      width: 11px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:11px;\n      background: url('/images/popup-help/bg_h.png') 0 0 no-repeat;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before{\n      left: -11px;\n      background-position-x: 0;\n    }\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      right: -11px;\n      background-position-x: 100%;\n    }\n    :host > .In > .Bg > .t:after{\n      background-position-y: -11px;\n    }\n    :host > .In > .Bg > .b:before{\n      background-position-y: -33px;\n    }\n    :host > .In > .Bg > .b:after{\n      background-position-y: -44px;\n    }\n\n    :host > .In > .Bg > .m{\n      position: absolute;\n      top: 11px;\n      right: -4px;\n      bottom: 11px;\n      left: 0px;\n      background:\n        url('/images/popup-help/bg_v.png') -4px 0 repeat-y,\n        url('/images/popup-help/bg_v.png') 100% 0 repeat-y;\n    }\n    :host > .In > .Bg:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top:3px;\n      right:4px;\n      bottom:5px;\n      left:4px;\n      background: #fff;\n      border-radius: 4px;\n    }\n    :host > .In > .In{\n      position: relative;\n      padding: 27px 20px;\n    }\n\n    .Title{\n      font-size: 18px;\n      padding-bottom: 15px;\n      font-weight: 600;\n    }\n    .Description{\n      padding-bottom: 20px;\n    }\n    ul{\n      list-style: none;\n    }\n    ul > li{\n      padding-left: 20px;\n      position: relative;\n    }\n    ul > li:after{\n      content: '';\n      display: block;\n      background: url('/images/popup-help/check.png') 0 0 no-repeat;\n      width: 14px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:10px;\n      position: absolute;\n      top: 5px;\n      left: 0;\n    }\n    ul > li + li{\n      border-top: 7px solid transparent;\n    }\n    .Button{\n      text-align: center;\n      padding-top: 15px;\n\n    }\n    .Button input{\n      display:inline-block;\n      vertical-align:top;\n      box-sizing: content-box;\n      height: 45px;\n      line-height: 45px;\n      border: 0;\n      cursor: pointer;\n      min-width: 200px;\n      padding: 0 15px;\n      background: #3b9946;\n      text-align: center;\n      border-radius: 5px;\n      color: #fff;\n      font-size: 16px;\n      font-weight: 600;\n    }\n\n    .Close{\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      background: url('/images/popup_close.png') 0 0 no-repeat;\n      width: 12px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:12px;\n      cursor: pointer;\n    }\n    .Close:hover{\n      background-position: 0 -50px;\n    }\n    </style>\n\n    <div class=\"Overlay\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\">\n        <div class=\"t\">&nbsp;</div>\n        <div class=\"m\">&nbsp;</div>\n        <div class=\"b\">&nbsp;</div>\n      </div>\n      <div class=\"In\">\n        <div class=\"Title\">[[translations.smartSettingsControl]]</div>\n        <div class=\"Description\">[[translations.withSmartSettingsYouCan]]</div>\n        <div class=\"Features\">\n          <ul>\n            <li>[[translations.smartSettingsFeatures1]]</li>\n            <li>[[translations.smartSettingsFeatures2]]</li>\n            <li>[[translations.smartSettingsFeatures3]]</li>\n          </ul>\n        </div>\n        <div class=\"Button\"><input type=\"button\" value=\"[[translations.okIGotIt]]\" on-click=\"close\"/></div>\n        <div class=\"Close\" on-click=\"close\">X</div>\n      </div>\n    </div>\n    "]);

    _templateObject_72936b308dbd11e9a0fdfb2d872ed93a = function _templateObject_72936b308dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'okIGotIt': 'ok_i_got_it',
    'smartSettingsControl': 'smart_settings_allow_you_to_control',
    'smartSettingsFeatures1': 'smart_settings_features_1',
    'smartSettingsFeatures2': 'smart_settings_features_2',
    'smartSettingsFeatures3': 'smart_settings_features_3',
    'withSmartSettingsYouCan': 'with_smart_settings_you_can'
  });

  var PopupHelp =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(PopupHelp, _PolymerElement);

    function PopupHelp() {
      babelHelpers.classCallCheck(this, PopupHelp);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupHelp).apply(this, arguments));
    }

    babelHelpers.createClass(PopupHelp, [{
      key: "close",
      // Methods
      value: function () {
        var _close = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return window.anime({
                    'targets': this,
                    'opacity': 0,
                    'duration': 400,
                    'easing': 'linear'
                  }).finished;

                case 2:
                  this.style.cssText = 'display:none'; // this.remove();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function close() {
          return _close.apply(this, arguments);
        }

        return close;
      }()
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_72936b308dbd11e9a0fdfb2d872ed93a());
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
    return PopupHelp;
  }(_head.PolymerElement);

  customElements.define('popup-help', PopupHelp);
});