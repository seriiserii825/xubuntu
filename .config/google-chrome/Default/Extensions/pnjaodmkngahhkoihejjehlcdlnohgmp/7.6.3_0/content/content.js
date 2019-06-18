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
function findFeedLinks() {
  // Find all the RSS link elements.
  var result = document.evaluate(
    '//*[local-name()="link"][contains(@rel, "alternate")] ' +
    '[contains(@type, "rss") or contains(@type, "atom") or ' +
    'contains(@type, "rdf")]',
    document,
    null,
    0,
    null
  );

  var feeds = [];
  var item;

  while (item = result.iterateNext()) {
    var href = item.href || "";
    var title = item.title || "";
    if ("".trim) {
      href = href.trim();
      title = title.trim();
      if (!href) {
        continue;
      }
    }
    feeds.push({
      "href": item.href,
      "title": item.title
    });
  }

  return feeds;
};

// Check to see if the current document is a feed delivered as plain text,
// which Chrome does for some mime types, or a feed wrapped in an html.
//
// Copyright (c) 2010 The Chromium Authors. All rights reserved.
//
// Taken from Google Feed Reader extension:
//     http://src.chromium.org/viewvc/chrome/trunk/src/chrome/test/data/extensions/subscribe_page_action/
function isFeedDocument() {
    var body = document.body;
    var soleTagInBody = "";
    if (body && body.childElementCount == 1) {
      soleTagInBody = body.children[0].tagName;
    }
    if (document.getElementById('webkit-xml-viewer-source-xml')) {
      try {
        soleTagInBody = document.getElementById('webkit-xml-viewer-source-xml').children[0].tagName.toUpperCase();
      }
      catch (e) { }
    }
    // Some feeds show up as feed tags within the BODY tag, for example some
    // ComputerWorld feeds. We cannot check for this at document_start since
    // the body tag hasn't been defined at that time (contains only HTML element
    // with no children).
    if (soleTagInBody == "RSS" || soleTagInBody == "FEED" || soleTagInBody == "RDF" || soleTagInBody == "RDF:RDF") {
      return [{
        href: location.href,
        title: location.href
      }];
    }
    // Chrome renders some content types like application/rss+xml and
    // application/atom+xml as text/plain, resulting in a body tag with one
    // PRE child containing the XML. So, we attempt to parse it as XML and look
    // for RSS tags within.
    if (soleTagInBody == "PRE") {
      var txt = body.textContent;

      var domParser = new DOMParser();
      var doc = domParser.parseFromString(txt, "text/xml");
      // |doc| now contains the parsed document within the PRE tag.
      if (containsFeed(doc)) {
        // Let the extension know that we should show the subscribe page.
        return [{
          href: location.href,
          title: location.href
        }];
      }

      var asJson = false;
      try {
        asJson = JSON.parse(txt);
      } catch (e) {}

      if (asJson) {
        if (asJson.version && asJson.title && typeof asJson.items === "object") {
          sendMessage({
            type: "feedsFound",
            feeds: [{
              href: location.href,
              title: location.href
            }],
            url: document.location.href
          });
          return true;
        }
      }
    }
    return false;
}

// Copyright (c) 2010 The Chromium Authors. All rights reserved.
//
// Taken from Google Feed Reader extension:
//     http://src.chromium.org/viewvc/chrome/trunk/src/chrome/test/data/extensions/subscribe_page_action/
function containsFeed(doc) {
  // Find all the RSS link elements.
  var result = doc.evaluate('//*[local-name()="rss" or local-name()="feed" or local-name()="RDF" or local-name()="rdf:RDF"]', doc, null, 0, null);
  if (!result) {
    return false; // This is probably overly defensive, but whatever.
  }
  var node = result.iterateNext();
  if (!node) {
    return false; // No RSS tags were found.
  }
  // The feed for arab dash jokes dot net, for example, contains
  // a feed that is a child of the body tag so we continue only if the
  // node contains no parent or if the parent is the body tag.
  if (node.parentElement && node.parentElement.tagName != "BODY") {
    return false;
  }
  return true;
}

function findDataFromWebsite(selector, template) {
  "use strict";

  template = template || "{1}";

  var transforms = {
    selector: function(subject, options) {
      if (typeof subject.querySelectorAll === "function") {
        try {
          return subject.querySelectorAll(options.selector);
        } catch (e) {
          return false;
        }
      }
    },

    array: function(subject, options) {
      return subject[options.index];
    },

    text: function(subject) {
      if (subject) {
        return subject.textContent;
      } else {
        return "";
      }
    },

    split: function(subject, options) {
      if (subject) {
        return typeof subject.split === "function" ? subject.split(options.separator) : "";
      } else {
        return "";
      }
    },

    regex: function(subject, options) {
      return new RegExp(options.regex).exec(subject);
    },

    attribute: function(subject, options) {
      if (subject) {
        return typeof subject.getAttribute === "function" ? subject.getAttribute(options.name) : "";
      } else {
        return "";
      }
    },

    currentUrl: function() {
      return document.location.href;
    },

    currentTitle: function() {
      return document.title;
    },

    errorIfEmpty: function(subject) {
      if (!subject) {
        throw new Error("This was triggered by errorIfEmpty");
      }
    },

    "default": function(subject, options) {
      if (subject) {
        return subject;
      } else {
        return options["default"];
      }
    }
  };

  var numberOfErrors = 0;

  var rules;
  try {
    rules = JSON.parse(selector);
  } catch (e) {
    return false;
  }

  var variables = [];

  var foundMatches = false;

  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    var currentObject = document.documentElement;

    var didError = false;

    for (var j = 0; j < rule.steps.length; j++) {
      var step = rule.steps[j];

      if (!transforms[step.type]) {
        didError = true;
        break;
      }

      try {
        currentObject = transforms[step.type](currentObject, step);
      } catch (e) {
        didError = true;
      }
    }

    if (didError) {
      variables.push("");
      numberOfErrors++;
      continue;
    }

    variables.push(currentObject);
  }

  if (numberOfErrors === rules.length) {
    return false;
  }

  var result = template.replace(/\{([0-9]+)\}/g, function(match, capture) {
    var index = parseInt(capture, 10) - 1;
    return variables[index] || "";
  });

  return result;
}

function checkDocument(plugins) {
  var feedLinks = findFeedLinks();
  var feedDocumentLinks = isFeedDocument();

  if (plugins) {
    plugins.forEach(function(plugin) {
      var feedName = document.location.href;
      var feedUrl = plugin.href;
      if (plugin.plugin.feedNameSelector) {
        feedName = findDataFromWebsite(plugin.plugin.feedNameSelector, plugin.plugin.feedNameTemplate);
      }

      var isSearch = true;
      if (plugin.plugin.feedUrlSelector) {
        feedUrl = findDataFromWebsite(plugin.plugin.feedUrlSelector, plugin.plugin.feedUrlTemplate);

        if (feedUrl) {
          feedLinks.push({
            href: feedUrl,
            title: feedName || document.location.href,
            isSearch: true
          });
        }
      }
    });
  }

  if (feedDocumentLinks) {
    sendMessage({
      type: "feedsFound",
      feeds: feedDocumentLinks,
      url: document.location.href,
      withPlugins: !!plugins
    });

    sendMessage({
      type: "shouldIActivateThePopup",
      url: document.location.href
    });

    listenForMessage("yesYouShouldActivateThePopup", function (message) {
      var popup = createFeederPopup();
      popup.askForShowingAgain = !message.hasAskedToShowContentHelper;

      listenForMessage("parsedFeedReturn", function (message) {
        popup.addFeed(message.feed, message.posts);
        if (message.following) {
          popup.isFollowing(true);
        }
      });

      listenForMessage("subscribedWorked", function (message) {
        popup.subscribeDone(message.success);
      });

      sendMessage({
        type: "parseFeedAndReturnResults",
        path: document.location.href.toString()
      });
    });
  } else if (feedLinks.length) {
    // Notify the extension needs to show the RSS page action icon.
    sendMessage({
      type: "feedsFound",
      feeds: feedLinks,
      url: document.location.href,
      withPlugins: !!plugins
    });
  } else {
    sendMessage({
      type: "feedsFound",
      feeds: [],
      url: document.location.href,
      withPlugins: !!plugins
    });
  }
}

if (window.top === window) {
  var matchingPlugins = false;
  checkDocument(matchingPlugins);

  listenForMessage("historystatechanged", function(message) {
    matchingPlugins = false;

    setTimeout(function() {
      checkDocument(matchingPlugins);
    }, 500);
  });

  listenForMessage("checkwithplugins", function(message) {
    if (typeof message.plugins === "object" && typeof message.plugins.forEach === "function") {
      matchingPlugins = message.plugins;
    }
    setTimeout(function() {
      checkDocument(matchingPlugins);
    }, 2000);
  });
}

function createFeederPopup() {
  function Popup() {
    this.xml = document.body.querySelector("pre, .pretty-print");
    this.xml.style.transition = "opacity 0.3s";
    setTimeout(function () {
      this.xml.style.opacity = "0.1";
    }.bind(this), 10);
    this.div = createElement("div");
    this.div.innerHTML = "<div class='main'>" +
        "<div class='feeder-header'>" +
        "<span class='title'></span>" +
        "<span class='exit'></span>" +
        "</div>" +
        "<div class='description-image'>" +
        "<div class='head'>This is a feed</div>" +
        "<div class='happy-icon'></div>" +
        "<div class='body'>Subscribe to see whenever something new appears</div>" +
        "</div>" +
        "<div class='submitter'><a href='javascript:void(0);' class='sub-button green-button'>Subscribe</a></div>" +
        "<div class='feed-header'>About this feed</div>" +
        "<div class='feed-data'><ul></ul></div>" +
        "<div class='feed-header'>Latest posts</div>" +
        "<div class='feed-posts'><ul></ul></div>" +
        "</div>";

    this.div.querySelector(".title").innerText = "Get notified when " + document.location.hostname + " updates";

    this.button = this.div.querySelector(".sub-button");
    this.exitButton = this.div.querySelector(".exit");
    this.div.style.opacity = "0";
    this.div.style.transition = "opacity 0.3s";
    setTimeout(function () {
      this.div.style.opacity = "1";
    }.bind(this), 10);
    this.styleIn(this.div, false, this.overflowOverlayStyle);
    this.style(".main", this.containerStyle);
    this.style(".main", this.typo);
    this.style(".feeder-header", this.barStyle);
    this.style(".feeder-header .title", this.titleText);
    this.style(".feeder-header .exit", this.exitStyle);
    this.style(".description-image", this.descriptionImageStyle);
    this.style(".submitter", this.submitterStyle);
    this.style(".button", this.buttonStyle);
    this.style(".green-button", this.greenButtonStyle);
    this.style(".feed-header", this.headingStyle);
    this.button.addEventListener("click", function () {
      this.subscribe();
    }.bind(this), false);
    this.exitButton.addEventListener("click", function () {
      this.exitPressed();
    }.bind(this), false);
    document.body.appendChild(this.div);
  }

  Popup.prototype = {
    addFeed: function (feed, posts) {
      var feedData = this.div.querySelector(".feed-data ul");
      var feedPosts = this.div.querySelector(".feed-posts ul");
      addItem(feedData, "Title", feed.title);
      addItem(feedData, "Link", feed.path);
      for (var i = 0; i < posts.length && i < 8; i++) {
        addItem(feedPosts, posts[i].title, "", {
          href: posts[i].link
        });
      }
      this.style(".feed-data, .feed-posts", this.dataListStyle);
      function addItem(ul, key, value, options) {
        options = options || {};
        var li = createElement("li");
        var keySpan = createElement("span");
        keySpan.className = "key";
        keySpan.innerText = key;
        var valueSpan = createElement("span");
        valueSpan.className = "value";
        valueSpan.innerText = value;
        if (options.href) {
          var hiddenA = createElement("a");
          hiddenA.target = "_blank";
          hiddenA.rel = "noopener noreferrer";
          hiddenA.href = options.href;
          li.appendChild(hiddenA);
          li.style.cursor = "pointer";
          li.onclick = function () {
            hiddenA.click();
          };
          li.onmouseenter = function () {
            li.style.background = "#f9f9f9";
          };
          li.onmouseleave = function () {
            li.style.background = "#fff";
          };
        }
        li.appendChild(keySpan);
        li.appendChild(valueSpan);
        ul.appendChild(li);
      }
    },
    subscribe: function () {
      if (this.following) {
        return;
      }
      this.button.innerText = "Loading...";
      sendMessage({
        type: "shouldSubscribe",
        path: document.location.href.toString()
      });
    },
    subscribeDone: function (worked) {
      if (worked) {
        this.isFollowing(true);
        this.animateDone();
      } else {
        alert("Could not add the feed! It might have been temporary, or the feed is broken....");
        this.button.innerText = "Try again...?";
      }
    },
    animateDone: function () {
      var animateDone = createElement("div");
      animateDone.innerText = "Updates will appear up here!";
      var icon = createElement("img");
      icon.src = assetURL("icons/icon-retina.png");
      icon.style.width = "19px";
      icon.style.verticalAlign = "middle";
      icon.style.marginLeft = "10px";
      animateDone.appendChild(icon);
      var as = animateDone.style;
      as.position = "fixed";
      as.top = "20px";
      as.right = "20px";
      as.padding = "10px";
      as.background = "white";
      as.border = "1px solid #999";
      as.borderRadius = "3px";
      as.opacity = "0";
      as.transition = "opacity 0.7s";
      as.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
      setTimeout(function () {
        as.opacity = "1";
      }, 10);
      this.styleIn(animateDone, "", this.typo);
      document.body.appendChild(animateDone);
    },
    isFollowing: function () {
      this.following = true;
      this.button.innerHTML = "✔ Following";
      this.button.style.opacity = "0.2";
    },
    exitPressed: function () {
      this.hide();
    },
    hide: function () {
      this.xml.style.opacity = "1";
      this.div.style.opacity = "0";
      setTimeout(function () {
        this.div.parentNode.removeChild(this.div);
      }.bind(this), 300);
    },
    overflowOverlayStyle: function (el) {
      var els = el.style;
      els.position = "fixed";
      els.top = "0px";
      els.bottom = "0px";
      els.right = "0px";
      els.left = "0px";
      els.width = "100%";
      els.height = "100%";
      els.overflow = "auto";
    },
    containerStyle: function (el) {
      var els = el.style;
      els.position = "absolute";
      els.background = "white";
      els.top = "75px";
      els.left = "50%";
      els.padding = "36px 0 0 0";
      els.transform = "translateX(-50%)";
      els.minWidth = "300px";
      els.width = "400px";
      els.maxWidth = "95%";
      els.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.25)";
      els.marginBottom = "20px";
    },
    submitterStyle: function (el) {
      var els = el.style;
      els.textAlign = "center";
      els.paddingBottom = "20px";
    },
    barStyle: function (el) {
      var els = el.style;
      els.height = "34px";
      els.background = "linear-gradient(to bottom, rgba(250,250,255,1) 0%,rgba(217,218,219,1) 100%)";
      els.textAlign = "center";
      els.boxShadow = "0 1px 0 rgba(255,255,255,0.9) inset";
      els.position = "relative";
      els.borderTop = "1px solid #bfbfbf";
      els.borderBottom = "1px solid #bfbfbf";
      els.borderLeft = "1px solid #bfbfbf";
      els.borderRight = "1px solid #bfbfbf";
      els.position = "absolute";
      els.top = "2px";
      els.left = "2px";
      els.right = "2px";
      els.zIndex = "3";
    },
    titleText: function (el) {
      var els = el.style;
      els.margin = "0 auto";
      els.padding = "9px 0 0 0";
      els.textShadow = "0 1px 0 rgba(255,255,255,0.7)";
      els.textOverflow = "ellipsis";
      els.overflow = "hidden";
      els.fontSize = "14px";
      els.whiteSpace = "nowrap";
      els.position = "absolute";
      els.left = "45px";
      els.right = "45px";
    },
    headingStyle: function (el) {
      var els = el.style;
      els.fontSize = "13px";
      els.color = "#7d7e80";
      els.background = "linear-gradient(to bottom, rgba(232,237,246,1) 0%,rgba(223,230,242,1) 100%)";
      els.padding = "3px 10px";
      els.borderBottom = "1px solid #c9d1de";
      els.borderTop = "1px solid #c9d1de";
      els.boxShadow = "inset 0 1px 0 rgba(255, 255, 2)";
    },
    typo: function (el) {
      var els = el.style;
      els.font = "13px/17px Helvetica Neue, arial, sans-serif";
      els.color = "#212121";
    },
    buttonStyle: function (el) {
      var els = el.style;
      els.color = "#212121";
      els.display = "inline-block";
      els.zoom = "1";
      els.height = "32px";
      els.lineHeight = "32px";
      els.background = "linear-gradient(to bottom, rgba(247,247,252,1) 0%,rgba(212,213,216,1) 100%)";
      els.border = "1px solid rgba(0,0,0,0.25)";
      els.textAlign = "center";
      els.borderRadius = "3px";
      els.boxShadow = "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 1px 0 0 rgba(0, 0, 0, 0.1)";
      els.textShadow = "0 1px 0 rgba(255,255,255,0.8)";
      els.cursor = "pointer";
      els.backgroundClip = "padding-box";
      els.backgroundOrigin = "border-box";
      els.padding = "0 15px";
      els.position = "relative";
      els.textDecoration = "none";
      el.onmouseenter = function () {
        els.border = "1px solid rgba(0,0,0,0.35)";
      };
      el.onmouseleave = function () {
        els.border = "1px solid rgba(0,0,0,0.25)";
      };
      el.onmousedown = function () {
        els.background = "linear-gradient(to bottom,  rgba(239,239,239,1) 0%,rgba(199,200,204,1) 100%)";
        els.boxShadow = "inset 0 1px 2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.05), 0 1px 0 rgba(255, 255, 255, 0.3)";
        document.body.onmouseup = function () {
          els.background = "linear-gradient(to bottom, rgba(247,247,252,1) 0%,rgba(212,213,216,1) 100%)";
          els.boxShadow = "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 1px 0 0 rgba(0, 0, 0, 0.1)";
          document.body.onmouseup = function () { };
        };
      };
    },
    greenButtonStyle: function (el) {
      this.buttonStyle(el);
      var els = el.style;
      els.background = "linear-gradient(to bottom, #e2efdc 0%,#cae9bd 100%)";
      el.onmousedown = function () {
        els.background = "linear-gradient(to bottom, #cae9bd 0%,#e2efdc 100%)";
        els.boxShadow = "inset 0 1px 2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.05), 0 1px 0 rgba(255, 255, 255, 0.3)";
        document.body.onmouseup = function () {
          els.background = "linear-gradient(to bottom, #e2efdc 0%,#cae9bd 100%)";
          els.boxShadow = "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 1px 0 0 rgba(0, 0, 0, 0.1)";
          document.body.onmouseup = function () { };
        };
      };
    },
    exitStyle: function (el) {
      this.buttonStyle(el);
      var els = el.style;
      els.width = "28px";
      els.height = "28px";
      els.position = "absolute";
      els.top = "2px";
      els.right = "2px";
      els.padding = "0";
      var icon = createElement("span");
      var ics = icon.style;
      ics.backgroundImage = "url(" + assetURL("icons/bar-buttons-good_2x.png") + ")";
      ics.backgroundSize = "384px 80px";
      ics.backgroundPosition = "-224px 0";
      ics.display = "block";
      ics.width = "16px";
      ics.height = "16px";
      ics.position = "absolute";
      ics.top = "50%";
      ics.left = "50%";
      ics.transform = "translateX(-50%) translateY(-50%)";
      el.appendChild(icon);
    },
    descriptionImageStyle: function (el) {
      var els = el.style;
      els.padding = "20px";
      els.textAlign = "center";
      this.styleIn(el, ".head", function (el) {
        var els = el.style;
        els.fontSize = "20px";
        els.lineHeight = "1.2";
      });
      this.styleIn(el, ".body", function (el) {
        var els = el.style;
        els.color = "#999";
      });
    },
    dataListStyle: function (el) {
      var els = el.style;
      this.styleIn(el, "ul", function (el) {
        var els = el.style;
        els.listStyle = "none";
        els.margin = "0";
        els.padding = "0";
      });
      this.styleIn(el, "li", function (el) {
        var els = el.style;
        els.padding = "6px 5px 5px 10px";
        els.borderBottom = "1px solid #e1e1e1";
        if (el.parentNode.lastChild === el) {
          els.borderBottom = "none";
        }
        var clearFix = createElement("div");
        clearFix.style.clear = "both";
        el.appendChild(clearFix);
      });
      this.styleIn(el, ".key", function (el) {
        var els = el.style;
        els.float = "left";
        els.color = "#666";
      });
      this.styleIn(el, ".value", function (el) {
        var els = el.style;
        els.float = "right";
        els.whiteSpace = "nowrap";
        els.overflow = "hidden";
        els.textOverflow = "ellipsis";
        els.maxWidth = "100%";
      });
    },
    style: function (query, callback) {
      this.styleIn(this.div, query, callback);
    },
    styleIn: function (div, query, callback) {
      var base = div;
      var arr;
      if (query) {
        arr = div.querySelectorAll(query);
      } else {
        arr = [base];
      }
      for (var i = 0; i < arr.length; i++) {
        callback.call(this, arr[i]);
      }
    }
  };
  return new Popup();
}

if (document && document.getElementById && document.getElementById("feeder-is-installed-flag")) {
  var beacon = document.getElementById("feeder-is-installed-flag");

  var beaconCallback = function (e) {
    // for some reason
    // for some reeeally annoyingly weird reason
    // calling sendMessage on safari breaks
    // however, calling the exact same method, but directly doesnt.
    // i hate extensions
    if (window.safari) {
      safari.self.tab.dispatchMessage("userDomEvent", {
        type: "userDomEvent",
        loba: JSON.parse(e.detail)
      });
      return;
    }
    sendMessage({
      type: "userDomEvent",
      loba: JSON.parse(e.detail)
    });
  };

  beacon.addEventListener("feeder-message", beaconCallback, false);
  window.addEventListener("unload", function () {
    beacon.removeEventListener("feeder-message", beaconCallback, false);
  }, false);

  beacon.className += " feeder-is-installed";
}

function createElement(tagName) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", tagName);
}
