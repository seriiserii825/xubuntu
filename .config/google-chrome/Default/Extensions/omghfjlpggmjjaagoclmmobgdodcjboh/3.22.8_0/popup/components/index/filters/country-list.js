define(["../../head.js"], function (_head) {
  "use strict";

  function _templateObject_72b17a808dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      overflow: auto;\n      position: absolute;\n      background: #fff;\n      border: 1px solid #bcbcbc;\n      padding: 4px 0;\n      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n      box-sizing: border-box;\n    }\n\n    .E{\n      padding: 4px 10px;\n      cursor: pointer;\n      user-select: none;\n    }\n    .E[data-highlight=\"highlighted\"]{\n      background: #f5f5f5;\n    }\n    .E > .In{\n      display: table;\n      width: 100%;\n    }\n\n    .Name{\n      display: table-cell;\n      vertical-align: middle;\n    }\n    .Flag{\n      display: table-cell;\n      vertical-align: middle;\n      padding-left: 10px;\n      width: 1px;\n    }\n    .Flag img{\n      display: block;\n      border-radius: 4px;\n      filter: saturate(135%);\n      opacity:0.7;\n      border: 1px solid rgba(0, 0, 0, 0.22);\n    }\n    .Flag_Off{\n      width: 30px;\n      line-height: 20px;\n      font-size: 14px;\n      color: #994136;\n      text-align: center;\n    }\n\n    .Off{\n      padding-bottom: 10px;\n      margin-bottom: 10px;\n      border-bottom: 1px solid #cccccc;\n    }\n    </style>\n\n    <div class=\"Off\">\n      <div\n        class=\"E\"\n        data-highlight$=\"[[isElementHighlighted(country, '')]]\"\n        on-click=\"offClick\"\n        on-mousemove=\"elementHighlight\">\n        <div class=\"In\">\n          <div class=\"Name\">[[translations.browsecOff]]</div>\n          <div class=\"Flag\"><div class=\"Flag_Off\">[[translations.off]]</div></div>\n        </div>\n      </div>\n    </div>\n    <template is=\"dom-repeat\" items=\"[[countries]]\">\n      <div\n        class=\"E\"\n        data-highlight$=\"[[isElementHighlighted(country, item.code)]]\"\n        on-click=\"elementClick\"\n        on-mousemove=\"elementHighlight\">\n        <div class=\"In\">\n          <div class=\"Name\">[[item.name]]</div>\n          <div class=\"Flag\">\n            <img src$=\"[[flagUrl(item.code)]]\" width=\"30\" height=\"20\" alt=\"\"/>\n          </div>\n        </div>\n      </div>\n    </template>\n    "]);

    _templateObject_72b17a808dbd11e9a0fdfb2d872ed93a = function _templateObject_72b17a808dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'browsecOff': 'browsec_off',
    'off': 'off'
  });

  var FiltersCountryList =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(FiltersCountryList, _PolymerElement);
    babelHelpers.createClass(FiltersCountryList, null, [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_72b17a808dbd11e9a0fdfb2d872ed93a());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'country': {
            'type': String,
            'value': null
          },
          'countries': {
            'type': Array,

            /** @type {Array<Object>} */
            'value': []
          },
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          }
        };
      } // Lifecycle

    }]);

    function FiltersCountryList() {
      var _this;

      babelHelpers.classCallCheck(this, FiltersCountryList);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FiltersCountryList).call(this));
      _this
      /*: any*/
      .keydownListener = _this.keydownListener.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this)));
      return _this;
    }

    babelHelpers.createClass(FiltersCountryList, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersCountryList.prototype), "connectedCallback", this).call(this);
        this.charsBuffer = new _head.$CharsBufferDefault();
        document.addEventListener('keydown', this.keydownListener);
        /** @type {Element} */

        var domRepeat = this.shadowRoot.querySelector('dom-repeat'); // Force <dom-repeat> render

        domRepeat.render();
        var namesData
        /*: Array<CountryObject>*/
        = domRepeat.items.map(function (_ref) {
          var code = _ref.code,
              name = _ref.name;
          return {
            code: code,
            'name': name.toLowerCase()
          };
        });
        this.namesList = Array.from(this.shadowRoot.children).filter(function (element) {
          return element.tagName.toLowerCase() === 'div';
        }) // Exclude 'style'
        .slice(1).map(function (element, index) {
          var _namesData$index = namesData[index],
              code = _namesData$index.code,
              name = _namesData$index.name;
          return {
            element: element,
            code: code,
            name: name
          };
        })
        /*: Array<NameListItem>*/
        ; // Add OFF element

        this.namesList.unshift({
          'code': null,
          'element': this.shadowRoot.querySelector('div.Off > div.E'),
          'name': 'OFF'
        });
        this.charsBuffer.addListener(function (word) {
          var match
          /*: NameListItem | void*/
          = _this2.namesList.find(function (_ref2) {
            var code = _ref2.code,
                name = _ref2.name;
            return code && name.startsWith(word);
          });

          if (!match) return;
          var element = match.element,
              code = match.code;
          _this2.country = code; // Scroll to this element

          _this2.scrollTop = element.offsetTop - 2;
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersCountryList.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this.keydownListener);
      } // Computed properties

    }, {
      key: "flagUrl",
      value: function flagUrl(flag
      /*: string | void*/
      )
      /*: string*/
      {
        if (flag === 'usw') flag = 'us';
        if (flag === 'uk') flag = 'gb';
        return flag ? "/images/flags/".concat(flag, ".svg") : '/images/empty.png';
      }
    }, {
      key: "isElementHighlighted",
      value: function isElementHighlighted(current
      /*: string | null*/
      , local
      /*: string | null*/
      )
      /*: string*/
      {
        local = local || null;
        return current === local ? 'highlighted' : '';
      } // Methods

      /** @method */

    }, {
      key: "elementClick",
      value: function elementClick(_ref3)
      /*: void*/
      {
        var model = _ref3.model;
        var country
        /*: string*/
        = model.get('item.code');
        this.dispatchEvent(new CustomEvent('select', {
          'detail': country
        }));
        this.remove();
      }
      /** @method */

    }, {
      key: "elementHighlight",
      value: function elementHighlight(event
      /*: MouseEvent & {
      'model'?: { 'get': Function },
      'webkitMovementX': number,
      'webkitMovementY': number
      }*/
      )
      /*: void*/
      {
        var model = event.model;
        var mouseReallyMoved = Boolean('movementX' in event ? event.movementX || event.movementY : event.webkitMovementX || event.webkitMovementY);
        if (!mouseReallyMoved) return;
        var country
        /*: string | null*/
        = model ? model.get('item.code') : null;
        this.country = country;
      }
      /** @method */

    }, {
      key: "keydownListener",
      value: function keydownListener(event
      /*: KeyboardEvent*/
      )
      /*: void*/
      {
        var _this3 = this;

        var key = event.key;

        if (key === 'ArrowDown' || key === 'ArrowUp') {
          event.preventDefault();

          var newHighlightedIndex
          /*: integer*/
          = function () {
            var length
            /*: integer*/
            = _this3.namesList.length;

            var index
            /*: integer*/
            = _this3.namesList.findIndex(function (_ref4) {
              var code = _ref4.code;
              return code === _this3.country;
            });

            index = index + (key === 'ArrowDown' ? 1 : -1);
            return (index + length) % length;
          }();

          var data
          /*: NameListItem*/
          = this.namesList[newHighlightedIndex];
          this.country = data.code; // Scroll whole list if new item is partially or not visible

          var topEdge
          /*: number*/
          = this.scrollTop;
          var screenHeight
          /*: number*/
          = this.offsetHeight;
          var bottomEdge
          /*: number*/
          = topEdge + screenHeight;
          var newElementHeight
          /*: number*/
          = data.element.offsetHeight;
          var newElementTopEdge
          /*: number*/
          = data.element.offsetTop;
          var newElementBottomEdge
          /*: number*/
          = newElementTopEdge + newElementHeight;
          var visible
          /*: boolean*/
          = newElementTopEdge >= topEdge && newElementBottomEdge <= bottomEdge;
          if (visible) return;

          var scrollTop
          /*: number*/
          = function () {
            // Hidden item at bottom
            if (newElementTopEdge >= topEdge) {
              return newElementBottomEdge - screenHeight + 2;
            } // Hidden item at top


            return newElementTopEdge - 2;
          }();

          this.scrollTop = scrollTop;
          return;
        }

        if (key === 'Enter') {
          if (this.country) {
            this.dispatchEvent(new CustomEvent('select', {
              'detail': this.country
            }));
          } else this.dispatchEvent(new CustomEvent('disable'));

          this.remove();
          return;
        }

        this.charsBuffer.keydownListener(event);
      }
      /** @method */

    }, {
      key: "offClick",
      value: function offClick()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('disable'));
        this.remove();
      }
    }]);
    return FiltersCountryList;
  }(_head.PolymerElement);

  customElements.define('filters-country-list', FiltersCountryList);
});