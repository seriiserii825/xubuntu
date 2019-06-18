define(["exports", "../head.js"], function (_exports, _head) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$premiumTemplateDefault = _exports.$premiumTemplate = void 0;

  function _templateObject_72a593a08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host{\n  display: block;\n  position: absolute;\n  z-index: 3;\n  top:0px;\n  right:0px;\n  left:0px;\n  height: 100%;\n  background: #fff;\n}\n\n.Head{\n  background: #28344f;\n  color: #fff;\n  text-align: center;\n  font-size: 17px;\n  line-height: 36px;\n  font-weight: 500;\n  position: relative;\n  padding: 9px 10px 9px;\n  height: auto;\n  overflow: visible;\n}\n\n.Close{\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -16px;\n  cursor: pointer;\n  color: #7e8595;\n  font-size: 32px;\n  line-height: 1;\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Close:hover{\n  color:#fff;\n}\n.Close:before{\n  content: \"\\e904\";\n}\n\n.Features{\n  padding: 10px 35px 15px 10px;\n  color: #7a7c7f;\n}\n.Features > .e{\n  min-height: 95px;\n  box-sizing: border-box;\n  padding: 4px 0 0px 90px;\n  position: relative;\n}\n:host(.withPrice) .Features > .e{\n  min-height: 82px;\n}\n.Features > .e:before{\n  content: \"\";\n  width: 67px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:67px;\n  position: absolute;\n  left: 4px;\n  top: 10px;\n  background: url('/images/promos/advantages.png') no-repeat scroll -300px -300px;\n}\n.Features > .e.iconMoreCountries:before{\n  background-position: 0 0;\n}\n.Features > .e.iconFastSpeed:before{\n  background-position: 0 -67px;\n}\n.Features > .e.iconServers:before{\n  background-position: 0 -134px;\n}\n\n.Feature_Name{\n  color: #28334e;\n  font-size: 17px;\n  margin: 9px 0 2px;\n  line-height: 1.29;\n}\n.Feature_Text{\n  font-size: 15px;\n  line-height: 1.25;\n}\n\n.Button_Out{\n  /*position: absolute;right:5px;bottom:5px;left:5px;*/\n  padding: 0 5px;\n}\n.Button{\n  display: table;\n  width: 100%;\n  height: 45px;\n  background: #3d973f;\n  text-align: center;\n  border-radius: 4px;\n}\n:host(.withPrice) .Button{\n  height: 60px;\n}\n.Button:link,\n.Button:visited,\n.Button:hover,\n.Button:active{\n  color: #fff;\n  text-decoration: none;\n}\n.Button *{\n  cursor: pointer;\n}\n.Button>.In{\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.Button_Name{\n  display: block;\n  font-size: 17px;\n}\n:host(.withPrice) .Button_Name{\n  font-weight: 600;\n  font-size: 18px;\n}\n.Button_Price{\n  display: block;\n  font-size: 14px;\n}\n\n.Guarantee{\n  color: #808080;\n  font-size: 12px;\n  text-align: center;\n  padding-top: 7px;\n}\n</style>\n\n<div class=\"Head\">\n  [[translations.browsecPremium]]\n  <div class=\"Close\" on-click=\"close\"></div>\n</div>\n<div class=\"Features\">\n  <div class=\"e iconMoreCountries\">\n    <div class=\"Feature_Name\">[[translations.premiumLocations]]</div>\n    <div class=\"Feature_Text\">[[translations.accessInternet]]</div>\n  </div>\n  <div class=\"e iconFastSpeed\">\n    <div class=\"Feature_Name\">[[translations.turboSpeed]]</div>\n    <div class=\"Feature_Text\">[[translations.dedicatedLanes]]</div>\n  </div>\n  <div class=\"e iconServers\">\n    <div class=\"Feature_Name\">[[translations.premiumServers]]</div>\n    <div class=\"Feature_Text\">[[translations.performanceGuaranteed]]</div>\n  </div>\n</div>\n<div class=\"Button_Out\">\n  <a href=\"[[premiumLink]]\" class=\"Button\" on-click=\"linkClick\" target=\"_blank\">\n    <span class=\"In\">\n      <span class=\"Button_Name\">[[translations.getPremiumNow]]</span>\n      <template is=\"dom-if\" if=\"[[withPrice]]\">\n        <span class=\"Button_Price\">[[translations.onlyPricePerMonth]]</span>\n      </template>\n    </span>\n  </a>\n</div>\n<template is=\"dom-if\" if=\"[[withPrice]]\">\n  <div class=\"Guarantee\">[[translations.moneyBackGuarantee]]</div>\n</template>\n"], ["\n<style include=\"global-style\">\n:host{\n  display: block;\n  position: absolute;\n  z-index: 3;\n  top:0px;\n  right:0px;\n  left:0px;\n  height: 100%;\n  background: #fff;\n}\n\n.Head{\n  background: #28344f;\n  color: #fff;\n  text-align: center;\n  font-size: 17px;\n  line-height: 36px;\n  font-weight: 500;\n  position: relative;\n  padding: 9px 10px 9px;\n  height: auto;\n  overflow: visible;\n}\n\n.Close{\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -16px;\n  cursor: pointer;\n  color: #7e8595;\n  font-size: 32px;\n  line-height: 1;\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Close:hover{\n  color:#fff;\n}\n.Close:before{\n  content: \"\\\\e904\";\n}\n\n.Features{\n  padding: 10px 35px 15px 10px;\n  color: #7a7c7f;\n}\n.Features > .e{\n  min-height: 95px;\n  box-sizing: border-box;\n  padding: 4px 0 0px 90px;\n  position: relative;\n}\n:host(.withPrice) .Features > .e{\n  min-height: 82px;\n}\n.Features > .e:before{\n  content: \"\";\n  width: 67px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:67px;\n  position: absolute;\n  left: 4px;\n  top: 10px;\n  background: url('/images/promos/advantages.png') no-repeat scroll -300px -300px;\n}\n.Features > .e.iconMoreCountries:before{\n  background-position: 0 0;\n}\n.Features > .e.iconFastSpeed:before{\n  background-position: 0 -67px;\n}\n.Features > .e.iconServers:before{\n  background-position: 0 -134px;\n}\n\n.Feature_Name{\n  color: #28334e;\n  font-size: 17px;\n  margin: 9px 0 2px;\n  line-height: 1.29;\n}\n.Feature_Text{\n  font-size: 15px;\n  line-height: 1.25;\n}\n\n.Button_Out{\n  /*position: absolute;right:5px;bottom:5px;left:5px;*/\n  padding: 0 5px;\n}\n.Button{\n  display: table;\n  width: 100%;\n  height: 45px;\n  background: #3d973f;\n  text-align: center;\n  border-radius: 4px;\n}\n:host(.withPrice) .Button{\n  height: 60px;\n}\n.Button:link,\n.Button:visited,\n.Button:hover,\n.Button:active{\n  color: #fff;\n  text-decoration: none;\n}\n.Button *{\n  cursor: pointer;\n}\n.Button>.In{\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.Button_Name{\n  display: block;\n  font-size: 17px;\n}\n:host(.withPrice) .Button_Name{\n  font-weight: 600;\n  font-size: 18px;\n}\n.Button_Price{\n  display: block;\n  font-size: 14px;\n}\n\n.Guarantee{\n  color: #808080;\n  font-size: 12px;\n  text-align: center;\n  padding-top: 7px;\n}\n</style>\n\n<div class=\"Head\">\n  [[translations.browsecPremium]]\n  <div class=\"Close\" on-click=\"close\"></div>\n</div>\n<div class=\"Features\">\n  <div class=\"e iconMoreCountries\">\n    <div class=\"Feature_Name\">[[translations.premiumLocations]]</div>\n    <div class=\"Feature_Text\">[[translations.accessInternet]]</div>\n  </div>\n  <div class=\"e iconFastSpeed\">\n    <div class=\"Feature_Name\">[[translations.turboSpeed]]</div>\n    <div class=\"Feature_Text\">[[translations.dedicatedLanes]]</div>\n  </div>\n  <div class=\"e iconServers\">\n    <div class=\"Feature_Name\">[[translations.premiumServers]]</div>\n    <div class=\"Feature_Text\">[[translations.performanceGuaranteed]]</div>\n  </div>\n</div>\n<div class=\"Button_Out\">\n  <a href=\"[[premiumLink]]\" class=\"Button\" on-click=\"linkClick\" target=\"_blank\">\n    <span class=\"In\">\n      <span class=\"Button_Name\">[[translations.getPremiumNow]]</span>\n      <template is=\"dom-if\" if=\"[[withPrice]]\">\n        <span class=\"Button_Price\">[[translations.onlyPricePerMonth]]</span>\n      </template>\n    </span>\n  </a>\n</div>\n<template is=\"dom-if\" if=\"[[withPrice]]\">\n  <div class=\"Guarantee\">[[translations.moneyBackGuarantee]]</div>\n</template>\n"]);

    _templateObject_72a593a08dbd11e9a0fdfb2d872ed93a = function _templateObject_72a593a08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var template = (0, _head.html)(_templateObject_72a593a08dbd11e9a0fdfb2d872ed93a());
  _exports.$premiumTemplateDefault = template;
  var premiumTemplate = {
    default: template
  };
  _exports.$premiumTemplate = premiumTemplate;
  var price
  /*: string*/
  = '3.33';
  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'accessInternet': 'access_internet_via_premium_locations',
    'browsecPremium': 'browsec_premium',
    'dedicatedLanes': 'dedicated_traffic_lanes',
    'getPremiumNow': 'get_premium_now',
    'moneyBackGuarantee': '7_days_money_back_guarantee',
    'premiumLocations': 'premium_locations',
    'premiumServers': 'premium_servers',
    'performanceGuaranteed': 'top_performance_guaranteed',
    'turboSpeed': 'turbo_speed'
  });
  translations.onlyPricePerMonth = (0, _head.$internationalizeDefault)('only_X_per_month').replace(/XXX/g, price);

  var PopupPremium =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(PopupPremium, _PolymerElement);

    function PopupPremium() {
      babelHelpers.classCallCheck(this, PopupPremium);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupPremium).apply(this, arguments));
    }

    babelHelpers.createClass(PopupPremium, [{
      key: "ready",
      // Lifecycle
      value: function ready() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PopupPremium.prototype), "ready", this).call(this);
        if (Math.floor(Math.random() * 2) === 1) this.withPrice = true;
      } // Computed properties

    }, {
      key: "computePremiumLink",
      value: function computePremiumLink(country, withPrice) {
        var _window = window,
            browsecLink = _window.browsecLink,
            pageLinks = _window.pageLinks;
        return browsecLink(pageLinks.premium, function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension',
            'utm_medium': 'premium_div',
            'utm_campaign': 'premium_div-' + country,
            'utm_term': withPrice ? 'Get Premium now! only $3.33 per month' : 'Get Premium now!'
          });
        });
      }
    }, {
      key: "observeWithPrice",
      value: function observeWithPrice(withPrice) {
        this.classList[withPrice ? 'add' : 'remove']('withPrice');
      } // Methods

    }, {
      key: "linkClick",
      value: function () {
        var _linkClick = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  (0, _head.$gaDefault)('premium', 'click'); // For FF and early Chrome

                  _context.next = 3;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 50);
                  });

                case 3:
                  if (window && window.close) window.close();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function linkClick() {
          return _linkClick.apply(this, arguments);
        }

        return linkClick;
      }()
    }, {
      key: "close",
      value: function () {
        var _close = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return window.anime({
                    'targets': this,
                    'top': '-100%',
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 2:
                  this.remove();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function close() {
          return _close.apply(this, arguments);
        }

        return close;
      }()
    }], [{
      key: "template",
      get: function get() {
        return template;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'country': {
            'type': String,
            'value': ''
          },
          'premiumLink': {
            'type': String,
            'computed': 'computePremiumLink(country, withPrice)'
          },
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          },
          'withPrice': {
            'type': Boolean,
            'value': false,
            'observer': 'observeWithPrice'
          }
        };
      }
    }]);
    return PopupPremium;
  }(_head.PolymerElement);

  customElements.define('popup-premium', PopupPremium);
});