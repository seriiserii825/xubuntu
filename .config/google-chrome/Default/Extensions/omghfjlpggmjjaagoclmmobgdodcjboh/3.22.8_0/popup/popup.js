define(["exports", "./components/head.js", "./tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$urlModifyParametersDefault = _exports.$generateBrowsecLinkDefault = _exports.$urlModifyParameters = _exports.$generateBrowsecLink = void 0;
  var _
  /*: Lodash*/
  = window._;
  /** @function */

  var urlModifyParameters = function urlModifyParameters(url
  /*: string*/
  , action
  /*: Function*/
  )
  /*: string*/
  {
    var urlObject = new URL(url);
    var search
    /*: Object*/
    = urlObject.search ? _.transform(urlObject.search.replace(/^\?/, '').split('&'), function (carry, part) {
      var _part$split = part.split('='),
          _part$split2 = babelHelpers.slicedToArray(_part$split, 2),
          left = _part$split2[0],
          right = _part$split2[1];

      carry[left] = right ? decodeURIComponent(right) : true;
    }, {}) : {};
    search = action(search);

    urlObject.search = function () {
      /** @type {array<string>} */
      var parts = _.transform(search, function (carry, value, property) {
        carry.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }, []);

      return parts.length ? '?' + parts.join('&') : '';
    }();

    return urlObject.toString();
  };

  _exports.$urlModifyParametersDefault = urlModifyParameters;
  var urlModifyParameters$1 = {
    default: urlModifyParameters
  };
  _exports.$urlModifyParameters = urlModifyParameters$1;

  var generateBrowsecLink = function generateBrowsecLink(storeState
  /*: StoreState*/
  ) {
    return function (url
    /*: string*/
    )
    /*: string*/
    {
      var action
      /*: Function*/
      = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (search) {
        return search;
      };

      /** @function */
      var daysAction = function daysAction(search
      /*: Object*/
      ) {
        return (
          /*: Object*/
          Object.assign(action(search), {
            'instd': storeState.daysAfterInstall
          })
        );
      };

      return urlModifyParameters(url, daysAction);
    };
  };

  _exports.$generateBrowsecLinkDefault = generateBrowsecLink;
  var generateBrowsecLink$1 = {
    default: generateBrowsecLink
  };
  _exports.$generateBrowsecLink = generateBrowsecLink$1;
  var _window = window,
      _$1 = _window._;
  /** @function */

  var triggerPersonalBannerView =
  /*#__PURE__*/
  function () {
    var _ref = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(activePromotion
    /*: Promotion | void*/
    ) {
      var _store$getState, user, untilDate, userClosedWarnToPremiumEndDate, condition;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _store$getState = _head.$storeDefault.getState(), user = _store$getState.user;

              if (!(user.premium && user.subscription)) {
                _context.next = 9;
                break;
              }

              // user.subscription -> Flow crap
              untilDate = new Date(user.subscription.paidUntil);
              _context.next = 5;
              return _head.$storageDefault.get('userClosedWarnToPremiumEndDate');

            case 5:
              userClosedWarnToPremiumEndDate = _context.sent;
              condition = _$1.get(user, 'subscription.auto_renewal') || // Only payment without subscription
              userClosedWarnToPremiumEndDate === String(untilDate) || Date.now() < untilDate.getTime() - 1000 * 3600 * 24 * 2; // Minus two days before expiration

              if (condition) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return");

            case 9:
              if (!(activePromotion && activePromotion.banner)) {
                _context.next = 13;
                break;
              }

              _context.next = 12;
              return new Promise(function (resolve) {
                setTimeout(resolve, 2000);
              });

            case 12:
              (0, _sendMessage.$sendMessageDefault)({
                'type': 'personal banner view',
                'id': activePromotion.id
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function triggerPersonalBannerView(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  babelHelpers.asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var pageLoadTimer, _ref3, _ref4, activePromotion, config, controlState, domainZoneList, pageLinks, showSpeedPromo, storeState;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pageLoadTimer = new _head.$DelayRecordDefault('Popup: page load');

            window.onerror = function (message, fileName, lineNumber) {
              (0, _sendMessage.$sendMessageDefault)({
                'type': 'popup error',
                'data': {
                  message: message,
                  fileName: fileName,
                  lineNumber: lineNumber
                }
              });
              return false;
            }; // Show speed banner


            _context3.next = 4;
            return Promise.all([// eslint-disable-line standard/array-bracket-even-spacing
            (0, _sendMessage.$sendMessageDefault)({
              'type': 'get promotions'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'config'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'popup open'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'domain zone list'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'page links'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'show speed promo'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'store.getState'
            })]);

          case 4:
            _ref3 = _context3.sent;
            _ref4 = babelHelpers.slicedToArray(_ref3, 7);
            activePromotion
            /*: Promotion | void*/
            = _ref4[0];
            config = _ref4[1];
            controlState
            /*: boolean*/
            = _ref4[2];
            domainZoneList = _ref4[3];
            pageLinks = _ref4[4];
            showSpeedPromo
            /*: boolean*/
            = _ref4[5];
            storeState
            /*: StoreState*/
            = _ref4[6];
            Object.assign(window, {
              activePromotion: activePromotion,
              config: config,
              domainZoneList: domainZoneList,
              pageLinks: pageLinks,
              showSpeedPromo: showSpeedPromo
            });
            /*::( window.showSpeedPromo: boolean );*/

            _head.$storeDefault.activate(storeState);

            window.browsecLink = generateBrowsecLink(storeState);

            if (!(_head.$storeDefault.getState().page !== 'index:home')) {
              _context3.next = 19;
              break;
            }

            _context3.next = 19;
            return _head.$storeDefault.dispatch({
              'type': 'Page change',
              'page': 'index:home'
            });

          case 19:
            // Current visible promo view
            triggerPersonalBannerView(activePromotion);

            (function () {
              var parent
              /*: HTMLElement | null*/
              = document.querySelector('div.MainContainer');
              if (!parent) return; // Flow crap

              var appendElementsTimer = new _head.$DelayRecordDefault('Popup: append elements');
              var elements
              /*: Array<string>*/
              = ['main-head', 'page-switch'];
              if (!controlState) elements.push('popup-proxy-blocked');
              elements.forEach(function (element) {
                parent.appendChild(document.createElement(element));
              });
              appendElementsTimer.end();
              pageLoadTimer.end();
            })(); // Subscribe to user logined <--> unlogined


            _head.$storeDefault.compare(function (_ref5) {
              var user = _ref5.user;
              return Boolean(user.email);
            },
            /*#__PURE__*/
            babelHelpers.asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return (0, _sendMessage.$sendMessageDefault)({
                        'type': 'get promotions'
                      });

                    case 2:
                      window.activePromotion = _context2.sent;
                      triggerPersonalBannerView(window.activePromotion);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }))); // PolymerRedux problems resolve


            window.addEventListener('unload', function () {
              if (!document.body) return; // Flow crap

              Array.from(document.body.children).forEach(function (element) {
                if (element.tagName.toLowerCase() === 'script') return;
                if (document.body) document.body.removeChild(element); // Flow crap
              });
            });

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }))();
});