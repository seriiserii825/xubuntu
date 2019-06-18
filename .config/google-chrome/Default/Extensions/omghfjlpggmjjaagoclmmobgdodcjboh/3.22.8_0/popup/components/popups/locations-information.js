define(["../head.js"], function (_head) {
  "use strict";

  function _templateObject_7297b0f08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n      background: rgba(255, 255, 255, 0.5);\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;right:0px;bottom:40px;left:0px;\n      border: 1px solid transparent;\n      border-width: 5px 4px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top:-3px;right:-4px;bottom:-5px;left:-4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n    :host > .In > .Bg > .t,\n    :host > .In > .Bg > .b{\n      height: 11px;\n      text-indent: -9999px;\n      background: url('/images/popup-help/bg_h.png') 0 -22px repeat-x;\n      position: absolute;\n      left: 11px;\n      right: 11px;\n    }\n    :host > .In > .Bg > .t{\n      top: 0;\n    }\n    :host > .In > .Bg > .b{\n      bottom: 0;\n      background-position: 0 -55px;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before,\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      width: 11px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:11px;\n      background: url('/images/popup-help/bg_h.png') 0 0 no-repeat;\n    }\n    :host > .In > .Bg > .t:before,\n    :host > .In > .Bg > .b:before{\n      left: -11px;\n      background-position-x: 0;\n    }\n    :host > .In > .Bg > .t:after,\n    :host > .In > .Bg > .b:after{\n      right: -11px;\n      background-position-x: 100%;\n    }\n    :host > .In > .Bg > .t:after{\n      background-position-y: -11px;\n    }\n    :host > .In > .Bg > .b:before{\n      background-position-y: -33px;\n    }\n    :host > .In > .Bg > .b:after{\n      background-position-y: -44px;\n    }\n\n    :host > .In > .Bg > .m{\n      position: absolute;\n      top:11px;right:-4px;bottom:11px;left:0px;\n      background:\n        url('/images/popup-help/bg_v.png') -4px 0 repeat-y,\n        url('/images/popup-help/bg_v.png') 100% 0 repeat-y;\n    }\n    :host > .In > .Bg:after{\n      content: '';\n      display: block;\n      position: absolute;\n      top:3px;\n      right:4px;\n      bottom:5px;\n      left:4px;\n      background: #fff;\n      border-radius: 4px;\n    }\n\n    :host > .In > .In{\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n    :host > .In > .In > .In{\n      position: absolute;\n      left: 20px;\n      right: 20px;\n      top: 25px;\n      bottom: 20px;\n      overflow: auto;\n    }\n    :host > .In > .In > .In::-webkit-scrollbar{\n      width: 6px;\n    }\n    :host > .In > .In > .In::-webkit-scrollbar-track{\n      border-radius: 3px;\n      background: rgba(255,255,255,0);\n    }\n    :host > .In > .In > .In::-webkit-scrollbar-thumb{\n      border-radius: 3px;\n      background: #aaa;\n    }\n\n    .Text{\n      color: #28344f;\n      font-size: 14px;\n      line-height: 1.375;\n    }\n    .Title{\n      font-size: 18px;\n      font-weight: 600;\n      padding-bottom: 15px;\n    }\n    .Text p + p{\n      padding-top: 1em;\n    }\n\n    .Close{\n      background: url('/images/popup_close.png') 0 0 no-repeat;\n      width: 12px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:12px;\n      position: absolute;\n      right: 11px;\n      top: 11px;\n      border: 5px solid transparent;\n      cursor: pointer;\n    }\n    .Close:hover{\n      background-position-y: -50px;\n    }\n    </style>\n\n    <div class=\"Overlay\" on-click=\"close\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\">\n        <div class=\"t\">&nbsp;</div>\n        <div class=\"m\">&nbsp;</div>\n        <div class=\"b\">&nbsp;</div>\n      </div>\n      <div class=\"In\">\n        <div class=\"In Text\">\n          <p>[[translations.text1]]</p>\n          <p>[[translations.text2]]</p>\n          <p>[[translations.text3]]</p>\n        </div>\n        <div class=\"Close\" on-click=\"close\">X</div>\n      </div>\n    </div>\n    "]);

    _templateObject_7297b0f08dbd11e9a0fdfb2d872ed93a = function _templateObject_7297b0f08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'text1': 'locations_help_1',
    'text2': 'locations_help_2',
    'text3': 'locations_help_3'
  });

  var PopupLocationsInformation =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(PopupLocationsInformation, _PolymerElement);

    function PopupLocationsInformation() {
      babelHelpers.classCallCheck(this, PopupLocationsInformation);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupLocationsInformation).apply(this, arguments));
    }

    babelHelpers.createClass(PopupLocationsInformation, [{
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
                  this.remove();

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
        return (0, _head.html)(_templateObject_7297b0f08dbd11e9a0fdfb2d872ed93a());
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
    return PopupLocationsInformation;
  }(_head.PolymerElement);

  customElements.define('popup-locations-information', PopupLocationsInformation);
});