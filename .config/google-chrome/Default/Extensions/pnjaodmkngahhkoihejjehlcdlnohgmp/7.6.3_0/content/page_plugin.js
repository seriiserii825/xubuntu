function sendMessage(data) {
  if (isChrome()) {
    chrome.runtime.sendMessage(data);
  } else if (isSafari()) {
    console.log("sending message", data.type, data);
    safari.self.tab.dispatchMessage(data.type.substr(0), data);
  }
}

function listenForMessage(type, callback) {
  if (isChrome()) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.type === type) {
        callback(request);
      }
    });
  } else if (isSafari()) {
    safari.self.addEventListener("message", function (message) {
      if (message.type === type || message.name === type) {
        callback(message.message);
      }
    }, false);
  }
}

function assetURL(url) {
  if (isChrome()) {
    return chrome.extension.getURL(url);
  } else if (isSafari()) {
    return safari.extension.baseURI + url;
  }
}

function isChrome() {
  return typeof chrome !== "undefined" && chrome.extension;
}

function isSafari() {
  return window.safari && window.safari.self;
}

function sendMessageToExtension(name, message) {
  message = message || {};

  if (isChrome()) {
    message.type = name;
    chrome.runtime.sendMessage(message);
  } else if (isSafari()) {
    safari.self.tab.dispatchMessage(name, message);
  }
}

function listenForFeederEvents(name, callback) {
  if (isChrome()) {
    chrome.runtime.connect().onMessage.addListener(function(msg) {
      if (msg.name === name) {
        callback(msg);
      }
    });
  } else if (isSafari()) {
    sendMessageToExtension("connect", { type: name });
    safari.self.addEventListener("message", function(e) {
      if (e.name === name) {
        callback(e.message);
      }
    }, false);
  }
}
;
if (self != top) {
  sendMessage({
    type: "executeOnReader"
  });

  listenForMessage("executeOnReader:true", function(msg) {
    setTimeout(function() {
      document.documentElement.style.display = "block";
    }, 100);
  });
}
