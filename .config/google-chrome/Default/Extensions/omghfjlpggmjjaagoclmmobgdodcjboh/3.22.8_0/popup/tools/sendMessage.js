define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$sendMessageDefault = _exports.$sendMessage = void 0;

  /** @function */
  var sendMessage = function sendMessage()
  /*: Array<any>*/

  /*: Promise<any>*/
  {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof browser !== 'undefined') {
      return browser.runtime.sendMessage.apply(browser.runtime, args);
    }

    return new Promise(function (resolve, reject) {
      /** @function */
      var callback = function callback(response
      /*: any*/
      ) {
        if (chrome.runtime.lastError) reject(chrome.runtime.lastError);else resolve(response);
      };

      args.push(callback);
      chrome.runtime.sendMessage.apply(chrome.runtime, args);
    });
  };

  _exports.$sendMessageDefault = sendMessage;
  var sendMessage$1 = {
    default: sendMessage
  };
  _exports.$sendMessage = sendMessage$1;
});