define(["exports", "meta", "../tools/sendMessage.js"], function (_exports, meta, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _exports.dumpRegistrations = dumpRegistrations;
  _exports.dashToCamelCase = dashToCamelCase;
  _exports.camelToDashCase = camelToDashCase;
  _exports.isPath = isPath;
  _exports.root = root;
  _exports.isAncestor = isAncestor;
  _exports.isDescendant = isDescendant;
  _exports.translate = translate;
  _exports.matches = matches;
  _exports.normalize = normalize;
  _exports.split = split;
  _exports.get = _get;
  _exports.set = _set;
  _exports.resolveUrl = _resolveUrl;
  _exports.resolveCss = resolveCss;
  _exports.pathFromUrl = pathFromUrl;
  _exports.stylesFromModules = stylesFromModules;
  _exports.stylesFromModule = stylesFromModule;
  _exports.stylesFromTemplate = stylesFromTemplate;
  _exports.stylesFromModuleImports = stylesFromModuleImports;
  _exports.cssFromModules = cssFromModules;
  _exports.cssFromModule = cssFromModule;
  _exports.cssFromTemplate = cssFromTemplate;
  _exports.cssFromModuleImports = cssFromModuleImports;
  _exports.templatize = templatize;
  _exports.modelForElement = modelForElement;
  _exports.$CharsBufferDefault = CharsBuffer;
  _exports.$storeDefault = _exports.$storageDefault = _exports.$punycodeDefault = _exports.$proxyDefault = _exports.$permissionsDefault = _exports.$internationalizeDefault = _exports.$gaDefault = _exports.$createTranslationObjectDefault = _exports.$actionsDefault = _exports.$DelayRecordDefault = _exports.$headTemplateDefault = _exports.connect = _exports.PolymerElement = _exports.TemplateInstanceBase = _exports.setAllowTemplateFromDomModule = _exports.allowTemplateFromDomModule = _exports.setStrictTemplatePolicy = _exports.strictTemplatePolicy = _exports.setPassiveTouchGestures = _exports.passiveTouchGestures = _exports.setSanitizeDOMValue = _exports.sanitizeDOMValue = _exports.setRootPath = _exports.rootPath = _exports.useNativeCustomElements = _exports.useNativeCSSProperties = _exports.useShadow = _exports.isDeep = _exports.dedupingMixin = _exports.htmlLiteral = _exports.html = _exports.html$1 = _exports.flush = _exports.enqueueDebouncer = _exports.Debouncer = _exports.microTask = _exports.idlePeriod = _exports.animationFrame = _exports.timeOut = _exports.TemplateStamp = _exports.PropertyEffects = _exports.PropertyAccessors = _exports.PropertiesMixin = _exports.PropertiesChanged = _exports.OptionalMutableData = _exports.MutableData = _exports.updateStyles = _exports.registrations = _exports.instanceCount = _exports.ElementMixin = _exports.version$1 = _exports.version = _exports.DomModule = _exports.DomIf = _exports.$store = _exports.$storage = _exports.$punycode = _exports.$proxy = _exports.$permissions = _exports.$internationalize = _exports.$ga = _exports.$createTranslationObject = _exports.$actions = _exports.$DelayRecord = _exports.$CharsBuffer = _exports.$headTemplate = _exports.$connectMixin = _exports.$polymerElement = _exports.$templatize = _exports.$styleGather = _exports.$settings = _exports.$resolveUrl = _exports.$path = _exports.$mixin = _exports.$htmlTag = _exports.$flush = _exports.$debounce = _exports.$caseMap = _exports.$async = _exports.$templateStamp = _exports.$propertyEffects = _exports.$propertyAccessors = _exports.$propertiesMixin = _exports.$propertiesChanged = _exports.$mutableData = _exports.$elementMixin = _exports.$domModule = _exports.$domIf = void 0;
  meta = babelHelpers.interopRequireWildcard(meta);

  function _templateObject2_714148b08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      padding: 5px 5px 0 5px;\n      float: left;\n    }\n\n    img{\n      display: block;\n    }\n    </style>\n\n    <template is=\"dom-if\" if=\"[[premium]]\">\n      <img class=\"Head_Logo_Premium\" src=\"/images/ext-logo.png\" width=\"142\" height=\"46\" />\n    </template>\n    <template is=\"dom-if\" if=\"[[!premium]]\">\n      <img class=\"Head_Logo_Free\" src=\"/images/ext-logo-wo-premium.png\" width=\"142\" height=\"46\" />\n    </template>\n    "]);

    _templateObject2_714148b08dbd11e9a0fdfb2d872ed93a = function _templateObject2_714148b08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  function _templateObject_714148b08dbd11e9a0fdfb2d872ed93a() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host{\n  display: block;\n  height: 56px;\n  line-height: 56px;\n  border: 1px solid #28344f;\n  border-width: 0 5px;\n  background: #28344f;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n:host:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n:host > .In{\n  overflow: hidden;\n  height: 100%;\n  text-align: right;\n}\n\n.GoBack{\n  cursor: pointer;\n  display:inline-block;\n  vertical-align:middle;\n  position:relative;\n  color:#b3becf;\n  font-size:14px;\n  text-decoration: underline;\n  padding: 0 5px 0 18px;\n}\n.GoBack:hover{\n  color:white;\n  text-decoration: none;\n}\n.GoBack:before{\n  content:'';\n  background: url('/images/icon-back.png') no-repeat 50% 50%;\n  width: 13px;\n  height: 13px;\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -6px;\n}\n\n.LoginGuest{\n  color: #fff;\n  cursor: pointer;\n  text-decoration: underline;\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 5px 0 5px;\n}\n.LoginGuest:hover{\n  text-decoration: none;\n}\n\n.Logined{\n  height: 24px;\n  line-height: 24px;\n  width: 100%;\n  display:inline-block;\n  vertical-align:top;\n  vertical-align: middle;\n}\n.Logined:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n\n.Logout{\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 26px;\n  color: #b3becf;\n  float: right;\n\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Logout:before{\n  content: \"\\e903\";\n}\n.Logout:hover{\n  color: #fff;\n}\n\n.Mail{\n  vertical-align: middle;\n  padding: 0 8px 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n</style>\n\n<head-logo premium=[[user.premium]]></head-logo>\n<div class=\"In\">\n  <template is=\"dom-if\" if=\"[[indexPage]]\">\n    <template is=\"dom-if\" if=\"[[!user.email]]\">\n      <div class=\"LoginGuest\" on-click=\"login\">\n        [[translations.signIn]]\n      </div>\n    </template>\n    <template is=\"dom-if\" if=\"[[user.email]]\">\n      <div class=\"Logined\">\n        <div class=\"Logout\" on-click=\"logout\" title=\"[[translations.signOut]]\"></div>\n        <div class=\"Mail\" title=\"[[user.email]]\">[[user.email]]</div>\n      </div>\n    </template>\n  </template>\n  <template is=\"dom-if\" if=\"[[!indexPage]]\">\n    <div class=\"GoBack\" on-click=\"back\">[[translations.goBack]]</div>\n  </template>\n</div>\n"], ["\n<style include=\"global-style\">\n:host{\n  display: block;\n  height: 56px;\n  line-height: 56px;\n  border: 1px solid #28344f;\n  border-width: 0 5px;\n  background: #28344f;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n:host:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n:host > .In{\n  overflow: hidden;\n  height: 100%;\n  text-align: right;\n}\n\n.GoBack{\n  cursor: pointer;\n  display:inline-block;\n  vertical-align:middle;\n  position:relative;\n  color:#b3becf;\n  font-size:14px;\n  text-decoration: underline;\n  padding: 0 5px 0 18px;\n}\n.GoBack:hover{\n  color:white;\n  text-decoration: none;\n}\n.GoBack:before{\n  content:'';\n  background: url('/images/icon-back.png') no-repeat 50% 50%;\n  width: 13px;\n  height: 13px;\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -6px;\n}\n\n.LoginGuest{\n  color: #fff;\n  cursor: pointer;\n  text-decoration: underline;\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 5px 0 5px;\n}\n.LoginGuest:hover{\n  text-decoration: none;\n}\n\n.Logined{\n  height: 24px;\n  line-height: 24px;\n  width: 100%;\n  display:inline-block;\n  vertical-align:top;\n  vertical-align: middle;\n}\n.Logined:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n\n.Logout{\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 26px;\n  color: #b3becf;\n  float: right;\n\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Logout:before{\n  content: \"\\\\e903\";\n}\n.Logout:hover{\n  color: #fff;\n}\n\n.Mail{\n  vertical-align: middle;\n  padding: 0 8px 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n</style>\n\n<head-logo premium=[[user.premium]]></head-logo>\n<div class=\"In\">\n  <template is=\"dom-if\" if=\"[[indexPage]]\">\n    <template is=\"dom-if\" if=\"[[!user.email]]\">\n      <div class=\"LoginGuest\" on-click=\"login\">\n        [[translations.signIn]]\n      </div>\n    </template>\n    <template is=\"dom-if\" if=\"[[user.email]]\">\n      <div class=\"Logined\">\n        <div class=\"Logout\" on-click=\"logout\" title=\"[[translations.signOut]]\"></div>\n        <div class=\"Mail\" title=\"[[user.email]]\">[[user.email]]</div>\n      </div>\n    </template>\n  </template>\n  <template is=\"dom-if\" if=\"[[!indexPage]]\">\n    <div class=\"GoBack\" on-click=\"back\">[[translations.goBack]]</div>\n  </template>\n</div>\n"]);

    _templateObject_714148b08dbd11e9a0fdfb2d872ed93a = function _templateObject_714148b08dbd11e9a0fdfb2d872ed93a() {
      return data;
    };

    return data;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /* eslint-disable no-unused-vars */

  /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
   * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
   *
   * @param {string} prop Property name
   * @param {?Object} obj Reference object
   * @return {string} Potentially renamed property name
   */
  window.JSCompiler_renameProperty = function (prop, obj) {
    return prop;
  };
  /* eslint-enable */


  var CSS_URL_RX = /(url\()([^)]*)(\))/g;
  var ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
  var workingURL;
  var resolveDoc;
  /**
   * Resolves the given URL against the provided `baseUri'.
   *
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */

  function _resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    } // Lazy feature detection.


    if (workingURL === undefined) {
      workingURL = false;

      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        workingURL = u.href === 'http://a/c%20d';
      } catch (e) {// silently fail
      }
    }

    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }

    if (workingURL) {
      return new URL(url, baseURI).href;
    } // Fallback to creating an anchor into a disconnected document.


    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument('temp');
      resolveDoc.base = resolveDoc.createElement('base');
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement('a');
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }

    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;
  }
  /**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */


  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
      return pre + '\'' + _resolveUrl(url.replace(/["']/g, ''), baseURI) + '\'' + post;
    });
  }
  /**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */


  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf('/') + 1);
  }

  var resolveUrl$1 = {
    resolveUrl: _resolveUrl,
    resolveCss: resolveCss,
    pathFromUrl: pathFromUrl
  };
  _exports.$resolveUrl = resolveUrl$1;
  var useShadow = !window.ShadyDOM;
  _exports.useShadow = useShadow;
  var useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  _exports.useNativeCSSProperties = useNativeCSSProperties;
  var useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback;
  /**
          * Globally settable property that is automatically assigned to
          * `ElementMixin` instances, useful for binding in templates to
          * make URL's relative to an application's root.  Defaults to the main
          * document URL, but can be overridden by users.  It may be useful to set
          * `rootPath` to provide a stable application mount path when
          * using client side routing.
          */

  _exports.useNativeCustomElements = useNativeCustomElements;
  var rootPath = undefined || pathFromUrl(document.baseURI || window.location.href);
  /**
          * Sets the global rootPath property used by `ElementMixin` and
          * available via `rootPath`.
          *
          * @param {string} path The new root path
          * @return {void}
          */

  _exports.rootPath = rootPath;

  var setRootPath = function setRootPath(path) {
    _exports.rootPath = rootPath = path;
  };
  /**
   * A global callback used to sanitize any value before inserting it into the DOM.
   * The callback signature is:
   *
   *  function sanitizeDOMValue(value, name, type, node) { ... }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,Node):*)|undefined}
   */


  _exports.setRootPath = setRootPath;
  var sanitizeDOMValue = window.Polymer && window.Polymer.sanitizeDOMValue || undefined;
  /**
          * Sets the global sanitizeDOMValue available via this module's exported
          * `sanitizeDOMValue` variable.
          *
          * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
          * @return {void}
          */

  _exports.sanitizeDOMValue = sanitizeDOMValue;

  var setSanitizeDOMValue = function setSanitizeDOMValue(newSanitizeDOMValue) {
    _exports.sanitizeDOMValue = sanitizeDOMValue = newSanitizeDOMValue;
  };
  /**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   */


  _exports.setSanitizeDOMValue = setSanitizeDOMValue;
  var passiveTouchGestures = false;
  /**
          * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
          *
          * @param {boolean} usePassive enable or disable passive touch gestures globally
          * @return {void}
          */

  _exports.passiveTouchGestures = passiveTouchGestures;

  var setPassiveTouchGestures = function setPassiveTouchGestures(usePassive) {
    _exports.passiveTouchGestures = passiveTouchGestures = usePassive;
  };
  /**
   * Setting to ensure Polymer template evaluation only occurs based on tempates
   * defined in trusted script.  When true, `<dom-module>` re-registration is
   * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
   * templates will only evaluate in the context of a trusted element template.
   */


  _exports.setPassiveTouchGestures = setPassiveTouchGestures;
  var strictTemplatePolicy = false;
  /**
          * Sets `strictTemplatePolicy` globally for all elements
          *
          * @param {boolean} useStrictPolicy enable or disable strict template policy
          *   globally
          * @return {void}
          */

  _exports.strictTemplatePolicy = strictTemplatePolicy;

  var setStrictTemplatePolicy = function setStrictTemplatePolicy(useStrictPolicy) {
    _exports.strictTemplatePolicy = strictTemplatePolicy = useStrictPolicy;
  };
  /**
   * Setting to enable dom-module lookup from Polymer.Element.  By default,
   * templates must be defined in script using the `static get template()`
   * getter and the `html` tag function.  To enable legacy loading of templates
   * via dom-module, set this flag to true.
   */


  _exports.setStrictTemplatePolicy = setStrictTemplatePolicy;
  var allowTemplateFromDomModule = false;
  /**
          * Sets `lookupTemplateFromDomModule` globally for all elements
          *
          * @param {boolean} allowDomModule enable or disable template lookup 
          *   globally
          * @return {void}
          */

  _exports.allowTemplateFromDomModule = allowTemplateFromDomModule;

  var setAllowTemplateFromDomModule = function setAllowTemplateFromDomModule(allowDomModule) {
    _exports.allowTemplateFromDomModule = allowTemplateFromDomModule = allowDomModule;
  };

  _exports.setAllowTemplateFromDomModule = setAllowTemplateFromDomModule;
  var settings = {
    useShadow: useShadow,
    useNativeCSSProperties: useNativeCSSProperties,
    useNativeCustomElements: useNativeCustomElements,

    get rootPath() {
      return rootPath;
    },

    setRootPath: setRootPath,

    get sanitizeDOMValue() {
      return sanitizeDOMValue;
    },

    setSanitizeDOMValue: setSanitizeDOMValue,

    get passiveTouchGestures() {
      return passiveTouchGestures;
    },

    setPassiveTouchGestures: setPassiveTouchGestures,

    get strictTemplatePolicy() {
      return strictTemplatePolicy;
    },

    setStrictTemplatePolicy: setStrictTemplatePolicy,

    get allowTemplateFromDomModule() {
      return allowTemplateFromDomModule;
    },

    setAllowTemplateFromDomModule: setAllowTemplateFromDomModule
  };
  _exports.$settings = settings;
  var dedupeId = 0;
  /**
   * @constructor
   * @extends {Function}
   * @private
   */

  function MixinFunction() {}
  /** @type {(WeakMap | undefined)} */


  MixinFunction.prototype.__mixinApplications;
  /** @type {(Object | undefined)} */

  MixinFunction.prototype.__mixinSet;
  /* eslint-disable valid-jsdoc */

  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */

  var dedupingMixin = function dedupingMixin(mixin) {
    var mixinApplications =
    /** @type {!MixinFunction} */
    mixin.__mixinApplications;

    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */

      mixin.__mixinApplications = mixinApplications;
    } // maintain a unique id for each mixin


    var mixinDedupeId = dedupeId++;

    function dedupingMixin(base) {
      var baseSet =
      /** @type {!MixinFunction} */
      base.__mixinSet;

      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }

      var map = mixinApplications;
      var extended = map.get(base);

      if (!extended) {
        extended =
        /** @type {!Function} */
        mixin(base);
        map.set(base, extended);
      } // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.


      var mixinSet = Object.create(
      /** @type {!MixinFunction} */
      extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */

      extended.__mixinSet = mixinSet;
      return extended;
    }

    return dedupingMixin;
  };
  /* eslint-enable valid-jsdoc */


  _exports.dedupingMixin = dedupingMixin;
  var mixin = {
    dedupingMixin: dedupingMixin
  };
  _exports.$mixin = mixin;
  var modules = {};
  var lcModules = {};
  /**
   * Sets a dom-module into the global registry by id.
   *
   * @param {string} id dom-module id
   * @param {DomModule} module dom-module instance
   * @return {void}
   */

  function setModule(id, module) {
    // store id separate from lowercased id so that
    // in all cases mixedCase id will stored distinctly
    // and lowercase version is a fallback
    modules[id] = lcModules[id.toLowerCase()] = module;
  }
  /**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */


  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }

  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector('style')) {
      console.warn('dom-module %s has style outside template', inst.id);
    }
  }
  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */


  var DomModule =
  /*#__PURE__*/
  function (_HTMLElement) {
    babelHelpers.inherits(DomModule, _HTMLElement);

    function DomModule() {
      babelHelpers.classCallCheck(this, DomModule);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DomModule).apply(this, arguments));
    }

    babelHelpers.createClass(DomModule, [{
      key: "attributeChangedCallback",

      /* eslint-disable no-unused-vars */

      /**
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @override
       */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this.register();
        }
      }
      /* eslint-enable no-unused-args */

      /**
       * The absolute URL of the original location of this `dom-module`.
       *
       * This value will differ from this element's `ownerDocument` in the
       * following ways:
       * - Takes into account any `assetpath` attribute added during bundling
       *   to indicate the original location relative to the bundled location
       * - Uses the HTMLImports polyfill's `importForElement` API to ensure
       *   the path is relative to the import document's location since
       *   `ownerDocument` is not currently polyfilled
       */

    }, {
      key: "register",

      /**
       * Registers the dom-module at a given id. This method should only be called
       * when a dom-module is imperatively created. For
       * example, `document.createElement('dom-module').register('foo')`.
       * @param {string=} id The id at which to register the dom-module.
       * @return {void}
       */
      value: function register(id) {
        id = id || this.id;

        if (id) {
          // Under strictTemplatePolicy, reject and null out any re-registered
          // dom-module since it is ambiguous whether first-in or last-in is trusted
          if (strictTemplatePolicy && findModule(id) !== undefined) {
            setModule(id, null);
            throw new Error("strictTemplatePolicy: dom-module ".concat(id, " re-registered"));
          }

          this.id = id;
          setModule(id, this);
          styleOutsideTemplateCheck(this);
        }
      }
    }, {
      key: "assetpath",
      get: function get() {
        // Don't override existing assetpath.
        if (!this.__assetpath) {
          // note: assetpath set via an attribute must be relative to this
          // element's location; accomodate polyfilled HTMLImports
          var owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;

          var url = _resolveUrl(this.getAttribute('assetpath') || '', owner.baseURI);

          this.__assetpath = pathFromUrl(url);
        }

        return this.__assetpath;
      }
    }], [{
      key: "import",

      /**
       * Retrieves the element specified by the css `selector` in the module
       * registered by `id`. For example, this.import('foo', 'img');
       * @param {string} id The id of the dom-module in which to search.
       * @param {string=} selector The css selector by which to find the element.
       * @return {Element} Returns the element which matches `selector` in the
       * module registered at the specified `id`.
       *
       * @export
       * @nocollapse Referred to indirectly in style-gather.js
       */
      value: function _import(id, selector) {
        if (id) {
          var m = findModule(id);

          if (m && selector) {
            return m.querySelector(selector);
          }

          return m;
        }

        return null;
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ['id'];
      }
    }]);
    return DomModule;
  }(babelHelpers.wrapNativeSuper(HTMLElement));

  _exports.DomModule = DomModule;
  DomModule.prototype['modules'] = modules;
  customElements.define('dom-module', DomModule);
  var domModule = {
    DomModule: DomModule
  };
  _exports.$domModule = domModule;
  var MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
  var INCLUDE_ATTR = 'include';
  var SHADY_UNSCOPED_ATTR = 'shady-unscoped';
  /**
   * @param {string} moduleId .
   * @return {?DomModule} .
   */

  function importModule(moduleId) {
    return (
      /** @type {?DomModule} */
      DomModule.import(moduleId)
    );
  }

  function styleForImport(importDoc) {
    // NOTE: polyfill affordance.
    // under the HTMLImports polyfill, there will be no 'body',
    // but the import pseudo-doc can be used directly.
    var container = importDoc.body ? importDoc.body : importDoc;
    var importCss = resolveCss(container.textContent, importDoc.baseURI);
    var style = document.createElement('style');
    style.textContent = importCss;
    return style;
  }
  /** @typedef {{assetpath: string}} */


  var templateWithAssetPath; // eslint-disable-line no-unused-vars

  /**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @function
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
   */

  function stylesFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var styles = [];

    for (var i = 0; i < modules.length; i++) {
      styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromModule(modules[i])));
    }

    return styles;
  }
  /**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */


  function stylesFromModule(moduleId) {
    var m = importModule(moduleId);

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
      return [];
    }

    if (m._styles === undefined) {
      var styles = []; // module imports: <link rel="import" type="css">

      styles.push.apply(styles, babelHelpers.toConsumableArray(_stylesFromModuleImports(m))); // include css from the first template in the module

      var _template =
      /** @type {?HTMLTemplateElement} */
      m.querySelector('template');

      if (_template) {
        styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromTemplate(_template,
        /** @type {templateWithAssetPath} */
        m.assetpath)));
      }

      m._styles = styles;
    }

    return m._styles;
  }
  /**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */


  function stylesFromTemplate(template, baseURI) {
    if (!template._styles) {
      var styles = []; // if element is a template, get content from its .content

      var e$ = template.content.querySelectorAll('style');

      for (var i = 0; i < e$.length; i++) {
        var e = e$[i]; // support style sharing by allowing styles to "include"
        // other dom-modules that contain styling

        var include = e.getAttribute(INCLUDE_ATTR);

        if (include) {
          styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromModules(include).filter(function (item, index, self) {
            return self.indexOf(item) === index;
          })));
        }

        if (baseURI) {
          e.textContent = resolveCss(e.textContent, baseURI);
        }

        styles.push(e);
      }

      template._styles = styles;
    }

    return template._styles;
  }
  /**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */


  function stylesFromModuleImports(moduleId) {
    var m = importModule(moduleId);
    return m ? _stylesFromModuleImports(m) : [];
  }
  /**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */


  function _stylesFromModuleImports(module) {
    var styles = [];
    var p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);

    for (var i = 0; i < p$.length; i++) {
      var p = p$[i];

      if (p.import) {
        var importDoc = p.import;
        var unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);

        if (unscoped && !importDoc._unscopedStyle) {
          var style = styleForImport(importDoc);
          style.setAttribute(SHADY_UNSCOPED_ATTR, '');
          importDoc._unscopedStyle = style;
        } else if (!importDoc._style) {
          importDoc._style = styleForImport(importDoc);
        }

        styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
      }
    }

    return styles;
  }
  /**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */


  function cssFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var cssText = '';

    for (var i = 0; i < modules.length; i++) {
      cssText += cssFromModule(modules[i]);
    }

    return cssText;
  }
  /**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */


  function cssFromModule(moduleId) {
    var m = importModule(moduleId);

    if (m && m._cssText === undefined) {
      // module imports: <link rel="import" type="css">
      var cssText = _cssFromModuleImports(m); // include css from the first template in the module


      var t =
      /** @type {?HTMLTemplateElement} */
      m.querySelector('template');

      if (t) {
        cssText += cssFromTemplate(t,
        /** @type {templateWithAssetPath} */
        m.assetpath);
      }

      m._cssText = cssText || null;
    }

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
    }

    return m && m._cssText || '';
  }
  /**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */


  function cssFromTemplate(template, baseURI) {
    var cssText = '';
    var e$ = stylesFromTemplate(template, baseURI); // if element is a template, get content from its .content

    for (var i = 0; i < e$.length; i++) {
      var e = e$[i];

      if (e.parentNode) {
        e.parentNode.removeChild(e);
      }

      cssText += e.textContent;
    }

    return cssText;
  }
  /**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */


  function cssFromModuleImports(moduleId) {
    var m = importModule(moduleId);
    return m ? _cssFromModuleImports(m) : '';
  }
  /**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */


  function _cssFromModuleImports(module) {
    var cssText = '';

    var styles = _stylesFromModuleImports(module);

    for (var i = 0; i < styles.length; i++) {
      cssText += styles[i].textContent;
    }

    return cssText;
  }

  var styleGather = {
    stylesFromModules: stylesFromModules,
    stylesFromModule: stylesFromModule,
    stylesFromTemplate: stylesFromTemplate,
    stylesFromModuleImports: stylesFromModuleImports,
    cssFromModules: cssFromModules,
    cssFromModule: cssFromModule,
    cssFromTemplate: cssFromTemplate,
    cssFromModuleImports: cssFromModuleImports
  };
  _exports.$styleGather = styleGather;

  function isPath(path) {
    return path.indexOf('.') >= 0;
  }
  /**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */


  function root(path) {
    var dotIndex = path.indexOf('.');

    if (dotIndex === -1) {
      return path;
    }

    return path.slice(0, dotIndex);
  }
  /**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */


  function isAncestor(base, path) {
    //     base.startsWith(path + '.');
    return base.indexOf(path + '.') === 0;
  }
  /**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */


  function isDescendant(base, path) {
    //     path.startsWith(base + '.');
    return path.indexOf(base + '.') === 0;
  }
  /**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */


  function translate(base, newBase, path) {
    return newBase + path.slice(base.length);
  }
  /**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */


  function matches(base, path) {
    return base === path || isAncestor(base, path) || isDescendant(base, path);
  }
  /**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */


  function normalize(path) {
    if (Array.isArray(path)) {
      var parts = [];

      for (var i = 0; i < path.length; i++) {
        var args = path[i].toString().split('.');

        for (var j = 0; j < args.length; j++) {
          parts.push(args[j]);
        }
      }

      return parts.join('.');
    } else {
      return path;
    }
  }
  /**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */


  function split(path) {
    if (Array.isArray(path)) {
      return normalize(path).split('.');
    }

    return path.toString().split('.');
  }
  /**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */


  function _get(root, path, info) {
    var prop = root;
    var parts = split(path); // Loop over path parts[0..n-1] and dereference

    for (var i = 0; i < parts.length; i++) {
      if (!prop) {
        return;
      }

      var part = parts[i];
      prop = prop[part];
    }

    if (info) {
      info.path = parts.join('.');
    }

    return prop;
  }
  /**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */


  function _set(root, path, value) {
    var prop = root;
    var parts = split(path);
    var last = parts[parts.length - 1];

    if (parts.length > 1) {
      // Loop over path parts[0..n-2] and dereference
      for (var i = 0; i < parts.length - 1; i++) {
        var part = parts[i];
        prop = prop[part];

        if (!prop) {
          return;
        }
      } // Set value to object at end of path


      prop[last] = value;
    } else {
      // Simple property set
      prop[path] = value;
    }

    return parts.join('.');
  }
  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */


  var isDeep = isPath;
  _exports.isDeep = isDeep;
  var path = {
    isPath: isPath,
    root: root,
    isAncestor: isAncestor,
    isDescendant: isDescendant,
    translate: translate,
    matches: matches,
    normalize: normalize,
    split: split,
    get: _get,
    set: _set,
    isDeep: isDeep
  };
  _exports.$path = path;
  var caseMap = {};
  var DASH_TO_CAMEL = /-[a-z]/g;
  var CAMEL_TO_DASH = /([A-Z])/g;
  /**
   * @fileoverview Module with utilities for converting between "dash-case" and
   * "camelCase" identifiers.
   */

  /**
   * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
   * (e.g. `fooBarBaz`).
   *
   * @param {string} dash Dash-case identifier
   * @return {string} Camel-case representation of the identifier
   */

  function dashToCamelCase(dash) {
    return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
      return m[1].toUpperCase();
    }));
  }
  /**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */


  function camelToDashCase(camel) {
    return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
  }

  var caseMap$1 = {
    dashToCamelCase: dashToCamelCase,
    camelToDashCase: camelToDashCase
  };
  _exports.$caseMap = caseMap$1;
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, {
    characterData: true
  });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;

    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];

      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }

    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }
  /**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */


  var timeOut = {
    /**
     * Returns a sub-module with the async interface providing the provided
     * delay.
     *
     * @memberof timeOut
     * @param {number=} delay Time to wait before calling callbacks in ms
     * @return {!AsyncInterface} An async timeout interface
     */
    after: function after(delay) {
      return {
        run: function run(fn) {
          return window.setTimeout(fn, delay);
        },
        cancel: function cancel(handle) {
          window.clearTimeout(handle);
        }
      };
    },

    /**
     * Enqueues a function called in the next task.
     *
     * @memberof timeOut
     * @param {!Function} fn Callback to run
     * @param {number=} delay Delay in milliseconds
     * @return {number} Handle used for canceling task
     */
    run: function run(fn, delay) {
      return window.setTimeout(fn, delay);
    },

    /**
     * Cancels a previously enqueued `timeOut` callback.
     *
     * @memberof timeOut
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.clearTimeout(handle);
    }
  };
  _exports.timeOut = timeOut;
  var animationFrame = {
    /**
     * Enqueues a function called at `requestAnimationFrame` timing.
     *
     * @memberof animationFrame
     * @param {function(number):void} fn Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(fn) {
      return window.requestAnimationFrame(fn);
    },

    /**
     * Cancels a previously enqueued `animationFrame` callback.
     *
     * @memberof animationFrame
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.cancelAnimationFrame(handle);
    }
  };
  _exports.animationFrame = animationFrame;
  var idlePeriod = {
    /**
     * Enqueues a function called at `requestIdleCallback` timing.
     *
     * @memberof idlePeriod
     * @param {function(!IdleDeadline):void} fn Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(fn) {
      return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
    },

    /**
     * Cancels a previously enqueued `idlePeriod` callback.
     *
     * @memberof idlePeriod
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
    }
  };
  _exports.idlePeriod = idlePeriod;
  var microTask = {
    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(callback) {
      microtaskNode.textContent = microtaskNodeContent++;
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },

    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      var idx = handle - microtaskLastHandle;

      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }

        microtaskCallbacks[idx] = null;
      }
    }
  };
  _exports.microTask = microTask;
  var async = {
    timeOut: timeOut,
    animationFrame: animationFrame,
    idlePeriod: idlePeriod,
    microTask: microTask
  };
  _exports.$async = async;
  var microtask = microTask;
  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */

  var PropertiesChanged = dedupingMixin(
  /**
          * @template T
          * @param {function(new:T)} superClass Class to apply mixin to.
          * @return {function(new:T)} superClass with mixin applied.
          */
  function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var PropertiesChanged =
    /*#__PURE__*/
    function (_superClass) {
      babelHelpers.inherits(PropertiesChanged, _superClass);
      babelHelpers.createClass(PropertiesChanged, [{
        key: "_createPropertyAccessor",
        //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         * @override
         */
        value: function _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);

          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }

          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;

            this._definePropertyAccessor(property, readOnly);
          }
        }
        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         * @override
         */

      }, {
        key: "_addPropertyToAttributeMap",
        value: function _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }

          if (!this.__dataAttributes[property]) {
            var attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }
        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         * @override
         */

      }, {
        key: "_definePropertyAccessor",
        value: function _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */

            /** @this {PropertiesChanged} */
            get: function get() {
              return this._getProperty(property);
            },

            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */

          });
        }
      }], [{
        key: "createProperties",

        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         */
        value: function createProperties(props) {
          var proto = this.prototype;

          for (var prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }
        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: "attributeNameForProperty",
        value: function attributeNameForProperty(property) {
          return property.toLowerCase();
        }
        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         */

      }, {
        key: "typeForProperty",
        value: function typeForProperty(name) {}
      }]);

      function PropertiesChanged() {
        var _this;

        babelHelpers.classCallCheck(this, PropertiesChanged);
        _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertiesChanged).call(this));
        _this.__dataEnabled = false;
        _this.__dataReady = false;
        _this.__dataInvalid = false;
        _this.__data = {};
        _this.__dataPending = null;
        _this.__dataOld = null;
        _this.__dataInstanceProps = null;
        _this.__serializing = false;

        _this._initializeProperties();

        return _this;
      }
      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */


      babelHelpers.createClass(PropertiesChanged, [{
        key: "ready",
        value: function ready() {
          this.__dataReady = true;

          this._flushProperties();
        }
        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_initializeProperties",
        value: function _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }
        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_initializeInstanceProperties",
        value: function _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }
        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_setProperty",
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }
        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         * @override
         */

      }, {
        key: "_getProperty",
        value: function _getProperty(property) {
          return this.__data[property];
        }
        /* eslint-disable no-unused-vars */

        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         * @override
         */

      }, {
        key: "_setPendingProperty",
        value: function _setPendingProperty(property, value, ext) {
          var old = this.__data[property];

          var changed = this._shouldPropertyChange(property, value, old);

          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            } // Ensure old is captured from the last turn


            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }

            this.__data[property] = value;
            this.__dataPending[property] = value;
          }

          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_invalidateProperties",
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;

                _this2._flushProperties();
              }
            });
          }
        }
        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_enableProperties",
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;

            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);

              this.__dataInstanceProps = null;
            }

            this.ready();
          }
        }
        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_flushProperties",
        value: function _flushProperties() {
          var props = this.__data;
          var changedProps = this.__dataPending;
          var old = this.__dataOld;

          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;

            this._propertiesChanged(props, changedProps, old);
          }
        }
        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         * @override
         */

      }, {
        key: "_shouldPropertiesChange",
        value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }
        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "_propertiesChanged",
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars

        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         * @override
         */

      }, {
        key: "_shouldPropertyChange",
        value: function _shouldPropertyChange(property, value, old) {
          return (// Strict equality check
            old !== value && ( // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }
        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         * @override
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }

          if (babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this)) {
            babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
          }
        }
        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         * @override
         */

      }, {
        key: "_attributeToProperty",
        value: function _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            var map = this.__dataAttributes;
            var property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }
        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         * @override
         */

      }, {
        key: "_propertyToAttribute",
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;

          this._valueToNodeAttribute(
          /** @type {!HTMLElement} */
          this, value, attribute || this.constructor.attributeNameForProperty(property));

          this.__serializing = false;
        }
        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         * @override
         */

      }, {
        key: "_valueToNodeAttribute",
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);

          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }
        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         * @override
         */

      }, {
        key: "_serializeValue",
        value: function _serializeValue(value) {
          switch (babelHelpers.typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;

            default:
              return value != null ? value.toString() : undefined;
          }
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         * @override
         */

      }, {
        key: "_deserializeValue",
        value: function _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;

            case Number:
              return Number(value);

            default:
              return value;
          }
        }
      }]);
      return PropertiesChanged;
    }(superClass);

    return PropertiesChanged;
  });
  _exports.PropertiesChanged = PropertiesChanged;
  var propertiesChanged = {
    PropertiesChanged: PropertiesChanged
  }; // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws

  _exports.$propertiesChanged = propertiesChanged;
  var nativeProperties = {};
  var proto = HTMLElement.prototype;

  while (proto) {
    var props = Object.getOwnPropertyNames(proto);

    for (var i = 0; i < props.length; i++) {
      nativeProperties[props[i]] = true;
    }

    proto = Object.getPrototypeOf(proto);
  }
  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */


  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      var value = model[property];

      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }

          model.__dataProto[property] = value;
        }
      }
    }
  }
  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */


  var PropertyAccessors = dedupingMixin(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     * @private
     */
    var base = PropertiesChanged(superClass);
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */

    var PropertyAccessors =
    /*#__PURE__*/
    function (_base) {
      babelHelpers.inherits(PropertyAccessors, _base);

      function PropertyAccessors() {
        babelHelpers.classCallCheck(this, PropertyAccessors);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyAccessors).apply(this, arguments));
      }

      babelHelpers.createClass(PropertyAccessors, [{
        key: "_initializeProperties",

        /**
         * Overrides PropertiesChanged implementation to initialize values for
         * accessors created for values that already existed on the element
         * prototype.
         *
         * @return {void}
         * @protected
         */
        value: function _initializeProperties() {
          if (this.__dataProto) {
            this._initializeProtoProperties(this.__dataProto);

            this.__dataProto = null;
          }

          babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype), "_initializeProperties", this).call(this);
        }
        /**
         * Called at instance time with bag of properties that were overwritten
         * by accessors on the prototype when accessors were created.
         *
         * The default implementation sets these properties back into the
         * setter at instance time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeProtoProperties",
        value: function _initializeProtoProperties(props) {
          for (var p in props) {
            this._setProperty(p, props[p]);
          }
        }
        /**
         * Ensures the element has the given attribute. If it does not,
         * assigns the given value to the attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
         *
         * @param {string} attribute Name of attribute to ensure is set.
         * @param {string} value of the attribute.
         * @return {void}
         */

      }, {
        key: "_ensureAttribute",
        value: function _ensureAttribute(attribute, value) {
          var el =
          /** @type {!HTMLElement} */
          this;

          if (!el.hasAttribute(attribute)) {
            this._valueToNodeAttribute(el, value, attribute);
          }
        }
        /**
         * Overrides PropertiesChanged implemention to serialize objects as JSON.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided property value.
         */

      }, {
        key: "_serializeValue",
        value: function _serializeValue(value) {
          /* eslint-disable no-fallthrough */
          switch (babelHelpers.typeof(value)) {
            case 'object':
              if (babelHelpers.instanceof(value, Date)) {
                return value.toString();
              } else if (value) {
                try {
                  return JSON.stringify(value);
                } catch (x) {
                  return '';
                }
              }

            default:
              return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype), "_serializeValue", this).call(this, value);
          }
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called by Polymer when reading HTML attribute values to
         * JS properties.  Users may override this method on Polymer element
         * prototypes to provide deserialization for custom `type`s.  Note,
         * the `type` argument is the value of the `type` field provided in the
         * `properties` configuration object for a given property, and is
         * by convention the constructor for the type to deserialize.
         *
         *
         * @param {?string} value Attribute value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: "_deserializeValue",
        value: function _deserializeValue(value, type) {
          /**
           * @type {*}
           */
          var outValue;

          switch (type) {
            case Object:
              try {
                outValue = JSON.parse(
                /** @type {string} */
                value);
              } catch (x) {
                // allow non-JSON literals like Strings and Numbers
                outValue = value;
              }

              break;

            case Array:
              try {
                outValue = JSON.parse(
                /** @type {string} */
                value);
              } catch (x) {
                outValue = null;
                console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value));
              }

              break;

            case Date:
              outValue = isNaN(value) ? String(value) : Number(value);
              outValue = new Date(outValue);
              break;

            default:
              outValue = babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype), "_deserializeValue", this).call(this, value, type);
              break;
          }

          return outValue;
        }
        /* eslint-enable no-fallthrough */

        /**
         * Overrides PropertiesChanged implementation to save existing prototype
         * property value so that it can be reset.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         *
         * When calling on a prototype, any overwritten values are saved in
         * `__dataProto`, and it is up to the subclasser to decide how/when
         * to set those properties back into the accessor.  When calling on an
         * instance, the overwritten value is set via `_setPendingProperty`,
         * and the user should call `_invalidateProperties` or `_flushProperties`
         * for the values to take effect.
         * @protected
         * @return {void}
         */

      }, {
        key: "_definePropertyAccessor",
        value: function _definePropertyAccessor(property, readOnly) {
          saveAccessorValue(this, property);
          babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype), "_definePropertyAccessor", this).call(this, property, readOnly);
        }
        /**
         * Returns true if this library created an accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if an accessor was created
         */

      }, {
        key: "_hasAccessor",
        value: function _hasAccessor(property) {
          return this.__dataHasAccessor && this.__dataHasAccessor[property];
        }
        /**
         * Returns true if the specified property has a pending change.
         *
         * @param {string} prop Property name
         * @return {boolean} True if property has a pending change
         * @protected
         */

      }, {
        key: "_isPropertyPending",
        value: function _isPropertyPending(prop) {
          return Boolean(this.__dataPending && prop in this.__dataPending);
        }
      }], [{
        key: "createPropertiesForAttributes",

        /**
         * Generates property accessors for all attributes in the standard
         * static `observedAttributes` array.
         *
         * Attribute names are mapped to property names using the `dash-case` to
         * `camelCase` convention
         *
         * @return {void}
         */
        value: function createPropertiesForAttributes() {
          var a$ = this.observedAttributes;

          for (var _i = 0; _i < a$.length; _i++) {
            this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i]));
          }
        }
        /**
         * Returns an attribute name that corresponds to the given property.
         * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: "attributeNameForProperty",
        value: function attributeNameForProperty(property) {
          return camelToDashCase(property);
        }
      }]);
      return PropertyAccessors;
    }(base);

    return PropertyAccessors;
  });
  _exports.PropertyAccessors = PropertyAccessors;
  var propertyAccessors = {
    PropertyAccessors: PropertyAccessors
  }; // This is a clear layering violation and gives favored-nation status to
  // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
  // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
  // b.) to maintain if/repeat capability in parser-constrained elements
  //     (e.g. table, select) in lieu of native CE type extensions without
  //     massive new invention in this space (e.g. directive system)

  _exports.$propertyAccessors = propertyAccessors;
  var templateExtensions = {
    'dom-if': true,
    'dom-repeat': true
  };

  function wrapTemplateExtension(node) {
    var is = node.getAttribute('is');

    if (is && templateExtensions[is]) {
      var t = node;
      t.removeAttribute('is');
      node = t.ownerDocument.createElement(is);
      t.parentNode.replaceChild(node, t);
      node.appendChild(t);

      while (t.attributes.length) {
        node.setAttribute(t.attributes[0].name, t.attributes[0].value);
        t.removeAttribute(t.attributes[0].name);
      }
    }

    return node;
  }

  function findTemplateNode(root, nodeInfo) {
    // recursively ascend tree until we hit root
    var parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo); // unwind the stack, returning the indexed node at each level

    if (parent) {
      // note: marginally faster than indexing via childNodes
      // (http://jsperf.com/childnodes-lookup)
      for (var n = parent.firstChild, _i2 = 0; n; n = n.nextSibling) {
        if (nodeInfo.parentIndex === _i2++) {
          return n;
        }
      }
    } else {
      return root;
    }
  } // construct `$` map (from id annotations)


  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  } // install event listeners (from event annotations)


  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (var j = 0, e$ = nodeInfo.events, e; j < e$.length && (e = e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
      }
    }
  } // push configuration references at configure time


  function applyTemplateContent(inst, node, nodeInfo) {
    if (nodeInfo.templateInfo) {
      node._templateInfo = nodeInfo.templateInfo;
    }
  }

  function createNodeEventHandler(context, eventName, methodName) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    context = context._methodHost || context;

    var handler = function handler(e) {
      if (context[methodName]) {
        context[methodName](e, e.detail);
      } else {
        console.warn('listener method `' + methodName + '` not defined');
      }
    };

    return handler;
  }
  /**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */


  var TemplateStamp = dedupingMixin(
  /**
          * @template T
          * @param {function(new:T)} superClass Class to apply mixin to.
          * @return {function(new:T)} superClass with mixin applied.
          */
  function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */
    var TemplateStamp =
    /*#__PURE__*/
    function (_superClass2) {
      babelHelpers.inherits(TemplateStamp, _superClass2);

      function TemplateStamp() {
        babelHelpers.classCallCheck(this, TemplateStamp);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TemplateStamp).apply(this, arguments));
      }

      babelHelpers.createClass(TemplateStamp, [{
        key: "_stampTemplate",

        /**
         * Clones the provided template content and returns a document fragment
         * containing the cloned dom.
         *
         * The template is parsed (once and memoized) using this library's
         * template parsing features, and provides the following value-added
         * features:
         * * Adds declarative event listeners for `on-event="handler"` attributes
         * * Generates an "id map" for all nodes with id's under `$` on returned
         *   document fragment
         * * Passes template info including `content` back to templates as
         *   `_templateInfo` (a performance optimization to avoid deep template
         *   cloning)
         *
         * Note that the memoized template parsing process is destructive to the
         * template: attributes for bindings and declarative event listeners are
         * removed after being noted in notes, and any nested `<template>.content`
         * is removed and stored in notes as well.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         */
        value: function _stampTemplate(template) {
          // Polyfill support: bootstrap the template if it has not already been
          if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
            HTMLTemplateElement.decorate(template);
          }

          var templateInfo = this.constructor._parseTemplate(template);

          var nodeInfo = templateInfo.nodeInfoList;
          var content = templateInfo.content || template.content;
          var dom =
          /** @type {DocumentFragment} */
          document.importNode(content, true); // NOTE: ShadyDom optimization indicating there is an insertion point

          dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
          var nodes = dom.nodeList = new Array(nodeInfo.length);
          dom.$ = {};

          for (var _i3 = 0, l = nodeInfo.length, info; _i3 < l && (info = nodeInfo[_i3]); _i3++) {
            var node = nodes[_i3] = findTemplateNode(dom, info);
            applyIdToMap(this, dom.$, node, info);
            applyTemplateContent(this, node, info);
            applyEventListener(this, node, info);
          }

          dom =
          /** @type {!StampedTemplate} */
          dom; // eslint-disable-line no-self-assign

          return dom;
        }
        /**
         * Adds an event listener by method name for the event provided.
         *
         * This method generates a handler function that looks up the method
         * name at handling time.
         *
         * @param {!EventTarget} node Node to add listener on
         * @param {string} eventName Name of event
         * @param {string} methodName Name of method
         * @param {*=} context Context the method will be called on (defaults
         *   to `node`)
         * @return {Function} Generated handler function
         * @override
         */

      }, {
        key: "_addMethodEventListenerToNode",
        value: function _addMethodEventListenerToNode(node, eventName, methodName, context) {
          context = context || node;
          var handler = createNodeEventHandler(context, eventName, methodName);

          this._addEventListenerToNode(node, eventName, handler);

          return handler;
        }
        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!EventTarget} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         * @override
         */

      }, {
        key: "_addEventListenerToNode",
        value: function _addEventListenerToNode(node, eventName, handler) {
          node.addEventListener(eventName, handler);
        }
        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!EventTarget} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         * @override
         */

      }, {
        key: "_removeEventListenerFromNode",
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          node.removeEventListener(eventName, handler);
        }
      }], [{
        key: "_parseTemplate",

        /**
         * Scans a template to produce template metadata.
         *
         * Template-specific metadata are stored in the object returned, and node-
         * specific metadata are stored in objects in its flattened `nodeInfoList`
         * array.  Only nodes in the template that were parsed as nodes of
         * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
         * contains an `index` (`childNodes` index in parent) and optionally
         * `parent`, which points to node info of its parent (including its index).
         *
         * The template metadata object returned from this method has the following
         * structure (many fields optional):
         *
         * ```js
         *   {
         *     // Flattened list of node metadata (for nodes that generated metadata)
         *     nodeInfoList: [
         *       {
         *         // `id` attribute for any nodes with id's for generating `$` map
         *         id: {string},
         *         // `on-event="handler"` metadata
         *         events: [
         *           {
         *             name: {string},   // event name
         *             value: {string},  // handler method name
         *           }, ...
         *         ],
         *         // Notes when the template contained a `<slot>` for shady DOM
         *         // optimization purposes
         *         hasInsertionPoint: {boolean},
         *         // For nested `<template>`` nodes, nested template metadata
         *         templateInfo: {object}, // nested template metadata
         *         // Metadata to allow efficient retrieval of instanced node
         *         // corresponding to this metadata
         *         parentInfo: {number},   // reference to parent nodeInfo>
         *         parentIndex: {number},  // index in parent's `childNodes` collection
         *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
         *       },
         *       ...
         *     ],
         *     // When true, the template had the `strip-whitespace` attribute
         *     // or was nested in a template with that setting
         *     stripWhitespace: {boolean},
         *     // For nested templates, nested template content is moved into
         *     // a document fragment stored here; this is an optimization to
         *     // avoid the cost of nested template cloning
         *     content: {DocumentFragment}
         *   }
         * ```
         *
         * This method kicks off a recursive treewalk as follows:
         *
         * ```
         *    _parseTemplate <---------------------+
         *      _parseTemplateContent              |
         *        _parseTemplateNode  <------------|--+
         *          _parseTemplateNestedTemplate --+  |
         *          _parseTemplateChildNodes ---------+
         *          _parseTemplateNodeAttributes
         *            _parseTemplateNodeAttribute
         *
         * ```
         *
         * These methods may be overridden to add custom metadata about templates
         * to either `templateInfo` or `nodeInfo`.
         *
         * Note that this method may be destructive to the template, in that
         * e.g. event annotations may be removed after being noted in the
         * template metadata.
         *
         * @param {!HTMLTemplateElement} template Template to parse
         * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
         *   template, for parsing nested templates
         * @return {!TemplateInfo} Parsed template metadata
         */
        value: function _parseTemplate(template, outerTemplateInfo) {
          // since a template may be re-used, memo-ize metadata
          if (!template._templateInfo) {
            var templateInfo = template._templateInfo = {};
            templateInfo.nodeInfoList = [];
            templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template.hasAttribute('strip-whitespace');

            this._parseTemplateContent(template, templateInfo, {
              parent: null
            });
          }

          return template._templateInfo;
        }
      }, {
        key: "_parseTemplateContent",
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
        }
        /**
         * Parses template node and adds template and node metadata based on
         * the current node, and its `childNodes` and `attributes`.
         *
         * This method may be overridden to add custom node or template specific
         * metadata based on this node.
         *
         * @param {Node} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNode",
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted;
          var element =
          /** @type {Element} */
          node;

          if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
            noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
          } else if (element.localName === 'slot') {
            // For ShadyDom optimization, indicating there is an insertion point
            templateInfo.hasInsertionPoint = true;
          }

          if (element.firstChild) {
            noted = this._parseTemplateChildNodes(element, templateInfo, nodeInfo) || noted;
          }

          if (element.hasAttributes && element.hasAttributes()) {
            noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
          }

          return noted;
        }
        /**
         * Parses template child nodes for the given root node.
         *
         * This method also wraps whitelisted legacy template extensions
         * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
         * wrappers, collapses text nodes, and strips whitespace from the template
         * if the `templateInfo.stripWhitespace` setting was provided.
         *
         * @param {Node} root Root node whose `childNodes` will be parsed
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {void}
         */

      }, {
        key: "_parseTemplateChildNodes",
        value: function _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
          if (root.localName === 'script' || root.localName === 'style') {
            return;
          }

          for (var node = root.firstChild, parentIndex = 0, next; node; node = next) {
            // Wrap templates
            if (node.localName == 'template') {
              node = wrapTemplateExtension(node);
            } // collapse adjacent textNodes: fixes an IE issue that can cause
            // text nodes to be inexplicably split =(
            // note that root.normalize() should work but does not so we do this
            // manually.


            next = node.nextSibling;

            if (node.nodeType === Node.TEXT_NODE) {
              var
              /** Node */
              n = next;

              while (n && n.nodeType === Node.TEXT_NODE) {
                node.textContent += n.textContent;
                next = n.nextSibling;
                root.removeChild(n);
                n = next;
              } // optionally strip whitespace


              if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
                root.removeChild(node);
                continue;
              }
            }

            var childInfo = {
              parentIndex: parentIndex,
              parentInfo: nodeInfo
            };

            if (this._parseTemplateNode(node, templateInfo, childInfo)) {
              childInfo.infoIndex = templateInfo.nodeInfoList.push(
              /** @type {!NodeInfo} */
              childInfo) - 1;
            } // Increment if not removed


            if (node.parentNode) {
              parentIndex++;
            }
          }
        }
        /**
         * Parses template content for the given nested `<template>`.
         *
         * Nested template info is stored as `templateInfo` in the current node's
         * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
         * It will then be the responsibility of the host to set it back to the
         * template and for users stamping nested templates to use the
         * `_contentForTemplate` method to retrieve the content for this template
         * (an optimization to avoid the cost of cloning nested template content).
         *
         * @param {HTMLTemplateElement} node Node to parse (a <template>)
         * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
         *   that includes the template `node`
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNestedTemplate",
        value: function _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
          var templateInfo = this._parseTemplate(node, outerTemplateInfo);

          var content = templateInfo.content = node.content.ownerDocument.createDocumentFragment();
          content.appendChild(node.content);
          nodeInfo.templateInfo = templateInfo;
          return true;
        }
        /**
         * Parses template node attributes and adds node metadata to `nodeInfo`
         * for nodes of interest.
         *
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNodeAttributes",
        value: function _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
          // Make copy of original attribute list, since the order may change
          // as attributes are added and removed
          var noted = false;
          var attrs = Array.from(node.attributes);

          for (var _i4 = attrs.length - 1, a; a = attrs[_i4]; _i4--) {
            noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
          }

          return noted;
        }
        /**
         * Parses a single template node attribute and adds node metadata to
         * `nodeInfo` for attributes of interest.
         *
         * This implementation adds metadata for `on-event="handler"` attributes
         * and `id` attributes.
         *
         * @param {Element} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNodeAttribute",
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          // events (on-*)
          if (name.slice(0, 3) === 'on-') {
            node.removeAttribute(name);
            nodeInfo.events = nodeInfo.events || [];
            nodeInfo.events.push({
              name: name.slice(3),
              value: value
            });
            return true;
          } // static id
          else if (name === 'id') {
              nodeInfo.id = value;
              return true;
            }

          return false;
        }
        /**
         * Returns the `content` document fragment for a given template.
         *
         * For nested templates, Polymer performs an optimization to cache nested
         * template content to avoid the cost of cloning deeply nested templates.
         * This method retrieves the cached content for a given template.
         *
         * @param {HTMLTemplateElement} template Template to retrieve `content` for
         * @return {DocumentFragment} Content fragment
         */

      }, {
        key: "_contentForTemplate",
        value: function _contentForTemplate(template) {
          var templateInfo =
          /** @type {HTMLTemplateElementWithInfo} */
          template._templateInfo;
          return templateInfo && templateInfo.content || template.content;
        }
      }]);
      return TemplateStamp;
    }(superClass);

    return TemplateStamp;
  });
  _exports.TemplateStamp = TemplateStamp;
  var templateStamp = {
    TemplateStamp: TemplateStamp
  }; // from multiple properties in the same turn

  _exports.$templateStamp = templateStamp;
  var dedupeId$1 = 0;
  /**
  * Property effect types; effects are stored on the prototype using these keys
  * @enum {string}
  */

  var TYPES = {
    COMPUTE: '__computeEffects',
    REFLECT: '__reflectEffects',
    NOTIFY: '__notifyEffects',
    PROPAGATE: '__propagateEffects',
    OBSERVE: '__observeEffects',
    READ_ONLY: '__readOnly'
  };
  /** @const {RegExp} */

  var capitalAttributeRegex = /[A-Z]/;
  /**
   * @typedef {{
   * name: (string | undefined),
   * structured: (boolean | undefined),
   * wildcard: (boolean | undefined)
   * }}
   */

  var DataTrigger; //eslint-disable-line no-unused-vars

  /**
   * @typedef {{
   * info: ?,
   * trigger: (!DataTrigger | undefined),
   * fn: (!Function | undefined)
   * }}
   */

  var DataEffect; //eslint-disable-line no-unused-vars

  var PropertyEffectsType; //eslint-disable-line no-unused-vars

  /**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */

  function ensureOwnEffectMap(model, type) {
    var effects = model[type];

    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);

      for (var p in effects) {
        var protoFx = effects[p];
        var instFx = effects[p] = Array(protoFx.length);

        for (var _i5 = 0; _i5 < protoFx.length; _i5++) {
          instFx[_i5] = protoFx[_i5];
        }
      }
    }

    return effects;
  } // -- effects ----------------------------------------------

  /**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */


  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      var ran = false;
      var id = dedupeId$1++;

      for (var prop in props) {
        if (runEffectsForProperty(inst, effects, id, prop, props, oldProps, hasPaths, extraArgs)) {
          ran = true;
        }
      }

      return ran;
    }

    return false;
  }
  /**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */


  function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
    var ran = false;
    var rootProperty = hasPaths ? root(prop) : prop;
    var fxs = effects[rootProperty];

    if (fxs) {
      for (var _i6 = 0, l = fxs.length, fx; _i6 < l && (fx = fxs[_i6]); _i6++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId;
          }

          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }

    return ran;
  }
  /**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */


  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      var triggerPath = trigger.name;
      return triggerPath == path || trigger.structured && isAncestor(triggerPath, path) || trigger.wildcard && isDescendant(triggerPath, path);
    } else {
      return true;
    }
  }
  /**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runObserverEffect(inst, property, props, oldProps, info) {
    var fn = typeof info.method === "string" ? inst[info.method] : info.method;
    var changedProp = info.property;

    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn('observer method `' + info.method + '` not defined');
    }
  }
  /**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    // Notify
    var fxs = inst[TYPES.NOTIFY];
    var notified;
    var id = dedupeId$1++; // Try normal notify effects; if none, fall back to try path notification

    for (var prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    } // Flush host if we actually notified and host was batching
    // And the host has already initialized clients; this prevents
    // an issue with a host observing data changes before clients are ready.


    var host;

    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }
  /**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */


  function notifyPath(inst, path, props) {
    var rootProperty = root(path);

    if (rootProperty !== path) {
      var eventName = camelToDashCase(rootProperty) + '-changed';
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }

    return false;
  }
  /**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */


  function dispatchNotifyEvent(inst, eventName, value, path) {
    var detail = {
      value: value,
      queueProperty: true
    };

    if (path) {
      detail.path = path;
    }
    /** @type {!HTMLElement} */


    inst.dispatchEvent(new CustomEvent(eventName, {
      detail: detail
    }));
  }
  /**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    var rootProperty = hasPaths ? root(property) : property;
    var path = rootProperty != property ? property : null;
    var value = path ? _get(inst, path) : inst.__data[property];

    if (path && value === undefined) {
      value = props[property]; // specifically for .splices
    }

    dispatchNotifyEvent(inst, info.eventName, value, path);
  }
  /**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */


  function handleNotification(event, inst, fromProp, toPath, negate) {
    var value;
    var detail =
    /** @type {Object} */
    event.detail;
    var fromPath = detail && detail.path;

    if (fromPath) {
      toPath = translate(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.currentTarget[fromProp];
    }

    value = negate ? !value : value;

    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }
  /**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runReflectEffect(inst, property, props, oldProps, info) {
    var value = inst.__data[property];

    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, info.attrName, 'attribute',
      /** @type {Node} */
      inst);
    }

    inst._propertyToAttribute(property, info.attrName, value);
  }
  /**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    var computeEffects = inst[TYPES.COMPUTE];

    if (computeEffects) {
      var inputProps = changedProps;

      while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
        Object.assign(oldProps, inst.__dataOld);
        Object.assign(changedProps, inst.__dataPending);
        inputProps = inst.__dataPending;
        inst.__dataPending = null;
      }
    }
  }
  /**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runComputedEffect(inst, property, props, oldProps, info) {
    var result = runMethodEffect(inst, property, props, oldProps, info);
    var computedProp = info.methodInfo;

    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
    }
  }
  /**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */


  function computeLinkedPaths(inst, path, value) {
    var links = inst.__dataLinkedPaths;

    if (links) {
      var link;

      for (var a in links) {
        var b = links[a];

        if (isDescendant(a, path)) {
          link = translate(a, b, path);

          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if (isDescendant(b, path)) {
          link = translate(b, a, path);

          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  } // -- bindings ----------------------------------------------

  /**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */


  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    // Create binding metadata and add to nodeInfo
    nodeInfo.bindings = nodeInfo.bindings || [];
    var
    /** Binding */
    binding = {
      kind: kind,
      target: target,
      parts: parts,
      literal: literal,
      isCompound: parts.length !== 1
    };
    nodeInfo.bindings.push(binding); // Add listener info to binding metadata

    if (shouldAddListener(binding)) {
      var _binding$parts$ = binding.parts[0],
          event = _binding$parts$.event,
          negate = _binding$parts$.negate;
      binding.listenerEvent = event || camelToDashCase(target) + '-changed';
      binding.listenerNegate = negate;
    } // Add "propagate" property effects to templateInfo


    var index = templateInfo.nodeInfoList.length;

    for (var _i7 = 0; _i7 < binding.parts.length; _i7++) {
      var part = binding.parts[_i7];
      part.compoundIndex = _i7;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }
  /**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */


  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === 'attribute' && binding.target[0] === '-') {
        console.warn('Cannot set attribute ' + binding.target + ' because "-" is not a valid attribute starting character');
      } else {
        var dependencies = part.dependencies;
        var info = {
          index: index,
          binding: binding,
          part: part,
          evaluator: constructor
        };

        for (var j = 0; j < dependencies.length; j++) {
          var trigger = dependencies[j];

          if (typeof trigger == 'string') {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }

          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info: info,
            trigger: trigger
          });
        }
      }
    }
  }
  /**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */


  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    var node = nodeList[info.index];
    var binding = info.binding;
    var part = info.part; // Subpath notification: transform path and set to client
    // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop

    if (hasPaths && part.source && path.length > part.source.length && binding.kind == 'property' && !binding.isCompound && node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      var value = props[path];
      path = translate(part.source, binding.target, path);

      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      var _value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths); // Propagate value to child


      applyBindingValue(inst, node, binding, part, _value);
    }
  }
  /**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */


  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);

    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, binding.target, binding.kind, node);
    }

    if (binding.kind == 'attribute') {
      // Attribute binding
      inst._valueToNodeAttribute(
      /** @type {Element} */
      node, value, binding.target);
    } else {
      // Property binding
      var prop = binding.target;

      if (node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }
  /**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */


  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      var _storage = node.__dataCompoundStorage[binding.target];
      _storage[part.compoundIndex] = value;
      value = _storage.join('');
    }

    if (binding.kind !== 'attribute') {
      // Some browsers serialize `undefined` to `"undefined"`
      if (binding.target === 'textContent' || binding.target === 'value' && (node.localName === 'input' || node.localName === 'textarea')) {
        value = value == undefined ? '' : value;
      }
    }

    return value;
  }
  /**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */


  function shouldAddListener(binding) {
    return Boolean(binding.target) && binding.kind != 'attribute' && binding.kind != 'text' && !binding.isCompound && binding.parts[0].mode === '{';
  }
  /**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */


  function setupBindings(inst, templateInfo) {
    // Setup compound storage, dataHost, and notify listeners
    var nodeList = templateInfo.nodeList,
        nodeInfoList = templateInfo.nodeInfoList;

    if (nodeInfoList.length) {
      for (var _i8 = 0; _i8 < nodeInfoList.length; _i8++) {
        var info = nodeInfoList[_i8];
        var node = nodeList[_i8];
        var bindings = info.bindings;

        if (bindings) {
          for (var _i9 = 0; _i9 < bindings.length; _i9++) {
            var binding = bindings[_i9];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }

        node.__dataHost = inst;
      }
    }
  }
  /**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */


  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      // Create compound storage map
      var _storage2 = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});

      var parts = binding.parts; // Copy literals from parts into storage for this binding

      var literals = new Array(parts.length);

      for (var j = 0; j < parts.length; j++) {
        literals[j] = parts[j].literal;
      }

      var target = binding.target;
      _storage2[target] = literals; // Configure properties with their literal parts

      if (binding.literal && binding.kind == 'property') {
        node[target] = binding.literal;
      }
    }
  }
  /**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */


  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      var part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function (e) {
        handleNotification(e, inst, binding.target, part.source, part.negate);
      });
    }
  } // -- for method-based effects (complexObserver & computed) --------------

  /**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {void}
   * @private
   */


  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || dynamicFn && (babelHelpers.typeof(dynamicFn) !== 'object' || dynamicFn[sig.methodName]);
    var info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo: methodInfo,
      dynamicFn: dynamicFn
    };

    for (var _i10 = 0, arg; _i10 < sig.args.length && (arg = sig.args[_i10]); _i10++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn,
          info: info,
          trigger: arg
        });
      }
    }

    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn,
        info: info
      });
    }
  }
  /**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */


  function runMethodEffect(inst, property, props, oldProps, info) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    var context = inst._methodHost || inst;
    var fn = context[info.methodName];

    if (fn) {
      var args = inst._marshalArgs(info.args, property, props);

      return fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn('method `' + info.methodName + '` not defined');
    }
  }

  var emptyArray = []; // Regular expressions used for binding

  var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
  var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
  var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
  var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
  var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
  var ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' + STRING + ')\\s*' + ')';
  var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
  var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
  var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3

  var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
  var CLOSE_BRACKET = '(?:]]|}})';
  var NEGATE = '(?:(!)\\s*)?'; // Group 2

  var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  var bindingRegex = new RegExp(EXPRESSION, "g");
  /**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */

  function literalFromParts(parts) {
    var s = '';

    for (var _i11 = 0; _i11 < parts.length; _i11++) {
      var literal = parts[_i11].literal;
      s += literal || '';
    }

    return s;
  }
  /**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */


  function parseMethod(expression) {
    // tries to match valid javascript property names
    var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);

    if (m) {
      var methodName = m[1];
      var sig = {
        methodName: methodName,
        static: true,
        args: emptyArray
      };

      if (m[2].trim()) {
        // replace escaped commas with comma entity, split on un-escaped commas
        var args = m[2].replace(/\\,/g, '&comma;').split(',');
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }

    return null;
  }
  /**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */


  function parseArgs(argList, sig) {
    sig.args = argList.map(function (rawArg) {
      var arg = parseArg(rawArg);

      if (!arg.literal) {
        sig.static = false;
      }

      return arg;
    }, this);
    return sig;
  }
  /**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */


  function parseArg(rawArg) {
    // clean up whitespace
    var arg = rawArg.trim() // replace comma entity with comma
    .replace(/&comma;/g, ',') // repair extra escape sequences; note only commas strictly need
    // escaping, but we allow any other char to be escaped since its
    // likely users will do this
    .replace(/\\(.)/g, '\$1'); // basic argument descriptor

    var a = {
      name: arg,
      value: '',
      literal: false
    }; // detect literal value (must be String or Number)

    var fc = arg[0];

    if (fc === '-') {
      fc = arg[1];
    }

    if (fc >= '0' && fc <= '9') {
      fc = '#';
    }

    switch (fc) {
      case "'":
      case '"':
        a.value = arg.slice(1, -1);
        a.literal = true;
        break;

      case '#':
        a.value = Number(arg);
        a.literal = true;
        break;
    } // if not literal, look for structured path


    if (!a.literal) {
      a.rootProperty = root(arg); // detect structured path (has dots)

      a.structured = isPath(arg);

      if (a.structured) {
        a.wildcard = arg.slice(-2) == '.*';

        if (a.wildcard) {
          a.name = arg.slice(0, -2);
        }
      }
    }

    return a;
  } // data api

  /**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */


  function _notifySplices(inst, array, path, splices) {
    var splicesPath = path + '.splices';
    inst.notifyPath(splicesPath, {
      indexSplices: splices
    });
    inst.notifyPath(path + '.length', array.length); // Null here to allow potentially large splice records to be GC'ed.

    inst.__data[splicesPath] = {
      indexSplices: null
    };
  }
  /**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */


  function notifySplice(inst, array, path, index, addedCount, removed) {
    _notifySplices(inst, array, path, [{
      index: index,
      addedCount: addedCount,
      removed: removed,
      object: array,
      type: 'splice'
    }]);
  }
  /**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */


  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }
  /**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */


  var PropertyEffects = dedupingMixin(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     * @private
     */
    var propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */

    var PropertyEffects =
    /*#__PURE__*/
    function (_propertyEffectsBase) {
      babelHelpers.inherits(PropertyEffects, _propertyEffectsBase);

      function PropertyEffects() {
        var _this3;

        babelHelpers.classCallCheck(this, PropertyEffects);
        _this3 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyEffects).call(this));
        /** @type {boolean} */
        // Used to identify users of this mixin, ala instanceof

        _this3.__isPropertyEffectsClient = true;
        /** @type {number} */
        // NOTE: used to track re-entrant calls to `_flushProperties`
        // path changes dirty check against `__dataTemp` only during one "turn"
        // and are cleared when `__dataCounter` returns to 0.

        _this3.__dataCounter = 0;
        /** @type {boolean} */

        _this3.__dataClientsReady;
        /** @type {Array} */

        _this3.__dataPendingClients;
        /** @type {Object} */

        _this3.__dataToNotify;
        /** @type {Object} */

        _this3.__dataLinkedPaths;
        /** @type {boolean} */

        _this3.__dataHasPaths;
        /** @type {Object} */

        _this3.__dataCompoundStorage;
        /** @type {Polymer_PropertyEffects} */

        _this3.__dataHost;
        /** @type {!Object} */

        _this3.__dataTemp;
        /** @type {boolean} */

        _this3.__dataClientsInitialized;
        /** @type {!Object} */

        _this3.__data;
        /** @type {!Object} */

        _this3.__dataPending;
        /** @type {!Object} */

        _this3.__dataOld;
        /** @type {Object} */

        _this3.__computeEffects;
        /** @type {Object} */

        _this3.__reflectEffects;
        /** @type {Object} */

        _this3.__notifyEffects;
        /** @type {Object} */

        _this3.__propagateEffects;
        /** @type {Object} */

        _this3.__observeEffects;
        /** @type {Object} */

        _this3.__readOnly;
        /** @type {!TemplateInfo} */

        _this3.__templateInfo;
        return _this3;
      }

      babelHelpers.createClass(PropertyEffects, [{
        key: "_initializeProperties",

        /**
         * @return {void}
         */
        value: function _initializeProperties() {
          babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype), "_initializeProperties", this).call(this);
          hostStack.registerHost(this);
          this.__dataClientsReady = false;
          this.__dataPendingClients = null;
          this.__dataToNotify = null;
          this.__dataLinkedPaths = null;
          this.__dataHasPaths = false; // May be set on instance prior to upgrade

          this.__dataCompoundStorage = this.__dataCompoundStorage || null;
          this.__dataHost = this.__dataHost || null;
          this.__dataTemp = {};
          this.__dataClientsInitialized = false;
        }
        /**
         * Overrides `PropertyAccessors` implementation to provide a
         * more efficient implementation of initializing properties from
         * the prototype on the instance.
         *
         * @override
         * @param {Object} props Properties to initialize on the prototype
         * @return {void}
         */

      }, {
        key: "_initializeProtoProperties",
        value: function _initializeProtoProperties(props) {
          this.__data = Object.create(props);
          this.__dataPending = Object.create(props);
          this.__dataOld = {};
        }
        /**
         * Overrides `PropertyAccessors` implementation to avoid setting
         * `_setProperty`'s `shouldNotify: true`.
         *
         * @override
         * @param {Object} props Properties to initialize on the instance
         * @return {void}
         */

      }, {
        key: "_initializeInstanceProperties",
        value: function _initializeInstanceProperties(props) {
          var readOnly = this[TYPES.READ_ONLY];

          for (var prop in props) {
            if (!readOnly || !readOnly[prop]) {
              this.__dataPending = this.__dataPending || {};
              this.__dataOld = this.__dataOld || {};
              this.__data[prop] = this.__dataPending[prop] = props[prop];
            }
          }
        } // Prototype setup ----------------------------------------

        /**
         * Equivalent to static `addPropertyEffect` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_addPropertyEffect",
        value: function _addPropertyEffect(property, type, effect) {
          this._createPropertyAccessor(property, type == TYPES.READ_ONLY); // effects are accumulated into arrays per property based on type


          var effects = ensureOwnEffectMap(this, type)[property];

          if (!effects) {
            effects = this[type][property] = [];
          }

          effects.push(effect);
        }
        /**
         * Removes the given property effect.
         *
         * @param {string} property Property the effect was associated with
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object to remove
         * @return {void}
         */

      }, {
        key: "_removePropertyEffect",
        value: function _removePropertyEffect(property, type, effect) {
          var effects = ensureOwnEffectMap(this, type)[property];
          var idx = effects.indexOf(effect);

          if (idx >= 0) {
            effects.splice(idx, 1);
          }
        }
        /**
         * Returns whether the current prototype/instance has a property effect
         * of a certain type.
         *
         * @param {string} property Property name
         * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasPropertyEffect",
        value: function _hasPropertyEffect(property, type) {
          var effects = this[type];
          return Boolean(effects && effects[property]);
        }
        /**
         * Returns whether the current prototype/instance has a "read only"
         * accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasReadOnlyEffect",
        value: function _hasReadOnlyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.READ_ONLY);
        }
        /**
         * Returns whether the current prototype/instance has a "notify"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasNotifyEffect",
        value: function _hasNotifyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.NOTIFY);
        }
        /**
         * Returns whether the current prototype/instance has a "reflect to attribute"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasReflectEffect",
        value: function _hasReflectEffect(property) {
          return this._hasPropertyEffect(property, TYPES.REFLECT);
        }
        /**
         * Returns whether the current prototype/instance has a "computed"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasComputedEffect",
        value: function _hasComputedEffect(property) {
          return this._hasPropertyEffect(property, TYPES.COMPUTE);
        } // Runtime ----------------------------------------

        /**
         * Sets a pending property or path.  If the root property of the path in
         * question had no accessor, the path is set, otherwise it is enqueued
         * via `_setPendingProperty`.
         *
         * This function isolates relatively expensive functionality necessary
         * for the public API (`set`, `setProperties`, `notifyPath`, and property
         * change listeners via {{...}} bindings), such that it is only done
         * when paths enter the system, and not at every propagation step.  It
         * also sets a `__dataHasPaths` flag on the instance which is used to
         * fast-path slower path-matching code in the property effects host paths.
         *
         * `path` can be a path string or array of path parts as accepted by the
         * public API.
         *
         * @param {string | !Array<number|string>} path Path to set
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify Set to true if this change should
         *  cause a property notification event dispatch
         * @param {boolean=} isPathNotification If the path being set is a path
         *   notification of an already changed value, as opposed to a request
         *   to set and notify the change.  In the latter `false` case, a dirty
         *   check is performed and then the value is set to the path before
         *   enqueuing the pending property change.
         * @return {boolean} Returns true if the property/path was enqueued in
         *   the pending changes bag.
         * @protected
         */

      }, {
        key: "_setPendingPropertyOrPath",
        value: function _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
          if (isPathNotification || root(Array.isArray(path) ? path[0] : path) !== path) {
            // Dirty check changes being set to a path against the actual object,
            // since this is the entry point for paths into the system; from here
            // the only dirty checks are against the `__dataTemp` cache to prevent
            // duplicate work in the same turn only. Note, if this was a notification
            // of a change already set to a path (isPathNotification: true),
            // we always let the change through and skip the `set` since it was
            // already dirty checked at the point of entry and the underlying
            // object has already been updated
            if (!isPathNotification) {
              var old = _get(this, path);

              path =
              /** @type {string} */
              _set(this, path, value); // Use property-accessor's simpler dirty check

              if (!path || !babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype), "_shouldPropertyChange", this).call(this, path, value, old)) {
                return false;
              }
            }

            this.__dataHasPaths = true;

            if (this._setPendingProperty(
            /**@type{string}*/
            path, value, shouldNotify)) {
              computeLinkedPaths(this, path, value);
              return true;
            }
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
              return this._setPendingProperty(
              /**@type{string}*/
              path, value, shouldNotify);
            } else {
              this[path] = value;
            }
          }

          return false;
        }
        /**
         * Applies a value to a non-Polymer element/node's property.
         *
         * The implementation makes a best-effort at binding interop:
         * Some native element properties have side-effects when
         * re-setting the same value (e.g. setting `<input>.value` resets the
         * cursor position), so we do a dirty-check before setting the value.
         * However, for better interop with non-Polymer custom elements that
         * accept objects, we explicitly re-set object changes coming from the
         * Polymer world (which may include deep object changes without the
         * top reference changing), erring on the side of providing more
         * information.
         *
         * Users may override this method to provide alternate approaches.
         *
         * @param {!Node} node The node to set a property on
         * @param {string} prop The property to set
         * @param {*} value The value to set
         * @return {void}
         * @protected
         */

      }, {
        key: "_setUnmanagedPropertyToNode",
        value: function _setUnmanagedPropertyToNode(node, prop, value) {
          // It is a judgment call that resetting primitives is
          // "bad" and resettings objects is also "good"; alternatively we could
          // implement a whitelist of tag & property values that should never
          // be reset (e.g. <input>.value && <select>.value)
          if (value !== node[prop] || babelHelpers.typeof(value) == 'object') {
            node[prop] = value;
          }
        }
        /**
         * Overrides the `PropertiesChanged` implementation to introduce special
         * dirty check logic depending on the property & value being set:
         *
         * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
         *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
         * 2. Object set to simple property (e.g. 'prop': {...})
         *    Stored in `__dataTemp` and `__data`, dirty checked against
         *    `__dataTemp` by default implementation of `_shouldPropertyChange`
         * 3. Primitive value set to simple property (e.g. 'prop': 42)
         *    Stored in `__data`, dirty checked against `__data`
         *
         * The dirty-check is important to prevent cycles due to two-way
         * notification, but paths and objects are only dirty checked against any
         * previous value set during this turn via a "temporary cache" that is
         * cleared when the last `_propertiesChanged` exits. This is so:
         * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
         *    due to array mutations like shift/unshift/splice; this is fine
         *    since path changes are dirty-checked at user entry points like `set`
         * b. dirty-checking for objects only lasts one turn to allow the user
         *    to mutate the object in-place and re-set it with the same identity
         *    and have all sub-properties re-propagated in a subsequent turn.
         *
         * The temp cache is not necessarily sufficient to prevent invalid array
         * paths, since a splice can happen during the same turn (with pathological
         * user code); we could introduce a "fixup" for temporarily cached array
         * paths if needed: https://github.com/Polymer/polymer/issues/4227
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify True if property should fire notification
         *   event (applies only for `notify: true` properties)
         * @return {boolean} Returns true if the property changed
         */

      }, {
        key: "_setPendingProperty",
        value: function _setPendingProperty(property, value, shouldNotify) {
          var propIsPath = this.__dataHasPaths && isPath(property);
          var prevProps = propIsPath ? this.__dataTemp : this.__data;

          if (this._shouldPropertyChange(property, value, prevProps[property])) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            } // Ensure old is captured from the last turn


            if (!(property in this.__dataOld)) {
              this.__dataOld[property] = this.__data[property];
            } // Paths are stored in temporary cache (cleared at end of turn),
            // which is used for dirty-checking, all others stored in __data


            if (propIsPath) {
              this.__dataTemp[property] = value;
            } else {
              this.__data[property] = value;
            } // All changes go into pending property bag, passed to _propertiesChanged


            this.__dataPending[property] = value; // Track properties that should notify separately

            if (propIsPath || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
              this.__dataToNotify = this.__dataToNotify || {};
              this.__dataToNotify[property] = shouldNotify;
            }

            return true;
          }

          return false;
        }
        /**
         * Overrides base implementation to ensure all accessors set `shouldNotify`
         * to true, for per-property notification tracking.
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         */

      }, {
        key: "_setProperty",
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value, true)) {
            this._invalidateProperties();
          }
        }
        /**
         * Overrides `PropertyAccessor`'s default async queuing of
         * `_propertiesChanged`: if `__dataReady` is false (has not yet been
         * manually flushed), the function no-ops; otherwise flushes
         * `_propertiesChanged` synchronously.
         *
         * @override
         * @return {void}
         */

      }, {
        key: "_invalidateProperties",
        value: function _invalidateProperties() {
          if (this.__dataReady) {
            this._flushProperties();
          }
        }
        /**
         * Enqueues the given client on a list of pending clients, whose
         * pending property changes can later be flushed via a call to
         * `_flushClients`.
         *
         * @param {Object} client PropertyEffects client to enqueue
         * @return {void}
         * @protected
         */

      }, {
        key: "_enqueueClient",
        value: function _enqueueClient(client) {
          this.__dataPendingClients = this.__dataPendingClients || [];

          if (client !== this) {
            this.__dataPendingClients.push(client);
          }
        }
        /**
         * Overrides superclass implementation.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushProperties",
        value: function _flushProperties() {
          this.__dataCounter++;
          babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype), "_flushProperties", this).call(this);
          this.__dataCounter--;
        }
        /**
         * Flushes any clients previously enqueued via `_enqueueClient`, causing
         * their `_flushProperties` method to run.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushClients",
        value: function _flushClients() {
          if (!this.__dataClientsReady) {
            this.__dataClientsReady = true;

            this._readyClients(); // Override point where accessors are turned on; importantly,
            // this is after clients have fully readied, providing a guarantee
            // that any property effects occur only after all clients are ready.


            this.__dataReady = true;
          } else {
            this.__enableOrFlushClients();
          }
        } // NOTE: We ensure clients either enable or flush as appropriate. This
        // handles two corner cases:
        // (1) clients flush properly when connected/enabled before the host
        // enables; e.g.
        //   (a) Templatize stamps with no properties and does not flush and
        //   (b) the instance is inserted into dom and
        //   (c) then the instance flushes.
        // (2) clients enable properly when not connected/enabled when the host
        // flushes; e.g.
        //   (a) a template is runtime stamped and not yet connected/enabled
        //   (b) a host sets a property, causing stamped dom to flush
        //   (c) the stamped dom enables.

      }, {
        key: "__enableOrFlushClients",
        value: function __enableOrFlushClients() {
          var clients = this.__dataPendingClients;

          if (clients) {
            this.__dataPendingClients = null;

            for (var _i12 = 0; _i12 < clients.length; _i12++) {
              var client = clients[_i12];

              if (!client.__dataEnabled) {
                client._enableProperties();
              } else if (client.__dataPending) {
                client._flushProperties();
              }
            }
          }
        }
        /**
         * Perform any initial setup on client dom. Called before the first
         * `_flushProperties` call on client dom and before any element
         * observers are called.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_readyClients",
        value: function _readyClients() {
          this.__enableOrFlushClients();
        }
        /**
         * Sets a bag of property changes to this instance, and
         * synchronously processes all effects of the properties as a batch.
         *
         * Property names must be simple properties, not paths.  Batched
         * path propagation is not supported.
         *
         * @param {Object} props Bag of one or more key-value pairs whose key is
         *   a property and value is the new value to set for that property.
         * @param {boolean=} setReadOnly When true, any private values set in
         *   `props` will be set. By default, `setProperties` will not set
         *   `readOnly: true` root properties.
         * @return {void}
         * @public
         */

      }, {
        key: "setProperties",
        value: function setProperties(props, setReadOnly) {
          for (var _path in props) {
            if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][_path]) {
              //TODO(kschaaf): explicitly disallow paths in setProperty?
              // wildcard observers currently only pass the first changed path
              // in the `info` object, and you could do some odd things batching
              // paths, e.g. {'foo.bar': {...}, 'foo': null}
              this._setPendingPropertyOrPath(_path, props[_path], true);
            }
          }

          this._invalidateProperties();
        }
        /**
         * Overrides `PropertyAccessors` so that property accessor
         * side effects are not enabled until after client dom is fully ready.
         * Also calls `_flushClients` callback to ensure client dom is enabled
         * that was not enabled as a result of flushing properties.
         *
         * @override
         * @return {void}
         */

      }, {
        key: "ready",
        value: function ready() {
          // It is important that `super.ready()` is not called here as it
          // immediately turns on accessors. Instead, we wait until `readyClients`
          // to enable accessors to provide a guarantee that clients are ready
          // before processing any accessors side effects.
          this._flushProperties(); // If no data was pending, `_flushProperties` will not `flushClients`
          // so ensure this is done.


          if (!this.__dataClientsReady) {
            this._flushClients();
          } // Before ready, client notifications do not trigger _flushProperties.
          // Therefore a flush is necessary here if data has been set.


          if (this.__dataPending) {
            this._flushProperties();
          }
        }
        /**
         * Implements `PropertyAccessors`'s properties changed callback.
         *
         * Runs each class of effects for the batch of changed properties in
         * a specific order (compute, propagate, reflect, observe, notify).
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         */

      }, {
        key: "_propertiesChanged",
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {
          // ----------------------------
          // let c = Object.getOwnPropertyNames(changedProps || {});
          // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
          // if (window.debug) { debugger; }
          // ----------------------------
          var hasPaths = this.__dataHasPaths;
          this.__dataHasPaths = false; // Compute properties

          runComputedEffects(this, changedProps, oldProps, hasPaths); // Clear notify properties prior to possible reentry (propagate, observe),
          // but after computing effects have a chance to add to them

          var notifyProps = this.__dataToNotify;
          this.__dataToNotify = null; // Propagate properties to clients

          this._propagatePropertyChanges(changedProps, oldProps, hasPaths); // Flush clients


          this._flushClients(); // Reflect properties


          runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths); // Observe properties

          runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths); // Notify properties to host

          if (notifyProps) {
            runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
          } // Clear temporary cache at end of turn


          if (this.__dataCounter == 1) {
            this.__dataTemp = {};
          } // ----------------------------
          // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
          // ----------------------------

        }
        /**
         * Called to propagate any property changes to stamped template nodes
         * managed by this element.
         *
         * @param {Object} changedProps Bag of changed properties
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {void}
         * @protected
         */

      }, {
        key: "_propagatePropertyChanges",
        value: function _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
          if (this[TYPES.PROPAGATE]) {
            runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
          }

          var templateInfo = this.__templateInfo;

          while (templateInfo) {
            runEffects(this, templateInfo.propertyEffects, changedProps, oldProps, hasPaths, templateInfo.nodeList);
            templateInfo = templateInfo.nextTemplateInfo;
          }
        }
        /**
         * Aliases one data path as another, such that path notifications from one
         * are routed to the other.
         *
         * @param {string | !Array<string|number>} to Target path to link.
         * @param {string | !Array<string|number>} from Source path to link.
         * @return {void}
         * @public
         */

      }, {
        key: "linkPaths",
        value: function linkPaths(to, from) {
          to = normalize(to);
          from = normalize(from);
          this.__dataLinkedPaths = this.__dataLinkedPaths || {};
          this.__dataLinkedPaths[to] = from;
        }
        /**
         * Removes a data path alias previously established with `_linkPaths`.
         *
         * Note, the path to unlink should be the target (`to`) used when
         * linking the paths.
         *
         * @param {string | !Array<string|number>} path Target path to unlink.
         * @return {void}
         * @public
         */

      }, {
        key: "unlinkPaths",
        value: function unlinkPaths(path) {
          path = normalize(path);

          if (this.__dataLinkedPaths) {
            delete this.__dataLinkedPaths[path];
          }
        }
        /**
         * Notify that an array has changed.
         *
         * Example:
         *
         *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
         *     ...
         *     this.items.splice(1, 1, {name: 'Sam'});
         *     this.items.push({name: 'Bob'});
         *     this.notifySplices('items', [
         *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
         *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
         *     ]);
         *
         * @param {string} path Path that should be notified.
         * @param {Array} splices Array of splice records indicating ordered
         *   changes that occurred to the array. Each record should have the
         *   following fields:
         *    * index: index at which the change occurred
         *    * removed: array of items that were removed from this index
         *    * addedCount: number of new items added at this index
         *    * object: a reference to the array in question
         *    * type: the string literal 'splice'
         *
         *   Note that splice records _must_ be normalized such that they are
         *   reported in index order (raw results from `Object.observe` are not
         *   ordered and must be normalized/merged before notifying).
         * @return {void}
         * @public
        */

      }, {
        key: "notifySplices",
        value: function notifySplices(path, splices) {
          var info = {
            path: ''
          };

          var array =
          /** @type {Array} */
          _get(this, path, info);

          _notifySplices(this, array, info.path, splices);
        }
        /**
         * Convenience method for reading a value from a path.
         *
         * Note, if any part in the path is undefined, this method returns
         * `undefined` (this method does not throw when dereferencing undefined
         * paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `users.12.name` or `['users', 12, 'name']`).
         * @param {Object=} root Root object from which the path is evaluated.
         * @return {*} Value at the path, or `undefined` if any part of the path
         *   is undefined.
         * @public
         */

      }, {
        key: "get",
        value: function get(path, root$$1) {
          return _get(root$$1 || this, path);
        }
        /**
         * Convenience method for setting a value to a path and notifying any
         * elements bound to the same path.
         *
         * Note, if any part in the path except for the last is undefined,
         * this method does nothing (this method does not throw when
         * dereferencing undefined paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
         * @param {*} value Value to set at the specified path.
         * @param {Object=} root Root object from which the path is evaluated.
         *   When specified, no notification will occur.
         * @return {void}
         * @public
        */

      }, {
        key: "set",
        value: function set(path, value, root$$1) {
          if (root$$1) {
            _set(root$$1, path, value);
          } else {
            if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][
            /** @type {string} */
            path]) {
              if (this._setPendingPropertyOrPath(path, value, true)) {
                this._invalidateProperties();
              }
            }
          }
        }
        /**
         * Adds items onto the end of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to push onto array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: "push",
        value: function push(path) {
          var info = {
            path: ''
          };

          var array =
          /** @type {Array}*/
          _get(this, path, info);

          var len = array.length;

          for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
          }

          var ret = array.push.apply(array, items);

          if (items.length) {
            notifySplice(this, array, info.path, len, items.length, []);
          }

          return ret;
        }
        /**
         * Removes an item from the end of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: "pop",
        value: function pop(path) {
          var info = {
            path: ''
          };

          var array =
          /** @type {Array} */
          _get(this, path, info);

          var hadLength = Boolean(array.length);
          var ret = array.pop();

          if (hadLength) {
            notifySplice(this, array, info.path, array.length, 0, [ret]);
          }

          return ret;
        }
        /**
         * Starting from the start index specified, removes 0 or more items
         * from the array and inserts 0 or more new items in their place.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.splice`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {number} start Index from which to start removing/inserting.
         * @param {number=} deleteCount Number of items to remove.
         * @param {...*} items Items to insert into array.
         * @return {Array} Array of removed items.
         * @public
         */

      }, {
        key: "splice",
        value: function splice(path, start, deleteCount) {
          for (var _len2 = arguments.length, items = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            items[_key2 - 3] = arguments[_key2];
          }

          var info = {
            path: ''
          };

          var array =
          /** @type {Array} */
          _get(this, path, info); // Normalize fancy native splice handling of crazy start values


          if (start < 0) {
            start = array.length - Math.floor(-start);
          } else if (start) {
            start = Math.floor(start);
          } // array.splice does different things based on the number of arguments
          // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
          // do different things. In the former, the whole array is cleared. In the
          // latter, no items are removed.
          // This means that we need to detect whether 1. one of the arguments
          // is actually passed in and then 2. determine how many arguments
          // we should pass on to the native array.splice
          //


          var ret; // Omit any additional arguments if they were not passed in

          if (arguments.length === 2) {
            ret = array.splice(start); // Either start was undefined and the others were defined, but in this
            // case we can safely pass on all arguments
            //
            // Note: this includes the case where none of the arguments were passed in,
            // e.g. this.splice('array'). However, if both start and deleteCount
            // are undefined, array.splice will not modify the array (as expected)
          } else {
            ret = array.splice.apply(array, [start, deleteCount].concat(items));
          } // At the end, check whether any items were passed in (e.g. insertions)
          // or if the return array contains items (e.g. deletions).
          // Only notify if items were added or deleted.


          if (items.length || ret.length) {
            notifySplice(this, array, info.path, start, items.length, ret);
          }

          return ret;
        }
        /**
         * Removes an item from the beginning of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: "shift",
        value: function shift(path) {
          var info = {
            path: ''
          };

          var array =
          /** @type {Array} */
          _get(this, path, info);

          var hadLength = Boolean(array.length);
          var ret = array.shift();

          if (hadLength) {
            notifySplice(this, array, info.path, 0, 0, [ret]);
          }

          return ret;
        }
        /**
         * Adds items onto the beginning of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to insert info array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: "unshift",
        value: function unshift(path) {
          var info = {
            path: ''
          };

          var array =
          /** @type {Array} */
          _get(this, path, info);

          for (var _len3 = arguments.length, items = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            items[_key3 - 1] = arguments[_key3];
          }

          var ret = array.unshift.apply(array, items);

          if (items.length) {
            notifySplice(this, array, info.path, 0, items.length, []);
          }

          return ret;
        }
        /**
         * Notify that a path has changed.
         *
         * Example:
         *
         *     this.item.user.name = 'Bob';
         *     this.notifyPath('item.user.name');
         *
         * @param {string} path Path that should be notified.
         * @param {*=} value Value at the path (optional).
         * @return {void}
         * @public
        */

      }, {
        key: "notifyPath",
        value: function notifyPath(path, value) {
          /** @type {string} */
          var propPath;

          if (arguments.length == 1) {
            // Get value if not supplied
            var info = {
              path: ''
            };
            value = _get(this, path, info);
            propPath = info.path;
          } else if (Array.isArray(path)) {
            // Normalize path if needed
            propPath = normalize(path);
          } else {
            propPath =
            /** @type{string} */
            path;
          }

          if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
            this._invalidateProperties();
          }
        }
        /**
         * Equivalent to static `createReadOnlyProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createReadOnlyProperty",
        value: function _createReadOnlyProperty(property, protectedSetter) {
          this._addPropertyEffect(property, TYPES.READ_ONLY);

          if (protectedSetter) {
            this['_set' + upper(property)] =
            /** @this {PropertyEffects} */
            function (value) {
              this._setProperty(property, value);
            };
          }
        }
        /**
         * Equivalent to static `createPropertyObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createPropertyObserver",
        value: function _createPropertyObserver(property, method, dynamicFn) {
          var info = {
            property: property,
            method: method,
            dynamicFn: Boolean(dynamicFn)
          };

          this._addPropertyEffect(property, TYPES.OBSERVE, {
            fn: runObserverEffect,
            info: info,
            trigger: {
              name: property
            }
          });

          if (dynamicFn) {
            this._addPropertyEffect(
            /** @type {string} */
            method, TYPES.OBSERVE, {
              fn: runObserverEffect,
              info: info,
              trigger: {
                name: method
              }
            });
          }
        }
        /**
         * Equivalent to static `createMethodObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createMethodObserver",
        value: function _createMethodObserver(expression, dynamicFn) {
          var sig = parseMethod(expression);

          if (!sig) {
            throw new Error("Malformed observer expression '" + expression + "'");
          }

          createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
        }
        /**
         * Equivalent to static `createNotifyingProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "_createNotifyingProperty",
        value: function _createNotifyingProperty(property) {
          this._addPropertyEffect(property, TYPES.NOTIFY, {
            fn: runNotifyEffect,
            info: {
              eventName: camelToDashCase(property) + '-changed',
              property: property
            }
          });
        }
        /**
         * Equivalent to static `createReflectedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "_createReflectedProperty",
        value: function _createReflectedProperty(property) {
          var attr = this.constructor.attributeNameForProperty(property);

          if (attr[0] === '-') {
            console.warn('Property ' + property + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
          } else {
            this._addPropertyEffect(property, TYPES.REFLECT, {
              fn: runReflectEffect,
              info: {
                attrName: attr
              }
            });
          }
        }
        /**
         * Equivalent to static `createComputedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createComputedProperty",
        value: function _createComputedProperty(property, expression, dynamicFn) {
          var sig = parseMethod(expression);

          if (!sig) {
            throw new Error("Malformed computed expression '" + expression + "'");
          }

          createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        }
        /**
         * Gather the argument values for a method specified in the provided array
         * of argument metadata.
         *
         * The `path` and `value` arguments are used to fill in wildcard descriptor
         * when the method is being called as a result of a path notification.
         *
         * @param {!Array<!MethodArg>} args Array of argument metadata
         * @param {string} path Property/path name that triggered the method effect
         * @param {Object} props Bag of current property changes
         * @return {Array<*>} Array of argument values
         * @private
         */

      }, {
        key: "_marshalArgs",
        value: function _marshalArgs(args, path, props) {
          var data = this.__data;
          var values = [];

          for (var _i13 = 0, l = args.length; _i13 < l; _i13++) {
            var arg = args[_i13];
            var name = arg.name;
            var v = void 0;

            if (arg.literal) {
              v = arg.value;
            } else {
              if (arg.structured) {
                v = _get(data, name); // when data is not stored e.g. `splices`

                if (v === undefined) {
                  v = props[name];
                }
              } else {
                v = data[name];
              }
            }

            if (arg.wildcard) {
              // Only send the actual path changed info if the change that
              // caused the observer to run matched the wildcard
              var baseChanged = name.indexOf(path + '.') === 0;
              var matches$$1 = path.indexOf(name) === 0 && !baseChanged;
              values[_i13] = {
                path: matches$$1 ? path : name,
                value: matches$$1 ? props[path] : v,
                base: v
              };
            } else {
              values[_i13] = v;
            }
          }

          return values;
        } // -- static class methods ------------

        /**
         * Ensures an accessor exists for the specified property, and adds
         * to a list of "property effects" that will run when the accessor for
         * the specified property is set.  Effects are grouped by "type", which
         * roughly corresponds to a phase in effect processing.  The effect
         * metadata should be in the following form:
         *
         *     {
         *       fn: effectFunction, // Reference to function to call to perform effect
         *       info: { ... }       // Effect metadata passed to function
         *       trigger: {          // Optional triggering metadata; if not provided
         *         name: string      // the property is treated as a wildcard
         *         structured: boolean
         *         wildcard: boolean
         *       }
         *     }
         *
         * Effects are called from `_propertiesChanged` in the following order by
         * type:
         *
         * 1. COMPUTE
         * 2. PROPAGATE
         * 3. REFLECT
         * 4. OBSERVE
         * 5. NOTIFY
         *
         * Effect functions are called with the following signature:
         *
         *     effectFunction(inst, path, props, oldProps, info, hasPaths)
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_bindTemplate",
        // -- binding ----------------------------------------------

        /**
         * Equivalent to static `bindTemplate` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @param {boolean=} instanceBinding When false (default), performs
         *   "prototypical" binding of the template and overwrites any previously
         *   bound template for the class. When true (as passed from
         *   `_stampTemplate`), the template info is instanced and linked into
         *   the list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         *   this is an instance of the prototypical template info
         * @protected
         */
        value: function _bindTemplate(template, instanceBinding) {
          var templateInfo = this.constructor._parseTemplate(template);

          var wasPreBound = this.__templateInfo == templateInfo; // Optimization: since this is called twice for proto-bound templates,
          // don't attempt to recreate accessors if this template was pre-bound

          if (!wasPreBound) {
            for (var prop in templateInfo.propertyEffects) {
              this._createPropertyAccessor(prop);
            }
          }

          if (instanceBinding) {
            // For instance-time binding, create instance of template metadata
            // and link into list of templates if necessary
            templateInfo =
            /** @type {!TemplateInfo} */
            Object.create(templateInfo);
            templateInfo.wasPreBound = wasPreBound;

            if (!wasPreBound && this.__templateInfo) {
              var last = this.__templateInfoLast || this.__templateInfo;
              this.__templateInfoLast = last.nextTemplateInfo = templateInfo;
              templateInfo.previousTemplateInfo = last;
              return templateInfo;
            }
          }

          return this.__templateInfo = templateInfo;
        }
        /**
         * Adds a property effect to the given template metadata, which is run
         * at the "propagate" stage of `_propertiesChanged` when the template
         * has been bound to the element via `_bindTemplate`.
         *
         * The `effect` object should match the format in `_addPropertyEffect`.
         *
         * @param {Object} templateInfo Template metadata to add effect to
         * @param {string} prop Property that should trigger the effect
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_stampTemplate",

        /**
         * Stamps the provided template and performs instance-time setup for
         * Polymer template features, including data bindings, declarative event
         * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
         * is returned containing the stamped DOM, ready for insertion into the
         * DOM.
         *
         * This method may be called more than once; however note that due to
         * `shadycss` polyfill limitations, only styles from templates prepared
         * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
         * to the shadow root and support CSS custom properties), and note that
         * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
         * any styles required by in runtime-stamped templates must be included
         * in the main element template.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         * @protected
         */
        value: function _stampTemplate(template) {
          // Ensures that created dom is `_enqueueClient`'d to this element so
          // that it can be flushed on next call to `_flushProperties`
          hostStack.beginHosting(this);
          var dom = babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype), "_stampTemplate", this).call(this, template);
          hostStack.endHosting(this);

          var templateInfo =
          /** @type {!TemplateInfo} */
          this._bindTemplate(template, true); // Add template-instance-specific data to instanced templateInfo


          templateInfo.nodeList = dom.nodeList; // Capture child nodes to allow unstamping of non-prototypical templates

          if (!templateInfo.wasPreBound) {
            var nodes = templateInfo.childNodes = [];

            for (var n = dom.firstChild; n; n = n.nextSibling) {
              nodes.push(n);
            }
          }

          dom.templateInfo = templateInfo; // Setup compound storage, 2-way listeners, and dataHost for bindings

          setupBindings(this, templateInfo); // Flush properties into template nodes if already booted

          if (this.__dataReady) {
            runEffects(this, templateInfo.propertyEffects, this.__data, null, false, templateInfo.nodeList);
          }

          return dom;
        }
        /**
         * Removes and unbinds the nodes previously contained in the provided
         * DocumentFragment returned from `_stampTemplate`.
         *
         * @param {!StampedTemplate} dom DocumentFragment previously returned
         *   from `_stampTemplate` associated with the nodes to be removed
         * @return {void}
         * @protected
         */

      }, {
        key: "_removeBoundDom",
        value: function _removeBoundDom(dom) {
          // Unlink template info
          var templateInfo = dom.templateInfo;

          if (templateInfo.previousTemplateInfo) {
            templateInfo.previousTemplateInfo.nextTemplateInfo = templateInfo.nextTemplateInfo;
          }

          if (templateInfo.nextTemplateInfo) {
            templateInfo.nextTemplateInfo.previousTemplateInfo = templateInfo.previousTemplateInfo;
          }

          if (this.__templateInfoLast == templateInfo) {
            this.__templateInfoLast = templateInfo.previousTemplateInfo;
          }

          templateInfo.previousTemplateInfo = templateInfo.nextTemplateInfo = null; // Remove stamped nodes

          var nodes = templateInfo.childNodes;

          for (var _i14 = 0; _i14 < nodes.length; _i14++) {
            var node = nodes[_i14];
            node.parentNode.removeChild(node);
          }
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "PROPERTY_EFFECT_TYPES",
        get: function get() {
          return TYPES;
        }
      }], [{
        key: "addPropertyEffect",
        value: function addPropertyEffect(property, type, effect) {
          this.prototype._addPropertyEffect(property, type, effect);
        }
        /**
         * Creates a single-property observer for the given property.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "createPropertyObserver",
        value: function createPropertyObserver(property, method, dynamicFn) {
          this.prototype._createPropertyObserver(property, method, dynamicFn);
        }
        /**
         * Creates a multi-property "method observer" based on the provided
         * expression, which should be a string in the form of a normal JavaScript
         * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
         * should correspond to a property or path in the context of this
         * prototype (or instance), or may be a literal string or number.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         * @return {void}
         *   whether method names should be included as a dependency to the effect.
         * @protected
         */

      }, {
        key: "createMethodObserver",
        value: function createMethodObserver(expression, dynamicFn) {
          this.prototype._createMethodObserver(expression, dynamicFn);
        }
        /**
         * Causes the setter for the given property to dispatch `<property>-changed`
         * events to notify of changes to the property.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "createNotifyingProperty",
        value: function createNotifyingProperty(property) {
          this.prototype._createNotifyingProperty(property);
        }
        /**
         * Creates a read-only accessor for the given property.
         *
         * To set the property, use the protected `_setProperty` API.
         * To create a custom protected setter (e.g. `_setMyProp()` for
         * property `myProp`), pass `true` for `protectedSetter`.
         *
         * Note, if the property will have other property effects, this method
         * should be called first, before adding other effects.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: "createReadOnlyProperty",
        value: function createReadOnlyProperty(property, protectedSetter) {
          this.prototype._createReadOnlyProperty(property, protectedSetter);
        }
        /**
         * Causes the setter for the given property to reflect the property value
         * to a (dash-cased) attribute of the same name.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "createReflectedProperty",
        value: function createReflectedProperty(property) {
          this.prototype._createReflectedProperty(property);
        }
        /**
         * Creates a computed property whose value is set to the result of the
         * method described by the given `expression` each time one or more
         * arguments to the method changes.  The expression should be a string
         * in the form of a normal JavaScript function signature:
         * `'methodName(arg1, [..., argn])'`
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
         *   method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "createComputedProperty",
        value: function createComputedProperty(property, expression, dynamicFn) {
          this.prototype._createComputedProperty(property, expression, dynamicFn);
        }
        /**
         * Parses the provided template to ensure binding effects are created
         * for them, and then ensures property accessors are created for any
         * dependent properties in the template.  Binding effects for bound
         * templates are stored in a linked list on the instance so that
         * templates can be efficiently stamped and unstamped.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @return {!TemplateInfo} Template metadata object
         * @protected
         */

      }, {
        key: "bindTemplate",
        value: function bindTemplate(template) {
          return this.prototype._bindTemplate(template);
        }
      }, {
        key: "_addTemplatePropertyEffect",
        value: function _addTemplatePropertyEffect(templateInfo, prop, effect) {
          var hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
          hostProps[prop] = true;
          var effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
          var propEffects = effects[prop] = effects[prop] || [];
          propEffects.push(effect);
        }
      }, {
        key: "_parseTemplateNode",
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted = babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects), "_parseTemplateNode", this).call(this, node, templateInfo, nodeInfo);

          if (node.nodeType === Node.TEXT_NODE) {
            var parts = this._parseBindings(node.textContent, templateInfo);

            if (parts) {
              // Initialize the textContent with any literal parts
              // NOTE: default to a space here so the textNode remains; some browsers
              // (IE) omit an empty textNode following cloneNode/importNode.
              node.textContent = literalFromParts(parts) || ' ';
              addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
              noted = true;
            }
          }

          return noted;
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from attributes.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "_parseTemplateNodeAttribute",
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          var parts = this._parseBindings(value, templateInfo);

          if (parts) {
            // Attribute or property
            var origName = name;
            var kind = 'property'; // The only way we see a capital letter here is if the attr has
            // a capital letter in it per spec. In this case, to make sure
            // this binding works, we go ahead and make the binding to the attribute.

            if (capitalAttributeRegex.test(name)) {
              kind = 'attribute';
            } else if (name[name.length - 1] == '$') {
              name = name.slice(0, -1);
              kind = 'attribute';
            } // Initialize attribute bindings with any literal parts


            var literal = literalFromParts(parts);

            if (literal && kind == 'attribute') {
              node.setAttribute(name, literal);
            } // Clear attribute before removing, since IE won't allow removing
            // `value` attribute if it previously had a value (can't
            // unconditionally set '' before removing since attributes with `$`
            // can't be set using setAttribute)


            if (node.localName === 'input' && origName === 'value') {
              node.setAttribute(origName, '');
            } // Remove annotation


            node.removeAttribute(origName); // Case hackery: attributes are lower-case, but bind targets
            // (properties) are case sensitive. Gambit is to map dash-case to
            // camel-case: `foo-bar` becomes `fooBar`.
            // Attribute bindings are excepted.

            if (kind === 'property') {
              name = dashToCamelCase(name);
            }

            addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
            return true;
          } else {
            return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects), "_parseTemplateNodeAttribute", this).call(this, node, templateInfo, nodeInfo, name, value);
          }
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * binding the properties that a nested template depends on to the template
         * as `_host_<property>`.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "_parseTemplateNestedTemplate",
        value: function _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
          var noted = babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects), "_parseTemplateNestedTemplate", this).call(this, node, templateInfo, nodeInfo); // Merge host props into outer template and add bindings

          var hostProps = nodeInfo.templateInfo.hostProps;
          var mode = '{';

          for (var source in hostProps) {
            var parts = [{
              mode: mode,
              source: source,
              dependencies: [source]
            }];
            addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
          }

          return noted;
        }
        /**
         * Called to parse text in a template (either attribute values or
         * textContent) into binding metadata.
         *
         * Any overrides of this method should return an array of binding part
         * metadata  representing one or more bindings found in the provided text
         * and any "literal" text in between.  Any non-literal parts will be passed
         * to `_evaluateBinding` when any dependencies change.  The only required
         * fields of each "part" in the returned array are as follows:
         *
         * - `dependencies` - Array containing trigger metadata for each property
         *   that should trigger the binding to update
         * - `literal` - String containing text if the part represents a literal;
         *   in this case no `dependencies` are needed
         *
         * Additional metadata for use by `_evaluateBinding` may be provided in
         * each part object as needed.
         *
         * The default implementation handles the following types of bindings
         * (one or more may be intermixed with literal strings):
         * - Property binding: `[[prop]]`
         * - Path binding: `[[object.prop]]`
         * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
         * - Two-way property or path bindings (supports negation):
         *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
         * - Inline computed method (supports negation):
         *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
         *
         * The default implementation uses a regular expression for best
         * performance. However, the regular expression uses a white-list of
         * allowed characters in a data-binding, which causes problems for
         * data-bindings that do use characters not in this white-list.
         *
         * Instead of updating the white-list with all allowed characters,
         * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
         * that uses a state machine instead. This state machine is able to handle
         * all characters. However, it is slightly less performant, therefore we
         * extracted it into a separate optional mixin.
         *
         * @param {string} text Text to parse from attribute or textContent
         * @param {Object} templateInfo Current template metadata
         * @return {Array<!BindingPart>} Array of binding part metadata
         * @protected
         */

      }, {
        key: "_parseBindings",
        value: function _parseBindings(text, templateInfo) {
          var parts = [];
          var lastIndex = 0;
          var m; // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
          // Regex matches:
          //        Iteration 1:  Iteration 2:
          // m[1]: '{{'          '[['
          // m[2]: ''            '!'
          // m[3]: 'prop'        'compute(foo,bar)'

          while ((m = bindingRegex.exec(text)) !== null) {
            // Add literal part
            if (m.index > lastIndex) {
              parts.push({
                literal: text.slice(lastIndex, m.index)
              });
            } // Add binding part


            var mode = m[1][0];
            var negate = Boolean(m[2]);
            var source = m[3].trim();
            var customEvent = false,
                notifyEvent = '',
                colon = -1;

            if (mode == '{' && (colon = source.indexOf('::')) > 0) {
              notifyEvent = source.substring(colon + 2);
              source = source.substring(0, colon);
              customEvent = true;
            }

            var signature = parseMethod(source);
            var dependencies = [];

            if (signature) {
              // Inline computed function
              var args = signature.args,
                  methodName = signature.methodName;

              for (var _i15 = 0; _i15 < args.length; _i15++) {
                var arg = args[_i15];

                if (!arg.literal) {
                  dependencies.push(arg);
                }
              }

              var dynamicFns = templateInfo.dynamicFns;

              if (dynamicFns && dynamicFns[methodName] || signature.static) {
                dependencies.push(methodName);
                signature.dynamicFn = true;
              }
            } else {
              // Property or path
              dependencies.push(source);
            }

            parts.push({
              source: source,
              mode: mode,
              negate: negate,
              customEvent: customEvent,
              signature: signature,
              dependencies: dependencies,
              event: notifyEvent
            });
            lastIndex = bindingRegex.lastIndex;
          } // Add a final literal part


          if (lastIndex && lastIndex < text.length) {
            var literal = text.substring(lastIndex);

            if (literal) {
              parts.push({
                literal: literal
              });
            }
          }

          if (parts.length) {
            return parts;
          } else {
            return null;
          }
        }
        /**
         * Called to evaluate a previously parsed binding part based on a set of
         * one or more changed dependencies.
         *
         * @param {this} inst Element that should be used as scope for
         *   binding dependencies
         * @param {BindingPart} part Binding part metadata
         * @param {string} path Property/path that triggered this effect
         * @param {Object} props Bag of current property changes
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {*} Value the binding part evaluated to
         * @protected
         */

      }, {
        key: "_evaluateBinding",
        value: function _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
          var value;

          if (part.signature) {
            value = runMethodEffect(inst, path, props, oldProps, part.signature);
          } else if (path != part.source) {
            value = _get(inst, part.source);
          } else {
            if (hasPaths && isPath(path)) {
              value = _get(inst, path);
            } else {
              value = inst.__data[path];
            }
          }

          if (part.negate) {
            value = !value;
          }

          return value;
        }
      }]);
      return PropertyEffects;
    }(propertyEffectsBase); // make a typing for closure :P


    PropertyEffectsType = PropertyEffects;
    return PropertyEffects;
  });
  /**
   * Helper api for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */

  _exports.PropertyEffects = PropertyEffects;

  var HostStack =
  /*#__PURE__*/
  function () {
    function HostStack() {
      babelHelpers.classCallCheck(this, HostStack);
      this.stack = [];
    }
    /**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */


    babelHelpers.createClass(HostStack, [{
      key: "registerHost",
      value: function registerHost(inst) {
        if (this.stack.length) {
          var host = this.stack[this.stack.length - 1];

          host._enqueueClient(inst);
        }
      }
      /**
       * @param {*} inst Instance to begin hosting
       * @return {void}
       */

    }, {
      key: "beginHosting",
      value: function beginHosting(inst) {
        this.stack.push(inst);
      }
      /**
       * @param {*} inst Instance to end hosting
       * @return {void}
       */

    }, {
      key: "endHosting",
      value: function endHosting(inst) {
        var stackLen = this.stack.length;

        if (stackLen && this.stack[stackLen - 1] == inst) {
          this.stack.pop();
        }
      }
    }]);
    return HostStack;
  }();

  var hostStack = new HostStack();
  var propertyEffects = {
    PropertyEffects: PropertyEffects
  };
  _exports.$propertyEffects = propertyEffects;

  function normalizeProperties(props) {
    var output = {};

    for (var p in props) {
      var o = props[p];
      output[p] = typeof o === 'function' ? {
        type: o
      } : o;
    }

    return output;
  }
  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */


  var PropertiesMixin = dedupingMixin(function (superClass) {
    /**
     * @constructor
     * @implements {Polymer_PropertiesChanged}
     * @private
     */
    var base = PropertiesChanged(superClass);
    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {?PropertiesMixinConstructor} Super class constructor
     */

    function superPropertiesClass(constructor) {
      var superCtor = Object.getPrototypeOf(constructor); // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`

      return babelHelpers.instanceof(superCtor.prototype, PropertiesMixin) ?
      /** @type {!PropertiesMixinConstructor} */
      superCtor : null;
    }
    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */


    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        var _props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor))) {
          var properties = constructor.properties;

          if (properties) {
            _props = normalizeProperties(properties);
          }
        }

        constructor.__ownProperties = _props;
      }

      return constructor.__ownProperties;
    }
    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */


    var PropertiesMixin =
    /*#__PURE__*/
    function (_base2) {
      babelHelpers.inherits(PropertiesMixin, _base2);

      function PropertiesMixin() {
        babelHelpers.classCallCheck(this, PropertiesMixin);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertiesMixin).apply(this, arguments));
      }

      babelHelpers.createClass(PropertiesMixin, [{
        key: "_initializeProperties",

        /**
         * Overrides `PropertiesChanged` method and adds a call to
         * `finalize` which lazily configures the element's property accessors.
         * @override
         * @return {void}
         */
        value: function _initializeProperties() {
          this.constructor.finalize();
          babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype), "_initializeProperties", this).call(this);
        }
        /**
         * Called when the element is added to a document.
         * Calls `_enableProperties` to turn on property system from
         * `PropertiesChanged`.
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          if (babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this)) {
            babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this).call(this);
          }

          this._enableProperties();
        }
        /**
         * Called when the element is removed from a document
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this)) {
            babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this).call(this);
          }
        }
      }], [{
        key: "finalize",

        /**
         * Finalizes an element definition, including ensuring any super classes
         * are also finalized. This includes ensuring property
         * accessors exist on the element prototype. This method calls
         * `_finalizeClass` to finalize each constructor in the prototype chain.
         * @return {void}
         */
        value: function finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
            var superCtor = superPropertiesClass(
            /** @type {!PropertiesMixinConstructor} */
            this);

            if (superCtor) {
              superCtor.finalize();
            }

            this.__finalized = true;

            this._finalizeClass();
          }
        }
        /**
         * Finalize an element class. This includes ensuring property
         * accessors exist on the element prototype. This method is called by
         * `finalize` and finalizes the class constructor.
         *
         * @protected
         */

      }, {
        key: "_finalizeClass",
        value: function _finalizeClass() {
          var props = ownProperties(
          /** @type {!PropertiesMixinConstructor} */
          this);

          if (props) {
            this.createProperties(props);
          }
        }
        /**
         * Returns a memoized version of all properties, including those inherited
         * from super classes. Properties not in object format are converted to
         * at least {type}.
         *
         * @return {Object} Object containing properties for this class
         * @protected
         */

      }, {
        key: "typeForProperty",

        /**
         * Overrides `PropertiesChanged` method to return type specified in the
         * static `properties` object for the given property.
         * @param {string} name Name of property
         * @return {*} Type to which to deserialize attribute
         *
         * @protected
         */
        value: function typeForProperty(name) {
          var info = this._properties[name];
          return info && info.type;
        }
      }, {
        key: "observedAttributes",

        /**
         * Implements standard custom elements getter to observes the attributes
         * listed in `properties`.
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        get: function get() {
          var _this4 = this;

          var props = this._properties;
          return props ? Object.keys(props).map(function (p) {
            return _this4.attributeNameForProperty(p);
          }) : [];
        }
      }, {
        key: "_properties",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
            var superCtor = superPropertiesClass(
            /** @type {!PropertiesMixinConstructor} */
            this);
            this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties(
            /** @type {PropertiesMixinConstructor} */
            this));
          }

          return this.__properties;
        }
      }]);
      return PropertiesMixin;
    }(base);

    return PropertiesMixin;
  });
  _exports.PropertiesMixin = PropertiesMixin;
  var propertiesMixin = {
    PropertiesMixin: PropertiesMixin
  };
  _exports.$propertiesMixin = propertiesMixin;
  var bundledImportMeta = babelHelpers.objectSpread({}, meta, {
    url: new URL('../../../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js', meta.url).href
  });
  var version = '3.0.5';
  /**
          * Element class mixin that provides the core API for Polymer's meta-programming
          * features including template stamping, data-binding, attribute deserialization,
          * and property change observation.
          *
          * Subclassers may provide the following static getters to return metadata
          * used to configure Polymer's features for the class:
          *
          * - `static get is()`: When the template is provided via a `dom-module`,
          *   users should return the `dom-module` id from a static `is` getter.  If
          *   no template is needed or the template is provided directly via the
          *   `template` getter, there is no need to define `is` for the element.
          *
          * - `static get template()`: Users may provide the template directly (as
          *   opposed to via `dom-module`) by implementing a static `template` getter.
          *   The getter must return an `HTMLTemplateElement`.
          *
          * - `static get properties()`: Should return an object describing
          *   property-related metadata used by Polymer features (key: property name
          *   value: object containing property metadata). Valid keys in per-property
          *   metadata include:
          *   - `type` (String|Number|Object|Array|...): Used by
          *     `attributeChangedCallback` to determine how string-based attributes
          *     are deserialized to JavaScript property values.
          *   - `notify` (boolean): Causes a change in the property to fire a
          *     non-bubbling event called `<property>-changed`. Elements that have
          *     enabled two-way binding to the property use this event to observe changes.
          *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
          *     To set a read-only property, use the private setter method
          *     `_setProperty(property, value)`.
          *   - `observer` (string): Observer method name that will be called when
          *     the property changes. The arguments of the method are
          *     `(value, previousValue)`.
          *   - `computed` (string): String describing method and dependent properties
          *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
          *     Computed properties are read-only by default and can only be changed
          *     via the return value of the computing method.
          *
          * - `static get observers()`: Array of strings describing multi-property
          *   observer methods and their dependent properties (e.g.
          *   `'observeABC(a, b, c)'`).
          *
          * The base class provides default implementations for the following standard
          * custom element lifecycle callbacks; users may override these, but should
          * call the super method to ensure
          * - `constructor`: Run when the element is created or upgraded
          * - `connectedCallback`: Run each time the element is connected to the
          *   document
          * - `disconnectedCallback`: Run each time the element is disconnected from
          *   the document
          * - `attributeChangedCallback`: Run each time an attribute in
          *   `observedAttributes` is set or removed (note: this element's default
          *   `observedAttributes` implementation will automatically return an array
          *   of dash-cased attributes based on `properties`)
          *
          * @mixinFunction
          * @polymer
          * @appliesMixin PropertyEffects
          * @appliesMixin PropertiesMixin
          * @property rootPath {string} Set to the value of `rootPath`,
          *   which defaults to the main document path
          * @property importPath {string} Set to the value of the class's static
          *   `importPath` property, which defaults to the path of this element's
          *   `dom-module` (when `is` is used), but can be overridden for other
          *   import strategies.
          * @summary Element class mixin that provides the core API for Polymer's
          * meta-programming features.
          */

  _exports.version$1 = _exports.version = version;
  var ElementMixin = dedupingMixin(function (base) {
    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     * @private
     */
    var polymerElementBase = PropertiesMixin(PropertyEffects(base));
    /**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */

    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults', constructor))) {
        constructor.__propertyDefaults = null;
        var _props2 = constructor._properties;

        for (var p in _props2) {
          var info = _props2[p];

          if ('value' in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p] = info;
          }
        }
      }

      return constructor.__propertyDefaults;
    }
    /**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */


    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', constructor))) {
        constructor.__ownObservers = constructor.hasOwnProperty(JSCompiler_renameProperty('observers', constructor)) ?
        /** @type {PolymerElementConstructor} */
        constructor.observers : null;
      }

      return constructor.__ownObservers;
    }
    /**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */


    function createPropertyFromConfig(proto, name, info, allProps) {
      // computed forces readOnly...
      if (info.computed) {
        info.readOnly = true;
      } // Note, since all computed properties are readOnly, this prevents
      // adding additional computed property effects (which leads to a confusing
      // setup where multiple triggers for setting a property)
      // While we do have `hasComputedEffect` this is set on the property's
      // dependencies rather than itself.


      if (info.computed && !proto._hasReadOnlyEffect(name)) {
        proto._createComputedProperty(name, info.computed, allProps);
      }

      if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
        proto._createReadOnlyProperty(name, !info.computed);
      }

      if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
        proto._createReflectedProperty(name);
      }

      if (info.notify && !proto._hasNotifyEffect(name)) {
        proto._createNotifyingProperty(name);
      } // always add observer


      if (info.observer) {
        proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
      } // always create the mapping from attribute back to property for deserialization.


      proto._addPropertyToAttributeMap(name);
    }
    /**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */


    function processElementStyles(klass, template, is, baseURI) {
      var templateStyles = template.content.querySelectorAll('style');
      var stylesWithImports = stylesFromTemplate(template); // insert styles from <link rel="import" type="css"> at the top of the template

      var linkedStyles = stylesFromModuleImports(is);
      var firstTemplateChild = template.content.firstElementChild;

      for (var idx = 0; idx < linkedStyles.length; idx++) {
        var s = linkedStyles[idx];
        s.textContent = klass._processStyleText(s.textContent, baseURI);
        template.content.insertBefore(s, firstTemplateChild);
      } // keep track of the last "concrete" style in the template we have encountered


      var templateStyleIndex = 0; // ensure all gathered styles are actually in this template.

      for (var _i16 = 0; _i16 < stylesWithImports.length; _i16++) {
        var _s = stylesWithImports[_i16];
        var templateStyle = templateStyles[templateStyleIndex]; // if the style is not in this template, it's been "included" and
        // we put a clone of it in the template before the style that included it

        if (templateStyle !== _s) {
          _s = _s.cloneNode(true);
          templateStyle.parentNode.insertBefore(_s, templateStyle);
        } else {
          templateStyleIndex++;
        }

        _s.textContent = klass._processStyleText(_s.textContent, baseURI);
      }

      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template, is);
      }
    }
    /**
     * Look up template from dom-module for element
     *
     * @param {!string} is Element name to look up
     * @return {!HTMLTemplateElement} Template found in dom module, or
     *   undefined if not found
     * @protected
     */


    function getTemplateFromDomModule(is) {
      var template = null; // Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
      // when opted-in via allowTemplateFromDomModule

      if (is && (!strictTemplatePolicy || allowTemplateFromDomModule)) {
        template = DomModule.import(is, 'template'); // Under strictTemplatePolicy, require any element with an `is`
        // specified to have a dom-module

        if (strictTemplatePolicy && !template) {
          throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is));
        }
      }

      return template;
    }
    /**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */


    var PolymerElement =
    /*#__PURE__*/
    function (_polymerElementBase) {
      babelHelpers.inherits(PolymerElement, _polymerElementBase);
      babelHelpers.createClass(PolymerElement, null, [{
        key: "_finalizeClass",

        /**
         * Override of PropertiesMixin _finalizeClass to create observers and
         * find the template.
         * @return {void}
         * @protected
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        value: function _finalizeClass() {
          babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement), "_finalizeClass", this).call(this);

          if (this.hasOwnProperty(JSCompiler_renameProperty('is', this)) && this.is) {
            register(this.prototype);
          }

          var observers = ownObservers(this);

          if (observers) {
            this.createObservers(observers, this._properties);
          } // note: create "working" template that is finalized at instance time


          var template =
          /** @type {PolymerElementConstructor} */
          this.template;

          if (template) {
            if (typeof template === 'string') {
              console.error('template getter must return HTMLTemplateElement');
              template = null;
            } else {
              template = template.cloneNode(true);
            }
          }

          this.prototype._template = template;
        }
        /**
         * Override of PropertiesChanged createProperties to create accessors
         * and property effects for all of the properties.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "createProperties",
        value: function createProperties(props) {
          for (var p in props) {
            createPropertyFromConfig(this.prototype, p, props[p], props);
          }
        }
        /**
         * Creates observers for the given `observers` array.
         * Leverages `PropertyEffects` to create observers.
         * @param {Object} observers Array of observer descriptors for
         *   this class
         * @param {Object} dynamicFns Object containing keys for any properties
         *   that are functions and should trigger the effect when the function
         *   reference is changed
         * @return {void}
         * @protected
         */

      }, {
        key: "createObservers",
        value: function createObservers(observers, dynamicFns) {
          var proto = this.prototype;

          for (var _i17 = 0; _i17 < observers.length; _i17++) {
            proto._createMethodObserver(observers[_i17], dynamicFns);
          }
        }
        /**
         * Returns the template that will be stamped into this element's shadow root.
         *
         * If a `static get is()` getter is defined, the default implementation
         * will return the first `<template>` in a `dom-module` whose `id`
         * matches this element's `is`.
         *
         * Users may override this getter to return an arbitrary template
         * (in which case the `is` getter is unnecessary). The template returned
         * must be an `HTMLTemplateElement`.
         *
         * Note that when subclassing, if the super class overrode the default
         * implementation and the subclass would like to provide an alternate
         * template via a `dom-module`, it should override this getter and
         * return `DomModule.import(this.is, 'template')`.
         *
         * If a subclass would like to modify the super class template, it should
         * clone it rather than modify it in place.  If the getter does expensive
         * work such as cloning/modifying a template, it should memoize the
         * template for maximum performance:
         *
         *   let memoizedTemplate;
         *   class MySubClass extends MySuperClass {
         *     static get template() {
         *       if (!memoizedTemplate) {
         *         memoizedTemplate = super.template.cloneNode(true);
         *         let subContent = document.createElement('div');
         *         subContent.textContent = 'This came from MySubClass';
         *         memoizedTemplate.content.appendChild(subContent);
         *       }
         *       return memoizedTemplate;
         *     }
         *   }
         *
         * @return {!HTMLTemplateElement|string} Template to be stamped
         */

      }, {
        key: "polymerElementVersion",

        /**
         * Current Polymer version in Semver notation.
         * @type {string} Semver notation of the current version of Polymer.
         */
        get: function get() {
          return version;
        }
      }, {
        key: "template",
        get: function get() {
          // Explanation of template-related properties:
          // - constructor.template (this getter): the template for the class.
          //     This can come from the prototype (for legacy elements), from a
          //     dom-module, or from the super class's template (or can be overridden
          //     altogether by the user)
          // - constructor._template: memoized version of constructor.template
          // - prototype._template: working template for the element, which will be
          //     parsed and modified in place. It is a cloned version of
          //     constructor.template, saved in _finalizeClass(). Note that before
          //     this getter is called, for legacy elements this could be from a
          //     _template field on the info object passed to Polymer(), a behavior,
          //     or set in registered(); once the static getter runs, a clone of it
          //     will overwrite it on the prototype as the working template.
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
            this._template = // If user has put template on prototype (e.g. in legacy via registered
            // callback or info object), prefer that first
            this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template', this.prototype)) ? this.prototype._template : // Look in dom-module associated with this element's is
            getTemplateFromDomModule(
            /** @type {PolymerElementConstructor}*/
            this.is) || // Next look for superclass template (call the super impl this
            // way so that `this` points to the superclass)
            Object.getPrototypeOf(
            /** @type {PolymerElementConstructor}*/
            this.prototype).constructor.template;
          }

          return this._template;
        }
        /**
         * Set the template.
         *
         * @param {!HTMLTemplateElement|string} value Template to set.
         */
        ,
        set: function set(value) {
          this._template = value;
        }
        /**
         * Path matching the url from which the element was imported.
         *
         * This path is used to resolve url's in template style cssText.
         * The `importPath` property is also set on element instances and can be
         * used to create bindings relative to the import path.
         *
         * For elements defined in ES modules, users should implement
         * `static get importMeta() { return import.meta; }`, and the default
         * implementation of `importPath` will  return `import.meta.url`'s path.
         * For elements defined in HTML imports, this getter will return the path
         * to the document containing a `dom-module` element matching this
         * element's static `is` property.
         *
         * Note, this path should contain a trailing `/`.
         *
         * @return {string} The import path for this element class
         * @suppress {missingProperties}
         */

      }, {
        key: "importPath",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            var meta = this.importMeta;

            if (meta) {
              this._importPath = pathFromUrl(meta.url);
            } else {
              var module = DomModule.import(
              /** @type {PolymerElementConstructor} */
              this.is);
              this._importPath = module && module.assetpath || Object.getPrototypeOf(
              /** @type {PolymerElementConstructor}*/
              this.prototype).constructor.importPath;
            }
          }

          return this._importPath;
        }
      }]);

      function PolymerElement() {
        var _this5;

        babelHelpers.classCallCheck(this, PolymerElement);
        _this5 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PolymerElement).call(this));
        /** @type {HTMLTemplateElement} */

        _this5._template;
        /** @type {string} */

        _this5._importPath;
        /** @type {string} */

        _this5.rootPath;
        /** @type {string} */

        _this5.importPath;
        /** @type {StampedTemplate | HTMLElement | ShadowRoot} */

        _this5.root;
        /** @type {!Object<string, !Element>} */

        _this5.$;
        return _this5;
      }
      /**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */


      babelHelpers.createClass(PolymerElement, [{
        key: "_initializeProperties",
        value: function _initializeProperties() {
          _exports.instanceCount = instanceCount = instanceCount + 1;
          this.constructor.finalize(); // note: finalize template when we have access to `localName` to
          // avoid dependence on `is` for polyfilling styling.

          this.constructor._finalizeTemplate(
          /** @type {!HTMLElement} */
          this.localName);

          babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype), "_initializeProperties", this).call(this); // set path defaults

          this.rootPath = rootPath;
          this.importPath = this.constructor.importPath; // apply property defaults...

          var p$ = propertyDefaults(this.constructor);

          if (!p$) {
            return;
          }

          for (var p in p$) {
            var info = p$[p]; // Don't set default value if there is already an own property, which
            // happens when a `properties` property with default but no effects had
            // a property set (e.g. bound) by its host before upgrade

            if (!this.hasOwnProperty(p)) {
              var value = typeof info.value == 'function' ? info.value.call(this) : info.value; // Set via `_setProperty` if there is an accessor, to enable
              // initializing readOnly property defaults

              if (this._hasAccessor(p)) {
                this._setPendingProperty(p, value, true);
              } else {
                this[p] = value;
              }
            }
          }
        }
        /**
         * Gather style text for a style element in the template.
         *
         * @param {string} cssText Text containing styling to process
         * @param {string} baseURI Base URI to rebase CSS paths against
         * @return {string} The processed CSS text
         * @protected
         */

      }, {
        key: "connectedCallback",

        /**
         * Provides a default implementation of the standard Custom Elements
         * `connectedCallback`.
         *
         * The default implementation enables the property effects system and
         * flushes any pending properties, and updates shimmed CSS properties
         * when using the ShadyCSS scoping/custom properties polyfill.
         *
         * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
         * @return {void}
         */
        value: function connectedCallback() {
          if (window.ShadyCSS && this._template) {
            window.ShadyCSS.styleElement(
            /** @type {!HTMLElement} */
            this);
          }

          babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype), "connectedCallback", this).call(this);
        }
        /**
         * Stamps the element template.
         *
         * @return {void}
         * @override
         */

      }, {
        key: "ready",
        value: function ready() {
          if (this._template) {
            this.root = this._stampTemplate(this._template);
            this.$ = this.root.$;
          }

          babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype), "ready", this).call(this);
        }
        /**
         * Implements `PropertyEffects`'s `_readyClients` call. Attaches
         * element dom by calling `_attachDom` with the dom stamped from the
         * element's template via `_stampTemplate`. Note that this allows
         * client dom to be attached to the element prior to any observers
         * running.
         *
         * @return {void}
         * @override
         */

      }, {
        key: "_readyClients",
        value: function _readyClients() {
          if (this._template) {
            this.root = this._attachDom(
            /** @type {StampedTemplate} */
            this.root);
          } // The super._readyClients here sets the clients initialized flag.
          // We must wait to do this until after client dom is created/attached
          // so that this flag can be checked to prevent notifications fired
          // during this process from being handled before clients are ready.


          babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype), "_readyClients", this).call(this);
        }
        /**
         * Attaches an element's stamped dom to itself. By default,
         * this method creates a `shadowRoot` and adds the dom to it.
         * However, this method may be overridden to allow an element
         * to put its dom in another location.
         *
         * @throws {Error}
         * @suppress {missingReturn}
         * @param {StampedTemplate} dom to attach to the element.
         * @return {ShadowRoot} node to which the dom has been attached.
         */

      }, {
        key: "_attachDom",
        value: function _attachDom(dom) {
          if (this.attachShadow) {
            if (dom) {
              if (!this.shadowRoot) {
                this.attachShadow({
                  mode: 'open'
                });
              }

              this.shadowRoot.appendChild(dom);
              return this.shadowRoot;
            }

            return null;
          } else {
            throw new Error('ShadowDOM not available. ' + // TODO(sorvell): move to compile-time conditional when supported
            'PolymerElement can create dom as children instead of in ' + 'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
          }
        }
        /**
         * When using the ShadyCSS scoping and custom property shim, causes all
         * shimmed styles in this element (and its subtree) to be updated
         * based on current custom property values.
         *
         * The optional parameter overrides inline custom property styles with an
         * object of properties where the keys are CSS properties, and the values
         * are strings.
         *
         * Example: `this.updateStyles({'--color': 'blue'})`
         *
         * These properties are retained unless a value of `null` is set.
         *
         * Note: This function does not support updating CSS mixins.
         * You can not dynamically change the value of an `@apply`.
         *
         * @param {Object=} properties Bag of custom property key/values to
         *   apply to this element.
         * @return {void}
         * @suppress {invalidCasts}
         */

      }, {
        key: "updateStyles",
        value: function updateStyles(properties) {
          if (window.ShadyCSS) {
            window.ShadyCSS.styleSubtree(
            /** @type {!HTMLElement} */
            this, properties);
          }
        }
        /**
         * Rewrites a given URL relative to a base URL. The base URL defaults to
         * the original location of the document containing the `dom-module` for
         * this element. This method will return the same URL before and after
         * bundling.
         *
         * Note that this function performs no resolution for URLs that start
         * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
         * URL resolution, use `window.URL`.
         *
         * @param {string} url URL to resolve.
         * @param {string=} base Optional base URL to resolve against, defaults
         * to the element's `importPath`
         * @return {string} Rewritten URL relative to base
         */

      }, {
        key: "resolveUrl",
        value: function resolveUrl(url, base) {
          if (!base && this.importPath) {
            base = _resolveUrl(this.importPath);
          }

          return _resolveUrl(url, base);
        }
        /**
         * Overrides `PropertyAccessors` to add map of dynamic functions on
         * template info, for consumption by `PropertyEffects` template binding
         * code. This map determines which method templates should have accessors
         * created for them.
         *
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }], [{
        key: "_processStyleText",
        value: function _processStyleText(cssText, baseURI) {
          return resolveCss(cssText, baseURI);
        }
        /**
        * Configures an element `proto` to function with a given `template`.
        * The element name `is` and extends `ext` must be specified for ShadyCSS
        * style scoping.
        *
        * @param {string} is Tag name (or type extension name) for this element
        * @return {void}
        * @protected
        */

      }, {
        key: "_finalizeTemplate",
        value: function _finalizeTemplate(is) {
          /** @const {HTMLTemplateElement} */
          var template = this.prototype._template;

          if (template && !template.__polymerFinalized) {
            template.__polymerFinalized = true;
            var importPath = this.importPath;
            var baseURI = importPath ? _resolveUrl(importPath) : ''; // e.g. support `include="module-name"`, and ShadyCSS

            processElementStyles(this, template, is, baseURI);

            this.prototype._bindTemplate(template);
          }
        }
      }, {
        key: "_parseTemplateContent",
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
          return babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement), "_parseTemplateContent", this).call(this, template, templateInfo, nodeInfo);
        }
      }]);
      return PolymerElement;
    }(polymerElementBase);

    return PolymerElement;
  });
  /**
   * Total number of Polymer element instances created.
   * @type {number}
   */

  _exports.ElementMixin = ElementMixin;
  var instanceCount = 0;
  /**
          * Array of Polymer element classes that have been finalized.
          * @type {Array<PolymerElement>}
          */

  _exports.instanceCount = instanceCount;
  var registrations = [];
  /**
          * @param {!PolymerElementConstructor} prototype Element prototype to log
          * @this {this}
          * @private
          */

  _exports.registrations = registrations;

  function _regLog(prototype) {
    console.log('[' + prototype.is + ']: registered');
  }
  /**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */


  function register(prototype) {
    registrations.push(prototype);
  }
  /**
   * Logs all elements registered with an `is` to the console.
   * @public
   * @this {this}
   */


  function dumpRegistrations() {
    registrations.forEach(_regLog);
  }
  /**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */


  var updateStyles = function updateStyles(props) {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleDocument(props);
    }
  };

  _exports.updateStyles = updateStyles;
  var elementMixin = {
    version: version,
    ElementMixin: ElementMixin,

    get instanceCount() {
      return instanceCount;
    },

    registrations: registrations,
    register: register,
    dumpRegistrations: dumpRegistrations,
    updateStyles: updateStyles
  };
  _exports.$elementMixin = elementMixin;

  var LiteralString =
  /*#__PURE__*/
  function () {
    function LiteralString(string) {
      babelHelpers.classCallCheck(this, LiteralString);

      /** @type {string} */
      this.value = string.toString();
    }
    /**
     * @return {string} LiteralString string value
     * @override
     */


    babelHelpers.createClass(LiteralString, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }]);
    return LiteralString;
  }();
  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */


  function literalValue(value) {
    if (babelHelpers.instanceof(value, LiteralString)) {
      return (
        /** @type {!LiteralString} */
        value.value
      );
    } else {
      throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));
    }
  }
  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */


  function htmlValue(value) {
    if (babelHelpers.instanceof(value, HTMLTemplateElement)) {
      return (
        /** @type {!HTMLTemplateElement } */
        value.innerHTML
      );
    } else if (babelHelpers.instanceof(value, LiteralString)) {
      return literalValue(value);
    } else {
      throw new Error("non-template value passed to Polymer's html function: ".concat(value));
    }
  }
  /**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */


  var html = function html(strings) {
    var template =
    /** @type {!HTMLTemplateElement} */
    document.createElement('template');

    for (var _len4 = arguments.length, values = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      values[_key4 - 1] = arguments[_key4];
    }

    template.innerHTML = values.reduce(function (acc, v, idx) {
      return acc + htmlValue(v) + strings[idx + 1];
    }, strings[0]);
    return template;
  };
  /**
   * An html literal tag that can be used with `html` to compose.
   * a literal string.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>
   *           :host { display: block; }
   *           ${this.styleTemplate()}
   *         </style>
   *         <div class="shadowed">${staticValue}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get styleTemplate() {
   *        return htmlLiteral`.shadowed { background: gray; }`;
   *     }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!LiteralString} Constructed literal string
   */


  _exports.html = _exports.html$1 = html;

  var htmlLiteral = function htmlLiteral(strings) {
    for (var _len5 = arguments.length, values = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      values[_key5 - 1] = arguments[_key5];
    }

    return new LiteralString(values.reduce(function (acc, v, idx) {
      return acc + literalValue(v) + strings[idx + 1];
    }, strings[0]));
  };

  _exports.htmlLiteral = htmlLiteral;
  var htmlTag = {
    html: html,
    htmlLiteral: htmlLiteral
  };
  _exports.$htmlTag = htmlTag;
  var PolymerElement = ElementMixin(HTMLElement);
  _exports.PolymerElement = PolymerElement;
  var polymerElement = {
    version: version,
    PolymerElement: PolymerElement,
    html: html
  };
  _exports.$polymerElement = polymerElement;

  function mutablePropertyChange(inst, property, value, old, mutableData) {
    var isObject;

    if (mutableData) {
      isObject = babelHelpers.typeof(value) === 'object' && value !== null; // Pull `old` for Objects from temp cache, but treat `null` as a primitive

      if (isObject) {
        old = inst.__dataTemp[property];
      }
    } // Strict equality check, but return false for NaN===NaN


    var shouldChange = old !== value && (old === old || value === value); // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking

    if (isObject && shouldChange) {
      inst.__dataTemp[property] = value;
    }

    return shouldChange;
  }
  /**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */


  var MutableData = dedupingMixin(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */
    var MutableData =
    /*#__PURE__*/
    function (_superClass3) {
      babelHelpers.inherits(MutableData, _superClass3);

      function MutableData() {
        babelHelpers.classCallCheck(this, MutableData);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MutableData).apply(this, arguments));
      }

      babelHelpers.createClass(MutableData, [{
        key: "_shouldPropertyChange",

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * This method pulls the value to dirty check against from the `__dataTemp`
         * cache (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, true);
        }
      }]);
      return MutableData;
    }(superClass);

    return MutableData;
  });
  /**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this mixin or apply the
   * `MutableData` mixin.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */

  _exports.MutableData = MutableData;
  var OptionalMutableData = dedupingMixin(function (superClass) {
    /**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */
    var OptionalMutableData =
    /*#__PURE__*/
    function (_superClass4) {
      babelHelpers.inherits(OptionalMutableData, _superClass4);

      function OptionalMutableData() {
        babelHelpers.classCallCheck(this, OptionalMutableData);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(OptionalMutableData).apply(this, arguments));
      }

      babelHelpers.createClass(OptionalMutableData, [{
        key: "_shouldPropertyChange",

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * When `this.mutableData` is true on this instance, this method
         * pulls the value to dirty check against from the `__dataTemp` cache
         * (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Instance-level flag for configuring the dirty-checking strategy
             * for this element.  When true, Objects and Arrays will skip dirty
             * checking, otherwise strict equality checking will be used.
             */
            mutableData: Boolean
          };
        }
      }]);
      return OptionalMutableData;
    }(superClass);

    return OptionalMutableData;
  }); // Export for use by legacy behavior

  _exports.OptionalMutableData = OptionalMutableData;
  MutableData._mutablePropertyChange = mutablePropertyChange;
  var mutableData = {
    MutableData: MutableData,
    OptionalMutableData: OptionalMutableData
  }; // machinery for propagating host properties to children. This is an ES5
  // class only because Babel (incorrectly) requires super() in the class
  // constructor even though no `this` is used and it returns an instance.

  _exports.$mutableData = mutableData;
  var newInstance = null;
  /**
   * @constructor
   * @extends {HTMLTemplateElement}
   * @private
   */

  function HTMLTemplateElementExtension() {
    return newInstance;
  }

  HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: HTMLTemplateElementExtension,
      writable: true
    }
  });
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   * @private
   */

  var DataTemplate = PropertyEffects(HTMLTemplateElementExtension);
  /**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   * @private
   */

  var MutableDataTemplate = MutableData(DataTemplate); // Applies a DataTemplate subclass to a <template> instance

  function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
  }
  /**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */


  var base = PropertyEffects(
  /*#__PURE__*/
  function () {
    function _class() {
      babelHelpers.classCallCheck(this, _class);
    }

    return _class;
  }());
  /**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */

  var TemplateInstanceBase =
  /*#__PURE__*/
  function (_base3) {
    babelHelpers.inherits(TemplateInstanceBase, _base3);

    function TemplateInstanceBase(props) {
      var _this6;

      babelHelpers.classCallCheck(this, TemplateInstanceBase);
      _this6 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TemplateInstanceBase).call(this));

      _this6._configureProperties(props);

      _this6.root = _this6._stampTemplate(_this6.__dataHost); // Save list of stamped children

      var children = _this6.children = [];

      for (var n = _this6.root.firstChild; n; n = n.nextSibling) {
        children.push(n);
        n.__templatizeInstance = babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this6));
      }

      if (_this6.__templatizeOwner && _this6.__templatizeOwner.__hideTemplateChildren__) {
        _this6._showHideChildren(true);
      } // Flush props only when props are passed if instance props exist
      // or when there isn't instance props.


      var options = _this6.__templatizeOptions;

      if (props && options.instanceProps || !options.instanceProps) {
        _this6._enableProperties();
      }

      return _this6;
    }
    /**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */


    babelHelpers.createClass(TemplateInstanceBase, [{
      key: "_configureProperties",
      value: function _configureProperties(props) {
        var options = this.__templatizeOptions;

        if (options.forwardHostProp) {
          for (var hprop in this.__hostProps) {
            this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
          }
        } // Any instance props passed in the constructor will overwrite host props;
        // normally this would be a user error but we don't specifically filter them


        for (var iprop in props) {
          this._setPendingProperty(iprop, props[iprop]);
        }
      }
      /**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       * @return {void}
       */

    }, {
      key: "forwardHostProp",
      value: function forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) {
          this.__dataHost._enqueueClient(this);
        }
      }
      /**
       * Override point for adding custom or simulated event handling.
       *
       * @override
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */

    }, {
      key: "_addEventListenerToNode",
      value: function _addEventListenerToNode(node, eventName, handler) {
        var _this7 = this;

        if (this._methodHost && this.__templatizeOptions.parentModel) {
          // If this instance should be considered a parent model, decorate
          // events this template instance as `model`
          this._methodHost._addEventListenerToNode(node, eventName, function (e) {
            e.model = _this7;
            handler(e);
          });
        } else {
          // Otherwise delegate to the template's host (which could be)
          // another template instance
          var templateHost = this.__dataHost.__dataHost;

          if (templateHost) {
            templateHost._addEventListenerToNode(node, eventName, handler);
          }
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren(hide) {
        var c = this.children;

        for (var _i18 = 0; _i18 < c.length; _i18++) {
          var n = c[_i18]; // Ignore non-changes

          if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            if (n.nodeType === Node.TEXT_NODE) {
              if (hide) {
                n.__polymerTextContent__ = n.textContent;
                n.textContent = '';
              } else {
                n.textContent = n.__polymerTextContent__;
              } // remove and replace slot

            } else if (n.localName === 'slot') {
              if (hide) {
                n.__polymerReplaced__ = document.createComment('hidden-slot');
                n.parentNode.replaceChild(n.__polymerReplaced__, n);
              } else {
                var replace = n.__polymerReplaced__;

                if (replace) {
                  replace.parentNode.replaceChild(n, replace);
                }
              }
            } else if (n.style) {
              if (hide) {
                n.__polymerDisplay__ = n.style.display;
                n.style.display = 'none';
              } else {
                n.style.display = n.__polymerDisplay__;
              }
            }
          }

          n.__hideTemplateChildren__ = hide;

          if (n._showHideChildren) {
            n._showHideChildren(hide);
          }
        }
      }
      /**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */

    }, {
      key: "_setUnmanagedPropertyToNode",
      value: function _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
          node.__polymerTextContent__ = value;
        } else {
          babelHelpers.get(babelHelpers.getPrototypeOf(TemplateInstanceBase.prototype), "_setUnmanagedPropertyToNode", this).call(this, node, prop, value);
        }
      }
      /**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {!Polymer_PropertyEffects} The parent model of this instance
       */

    }, {
      key: "dispatchEvent",

      /**
       * Stub of HTMLElement's `dispatchEvent`, so that effects that may
       * dispatch events safely no-op.
       *
       * @param {Event} event Event to dispatch
       * @return {boolean} Always true.
       */
      value: function dispatchEvent(event) {
        // eslint-disable-line no-unused-vars
        return true;
      }
    }, {
      key: "parentModel",
      get: function get() {
        var model = this.__parentModel;

        if (!model) {
          var options;
          model = this;

          do {
            // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
          } while ((options = model.__templatizeOptions) && !options.parentModel);

          this.__parentModel = model;
        }

        return model;
      }
    }]);
    return TemplateInstanceBase;
  }(base);
  /** @type {!DataTemplate} */


  _exports.TemplateInstanceBase = TemplateInstanceBase;
  TemplateInstanceBase.prototype.__dataHost;
  /** @type {!TemplatizeOptions} */

  TemplateInstanceBase.prototype.__templatizeOptions;
  /** @type {!Polymer_PropertyEffects} */

  TemplateInstanceBase.prototype._methodHost;
  /** @type {!Object} */

  TemplateInstanceBase.prototype.__templatizeOwner;
  /** @type {!Object} */

  TemplateInstanceBase.prototype.__hostProps;
  /**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   * @private
   */

  var MutableTemplateInstanceBase = MutableData(TemplateInstanceBase);

  function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    var templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
  }
  /* eslint-disable valid-jsdoc */

  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */


  function createTemplatizerClass(template, templateInfo, options) {
    // Anonymous class created by the templatize
    var base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    /**
     * @constructor
     * @extends {base}
     * @private
     */

    var klass =
    /*#__PURE__*/
    function (_base4) {
      babelHelpers.inherits(klass, _base4);

      function klass() {
        babelHelpers.classCallCheck(this, klass);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(klass).apply(this, arguments));
      }

      return klass;
    }(base);

    klass.prototype.__templatizeOptions = options;

    klass.prototype._bindTemplate(template);

    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
  }
  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */


  function addPropagateEffects(template, templateInfo, options) {
    var userForwardHostProp = options.forwardHostProp;

    if (userForwardHostProp) {
      // Provide data API and property effects on memoized template class
      var klass = templateInfo.templatizeTemplateClass;

      if (!klass) {
        var _base5 = options.mutableData ? MutableDataTemplate : DataTemplate;
        /** @private */


        klass = templateInfo.templatizeTemplateClass =
        /*#__PURE__*/
        function (_base6) {
          babelHelpers.inherits(TemplatizedTemplate, _base6);

          function TemplatizedTemplate() {
            babelHelpers.classCallCheck(this, TemplatizedTemplate);
            return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TemplatizedTemplate).apply(this, arguments));
          }

          return TemplatizedTemplate;
        }(_base5); // Add template - >instances effects
        // and host <- template effects


        var hostProps = templateInfo.hostProps;

        for (var prop in hostProps) {
          klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, {
            fn: createForwardHostPropEffect(prop, userForwardHostProp)
          });

          klass.prototype._createNotifyingProperty('_host_' + prop);
        }
      }

      upgradeTemplate(template, klass); // Mix any pre-bound data into __data; no need to flush this to
      // instances since they pull from the template at instance-time

      if (template.__dataProto) {
        // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(template.__data, template.__dataProto);
      } // Clear any pending data for performance


      template.__dataTemp = {};
      template.__dataPending = null;
      template.__dataOld = null;

      template._enableProperties();
    }
  }
  /* eslint-enable valid-jsdoc */


  function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
      userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
    };
  }

  function addNotifyEffects(klass, template, templateInfo, options) {
    var hostProps = templateInfo.hostProps || {};

    for (var iprop in options.instanceProps) {
      delete hostProps[iprop];
      var userNotifyInstanceProp = options.notifyInstanceProp;

      if (userNotifyInstanceProp) {
        klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp)
        });
      }
    }

    if (options.forwardHostProp && template.__dataHost) {
      for (var hprop in hostProps) {
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: createNotifyHostPropEffect()
        });
      }
    }
  }

  function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
      userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
  }

  function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
      inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
    };
  }
  /**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */


  function templatize(template, owner, options) {
    // Under strictTemplatePolicy, the templatized element must be owned
    // by a (trusted) Polymer element, indicated by existence of _methodHost;
    // e.g. for dom-if & dom-repeat in main document, _methodHost is null
    if (strictTemplatePolicy && !findMethodHost(template)) {
      throw new Error('strictTemplatePolicy: template owner not trusted');
    }

    options =
    /** @type {!TemplatizeOptions} */
    options || {};

    if (template.__templatizeOwner) {
      throw new Error('A <template> can only be templatized once');
    }

    template.__templatizeOwner = owner;
    var ctor = owner ? owner.constructor : TemplateInstanceBase;

    var templateInfo = ctor._parseTemplate(template); // Get memoized base class for the prototypical template, which
    // includes property effects for binding template & forwarding


    var baseClass = templateInfo.templatizeInstanceClass;

    if (!baseClass) {
      baseClass = createTemplatizerClass(template, templateInfo, options);
      templateInfo.templatizeInstanceClass = baseClass;
    } // Host property forwarding must be installed onto template instance


    addPropagateEffects(template, templateInfo, options); // Subclass base class and add reference for this specific template

    /** @private */

    var klass =
    /*#__PURE__*/
    function (_baseClass) {
      babelHelpers.inherits(TemplateInstance, _baseClass);

      function TemplateInstance() {
        babelHelpers.classCallCheck(this, TemplateInstance);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TemplateInstance).apply(this, arguments));
      }

      return TemplateInstance;
    }(baseClass);

    klass.prototype._methodHost = findMethodHost(template);
    klass.prototype.__dataHost = template;
    klass.prototype.__templatizeOwner = owner;
    klass.prototype.__hostProps = templateInfo.hostProps;
    klass =
    /** @type {function(new:TemplateInstanceBase)} */
    klass; //eslint-disable-line no-self-assign

    return klass;
  }
  /**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */


  function modelForElement(template, node) {
    var model;

    while (node) {
      // An element with a __templatizeInstance marks the top boundary
      // of a scope; walk up until we find one, and then ensure that
      // its __dataHost matches `this`, meaning this dom-repeat stamped it
      if (model = node.__templatizeInstance) {
        // Found an element stamped by another template; keep walking up
        // from its __dataHost
        if (model.__dataHost != template) {
          node = model.__dataHost;
        } else {
          return model;
        }
      } else {
        // Still in a template scope, keep going up until
        // a __templatizeInstance is found
        node = node.parentNode;
      }
    }

    return null;
  }

  var templatize$1 = {
    templatize: templatize,
    modelForElement: modelForElement,
    TemplateInstanceBase: TemplateInstanceBase
  };
  _exports.$templatize = templatize$1;

  var Debouncer =
  /*#__PURE__*/
  function () {
    function Debouncer() {
      babelHelpers.classCallCheck(this, Debouncer);
      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */


    babelHelpers.createClass(Debouncer, [{
      key: "setConfig",
      value: function setConfig(asyncModule, callback) {
        var _this8 = this;

        this._asyncModule = asyncModule;
        this._callback = callback;
        this._timer = this._asyncModule.run(function () {
          _this8._timer = null;

          _this8._callback();
        });
      }
      /**
       * Cancels an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: "cancel",
      value: function cancel() {
        if (this.isActive()) {
          this._asyncModule.cancel(
          /** @type {number} */
          this._timer);

          this._timer = null;
        }
      }
      /**
       * Flushes an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: "flush",
      value: function flush() {
        if (this.isActive()) {
          this.cancel();

          this._callback();
        }
      }
      /**
       * Returns true if the debouncer is active.
       *
       * @return {boolean} True if active.
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this._timer != null;
      }
      /**
       * Creates a debouncer if no debouncer is passed as a parameter
       * or it cancels an active debouncer otherwise. The following
       * example shows how a debouncer can be called multiple times within a
       * microtask and "debounced" such that the provided callback function is
       * called once. Add this method to a custom element:
       *
       * ```js
       * import {microTask} from '@polymer/polymer/lib/utils/async.js';
       * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
       * // ...
       *
       * _debounceWork() {
       *   this._debounceJob = Debouncer.debounce(this._debounceJob,
       *       microTask, () => this._doWork());
       * }
       * ```
       *
       * If the `_debounceWork` method is called multiple times within the same
       * microtask, the `_doWork` function will be called only once at the next
       * microtask checkpoint.
       *
       * Note: In testing it is often convenient to avoid asynchrony. To accomplish
       * this with a debouncer, you can use `enqueueDebouncer` and
       * `flush`. For example, extend the above example by adding
       * `enqueueDebouncer(this._debounceJob)` at the end of the
       * `_debounceWork` method. Then in a test, call `flush` to ensure
       * the debouncer has completed.
       *
       * @param {Debouncer?} debouncer Debouncer object.
       * @param {!AsyncInterface} asyncModule Object with Async interface
       * @param {function()} callback Callback to run.
       * @return {!Debouncer} Returns a debouncer object.
       */

    }], [{
      key: "debounce",
      value: function debounce(debouncer, asyncModule, callback) {
        if (babelHelpers.instanceof(debouncer, Debouncer)) {
          debouncer.cancel();
        } else {
          debouncer = new Debouncer();
        }

        debouncer.setConfig(asyncModule, callback);
        return debouncer;
      }
    }]);
    return Debouncer;
  }();

  _exports.Debouncer = Debouncer;
  var debounce = {
    Debouncer: Debouncer
  };
  /* eslint-enable no-unused-vars */

  _exports.$debounce = debounce;
  var debouncerQueue = [];
  /**
   * Adds a `Debouncer` to a list of globally flushable tasks.
   *
   * @param {!Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */

  var enqueueDebouncer = function enqueueDebouncer(debouncer) {
    debouncerQueue.push(debouncer);
  };

  _exports.enqueueDebouncer = enqueueDebouncer;

  function flushDebouncers() {
    var didFlush = Boolean(debouncerQueue.length);

    while (debouncerQueue.length) {
      try {
        debouncerQueue.shift().flush();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    return didFlush;
  }
  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */


  var flush = function flush() {
    var shadyDOM, debouncers;

    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();

      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }

      debouncers = flushDebouncers();
    } while (shadyDOM || debouncers);
  };

  _exports.flush = flush;
  var flush$1 = {
    enqueueDebouncer: enqueueDebouncer,
    flush: flush
  };
  _exports.$flush = flush$1;

  var DomIf =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(DomIf, _PolymerElement);
    babelHelpers.createClass(DomIf, null, [{
      key: "is",
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-if';
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          /**
           * Fired whenever DOM is added or removed/hidden by this template (by
           * default, rendering occurs lazily).  To force immediate rendering, call
           * `render`.
           *
           * @event dom-change
           */

          /**
           * A boolean indicating whether this template should stamp.
           */
          if: {
            type: Boolean,
            observer: '__debounceRender'
          },

          /**
           * When true, elements will be removed from DOM and discarded when `if`
           * becomes false and re-created and added back to the DOM when `if`
           * becomes true.  By default, stamped elements will be hidden but left
           * in the DOM when `if` becomes false, which is generally results
           * in better performance.
           */
          restamp: {
            type: Boolean,
            observer: '__debounceRender'
          }
        };
      }
    }]);

    function DomIf() {
      var _this9;

      babelHelpers.classCallCheck(this, DomIf);
      _this9 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DomIf).call(this));
      _this9.__renderDebouncer = null;
      _this9.__invalidProps = null;
      _this9.__instance = null;
      _this9._lastIf = false;
      _this9.__ctor = null;
      _this9.__hideTemplateChildren__ = false;
      return _this9;
    }

    babelHelpers.createClass(DomIf, [{
      key: "__debounceRender",
      value: function __debounceRender() {
        var _this10 = this;

        // Render is async for 2 reasons:
        // 1. To eliminate dom creation trashing if user code thrashes `if` in the
        //    same turn. This was more common in 1.x where a compound computed
        //    property could result in the result changing multiple times, but is
        //    mitigated to a large extent by batched property processing in 2.x.
        // 2. To avoid double object propagation when a bag including values bound
        //    to the `if` property as well as one or more hostProps could enqueue
        //    the <dom-if> to flush before the <template>'s host property
        //    forwarding. In that scenario creating an instance would result in
        //    the host props being set once, and then the enqueued changes on the
        //    template would set properties a second time, potentially causing an
        //    object to be set to an instance more than once.  Creating the
        //    instance async from flushing data ensures this doesn't happen. If
        //    we wanted a sync option in the future, simply having <dom-if> flush
        //    (or clear) its template's pending host properties before creating
        //    the instance would also avoid the problem.
        this.__renderDebouncer = Debouncer.debounce(this.__renderDebouncer, microTask, function () {
          return _this10.__render();
        });
        enqueueDebouncer(this.__renderDebouncer);
      }
      /**
       * @override
       * @return {void}
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype), "disconnectedCallback", this).call(this);

        if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
          this.__teardownInstance();
        }
      }
      /**
       * @override
       * @return {void}
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype), "connectedCallback", this).call(this);
        this.style.display = 'none';

        if (this.if) {
          this.__debounceRender();
        }
      }
      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        flush();
      }
    }, {
      key: "__render",
      value: function __render() {
        if (this.if) {
          if (!this.__ensureInstance()) {
            // No template found yet
            return;
          }

          this._showHideChildren();
        } else if (this.restamp) {
          this.__teardownInstance();
        }

        if (!this.restamp && this.__instance) {
          this._showHideChildren();
        }

        if (this.if != this._lastIf) {
          this.dispatchEvent(new CustomEvent('dom-change', {
            bubbles: true,
            composed: true
          }));
          this._lastIf = this.if;
        }
      }
    }, {
      key: "__ensureInstance",
      value: function __ensureInstance() {
        var _this11 = this;

        var parentNode = this.parentNode; // Guard against element being detached while render was queued

        if (parentNode) {
          if (!this.__ctor) {
            var _template2 =
            /** @type {HTMLTemplateElement} */
            this.querySelector('template');

            if (!_template2) {
              // Wait until childList changes and template should be there by then
              var observer = new MutationObserver(function () {
                if (_this11.querySelector('template')) {
                  observer.disconnect();

                  _this11.__render();
                } else {
                  throw new Error('dom-if requires a <template> child');
                }
              });
              observer.observe(this, {
                childList: true
              });
              return false;
            }

            this.__ctor = templatize(_template2, this, {
              // dom-if templatizer instances require `mutable: true`, as
              // `__syncHostProperties` relies on that behavior to sync objects
              mutableData: true,

              /**
               * @param {string} prop Property to forward
               * @param {*} value Value of property
               * @this {DomIf}
               */
              forwardHostProp: function forwardHostProp(prop, value) {
                if (this.__instance) {
                  if (this.if) {
                    this.__instance.forwardHostProp(prop, value);
                  } else {
                    // If we have an instance but are squelching host property
                    // forwarding due to if being false, note the invalidated
                    // properties so `__syncHostProperties` can sync them the next
                    // time `if` becomes true
                    this.__invalidProps = this.__invalidProps || Object.create(null);
                    this.__invalidProps[root(prop)] = true;
                  }
                }
              }
            });
          }

          if (!this.__instance) {
            this.__instance = new this.__ctor();
            parentNode.insertBefore(this.__instance.root, this);
          } else {
            this.__syncHostProperties();

            var c$ = this.__instance.children;

            if (c$ && c$.length) {
              // Detect case where dom-if was re-attached in new position
              var lastChild = this.previousSibling;

              if (lastChild !== c$[c$.length - 1]) {
                for (var _i19 = 0, n; _i19 < c$.length && (n = c$[_i19]); _i19++) {
                  parentNode.insertBefore(n, this);
                }
              }
            }
          }
        }

        return true;
      }
    }, {
      key: "__syncHostProperties",
      value: function __syncHostProperties() {
        var props = this.__invalidProps;

        if (props) {
          for (var prop in props) {
            this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
          }

          this.__invalidProps = null;

          this.__instance._flushProperties();
        }
      }
    }, {
      key: "__teardownInstance",
      value: function __teardownInstance() {
        if (this.__instance) {
          var c$ = this.__instance.children;

          if (c$ && c$.length) {
            // use first child parent, for case when dom-if may have been detached
            var parent = c$[0].parentNode; // Instance children may be disconnected from parents when dom-if
            // detaches if a tree was innerHTML'ed

            if (parent) {
              for (var _i20 = 0, n; _i20 < c$.length && (n = c$[_i20]); _i20++) {
                parent.removeChild(n);
              }
            }
          }

          this.__instance = null;
          this.__invalidProps = null;
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @return {void}
       * @protected
       * @suppress {visibility}
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren() {
        var hidden = this.__hideTemplateChildren__ || !this.if;

        if (this.__instance) {
          this.__instance._showHideChildren(hidden);
        }
      }
    }]);
    return DomIf;
  }(PolymerElement);

  _exports.DomIf = DomIf;
  customElements.define(DomIf.is, DomIf);
  var domIf = {
    DomIf: DomIf
  };
  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
    This is a JavaScript mixin that you can use to connect a Custom Element base
    class to a Redux store. The `stateChanged(state)` method will be called when
    the state is updated.
  
    Example:
  
        import { connect } from 'pwa-helpers/connect-mixin.js';
  
        class MyElement extends connect(store)(HTMLElement) {
          stateChanged(state) {
            this.textContent = state.data.count.toString();
          }
        }
  */

  _exports.$domIf = domIf;

  var connect = function connect(store) {
    return function (baseElement) {
      return (
        /*#__PURE__*/
        function (_baseElement) {
          babelHelpers.inherits(_class2, _baseElement);

          function _class2() {
            babelHelpers.classCallCheck(this, _class2);
            return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(_class2).apply(this, arguments));
          }

          babelHelpers.createClass(_class2, [{
            key: "connectedCallback",
            value: function connectedCallback() {
              var _this12 = this;

              if (babelHelpers.get(babelHelpers.getPrototypeOf(_class2.prototype), "connectedCallback", this)) {
                babelHelpers.get(babelHelpers.getPrototypeOf(_class2.prototype), "connectedCallback", this).call(this);
              }

              this._storeUnsubscribe = store.subscribe(function () {
                return _this12.stateChanged(store.getState());
              });
              this.stateChanged(store.getState());
            }
          }, {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
              this._storeUnsubscribe();

              if (babelHelpers.get(babelHelpers.getPrototypeOf(_class2.prototype), "disconnectedCallback", this)) {
                babelHelpers.get(babelHelpers.getPrototypeOf(_class2.prototype), "disconnectedCallback", this).call(this);
              }
            }
            /**
             * The `stateChanged(state)` method will be called when the state is updated.
             */

          }, {
            key: "stateChanged",
            value: function stateChanged(_state) {}
          }]);
          return _class2;
        }(baseElement)
      );
    };
  };

  _exports.connect = connect;
  var connectMixin = {
    connect: connect
  };
  _exports.$connectMixin = connectMixin;
  var globalStyle = document.createElement('dom-module');
  globalStyle.innerHTML = "\n<template>\n<style>\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n</style>\n</template>";
  globalStyle.register('global-style');
  var favorites = {
    /** @method */
    'add': function add(country
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'actions.favorites.add',
        country: country
      });
    },

    /** @method */
    'remove': function remove(country
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'actions.favorites.remove',
        country: country
      });
    }
  };
  /** @method */

  var login =
  /*#__PURE__*/
  function () {
    var _ref2 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var email, password, response, _response$error, status, responseText, message, error;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _ref.email, password = _ref.password;
              _context.next = 3;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'actions.login',
                'data': {
                  email: email,
                  password: password
                }
              });

            case 3:
              response = _context.sent;

              if (!response.success) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", response.success);

            case 6:
              if (!response.error) {
                _context.next = 12;
                break;
              }

              _response$error = response.error, status = _response$error.status, responseText = _response$error.responseText, message = _response$error.message;
              error
              /*: LoginError*/
              = new Error(message);
              if (status !== undefined) error.status = status;
              if (responseText !== undefined) error.responseText = responseText;
              throw error;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function login(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /** @method */


  var logout = function logout() {
    return (
      /*: Promise<any>*/
      (0, _sendMessage.$sendMessageDefault)({
        'type': 'actions.logout'
      })
    );
  };

  var actions = {
    favorites: favorites,
    login: login,
    logout: logout
  };
  _exports.$actionsDefault = actions;
  var actions$1 = {
    default: actions
  };
  _exports.$actions = actions$1;

  var _browser = typeof browser !== 'undefined' ? browser : chrome;
  /** Get data from locales through chrome.i18n.getMessage
  @function */


  var internationalize = function internationalize(key
  /*: string*/
  )
  /*: string*/
  {
    try {
      return _browser.i18n.getMessage(key) || key;
    } catch (error) {
      // Firefox
      return key;
    }
  };

  _exports.$internationalizeDefault = internationalize;
  var internationalize$1 = {
    default: internationalize
  };
  _exports.$internationalize = internationalize$1;
  var _
  /*: Lodash*/
  = window._;
  /** @function */

  var transform = function transform(data
  /*: Object*/
  ) {
    return (
      /*: Object*/
      _.transform(data, function (carry, value, key) {
        carry[key] = babelHelpers.typeof(value) === 'object' ? transform(value) : internationalize(value);
      }, {})
    );
  };

  _exports.$createTranslationObjectDefault = transform;
  var createTranslationObject = {
    default: transform
  };
  _exports.$createTranslationObject = createTranslationObject;
  var _$1
  /*: Lodash*/
  = window._;

  var _browser$1 = typeof browser !== 'undefined' ? browser : chrome;
  /** @function */


  var store = new function () {
    var _this13 = this;

    var state
    /*: StoreState*/
    ;
    var subscribeCallbacks
    /*: Array<Function>*/
    = [];
    var callbacks
    /*: Array<{ 'property': Function, 'compare': Function }>*/
    = [];
    /** @method */

    this.activate = function (baseState
    /*: StoreState*/
    ) {
      state = baseState;

      var port = _browser$1.runtime.connect({
        'name': 'store'
      });

      port.onMessage.addListener(function (newState) {
        state = newState;
        subscribeCallbacks.forEach(function (callback) {
          callback();
        });
      });

      _this13.subscribe(function () {
        var newState
        /*: StoreState*/
        = _this13.getState();

        var actions
        /*: Array<Object>*/
        = callbacks.reduce(function (carry, _ref3, index) {
          var property = _ref3.property,
              compare = _ref3.compare;
          var values
          /*: Array<any>*/
          = [newState, state].map(function (value) {
            return property(value);
          });
          if (!_$1.isEqual.apply(_$1, values)) carry.push({
            compare: compare,
            values: values
          });
          return carry;
        }, []);
        state = newState;
        actions.forEach(function (_ref4) {
          var compare = _ref4.compare,
              values = _ref4.values;
          compare.apply({}, values);
        });
      });
    };
    /** Subscribe to changes like in React-Redux
    @method
    @param property - used to get changes only from specific property
    @param compare - callback
    @return unsubscribe function */


    this.compare = function (property
    /*: Function*/
    , compare
    /*: Function*/
    )
    /*: Function*/
    {
      var object = {
        property: property,
        compare: compare
      };
      callbacks.push(object);
      return function () {
        _$1.pull(callbacks, object);
      };
    };
    /** @method */


    this.dispatch = function (data
    /*: Object*/
    ) {
      return (
        /*: Promise<StoreState>*/
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'store.dispatch',
          data: data
        })
      );
    };
    /** @method */


    this.getState = function () {
      return (
        /*: StoreState*/
        state
      );
    };
    /** @method */


    this.subscribe = function (callback
    /*: Function*/
    ) {
      subscribeCallbacks.push(callback);
      return function () {
        _$1.pull(subscribeCallbacks, callback);
      };
    };
  }();
  _exports.$storeDefault = store;
  var store$1 = {
    default: store
  };
  _exports.$store = store$1;
  var template = html(_templateObject_714148b08dbd11e9a0fdfb2d872ed93a());
  _exports.$headTemplateDefault = template;
  var headTemplate = {
    default: template
  };
  _exports.$headTemplate = headTemplate;

  var HeadLogo =
  /*#__PURE__*/
  function (_PolymerElement2) {
    babelHelpers.inherits(HeadLogo, _PolymerElement2);

    function HeadLogo() {
      babelHelpers.classCallCheck(this, HeadLogo);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(HeadLogo).apply(this, arguments));
    }

    babelHelpers.createClass(HeadLogo, null, [{
      key: "template",
      get: function get() {
        return html(_templateObject2_714148b08dbd11e9a0fdfb2d872ed93a());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'premium': {
            'type': Boolean,
            'value': false
          }
        };
      }
    }]);
    return HeadLogo;
  }(PolymerElement);

  customElements.define('head-logo', HeadLogo);
  var translations
  /*: { [ string ]: string }*/
  = transform({
    'goBack': 'go_back',
    'signIn': 'sign_in',
    'signOut': 'sign_out'
  });

  var MainHead =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(MainHead, _connect);

    function MainHead() {
      babelHelpers.classCallCheck(this, MainHead);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainHead).apply(this, arguments));
    }

    babelHelpers.createClass(MainHead, [{
      key: "stateChanged",
      value: function stateChanged(_ref5)
      /*: void*/
      {
        var user = _ref5.user,
            page = _ref5.page;
        this.user = user;
        this.indexPage = page.split(':')[0] === 'index';
      } // Methods

      /** @method */

    }, {
      key: "back",
      value: function back()
      /*: void*/
      {
        store.dispatch({
          'type': 'Page change',
          'page': 'index:home'
        });
      }
      /** @method */

    }, {
      key: "login",
      value: function login()
      /*: void*/
      {
        store.dispatch({
          'type': 'Page change',
          'page': 'login'
        });
      }
      /** @method */

    }, {
      key: "logout",
      value: function logout()
      /*: void*/
      {
        actions.logout();
      }
    }], [{
      key: "template",
      get: function get() {
        return template;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'user': {
            'type': Object,
            'value': {
              'guest': true,
              'premium': false
            }
          },
          'indexPage': {
            'type': Boolean,
            'value': true
          },
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          }
        };
      }
    }]);
    return MainHead;
  }(connect(store)(PolymerElement));

  customElements.define('main-head', MainHead);
  /** @class */

  function CharsBuffer() {
    var _this14 = this;

    /** @type {String} */
    this.word = '';
    /** @type {Array<Function>} */

    this.listeners = []; // this.lastTimestamp;

    /**
    @method
    @param {String} */

    this.addChar = function (char) {
      /** @type {String} */
      var word = _this14.word;
      /** @type {Number} */

      var timestamp = performance.now();
      /** @type {Boolean} */

      var clear = !_this14.lastTimestamp ? true : timestamp - _this14.lastTimestamp > 700;
      if (clear) word = '';
      word += char;
      _this14.lastTimestamp = timestamp;
      if (word === _this14.word) return;
      _this14.word = word;

      _this14.listeners.forEach(function (listener) {
        listener(word);
      });
    };
    /**
    @method
    @param {Function} listener */


    this.addListener = function (listener) {
      _this14.listeners.push(listener);
    };
    /**
    @method
    @param {Function} listener */


    this.removeListener = function (listener) {
      _this14.listeners = _this14.listeners.filter(function (item) {
        return item !== listener;
      });
    };
    /**
    @method */


    this.keydownListener = function (event) {
      var code = event.code,
          key = event.key;
      if (key === ' ') event.preventDefault();
      /** @type {(String|undefined)} */

      var symbol = code ? code.replace(/^key/i, '') : key;
      if (symbol === 'Space') symbol = ' ';
      if (!symbol || symbol.length !== 1 || !/[ a-z]/i.test(symbol)) return;
      symbol = symbol.toLowerCase();

      _this14.addChar(symbol);
    };
  }

  var CharsBuffer$1 = {
    default: CharsBuffer
  };
  _exports.$CharsBuffer = CharsBuffer$1;
  var internalCounter
  /*: integer*/
  = 0;
  var prefix
  /*: string*/
  = Math.floor(Math.random() * 1000000000) + '_'; // Every popup unique

  var DelayRecord =
  /*#__PURE__*/
  function () {
    /*::
    id: integer
    name: string
    */
    function DelayRecord(name
    /*: string*/
    ) {
      babelHelpers.classCallCheck(this, DelayRecord);
      this.name = name;
      this.id = internalCounter++;
      (0, _sendMessage.$sendMessageDefault)({
        'id': prefix + this.id,
        'name': this.name,
        'type': 'DelayRecord start'
      });
    }
    /** @method */


    babelHelpers.createClass(DelayRecord, [{
      key: "end",
      value: function end() {
        (0, _sendMessage.$sendMessageDefault)({
          'id': prefix + this.id,
          'name': this.name,
          'type': 'DelayRecord end'
        });
      }
    }]);
    return DelayRecord;
  }();

  _exports.$DelayRecordDefault = DelayRecord;
  var DelayRecord$1 = {
    default: DelayRecord
  };
  _exports.$DelayRecord = DelayRecord$1;

  var ga = function ga()
  /*: Array<any>*/
  {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'ga',
      'data': args
    });
  };

  _exports.$gaDefault = ga;
  var ga$1 = {
    default: ga
  };
  _exports.$ga = ga$1;

  var _browser$2 = typeof browser !== 'undefined' ? browser : chrome;

  var permissions = new function () {
    var state
    /*: Array<string>*/
    = [];
    var callbacks
    /*: Array<Function>*/
    = [];
    /** @method */

    this.addListener = function (callback
    /*: Function*/
    )
    /*: void*/
    {
      callbacks.push(callback);
    };
    /** @method */


    this.get = function () {
      return (
        /*: Array<string>*/
        state
      );
    };
    /** @method */


    this.includes = function (permission
    /*: string*/
    ) {
      return (
        /*: boolean*/
        state.includes(permission)
      );
    }; // Initial


    babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'permissions.get'
              });

            case 2:
              state = _context2.sent;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))();

    var port = _browser$2.runtime.connect({
      'name': 'permissions'
    });

    port.onMessage.addListener(function (newState) {
      state = newState;
      callbacks.forEach(function (callback) {
        callback(state);
      });
    });
  }();
  _exports.$permissionsDefault = permissions;
  var permissions$1 = {
    default: permissions
  };
  _exports.$permissions = permissions$1;
  var siteFilters = {
    /** @method */
    'add': function () {
      var _add = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref7) {
        var country, domain, type, _ref8, success, errorData, message, error;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                country = _ref7.country, domain = _ref7.domain, type = _ref7.type;
                _context3.next = 3;
                return (0, _sendMessage.$sendMessageDefault)({
                  'type': 'proxy.siteFilters.add',
                  'data': {
                    country: country,
                    domain: domain,
                    type: type
                  }
                });

              case 3:
                _ref8 = _context3.sent;
                success = _ref8.success;
                errorData = _ref8['error'];

                if (!success) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", success);

              case 8:
                message = errorData.message;
                error
                /*: Error & { [ string ]: any }*/
                = new Error(message);
                Object.keys(errorData).forEach(function (key) {
                  error[key] = errorData[key];
                });
                throw error;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }(),

    /** @method */
    'changeCountry': function () {
      var _changeCountry = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref9) {
        var country, domain, _ref10, success, errorData, message, error;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                country = _ref9.country, domain = _ref9.domain;
                _context4.next = 3;
                return (0, _sendMessage.$sendMessageDefault)({
                  'type': 'proxy.siteFilters.changeCountry',
                  country: country,
                  domain: domain
                });

              case 3:
                _ref10 = _context4.sent;
                success = _ref10.success;
                errorData = _ref10['error'];

                if (!success) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", success);

              case 8:
                message = errorData.message;
                error
                /*: Error & { [ string ]: any }*/
                = new Error(message);
                Object.keys(errorData).forEach(function (key) {
                  error[key] = errorData[key];
                });
                throw error;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function changeCountry(_x3) {
        return _changeCountry.apply(this, arguments);
      }

      return changeCountry;
    }(),

    /** @method */
    'remove': function () {
      var _remove = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(domain
      /*: string*/
      ) {
        var _ref11, success, errorData, message, error;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _sendMessage.$sendMessageDefault)({
                  'type': 'proxy.siteFilters.remove',
                  domain: domain
                });

              case 2:
                _ref11 = _context5.sent;
                success = _ref11.success;
                errorData = _ref11['error'];

                if (!success) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", success);

              case 7:
                message = errorData.message;
                error
                /*: Error & { [ string ]: any }*/
                = new Error(message);
                Object.keys(errorData).forEach(function (key) {
                  error[key] = errorData[key];
                });
                throw error;

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function remove(_x4) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }(),

    /** @method */
    'toggle': function () {
      var _toggle = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(domain
      /*: string*/
      ) {
        var _ref12, success, errorData, message, error;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _sendMessage.$sendMessageDefault)({
                  'type': 'proxy.siteFilters.toggle',
                  domain: domain
                });

              case 2:
                _ref12 = _context6.sent;
                success = _ref12.success;
                errorData = _ref12['error'];

                if (!success) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", success);

              case 7:
                message = errorData.message;
                error
                /*: Error & { [ string ]: any }*/
                = new Error(message);
                Object.keys(errorData).forEach(function (key) {
                  error[key] = errorData[key];
                });
                throw error;

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function toggle(_x5) {
        return _toggle.apply(this, arguments);
      }

      return toggle;
    }()
  };
  /** @method */

  var enable =
  /*#__PURE__*/
  function () {
    var _ref13 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7() {
      var _ref14, success, errorData, message, error;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'proxy.enable'
              });

            case 2:
              _ref14 = _context7.sent;
              success = _ref14.success;
              errorData = _ref14['error'];

              if (!success) {
                _context7.next = 7;
                break;
              }

              return _context7.abrupt("return", success);

            case 7:
              message = errorData.message;
              error
              /*: Error & { [ string ]: any }*/
              = new Error(message);
              Object.keys(errorData).forEach(function (key) {
                error[key] = errorData[key];
              });
              throw error;

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    return function enable() {
      return _ref13.apply(this, arguments);
    };
  }();
  /** @method */


  var disable =
  /*#__PURE__*/
  function () {
    var _ref15 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8() {
      var _ref16, success, errorData, message, error;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'proxy.disable'
              });

            case 2:
              _ref16 = _context8.sent;
              success = _ref16.success;
              errorData = _ref16['error'];

              if (!success) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt("return", success);

            case 7:
              message = errorData.message;
              error
              /*: Error & { [ string ]: any }*/
              = new Error(message);
              Object.keys(errorData).forEach(function (key) {
                error[key] = errorData[key];
              });
              throw error;

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    return function disable() {
      return _ref15.apply(this, arguments);
    };
  }();
  /** @method */


  var setCountry =
  /*#__PURE__*/
  function () {
    var _ref17 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9(country
    /*: string*/
    ) {
      var _ref18, success, errorData, message, error;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'proxy.setCountry',
                country: country
              });

            case 2:
              _ref18 = _context9.sent;
              success = _ref18.success;
              errorData = _ref18['error'];

              if (!success) {
                _context9.next = 7;
                break;
              }

              return _context9.abrupt("return", success);

            case 7:
              message = errorData.message;
              error
              /*: Error & { [ string ]: any }*/
              = new Error(message);
              Object.keys(errorData).forEach(function (key) {
                error[key] = errorData[key];
              });
              throw error;

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function setCountry(_x6) {
      return _ref17.apply(this, arguments);
    };
  }();

  var proxy = {
    disable: disable,
    enable: enable,
    setCountry: setCountry,
    siteFilters: siteFilters
  };
  _exports.$proxyDefault = proxy;
  var proxy$1 = {
    default: proxy
  };
  _exports.$proxy = proxy$1;
  var punycode = {
    /** @method */
    'toASCII': function toASCII(domain
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'punycode.toASCII',
        domain: domain
      });
    },

    /** @method */
    'toUnicode': function toUnicode(domain
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'punycode.toUnicode',
        domain: domain
      });
    }
  };
  _exports.$punycodeDefault = punycode;
  var punycode$1 = {
    default: punycode
  };
  _exports.$punycode = punycode$1;
  var storage = {
    /** @method */
    'get': function get(key
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'storage.get',
        key: key
      });
    },

    /** @method */
    'set': function set(key
    /*: string*/
    , value
    /*: any*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'storage.set',
        key: key,
        value: value
      });
    }
  };
  _exports.$storageDefault = storage;
  var storage$1 = {
    default: storage
  };
  _exports.$storage = storage$1;
});