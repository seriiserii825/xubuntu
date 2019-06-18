define(["exports", "./head.js", "../tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$contextMenuTemplateDefault = _exports.$contextMenuTemplate = void 0;

  function _templateObject_70315f508dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host{\n  display: block;\n  position: absolute;\n  bottom: 40px;\n  font-size: 12px;\n  color: #28344f;\n}\n:host > .Bg{\n  position: absolute;\n  top:0px;right:-2px;bottom:-4px;left:-2px;\n  font-size: 0;\n}\n:host > .Bg > .t,\n:host > .Bg > .b{\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: url('/images/context_menu_h.png') 0 0 no-repeat;\n  overflow: hidden;\n}\n:host > .Bg > .t{\n  top: 0;\n  height: 7px;\n}\n:host > .Bg > .t:before,\n:host > .Bg > .t:after{\n  content: '';\n  display: block;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:7px;\n}\n:host > .Bg > .t:before{\n  width: 7px;\n  background: url('/images/context_menu_h.png') 100% -7px no-repeat;\n  margin-left: auto;\n}\n:host > .Bg > .t:after{\n  position: absolute;\n  top:0px;right:7px;left:7px;\n  background: url('/images/context_menu_h.png') 0 -14px repeat-x;\n}\n:host > .Bg > .b{\n  bottom: 0;\n  height: 8px;\n  background-position: 0 -21px;\n}\n:host > .Bg > .b:before,\n:host > .Bg > .b:after{\n  content: '';\n  display: block;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:8px;\n}\n:host > .Bg > .b:before{\n  width: 7px;\n  background: url('/images/context_menu_h.png') 100% -29px no-repeat;\n  margin-left: auto;\n}\n:host > .Bg > .b:after{\n  position: absolute;\n  top:0px;right:7px;left:7px;\n  background: url('/images/context_menu_h.png') 100% -37px repeat-x;\n}\n:host > .Bg > .m{\n  position: absolute;\n  top:7px;right:0px;bottom:8px;left:0px;\n  overflow: hidden;\n  background: url('/images/context_menu_v.png') -7px 0 repeat-y;\n}\n:host > .Bg > .m:before{\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;right: 0;bottom: 0;\n  width: 7px;\n  background: url('/images/context_menu_v.png') 0 0 repeat-y;\n}\n:host > .In{\n  position: relative;\n  border: 1px solid #bcbcbc;\n  border-radius: 3px;\n  background: #fff;\n}\n\n.Element{\n  padding: 0 12px;\n  line-height: 34px;\n  white-space: nowrap;\n  cursor: pointer;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.Element:hover{\n  background: #28344f;\n  color: #fff;\n}\n.Element ~ .Element{\n  border: 1px solid #e6e6e6;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n.Element:last-child{\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n</style>\n\n<div class=\"Bg\">\n  <div class=\"t\">&nbsp;</div>\n  <div class=\"m\">&nbsp;</div>\n  <div class=\"b\">&nbsp;</div>\n</div>\n<div class=\"In\">\n  <template is=\"dom-if\" if=\"[[conditionState(domain, containsFilter, 0)]]\">\n    <div class=\"Element\" on-click=\"addFilter\">\n      [[domainTextTranslation('addSettingFor', unicodeDomain)]]\n    </div>\n  </template>\n  <template is=\"dom-if\" if=\"[[conditionState(domain, containsFilter, 1)]]\">\n    <div class=\"Element\" on-click=\"removeFilter\">\n      [[domainTextTranslation('deleteSettingFor', unicodeDomain)]]\n    </div>\n  </template>\n  <template is=\"dom-if\" if=\"[[showEditSmartSettings]]\">\n    <div class=\"Element\" on-click=\"editSettings\">\n      [[translations.editSmartSettings]]\n    </div>\n  </template>\n  <div class=\"Element\" on-click=\"openHelp\">[[translations.help]]</div>\n</div>\n"]);

    _templateObject_70315f508dbd11e9a0fdfb2d872ed93a = function _templateObject_70315f508dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var template = (0, _head.html)(_templateObject_70315f508dbd11e9a0fdfb2d872ed93a());
  _exports.$contextMenuTemplateDefault = template;
  var contextMenuTemplate = {
    default: template
  };
  _exports.$contextMenuTemplate = contextMenuTemplate;
  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'help': 'help',
    'addSettingFor': 'add_smart_setting_for_X',
    'deleteSettingFor': 'delete_smart_setting_for_X',
    'editSmartSettings': 'edit_smart_settings'
  });

  var ContextMenu =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(ContextMenu, _connect);

    function ContextMenu() {
      babelHelpers.classCallCheck(this, ContextMenu);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ContextMenu).apply(this, arguments));
    }

    babelHelpers.createClass(ContextMenu, [{
      key: "stateChanged",
      value: function stateChanged(_ref)
      /*: void*/
      {
        var page = _ref.page;

        this.showEditSmartSettings = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] !== 'index' || parts[1] !== 'filters';
        }();
      } // Observers

      /** @method */

    }, {
      key: "observeDomain",
      value: function () {
        var _observeDomain = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(domain) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (domain) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return _head.$punycodeDefault.toUnicode(domain);

                case 4:
                  this.unicodeDomain = _context.sent;

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function observeDomain(_x) {
          return _observeDomain.apply(this, arguments);
        }

        return observeDomain;
      }() // Computed properties

      /** @method */

    }, {
      key: "conditionState",
      value: function conditionState(domain, containsFilter, value)
      /*: boolean*/
      {
        return !domain ? false : containsFilter === Boolean(value);
      }
      /** @method */

    }, {
      key: "domainTextTranslation",
      value: function domainTextTranslation(property
      /*: string*/
      , domain
      /*: string*/
      )
      /*: string*/
      {
        return translations[property].replace(/XXX/g, domain);
      } // Methods

      /** @method */

    }, {
      key: "addFilter",
      value: function addFilter()
      /*: void*/
      {
        var _store$getState = _head.$storeDefault.getState(),
            filters = _store$getState['pac'].filters,
            premiumUser = _store$getState['user']['premium'];

        if (premiumUser || !filters.length) {
          // Moving to filters page with specific domain
          _head.$storeDefault.dispatch({
            'type': 'Page change',
            'page': 'index:filters:' + this.domain
          });
        } else this.showPremiumPopup();

        this.remove();
      }
      /** @method */

    }, {
      key: "removeFilter",
      value: function removeFilter()
      /*: void*/
      {
        _head.$proxyDefault.siteFilters.remove(this.domain);

        this.remove();
      }
      /** @method */

    }, {
      key: "editSettings",
      value: function editSettings()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open list'
        });

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:filters'
        });

        this.remove();
      }
      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open help'
        });
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'create tab',
          'options': '/pages/help/help.html'
        });
        this.remove();
      }
      /** @method */

    }, {
      key: "showPremiumPopup",
      value: function () {
        var _showPremiumPopup = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var popupPremium;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  popupPremium
                  /*: HTMLElement*/
                  = document.createElement('popup-premium-onerule');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context2.next = 6;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 6:
                  popupPremium.style.cssText = '';

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function showPremiumPopup() {
          return _showPremiumPopup.apply(this, arguments);
        }

        return showPremiumPopup;
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
          'containsFilter': {
            'type': Boolean,
            'value': null
          },
          'domain': {
            'type': String,
            'value': '',
            'notify': true,
            'observer': 'observeDomain'
          },
          'showEditSmartSettings': {
            'type': Boolean
          },
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          },
          'unicodeDomain': {
            'type': String,
            'value': ''
          }
        };
      }
    }]);
    return ContextMenu;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('context-menu', ContextMenu);
});