'use strict';

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', { // eslint-disable-line no-extend-native
    'value': function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', { // eslint-disable-line
    'value': function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', { // eslint-disable-line no-extend-native
    'value': function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) return false;

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    'value': function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    'writable': true,
    'configurable': true
  });
}

(function () {
  if (window.Promise.prototype.finally) return;

  /**
  @method
  @param {Function}
  @return {Promise} initial */
  window.Promise.prototype.finally = function (onFinally) {
    // eslint-disable-line no-extend-native
    this.then(onFinally, onFinally);

    return this;
  };
})();

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    // eslint-disable-line no-extend-native
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    // eslint-disable-line
    'use strict';

    if (typeof start !== 'number') start = 0;

    if (start + search.length > this.length) return false;

    return this.indexOf(search, start) !== -1;
  };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    // eslint-disable-line
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) return;

    Object.defineProperty(item, 'append', {
      'configurable': true,
      'enumerable': true,
      'writable': true,
      'value': function append() {
        var docFrag = document.createDocumentFragment();

        for (var _len = arguments.length, argArr = Array(_len), _key = 0; _key < _len; _key++) {
          argArr[_key] = arguments[_key];
        }

        argArr.forEach(function (argItem) {
          docFrag.appendChild(argItem instanceof Node ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

Element.prototype.matches = Element.prototype.matches || Element.prototype.webkitMatchesSelector;

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) return;

    Object.defineProperty(item, 'prepend', {
      'configurable': true,
      'enumerable': true,
      'writable': true,
      'value': function prepend() {
        var docFrag = document.createDocumentFragment();

        for (var _len2 = arguments.length, argArr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          argArr[_key2] = arguments[_key2];
        }

        argArr.forEach(function (argItem) {
          docFrag.appendChild(argItem instanceof Node ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// From https://github.com/cvan/keyboardevent-key-polyfill
(function () {
  var isEdgeOrIE = navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || navigator.userAgent.indexOf('Edge/') > 0;
  var condition = !('KeyboardEvent' in window) || 'key' in KeyboardEvent.prototype && !isEdgeOrIE;
  if (condition) return;

  var keys = {
    '3': 'Cancel',
    '6': 'Help',
    '8': 'Backspace',
    '9': 'Tab',
    '12': 'Clear',
    '13': 'Enter',
    '16': 'Shift',
    '17': 'Control',
    '18': 'Alt',
    '19': 'Pause',
    '20': 'CapsLock',
    '27': 'Escape',
    '28': 'Convert',
    '29': 'NonConvert',
    '30': 'Accept',
    '31': 'ModeChange',
    '32': ' ',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown',
    '41': 'Select',
    '42': 'Print',
    '43': 'Execute',
    '44': 'PrintScreen',
    '45': 'Insert',
    '46': 'Delete',
    '48': ['0', ')'],
    '49': ['1', '!'],
    '50': ['2', '@'],
    '51': ['3', '#'],
    '52': ['4', '$'],
    '53': ['5', '%'],
    '54': ['6', '^'],
    '55': ['7', '&'],
    '56': ['8', '*'],
    '57': ['9', '('],
    '91': 'OS',
    '93': 'ContextMenu',
    '106': '*',
    '107': '+',
    '109': '-',
    '110': '.',
    '111': '/',
    '144': 'NumLock',
    '145': 'ScrollLock',
    '181': 'VolumeMute',
    '182': 'VolumeDown',
    '183': 'VolumeUp',
    '186': [';', ':'],
    '187': ['=', '+'],
    '188': [',', '<'],
    '189': ['-', '_'],
    '190': ['.', '>'],
    '191': ['/', '?'],
    '192': ['`', '~'],
    '219': ['[', '{'],
    '220': ['\\', '|'],
    '221': [']', '}'],
    '222': ["'", '"'],
    '224': 'Meta',
    '225': 'AltGraph',
    '246': 'Attn',
    '247': 'CrSel',
    '248': 'ExSel',
    '249': 'EraseEof',
    '250': 'Play',
    '251': 'ZoomOut'
  };

  // Function keys (F1-24).
  var i;
  for (i = 1; i < 25; i++) {
    keys[111 + i] = 'F' + i;
  }

  // Printable ASCII characters.
  for (i = 65; i < 91; i++) {
    var letter = String.fromCharCode(i);
    keys[i] = [letter.toLowerCase(), letter.toUpperCase()];
  }

  // Numbers on numeric keyboard.
  for (i = 96; i < 106; i++) {
    var _letter = String.fromCharCode(i - 48);
    keys[i] = _letter;
  }

  // Polyfill `key` on `KeyboardEvent`.
  var proto = {
    'get': function get(x) {
      var key = keys[this.which || this.keyCode];

      if (Array.isArray(key)) {
        key = key[+this.shiftKey];
      }

      return key;
    },
    'enumerable': true,
    'configurable': true
  };
  Object.defineProperty(KeyboardEvent.prototype, 'key', proto);
})();