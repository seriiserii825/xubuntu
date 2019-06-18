var __extends = this && this.__extends || function() {
var e = function(t, n) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
})(t, n);
};
return function(t, n) {
function o() {
this.constructor = t;
}
e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
new o());
};
}(), __awaiter = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(i, r) {
function s(e) {
try {
c(o.next(e));
} catch (e) {
r(e);
}
}
function a(e) {
try {
c(o.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? i(e.value) : new n(function(t) {
t(e.value);
}).then(s, a);
}
c((o = o.apply(e, t || [])).next());
});
}, __generator = this && this.__generator || function(e, t) {
function n(e) {
return function(t) {
return o([ e, t ]);
};
}
function o(n) {
if (i) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (i = 1, r && (s = 2 & n[0] ? r.return : n[0] ? r.throw || ((s = r.return) && s.call(r), 
0) : r.next) && !(s = s.call(r, n[1])).done) return s;
switch (r = 0, s && (n = [ 2 & n[0], s.value ]), n[0]) {
case 0:
case 1:
s = n;
break;

case 4:
return c.label++, {
value: n[1],
done: !1
};

case 5:
c.label++, r = n[1], n = [ 0 ];
continue;

case 7:
n = c.ops.pop(), c.trys.pop();
continue;

default:
if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
c = 0;
continue;
}
if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
c.label = n[1];
break;
}
if (6 === n[0] && c.label < s[1]) {
c.label = s[1], s = n;
break;
}
if (s && c.label < s[2]) {
c.label = s[2], c.ops.push(n);
break;
}
s[2] && c.ops.pop(), c.trys.pop();
continue;
}
n = t.call(e, c);
} catch (e) {
n = [ 6, e ], r = 0;
} finally {
i = s = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
var i, r, s, a, c = {
label: 0,
sent: function() {
if (1 & s[0]) throw s[1];
return s[1];
},
trys: [],
ops: []
};
return a = {
next: n(0),
throw: n(1),
return: n(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
}, __assign = this && this.__assign || function() {
return __assign = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}, __assign.apply(this, arguments);
};

System.register("app/library/ts/function", [], function(e, t) {
"use strict";
function n(e, t) {
e = e || {};
for (var n in t) t.hasOwnProperty(n) && void 0 === e[n] && (e[n] = t[n]);
return e;
}
function o(e, t) {
void 0 === t && (t = !1);
var n = [];
for (var o in e) if (e.hasOwnProperty(o)) {
var i = e[o];
i && "object" == typeof i && i.constructor === Array ? i.forEach(function(e) {
n.push(encodeURIComponent(o) + (t ? "" : "[]") + "=" + encodeURIComponent(e));
}) : n.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
}
return n.join("&");
}
function i(e) {
return new Promise(function(t, n) {
setTimeout(function() {
return t();
}, e);
});
}
t && t.id;
return e("toOptions", n), e("objectToQueryString", o), e("sleep", i), {
setters: [],
execute: function() {}
};
}), System.register("app/ext/ext", [ "app/library/ts/function" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
if (o = {
getBackgroundPage: function() {
return this.isSafari() ? safari.extension.globalPage.contentWindow : this.isOnline() ? window.top : chrome.extension.getBackgroundPage();
},
isExtensionInstalled: function() {
var e = document.getElementById("feeder-is-installed-flag");
return (e || !1) && -1 !== e.className.indexOf("feeder-is-installed");
},
hasReviewURL: function() {
return !this.isSafari() && !this.isOnline();
},
isChrome: function() {
return !("undefined" == typeof chrome || !chrome.extension);
},
isSafari: function() {
return !(!window.safari || !window.safari.extension);
},
isOnline: function() {
return !this.isChrome() && !this.isSafari();
},
isConsume: function() {
return this.isOnline() && !this.isMobile();
},
isMobile: function() {
return !o.isOnline() && screen.width <= 480;
},
assetURL: function(e) {
if (this.isChrome()) return chrome.extension.getURL(e);
if (this.isSafari()) return safari.extension.baseURI + e;
if (this.isOnline()) {
var t = window;
return t.FEEDER_BASE_PATH ? t.FEEDER_BASE_PATH + e : "/" + e;
}
throw new Error("Could not find asset URL on this platform.");
},
pageURL: function(e, t, o) {
if (void 0 === t && (t = {}), o && (e += "#" + o), e += Object.keys(t).length ? "?" + n.objectToQueryString(t) : "", 
this.isChrome()) return chrome.extension.getURL(e);
if (this.isSafari()) return safari.extension.baseURI + e;
if (this.isOnline()) {
var i = document.location.port ? document.location.port : "";
return -1 !== e.indexOf("settings/index.html") && (e = e.replace("index.html", "").replace("/#/", "")), 
document.location.protocol + "//" + document.location.hostname + (i ? ":" + i : "") + "/" + e;
}
throw new Error("Could not generate pageURL for platform.");
},
settingsURL: function(e, t, o) {
void 0 === t && (t = {});
var i = e + "/settings/";
return t = t || {}, o && (i += "#" + o), this.isOnline() ? t.ctx = "online" : (this.isChrome() || this.isSafari()) && (t.ctx = "extension"), 
i += Object.keys(t).length ? "?" + n.objectToQueryString(t) : "", i = i.replace("/#/", "/");
},
getVersion: function() {
return "undefined" != typeof chrome && chrome.runtime && "function" == typeof chrome.runtime.getManifest ? chrome.runtime.getManifest().version : window.safari && safari.extension ? safari.extension.displayVersion : this.isOnline() ? "online" : "?";
},
getPlatformName: function() {
return this.isSafari() ? "safari" : this.isChrome() ? "chrome" : this.isOnline() ? "online" : "unknown";
}
}, window.document && document.documentElement) {
var t = o.getPlatformName();
document.body.className += " platform-" + t, document.documentElement.className += " html-platform-" + t, 
"safari" === t ? document.documentElement.className += " html-platform-safari" : o.isMobile() && (document.documentElement.className += " html-platform-mobile");
}
e("default", o);
}
};
}), System.register("app/backend/config", [ "app/ext/ext" ], function(e, t) {
"use strict";
var n, o, i, r, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = localStorage.feederRoot || "https://feeder.co", i = localStorage.adderRoot || "https://adder.feeder.co", 
r = localStorage.pusherRoot || "https://pusher.feeder.co", s = localStorage.analyticsURL || "https://analytics.feeder.co", 
document && document.location && (0 === document.location.href.indexOf("http://dev.feeder.co") || 0 === o.indexOf("http://dev.feeder.co")) && (r = "http://localhost:3337", 
i = "http://localhost:60111", s = "http://localhost:3338"), "http:" !== document.location.protocol && "https:" !== document.location.protocol || (o = document.location.protocol + "//" + document.location.host), 
e("default", {
icon: {
addFeed: n.default.isSafari() ? n.default.assetURL("icons/safari-icon-add.png") : n.default.assetURL("icons/icon-add.png"),
standard: n.default.isSafari() ? n.default.assetURL("icons/safari-icon.png") : n.default.assetURL("icons/icon-retina.png")
},
images: {
folder: n.default.assetURL("icons/folder_2x.png")
},
feeder: {
root: o,
pusherURL: r,
analyticsURL: s,
adderAPI: i,
api: o + "/1",
adder: i + "/rss",
payURL: o + "/account/subscription",
trialOverURL: o + "/account/subscription?trial_over=yes",
upgradeURL: o + "/account/subscription",
connectURL: o + "/pro?flow=ext",
importURL: o + "/api/feed-imports",
getStartedFeedURL: "https://feeder.co/get-started-feed",
loginUrl: o + "/login?flow=login",
logoutUrl: o + "/logout",
welcomeUrl: o + "/?pro_trial=awesome&ref=welcomeUrl",
termsUrl: o + "/terms?inline=1",
loginStatusURL: o + "/api/feeder/status",
checkURL: o + "/api/feeder/check",
destroyTokenURL: o + "/api/feeder/invalidate-token",
postURL: o + "/api/post/{post_id}?redirect_if_empty=true",
addFeedWithPlugin: o + "/settings/feeds/new/{plugin}?q={query}",
iosURL: "https://itunes.apple.com/us/app/feeder.co-rss-feed-reader/id668210239?mt=8",
installedURL: o + "/installed",
uninstallURL: o + "/uninstalled?c={client_id}&i={installed_at}",
reviewURL: o + "/leave-a-review?c={client_id}&i={installed_at}"
},
pollTimeout: 3e4,
onLoadPollTimeout: 2e3,
retryInitializeTimeout: 1e4,
defaultUpdateInterval: 6e5,
maxConcurrentUpdates: 30,
maxPostsPerFeedFile: 50,
defaultNumPosts: 30,
minNumberOfPosts: 250,
maxNumberOfUnreads: 100,
chanceOfPruneOnCrawl: .1,
feederBlog: "https://feeder.co/blog.rss",
feederNotificationsURL: "http://notifications.feeder.co/rss",
feederNotificationCheckInterval: 216e5,
optionsPageSize: {
width: 1e3,
height: 600
},
popupSize: {
width: 337,
height: 412
},
defaultFavicon: function(e) {
return e ? "https://icons.feedercdn.com/" + new URI(e).domain() : this.defaultFaviconPath;
},
defaultFaviconPath: n.default.assetURL("icons/default-icon.png")
});
}
};
}), System.register("app/ext/platformport", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/platformenv", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.events = {}, this.events.connect = [], this.events.message = [];
}
return e.prototype.makeCallback = function(e, t, n) {
return n["_" + e + "originalCallback"] = t, this._getCallbacks(e).push(n), n;
}, e.prototype.getCallback = function(e, t) {
for (var n, o = this._getCallbacks(e), i = 0; n = o[i]; i++) if (n["_" + e + "originalCallback"] === t) return n;
return !1;
}, e.prototype.fireCallback = function(e, t) {
var n = this;
this._getCallbacks(e).forEach(function(e) {
e.apply(n, t);
});
}, e.prototype.removeCallback = function(e, t) {
this._getCallbacks(e).remove(t);
}, e.prototype._getCallbacks = function(e) {
return this.events[e] || [];
}, e;
}(), e("default", n);
}
};
}), System.register("app/ext/uinotifications", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/ui", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/chrome/env", [ "app/ext/platformenv" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.DBAdapter = "function" == typeof window.openDatabase ? "WebSQLDatabase" : "IndexedDBDatabase", 
t;
}
return __extends(t, e), t.prototype.connectToBackground = function() {
return new i();
}, t.prototype.setInstallListener = function(e) {
try {
chrome.runtime.onInstalled.addListener(function(t) {
e(t.reason, t.previousVersion);
});
} catch (e) {
console.error("Could not add install listener", e);
}
}, t.prototype.setUninstallUrl = function(e) {
chrome.runtime.setUninstallURL(e);
}, t.prototype.onBackgroundConnect = function(e) {
var t = this.makeCallback("connect", e, function(t) {
e(new i(t));
});
chrome.runtime.onConnect.addListener(t);
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && (this.removeCallback("connect", t), chrome.runtime.onConnect.removeListener(t));
}, t.prototype.onMessage = function(e) {
var t = this.makeCallback("message", e, function(t, n) {
e(t, n);
});
chrome.runtime.onMessage.addListener(t);
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && (this.removeCallback("message", t), chrome.runtime.onMessage.removeListener(t));
}, t.prototype.sendMessageToTab = function(e, t, n) {
n.type = t, chrome.tabs.sendMessage(e, n);
}, t.prototype.onPopoverVisible = function(e) {}, t.prototype.removePopoverVisible = function(e) {}, 
t;
}(n.default), i = function() {
function e(e) {
var t = !1;
if (this.customInitializer) try {
this.customInitializer.toString(), t = !0;
} catch (e) {
t = !1;
}
t ? this.customInitializer.call(this, e) : this.port = e || chrome.runtime.connect();
}
return e.prototype.onMessage = function(e) {
this.port.onMessage.addListener(function(t) {
e(t);
});
}, e.prototype.onDisconnect = function(e) {
var t = this;
this.port.onDisconnect.addListener(function() {
e(t);
});
}, e.prototype.postMessage = function(e) {
this.port.postMessage(e);
}, e.prototype.disconnect = function() {
this.port.disconnect();
}, e;
}(), e("ChromePlatformPort", i), e("default", o);
}
};
}), System.register("app/ext/safari/safariopaquetab", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e(e) {
this.id = e.__feederId, this.__tab = e;
}
return e;
}(), e("default", n);
}
};
}), System.register("app/ext/safari/ui", [ "app/ext/safari/safariopaquetab", "app/backend/config" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e() {
this.tabGUID = 1, this.Notifications = new r(), safari.application.addEventListener("activate", this.onTabChangedState.bind(this), !0), 
safari.application.addEventListener("open", this.onTabChangedState.bind(this), !0), 
safari.application.addEventListener("navigate", this.onTabChangedState.bind(this), !0), 
this.__tabImages = {}, this.__tabImageUrls = {};
}
return e.prototype.createOpaqueTab = function(e) {
return new n.default(e);
}, e.prototype.onTabChangedState = function(e) {
var t = e.target;
t.activeTab && (t = t.activeTab), this.__ensureId(t), this.__tabImages[t.__feederId] && this.__tabImageUrls[t.__feederId] == t.url ? this.setBadgeIcon(this.__tabImages[t.__feederId], t.__feederId) : this.setBadgeIcon(o.default.icon.standard, t.__feederId);
}, e.prototype.openTab = function(e) {
var t = safari.application.activeBrowserWindow.openTab();
t.url = e, this.__ensureId(t);
}, e.prototype.closeTab = function(e) {
this.__getNativeTab(e).close();
}, e.prototype.onTabRemoved = function(e) {
var t = this;
e._uiWrapped = function(n) {
"close-tab" === n.command && e(t._getTabSync(n.target));
}, safari.application.addEventListener("command", e._uiWrapped, !1);
}, e.prototype.removeOnTabRemoved = function(e) {
safari.application.removeEventListener("command", e._uiWrapped, !1);
}, e.prototype.setBadge = function(e) {
safari.extension.toolbarItems.forEach(function(t) {
t.badge = parseInt(e, 10);
});
}, e.prototype.setBadgeIcon = function(e, t) {
var n = !1;
void 0 !== t && (n = this._getTabSync(t)) && (this.__tabImages[n.id] = e, this.__tabImageUrls[n.id] = this.__getNativeTab(t).url), 
this.currentTab().then(function(o) {
n && o.id != t || safari.extension.toolbarItems.forEach(function(t) {
t.image = e;
});
});
}, e.prototype.currentTab = function() {
return Promise.resolve(this.createOpaqueTab(safari.application.activeBrowserWindow.activeTab));
}, e.prototype.tabChangeURL = function(e, t) {
this.__getNativeTab(e).url = t;
}, e.prototype._getTabSync = function(e) {
for (var t, n = 0; t = safari.application.browserWindows[n]; n++) if (t.tabs) for (var o, i = 0; o = t.tabs[i]; i++) if (o.__feederId === e) return this.createOpaqueTab(o);
return !1;
}, e.prototype.getTab = function(e, t) {
t(this._getTabSync(e));
}, e.prototype.__getNativeTab = function(e) {
return this._getTabSync(e).__tab;
}, e.prototype.openPopup = function(e, t) {
var n = window.open(e, "", "width=500,height=400");
t && t(n);
}, e.prototype.setPopupSize = function(e, t) {
safari.extension.popovers[0].width = e, safari.extension.popovers[0].height = t;
}, e.prototype.closePopup = function() {
safari.extension.popovers[0].hide();
}, e.prototype.activateTab = function(e) {
var t = this.__getNativeTab(e);
t && t.activate();
}, e.prototype.showPopup = function() {
safari.extension.toolbarItems.forEach(function(e) {
e.showPopover();
});
}, e.prototype.__ensureId = function(e) {
return void 0 === e.__feederId && (e.__feederId = this.tabGUID++), e;
}, e.prototype.queryTabsByRegex = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n = this;
return __generator(this, function(o) {
return t = [], safari.application.browserWindows.forEach(function(e) {
e.tabs.forEach(function(e) {
t.push({
id: n.__ensureId(e).__feederId,
url: e.url
});
});
}), [ 2, t.filter(function(t) {
return e.test(t.url);
}) ];
});
});
}, e.prototype.executeScriptInTab = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var n;
return __generator(this, function(o) {
return n = this.__getNativeTab(e), n && n.page.dispatchMessage("safari:runScript", {
script: t
}), [ 2, null ];
});
});
}, e;
}(), r = function() {
function e() {
this.image = "/icons/icon48x48.png", this.duration = 15e3;
}
return e.prototype.can = function() {
return window.webkitNotifications ? 0 === window.webkitNotifications.checkPermission() : "undefined" != typeof browser || void 0 !== window.Notification && "granted" === window.Notification.permission;
}, e.prototype.ask = function(e) {
e = e || function() {}, window.webkitNotifications ? window.webkitNotifications.requestPermission(e) : void 0 !== window.Notification ? window.Notification.requestPermission(e) : e();
}, e.prototype.show = function(e, t, n) {
function o() {
"function" == typeof i.cancel ? i.cancel() : "function" == typeof i.close && i.close();
}
void 0 === n && (n = {}), n.link = n.link || function() {}, n.keepAlive = n.keepAlive || !1;
var i;
if (window.webkitNotifications) i = window.webkitNotifications.createNotification(this.image, e, t); else {
if (void 0 === window.Notification) return;
i = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: n.keepAlive
});
}
return i && (i.onclick = function() {
window.focus(), n.link && n.link(), o();
}, "function" == typeof i.show && i.show(), setTimeout(function() {
n.keepAlive || o();
}, this.duration)), i;
}, e;
}(), e("default", i);
}
};
}), System.register("app/ext/safari/env", [ "app/ext/platformenv" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this) || this;
return n.DBAdapter = "WebSQLDatabase", n.UI = t, n.events.popover = [], safari.application.addEventListener("message", function(e) {
if ("connect" === e.name) {
var t = new i(e.target, e.message.type);
n.fireCallback("connect", [ t ]);
}
}, !1), n;
}
return __extends(t, e), t.prototype.setInstallListener = function(e) {}, t.prototype.setUninstallUrl = function(e) {}, 
t.prototype.connectToBackground = function() {
var e = new i();
return this.fireCallback("connect", [ e ]), e;
}, t.prototype.onBackgroundConnect = function(e) {
this.makeCallback("connect", e, function(t) {
e(t);
});
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && this.removeCallback("connect", t);
}, t.prototype.onMessage = function(e) {
var t = this, n = this.makeCallback("message", e, function(n) {
var o = n.message;
if (!n.message) return void console.error(n, "did not have message abort :(");
o.type = n.name, e(o, {
tab: t.UI.createOpaqueTab(n.target)
});
});
safari.application.addEventListener("message", n, !1);
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && (this.removeCallback("message", t), safari.application.removeEventListener("message", t, !1));
}, t.prototype.onPopoverVisible = function(e) {
var t = this.makeCallback("popover", e, function() {
e();
});
safari.application.addEventListener("popover", t, !0);
}, t.prototype.removePopoverVisible = function(e) {
var t = this.getCallback("popover", e);
t && (this.removeCallback("popover", t), safari.application.removeEventListener("popover", t, !1));
}, t.prototype.sendMessageToTab = function(e, t, n) {
n.type = t, this.UI.__getNativeTab(e).page.dispatchMessage(t, n);
}, t;
}(n.default), i = function() {
function e(e, t) {
e && t && (this.tab = e, this.type = t, this.boundDisconnect = this.disconnect.bind(this), 
this.boundNavigateAwayEventListener = this.addNavigateAwayEventListener.bind(this), 
this.tab.addEventListener("close", this.boundDisconnect, !1), this.tab.addEventListener("navigate", this.boundNavigateAwayEventListener, !1)), 
this.messageListeners = [], this.disconnectListeners = [];
}
return e.prototype.onMessage = function(e) {
this.tab || this.messageListeners.push(e);
}, e.prototype.onDisconnect = function(e) {
this.disconnectListeners.push(e);
}, e.prototype.postMessage = function(e) {
if (this.tab) e.name == this.type && this.tab.page && this.tab.page.dispatchMessage(this.type, e); else for (var t, n = 0; t = this.messageListeners[n]; n++) t(e, this);
}, e.prototype.disconnect = function() {
for (var e, t = 0; e = this.disconnectListeners[t]; t++) e(this);
this.tab && (this.tab.removeEventListener("close", this.boundDisconnect, !1), this.tab.removeEventListener("navigate", this.boundDisconnect, !1), 
this.tab.removeEventListener("navigate", this.boundNavigateAwayEventListener, !1));
}, e.prototype.addNavigateAwayEventListener = function() {
this.tab.addEventListener("navigate", this.boundDisconnect, !1), this.tab.removeEventListener("navigate", this.boundNavigateAwayEventListener, !1);
}, e;
}(), e("default", o);
}
};
}), System.register("app/ext/online/env", [ "app/ext/platformenv" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.DBAdapter = "APIDatabase", t;
}
return __extends(t, e), t.prototype.setInstallListener = function(e) {}, t.prototype.setUninstallUrl = function(e) {}, 
t.prototype.connectToBackground = function() {
var e = new i();
return this.fireCallback("connect", [ e ]), e;
}, t.prototype.onBackgroundConnect = function(e) {
this.makeCallback("connect", e, function(t) {
e(t);
});
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && this.removeCallback("connect", t);
}, t.prototype.onMessage = function(e) {
this.makeCallback("message", e, function(t, n) {
e(t, n);
});
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && this.removeCallback("message", t);
}, t.prototype.sendMessageToTab = function(e, t, n) {}, t.prototype.onPopoverVisible = function(e) {}, 
t.prototype.removePopoverVisible = function(e) {}, t;
}(n.default), i = function() {
function e() {
this.messageListeners = [], this.disconnectListeners = [];
}
return e.prototype.onMessage = function(e) {
this.messageListeners.push(e);
}, e.prototype.onDisconnect = function(e) {
this.disconnectListeners.push(e);
}, e.prototype.postMessage = function(e) {
var t = this;
this.messageListeners.forEach(function(n) {
n(e, t);
});
}, e.prototype.disconnect = function() {
var e = this;
this.disconnectListeners.forEach(function(t) {
t(e);
});
}, e;
}(), e("default", o);
}
};
}), System.register("app/ext/chrome/ui", [], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.Notifications = new o();
}
return e.prototype.activateTab = function(e) {
chrome.tabs.update(e, {
active: !0
});
}, e.prototype.openTab = function(e) {
chrome.tabs.create({
url: e
}, function(e) {});
}, e.prototype.closeTab = function(e) {
chrome.tabs.remove(e);
}, e.prototype.onTabRemoved = function(e) {
chrome.tabs.onRemoved.addListener(e);
}, e.prototype.removeOnTabRemoved = function(e) {
chrome.tabs.onRemoved.removeListener(e);
}, e.prototype.setBadge = function(e) {
chrome.browserAction.setBadgeText({
text: e.toString()
});
}, e.prototype.setBadgeIcon = function(e, t) {
var n = {
path: e
};
t && (n.tabId = t), chrome.browserAction.setIcon(n);
}, e.prototype.currentTab = function() {
return new Promise(function(e, t) {
try {
chrome.tabs.query({
active: !0,
currentWindow: !0
}, function(t) {
e(t[0] || {
id: 0
});
});
} catch (t) {
chrome.tabs.getSelected(null, function(t) {
e(t || {
id: 0
});
});
}
});
}, e.prototype.tabChangeURL = function(e, t) {
chrome.tabs.update(e, {
url: t
});
}, e.prototype.getTab = function(e, t) {
chrome.tabs.get(e, function(e) {
t({
url: e.url,
title: e.title
});
});
}, e.prototype.openPopup = function(e, t) {
var n = window.open(e, "", "width=500,height=400");
t && t(n);
}, e.prototype.getIntentFeedURL = function() {
return !1;
}, e.prototype.setPopupSize = function(e, t) {}, e.prototype.closePopup = function() {}, 
e.prototype.showPopup = function() {}, e.prototype.queryTabsByRegex = function(e) {
return new Promise(function(t) {
chrome.tabs.query({}, function(n) {
var o = n.map(function(e) {
return {
id: e.id,
url: e.url
};
});
t(o.filter(function(t) {
return e.test(t.url);
}));
});
});
}, e.prototype.executeScriptInTab = function(e, t) {
return new Promise(function(n) {
chrome.tabs.executeScript(e, {
code: t
}, function(e) {
n(e);
});
});
}, e;
}(), o = function() {
function e() {
var e = this;
this.image = "/icons/icon48x48.png", this.duration = 1e4, this.clickCallbacks = {}, 
"undefined" != typeof browser && (browser.notifications.onClicked.addListener(function(t) {
e.clickCallbacks[t] && e.clickCallbacks[t](), browser.notifications.clear(t), delete e.clickCallbacks[t];
}), browser.notifications.onClosed.addListener(function(t) {
delete e.clickCallbacks[t];
}));
}
return e.prototype.can = function() {
return window.webkitNotifications ? 0 === window.webkitNotifications.checkPermission() : "undefined" != typeof browser || void 0 !== window.Notification && "granted" === window.Notification.permission;
}, e.prototype.ask = function(e) {
e = e || function() {}, window.webkitNotifications ? window.webkitNotifications.requestPermission(e) : void 0 !== window.Notification ? window.Notification.requestPermission(e) : e();
}, e.prototype.show = function(e, t, n) {
function o() {
"function" == typeof i.cancel ? i.cancel() : "function" == typeof i.close && i.close();
}
void 0 === n && (n = {}), n.link = n.link || function() {}, n.keepAlive = n.keepAlive || !1;
var i;
if (window.webkitNotifications) i = window.webkitNotifications.createNotification(this.image, e, t); else if ("undefined" != typeof browser) {
var r = Date.now() + "-" + Math.random();
browser.notifications.create(r, {
type: "basic",
title: e,
message: t,
iconUrl: this.image
}), this.clickCallbacks[r] = function() {
n.link && n.link();
};
} else {
if ("undefined" == typeof Notification) return;
i = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: n.keepAlive
});
}
return i && (i.onclick = function() {
window.focus(), n.link && n.link(), o();
}, "function" == typeof i.show && i.show(), setTimeout(function() {
n.keepAlive || o();
}, this.duration)), i;
}, e;
}(), e("default", n);
}
};
}), System.register("app/ext/online/ui", [], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.Notifications = new o();
}
return e.prototype.openTab = function(e) {
window.open(e);
}, e.prototype.closeTab = function(e) {}, e.prototype.onTabRemoved = function(e) {}, 
e.prototype.removeOnTabRemoved = function(e) {}, e.prototype.setBadge = function(e) {}, 
e.prototype.setBadgeIcon = function(e, t) {}, e.prototype.currentTab = function() {
return Promise.resolve({
id: 1
});
}, e.prototype.tabChangeURL = function(e, t) {}, e.prototype.getTab = function(e, t) {
t({
id: e
});
}, e.prototype.openPopup = function(e, t) {
var n = window.open(e, "", "width=500,height=400");
t && t(n);
}, e.prototype.setPopupSize = function(e, t) {}, e.prototype.closePopup = function() {}, 
e.prototype.showPopup = function() {}, e.prototype.activateTab = function(e) {}, 
e.prototype.queryTabsByRegex = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, [] ];
});
});
}, e.prototype.executeScriptInTab = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, e;
}(), o = function() {
function e() {
this.image = "https://s3-eu-west-1.amazonaws.com/feeder-static/logo/icon48x48.png", 
this.duration = 15e3;
}
return e.prototype.can = function() {
return void 0 !== window.Notification && "granted" == window.Notification.permission;
}, e.prototype.ask = function(e) {
void 0 !== window.Notification ? window.Notification.requestPermission(e || function() {}) : e && e();
}, e.prototype.show = function(e, t, n) {
void 0 === n && (n = {}), n.keepAlive = n.keepAlive || !1;
var o = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: n.keepAlive
});
o.onclick = function() {
window.focus(), n.link && n.link(), o.close();
}, setTimeout(function() {
n.keepAlive || o.close();
}, this.duration);
}, e;
}(), e("default", n);
}
};
}), System.register("app/ext/platform", [ "app/ext/ext", "app/ext/chrome/env", "app/ext/safari/env", "app/ext/online/env", "app/ext/chrome/ui", "app/ext/safari/ui", "app/ext/online/ui" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
} ],
execute: function() {
l = function() {
function e() {
if (n.default.isChrome()) this.name = "chrome", this.env = new o.default(), this.UI = new s.default(); else if (n.default.isSafari()) {
var e = new a.default();
this.name = "safari", this.UI = e, this.env = new i.default(e);
} else n.default.isOnline() && (this.name = "online", this.env = new r.default(), 
this.UI = new c.default());
}
return e;
}(), e("PlatformContainer", l);
}
};
}), System.register("client/appglobals", [ "app/backend/config", "app/ext/ext" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
e("Config", n.default), e("Ext", o.default), i = o.default.getBackgroundPage().app, 
e("app", i), r = o.default.getBackgroundPage().analytics, e("analytics", r), s = o.default.getBackgroundPage().UI, 
e("UI", s), a = o.default.getBackgroundPage().Platform, e("Platform", a);
}
};
}), System.register("client/pui/component", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {}
return e;
}(), e("default", n);
}
};
}), System.register("client/pui/modal", [ "jquery", "client/pui/component", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t() {
var t = e.call(this) || this;
return t.isDestroyed = !1, t.parent = n.default(document.body), t.makeContainer(), 
t;
}
return __extends(t, e), t.onGlobalKeyDown = function(e) {
return !(!t.currentModal || 13 !== e.keyCode) && (e.stopPropagation(), e.preventDefault(), 
t.currentModal.destroy(), t.currentModal = null, !0);
}, t.prototype.destroy = function() {
this.isDestroyed || (n.default(document.body).css("height", ""), this.isDestroyed = !0, 
this.outerContainer.remove(), this.onDestroy());
}, t.prototype.onDestroy = function() {}, t.prototype.onContainerClick = function() {}, 
t.prototype.makeContainer = function() {
var e = this;
this.outerContainer = n.default("<div></div>").addClass("pui-modal-outer").appendTo(this.parent), 
this.container = n.default("<div></div>").addClass("pui-modal").appendTo(this.outerContainer), 
this.outerContainer.on("click", function(t) {
t.target === e.outerContainer[0] && (t.preventDefault(), e.onContainerClick());
}), this.outerContainer.on("click", ".side-close", function(t) {
t.preventDefault(), e.onContainerClick();
});
}, t.prototype.show = function() {
this.outerContainer.show(), this.didResize();
}, t.prototype.setText = function(e) {
var t = this;
this.container.find(".pui-alert-text").html(e.replace(/\n/g, "<br>")).on("click", "a", function(e) {
i.Ext.isOnline() || (e.preventDefault(), t.href && i.UI.openTab(t.href));
});
}, t.prototype.didResize = function() {
var e = this.container.prop("scrollHeight"), t = n.default(document.body).height();
n.default(document.body).height(Math.max(e, t));
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/pui/alert", [ "jquery", "client/pui/modal" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o, i) {
void 0 === o && (o = "Okay"), void 0 === i && (i = !1);
var r = e.call(this) || this;
return r.onClick = r.onClick.bind(r), r.onCancel = r.onCancel.bind(r), r.container.addClass("pui-alert"), 
r.container.append(n.default('<div class="pui-alert-text"></div>')), i && r.container.append(n.default('<div class="button--secondary button--100 pui-alert-cancel"></div>').text(i).click(r.onCancel)), 
r.container.append(n.default('<div class="button--primary button--100"></div>').text(o).click(r.onClick)), 
n.default("body").addClass("pui-modal-confirm"), r.setText(t), r;
}
return __extends(t, e), t.alert = function(e, n) {
var i = new t(e);
return i.okCallback = n, i.show(), o.default.currentModal = i, i;
}, t.alertWithButtons = function(e, n, i, r) {
void 0 === n && (n = "Okay"), void 0 === i && (i = !1);
var s = new t(e, n, i);
return s.okCallback = r, s.show(), o.default.currentModal = s, s;
}, t.alertLoader = function(e) {
var n = new t(e);
return n.container.addClass("pui-loading"), n.show(), n;
}, t.alertError = function(e) {
self.alert(e + "\nIf the problem persists, visit <a href='https://feeder.co/support' target=_blank>support</a>");
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), n.default("body").removeClass("pui-modal-confirm"), 
this.okCallback && this.okCallback();
}, t.prototype.onClick = function() {
this.destroy(), this.yesCallback && this.yesCallback();
}, t.prototype.onCancel = function() {
this.destroy(), this.cancelCallback && this.cancelCallback();
}, t.prototype.ok = function(e) {
return this.okCallback = e, this;
}, t.prototype.yes = function(e) {
return this.yesCallback = e, this;
}, t.prototype.no = function(e) {
return this.cancelCallback = e, this;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/backend-imports", [ "app/ext/ext", "app/backend/config" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p, d, h, f, m;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
e("Config", o.default), i = n.default.getBackgroundPage(), r = i.Model, e("Model", r), 
s = i.Feed, e("Feed", s), a = i.FeedOnlyUnread, e("FeedOnlyUnread", a), c = i.FeedOnlyStarred, 
e("FeedOnlyStarred", c), l = i.PostFetcher, e("PostFetcher", l), u = i.Folder, e("Folder", u), 
p = i.Post, e("Post", p), d = i.Import, e("Import", d), h = i.Application, e("Application", h), 
f = i.Analytics, e("Analytics", f), m = i.UserMessage, e("UserMessage", m);
}
};
}), System.register("client/eventlistener", [ "client/appglobals" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function() {
function e(e) {
var t = this;
this.listeners = {}, this.simpleListeners = {}, this.disable = !1, this.onUnload = function() {
t.port.disconnect(), t.listeners = {}, t.simpleListeners = {};
}, this.onMessage = this.onMessage.bind(this), this.element = e, this.port = n.Platform.env.connectToBackground(), 
this.port.onMessage(this.onMessage), window.addEventListener("unload", this.onUnload, !1);
}
return e.prototype.destroy = function() {
this.port.disconnect(), window.removeEventListener("unload", this.onUnload, !1);
}, e.prototype.onMessage = function(e) {
if (!this.disable) {
var t = e.name.replace(/(:\w)/, function(e) {
return e.charAt(1).toUpperCase();
});
if (this.fireSimpleEvent(e.name, e), "function" == typeof this[t]) {
var o = {};
e.feed && (o.feed = n.app.store.feed(e.feed)), e.folder && (o.folder = n.app.store.folder(e.folder)), 
e.post && (o.post = n.app.store.post(e.post)), this[t](o);
}
}
}, e.prototype.feedUpdated = function(e) {
this.fireEvent("feed", e.feed);
}, e.prototype.feedAdded = function(e) {}, e.prototype.feedRemoved = function(e) {}, 
e.prototype.postUpdated = function(e) {
this.fireEvent("post", e.post);
}, e.prototype.folderUpdated = function(e) {
this.fireEvent("folder", e.folder);
}, e.prototype.listen = function(e, t) {
this.simpleListeners[e] || (this.simpleListeners[e] = []), this.simpleListeners[e].push(t);
}, e.prototype.unlisten = function(e, t) {
this.simpleListeners[e] && this.simpleListeners[e].remove(t);
}, e.prototype.fireSimpleEvent = function(e, t) {
this.simpleListeners[e] && this.simpleListeners[e].forEach(function(e) {
e(t);
});
}, e.prototype.fireEvent = function(e, t) {
t && this.listeners[e] && this.listeners[e][t.id] && this.listeners[e][t.id].forEach(function(e) {
e(t);
});
}, e.prototype.addModelListener = function(e, t) {
e.id && (this.listeners[e.mapperName] || (this.listeners[e.mapperName] = {}), this.listeners[e.mapperName][e.id] || (this.listeners[e.mapperName][e.id] = []), 
this.listeners[e.mapperName][e.id].push(t));
}, e.prototype.removeModelListener = function(e, t) {
e && e.id && this.listeners[e.mapperName] && this.listeners[e.mapperName][e.id] && this.listeners[e.mapperName][e.id].remove(t);
}, e.prototype.send = function(e, t) {
if (void 0 === window.CustomEvent) {
var n;
document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), 
n.eventType = e), n.eventName = e;
for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
return void (document.createEvent ? this.element.dispatchEvent(n) : this.element.fireEvent("on" + n.eventType, n));
}
var n = new CustomEvent(e, t);
n.initCustomEvent(e, !0, !0, t), this.element.dispatchEvent(n);
}, e;
}(), e("default", o);
}
};
}), System.register("client/pui/confirm", [ "jquery", "client/pui/modal" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o) {
var i = e.call(this) || this;
return i.keydown = i.keydown.bind(i), i.container.addClass("pui-confirm"), o.length > 2 && i.container.addClass("many-buttons"), 
i.container.append(n.default('<div class="pui-confirm-text"></div>').html(t.replace(/\n/g, "<br>"))), 
n.default("body").addClass("pui-modal-confirm"), o.forEach(function(e, t) {
var r = t === o.length - 1;
n.default('<div class="pui-button ' + (r ? "confirm" : "") + '"></div>').text(e.text).click(function(t) {
i.destroy(), e.callback();
}).appendTo(i.container);
}), n.default(window).on("keydown", i.keydown), i;
}
return __extends(t, e), t.confirm = function(e, n, o) {
void 0 === n && (n = "Yes"), void 0 === o && (o = "No");
var i = new t(e, [ {
text: o,
callback: function() {
i.noCallback && i.noCallback();
}
}, {
text: n,
callback: function() {
i.yesCallback && i.yesCallback();
}
} ]);
return i.show(), i;
}, t.asyncConfirm = function(e, n) {
return new Promise(function(o, i) {
var r = new t(e, n.map(function(e) {
return {
text: e.text,
callback: function() {
o(e.value);
}
};
}));
return r.show(), r;
});
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), n.default("body").removeClass("pui-modal-confirm"), 
n.default(window).off("keydown", this.keydown);
}, t.prototype.keydown = function(e) {
13 === e.keyCode && this.yesClick();
}, t.prototype.yesClick = function() {
this.destroy(), this.yesCallback && this.yesCallback();
}, t.prototype.noClick = function() {
this.destroy(), this.noCallback && this.noCallback();
}, t.prototype.yes = function(e) {
return this.yesCallback = e, this;
}, t.prototype.no = function(e) {
return this.noCallback = e, this;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/data", [ "jquery", "client/backend-imports", "client/appglobals" ], function(e, t) {
"use strict";
function n(e, t) {
var n = e.split(" "), o = n.shift(), i = n.join(" ");
if (!o) throw new Error("Invalid datahook definition: " + e);
l[o] || (l[o] = []), l[o].push({
selector: i,
func: t
});
}
function o(e, t) {
u[e] = t;
}
function i(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, u[e.mapperName](e) ];
});
});
}
var r, s, a, c, l, u;
t && t.id;
return e("dataHook", n), e("translateHook", o), e("toTemplate", i), {
setters: [ function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
c = function() {
function e(e, t) {
this.variables = {}, this.data = {}, this.ui = {}, this.vc = e, this.modelChanged = this.modelChanged.bind(this), 
t && this.addFromElement(t);
}
return e.prototype.destroy = function() {
this.model && this.vc.listener.removeModelListener(this.model, this.modelChanged);
}, e.prototype.addFromElement = function(e) {
this.element = e, e.store = this;
for (var t = e.querySelectorAll("[data]"), n = 0, o = void 0; o = t[n]; n++) this.add(o);
}, e.prototype.add = function(e) {
for (var t, n = (e.getAttribute("data") || "").split(";"), o = 0; t = n[o]; o++) {
var i = t.split(":");
this.variables[i[0]] = {
el: e,
attr: i[1]
};
}
}, e.prototype.set = function(e, t) {
this.data[e] = t, "htmlClass" === e && this.element && (this.element.className += " " + t);
var n = this.variables[e];
if (n) {
var o = n.el;
if ("text" == n.attr) r.default(o).text(t); else if ("html" == n.attr) r.default(o).html(t); else if ("background-image" == n.attr) r.default(o).css("background-image", "url(" + t + ")"); else if ("src-on-load" == n.attr) {
var i = function() {
window.removeEventListener("load", s, !1);
var e = new Image();
e.onload = function() {
o.setAttribute("src", t), delete e.onload, delete e.onerror;
}, e.onerror = function() {
o.setAttribute("src", t), delete e.onload, delete e.onerror;
}, e.src = t;
}, s = function() {
setTimeout(function() {
return i();
}, 50);
};
a.Ext.isChrome() ? window.isLoadedDone ? o.setAttribute("src", t) : window.isLoaded ? setTimeout(function() {
return i();
}, 50) : window.addEventListener("load", s, !1) : o.setAttribute("src", t);
} else o.setAttribute(n.attr, t);
var c = document.createEvent("HTMLEvents");
c.initEvent("data:change", !0, !0), o.dispatchEvent(c), this.runHook(o, e, t);
}
}, e.prototype.runHook = function(e, t, n) {
if (l[t]) {
var o = r.default(e);
l[t].forEach(function(t) {
o.is(t.selector) && t.func(n, e);
});
}
}, e.prototype.setModel = function(e) {
return this.model = e, this.vc.listener.addModelListener(e, this.modelChanged), 
this.setFromModel();
}, e.prototype.setFromModel = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
if (!this.model) throw new Error("Could not call setFromModel without model.");
return [ 4, i(this.model) ];

case 1:
return e = t.sent(), this.setMany(e), [ 2 ];
}
});
});
}, e.prototype.setMany = function(e) {
if (e instanceof s.Model) return this.setModel(e);
for (var t in e) e.hasOwnProperty(t) && this.set(t, e[t]);
return Promise.resolve();
}, e.prototype.get = function(e) {
return this.data[e];
}, e.prototype.modelChanged = function(e) {
this.model = e, this.setFromModel();
}, e;
}(), l = {}, u = {}, e("default", c);
}
};
}), System.register("client/pui/events", [ "jquery", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e(e, t) {
this.paused = !1, this.element = e, this.callbackObject = t;
}
return e.prototype.pause = function() {
this.paused, this.paused = !0;
}, e.prototype.unpause = function() {
this.paused = !1;
}, e.prototype.add = function(e) {
for (var t in e) e.hasOwnProperty(t) && this.addEvent(t, e[t]);
}, e.prototype.addEvent = function(t, i) {
function r(e, t) {
l ? u.on(e, l, t) : u.on(e, t);
}
var s = this, a = t.split(" "), c = a.shift() || "", l = a.join(" "), u = n.default(this.element), p = {};
if ("click-or-touch" === c && (c = o.Ext.isMobile() ? "touchend" : "click", o.Ext.isMobile())) {
r("touchstart", function() {
function t() {
e.metaObj.abort = !0;
}
function o() {
n.default(window).off("touchmove", t).off("touchend", o);
}
n.default(window).on("touchmove", t).on("touchend", o).on("scroll", o);
});
}
r(c, this.delegateEventFor(function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
var n;
return (n = s.callbackObject)[i].apply(n, e);
}, i, c, p));
}, e.prototype.delegateEventFor = function(t, n, o, i) {
var r = this;
if ("function" != typeof t) throw new Error("event callback method not found: " + n);
return function(n) {
if ("click" !== o && "touchend" !== o || n.preventDefault(), !0 === e.metaObj.abort) return n.stopPropagation(), 
void (e.metaObj.abort = !1);
if (r.paused) return void console.log("event happened when paused");
var i = n;
if (i.item = r.fetchDataStoreFromEvent(n), i.originalEvent && i.originalEvent.detail) for (var s in i.originalEvent.detail) i.originalEvent.detail.hasOwnProperty(s) && (i[s] = i.originalEvent.detail[s]);
t(i);
};
}, e.prototype.fetchDataStoreFromEvent = function(e) {
var t = e.target;
do {
if (t.store) return t.store;
} while (t = t.parentElement);
return this.callbackObject.template.data;
}, e.metaObj = {
abort: !1
}, e;
}(), e("default", i);
}
};
}), System.register("client/pui/linkqueue", [ "jquery", "client/pui/component", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var o = e.call(this) || this;
return o.queue = [], o.listeners = [], o.element = n.default(t), o.closeElement = o.element.find(".close"), 
o.numElement = o.element.find(".num"), o.pluralElement = o.element.find(".one"), 
o.setCount(), o.closeElement.on("click", function(e) {
return o.closeClick(e);
}), o.element.on("click", function(e) {
return o.pump();
}), o;
}
return __extends(t, e), t.prototype.destroy = function() {
delete this.element, delete this.closeElement, delete this.numElement, delete this.pluralElement, 
this.listeners = [];
}, t.prototype.setListener = function(e) {
this.listeners.push(e);
}, t.prototype.removeListener = function(e) {
this.listeners.remove(e);
}, t.prototype.toggle = function(e) {
return this.queue.contains(e) ? this.remove(e) : this.add(e);
}, t.prototype.add = function(e) {
return !this.queue.contains(e) && (this.queue.push(e), this.setCount(), this.fireListener(e, !0), 
!0);
}, t.prototype.remove = function(e) {
return this.queue.remove(e), this.setCount(), this.fireListener(e, !1), !1;
}, t.prototype.fireListener = function(e, t) {
this.listeners.forEach(function(n) {
n(e, t);
});
}, t.prototype.setCount = function() {
this.numElement.text(this.queue.length), 1 === this.queue.length ? this.pluralElement.hide() : this.pluralElement.show(), 
0 === this.queue.length ? this.element.hide() : this.element.show(), n.default(document.body).toggleClass("in-queue", !!this.queue.length);
}, t.prototype.contains = function(e) {
return this.queue.contains(e);
}, t.prototype.closeClick = function(e) {
e.preventDefault(), e.stopPropagation(), this.close();
}, t.prototype.close = function() {
var e = this;
this.queue.slice(0).forEach(function(t) {
e.remove(t);
}), this.queue = [];
}, t.prototype.pump = function() {
if (!this.isEmpty()) {
var e = this.queue.slice(0);
this.close(), i.app.ui.openManyById(e);
}
}, t.prototype.isEmpty = function() {
return !this.queue.length;
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/pui/prompt", [ "jquery", "client/pui/confirm" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var o = e.call(this, t, [ {
text: "Cancel",
callback: function() {
o.noCallback && o.noCallback();
}
}, {
text: "OK",
callback: function() {
o.yesCallback && o.yesCallback();
}
} ]) || this;
o.container.addClass("pui-confirm");
var i = o.container.find(".pui-confirm-text");
return o.input = n.default('<div class="pui-prompt-text"><input type="text" /></div>').insertAfter(i).find("input"), 
o.input.on("keydown", function(e) {
return o.onKeyDown(e);
}), o;
}
return __extends(t, e), t.prompt = function(e) {
var n = new t(e);
return n.show(), n;
}, t.prototype.onKeyDown = function(e) {
13 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.input.val().length > 0 && this.yesClick());
}, t.prototype.show = function() {
e.prototype.show.call(this), this.input.focus();
}, t.prototype.yesClick = function() {
this.destroy(), this.promptCallback && this.promptCallback(this.input.val());
}, t.prototype.done = function(e) {
this.promptCallback = e;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/screenmodal", [ "client/pui/modal" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this) || this;
return n.autoWidth = !1, n.canClose = !0, n.translucent = !1, n.white = !1, n.factory = t, 
n;
}
return __extends(t, e), t.prototype.show = function() {
e.prototype.show.call(this), this.instance = this.factory(), this.instance.modal = this, 
this.container.append(this.instance.template.container), this.autoWidth && this.container.addClass("auto-width"), 
this.translucent && this.container.addClass("translucent"), this.white && (this.container.addClass("white"), 
this.outerContainer.addClass("white")), this.instance.onVisible();
}, t.prototype.onContainerClick = function() {
this.canClose && (e.prototype.destroy.call(this), this.destroy());
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/pui/twophasemodal", [ "jquery", "client/pui/component" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var o = e.call(this) || this;
return o.setupSizes = o.setupSizes.bind(o), o.el = n.default(t), o.setupSizes(), 
n.default(window).on("resize", o.setupSizes), o;
}
return __extends(t, e), t.prototype.destroy = function() {
n.default(window).off("resize", this.setupSizes);
}, t.prototype.setupSizes = function() {
var e = this.el.width();
if (this.el.find(".phase").width(e), void 0 !== this.activePage) {
var t = e * this.activePage;
this.el.find(".two-phase-modal-inner").css("margin-left", -t);
}
}, t.prototype.gotoPage = function(e) {
this.activePage = e, this.setupSizes();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/pui", [ "client/pui/alert", "client/pui/confirm", "client/pui/events", "client/pui/linkqueue", "client/pui/modal", "client/pui/prompt", "client/pui/screenmodal", "client/pui/twophasemodal" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
} ],
execute: function() {
u = {
Alert: n.default,
Confirm: o.default,
Events: i.default,
LinkQueue: r.default,
Modal: s.default,
Prompt: a.default,
ScreenModal: c.default,
TwoPhaseModal: l.default,
get: function(e) {
return this[e];
}
}, e("default", u);
}
};
}), System.register("client/pui/template", [ "jquery", "client/pui/pui", "client/pui/data" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function() {
function e(e, t) {
if (void 0 === t && (t = {}), this.root = document.getElementById(e), !this.root) throw new Error(e + " template not found");
this.makeContainer(t), this.prepare(), this.stores = [], this.many = {}, this.element = n.default(this.container);
}
return e.prototype.destroy = function() {
this.many = {}, this.data && this.data.destroy(), this.stores.forEach(function(e) {
e.destroy();
}), this.container.parentNode && this.container.parentNode.removeChild(this.container);
}, e.prototype.prepareVariables = function(e) {
this.data = new i.default(e), this.vc = e;
for (var t = this.container.querySelectorAll("[data]"), n = 0, o = void 0; o = t[n]; n++) this.addVariableFromElement(o);
for (var r = this.container.querySelectorAll("[many]"), n = 0, o = void 0; o = r[n]; n++) this.addManyFromElement(o);
}, e.prototype.getComponents = function(e) {
for (var t = (e || this.container).querySelectorAll("[pui]"), n = {}, i = 0, r = void 0; r = t[i]; i++) {
var s = (r.getAttribute("key") || "").replace(/(-\w)/g, function(e) {
return e.charAt(1).toUpperCase();
}), a = o.default.get(r.getAttribute("pui") || "");
if (!a) throw new Error("Could not find component for " + s);
n[s] = new a(r);
}
return n;
}, e.prototype.getControllers = function() {
var e = this;
this.controllers = {};
var t = this.container.querySelectorAll("controller");
return [].slice.call(t).forEach(function(t) {
e.parseController(t);
}), this.controllers;
}, e.prototype.addVariableFromElement = function(e) {
e.getParents().some(function(e) {
return "string" == typeof e.getAttribute("many");
}) || this.data.add(e);
}, e.prototype.addManyFromElement = function(e) {
var t = document.createElement("div");
t.className = "placeholder", e.parentNode && e.parentNode.replaceChild(t, e);
var n = e.getAttribute("many");
if (!n) throw new Error('Trying to parse "many" key with empty attribute.');
this.many[n] = {
reference: e,
placeholder: t
};
}, e.prototype.makeContainer = function(e) {
function t(e, t, n) {
"class" === t ? e.className = (e.className + " " + n).trim() : e.setAttribute(t, n);
}
void 0 === e && (e = {});
var n = this.root ? this.root.getAllAttributes() : {};
if (this.container = document.createElement("div"), this.temp = document.createElement("tmp"), 
this.root && (this.temp.innerHTML = this.root.innerHTML), n.id.contains("screen#") ? (this.innerContainer = document.createElement("div"), 
this.container.appendChild(this.innerContainer)) : this.innerContainer = this.container, 
delete e.from, n.id) {
var o = "tpl-" + n.id.replace("#", "-");
n.class = n.class ? n.class + " " + o : o, delete n.id;
}
for (var i = 0, r = Object.keys(e); i < r.length; i++) {
var s = r[i];
t(this.container, s, e[s]);
}
for (var a = 0, c = Object.keys(n); a < c.length; a++) {
var s = c[a];
t(this.container, s, n[s]);
}
this.innerContainer.cloneChildrenFrom(this.temp);
}, e.prototype.prepare = function() {
this.traverseAndParse(this.container);
}, e.prototype.traverseAndParse = function(e) {
var t = this;
e.forEachElement(function(e) {
t.parseChild(e);
});
}, e.prototype.parseChild = function(e) {
"TPL" === e.tagName ? this.parseTPL(e) : this.traverseAndParse(e);
}, e.prototype.parseTPL = function(t) {
var n = t.getAttribute("from");
if (!n) throw new Error('Trying to parse "from" with empty attribute.');
var o = new e(n, t.getAllAttributes());
t.parentNode ? t.parentNode.replaceChild(o.container, t) : console.error("Parsing template into empty parent.");
}, e.prototype.parseController = function(e) {
var t = e.getAttribute("name");
if (!t) throw new Error('Parsing "name" attribute of controller where empty.');
var n = this.vc.controllerInjector(t);
if (!n) throw new Error("Controller Screen. " + t + " not found");
var o = this.toKey(t), i = new n(this.vc);
this.controllers[o] = i, e.parentNode ? e.parentNode.replaceChild(i.template.container, e) : console.error("Parsing into empty element."), 
i.onVisible();
}, e.prototype.toKey = function(e) {
return e.replace(/^./, function(e) {
return e.toLowerCase();
});
}, e.prototype.set = function(e, t) {
this.data.set(e, t);
}, e.prototype.setItems = function(e, t) {
if (!this.many[e]) throw new Error("Could not set many " + e + ", not found");
this.stores.forEach(function(e) {
e.destroy();
}), this.stores = [];
var n = this.many[e];
n.placeholder.forEachElement(function(e) {
e.store && e.store.destroy();
});
for (var o = document.createDocumentFragment(); t.length; ) this.addItem(e, t.shift(), o);
n.placeholder.clearChildren(), n.placeholder.appendChild(o);
}, e.prototype.addItem = function(e, t, n, o) {
var r = this.many[e], s = r.reference.cloneNode(!0);
this.stores.length % 2 == 1 && (s.className += " odd"), n = n || r.placeholder;
var a = new i.default(this.vc, s);
return a.reference = t, a.setMany(t).then(o), this.stores.push(a), a.ui = this.getComponents(s), 
n.appendChild(s), a;
}, e.prototype.el = function(e) {
return this.element.find(e);
}, e;
}(), e("default", r);
}
};
}), System.register("client/library/keyboard-navigation", [ "jquery" ], function(e, t) {
"use strict";
function n(e) {
return !!i(e) && !!d[e.keyCode];
}
function o(e) {
return !!i(e) && !!h[e.keyCode];
}
function i(e) {
return 0 === u.default(e.target).closest("input, textarea, a").length;
}
function r(e) {
return d[e.keyCode];
}
function s(e) {
return h[e.keyCode];
}
function a(e, t) {
if (!(e.ctrlKey || e.metaKey || e.altKey) && (n(e) || o(e))) {
e.preventDefault();
var i = r(e), a = s(e);
"up" === i ? t.historyPrevious() : "down" === i ? t.historyNext() : "forward" === i ? t.navForward() : "back" === i ? t.navBack() : a && t.performKeyboardAction(a);
}
}
var c, l, u, p, d, h;
t && t.id;
return e("validNavigationEvent", n), e("validActionEvent", o), e("canOverrideKeyboardEvent", i), 
e("eventNavigationDirection", r), e("eventNavigationAction", s), e("onKeyDownEvent", a), 
{
setters: [ function(e) {
u = e;
} ],
execute: function() {
e("KEYS", p = {
BACKSPACE: 8,
ESCAPE: 27,
ENTER: 13,
SPACE: 32,
LEFT: 37,
UP: 38,
RIGHT: 39,
DOWN: 40,
F: 70,
H: 72,
J: 74,
K: 75,
L: 76,
N: 78,
M: 77,
P: 80,
Q: 81,
R: 82,
S: 83,
T: 84
}), e("NAVIGATION_KEYS", (c = {}, c[p.BACKSPACE] = "back", c[p.ENTER] = "forward", 
c[p.SPACE] = "forward", c[p.UP] = "up", c[p.DOWN] = "down", c[p.H] = "back", c[p.J] = "down", 
c[p.K] = "up", c[p.L] = "forward", d = c)), e("KEYBOARD_KEYS", (l = {}, l[p.RIGHT] = "column-next", 
l[p.LEFT] = "column-previous", l[p.S] = "star", l[p.M] = "star", l[p.N] = "read", 
l[p.R] = "read", l[p.F] = "toggle-readability", l[p.ESCAPE] = "close", l[p.Q] = "queue", 
l[p.T] = "next-tab", l[p.P] = "post-collections", h = l));
}
};
}), System.register("client/controller", [ "client/pui/template", "client/pui/events", "client/pui/confirm", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l;
n = this;
t && t.id;
return {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = 20, c = function() {
function e(e) {
this.onDone = !1, this.lastScroll = 0, this.vc = e, this.created = Date.now(), this.template = new o.default(this.templateName()), 
this.template.prepareVariables(this.vc), this.ui = this.template.getComponents(), 
this.event = new i.default(this.template.container, this), this.event.add(this.events()), 
this.addStandardEvents(), this.setupPerfectScrollbar();
}
return e.prototype.destroy = function() {
this.template.destroy();
}, e.prototype.setupPerfectScrollbar = function() {
var e = this, t = this.template.container.querySelector(".page-scroll-container");
t && !s.Ext.isMobile() && (this.perfectScrollbar = new window.PerfectScrollbar(t), 
t.addEventListener("ps-scroll-y", function() {
e.lastScroll = e.getCurrentScroll();
}));
}, e.prototype.onVisible = function() {}, e.prototype.onCurrent = function() {}, 
e.prototype.onOff = function() {}, e.prototype.onPopupVisible = function() {}, e.prototype.onPopupHide = function() {}, 
e.prototype.onFeedConnectChanged = function() {}, e.prototype.navigateTo = function(e) {}, 
e.prototype.navNext = function(e) {}, e.prototype.navPrevious = function(e) {}, 
e.prototype.navForward = function(e) {}, e.prototype.navBack = function() {}, e.prototype.setCurrentNavFromItem = function(e) {}, 
e.prototype.callbackAfterAnimation = function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
this.vc.addAnimationDoneCallback(e, t);
}, e.prototype.addStandardEvents = function() {
this.event.addEvent("click-or-touch .back, .escape", "back"), this.event.addEvent("click .get-feeder-pro", "getFeederPro"), 
this.event.addEvent("click .feeder-online", "openOnline"), this.event.addEvent("click .settings", "openSettingsPage");
}, e.prototype.openOnline = function(e) {
e.preventDefault(), s.app.user.isPro() ? s.UI.openTab(s.Config.feeder.root) : s.app.user.isLoggedIn() ? s.UI.openTab(s.Config.feeder.upgradeURL) : s.UI.openTab(s.Config.feeder.connectURL);
}, e.prototype.back = function(e) {
e && (e.preventDefault(), e.stopPropagation()), this.vc.popScreen();
}, e.prototype.clearAllUnread = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return [ 4, s.app.user.unreads.count() ];

case 1:
return e = n.sent(), [ 4, l(e) ];

case 2:
return (t = n.sent()) ? (this.disableEvents(), [ 4, s.app.user.unreads.clearAll() ]) : [ 2 ];

case 3:
return n.sent(), this.enableEvents(), this.vc.currentScreen.onClearAllUnread(), 
[ 4, this.vc.currentScreen.populate() ];

case 4:
return n.sent(), s.app.analytics.collectEvent("mark-all-as-read", "all"), [ 2 ];
}
});
});
}, e.prototype.onClearAllUnread = function() {}, e.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, e.prototype.getFeederPro = function(e) {
e && (e.preventDefault(), e.stopPropagation()), s.UI.openTab(s.Config.feeder.connectURL), 
s.UI.closePopup();
}, e.prototype.disableEvents = function() {
this.vc.listener.disable = !0;
}, e.prototype.enableEvents = function() {
this.vc.listener.disable = !1;
}, e.prototype.openSettingsPage = function() {
this.vc.openSettingsPage("/feeds");
}, e.prototype.saveScroll = function() {
this.lastScroll = this.getCurrentScroll();
}, e.prototype.getCurrentScroll = function() {
return this.perfectScrollbar ? this.perfectScrollbar.element.scrollTop : 0;
}, e.prototype.getLastScroll = function() {
return this.lastScroll;
}, e.prototype.tryToRestoreScroll = function() {
this.lastScroll && (this.perfectScrollbar.element.scrollTop = this.lastScroll);
}, e.prototype.performKeyboardAction = function(e) {}, e.prototype.showDeckSettings = function(e) {
var t = this;
e.preventDefault();
var n = {
"Remove Deck": function() {
t.vc.stateFactory.shouldRemoveDeck(t.vc);
},
"Move left": function() {
t.vc.stateFactory.shouldMoveDeck(t.vc, "left");
},
"Move right": function() {
t.vc.stateFactory.shouldMoveDeck(t.vc, "right");
}
}, o = document.createElement("div");
o.className = "tooltip with-arrow context-menu right-click top right animations-on show";
for (var i = 0, r = Object.keys(n); i < r.length; i++) {
var s = r[i];
!function(e) {
var t = document.createElement("div");
t.className = "tooltip-item", t.textContent = e, t.onclick = function(t) {
t.preventDefault(), n[e](), l();
}, o.appendChild(t);
}(s);
}
var a = this.template.el(".deck-settings").rect();
o.style.top = a.top + a.height + "px", o.style.left = a.left + a.width / 2 + "px";
var c = document.createElement("div");
c.style.position = "fixed", c.style.top = "0", c.style.bottom = "0", c.style.left = "0", 
c.style.right = "0", c.style.zIndex = "10000", c.onclick = function() {
l();
};
var l = function() {
c.parentNode.removeChild(c), o.parentNode.removeChild(o);
};
document.body.appendChild(c), document.body.appendChild(o);
}, e;
}(), e("default", c), l = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return e > a && "suppress" !== s.app.user.preferences.get("ask:markMany") ? [ 4, r.default.asyncConfirm("Are you sure you want to<br>mark <b>" + e + " posts</b> as read?", [ {
text: "Cancel",
value: "cancel"
}, {
text: "Yes",
value: "yes"
} ]) ] : [ 3, 2 ];

case 1:
switch (t = n.sent()) {
case "yes":
return [ 2, !0 ];

case "cancel":
return [ 2, !1 ];
}
n.label = 2;

case 2:
return [ 2, !0 ];
}
});
});
}, e("askMarkManyAsRead", l);
}
};
}), System.register("client/components/FeederIcon", [ "react" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = {
checkmark: '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#979797" d="M19.5984032,6.34444824 L19.6346451,6.38384165 L10.7827485,18.6290868 L10.7790061,18.6257384 C10.7689608,18.6373594 10.7620669,18.6507532 10.7516277,18.6621773 C10.1894837,19.273366 9.29288961,19.2889264 8.70513991,18.7216613 L8.70139753,18.7259946 L8.67815542,18.6976313 C8.66476166,18.6842376 8.64939823,18.6747831 8.6363984,18.6607985 C8.58814147,18.6082083 8.54992986,18.5495121 8.50974858,18.4921947 L4.5099385,13.6117449 C4.49949924,13.6009117 4.48709032,13.59323 4.477045,13.5818059 C3.93577952,12.9824351 3.94976418,12.0281297 4.5087567,11.4506223 C5.06735528,10.8731149 5.95902516,10.8908419 6.50029064,11.4904096 C6.55248691,11.548121 6.59503179,11.6117414 6.63678881,11.6755587 L9.67658145,15.1585272 L18.4949937,5.14432794 L18.5245387,5.17643357 C18.8215651,4.85793783 19.2996041,4.8587257 19.5950547,5.18017594 C19.8905053,5.50142922 19.8912932,6.02142226 19.5984032,6.34444824"/>\n</svg>\n',
"arrow-up-small": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <path fill="#979797" d="M7.5,10.2728932 L5.35355339,8.12644663 C5.15829124,7.93118448 4.84170876,7.93118448 4.64644661,8.12644663 C4.45118446,8.32170877 4.45118446,8.63829126 4.64644661,8.83355341 L7.67138442,11.8584912 C7.86664657,12.0537534 8.18322906,12.0537534 8.3784912,11.8584912 L11.3785534,8.85842903 C11.5738155,8.66316689 11.5738155,8.3465844 11.3785534,8.15132225 C11.1832912,7.9560601 10.8667088,7.9560601 10.6714466,8.15132225 L8.5,10.3227689 L8.5,4.98000002 C8.5,4.70385764 8.27614237,4.48000002 8,4.48000002 C7.72385763,4.48000002 7.5,4.70385764 7.5,4.98000002 L7.5,4.98000002 L7.5,10.2728932 Z" transform="matrix(1 0 0 -1 0 16.485)"/>\n</svg>\n',
"arrow-down-small": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <path fill="#979797" d="M7.5,9.79289322 L5.35355339,7.64644661 C5.15829124,7.45118446 4.84170876,7.45118446 4.64644661,7.64644661 C4.45118446,7.84170876 4.45118446,8.15829124 4.64644661,8.35355339 L7.67138442,11.3784912 C7.86664657,11.5737533 8.18322906,11.5737533 8.3784912,11.3784912 L11.3785534,8.37842901 C11.5738155,8.18316687 11.5738155,7.86658438 11.3785534,7.67132223 C11.1832912,7.47606009 10.8667088,7.47606009 10.6714466,7.67132223 L8.5,9.84276884 L8.5,4.5 C8.5,4.22385763 8.27614237,4 8,4 C7.72385763,4 7.5,4.22385763 7.5,4.5 L7.5,4.5 L7.5,9.79289322 Z"/>\n</svg>\n',
"more-small": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2">\n  <path fill="#707070" fill-rule="evenodd" d="M5,0 C5.55228475,-1.01453063e-16 6,0.44771525 6,1 L6,1 C6,1.55228475 5.55228475,2 5,2 C4.44771525,2 4,1.55228475 4,1 L4,1 L4,1 C4,0.44771525 4.44771525,1.01453063e-16 5,0 Z M9,0 C9.55228475,-1.01453063e-16 10,0.44771525 10,1 L10,1 C10,1.55228475 9.55228475,2 9,2 C8.44771525,2 8,1.55228475 8,1 L8,1 L8,1 C8,0.44771525 8.44771525,1.01453063e-16 9,0 Z M1,0 L1,0 C1.55228475,-1.01453063e-16 2,0.44771525 2,1 L2,1 C2,1.55228475 1.55228475,2 1,2 C0.44771525,2 6.76353751e-17,1.55228475 0,1 L0,1 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L1,0 Z"/>\n</svg>\n',
"star-filled": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M16.9390596,20.203454 C16.8228304,20.203454 16.6811494,20.1661249 16.5199556,20.0498957 L12.1473598,16.9422476 C12.0862759,16.9006766 11.9445949,16.8998282 11.8843593,16.943096 L7.51176361,20.0507441 C7.15204677,20.3078059 6.88989464,20.1780024 6.7948751,20.1092829 C6.69815878,20.0414118 6.48690998,19.8344049 6.61247152,19.4008783 L8.12090675,14.1468066 C8.14635841,14.0619677 8.09884864,13.9050158 8.03267432,13.8532641 L3.81957569,10.5182478 C3.4708879,10.2408247 3.52179123,9.95152414 3.55912034,9.84038521 C3.59644944,9.72924628 3.73049487,9.4713361 4.16571831,9.46115543 L9.47323845,9.3203229 C9.54280633,9.31862612 9.66497431,9.23124208 9.69297114,9.14809998 L11.4610133,3.97971559 C11.6069362,3.55382443 11.8979336,3.50801144 12.0158596,3.50801144 C12.1337856,3.50801144 12.424783,3.55382443 12.5707058,3.97971559 L14.338748,9.14725159 C14.3675933,9.23124208 14.4897612,9.31862612 14.556784,9.3203229 L19.8676977,9.46115543 C20.3029211,9.4713361 20.4361181,9.72924628 20.4734472,9.84038521 C20.5107763,9.95152414 20.5616797,10.2408247 20.2129919,10.5173995 L16.0007416,13.8532641 C15.9345673,13.9050158 15.8870575,14.0628161 15.9108124,14.147655 L17.4200961,19.4017266 C17.546506,19.8344049 17.3344088,20.0414118 17.2385409,20.1092829 C17.1850924,20.1474604 17.0815889,20.203454 16.9390596,20.203454"/>\n</svg>\n',
"star-outline": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#979797" fill-rule="evenodd" d="M9.27147391,9.300825 C9.26977391,9.305925 9.26807391,9.311025 9.26637391,9.315275 L9.27147391,9.300825 Z M7.81797391,13.923125 C7.81627391,13.927375 7.81542391,13.932475 7.81372391,13.936725 L7.81797391,13.923125 Z M16.0502239,14.327725 L16.0476739,14.330275 C16.0485239,14.329425 16.0493739,14.328575 16.0502239,14.327725 L16.0502239,14.327725 Z M7.95227391,14.329425 C7.95312391,14.330275 7.95397391,14.330275 7.95482391,14.331125 L7.95227391,14.329425 Z M12.2524239,17.178625 L12.2447739,17.183725 C12.2473239,17.182025 12.2498739,17.181175 12.2524239,17.178625 L12.2524239,17.178625 Z M11.9991239,15.993725 C12.1699739,15.993725 12.3408239,16.040475 12.4793739,16.134825 L16.2567739,18.819125 L14.9562739,14.275875 C14.8636239,13.941825 14.9928239,13.537225 15.2571739,13.328975 L18.9070739,10.438975 L14.3111239,10.313175 C13.9821739,10.304675 13.6370739,10.046275 13.5257239,9.725825 L12.0016739,5.272675 L10.4742239,9.724975 C10.3662739,10.044575 10.0194739,10.305525 9.68627391,10.313175 L5.09542391,10.435575 L8.74447391,13.330675 C9.00712391,13.537225 9.13802391,13.955425 9.04112391,14.280975 L7.73892391,18.817425 L11.5095239,16.142475 C11.6472239,16.043025 11.8223239,15.993725 11.9991239,15.993725 L11.9991239,15.993725 Z M7.48987391,20.287925 C7.23402391,20.287925 7.00792391,20.200375 6.84132391,20.079675 C6.52597391,19.857825 6.24802391,19.384375 6.43587391,18.737525 L7.74742391,14.167075 L4.09327391,11.273675 C3.57222391,10.859725 3.52122391,10.317425 3.64617391,9.948525 C3.76857391,9.582175 4.13492391,9.183525 4.79112391,9.168225 L9.35817391,9.046675 L10.8881739,4.575675 C11.1057739,3.939025 11.6047239,3.712075 11.9991239,3.712075 C12.3943739,3.712075 12.8933239,3.939025 13.1109239,4.575675 L14.6409239,9.046675 L19.2122239,9.168225 C19.8633239,9.182675 20.2296739,9.581325 20.3546239,9.948525 C20.4787239,10.319975 20.4260239,10.860575 19.9083739,11.272825 L16.2516739,14.167925 L17.5649239,18.739225 C17.7527739,19.382675 17.4756739,19.856125 17.1535239,20.083925 C16.7625239,20.363575 16.2091739,20.352525 15.7569739,20.028675 L11.9999739,17.357975 L8.24127391,20.029525 C7.98117391,20.215675 7.72362391,20.287925 7.48987391,20.287925 L7.48987391,20.287925 Z"/>\n</svg>\n',
"checked-badge": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#979797" fill-rule="evenodd" d="M15.946,9.688 L11.625,15.7 C11.226,16.085 10.579,16.085 10.179,15.7 L8.287,13.912 C7.888,13.527 7.888,12.903 8.287,12.518 C8.686,12.133 9.334,12.133 9.733,12.518 L10.865,13.588 L15.061,9.195 C15.181,8.993 15.478,8.939 15.722,9.076 C15.967,9.212 16.067,9.486 15.946,9.688 M16,4 L8,4 C6.896,4 6,4.895 6,6 L6,18 C6,19.105 6.896,20 8,20 L16,20 C17.105,20 18,19.105 18,18 L18,6 C18,4.895 17.105,4 16,4"/>\n</svg>\n',
"small-close": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M12,12 L6.49374104,12 C6.22563934,12 6,12.2238576 6,12.5 C6,12.7680664 6.22105539,13 6.49374104,13 L12,13 L12,18.506259 C12,18.7743607 12.2238576,19 12.5,19 C12.7680664,19 13,18.7789446 13,18.506259 L13,13 L18.506259,13 C18.7743607,13 19,12.7761424 19,12.5 C19,12.2319336 18.7789446,12 18.506259,12 L13,12 L13,6.49374104 C13,6.22563934 12.7761424,6 12.5,6 C12.2319336,6 12,6.22105539 12,6.49374104 L12,12 Z" transform="rotate(45 12.5 12.5)"/>\n</svg>\n',
"open-in": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <g fill="#979797" fill-rule="evenodd">\n    <path d="M16.1568542,7 L13.5,7 C13.2238576,7 13,6.77614237 13,6.5 L13,6.5 L13,6.5 C13,6.22385763 13.2238576,6 13.5,6 L17.5,6 C17.6380712,6 17.7630712,6.05596441 17.8535534,6.14644661 C17.9440356,6.23692881 18,6.36192881 18,6.5 L18,10.5 C18,10.7761424 17.7761424,11 17.5,11 C17.2238576,11 17,10.7761424 17,10.5 L17,7.57106781 L10.8535534,13.7175144 C10.6582912,13.9127766 10.3417088,13.9127766 10.1464466,13.7175144 C9.95118446,13.5222523 9.95118446,13.2056698 10.1464466,13.0104076 L16.1568542,7 Z"/>\n    <path d="M14,8 L12,8 L12,8.5 L12,9 L14,9 C14.552,9 15,9.448 15,10 L15,16 C15,16.552 14.552,17 14,17 L8,17 C7.448,17 7,16.552 7,16 L7,14 L6.5,14 L6,14 L6,16 C6,17.105 6.895,18 8,18 L14,18 C15.105,18 16,17.105 16,16 L16,10 C16,8.895 15.105,8 14,8" transform="rotate(90 11 13)"/>\n    <path d="M10.5 8.5C10.5 8.224 10.276 8 10 8 9.724 8 9.5 8.224 9.5 8.5 9.5 8.776 9.724 9 10 9 10.276 9 10.5 8.776 10.5 8.5M15.5 13.5C15.224 13.5 15 13.724 15 14 15 14.276 15.224 14.5 15.5 14.5 15.776 14.5 16 14.276 16 14 16 13.724 15.776 13.5 15.5 13.5"/>\n  </g>\n</svg>\n',
"small-wrench": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#979797" d="M6.33411078,11.8555545 C7.57662829,13.098072 9.48555074,13.3465694 10.9986884,12.4994031 L11.4271833,12.2594999 L11.7447182,12.6341105 L16.2528042,17.9556275 C16.7228662,18.4256894 17.4847612,18.4256894 17.9548232,17.9556275 C18.4248851,17.4855655 18.4248851,16.7236705 17.9908946,16.2868279 L12.258781,11.42806 L12.4985336,10.9996091 C13.3457513,9.4855851 13.0973331,7.57749798 11.8545781,6.33474292 C10.9904134,5.46987218 9.79335951,5.07454229 8.61111401,5.2227433 L9.51668996,6.12831937 C10.557945,7.17078801 10.4262497,8.90092583 9.21174787,9.77583864 C8.25469462,10.4643491 6.90947429,10.2985537 6.05977087,9.44885024 L5.22288428,8.61196258 C5.07468529,9.79498748 5.46949565,10.9909394 6.33411078,11.8555545 Z M5.49098271,12.6986826 C4.27501268,11.4827125 3.77033938,9.76249992 4.09738521,8.10630628 C4.25913581,7.28494896 5.27924227,6.98415807 5.86972045,7.57254369 L6.90289894,8.60572217 C7.3534602,9.05628344 8.05073638,9.14222121 8.51510987,8.80814797 C9.13101342,8.36445823 9.1971463,7.49564236 8.67331644,6.97120184 L7.57263936,5.87052476 C6.98350755,5.28139295 7.28330981,4.26130627 8.10550197,4.09728954 C9.76154845,3.77027277 11.4828114,4.2757274 12.6978783,5.49178702 C14.2012634,6.99517221 14.5902269,9.24356153 13.7600577,11.1376918 L18.7979512,15.4104805 C19.73366,16.3461892 19.73366,17.8630468 18.7979512,18.7987555 C17.8622425,19.7344643 16.3453849,19.7344643 15.3764568,18.762684 L11.1368078,13.7609737 C9.24327888,14.591029 6.99424846,14.2019483 5.49098271,12.6986826 Z"/>\n</svg>\n',
"filter-small": '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="filter-small" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Group" transform="translate(7.000000, 11.000000)"></g>\n        <path d="M3,5.5 C3,5.22385763 3.22765279,5 3.50964952,5 L12.4903505,5 C12.7718221,5 13,5.23193359 13,5.5 C13,5.77614237 12.7723472,6 12.4903505,6 L3.50964952,6 C3.22817786,6 3,5.76806641 3,5.5 Z" id="Rectangle" fill="#979797"></path>\n        <path d="M5,8.5 C5,8.22385763 5.22788048,8 5.49100518,8 L10.5089948,8 C10.7801695,8 11,8.23193359 11,8.5 C11,8.77614237 10.7721195,9 10.5089948,9 L5.49100518,9 C5.21983051,9 5,8.76806641 5,8.5 Z" id="Rectangle" fill="#979797"></path>\n        <path d="M7,11.5 C7,11.2238576 7.21403503,11 7.50468445,11 L8.49531555,11 C8.77404508,11 9,11.2319336 9,11.5 C9,11.7761424 8.78596497,12 8.49531555,12 L7.50468445,12 C7.22595492,12 7,11.7680664 7,11.5 Z" id="Rectangle" fill="#979797"></path>\n    </g>\n</svg>',
"all-posts": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <path fill="#707070" fill-rule="evenodd" d="M0,4 C0,3.44771525 0.444630861,3 1.00087166,3 L14.9991283,3 C15.5518945,3 16,3.44386482 16,4 C16,4.55228475 15.5553691,5 14.9991283,5 L1.00087166,5 C0.448105505,5 0,4.55613518 0,4 Z M0,8 C0,7.44771525 0.453036308,7 0.997030139,7 L7.00296986,7 C7.5536144,7 8,7.44386482 8,8 C8,8.55228475 7.54696369,9 7.00296986,9 L0.997030139,9 C0.446385598,9 0,8.55613518 0,8 Z M0,12 C0,11.4477153 0.455760956,11 1.00247329,11 L10.9975267,11 C11.5511774,11 12,11.4438648 12,12 C12,12.5522847 11.544239,13 10.9975267,13 L1.00247329,13 C0.448822582,13 0,12.5561352 0,12 Z"/>\n</svg>\n',
settings: '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M11.8738492,7.98646825 C9.72761905,7.98646825 7.98761905,9.72646825 7.98761905,11.8738492 C7.98761905,14.0200794 9.72761905,15.7600794 11.8738492,15.7600794 C14.0200794,15.7600794 15.7612302,14.0200794 15.7612302,11.8738492 C15.7612302,9.72646825 14.0200794,7.98646825 11.8738492,7.98646825 L11.8738492,7.98646825 Z M19.2078571,13.6069444 C18.8718254,13.7231746 18.517381,14.0384921 18.4207143,14.3054762 C18.3240476,14.5724603 18.1261111,15.5011508 18.2837698,15.8199206 L18.7072619,17.0731349 C18.7947222,17.418373 18.6600794,17.9063095 18.4080556,18.1583333 L18.1583333,18.4080556 C17.9063095,18.6600794 17.418373,18.7924206 17.0742857,18.7038095 L15.8245238,18.2791667 C15.5046032,18.1238095 15.0350794,18.0984921 14.7819048,18.2239286 C14.5275794,18.3493651 13.7231746,18.8718254 13.6069444,19.2078571 L13.0280952,20.3793651 C12.8474206,20.686627 12.4078175,20.9375 12.0522222,20.9375 L11.6989286,20.9375 C11.3421825,20.9375 10.9025794,20.686627 10.7219048,20.3805159 L10.1396032,19.2044048 C10.0245238,18.8672222 9.70805556,18.5150794 9.43876984,18.4207143 C9.16833333,18.3251984 8.23734127,18.1272619 7.91742063,18.2837698 L6.67686508,18.7038095 C6.33162698,18.7924206 5.84369048,18.6600794 5.59166667,18.4080556 L5.34194444,18.1583333 C5.09107143,17.9063095 4.95757937,17.418373 5.04503968,17.0731349 L5.46738095,15.8256746 C5.62388889,15.505754 5.65265873,15.0362302 5.5318254,14.7830556 C5.41099206,14.5287302 4.89313492,13.726627 4.55595238,13.6115476 L3.37063492,13.0269444 C3.06337302,12.8462698 2.8125,12.4078175 2.8125,12.0510714 L2.8125,11.6977778 C2.8125,11.3421825 3.06337302,10.9025794 3.37063492,10.7219048 L4.56055556,10.1338492 C4.8965873,10.0187698 5.25103175,9.70920635 5.34769841,9.4456746 C5.44321429,9.18214286 5.63654762,8.26265873 5.48003968,7.9427381 L5.04849206,6.67571429 C4.95873016,6.33047619 5.08992063,5.84369048 5.34194444,5.59166667 L5.59166667,5.34194444 C5.84369048,5.08992063 6.33162698,4.95757937 6.67686508,5.04619048 L7.94619048,5.4777381 C8.26611111,5.63424603 8.73103175,5.66301587 8.97845238,5.53988095 C9.2281746,5.41674603 10.017619,4.8965873 10.1315476,4.55940476 L10.720754,3.36948413 C10.9025794,3.06222222 11.3421825,2.8125 11.6989286,2.8125 L12.0522222,2.8125 C12.4078175,2.8125 12.8474206,3.06337302 13.0280952,3.36948413 L13.6115476,4.55710317 C13.7289286,4.89313492 14.0430952,5.24412698 14.3112302,5.33619048 C14.5782143,5.42940476 15.5046032,5.6215873 15.8245238,5.46507937 L17.0731349,5.0427381 C17.418373,4.95527778 17.9063095,5.08992063 18.1583333,5.34194444 L18.4080556,5.59166667 C18.6600794,5.84369048 18.7935714,6.33162698 18.7049603,6.67571429 L18.2837698,7.91742063 C18.1284127,8.23849206 18.1019444,8.70801587 18.2239286,8.96349206 C18.3459127,9.21781746 18.8672222,10.0210714 19.2044048,10.1361508 L20.3816667,10.7196032 C20.6877778,10.9014286 20.9375,11.3421825 20.9375,11.6977778 L20.9375,12.0510714 C20.9375,12.4078175 20.686627,12.8474206 20.3805159,13.0280952 L19.2078571,13.6069444 Z"/>\n</svg>\n',
plus: '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M13,11 L13,5.00087166 C13,4.44463086 12.5522847,4 12,4 C11.4438648,4 11,4.4481055 11,5.00087166 L11,11 L5.00087166,11 C4.44463086,11 4,11.4477153 4,12 C4,12.5561352 4.4481055,13 5.00087166,13 L11,13 L11,18.9991283 C11,19.5553691 11.4477153,20 12,20 C12.5561352,20 13,19.5518945 13,18.9991283 L13,13 L18.9991283,13 C19.5553691,13 20,12.5522847 20,12 C20,11.4438648 19.5518945,11 18.9991283,11 L13,11 Z"/>\n</svg>\n',
"arrow-up": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M11.9986646,15 C11.7251708,15 11.4527454,14.8959522 11.2444201,14.6899802 L5.31409254,8.81765254 C4.89637356,8.40358496 4.89530523,7.73152143 5.31088754,7.31639214 C5.72646985,6.90126285 6.40379423,6.89913943 6.82258155,7.313207 L11.9986646,12.4391513 L17.1779526,7.30896016 C17.5946033,6.89595429 18.2708593,6.897016 18.6885783,7.31214529 C19.1052289,7.72727458 19.1030923,8.39933811 18.6864416,8.81340569 L12.7529091,14.6899802 C12.5445838,14.8959522 12.2721583,15 11.9986646,15" transform="rotate(180 12 11)"/>\n</svg>\n',
"arrow-down": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#707070" fill-rule="evenodd" d="M11.9986646,16 C11.7251708,16 11.4527454,15.8959522 11.2444201,15.6899802 L5.31409254,9.81765254 C4.89637356,9.40358496 4.89530523,8.73152143 5.31088754,8.31639214 C5.72646985,7.90126285 6.40379423,7.89913943 6.82258155,8.313207 L11.9986646,13.4391513 L17.1779526,8.30896016 C17.5946033,7.89595429 18.2708593,7.897016 18.6885783,8.31214529 C19.1052289,8.72727458 19.1030923,9.39933811 18.6864416,9.81340569 L12.7529091,15.6899802 C12.5445838,15.8959522 12.2721583,16 11.9986646,16"/>\n</svg>\n',
share: '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <g fill="#979797" fill-rule="evenodd">\n    <path d="M11.25,16 L11,4 L13,4 L12.75,16 C12.75,16.4142136 12.4142136,16.75 12,16.75 C11.5857864,16.75 11.25,16.4142136 11.25,16 Z M15,20 L9,20 C7.343,20 6,18.657 6,17 L6,14 C6,12.412 7.2375,11.126 8.7985,11.0205 C8.8635,11.007 8.931,11 9,11 C9.5525,11 10,11.4475 10,12 C10,12.5525 9.5525,13 9,13 C8.4475,13 8,13.4475 8,14 L8,17 C8,17.5525 8.4475,18 9,18 L15,18 C15.5525,18 16,17.5525 16,17 L16,14 C16,13.4475 15.5525,13 15,13 C14.4475,13 14,12.5525 14,12 C14,11.4475 14.4475,11 15,11 C15.069,11 15.1365,11.007 15.2015,11.0205 C16.7625,11.126 18,12.412 18,14 L18,17 C18,18.657 16.657,20 15,20 Z"/>\n    <path fill-rule="nonzero" d="M15.2884986,8.7026847 C15.6765807,9.09563606 16.3097333,9.09958342 16.7026847,8.71150138 C17.0956361,8.32341933 17.0995834,7.69026666 16.7115014,7.2973153 L12.7364392,3.27237749 C12.3466452,2.87769273 11.710078,2.87570843 11.317831,3.26795541 L7.29289322,7.29289322 C6.90236893,7.68341751 6.90236893,8.31658249 7.29289322,8.70710678 C7.68341751,9.09763107 8.31658249,9.09763107 8.70710678,8.70710678 L12.0205156,5.39369792 L15.2884986,8.7026847 Z"/>\n  </g>\n</svg>\n',
"star-favicon": '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="star-favicon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M12.6420938,15.7435182 C12.5324916,15.7435182 12.3988889,15.7083175 12.2468858,15.5987153 L8.1236025,12.6682561 C8.06600133,12.6290553 7.93239863,12.6282552 7.87559749,12.6690561 L3.75231414,15.5995153 C3.41310729,15.8419202 3.16590229,15.7195177 3.07630048,15.6547164 C2.98509864,15.5907151 2.78589461,15.3955112 2.904297,14.9867029 L4.32672575,10.0322028 C4.35072624,9.95220116 4.30592533,9.80419817 4.24352407,9.75539718 L0.27064377,6.61053362 C-0.0581628757,6.34892833 -0.0101619055,6.07612281 0.025038806,5.9713207 C0.0602395175,5.86651858 0.186642072,5.62331366 0.597050368,5.61371347 L5.60195153,5.48091078 C5.66755286,5.47931075 5.78275518,5.39690909 5.80915572,5.3185075 L7.47638942,0.444808991 C7.6139922,0.0432008732 7.88839774,0 7.99959999,0 C8.11080224,0 8.38520779,0.0432008732 8.52281057,0.444808991 L10.1900443,5.31770748 C10.2172448,5.39690909 10.3324471,5.47931075 10.3956484,5.48091078 L15.4037496,5.61371347 C15.8141579,5.62331366 15.9397605,5.86651858 15.9749612,5.9713207 C16.0101619,6.07612281 16.0581629,6.34892833 15.7293562,6.6097336 L11.7572759,9.75539718 C11.6948747,9.80419817 11.6500738,9.95300118 11.6724742,10.0330028 L13.095703,14.9875029 C13.2149054,15.3955112 13.0149014,15.5907151 12.9244995,15.6547164 C12.8740985,15.6907171 12.7764965,15.7435182 12.6420938,15.7435182" id="Mask" fill="#707070"></path>\n    </g>\n</svg>',
expanded: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="expanded" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Flattened" transform="translate(3.000000, 5.000000)" fill="#979797" fill-rule="nonzero">\n            <path d="M2,6 L2,13 L16,13 L16,6 L2,6 Z M1,4 L17,4 C17.5522847,4 18,4.44771525 18,5 L18,14 C18,14.5522847 17.5522847,15 17,15 L1,15 C0.44771525,15 6.76353751e-17,14.5522847 0,14 L0,5 C-6.76353751e-17,4.44771525 0.44771525,4 1,4 Z M1,0 L17,0 C17.5522847,0 18,0.44771525 18,1 C18,1.55228475 17.5522847,2 17,2 L1,2 C0.44771525,2 6.76353751e-17,1.55228475 0,1 C-6.76353751e-17,0.44771525 0.44771525,0 1,0 Z" id="Rectangle-14"></path>\n        </g>\n    </g>\n</svg>',
collapsed: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="collapsed" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Flattened" transform="translate(3.000000, 5.000000)" fill="#8C8C8C">\n            <path d="M1,0 L17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 C18,1.55228475 17.5522847,2 17,2 L1,2 C0.44771525,2 6.76353751e-17,1.55228475 0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z M1,4 L17,4 C17.5522847,4 18,4.44771525 18,5 C18,5.55228475 17.5522847,6 17,6 L1,6 C0.44771525,6 6.76353751e-17,5.55228475 0,5 C-6.76353751e-17,4.44771525 0.44771525,4 1,4 Z M1,8 L17,8 C17.5522847,8 18,8.44771525 18,9 C18,9.55228475 17.5522847,10 17,10 L1,10 C0.44771525,10 6.76353751e-17,9.55228475 0,9 C-6.76353751e-17,8.44771525 0.44771525,8 1,8 Z M1,12 L17,12 C17.5522847,12 18,12.4477153 18,13 C18,13.5522847 17.5522847,14 17,14 L1,14 C0.44771525,14 6.76353751e-17,13.5522847 0,13 C-6.76353751e-17,12.4477153 0.44771525,12 1,12 Z" id="Combined-Shape"></path>\n        </g>\n    </g>\n</svg>',
close: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="icon/close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M13.4142136,12 L17.6562379,16.2420243 C18.0471026,16.632889 18.0501012,17.2636073 17.6568542,17.6568542 C17.26633,18.0473785 16.635346,18.0495595 16.2420243,17.6562379 L12,13.4142136 L7.75797567,17.6562379 C7.36711097,18.0471026 6.73639271,18.0501012 6.34314575,17.6568542 C5.95262146,17.26633 5.95044047,16.635346 6.34376211,16.2420243 L10.5857864,12 L6.34376211,7.75797567 C5.95289741,7.36711097 5.9498988,6.73639271 6.34314575,6.34314575 C6.73367004,5.95262146 7.36465403,5.95044047 7.75797567,6.34376211 L12,10.5857864 L16.2420243,6.34376211 C16.632889,5.95289741 17.2636073,5.9498988 17.6568542,6.34314575 C18.0473785,6.73367004 18.0495595,7.36465403 17.6562379,7.75797567 L13.4142136,12 Z" id="Combined-Shape" fill="#707070"></path>\n    </g>\n</svg>',
more: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="more" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M12,8 C11.1715729,8 10.5,7.32842712 10.5,6.5 C10.5,5.67157288 11.1715729,5 12,5 C12.8284271,5 13.5,5.67157288 13.5,6.5 C13.5,7.32842712 12.8284271,8 12,8 Z M12,13.5 C11.1715729,13.5 10.5,12.8284271 10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 C13.5,12.8284271 12.8284271,13.5 12,13.5 Z M12,19 C11.1715729,19 10.5,18.3284271 10.5,17.5 C10.5,16.6715729 11.1715729,16 12,16 C12.8284271,16 13.5,16.6715729 13.5,17.5 C13.5,18.3284271 12.8284271,19 12,19 Z" id="Combined-Shape" fill="#707070"></path>\n    </g>\n</svg>',
dashboard: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <defs></defs>\n    <g id="dashboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M18.5,11.75 L18.5,10 L17,10 L17,11.75 L15.25,11.75 L15.25,13.25 L17,13.25 L17,15 L18.5,15 L18.5,13.25 L20.25,13.25 L20.25,11.75 L18.5,11.75 Z M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,18 C22,18.5522847 21.5522847,19 21,19 L3,19 C2.44771525,19 2,18.5522847 2,18 L2,6 C2,5.44771525 2.44771525,5 3,5 Z M3.5,6 C3.22385763,6 3,6.22385763 3,6.5 L3,17.5 C3,17.7761424 3.22385763,18 3.5,18 L7.5,18 C7.77614237,18 8,17.7761424 8,17.5 L8,6.5 C8,6.22385763 7.77614237,6 7.5,6 L3.5,6 Z M9.5,6 C9.22385763,6 9,6.22385763 9,6.5 L9,17.5 C9,17.7761424 9.22385763,18 9.5,18 L13.5,18 C13.7761424,18 14,17.7761424 14,17.5 L14,6.5 C14,6.22385763 13.7761424,6 13.5,6 L9.5,6 Z" id="Rectangle-15" fill="#707070"></path>\n    </g>\n</svg>',
label: '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="feeder-icon" aria-hidden=true  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \n    \n    \n    <g id="label" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M12.8388348,19.9099026 L4.29289322,11.363961 C4.10535684,11.1764247 4,10.9220707 4,10.6568542 L4,5 C4,4.44771525 4.44771525,4 5,4 L10.6568542,4 C10.9220707,4 11.1764247,4.10535684 11.363961,4.29289322 L19.9099026,12.8388348 C20.1051647,13.0340969 20.1051647,13.3506794 19.9099026,13.5459415 L13.5459415,19.9099026 C13.3506794,20.1051647 13.0340969,20.1051647 12.8388348,19.9099026 Z M9.56066017,9.56066017 C10.1464466,8.97487373 10.1464466,8.02512627 9.56066017,7.43933983 C8.97487373,6.85355339 8.02512627,6.85355339 7.43933983,7.43933983 C6.85355339,8.02512627 6.85355339,8.97487373 7.43933983,9.56066017 C8.02512627,10.1464466 8.97487373,10.1464466 9.56066017,9.56066017 Z" id="Path-19" fill="#707070" fill-rule="nonzero"></path>\n    </g>\n</svg>'
}, i = {}, Object.keys(o).forEach(function(e) {
var t = document.createElement("div");
t.innerHTML = o[e], i[e] = t.firstElementChild;
}), r = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
var e = this.refs.base, t = e.parentNode;
t && (this.currentElement = i[this.props.icon].cloneNode(!0), t.replaceChild(this.currentElement, e));
}, t.prototype.componentDidUpdate = function() {
var e = this.currentElement && this.currentElement.parentNode;
if (this.currentElement && e) {
var t = this.currentElement;
this.currentElement = i[this.props.icon].cloneNode(!0), e.replaceChild(this.currentElement, t);
}
}, t.prototype.render = function() {
return n.createElement("span", {
ref: "base"
});
}, t;
}(n.PureComponent), e("FeederIcon", r);
}
};
}), System.register("client/components/DisplaySettingsDialog", [ "react", "client/components/FeederIcon" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleSetting = function(e) {
var t = n.props.toggled.slice(0);
t.contains(e) ? t.remove(e) : t.push(e), n.props.didChangeSelection(t);
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "ios-table"
}, n.default.createElement("div", {
className: "ios-table--header"
}, "Filters"), n.default.createElement("div", null, n.default.createElement("div", {
className: "ios-table--row-header"
}, "Show only"), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "unread"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Unread"), this.props.toggled.contains("unread") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "starred"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Starred"), this.props.toggled.contains("starred") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null)), this.props.canSeeFiltered ? n.default.createElement("div", null, n.default.createElement("div", {
className: "ios-table--row-header"
}, "Include"), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "filtered"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Filtered"), this.props.toggled.contains("filtered") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null)) : null);
}, t;
}(n.default.Component), e("DisplaySettingsDialog", i);
}
};
}), System.register("client/dto/SortAndDisplayOptions", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/StateFactory", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/screenstack", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function() {
function e(e, t) {
this.stack = [], this.vc = e, this.stateFactory = t;
}
return e.prototype.serialize = function() {
var e = this.stack.map(function(e) {
var t = e instanceof n.default && e.id();
return t || e;
});
return !!e.length && JSON.stringify(e);
}, e.prototype.count = function() {
return this.stack.length;
}, e.prototype.createCheckpoint = function() {
this.store();
}, e.prototype.store = function() {
this.stateFactory.shouldPersistScreenChain(this.vc, this.serialize());
}, e.prototype.forget = function() {
this.stateFactory.shouldPersistScreenChain(this.vc, !1);
}, e.prototype.remember = function() {
var e = JSON.parse(this.stateFactory.getRememberedScreenChain(this.vc) || "false");
if (!e) return !1;
this.forget();
for (var t, n = 0; t = e[n]; n++) this.stack.push(t);
var o;
try {
for (;this.stack.length && !(o = this.pop()); ) ;
} catch (e) {
console.error("Could not reload stack because error:", e);
}
return o ? (this.vc.setCurrentScreen(o), !0) : (console.error("Could not reload stack from this point.", e), 
!1);
}, e.prototype.serializeStackObject = function(e) {
var t = this.stack[e];
if (t instanceof n.default) {
var o = t.id();
o && (this.stack[e] = o);
}
}, e.prototype.unserializeStackObject = function(e) {
if (e instanceof n.default) return e;
if (e && void 0 !== e.id) {
var t = this.vc.controllerInjector(e.id);
if (t) return t.fromId(this.vc, e) || void 0;
}
}, e.prototype.pop = function() {
var e = this.stack.pop();
if (e) return this.unserializeStackObject(e);
}, e.prototype.clearAll = function() {
this.stack.forEach(function(e) {
e instanceof n.default && e.destroy();
}), this.stack = [];
}, e;
}(), e("ScreenStack", o);
}
};
}), System.register("client/actionhistory", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.wrapAround = !0, this.reset(), this.onEndCallback = function() {};
}
return e.prototype.reset = function() {
this.list = [], this.index = -1;
}, e.prototype.addAction = function(e) {
this.list.push(e);
}, e.prototype.prependAction = function(e) {
this.list.unshift(e), this.index >= 0 && (this.index += 1);
}, e.prototype.setActiveAction = function(e) {
this.index = this.list.indexOf(e);
}, e.prototype.setActiveActionIndex = function(e) {
this.index = e;
}, e.prototype.next = function() {
return this.byOffset(1), this.current();
}, e.prototype.previous = function() {
return this.byOffset(-1), this.current();
}, e.prototype.current = function() {
return this.list[this.index];
}, e.prototype.byOffset = function(e) {
this.index += e, this.wrapAround ? this.index >= this.list.length ? this.index = 0 : this.index < 0 && (this.index = this.list.length - 1) : this.index >= this.list.length ? (this.index = this.list.length - 1, 
this.onEndCallback()) : this.index < 0 && (this.index = 0);
}, e.prototype.onEnd = function(e) {
this.onEndCallback = e;
}, e;
}(), e("default", n);
}
};
}), System.register("client/library/css-transitions", [], function(e, t) {
"use strict";
function n(e) {
return "onwebkittransitionend" in window ? "webkitTransitionEnd" : "onotransitionend" in e || "Opera" == navigator.appName ? "oTransitionEnd" : "transitionend";
}
function o(e, t) {
Modernizr.csstransitions && e.addEventListener(n(e), t, !1);
}
function i(e, t) {
Modernizr.csstransitions && e.removeEventListener(n(e), t, !1);
}
t && t.id;
return e("getTransitionEndEventName", n), e("addTransitionEndEvent", o), e("removeTransitionEndEvent", i), 
{
setters: [],
execute: function() {}
};
}), System.register("client/viewcontroller", [ "jquery", "client/eventlistener", "client/screenstack", "client/actionhistory", "client/backend-imports", "client/appglobals", "client/library/css-transitions" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
} ],
execute: function() {
l = function() {
function e(e, t, s) {
this.animationDuration = 300, this.disableScreenAnimation = !1, this.inAnimation = !1, 
this.shouldAlwaysHideNotification = !1, this.animationCallbacks = [], this.isActuallyPopup = !0, 
this.currentFilter = "all", this.stateFactory = t, this.screenStack = new i.ScreenStack(this, this.stateFactory), 
this.container = n.default(e)[0], this.controllerInjector = s, this.listener = new o.default(this.container), 
this.history = new r.default();
}
return e.prototype.destroy = function() {
delete this.notification, this.listener.destroy();
}, e.prototype.onScreenChange = function() {}, e.prototype.isPopup = function() {
return this.isActuallyPopup || !!document.getElementById("is-popup");
}, e.prototype.getScrollElement = function() {
return this.scrollElement || (this.scrollElement = n.default(this.container).parents("[data-scroll-main]")[0] || document.body), 
this.scrollElement;
}, e.prototype.scrollTo = function(e) {
n.default(this.getScrollElement()).scrollTop(e), n.default(window).scrollTop(e);
}, e.prototype.setCurrentScreen = function(e) {
this.scrollTo(0), this.currentScreen && (this.currentScreen.onOff(), this.currentScreen.destroy()), 
this.currentScreen = e, n.default(this.container).hasClass("has-initial") && n.default(this.container).removeClass("has-initial").find(".the-initial").remove(), 
n.default(this.container).children().is(e.template.container) || this.container.appendChild(e.template.container), 
e.onVisible(), this.screenStack.count() && this.screenStack.serializeStackObject(this.screenStack.count() - 1), 
this.screenStack.stack.push(e), e.onCurrent(), this.listener.send("screen:navigate", {
page: this.currentScreen
}), this.refreshWindowHeight(), e.tryToRestoreScroll(), this.stateFactory.didChangePage(this);
}, e.prototype.pushScreen = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.currentScreen.saveScroll(), this.stateFactory.willChangePage(this, e), 
[ 4, this.slideHScreen(this.currentScreen, e, "in") ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, e.prototype.popScreen = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return (e = this.screenStack.pop()) ? (t = this.screenStack.pop(), t ? [ 4, this.slideScreen(e._inFunc || "h-animation", e, t, "out") ] : [ 3, 2 ]) : [ 3, 2 ];

case 1:
n.sent(), n.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.popScreenInstant = function() {
if (this.screenStack.pop()) {
var e = this.screenStack.pop();
e && this.setCurrentScreen(e);
}
}, e.prototype.slideHScreen = function(e, t, n) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(o) {
switch (o.label) {
case 0:
return [ 4, this.slideScreen("h-animation", e, t, n) ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, e.prototype.slideVScreen = function(e, t, n) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(o) {
switch (o.label) {
case 0:
return [ 4, this.slideScreen("v-animation", e, t, n) ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, e.prototype.slideScreen = function(e, t, o, i) {
var r = this;
if (!o) return console.error("Bad `to` sent"), Promise.resolve();
var s = window.scrollY || 0;
n.default(document.body).toggleClass("scroll-at-top", 0 == s);
var l = o.inAppURL();
if (l && (a.analytics.trackInAppPageView(l), a.app.analytics.collectEvent("pageview", l.join("/"))), 
t.event.pause(), this.scrollTo(0), "in" === i && (o._inFunc = e), this.disableScreenAnimation) return t.event.unpause(), 
this.setCurrentScreen(o), Promise.resolve();
var u = n.default(this.container).addClass(e);
u.addClass("in-progress").addClass("viewcontroller-animated"), this.container.appendChild(o.template.container), 
"out" === i && u.addClass("reverse-animation");
var p = n.default(t.template.container).addClass("out"), d = n.default(o.template.container).addClass("in"), h = {
width: "",
height: ""
}, f = p.sizeRect(), m = n.default(window).height() - parseInt(n.default("body").css("padding-top"), 10) - parseInt(n.default("body").css("padding-botton"), 10), g = {
width: f.width,
height: m
};
return document.body.style.minHeight = g.height + "px", d.css(g), n.default(this.container).css(g).css("overflow", "hidden"), 
o.tryToRestoreScroll(), setTimeout(function() {
var e = u[0].className;
e = e.replace("in-progress", ""), e += " in-animation", u[0].className = e;
}, 10), new Promise(function(i, s) {
function a(e) {
e && -1 === [ p[0], d[0] ].indexOf(e.target) || (l(), c.removeTransitionEndEvent(u[0], a));
}
Modernizr.csstransitions ? c.addTransitionEndEvent(u[0], a) : setTimeout(function() {
a();
}, 20), setTimeout(function() {
r.inAnimation = !0, r.onScreenChange();
}, 0);
var l = function() {
r.animationDone(), t.event.unpause(), r.setCurrentScreen(o), document.body.style.minHeight = "", 
u.removeClass("in-animation " + e + " reverse-animation viewcontroller-animated"), 
d.removeClass("in").css(h), n.default(r.container).css(h).css("overflow", ""), r.scrollTo(o.getLastScroll()), 
i();
};
});
}, e.prototype.addAnimationDoneCallback = function(e, t) {
if (!this.inAnimation || !Modernizr.touch) return e.apply(this, t);
this.animationCallbacks.push([ e, t ]);
}, e.prototype.animationDone = function() {
for (this.inAnimation = !1; this.animationCallbacks.length; ) {
var e = this.animationCallbacks.pop();
e && e[0].apply(this, e[1]);
}
}, e.prototype.refreshWindowHeight = function() {
var e = this;
window.requestAnimationFrame(function() {
e.currentScreen.perfectScrollbar && e.currentScreen.perfectScrollbar.update();
});
}, e.prototype.slideUpScreen = function(e) {
return this.slideVScreen(this.currentScreen, e, "in");
}, e.prototype.toHome = function() {
var e = this;
return this.screenStack.count() > 1 ? this.popScreen().then(function() {
return e.toHome();
}) : Promise.resolve();
}, e.prototype.toIndex = function(e) {
var t = this;
return this.screenStack.count() - 1 - e <= 0 ? Promise.resolve() : this.popScreen().then(function() {
return t.toIndex(e);
});
}, e.prototype.showAddScreen = function(e) {
var t = void 0 === e ? {} : e, n = t.q, o = t.tabId;
this.openSettingsPage("/feeds/new", {
q: n || "",
tabId: o || ""
});
}, e.prototype.showSettingsScreen = function(e) {
e instanceof s.Feed ? this.openSettingsPage("/feeds/" + e.id + "/edit") : e instanceof s.Folder ? this.openSettingsPage("/folders/" + e.id + "/edit") : this.openSettingsPage();
}, e.prototype.openSettingsPage = function(e, t) {
void 0 === e && (e = !1), void 0 === t && (t = {});
var n = a.Ext.settingsURL(a.Config.feeder.root, t, e || "/feeds");
a.Ext.isOnline() ? document.location.href = n : (a.UI.openTab(n), a.UI.closePopup());
}, e.prototype.toggleNotification = function() {
var e = this;
if (this.notification = n.default("#notifications"), this.notification.off("click.notification"), 
a.app.user.review.shouldSee()) {
var t = document.createElement("a");
t.href = a.app.user.review.getURL(), t.innerText = "Please help improve Feeder. Leave a review", 
this.showNotification(t.outerHTML), this.notification.on("click.notification", function(t) {
return e.noteClicked(t, function() {
a.app.user.review.markSeen();
});
});
} else this.shouldAlwaysHideNotification || !a.app.notifications.current || a.app.user.backend.isPro() ? this.hideNotification() : (this.showNotification(a.app.notifications.current || ""), 
this.notification.on("click.notification", function(t) {
return e.noteClicked(t, function() {
a.app.notifications.hideCurrent();
});
}));
}, e.prototype.showNotification = function(e) {
this.notification.find("div").html(e), n.default(document.body).addClass("with-notifications");
}, e.prototype.hideNotification = function() {
n.default(document.body).removeClass("with-notifications");
}, e.prototype.noteClicked = function(e, t) {
e.preventDefault(), t(), n.default(e.target).closest(".close").length ? n.default(document.body).removeClass("with-notifications") : a.UI.openTab(this.notification.find("a").attr("href"));
}, e.prototype.navForward = function() {
this.currentScreen.navForward(this.history.current());
}, e.prototype.navBack = function() {
this.currentScreen.back();
}, e.prototype.historyNext = function() {
var e = this.history.next();
this.currentScreen.navigateTo(e);
}, e.prototype.historyPrevious = function() {
var e = this.history.previous();
this.currentScreen.navigateTo(e);
}, e.prototype.performKeyboardAction = function(e) {
this.currentScreen.performKeyboardAction(e);
}, e.prototype.returnFromFeedView = function() {
this.popScreen();
}, e;
}(), e("default", l);
}
};
}), System.register("app/library/ts/library", [], function(e, t) {
"use strict";
function n(e) {
try {
return JSON.parse(e);
} catch (e) {}
return null;
}
function o(e) {
for (var t = window.location.search.substring(1), n = t.split("&"), o = 0; o < n.length; o++) {
var i = n[o].split("=");
if (i[0] == e) return decodeURIComponent(i[1]);
}
return "";
}
function i(e, t) {
var n = new FileReader();
if (n.onload = function(e) {
t && t(e.target.result);
}, n.onerror = function(e) {
t && t(!1);
}, !e.files[0]) return void (t && t(!1));
n.readAsText(e.files[0]);
}
function r(e, t) {
var n = {};
for (var o in e) n[o] = e[o];
for (var o in t) n[o] = t[o];
return n;
}
function s() {
var e = function() {
return Math.floor(65536 * Math.random()).toString(16);
};
return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}
t && t.id;
return e("tryToParseJSON", n), e("getQueryParameter", o), e("readFileInput", i), 
e("mergeObjects", r), e("GUID", s), {
setters: [],
execute: function() {
Object.values = function(e) {
var t = [];
for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
return t;
};
}
};
}), System.register("client/controllers/screengetstarted", [ "jquery", "client/controller", "client/appglobals", "client/pui/twophasemodal", "client/pui/alert", "client/backend-imports", "app/library/ts/library" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
} ],
execute: function() {
l = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.opmlUploadStatusChange = n.opmlUploadStatusChange.bind(n), n.whenDone = n.whenDone.bind(n), 
n.toggleGetStartedButton(), n.template.setItems("suggestions", i.Ext.getBackgroundPage().STANDARD_FEEDS), 
n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#get-started";
}, t.prototype.events = function() {
return {
"click [data-to]": "goToClicked",
"click .skip": "skipClicked",
"click .tpl-suggestion-box-item": "toggleActiveSuggestion",
"click .add-and-get-started": "addAndGetStarted",
"change .opml-file": "uploadAndImport"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "get-started" ];
}, t.prototype.onVisible = function() {
this.twoPhaseModal = new r.default(this.template.el(".two-phase-modal"));
}, t.prototype.goToClicked = function(e) {
e.preventDefault(), this.goTo(n.default(e.currentTarget).data("to"));
}, t.prototype.goTo = function(e) {
switch (e) {
case "payment":
i.UI.openTab(i.Config.feeder.payURL);
break;

case "app":
i.UI.openTab(i.Config.feeder.iosURL);
break;

case "add-feed":
this.vc.showAddScreen(), this.modal && this.modal.destroy();
break;

default:
throw new Error("Bad go to " + e);
}
}, t.prototype.skipClicked = function(e) {
e.preventDefault(), this.whenDone();
}, t.prototype.toggleActiveSuggestion = function(e) {
e.preventDefault(), n.default(e.currentTarget).toggleClass("is-active"), this.toggleGetStartedButton();
}, t.prototype.addAndGetStarted = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e.preventDefault(), this.twoPhaseModal.gotoPage(1), this.startTimeoutTimer(), 
[ 4, i.app.user.addStandardFeeds(this.getSelected()) ];

case 1:
return t.sent(), this.whenDone(), [ 2 ];
}
});
});
}, t.prototype.whenDone = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, i.app.user.addGetStartedFeed() ];

case 1:
return e.sent(), this.lastStep(), [ 2 ];
}
});
});
}, t.prototype.lastStep = function() {
clearTimeout(this.waitTimer), document.location.href = document.location.toString().replace("get_started=", "").replace("pro_trial=", "");
}, t.prototype.getSelected = function() {
return this.template.el(".is-active [data-id]").toArray().map(function(e) {
return n.default(e).data("id");
});
}, t.prototype.toggleGetStartedButton = function() {
this.template.el(".add-and-get-started-container").toggle(this.template.el(".is-active").length > 0), 
this.template.el(".pick-one-to-get-started-container").toggle(0 === this.template.el(".is-active").length);
}, t.prototype.uploadAndImport = function() {
var e = this;
this.twoPhaseModal.gotoPage(1);
var t = this.template.el(".opml-file")[0];
c.readFileInput(t, function(t) {
e.uploadDone(t);
});
}, t.prototype.uploadDone = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return "string" != typeof e ? [ 3, 2 ] : (i.app.events.subscribe("sync:merge", this.opmlUploadStatusChange), 
t = new a.Import(e), [ 4, t.execute(i.app) ]);

case 1:
return n.sent(), this.importDone(), [ 3, 3 ];

case 2:
this.twoPhaseModal.gotoPage(0), s.default.alertError("Could not read contents of OPML file."), 
n.label = 3;

case 3:
return [ 2 ];
}
});
});
}, t.prototype.importDone = function() {
this.whenDone(), i.app.events.unsubscribe("sync:merge", this.opmlUploadStatusChange);
}, t.prototype.opmlUploadStatusChange = function(e) {
this.template.set("loadingText", e.status);
}, t.prototype.startTimeoutTimer = function() {
this.waitTimer = window.setTimeout(this.whenDone, 3e4);
}, t;
}(o.default), e("default", l);
}
};
}), System.register("client/init", [ "jquery", "client/appglobals" ], function(e, t) {
"use strict";
function n(e, t) {
a.callbacks.push({
success: e,
error: t || function() {}
});
}
function o() {
i.default(document.body).toggleClass("is-pro", r.app.user.backend.isPro()), i.default(document.body).toggleClass("is-logged-in", r.app.user.isLoggedIn());
}
var i, r, s, a;
t && t.id;
return e("runOnLoad", n), e("reloadProClasses", o), {
setters: [ function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && window.chrome && !chrome.extension && (chrome.extension = window.parent.chrome.extension), 
s = function() {
function e() {
this.callbacks = [], this.onAppReady = this.onAppReady.bind(this), this.backendShowIsLoading = this.backendShowIsLoading.bind(this), 
this.activateIntercom = this.activateIntercom.bind(this), this.popupCleanup = this.popupCleanup.bind(this), 
this.onDOMLoad = this.onDOMLoad.bind(this), this.doTrackPageView = this.doTrackPageView.bind(this);
}
return e.prototype.start = function() {
return this.errorHide(), this.backendDoesntExistYet() ? void this.reloadWaitingForBackendToExist() : (r.Ext.isChrome() && this.chromeFixPortScopingIssues(), 
r.Ext.isOnline() || this.activateIntercom(), this.backendIsInBrokenState() ? void this.askBackendToRetryInitialize() : (window.addEventListener("unload", this.popupCleanup, !1), 
void window.addEventListener("load", this.onDOMLoad, !1)));
}, e.prototype.onDOMLoad = function() {
r.Ext.isMobile() && this.mobileHideScrollBars(), window.isLoaded = !0, setTimeout(function() {
window.isLoadedDone = !0;
}, 50), this.removeLoader(), r.Ext.getBackgroundPage().onAppReady(this.onAppReady, this.backendShowIsLoading);
}, e.prototype.onAppReady = function() {
r.app.events.subscribe("feeder:expiredChanged", this.activateIntercom), o(), this.doTrackPageView(), 
this.initPageViewTracking(), this.removeLoader(), this.errorHide(), this.fireCallbacks(), 
this.fixStupidChromeScrollbarBug();
}, e.prototype.activateIntercom = function() {
window.Intercom && r.app.user.shouldHaveIntercom() ? (Intercom("boot", {
app_id: r.app.user.preferences.get("feeder:intercom_app_id"),
client_id: r.app.user.preferences.get("client_id"),
email: r.app.user.preferences.get("feeder:email"),
user_id: r.app.user.preferences.get("feeder:id"),
user_hash: r.app.user.preferences.get("feeder:intercom_hash"),
custom_launcher_selector: ".intercom-activator",
widget: {
activator: ".intercom-activator"
}
}), console.log("boot intercom")) : window.Intercom && (window.Intercom("shutdown"), 
console.log("shut down intercom"));
}, e.prototype.fireCallbacks = function() {
for (var e = r.app.isFailedState(), t = 0, n = this.callbacks; t < n.length; t++) {
var o = n[t];
e ? o.error() : o.success();
}
}, e.prototype.backendIsInBrokenState = function() {
return r.Ext.getBackgroundPage().app.isFailedState();
}, e.prototype.askBackendToRetryInitialize = function() {
var e = this;
this.backendShowIsLoading(), r.app.retryInitialize().then(function(t) {
t ? e.onAppReady() : (e.errorShow(), e.removeLoader());
});
}, e.prototype.mobileHideScrollBars = function() {
i.default(".popup-content").css("min-height", i.default(window).height() + 60), 
window.scrollTo(0, 0);
}, e.prototype.doTrackPageView = function() {
r.app.analytics.collectEvent("pageview", "popup"), r.analytics.trackPageView();
}, e.prototype.initPageViewTracking = function() {
r.Platform.env.onPopoverVisible(this.doTrackPageView);
}, e.prototype.popupCleanup = function() {
r.Platform.env.removePopoverVisible(this.doTrackPageView), r.app.events.unsubscribe("feeder:expiredChanged", this.activateIntercom);
}, e.prototype.chromeFixPortScopingIssues = function() {
r.Ext.getBackgroundPage().ChromePlatformPort.prototype.customInitializer = function(e) {
this.port = e || chrome.runtime.connect();
};
}, e.prototype.backendShowIsLoading = function() {
var e = this, t = document.getElementById("ERROR");
t && (t.style.display = "none");
var n = document.getElementById("backend-is-loading");
if (!n) throw new Error("No loader element found.");
if (this.loader = n, this.loader.style.display = "flex", i.default(document.body).addClass("backend-is-loading"), 
this.isMigrating()) {
var o = this.loader.querySelector(".is-loading-text");
if (o) {
var r = function() {
var t = e.getMigrationStatus();
t ? o.innerHTML = "<h2>Data migration in progress</h2><p>This may take a while, so please wait.<br>Status: " + t.current + " out of " + t.total + " pending items.</p>" : o.textContent = "Done!";
};
r(), this.migrationTimer = window.setInterval(function() {
r();
}, 500);
}
}
this.loaderErrorTimer = window.setTimeout(function() {
e.isMigrating() ? document.location.reload() : (e.removeLoader(), e.errorShow());
}, 2e4);
}, e.prototype.removeLoader = function() {
window.clearTimeout(this.migrationTimer), this.loader && (i.default(document.body).removeClass("backend-is-loading"), 
this.loader.parentNode && this.loader.parentNode.removeChild(this.loader), this.loader = null, 
clearTimeout(this.loaderErrorTimer));
}, e.prototype.getMigrationStatus = function() {
var e = r.Ext.getBackgroundPage();
return !(!e || "object" != typeof e._migrationToRun) && e._migrationToRun;
}, e.prototype.isMigrating = function() {
return !!this.getMigrationStatus();
}, e.prototype.errorHide = function() {
var e = document.getElementById("ERROR");
e && (e.style.display = "none"), i.default(".popup").show();
}, e.prototype.errorShow = function() {
var e = document.getElementById("ERROR");
e && (e.style.display = "block"), i.default(".popup").hide();
}, e.prototype.fixStupidChromeScrollbarBug = function() {
i.default("body").hasClass("is-not-standalone") && "undefined" != typeof chrome && chrome.tabs.getZoomSettings(function(e) {
var t = e.defaultZoomFactor;
if (!(t <= 1)) {
var n = 6;
t > 1.5 && (n = 12), t > 1.95 && (n = 16), t > 2.25 && (n = 20);
var o = Math.floor(540 / t) - n * t, i = Math.floor(510 / t) - n * t, r = document.createElement("style");
r.type = "text/css", r.innerHTML = ".platform-chrome .page-scroll-container { max-height: " + o + "px !important; }\n.platform-chrome.in-queue .page-scroll-container,\n.platform-chrome.with-notifications .page-scroll-container { max-height: " + i + "px !important; }\n", 
document.body.appendChild(r);
}
});
}, e.prototype.backendDoesntExistYet = function() {
return !(r.Ext.isOnline() || r.Ext.getBackgroundPage() && r.Ext.getBackgroundPage().onAppReady);
}, e.prototype.backendPageHasntEvenLoadedYet = function() {
return r.Ext.isOnline() && !r.Ext.getBackgroundPage().onAppReady;
}, e.prototype.reloadWaitingForBackendToExist = function() {
setTimeout(function() {
document.location.reload();
}, 5e3);
}, e;
}(), a = new s(), e("Init", a), a.start();
}
};
}), System.register("client/controllers/screenconnectedautomatically", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.template.set("email", o.app.user.preferences.get("feeder:email")), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#connected-automatically";
}, t.prototype.events = function() {
return {
"click .good": "hideAndConfirm",
"click .bad": "gotoSyncSettings"
};
}, t.prototype.inAppURL = function() {
return [ "connected-automatically" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.hideAndConfirm = function() {
this.vc.stateFactory.shouldUpdatePreference(this.vc, "backend:hasChangedStatusAndNeedsToVerifyWithUser", !1), 
this.modal && this.modal.destroy();
}, t.prototype.gotoSyncSettings = function() {
this.vc.openSettingsPage("/account"), this.modal && this.modal.destroy();
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenconsume", [ "jquery", "client/controller" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, n) {
var o = e.call(this, t) || this;
return o.isInitialized = !1, o.initialPost = n, o;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#popup-consume";
}, t.prototype.events = function() {
return {
"click-or-touch .title": "toggleStar",
"click-or-touch .history-previous": "goPrevious",
"click-or-touch .history-next": "goNext"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "consume" ];
}, t.prototype.onVisible = function() {
this.setPost(this.initialPost);
}, t.prototype.setPost = function(e) {
if (!this.isInitialized && e && this.post !== e) {
this.post = e, this.isInitialized = !0, this.template.set("title", e.title);
var t = n.default('<iframe class="popup-consume-iframe">');
t.attr("src", e.getConsumePath()), t.css("height", "calc(100vh - 45px)"), this.template.el("iframe, x-iframe").replaceWith(t), 
this.post.markAsRead(), this.setStar();
}
}, t.prototype.toggleStar = function(e) {
e.preventDefault(), this.post.toggleStar(), this.setStar();
}, t.prototype.setStar = function() {
this.template.el(".bar").toggleClass("starred-post", !!this.post.is_starred);
}, t.prototype.navigateTo = function(e) {
e && (this.isInitialized = !1, this.setPost(e));
}, t.prototype.goPrevious = function() {
this.vc.historyPrevious();
}, t.prototype.goNext = function() {
this.vc.historyNext();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/controllers/screencouldnotverifytoken", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return o.app.analytics.collectEvent("screen:visible", "couldnotverifytoken"), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#could-not-verify-token";
}, t.prototype.events = function() {
return {
"click .action-button": "gotoSyncSettings"
};
}, t.prototype.inAppURL = function() {
return [ "could-not-verify-token" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.gotoSyncSettings = function() {
o.app.analytics.collectEvent("screen:couldnotverifytoken:button", "go_to_sync"), 
this.vc.openSettingsPage("/account"), this.modal && this.modal.destroy();
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenexpired", [ "jquery", "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var o = e.call(this, t) || this;
i.app.analytics.collectEvent("screen:visible", "expired");
var r = n.default(o.template.container);
return i.Ext.isOnline() ? (r.find(".is-online").show(), r.find(".is-not-online").hide()) : (r.find(".is-online").hide(), 
r.find(".is-not-online").show()), r.find(".product-name").text(i.app.user.getProductName()), 
o.modal && o.modal.didResize(), setTimeout(function() {
n.default("#feeder-is-installed-flag.feeder-is-installed").length ? (r.find(".is-extension-installed").show(), 
r.find(".is-extension-not-installed").hide()) : (r.find(".is-extension-installed").hide(), 
r.find(".is-extension-not-installed").show()), o.modal && o.modal.didResize();
}, 500), o;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#expired";
}, t.prototype.events = function() {
return {
"click .add-payment": "addPayment"
};
}, t.prototype.inAppURL = function() {
return [ "expired" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.addPayment = function(e) {
e.preventDefault(), i.app.analytics.collectEvent("screen:expired:button", "add_payment"), 
i.Ext.isOnline() ? document.location.href = i.Config.feeder.payURL : (i.UI.openTab(i.Config.feeder.payURL), 
i.UI.closePopup());
}, t;
}(o.default), e("default", r);
}
};
}), System.register("app/library/ts/debounce", [], function(e, t) {
"use strict";
function n(e, t, n) {
void 0 === n && (n = !1);
var o;
return function() {
var i = this, r = arguments, s = function() {
o = null, n || e.apply(i, r);
}, a = n && !o;
clearTimeout(o), o = setTimeout(s, t), a && e.apply(i, r);
};
}
t && t.id;
return e("default", n), {
setters: [],
execute: function() {}
};
}), System.register("client/components/CountGroup", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
return e.text !== this.props.text;
}, t.prototype.render = function() {
return n.createElement("div", {
className: "tpl-count-group",
onClick: this.props.onClick
}, n.createElement("div", {
className: "mark-as-read green-button--extra"
}, "✔"), n.createElement("div", {
className: "count"
}, this.props.text));
}, t;
}(n.Component), e("CountGroup", o);
}
};
}), System.register("client/components/ModalContainer", [ "react", "react-dom" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.container = document.createElement("div"), n.container.className = t.className || "", 
n.container.addEventListener("click", function(e) {
n.props.onClick && n.props.onClick(e);
}, !1), n.modalRoot = document.body, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.modalRoot.appendChild(this.container);
}, t.prototype.componentWillUnmount = function() {
this.modalRoot.removeChild(this.container);
}, t.prototype.render = function() {
return o.createPortal(this.props.children, this.container);
}, t;
}(n.Component), e("ModalContainer", i);
}
};
}), System.register("client/components/ContextMenu", [ "react", "react-dom", "jquery", "client/components/ModalContainer" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = 30, a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.boundGlobalEventHandlers = !1, n.hideEvent = function(e) {
if (!e.target.doNotTriggerHideEvent) {
var t = o.findDOMNode(n);
t instanceof Element && (t.contains(e.target) || t === e.target) || (e.stopPropagation(), 
e.preventDefault(), n.props.shouldClose && n.props.shouldClose());
}
}, n.resizeEvent = function() {
n.revertDocumentSize(), n.adjustDocumentSize();
}, n.state = {
stepAnimationsEnabled: !1,
stepShow: !1,
x: 0,
y: 0,
marginLeft: t.marginLeft || 0,
marginTop: t.marginTop || 0,
sides: []
}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.props.isVisible && (this.reposition(), this.adjustDocumentSize(), this.bindGlobalEventHandlers(), 
this.startAnimationSequence());
}, t.prototype.componentWillUnmount = function() {
this.cleanUp();
}, t.prototype.componentDidUpdate = function(e, t, n) {
!e.isVisible && this.props.isVisible && (this.adjustDocumentSize(), this.reposition(), 
this.bindGlobalEventHandlers(), this.startAnimationSequence()), this.props.isVisible || this.cleanUp(), 
t.y !== this.state.y && this.adjustDocumentSize();
}, t.prototype.cleanUp = function() {
this.revertDocumentSize(), this.boundGlobalEventHandlers = !1, window.removeEventListener("click", this.hideEvent, !0), 
window.removeEventListener("contextmenu", this.hideEvent, !0), window.removeEventListener("resize", this.resizeEvent, !0);
}, t.prototype.startAnimationSequence = function() {
var e = this;
this.props.noAnimateIn ? this.setState({
stepShow: !0
}) : (setTimeout(function() {
e.setState({
stepAnimationsEnabled: !0
});
}, 10), setTimeout(function() {
e.setState({
stepShow: !0
});
}, 20));
}, t.prototype.reposition = function() {
if (this.props.isVisible) {
var e = this.state.x, t = this.state.y, n = this.props.elementPosition();
if (n instanceof Element) {
var r = i.default(n).rect(), s = {
x: {
left: r.left,
right: r.left + r.width,
center: r.left + r.width / 2
},
y: {
top: r.top,
bottom: r.top + r.height,
center: r.top + r.height / 2
}
};
e = s.x[this.props.elementSticky ? this.props.elementSticky.x : "center"] || s.x.center, 
t = s.y[this.props.elementSticky ? this.props.elementSticky.y : "center"] || s.y.center;
} else n && (e = n.x, t = n.y);
var a = [], c = o.findDOMNode(this), l = i.default(c).rect();
if (t + l.height > window.innerHeight && t - i.default(window).scrollTop() - l.height > 0 ? a.push("bottom") : a.push("top"), 
(e + l.width > window.innerWidth || this.props.forceRight) && a.push("right"), n instanceof Element) var r = i.default(n).rect();
a.contains("bottom") && (t -= l.height), this.setState({
x: e,
y: t,
sides: a
});
}
}, t.prototype.adjustDocumentSize = function() {
if (this.props.isVisible) {
var e = o.findDOMNode(this), t = i.default(e).rect(), n = this.state.y + t.height;
document.body.clientHeight > n + s || (i.default(document.body).css("height", n + s), 
this.adjustedDocumentSize = !0);
}
}, t.prototype.revertDocumentSize = function() {
this.adjustedDocumentSize && (i.default(document.body).css("height", ""), this.adjustedDocumentSize = !1);
}, t.prototype.bindGlobalEventHandlers = function() {
var e = this;
this.boundGlobalEventHandlers || this.props.isVisible && setTimeout(function() {
if (!e.props.isVisible) return !1;
e.boundGlobalEventHandlers = !0, window.addEventListener("click", e.hideEvent, !0), 
window.addEventListener("contextmenu", e.hideEvent, !0), window.addEventListener("resize", e.resizeEvent, !0);
}, 100);
}, t.prototype.render = function() {
var e = {
left: this.state.x + this.state.marginLeft,
top: this.state.y + this.state.marginTop
}, t = [ this.state.stepAnimationsEnabled ? "animations-on" : null, this.props.isVisible && this.state.stepShow ? "show" : null, this.props.noAnimateIn ? "no-animate-in" : null, this.props.className ];
return t = t.concat(this.state.sides), n.createElement(r.ModalContainer, {
className: this.props.className ? this.props.className : ""
}, this.props.isVisible ? n.createElement("div", {
className: "tooltip context-menu " + t.join(" "),
style: e
}, this.props.children) : null);
}, t;
}(n.Component), e("ContextMenu", a);
}
};
}), System.register("client/components/ContextMenuItem", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClick = function(e) {
e.stopPropagation(), e.preventDefault(), n.props.onClick && n.props.onClick();
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "tooltip-item " + (this.props.className || ""),
onClick: this.didClick
}, this.props.children);
}, t;
}(n.Component), e("ContextMenuItem", o);
}
};
}), System.register("client/dto/PostCollectionable", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/components/ContextMenuForPost", [ "react", "client/components/ContextMenu", "client/components/ContextMenuItem" ], function(e, t) {
"use strict";
function n(e) {
return "string" == typeof e && [ "mark-all-as-read", "open-all-unread", "open-every-unread-post", "clear-all-unread" ].includes(e);
}
var o, i, r, s;
t && t.id;
return e("isGlobalContextMenuAction", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
isJumpMenuOpen: !1
}, n;
}
return __extends(t, e), t.prototype.toggleJumpMenu = function(e) {
this.setState({
isJumpMenuOpen: e
});
}, t.prototype.render = function() {
var e = this;
return o.createElement(i.ContextMenu, {
ref: "contextMenu",
className: "with-arrow",
isVisible: !0,
elementPosition: this.props.elementPosition,
shouldClose: this.props.shouldClose
}, this.state.isJumpMenuOpen ? o.createElement("div", null, o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-midnight");
}
}, "Midnight"), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-day");
}
}, "1 day"), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-week");
}
}, "1 week"), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-month");
}
}, "1 month")) : o.createElement("div", null, o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("toggle-read");
}
}, "Toggle read"), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("toggle-star");
},
className: this.props.highlightItem && this.props.highlightItem.includes("starred") ? "highlighted" : ""
}, "Toggle star"), this.props.canPostCollections ? o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("add-to-collection");
}
}, "Add to collection") : null, o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("mark-all-as-read");
}
}, "Mark feed as read"), this.props.hide && this.props.hide.includes("open-many") ? null : o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-all-unread");
}
}, "Open all unread in feed"), this.props.hide && this.props.hide.includes("open-many") ? null : o.createElement("div", null, o.createElement("div", {
className: "tooltip-item separator"
}, o.createElement("span", null, "...")), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-every-unread-post");
}
}, "Open every unread post")), o.createElement("div", {
className: "tooltip-item separator"
}, o.createElement("span", null, "...")), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("clear-all-unread");
}
}, "Mark all as read"), this.props.hide && this.props.hide.includes("jump") ? null : o.createElement("div", null, o.createElement("div", {
className: "tooltip-item separator"
}, o.createElement("span", null, "...")), o.createElement(r.ContextMenuItem, {
onClick: function() {
return e.toggleJumpMenu(!0);
}
}, "Jump..."))));
}, t;
}(o.Component), e("ContextMenuForPost", s);
}
};
}), System.register("client/components/ContextMenuForFeed", [ "react", "client/components/ContextMenu", "client/components/ContextMenuItem", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
canOpenManyTabs: !r.Ext.isOnline()
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.createElement(o.ContextMenu, {
ref: "contextMenu",
className: "with-arrow",
isVisible: !0,
elementPosition: this.props.elementPosition,
shouldClose: this.props.shouldClose
}, n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("edit");
}
}, "Edit feed"), n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("goto-page");
}
}, "Go to page"), this.state.canOpenManyTabs ? n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-all-unread");
}
}, "Open all unread in feed") : null, n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("mark-feed-as-read");
}
}, "Mark feed as read"), n.createElement("div", {
className: "tooltip-item separator"
}, n.createElement("span", null, "...")), n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("reload-sync");
}
}, "Reload feeds"), this.state.canOpenManyTabs ? n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-every-unread-post");
}
}, "Open every unread post") : null, n.createElement("div", {
className: "tooltip-item separator"
}, n.createElement("span", null, "...")), n.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("clear-all-unread");
}
}, "Mark all as read"));
}, t;
}(n.Component), e("ContextMenuForFeed", s);
}
};
}), System.register("client/components/FeedListItem", [ "react", "react-dom", "client/components/CountGroup", "client/components/FeederIcon", "client/components/ContextMenuForFeed" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleFlerp = function(e) {}, n.toggleContextMenu = function(e) {
n.setState({
isContextMenuOpen: e
});
}, n.didClickOpenFlerp = function(e) {
e.stopPropagation(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickCloseFlerp = function(e) {
e.stopPropagation(), n.toggleFlerp(!1);
}, n.didActivateContextMenu = function(e) {
e.preventDefault(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickListItem = function(e) {
if (n.refs.contextMenu) {
var t = o.findDOMNode(n.refs.contextMenu);
if (t instanceof Element && t.contains(e.target)) return;
}
if (e.ctrlKey || e.metaKey) return void n.toggleFlerp(!0);
n.props.shouldOpen(n.props.item);
}, n.didClickContextMenu = function(e) {
n.toggleContextMenu(!1), n.props.shouldAction(n.props.item, e);
}, n.didClickFlerpAction = function(e, t) {
t.stopPropagation(), n.toggleFlerp(!1), n.props.shouldAction(n.props.item, e);
}, n.didClickMarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldAction(n.props.item, "mark-feed-as-read");
}, n.state = {
isFlerpOpen: !1,
isFlerpAnimationOn: !1,
isContextMenuOpen: !1,
rightClick: {
x: 0,
y: 0
}
}, n;
}
return __extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
if (e.isHighlighted !== this.props.isHighlighted && this.props.isHighlighted) {
var n = o.findDOMNode(this);
n instanceof Element && n.scrollIntoViewSmart();
}
}, t.prototype.render = function() {
var e = this, t = [ "tpl-list-item-feed", "list-item", this.props.isOdd ? "odd" : "even", this.state.isFlerpOpen ? "opened" : "", this.props.isHighlighted ? "active-highlighted" : "", this.props.typeClass ];
return n.createElement("div", {
onClick: this.didClickListItem,
onContextMenu: this.didActivateContextMenu,
className: t.join(" ")
}, n.createElement("div", {
className: "item"
}, n.createElement("div", {
className: "flerp",
onClick: this.didClickOpenFlerp
}, n.createElement("div", {
className: "flerp-icon"
}, n.createElement(r.FeederIcon, {
icon: "more-small"
}))), n.createElement("div", {
className: "cover"
}), n.createElement("div", {
className: "item-icon"
}, "string" == typeof this.props.favicon ? n.createElement("img", {
src: this.props.favicon
}) : this.props.favicon), n.createElement("div", {
className: "item-title"
}, n.createElement("span", {
className: "item-title--text"
}, this.props.title)), n.createElement("div", {
className: "item-count-holder"
}, this.props.count > 0 ? n.createElement(i.CountGroup, {
text: this.props.count.toString(),
onClick: this.didClickMarkAsRead
}) : null)), this.state.isFlerpOpen || this.state.isFlerpAnimationOn ? n.createElement("div", {
className: "tpl-drawer-menu"
}, n.createElement("div", {
className: "drawer-buttons-container"
}, n.createElement("div", {
onClick: this.didClickFlerpAction.bind(this, "edit"),
className: "drawer-button edit-feed"
}, n.createElement(r.FeederIcon, {
icon: "small-wrench"
}), " Edit"), n.createElement("div", {
onClick: this.didClickFlerpAction.bind(this, "open-all-unread"),
className: "drawer-button open-all-unread"
}, n.createElement(r.FeederIcon, {
icon: "open-in"
}), " Open all unread")), n.createElement("div", {
className: "drawer-button cancel",
title: "Cancel",
onClick: this.didClickCloseFlerp
}, n.createElement(r.FeederIcon, {
icon: "small-close"
}))) : null, this.state.isContextMenuOpen ? n.createElement(s.ContextMenuForFeed, {
elementPosition: function() {
return e.state.rightClick;
},
shouldClose: function() {
return e.toggleContextMenu(!1);
},
didClickItem: this.didClickContextMenu
}) : null);
}, t;
}(n.PureComponent), e("FeedListItem", a);
}
};
}), System.register("client/components/LoadingScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "loading-screen"
});
}, t;
}(n.Component), e("LoadingScreen", o);
}
};
}), System.register("client/components/NoFeedsInFolderScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.gotoSettings = function() {
n.props.shouldOpenSettings();
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "tpl-screen-no-posts no-screen"
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("div", {
className: "no-screen--title"
}, "Folder is empty"), n.createElement("div", {
className: "no-screen--text"
}, n.createElement("a", {
href: "",
className: "button--secondary",
onClick: this.gotoSettings
}, "Go to settings and add feeds"))));
}, t;
}(n.Component), e("NoFeedsInFolderScreen", o);
}
};
}), System.register("client/components/FeedList", [ "react", "client/backend-imports", "client/components/FeedListItem", "client/components/FeederIcon", "client/components/LoadingScreen", "client/components/NoFeedsInFolderScreen" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
c = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this, t = this.props.items.map(function(t, s) {
var a, c, l, u, p;
return t instanceof o.Feed ? (a = "is-feed", c = t.countUnread(), l = t.favicon, 
u = t.title, p = !0) : t instanceof o.Folder ? (a = "is-folder", c = t.countUnread(), 
l = o.Config.images.folder, u = t.name, p = !0) : (a = "is-magic-item", "function" == typeof t.updateUnread && t.updateUnread(), 
c = t.count, l = n.createElement(r.FeederIcon, {
icon: t.icon
}), u = t.title, p = !1), n.createElement(i.FeedListItem, {
key: t.id,
item: t,
title: u,
favicon: l,
count: c,
typeClass: a,
isOdd: s % 2 == 1,
isHighlighted: s === e.props.highlightedIndex,
hasContextMenu: p,
shouldOpen: e.props.shouldOpenItem,
shouldAction: e.props.shouldActionFromItem
});
});
return this.props.isLoading ? n.createElement(s.LoadingScreen, null) : n.createElement("div", {
className: "tpl-feed-list"
}, t.length ? t : n.createElement(a.NoFeedsInFolderScreen, {
shouldOpenSettings: this.props.shouldOpenSettings
}));
}, t;
}(n.Component), e("FeedList", c);
}
};
}), System.register("client/controllers/feedcontainer", [ "react", "react-dom", "app/library/ts/debounce", "client/controller", "client/backend-imports", "client/appglobals", "client/components/FeedList", "client/pui/confirm" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p, d, h, f, m, g, v;
n = this;
t && t.id;
return {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
} ],
execute: function() {
p = 20, d = function() {
function e(e, t, n, o) {
var i = this;
this.renderCallbacks = [], this.lastScroll = 0, this.folderChanged = function(e) {
i.folder = e, i.populate();
}, this.gotoItem = function(e) {
if (!i.controller.event.paused) {
var t = e;
if (e instanceof h && (e = e.createModel()), e instanceof a.Folder) {
var n = i.controller.vc.controllerInjector("Folder"), o = new n(i.controller.vc, e);
i.controller.vc.pushScreen(o), i.controller.vc.history.setActiveAction(e);
} else e instanceof a.Feed && (i.controller.vc.stateFactory.shouldGotoPostList(i.controller.vc, e), 
i.controller.vc.history.setActiveAction(e), i.navigateTo(t));
}
}, this.performFeedAction = function(e, t) {
switch (t) {
case "reload-sync":
c.app.poller.forceUpdate();
break;

case "goto-page":
i.gotoPage(e);
break;

case "mark-feed-as-read":
i.markAllAsRead(e);
break;

case "edit":
i.controller.vc.showSettingsScreen(e);
break;

case "open-all-unread":
i.openAllUnread(e);
break;

case "open-every-unread-post":
i.openAllUnread("global");
break;

case "clear-all-unread":
i.controller.clearAllUnread(), i.render();
}
}, this.renderDebounced = r.default(this._render.bind(this), 5), this.folder = e, 
this.controller = n, this.container = t, this.props = o, this.state = {
highlightedIndex: "number" == typeof o.highlightedIndex && o.highlightedIndex,
isLoading: !1,
listItems: []
}, this.controller.vc.listener.addModelListener(e, this.folderChanged), this.populate(!0);
}
return e.prototype.destroy = function() {
i.unmountComponentAtNode(this.container), this.controller.vc.listener.removeModelListener(this.folder, this.folderChanged);
}, e.prototype.clearItems = function() {
this.state.listItems = [], this.controller.vc.history.reset();
}, e.prototype.addItem = function(e) {
this.state.listItems.push(e), this.controller.vc.history.addAction(e), this.state.listItems.indexOf(e) === this.state.highlightedIndex && this.controller.vc.history.setActiveAction(e);
}, e.prototype.markAllAsRead = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return e instanceof h ? c.app.analytics.collectEvent("mark-all-as-read", "all-folder") : e instanceof a.Feed ? c.app.analytics.collectEvent("mark-all-as-read", "feed") : e instanceof a.Folder && c.app.analytics.collectEvent("mark-all-as-read", "folder"), 
[ 4, e.countUnread() ];

case 1:
return t = o.sent(), [ 4, s.askMarkManyAsRead(t) ];

case 2:
return n = o.sent(), n ? [ 4, e.markAllAsRead() ] : [ 2 ];

case 3:
return o.sent(), this.render(), [ 2 ];
}
});
});
}, e.prototype.openAllUnread = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, g(e) ];

case 1:
return t.sent(), this.render(), [ 2 ];
}
});
});
}, e.prototype.gotoPage = function(e) {
e instanceof a.Feed && c.UI.openTab(e.link);
}, e.prototype.navForward = function(e) {
this.gotoItem(e);
}, e.prototype.navigateTo = function(e) {
e && (this.state.highlightedIndex = this.controller.vc.history.list.indexOf(e), 
this.render());
}, e.prototype.populate = function(e) {
var t = this;
void 0 === e && (e = !1), this.clearItems(), this.props.showAllItem && (this.folder.isEmpty() || this.addItem(new f(this.folder, this.props.unreadOfAll || function() {
return 0;
}))), this.props.showStarredItem && this.addItem(new m(this.folder)), this.folder.forEachItem(function(e) {
t.addItem(e);
}), e ? this._render() : this.render();
}, e.prototype.render = function(e) {
e && this.renderCallbacks.push(e), this.renderDebounced();
}, e.prototype._render = function() {
var e = o.createElement(l.FeedList, {
isLoading: this.state.isLoading,
items: this.state.listItems,
highlightedIndex: this.state.highlightedIndex,
shouldOpenItem: this.gotoItem,
shouldActionFromItem: this.performFeedAction,
shouldOpenSettings: this.controller.vc.openSettingsPage
}, null);
i.render(e, this.container), this.controller.vc.refreshWindowHeight(), this.renderCallbacks.forEach(function(e) {
return e();
}), this.renderCallbacks = [];
}, e;
}(), e("default", d), h = function() {
function e() {}
return e;
}(), e("MagicItem", h), f = function(e) {
function t(t, n) {
var o = e.call(this) || this;
return o.id = "posts-for-" + t.id, o.folder = t, o.title = "All posts", o.favicon = a.Config.images.folder, 
o.getUnread = n, o.icon = "all-posts", o.updateUnread(), o;
}
return __extends(t, e), t.prototype.updateUnread = function() {
this.count = this.getUnread();
}, t.prototype.countUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, this.getUnread() ];
});
});
}, t.prototype.createModel = function() {
return this.folder.standard ? c.app.user.createFeedOnlyUnread() : c.app.user.createFeedOfFolder(this.folder);
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.folder.standard ? [ 4, c.app.user.unreads.clearAll() ] : [ 3, 2 ];

case 1:
return [ 2, e.sent() ];

case 2:
return [ 4, this.folder.markAllAsRead() ];

case 3:
return [ 2, e.sent() ];
}
});
});
}, t;
}(h), e("AllPostsInFeedsItem", f), m = function(e) {
function t(t) {
var n = e.call(this) || this;
return n.id = "starred-for-" + t.id, n.folder = t, n.title = "Starred", n.favicon = a.Config.images.folder, 
n.icon = "star-favicon", n.count = 0, n;
}
return __extends(t, e), t.prototype.updateUnread = function() {}, t.prototype.countUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, 0 ];
});
});
}, t.prototype.createModel = function() {
return c.app.user.createFeedOnlyStarred();
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.folder.markAllAsRead() ];

case 1:
return [ 2, e.sent() ];
}
});
});
}, t;
}(h), e("AllStarredInFeedsItem", m), g = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t, n, o, n;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return "global" !== e ? [ 3, 5 ] : (c.app.analytics.collectEvent("open-all", "every"), 
[ 4, c.app.user.unreads.count() ]);

case 1:
return t = i.sent(), t >= p ? [ 4, v(t) ] : [ 3, 3 ];

case 2:
return n = i.sent(), c.app.user.unreads.openAll(n), [ 3, 4 ];

case 3:
c.app.user.unreads.openAll("open_all"), i.label = 4;

case 4:
return [ 2 ];

case 5:
return [ 4, e.unreadPosts() ];

case 6:
return o = i.sent(), o.length >= p ? [ 4, v(o.length) ] : [ 3, 8 ];

case 7:
switch (n = i.sent()) {
case "cancel":
return [ 2 ];

case "open_minimum":
o = o.slice(0, 20);
}
i.label = 8;

case 8:
return c.app.ui.openMany(o), [ 2 ];
}
});
});
}, e("openAllUnread", g), v = function(e) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return "suppress" === c.app.user.preferences.get("ask:openMany") ? [ 2, "open_all" ] : [ 4, u.default.asyncConfirm("This will open a large number of tabs (" + e + "). Are you sure?", [ {
text: "Cancel",
value: "cancel"
}, {
text: "Open all " + e,
value: "open_all"
}, {
text: "Open only 20",
value: "open_minimum"
} ]) ];

case 1:
return [ 2, t.sent() ];
}
});
});
};
}
};
}), System.register("client/controllers/screenfolder", [ "client/controllers/feedcontainer", "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t, o, r) {
void 0 === r && (r = {});
var s = e.call(this, t) || this;
s.updateUnreadCount = function() {
s.populate();
}, s.folder = o, r.scrollTop && (s.lastScroll = r.scrollTop), s.template.set("title", s.folder.name), 
s.template.set("favicon", i.Config.images.folder), s.template.set("count", 0), s.vc.listener.listen("feeds:recount", s.updateUnreadCount), 
s.vc.history.wrapAround = !0;
var a = s.template.el(".tpl-feed-list")[0];
return s.feedContainer = new n.default(o, a, s, {
highlightedIndex: !1,
showAllItem: !0,
showStarredItem: !1,
unreadOfAll: function() {
return s.folder.countUnread();
}
}), s.populate(), s;
}
return __extends(t, e), t.fromId = function(e, n) {
var o = i.app.user.structure.folder(n.folder);
return !!o && new t(e, o, {
active: n.active
});
}, t.prototype.events = function() {
return {
"click .deck-settings": "showDeckSettings"
};
}, t.prototype.templateName = function() {
return "screen#folder";
}, t.prototype.inAppURL = function() {
return [ "folder", this.folder.id || "new" ];
}, t.prototype.id = function() {
return {
id: "Folder",
folder: this.folder.id,
active: this.feedContainer.state.highlightedIndex,
scrollTop: this.lastScroll
};
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.feedContainer.destroy(), this.vc.listener.unlisten("feeds:recount", this.updateUnreadCount);
}, t.prototype.markAllAsReadFromBar = function(e) {
e.preventDefault(), this.folder.markAllAsRead(), this.updateUnreadCount();
}, t.prototype.navForward = function() {
this.feedContainer.navForward(this.vc.history.current());
}, t.prototype.navigateTo = function(e) {
this.feedContainer.navigateTo(e);
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return this.feedContainer.populate(), this.tryToRestoreScroll(), [ 2 ];
});
});
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/controllers/screeniframe", [ "jquery", "client/controller" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o, i) {
var r = e.call(this, t) || this;
return r.vc.hideNotification && r.vc.hideNotification(), r.template.set("count", !1), 
r.template.set("title", i), r.src = o, n.default.makeArray(r.template.element.find("x-iframe")).forEach(function(e) {
r.fixIframe(e);
}), r;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#iframe";
}, t.prototype.id = function() {
return !1;
}, t.prototype.events = function() {
return {};
}, t.prototype.inAppURL = function() {
return [ "iframe" ];
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.vc.toggleNotification();
}, t.prototype.fixIframe = function(e) {
n.default(e).replaceWith(n.default("<iframe></iframe>").attr("src", this.src));
}, t.prototype.back = function(e) {
e && (e.preventDefault(), e.stopPropagation()), this.vc.popScreenInstant();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/controllers/screenwelcome", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#welcome";
}, t.prototype.id = function() {
return !1;
}, t.prototype.events = function() {
return {
"click .start-using-feeder": "huzzah"
};
}, t.prototype.inAppURL = function() {
return [ "welcome" ];
}, t.prototype.huzzah = function() {
this.template.element.addClass("byebye");
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/controllers/screensignup", [ "client/controller", "client/controllers/screeniframe", "client/appglobals", "client/pui/alert" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = [ "An error ocurred.\nPlease try again later" ], a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.onSuccess = !1, n.byebye = !1, n.showSignup(), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#signup";
}, t.prototype.events = function() {
return {
"submit .signup-form": "signup",
"submit .login-form": "login",
"click .i-dont-want-pro": "noPro",
"click .already-account": "toggleLogin",
"click .signup-please": "toggleSignup",
"click .terms-and-conditions": "clickedTermsAndConditions"
};
}, t.prototype.inAppURL = function() {
return [ "signup" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.onVisible = function() {
this.vc.shouldAlwaysHideNotification = !0, this.vc.toggleNotification(), i.app.analytics.collectEvent("onVisible", "signup");
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.vc.shouldAlwaysHideNotification = !1, this.vc.toggleNotification();
}, t.prototype.signup = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, o, a, c, l, u = this;
return __generator(this, function(p) {
switch (p.label) {
case 0:
if (e.preventDefault(), this.currentAlert) return this.currentAlert.destroy(), [ 2 ];
i.app.analytics.collectEvent("signup:clicked", "signup"), n = {}, this.template.el(".signup-form").serializeArray().forEach(function(e) {
n[e.name] = e.value;
}), this.template.el(".signup-form").addClass("loading"), this.template.el(".signup-form input").blur(), 
p.label = 1;

case 1:
return p.trys.push([ 1, 3, , 4 ]), [ 4, i.app.user.signupToPro(n) ];

case 2:
return t = p.sent(), o = t[0], a = t[1], [ 3, 4 ];

case 3:
return c = p.sent(), console.error(c), o = !1, a = s, [ 3, 4 ];

case 4:
return this.template.el(".signup-form").removeClass("loading"), o ? (i.app.analytics.collectEvent("signup:signup", "success"), 
this.succeeded()) : (i.app.analytics.collectEvent("signup:signup", "error"), l = (a || s).join("\n"), 
this.currentAlert = r.default.alert(l, function() {
u.currentAlert = null, u.template.el(".signup-form [name=email]")[0].focus();
})), [ 2 ];
}
});
});
}, t.prototype.login = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, o, a, c = this;
return __generator(this, function(l) {
switch (l.label) {
case 0:
return e.preventDefault(), this.currentAlert ? (this.currentAlert.destroy(), [ 2 ]) : (i.app.analytics.collectEvent("signup:clicked", "login"), 
t = {}, this.template.el(".login-form").serializeArray().forEach(function(e) {
t[e.name] = e.value;
}), this.template.el(".login-form").addClass("loading"), this.template.el(".login-form input").blur(), 
[ 4, i.app.user.loginToPro(t) ]);

case 1:
return n = l.sent(), o = n[0], a = n[1], this.template.el(".login-form").removeClass("loading"), 
o ? (i.app.analytics.collectEvent("signup:login", "success"), this.succeeded()) : (i.app.analytics.collectEvent("signup:login", "error"), 
this.currentAlert = r.default.alert((a || s).join("\n"), function() {
c.currentAlert = null, c.template.el(".login-form [name=email]")[0].focus();
})), [ 2 ];
}
});
});
}, t.prototype.noPro = function(e) {
var t = this;
e.preventDefault(), i.app.analytics.collectEvent("signup:clicked", "no-pro"), r.default.alertWithButtons('\n      <h2 class="margin-bottom-small">Are you sure?</h2>\n      <p>With a free account you get:</p>\n      <ul class="alert-list">\n        <li>Full backups</li>\n        <li>Sync between devices</li>\n        <li>iOS &amp; Android apps</li>\n        <li class="inset-list-item">… and more</ku>\n      </ul>\n      <p class="margin-bottom-medium">You can of course sign up later.</p>\n    '.replace(/\n/g, ""), "Continue without account", "Cancel").yes(function() {
i.app.analytics.collectEvent("signup:noAccount", "yes"), i.app.user.setDidChooseToUseBasic(!0), 
t.hide();
}).no(function() {
i.app.analytics.collectEvent("signup:noAccount", "no");
});
}, t.prototype.hide = function() {
this.template.element.addClass("byebye"), this.byebye = !0;
}, t.prototype.showSignup = function() {
this.template.el(".signup-container").addClass("signup").removeClass("login"), this.template.el(".pill-buttons a").removeClass("active").filter(".signup-please").addClass("active");
}, t.prototype.showLogin = function() {
this.template.el(".signup-container").addClass("login").removeClass("signup"), this.template.el(".pill-buttons a").removeClass("active").filter(".already-account").addClass("active");
}, t.prototype.toggleLogin = function(e) {
e.preventDefault(), i.app.analytics.collectEvent("signup:tab-switch", "login"), 
this.showLogin();
}, t.prototype.toggleSignup = function(e) {
e.preventDefault(), i.app.analytics.collectEvent("signup:tab-switch", "signup"), 
this.showSignup();
}, t.prototype.succeeded = function() {
this.hide(), this.onSuccess && this.onSuccess();
}, t.prototype.clickedTermsAndConditions = function(e) {
e.preventDefault();
var t = new o.default(this.vc, i.Config.feeder.termsUrl, "Terms & Conditions");
this.vc.setCurrentScreen(t), i.app.analytics.collectEvent("signup:terms-and-conditions", "read");
}, t.prototype.removeDelayInMilliseconds = function() {
return this.byebye ? 3e3 : 0;
}, t;
}(n.default), e("default", a);
}
};
}), System.register("client/components/PageStyleDialog", [ "react", "client/appglobals", "client/backend-imports" ], function(e, t) {
"use strict";
function n(e, t) {
return t.length === e.columns.length && t.every(function(t) {
return e.columns.includes(t);
});
}
var o, i, r, s;
t && t.id;
return e("comparePageStyleColumns", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.setColumnStyle = function(e) {
n.props.shouldChangePageStyle(__assign({}, n.props.pageStyle, {
defaultPage: "reader",
columns: e
}));
}, n.setDefaultPage = function(e) {
n.props.shouldChangePageStyle(__assign({}, n.props.pageStyle, {
defaultPage: e
}));
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this, t = "dashboard" !== this.props.pageStyle.defaultPage, s = [ {
name: "Minimal",
description: "Two panes with collapsing folders",
image: i.Ext.assetURL("icons/view-mode-1@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "content" ]) || n(this.props.pageStyle, [ "sidebar" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "content" ]);
}
}, {
name: "Reader",
description: "Read posts inline for fast consuming",
image: i.Ext.assetURL("icons/view-mode-2@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "feed" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "feed" ]);
}
}, {
name: "3-pane",
description: "The entire hierarchy for the best overview",
image: i.Ext.assetURL("icons/view-mode-3@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "feed", "content" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "feed", "content" ]);
}
}, {
name: "Dashboard",
description: "Real-time streams of information.",
image: i.Ext.assetURL("icons/view-mode-4@2x.png"),
isActive: "dashboard" === this.props.pageStyle.defaultPage,
onClick: function() {
return e.setDefaultPage("dashboard");
}
} ];
return o.default.createElement("div", {
className: "PageStyleDialog"
}, o.default.createElement("div", {
className: "PageStyleDialog--header"
}, o.default.createElement("div", {
className: "PageStyleDialog--title"
}, "Change viewing mode"), o.default.createElement("a", {
href: i.Ext.settingsURL(r.Config.feeder.root, {}, "/themes"),
className: "PageStyleDialog--themes-button button--secondary"
}, "Switch theme")), o.default.createElement("div", {
className: "PageStyleDialog--modes"
}, s.map(function(e) {
return o.default.createElement("div", {
onClick: e.onClick,
className: "PageStyleDialog--mode " + (e.isActive ? "is-active" : "not-active"),
key: e.name
}, o.default.createElement("div", {
className: "PageStyleDialog--mode-image"
}, o.default.createElement("img", {
src: e.image
})), o.default.createElement("div", {
className: "PageStyleDialog--mode-name"
}, e.name), o.default.createElement("div", {
className: "PageStyleDialog--mode-description"
}, e.description));
})));
}, t;
}(o.default.Component), e("PageStyleDialog", s);
}
};
}), System.register("client/components/_new_reader", [], function(e, t) {
"use strict";
function n() {
return i;
}
function o() {
i = !1;
}
var i;
t && t.id;
return e("shouldSeePageStyleDialog", n), e("resetShouldSeePageStyleDialog", o), 
{
setters: [],
execute: function() {
i = !!(document && document.location && document.location.href.indexOf("new_reader") >= 0);
}
};
}), System.register("client/components/SortToolbar", [ "react", "react-dom", "client/components/ContextMenu", "client/components/FeederIcon", "client/components/DisplaySettingsDialog", "client/components/PageStyleDialog", "client/components/_new_reader" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
} ],
execute: function() {
l = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.setShowDisplaySettings = function(e) {
n.setState({
showDisplaySettings: e
});
}, n.setShowSortSettings = function(e) {
n.setState({
showSortSettings: e
});
}, n.setShowPageStyleDialog = function(e) {
n.setState({
showPageStyleDialog: e
});
}, n.didChooseSort = function(e) {
n.props.shouldChangeSortOrder(e), n.setState({
showSortSettings: !1
});
}, n.didChooseTimestampType = function(e) {
var t = e.target.value;
n.props.shouldChangeTimestampType(t);
}, n.toggleAutoUpdate = function(e) {
n.props.shouldChangeAutoUpdate(e);
}, n.setShowContentStyle = function(e) {
n.props.shouldChangePostListStyle(__assign({}, n.props.postListStyle, {
showContent: e
}));
}, n.setCompactMode = function(e) {
n.props.shouldChangePostListStyle(__assign({}, n.props.postListStyle, {
compactMode: e
}));
}, n.state = {
showSortSettings: !1,
showDisplaySettings: !1,
showPageStyleDialog: c.shouldSeePageStyleDialog()
}, c.resetShouldSeePageStyleDialog(), n;
}
return __extends(t, e), t.prototype.render = function() {
var e, t, c = this, l = "small" === this.props.barHeight;
switch (this.props.sortOrder) {
case "oldest-first":
t = n.createElement(r.FeederIcon, {
icon: "arrow-up-small"
}), e = [ n.createElement("span", {
key: "icon",
className: "sort--button-icon icon",
ref: "sortButton"
}, n.createElement(r.FeederIcon, {
icon: "arrow-up-small"
})), n.createElement("span", {
key: "text",
className: "sort--button-label"
}, "Oldest first") ];
break;

default:
t = n.createElement(r.FeederIcon, {
icon: "arrow-down-small"
}), e = [ n.createElement("span", {
key: "icon",
className: "sort--button-icon icon",
ref: "sortButton"
}, n.createElement(r.FeederIcon, {
icon: "arrow-down-small"
})), n.createElement("span", {
key: "text",
className: "sort--button-label"
}, "Newest first ") ], "newest-first" !== this.props.sortOrder && console.warn("Unknown sortOrder", this.props.sortOrder);
}
var u = 0, p = this.props.defaultDisplayOptions;
return this.props.postDisplayOptions.filters.forEach(function(e) {
p.filters.contains(e) || (u += 1);
}), n.createElement("div", {
className: "tpl-sort-toolbar tpl-sort-toolbar--" + this.props.barHeight
}, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.createElement("div", {
className: "nav-button nav-button--icon prev hide-in-dashboard",
title: "Previous post",
onClick: function() {
return c.props.shouldNavigate("up");
}
}, n.createElement(r.FeederIcon, {
icon: "arrow-up"
})) : null, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.createElement("div", {
className: "nav-button nav-button--icon next hide-in-dashboard",
title: "Next post",
onClick: function() {
return c.props.shouldNavigate("down");
}
}, n.createElement(r.FeederIcon, {
icon: "arrow-down"
})) : null, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.createElement("div", {
className: "sort--select hide-in-dashboard"
}, n.createElement("div", {
className: "sort--select-item nav-button nav-button--icon " + ("collapsed" === this.props.postListStyle.showContent ? "active" : ""),
onClick: function() {
return c.setShowContentStyle("collapsed");
},
title: "Collapsed"
}, n.createElement(r.FeederIcon, {
icon: "collapsed"
})), n.createElement("div", {
className: "sort--select-item nav-button nav-button--icon " + ("expanded" === this.props.postListStyle.showContent ? "active" : ""),
onClick: function() {
return c.setShowContentStyle("expanded");
},
title: "Expanded"
}, n.createElement(r.FeederIcon, {
icon: "expanded"
}))) : null, n.createElement("div", {
className: "nav-button nav-button--text-icon sort--filters sort--button " + (this.state.showDisplaySettings ? "context-active" : ""),
onClick: function() {
return c.setShowDisplaySettings(!c.state.showDisplaySettings);
}
}, n.createElement("span", {
className: "icon",
ref: "filtersButton"
}, n.createElement(r.FeederIcon, {
icon: "filter-small"
})), n.createElement("span", {
className: "sort--button-label"
}, "Filters", u ? n.createElement("span", {
className: "sort--number-of-filters"
}, u) : null)), n.createElement("div", {
className: "nav-button nav-button--text-icon sort--order sort--button " + (this.state.showSortSettings ? "context-active" : ""),
onClick: function() {
return c.setShowSortSettings(!c.state.showSortSettings);
}
}, e), this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.createElement("div", {
ref: "pageStyleButton",
className: "nav-button display--button hide-in-dashboard " + (this.state.showPageStyleDialog ? "context-active" : ""),
onClick: function() {
return c.setShowPageStyleDialog(!c.state.showPageStyleDialog);
}
}, "Display") : null, n.createElement(i.ContextMenu, {
isVisible: this.state.showDisplaySettings,
className: l ? "with-tab" : "with-arrow",
elementPosition: function() {
return o.findDOMNode(c.refs.filtersButton);
},
elementSticky: {
x: "center",
y: "bottom"
},
marginLeft: l ? -11 : 0,
noAnimateIn: l,
shouldClose: function() {
return c.setShowDisplaySettings(!1);
}
}, l ? n.createElement("div", {
className: "context-menu-tab",
onClick: function() {
return c.setShowDisplaySettings(!1);
}
}, n.createElement(r.FeederIcon, {
icon: "filter-small"
})) : null, n.createElement(s.DisplaySettingsDialog, {
toggled: this.props.postDisplayOptions.filters,
canSeeFiltered: this.props.canSeeFiltered,
didChangeSelection: this.props.shouldChangeDisplaySettings
})), n.createElement(i.ContextMenu, {
isVisible: this.state.showSortSettings,
className: l ? "with-tab" : "with-arrow",
forceRight: !0,
elementPosition: function() {
return o.findDOMNode(c.refs.sortButton);
},
elementSticky: {
x: "center",
y: "bottom"
},
marginLeft: l ? 10 : 0,
noAnimateIn: l,
shouldClose: function() {
return c.setShowSortSettings(!1);
}
}, l ? n.createElement("div", {
className: "context-menu-tab",
onClick: function() {
return c.setShowSortSettings(!1);
}
}, t) : null, n.createElement("div", {
className: "ios-table"
}, n.createElement("div", {
className: "ios-table--header"
}, "Display"), n.createElement("div", null, n.createElement("div", {
className: "ios-table--row-header"
}, "Order"), n.createElement("div", {
onClick: function() {
return c.didChooseSort("oldest-first");
},
className: "ios-table--item ios-table--action"
}, n.createElement("div", {
className: "ios-table--item-label"
}, "Oldest first"), "oldest-first" === this.props.sortOrder ? n.createElement("div", {
className: "ios-table--item-right"
}, n.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.createElement("div", {
onClick: function() {
return c.didChooseSort("newest-first");
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.createElement("div", {
className: "ios-table--item-label"
}, "Newest first"), "newest-first" === this.props.sortOrder ? n.createElement("div", {
className: "ios-table--item-right"
}, n.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.createElement("div", {
className: "ios-table--row-header"
}, "Realtime"), n.createElement("div", {
onClick: function() {
return c.toggleAutoUpdate(!c.props.autoUpdate);
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.createElement("div", {
className: "ios-table--item-label"
}, "Auto-update"), this.props.autoUpdate ? n.createElement("div", {
className: "ios-table--item-right"
}, n.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.createElement("div", {
className: "ios-table--row-header"
}, "Style"), n.createElement("div", {
onClick: function() {
return c.setCompactMode(!c.props.postListStyle.compactMode);
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.createElement("div", {
className: "ios-table--item-label"
}, "Compact mode"), this.props.postListStyle.compactMode ? n.createElement("div", {
className: "ios-table--item-right"
}, n.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.createElement("div", {
className: "ios-table--row-header"
}, "Timestamp"), n.createElement("div", {
className: "ios-table--item ios-table--action"
}, n.createElement("select", {
value: this.props.timestampType,
onChange: this.didChooseTimestampType
}, n.createElement("option", {
value: "relative"
}, "Relative (1m ago)"), n.createElement("option", {
value: "absolute"
}, "Absolute (09:30)"), n.createElement("option", {
value: "none"
}, "None")))))), n.createElement(i.ContextMenu, {
isVisible: this.state.showPageStyleDialog,
elementPosition: function() {
return c.refs.pageStyleButton;
},
elementSticky: {
x: "center",
y: "bottom"
},
className: "with-arrow wide page-style-menu",
shouldClose: function() {
return c.setShowPageStyleDialog(!1);
}
}, n.createElement(a.PageStyleDialog, {
pageStyle: this.props.pageStyle,
shouldChangePageStyle: this.props.shouldChangePageStyle
})));
}, t;
}(n.Component), e("SortToolbar", l);
}
};
}), System.register("client/controllers/datahooks", [ "jquery", "client/pui/data", "client/appglobals" ], function(e, t) {
"use strict";
function n(e) {
var t = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), i = e.getMinutes(), s = r(t), a = r(n), c = r(o), l = r(i);
return e.getFullYear() + "-" + s + "-" + a + " " + c + ":" + l;
}
function o(e) {
var t = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), i = e.getMinutes(), s = r(t), a = r(n), c = r(o), l = r(i);
return e.getFullYear() + "-" + s + "-" + a + " " + c + ":" + l;
}
function i(e) {
var t = e.getHours(), n = e.getMinutes();
return r(t) + ":" + r(n);
}
function r(e) {
return e < 10 ? "0" + e : "" + e;
}
function s(e, t) {
void 0 === t && (t = {
allowFuture: !0
});
var n = (new Date().getTime() - e.getTime()) / 1e3, o = Math.abs(Math.floor(n / 60));
if (n < 0 && !t.allowFuture) return "";
var i = n < 0 ? " from now" : " ago";
switch (!0) {
case 0 == o:
return Math.floor(Math.abs(n)) < 2 ? "just now" : Math.floor(Math.abs(n)) + " sec " + i;

case o < 60:
return o + " min " + i;

case o < 1440:
return Math.floor(o / 60) + " hrs " + i;

case o < 44640:
var r = Math.floor(o / 1440);
return 1 === r ? r + " day " + i : r + " days " + i;

case o < 525600:
return Math.floor(o / 43200) + " mon " + i;

case o < 5256e3:
var s = Math.floor(o / 525960);
return 1 === s ? s + " year " + i : s + " yrs " + i;

case o < 5256e4:
return Math.floor(o / 525960 / 10) + " decades " + i;

case o < 5256e5:
return Math.floor(o / 525960 / 100) + " centuries " + i;

case o < 5256e6:
return Math.floor(o / 525960 / 1e3) + " millenia " + i;

case o < 5256e7:
return Math.floor(o / 525960 / 1e4) + " megaannums " + i;
}
return "∞ " + i;
}
function a(e) {
var t = (new Date().getTime() - e.getTime()) / 1e3, n = Math.abs(Math.floor(t / 60));
if (t < 0) return "";
switch (!0) {
case 0 == n:
return Math.floor(Math.abs(t)) + "s";

case n < 60:
return n + "m";

case n < 1440:
return Math.floor(n / 60) + "h";

case n < 44640:
return Math.floor(n / 1440) + "d";

case n < 525600:
return Math.floor(n / 43200) + "M";

default:
return Math.floor(n / 525960) + "y";
}
return "";
}
var c, l, u;
t && t.id;
return e("getFormattedDate", n), e("shortTimestamp", o), e("reallyShortTimestamp", i), 
e("timeSince", s), e("shortTimeSince", a), {
setters: [ function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
} ],
execute: function() {
l.dataHook("count .tpl-count-group .count", function(e, t) {
c.default(t).closest(".tpl-count-group").toggle(!!e), c.default(t).closest(".list-item").toggleClass("has-unread", !!e);
}), l.dataHook("starred .item", function(e, t) {
c.default(t).toggleClass("is-starred", !!e);
}), l.translateHook("post", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o, i, r;
return __generator(this, function(a) {
return t = !!e.feed_id && u.app.user.feed(e.feed_id), o = "", i = "", (e.published || e.created_at) && (r = new Date(e.created_at ? e.created_at : e.published), 
o = s(r), i = n(r)), [ 2, {
title: e.title,
link: e.link,
count: e.is_read ? "" : "NEW",
starred: e.is_starred,
favicon: t ? t.favicon : u.Config.defaultFavicon(),
subTitle: t ? t.title : "",
timestamp: o,
timestampHover: i
} ];
});
});
}), l.translateHook("feed", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
return t = {
title: e.title || "error",
favicon: e.favicon || "",
link: e.link || ""
}, e.isStale ? [ 2, t ] : (n = e.countUnread(), t.count = n, [ 2, t ]);
});
});
}), l.translateHook("folder", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
return t = e.countUnread(), [ 2, {
folder: e,
title: e.name,
favicon: u.Config.images.folder,
count: t
} ];
});
});
});
}
};
}), System.register("client/components/PostListItem", [ "react", "react-dom", "client/appglobals", "client/components/CountGroup", "client/components/FeederIcon", "client/controllers/datahooks", "client/components/ContextMenuForPost" ], function(e, t) {
"use strict";
function n(e, t, n) {
var o = "", i = "";
if (e) {
var r = new Date(e);
switch (t) {
case "none":
o = "";
break;

case "absolute":
o = n ? c.reallyShortTimestamp(r) : c.shortTimestamp(r);
break;

default:
o = n ? c.shortTimeSince(r) : c.timeSince(r, {
allowFuture: !1
});
}
i = c.getFormattedDate(r);
}
return [ o, i ];
}
var o, i, r, s, a, c, l, u, p, d;
t && t.id;
return e("makeTimestamp", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
} ],
execute: function() {
u = 2, p = 1, d = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleContextMenu = function(e) {
n.setState({
isJumpMenuOpen: !1,
isContextMenuOpen: e
});
}, n.toggleJumpMenu = function(e) {
n.setState({
isContextMenuOpen: !1,
isJumpMenuOpen: e
});
}, n.didActivateContextMenu = function(e) {
e.preventDefault(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickListItem = function(e) {
if (e.button !== p) {
if (n.refs.contextMenu) {
var t = i.findDOMNode(n.refs.contextMenu);
if (t instanceof Element && t.contains(e.target)) return;
}
e.ctrlKey || e.metaKey || e.button === u && !r.Ext.isOnline() ? n.props.shouldQueue(n.props.post) : n.props.shouldOpen(n.props.post);
}
}, n.didMouseDown = function(e) {
e.button === p && (e.preventDefault(), n.props.shouldQueue(n.props.post));
}, n.didClickMarkAsStarred = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !0);
}, n.didClickUnmarkAsStarred = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !1);
}, n.didClickToggleStar = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !n.props.isStarred);
}, n.didClickMarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldMarkAsRead(n.props.post, !0);
}, n.didClickUnmarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldMarkAsRead(n.props.post, !1);
}, n.didClickOpenFlerp = function(e) {
e.stopPropagation(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.toggleOnHover = function() {
n.setState({
isHover: !0
});
}, n.toggleOffHover = function() {
n.setState({
isHover: !1
});
}, n.didClickJump = function(e) {
n.props.shouldJumpUntil(e), n.toggleJumpMenu(!1);
}, n.performAction = function(e) {
if (n.toggleContextMenu(!1), l.isGlobalContextMenuAction(e)) n.props.shouldAction(n.props.post, e); else switch (e) {
case "toggle-read":
n.props.shouldMarkAsRead(n.props.post, !n.props.post.is_read);
break;

case "toggle-star":
n.props.shouldMarkAsStarred(n.props.post, !n.props.post.is_starred);
break;

case "add-to-collection":
n.props.shouldPromptPostCollections(n.props.post);
break;

case "jump-midnight":
n.didClickJump("midnight");
break;

case "jump-day":
n.didClickJump("day");
break;

case "jump-week":
n.didClickJump("week");
break;

case "jump-month":
n.didClickJump("month");
}
}, n.state = {
isHover: !1,
rightClick: {
x: 0,
y: 0
},
isContextMenuOpen: !1,
isJumpMenuOpen: !1
}, n;
}
return __extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
if (e.isHighlighted !== this.props.isHighlighted && this.props.isHighlighted) {
var n = i.findDOMNode(this);
n instanceof Element && n.scrollIntoViewSmart();
}
}, t.prototype.render = function() {
var e = this, t = n(this.props.published, this.props.timestampType, !!this.props.postListStyle.compactMode), i = t[0], c = t[1], u = [ "list-item", "tpl-list-item-post", this.props.isOdd ? "odd" : "even", this.props.isQueued ? "queued" : "", this.props.isHighlighted ? "active-highlighted" : "", this.state.isHover ? "hover" : "", this.props.postListStyle.compactMode ? "compact-mode" : "" ], p = [ "item", this.props.isStarred ? "is-starred" : "", this.props.isFiltered ? "is-filtered" : "" ];
return o.createElement("div", {
id: "post-" + this.props.postId,
onClick: this.didClickListItem,
onMouseDown: this.didMouseDown,
onContextMenu: this.didActivateContextMenu,
className: u.join(" "),
onMouseEnter: this.toggleOnHover,
onMouseLeave: this.toggleOffHover
}, o.createElement("div", {
className: p.join(" ")
}, this.state.isHover ? o.createElement("div", {
className: "flerp",
onClick: this.didClickOpenFlerp
}, o.createElement("div", {
className: "flerp-icon"
}, o.createElement(a.FeederIcon, {
icon: "more-small"
}))) : null, this.props.isStarred ? o.createElement("div", {
className: "item-starred",
onClick: this.didClickUnmarkAsStarred
}, o.createElement(a.FeederIcon, {
icon: "star-filled"
})) : null, o.createElement("div", {
className: "item-favicon"
}, o.createElement("img", {
src: this.props.feedFavicon
})), o.createElement("div", {
className: "item-title"
}, o.createElement("span", {
className: "item-title--text"
}, this.props.title), o.createElement("div", {
className: "item-meta"
}, o.createElement("div", {
className: "item-sub-title"
}, this.props.feedTitle), o.createElement("div", {
className: "item-date",
title: c
}, i), this.props.collections.length ? o.createElement("div", {
className: "item-collections"
}, this.props.collections.join(", ")) : null)), o.createElement("div", {
className: "item-count-holder"
}, this.props.isRead ? null : o.createElement(s.CountGroup, {
text: "NEW",
onClick: this.didClickMarkAsRead
}))), this.state.isContextMenuOpen ? o.createElement(l.ContextMenuForPost, {
hide: r.Ext.isOnline() ? [ "open-many" ] : void 0,
canPostCollections: this.props.canPostCollections,
elementPosition: function() {
return e.state.rightClick;
},
shouldClose: function() {
return e.toggleContextMenu(!1);
},
didClickItem: function(t) {
return e.performAction(t);
}
}) : null);
}, t;
}(o.PureComponent), e("PostListItem", d);
}
};
}), System.register("client/components/ErrorScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "error-screen no-screen"
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("span", {
className: "no-screen--icon error-icon"
}), n.createElement("div", {
className: "no-screen--title"
}, "Error loading posts"), n.createElement("div", {
className: "no-screen--text"
}, "Try again later. If the problem persists after 15 minutes, please contact support.")));
}, t;
}(n.PureComponent), e("ErrorScreen", o);
}
};
}), System.register("client/components/NoPostsScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "tpl-screen-no-posts no-screen"
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("div", {
className: "no-screen--title"
}, "No posts here yet"), n.createElement("div", {
className: "no-screen--text"
}, "Posts will display when available")));
}, t;
}(n.Component), e("NoPostsScreen", o);
}
};
}), System.register("client/components/NoStarredScreen", [ "react", "client/appglobals", "client/backend-imports", "client/components/CountGroup", "client/components/FeederIcon", "client/components/ContextMenuForPost" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
c = function(e) {
function t(t) {
var n = e.call(this, t) || this;
n.flerpButton = null, n.startTutorial = function() {
n.setState({
showStartButton: !1,
showTutorial: !0,
inTutorial: !0
}), setTimeout(function() {
n.step1();
}, 2e3);
}, n.step1 = function() {
n.setState({
clickToOpenArrow: !0
}), setTimeout(function() {
n.step2();
}, 1200);
}, n.step2 = function() {
n.setState({
clickToOpenArrow: !1,
contextMenuVisible: !0
}), setTimeout(function() {
n.step3();
}, 1e3);
}, n.step3 = function() {
n.setState({
clickToStarArrow: !0
}), setTimeout(function() {
n.step4();
}, 5e3);
}, n.step4 = function() {
n.setState({
showEndButton: !0,
clickToStarArrow: !1,
contextMenuVisible: !1
});
}, n.endTutorial = function() {
n.setState({
showStartButton: !0,
showTutorial: !1,
inTutorial: !1,
clickToOpenArrow: !1,
clickToStarArrow: !1,
postOpened: !1,
showEndButton: !1
});
};
var r, s, a = o.app.store.randomPost();
if (a) {
r = a.title;
var c = o.app.store.feed(a.feed_id);
s = c ? c.favicon : i.Config.defaultFavicon();
} else r = "The greatest RSS extension ever", s = i.Config.defaultFavicon();
return n.state = {
showStartButton: !0,
showTutorial: !1,
inTutorial: !1,
clickToOpenArrow: !1,
clickToStarArrow: !1,
postOpened: !1,
showEndButton: !1,
contextMenuVisible: !1,
postTitle: r,
feedFavicon: s
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.createElement("div", {
className: "tpl-screen-no-starred no-screen " + (this.state.inTutorial ? "in-tutorial" : "")
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("span", {
className: "no-screen--icon big-icons star"
}), n.createElement("div", {
className: "no-screen--title"
}, "You have no starred posts"), n.createElement("div", {
className: "no-screen--text spacing--small-bottom"
}, "Star posts to save for later"), n.createElement("div", {
className: "help-button"
}, n.createElement("div", {
className: "button--secondary start-tutorial " + (this.state.showStartButton ? "" : "hidden"),
onClick: this.startTutorial
}, "How do I star posts?")), n.createElement("div", {
className: "tutorial " + (this.state.showTutorial ? "" : "hidden")
}, n.createElement("div", {
className: "tpl-post-list tpl-post-list--no-border-bottom"
}, n.createElement("div", {
className: "tpl-list-item-post list-item hover " + (this.state.postOpened ? "opened" : "")
}, n.createElement("div", {
className: "item"
}, n.createElement("div", {
className: "cover"
}), n.createElement("div", {
className: "flerp",
ref: function(t) {
return e.flerpButton = t;
}
}, n.createElement("div", {
className: "flerp-icon"
}, n.createElement(s.FeederIcon, {
icon: "more-small"
}))), n.createElement("div", {
className: "item-starred"
}, n.createElement(s.FeederIcon, {
icon: "star-filled"
})), n.createElement("div", {
className: "item-favicon"
}, n.createElement("img", {
src: this.state.feedFavicon
})), n.createElement("div", {
className: "item-title"
}, n.createElement("span", {
className: "item-title--text"
}, this.state.postTitle)), n.createElement("div", {
className: "item-count-holder"
}, n.createElement(r.CountGroup, {
text: "new",
onClick: function() {}
}))))), n.createElement("div", {
className: "tutorial-arrows"
}, n.createElement("div", {
className: "arrow-text right-up click-to-open " + (this.state.clickToOpenArrow ? "" : "hidden")
}, "Click to open")), n.createElement("div", {
className: "help-button"
}, n.createElement("div", {
className: "button--secondary end-tutorial spacing--small-top " + (this.state.showEndButton ? "" : "hidden"),
onClick: this.endTutorial
}, "Thanks, got it!"))), this.state.contextMenuVisible ? n.createElement(a.ContextMenuForPost, {
canPostCollections: o.app.user.canPostCollections(),
highlightItem: this.state.clickToStarArrow ? [ "starred" ] : [],
elementPosition: function() {
return e.flerpButton;
},
shouldClose: function() {
return !1;
},
didClickItem: function() {
return !1;
}
}) : null));
}, t;
}(n.Component), e("NoStarredScreen", c);
}
};
}), System.register("client/components/NoUnreadScreen", [ "react" ], function(e, t) {
"use strict";
function n() {
var e = "day";
try {
e = new Date().toLocaleDateString([].slice.call(navigator.languages), {
weekday: "long"
});
} catch (e) {}
var t = [ "You're awesome!", "#feedboxzero", "Hope something great pops up soon!", "Worked hard to get here? Why not take a break!", "That was fun! We should do it again sometimes.", "Have a great " + e + "!", "More content will surely arrive soon.", "You did great!", "Enjoying Feeder? Why not tell a friend!" ];
return t[Math.floor(Math.random() * t.length)];
}
function o() {
return "https://twitter.com/intent/tweet?status=" + encodeURIComponent("#feedboxzero with @feederco");
}
var i, r;
t && t.id;
return e("getUnreadText", n), e("getUnreadLink", o), {
setters: [ function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return i.createElement("div", {
className: "tpl-screen-no-unread no-screen"
}, i.createElement("div", {
className: "no-screen--message"
}, i.createElement("span", {
className: "no-screen--icon big-icons check"
}), i.createElement("div", {
className: "no-screen--title"
}, "You have no unread posts"), i.createElement("div", {
className: "no-screen--text"
}, i.createElement("a", {
href: o(),
target: "_blank"
}, n()))));
}, t;
}(i.Component), e("NoUnreadScreen", r);
}
};
}), System.register("client/components/PostList", [ "react", "client/appglobals", "client/components/SortToolbar", "client/components/PostListItem", "client/components/ErrorScreen", "client/components/LoadingScreen", "client/components/NoPostsScreen", "client/components/NoStarredScreen", "client/components/NoUnreadScreen" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
} ],
execute: function() {
p = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
postCollectionDialogOpen: !1
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e, t = this, p = this.props.isFirstPostOdd ? 1 : 0, d = this.props.posts.map(function(e, i) {
var s = o.app.store.feed(e.feed_id), a = i === t.props.highlightedIndex, c = i % 2 === p, l = !!e.id && t.props.queuedPosts.contains(e.id), u = e.getCollectionsNamed();
return n.createElement(r.PostListItem, {
key: e.id ? e.id : "",
postId: e.id ? e.id : "none",
isOdd: c,
isQueued: l,
isHighlighted: a,
isRead: !!e.is_read,
isStarred: !!e.is_starred,
isFiltered: e.is_filtered,
title: e.title,
feedTitle: s ? s.title : e.feed_title || "",
feedFavicon: s ? s.favicon : e.getFeedFavicon() || "",
published: e.getTimestamp() || null,
collections: u,
timestampType: t.props.timestampType,
postListStyle: t.props.postListStyle,
post: e,
canPostCollections: t.props.canPostCollections,
shouldMarkAsRead: t.props.shouldMarkAsRead,
shouldMarkAsStarred: t.props.shouldMarkAsStarred,
shouldPromptPostCollections: t.props.shouldPromptPostCollections,
shouldOpen: t.props.shouldOpenPost,
shouldQueue: t.props.shouldQueuePost,
shouldAction: t.props.shouldAction,
shouldJumpUntil: t.props.shouldJumpUntil
});
});
switch (this.props.emptyScreenType) {
case "unread":
e = n.createElement(u.NoUnreadScreen, null);
break;

case "starred":
e = n.createElement(l.NoStarredScreen, null);
break;

default:
e = n.createElement(c.NoPostsScreen, null);
}
return this.props.isLoading ? n.createElement(a.LoadingScreen, null) : n.createElement("div", {
className: "tpl-post-list"
}, n.createElement(i.SortToolbar, __assign({
barHeight: "small",
shouldNavigate: this.props.shouldPage
}, this.props)), this.props.pendingPosts > 0 && 0 === this.props.postsUp.length ? n.createElement("div", {
className: "load-more",
onClick: this.props.shouldLoadReload
}, n.createElement("span", {
className: "num"
}, this.props.pendingPosts), " new post", 1 === this.props.pendingPosts ? "" : "s", ". Click to load.") : null, this.props.postsUp.length > 0 ? n.createElement("div", {
className: "load-more",
onClick: function() {
return t.props.shouldPage("up");
}
}, n.createElement("span", {
className: "num"
}, this.props.postsUp.length), " more post", 1 === this.props.postsUp.length ? "" : "s", ". Click to load.") : null, this.props.isError ? n.createElement(s.ErrorScreen, null) : d.length > 0 ? d : e, this.props.postsDown.length > 0 ? n.createElement("div", {
className: "load-more",
onClick: function() {
return t.props.shouldPage("down");
}
}, n.createElement("span", {
className: "num"
}, this.props.postsDown.length), " more post", 1 === this.props.postsDown.length ? "" : "s", ". Click to load.") : null, this.props.hasMore && 0 === this.props.postsDown.length ? n.createElement("div", {
onClick: function() {
return t.props.shouldLoadMore();
},
className: "load-more " + (this.props.isLoadingMore ? "loading" : "")
}, "Load more") : null);
}, t;
}(n.Component), e("PostList", p);
}
};
}), System.register("client/components/Modal", [ "react", "client/components/ModalContainer" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.onClick = function(e) {
e.target instanceof HTMLElement && e.target.classList.contains("Modal--overlay") && (e.preventDefault(), 
e.stopPropagation(), n.props.onClickOverlay && n.props.onClickOverlay());
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement(o.ModalContainer, {
className: "Modal--overlay",
onClick: this.onClick
}, n.createElement("div", {
className: "Modal--content " + this.props.className
}, this.props.children));
}, t;
}(n.Component), e("Modal", i);
}
};
}), System.register("client/components/PostCollectionDialog", [ "react", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = 400, r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickDone = function(e) {
e.preventDefault(), n.props.shouldClose();
}, n.didClickManage = function(e) {
e.preventDefault(), n.gotoSettings({
collections: "manage"
});
}, n.didClickAdd = function(e) {
e.preventDefault(), n.gotoSettings({
showAddPostCollection: !0
});
}, n.didClickReload = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e.preventDefault(), this.setState({
isReloading: !0
}), n.label = 1;

case 1:
return n.trys.push([ 1, 3, 4, 5 ]), [ 4, this.props.shouldLoadCollections() ];

case 2:
return n.sent(), [ 3, 5 ];

case 3:
return t = n.sent(), console.error(t), [ 3, 5 ];

case 4:
return this.setState({
isReloading: !1
}), [ 7 ];

case 5:
return [ 2 ];
}
});
});
}, n.toggleSelected = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
switch (o.label) {
case 0:
this.setState({
isError: !1,
loadingCollections: this.state.loadingCollections.concat([ e.id ])
}), o.label = 1;

case 1:
return o.trys.push([ 1, 6, 7, 8 ]), t = !1, this.props.post.hasCollection(e.feed_guid) ? [ 4, this.props.shouldRemoveFromCollections(this.props.post, [ e ]) ] : [ 3, 3 ];

case 2:
return t = o.sent(), [ 3, 5 ];

case 3:
return [ 4, this.props.shouldAddToCollections(this.props.post, [ e ]) ];

case 4:
t = o.sent(), o.label = 5;

case 5:
return t ? this.forceUpdate() : this.setState({
isError: !0
}), [ 3, 8 ];

case 6:
return n = o.sent(), console.error(n), this.setState({
isError: !0
}), [ 3, 8 ];

case 7:
return this.setState({
loadingCollections: this.state.loadingCollections.filter(function(t) {
return t !== e.id;
})
}), [ 7 ];

case 8:
return [ 2 ];
}
});
});
}, n.state = {
loadingCollections: [],
isError: !1,
isReloading: !1
}, n;
}
return __extends(t, e), t.prototype.componentWillMount = function() {
o.Ext.isChrome() && document.body.clientHeight < i && (document.body.style.height = i + "px");
}, t.prototype.componentWillUnmount = function() {
o.Ext.isChrome() && (document.body.style.height = "");
}, t.prototype.gotoSettings = function(e) {
var t = o.Ext.settingsURL(o.Config.feeder.root, e, "/feeds");
o.Ext.isSafari() || o.Ext.isChrome() ? o.UI.openTab(t) : document.location.href = t;
}, t.prototype.render = function() {
var e = this, t = o.app.store.feed(this.props.post.feed_id);
return n.createElement("div", {
className: "PostCollectionDialog platform-name-" + o.Ext.getPlatformName()
}, n.createElement("div", {
className: "modal-title"
}, n.createElement("div", {
className: "modal-title--left"
}), n.createElement("div", {
className: "modal-title--title"
}, "Add to collection"), n.createElement("div", {
className: "modal-title--right"
}, n.createElement("a", {
href: "",
className: "button--primary",
onClick: this.didClickDone
}, "Done"))), n.createElement("div", {
className: "post-collection--name"
}, n.createElement("div", {
className: "post-collection--preview"
}, n.createElement("div", {
className: "post-collection--favicon"
}, t ? n.createElement("img", {
src: t.favicon,
className: "feed-icon"
}) : null), n.createElement("div", {
className: "post-title"
}, this.props.post.title))), this.state.isError ? n.createElement("div", {
className: "post-collection--error"
}, "Something went wrong. Please try again later.") : null, n.createElement("div", {
className: "modal-sub-header"
}, "Collections", n.createElement("a", {
href: "",
className: "reload-button",
onClick: this.didClickReload
}, this.state.isReloading ? "..." : "Reload")), n.createElement("div", {
className: "post-collections-list"
}, 0 === this.props.postCollections.length ? n.createElement("div", {
className: "post-collections-empty"
}, "Organize posts in collections,", n.createElement("br", null), "start by creating one ", n.createElement("a", {
href: "",
onClick: this.didClickAdd
}, "here")) : null, this.props.postCollections.map(function(t, o) {
return n.createElement("div", {
key: t.id,
className: [ "post-collections-list--item", e.state.loadingCollections.includes(t.id) ? "loading" : "", e.props.post.hasCollection(t.feed_guid) ? "selected" : "", e.props.activeIndex === o ? "highlighted" : "" ].join(" "),
onClick: function(n) {
return e.toggleSelected(t);
}
}, n.createElement("div", {
className: "post-collections-list--icon"
}, n.createElement("img", {
src: t.icon
})), n.createElement("div", {
className: "post-collections-list--name"
}, t.title), n.createElement("div", {
className: "post-collections-list--keyboard-shortcut"
}, t.keyboard_shortcut ? n.createElement("span", null, t.keyboard_shortcut) : null), n.createElement("div", {
className: "post-collections-list--select"
}));
})), n.createElement("div", {
className: "post-collections-bottom-bar"
}, n.createElement("a", {
href: "",
className: "button--secondary button--small",
onClick: this.didClickManage
}, "Manage collections")));
}, t;
}(n.Component), e("PostCollectionDialog", r);
}
};
}), System.register("client/LegacyBaseComponent", [ "react", "client/components/Modal", "client/components/PostCollectionDialog" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.createElement("div", null, this.props.children, this.props.postCollections && this.props.postCollectionDialogOpen ? n.createElement(o.Modal, {
onClickOverlay: function() {
return e.props.shouldPromptPostCollections(!1);
}
}, n.createElement(i.PostCollectionDialog, {
post: this.props.postCollectionDialogOpen,
postCollections: this.props.postCollections,
shouldAddToCollections: this.props.shouldAddToCollections,
shouldRemoveFromCollections: this.props.shouldRemoveFromCollections,
shouldLoadCollections: this.props.shouldLoadCollections,
shouldClose: function() {
return e.props.shouldPromptPostCollections(!1);
}
})) : null);
}, t;
}(n.Component), e("LegacyBaseComponent", r);
}
};
}), System.register("client/controllers/screenposts", [ "jquery", "react", "react-dom", "app/library/ts/debounce", "client/controller", "client/pui/alert", "client/appglobals", "client/components/PostList", "client/LegacyBaseComponent", "client/controllers/feedcontainer" ], function(e, t) {
"use strict";
function n(e, t) {
for (var o in e) {
if (e.hasOwnProperty(o) !== t.hasOwnProperty(o)) return !1;
if (null === e[o] && null !== t[o]) return !1;
if (null === t[o] && null !== e[o]) return !1;
switch (typeof e[o]) {
case "object":
if (!n(e[o], t[o])) return !1;
break;

case "function":
if (void 0 === t[o] || "compare" != o && e[o].toString() != t[o].toString()) return !1;
break;

default:
if ("" === e[o] && "" !== t[o]) return !1;
if ("" === t[o] && "" !== e[o]) return !1;
if (e[o] != t[o]) return !1;
}
}
for (var o in t) if (void 0 === e[o]) return !1;
return !0;
}
var o, i, r, s, a, c, l, u, p, d, h, f, m;
t && t.id;
return {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
} ],
execute: function() {
h = 150, f = 1500, m = function(e) {
function t(t, n, i, r) {
void 0 === i && (i = !1), void 0 === r && (r = {});
var a = e.call(this, t) || this;
return a.currentHighlightedIndex = !1, a.forceReload = !1, a.error = !1, a.postDisplayOptions = {
filters: []
}, a.posts = [], a.currentPostOffset = 0, a.queuedPosts = [], a.pendingPosts = 0, 
a.loadedPostCollections = !1, a.promptedPostCollection = !1, a.isLoading = !1, a.lastWasLoading = !1, 
a.isLoadingMore = !1, a.isErrorLoadingPosts = !1, a.isFirstPostOdd = !1, a.renderCallbacks = [], 
a.updateUnreadCount = function() {
a.template.data.setModel(a.feed);
}, a.checkIfHasToGoBackToClosestScreenWithUnreadPostsIfNoUnreadPostsHere = function() {
return __awaiter(a, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.vc.screenStack.count() ? [ 2 ] : (e = (this.feed || this.folder).countUnread(), 
e ? [ 2 ] : [ 4, this.vc.popScreen() ]);

case 1:
return t.sent(), this.checkIfHasToGoBackToClosestScreenWithUnreadPostsIfNoUnreadPostsHere(), 
[ 2 ];
}
});
});
}, a.gotoPost = function(e) {
return __awaiter(a, void 0, void 0, function() {
return __generator(this, function(t) {
return this.vc.queue && !this.vc.queue.isEmpty() ? (e.markAsRead(), this.vc.queue.add(e.id), 
this.vc.queue.pump(), this.render(), [ 2 ]) : (this.vc.history.setActiveAction(e), 
this.setCurrentNavFromPost(e), e.markAsRead(), this.rememberScreen(), this.vc.stateFactory.shouldGotoPost(this.vc, e), 
this.render(), [ 2 ]);
});
});
}, a.queuePost = function(e) {
e.markAsRead(), a.vc.queue && a.vc.queue.toggle(e.id), a.render();
}, a.markPostAsRead = function(e, t) {
t ? (e.markAsRead(), l.app.analytics.collectEvent("user:toggle_read:read", e.id)) : (e.markAsUnread(), 
l.app.analytics.collectEvent("user:toggle_read:unread", e.id)), a.render();
}, a.markPostAsStarred = function(e, t) {
e.toggleStar(), a.render();
}, a.markAllAsReadFromBar = function(e) {
l.app.analytics.collectEvent("mark-all-as-read", "feed"), a.markAllAsRead();
}, a.markAllAsRead = function(e) {
return __awaiter(a, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return e ? (t = l.app.store.feed(e), t ? [ 4, t.markAllAsRead() ] : [ 3, 2 ]) : [ 3, 3 ];

case 1:
n.sent(), n.label = 2;

case 2:
return [ 3, 5 ];

case 3:
return [ 4, this.feed.markAllAsRead() ];

case 4:
n.sent(), n.label = 5;

case 5:
return this.populate(), [ 2 ];
}
});
});
}, a.queueChanged = function(e, t) {
t ? a.queuedPosts.push(e) : a.queuedPosts.remove(e), a.render();
}, a.loadMoreUntil = function(e) {
return __awaiter(a, void 0, void 0, function() {
var t, n, i, r, s = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
switch (t = new Date(), e) {
case "midnight":
t.setHours(0, 0, 0, 0);
break;

case "day":
t.setDate(t.getDate() - 1);
break;

case "week":
t.setDate(t.getDate() - 7);
break;

case "month":
t.setMonth(t.getMonth() - 1);
}
n = t.getTime(), i = this.posts[this.posts.length - 1], a.label = 1;

case 1:
return i.getTimestamp() > n && this.posts.length < f ? this.hasMore() ? [ 4, this.loadMore() ] : [ 3, 3 ] : [ 3, 5 ];

case 2:
return a.sent(), [ 3, 4 ];

case 3:
return [ 3, 5 ];

case 4:
return i = this.posts[this.posts.length - 1], [ 3, 1 ];

case 5:
return r = this.posts.find(function(e) {
return e.getTimestamp() <= n;
}) || this.posts[this.posts.length - 1], this.render(function() {
if (s.perfectScrollbar.element) {
var e = s.template.el("#post-" + r.id)[0];
if (e) {
var t = e.getVisibleScrollOffsetTop();
t && o.default(t[0]).animate({
scrollTop: t[1]
});
}
}
}), [ 2 ];
}
});
});
}, a.loadMore = function() {
return __awaiter(a, void 0, void 0, function() {
var e, t, n, o, i = this;
return __generator(this, function(r) {
switch (r.label) {
case 0:
if (!this.hasMore()) return [ 2 ];
if (!this.postIterator) return [ 2 ];
this.isLoadingMore = !0, this.render(), e = this.posts.length, r.label = 1;

case 1:
return r.trys.push([ 1, 3, , 4 ]), [ 4, this.postIterator.fetch() ];

case 2:
return t = r.sent(), t.forEach(function(e) {
i.addPost(e);
}), this.uniqPosts(), n = this.posts.length - e, this.currentPostOffset > 0 && (this.currentPostOffset += n), 
[ 3, 4 ];

case 3:
return o = r.sent(), console.error("Could not load more posts", o), [ 3, 4 ];

case 4:
return this.isLoadingMore = !1, this.render(), [ 2 ];
}
});
});
}, a.changePage = function(e) {
var t = Math.floor(h / 2), n = 0;
switch (e) {
case "up":
n = -Math.min(t, a.currentPostOffset);
break;

case "down":
n = Math.min(t, a.posts.length - (a.currentPostOffset + h));
}
a.currentPostOffset += n, a.render();
}, a.setCurrentNavFromPost = function(e) {
var t = a.posts.indexOf(e);
a.currentHighlightedIndex = -1 !== t && t, !1 !== a.currentHighlightedIndex && (a.currentHighlightedIndex < a.currentPostOffset && (a.currentPostOffset = Math.max(a.currentHighlightedIndex - Math.floor(h / 2), 0)), 
a.currentHighlightedIndex >= a.currentPostOffset + h && (a.currentPostOffset = Math.max(a.currentHighlightedIndex - Math.floor(h / 2), 0))), 
a.render();
}, a.shouldChangeSortOrder = function(e) {
a.vc.stateFactory.shouldUpdateSortOrderForFeed(a.vc, a.feed, e), a.populate();
}, a.shouldChangeDisplaySettings = function(e) {
a.postDisplayOptions.filters = e, a.vc.stateFactory.shouldUpdatePostDisplayOptionsForFeed(a.vc, a.feed, a.postDisplayOptions), 
a.populate();
}, a.shouldChangeAutoUpdate = function(e) {
a.vc.stateFactory.shouldUpdatePreference(a.vc, "display:autoUpdate", e), a.vc.stateFactory.getPreference(a.vc, "display:autoUpdate") && a.pendingPosts > 0 ? a.populate() : a.render();
}, a.shouldChangePostListStyle = function(e) {
a.postListStyle = e, a.vc.stateFactory.shouldUpdatePreference(a.vc, "display:postListStyle", e), 
a.render();
}, a.shouldChangePageStyle = function(e) {
a.pageStyle = e, a.vc.stateFactory.shouldChangePageStyle(e), a.render();
}, a.shouldChangeTimestampType = function(e) {
a.vc.stateFactory.shouldUpdatePreference(a.vc, "global:timestampType", e), a.render();
}, a.addPostToPostCollections = function(e, t) {
return __awaiter(a, void 0, void 0, function() {
var n, o, i, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
n = 0, o = t, s.label = 1;

case 1:
return n < o.length ? (i = o[n], [ 4, i.addPost(e) ]) : [ 3, 4 ];

case 2:
if (!(r = s.sent())) return [ 2, !1 ];
s.label = 3;

case 3:
return n++, [ 3, 1 ];

case 4:
return [ 2, !0 ];
}
});
});
}, a.removePostFromPostCollections = function(e, t) {
return __awaiter(a, void 0, void 0, function() {
var n, o, i, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
n = 0, o = t, s.label = 1;

case 1:
return n < o.length ? (i = o[n], [ 4, i.removePost(e) ]) : [ 3, 4 ];

case 2:
if (!(r = s.sent())) return [ 2, !1 ];
s.label = 3;

case 3:
return n++, [ 3, 1 ];

case 4:
return [ 2, !0 ];
}
});
});
}, a.shouldReloadPostCollections = function() {
return __awaiter(a, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return l.app.postCollectionMapper.shouldReload() ? [ 4, l.app.postCollectionMapper.getAll() ] : [ 3, 2 ];

case 1:
e = t.sent(), this.loadedPostCollections = e, this.render(), t.label = 2;

case 2:
return [ 2 ];
}
});
});
}, a.forceReloadPostCollections = function() {
return __awaiter(a, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, l.app.postCollectionMapper.performReload() ];

case 1:
return e = t.sent(), this.loadedPostCollections = e, this.render(), [ 2 ];
}
});
});
}, a.performGlobalAction = function(e, t) {
switch (a.render(), t) {
case "mark-all-as-read":
e.feed_id && a.markAllAsRead(e.feed_id);
break;

case "open-all-unread":
a.openAllUnread();
break;

case "open-every-unread-post":
d.openAllUnread("global");
break;

case "clear-all-unread":
a.clearAllUnread();
}
}, a.postUpdated = function(e) {
a.hasPostInList(e.post) ? a.render() : a.postAdded(e);
}, a.postAdded = function(e) {
var t = l.app.store.post(e.post);
if (t) {
if (!a.vc.stateFactory.getPreference(a.vc, "display:autoUpdate")) return a.pendingPosts += 1, 
void a.render();
var n = a.feed.matchesPost(t);
a.postDisplayOptions.filters.forEach(function(e) {
switch (e) {
case "unread":
t.is_read && (n = !1);
break;

case "starred":
t.is_starred || (n = !1);
}
}), n && (a.hasPostInList(t.id) || a.pushPost(t));
}
}, a.showPostCollectionDialog = function(e) {
a.promptedPostCollection = e, a.render();
}, a.populate = a.populate.bind(a), a.renderDebounced = s.default(a._render.bind(a), 5), 
a.postListContainer = a.template.el(".post-list-container")[0], a.feed = n, r.scrollTop && (a.lastScroll = r.scrollTop), 
a.postDisplayOptions = a.vc.stateFactory.getPostDisplayOptionsForFeed(a.vc, n), 
a.pageStyle = a.vc.stateFactory.getPreference(a.vc, "display:pageStyle") || {
columns: [ "sidebar", "content" ]
}, a.postListStyle = a.vc.stateFactory.getPreference(a.vc, "display:postListStyle") || {
showContent: "collapsed",
compactMode: !1
}, a.template.data.setModel(n), a.options = r, a.feed.isMagic && a.template.element.addClass("is-magic-feed"), 
a.isLoading = !0, i || a.populate(), a.vc.queue && a.vc.queue.setListener(a.queueChanged), 
a.vc.listener.listen("post:added", a.postAdded), a.vc.listener.listen("post:updated", a.postUpdated), 
a.vc.listener.listen("feeds:recount", a.updateUnreadCount), a.vc.history.wrapAround = !1, 
a.vc.history.onEnd(a.loadMoreForActions.bind(a)), a.loadedPostCollections = l.app.postCollectionMapper.getLoadedCollections(), 
a.shouldReloadPostCollections(), a._render(), a;
}
return __extends(t, e), t.fromId = function(e, n) {
var o = !1;
return n.magicFeed ? o = l.app.user.createMagicFeedFromId(n.magicFeed) : n.feed && (o = l.app.user.feed(n.feed)), 
!!o && new t(e, o, !1, {
scrollTop: "number" == typeof n.scrollTop ? n.scrollTop : 0
});
}, t.prototype.templateName = function() {
return "screen#posts";
}, t.prototype.id = function() {
return this.feed.isMagic ? {
id: "Posts",
magicFeed: this.feed.magicId,
scrollTop: this.lastScroll
} : !!this.feed.id && {
id: "Posts",
feed: this.feed.id,
scrollTop: this.lastScroll
};
}, t.prototype.events = function() {
return {
"click .tpl-bar-top": "gotoPage",
"click .bar .tpl-count-group": "markAllAsReadFromBar",
"click .deck-settings": "showDeckSettings"
};
}, t.prototype.inAppURL = function() {
return [ "posts", this.feed.id || "new" ];
}, t.prototype.destroy = function() {
r.unmountComponentAtNode(this.postListContainer), e.prototype.destroy.call(this), 
this.vc.queue && this.vc.queue.removeListener(this.queueChanged), this.vc.listener.unlisten("post:added", this.postAdded), 
this.vc.listener.unlisten("post:updated", this.postUpdated), this.vc.listener.unlisten("feeds:recount", this.updateUnreadCount);
}, t.prototype.onPopupHide = function() {
this.checkIfHasToGoBackToClosestScreenWithUnreadPostsIfNoUnreadPostsHere();
}, t.prototype.setPosts = function(e) {
var t = this;
this.vc.history.reset(), this.posts = [], this.currentPostOffset = 0, e.length && (e.forEach(function(e) {
t.addPost(e);
}), this.uniqPosts()), this.render(function() {
t.perfectScrollbar && t.perfectScrollbar.update();
});
}, t.prototype.addPost = function(e) {
e.id && (this.posts.push(e), this.vc.history.addAction(e), this.vc.queue && this.vc.queue.contains(e.id) && this.queuedPosts.push(e.id), 
this.render());
}, t.prototype.pushPost = function(e) {
if (e.id) {
var t = this.vc.stateFactory.getSortOrderForFeed(this.vc, this.feed), n = this.template.element.find(".page-scroll-container"), o = n.scrollTop(), i = n.prop("scrollHeight");
"newest-first" === t ? (this.posts.unshift(e), this.currentPostOffset > 0 && (this.currentPostOffset += 1), 
this.vc.history.prependAction(e), !1 !== this.currentHighlightedIndex && (this.currentHighlightedIndex += 1), 
this.isFirstPostOdd = !this.isFirstPostOdd) : (this.posts.push(e), this.vc.history.addAction(e)), 
this.uniqPosts(), this.render(function() {
if ("newest-first" === t && o > 0) {
var e = n.prop("scrollHeight");
n.scrollTop(o + (e - i));
}
});
}
}, t.prototype.gotoPage = function(e) {
o.default(e.target).is(".title-click-area") && (this.feed.link || this.feed.path) && l.UI.openTab(this.feed.link || this.feed.path);
}, t.prototype.rememberScreen = function() {
this.feed.hasUnread() ? this.vc.screenStack.createCheckpoint() : this.vc.screenStack.forget();
}, t.prototype.openAllUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return d.openAllUnread(this.feed), [ 2 ];
});
});
}, t.prototype.loadMoreForActions = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.hasMore() ? [ 4, this.loadMore() ] : [ 2 ];

case 1:
return e.sent(), this.vc.historyNext(), [ 2 ];
}
});
});
}, t.prototype.hasMore = function() {
return !this.isErrorLoadingPosts && (!!this.postIterator && this.postIterator.hasMore());
}, t.prototype.hasCustomDisplaySettings = function() {
return !n(this.postDisplayOptions, this.feed.defaultDisplayOptions());
}, t.prototype.shouldSeeNoPostsPage = function() {
return !this.isErrorLoadingPosts && (!this.hasCustomDisplaySettings() && (!this.posts || !this.posts.length));
}, t.prototype.getFeed = function() {
return this.feed;
}, t.prototype.navForward = function(e) {
e && this.gotoPost(e);
}, t.prototype.navigateTo = function(e) {
e && (this.setCurrentNavFromPost(e), this.vc.stateFactory.shouldNavigationEventOpenPost() && this.gotoPost(e));
}, t.prototype.hasPostInList = function(e) {
return !!this.posts.find(function(t) {
return t.id == e;
});
}, t.prototype.uniqPosts = function() {
var e = {};
this.posts = this.posts.filter(function(t) {
return !(!t.id || e[t.id]) && (e[t.id] = !0, !0);
});
}, t.prototype.performKeyboardAction = function(e) {
var t = !1 !== this.currentHighlightedIndex && this.posts[this.currentHighlightedIndex];
switch (e) {
case "star":
t && this.markPostAsStarred(t, !t.is_starred);
break;

case "read":
t && this.markPostAsRead(t, !t.is_read);
break;

case "queue":
t && this.queuePost(t);

case "post-collections":
t && this.showPostCollectionDialog(t);
}
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
this.isLoading = !0, this.pendingPosts = 0, this.isFirstPostOdd = !0, this.postIterator = this.feed.getPostIterator(this.postDisplayOptions), 
o.label = 1;

case 1:
return o.trys.push([ 1, 3, , 4 ]), this.isErrorLoadingPosts = !1, [ 4, this.postIterator.fetch() ];

case 2:
return e = o.sent(), this.posts = e, this.currentPostOffset = 0, this.callbackAfterAnimation(function() {
n.isLoading = !1, n.setPosts(e);
}), [ 3, 4 ];

case 3:
return t = o.sent(), console.error(t), c.default.alert("Could not load posts. Try again or contact support."), 
this.isErrorLoadingPosts = !0, this.isLoading = !1, this.render(), [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.render = function(e) {
e && this.renderCallbacks.push(e), this.renderDebounced();
}, t.prototype._render = function() {
var e = this, t = "default";
switch (this.feed.feedTypeId) {
case "unread":
t = "unread";
break;

case "starred":
t = "starred";
}
var n = i.createElement(p.LegacyBaseComponent, {
postCollections: this.loadedPostCollections,
postCollectionDialogOpen: this.promptedPostCollection,
shouldAddToCollections: this.addPostToPostCollections,
shouldRemoveFromCollections: this.removePostFromPostCollections,
shouldLoadCollections: this.forceReloadPostCollections,
shouldPromptPostCollections: this.showPostCollectionDialog
}, [ i.createElement(u.PostList, {
key: 1,
isError: this.isErrorLoadingPosts,
isLoading: this.isLoading,
emptyScreenType: t,
postsUp: this.posts.slice(0, this.currentPostOffset),
posts: (this.posts || []).slice(this.currentPostOffset, this.currentPostOffset + h),
postsDown: this.posts.slice(this.currentPostOffset + h),
queuedPosts: this.queuedPosts,
pendingPosts: this.pendingPosts,
highlightedIndex: !1 !== this.currentHighlightedIndex && this.currentHighlightedIndex - this.currentPostOffset,
hasMore: this.hasMore(),
isLoadingMore: this.isLoadingMore,
isFirstPostOdd: this.isFirstPostOdd,
sortOrder: this.feed ? this.vc.stateFactory.getSortOrderForFeed(this.vc, this.feed) : "newest-first",
timestampType: this.vc.stateFactory.getPreference(this.vc, "global:timestampType"),
defaultDisplayOptions: this.feed ? this.feed.displayOptions() : {
filters: []
},
postDisplayOptions: this.postDisplayOptions,
postListStyle: this.postListStyle,
pageStyle: this.pageStyle,
canSeeFiltered: l.app.user.isPro(),
autoUpdate: this.vc.stateFactory.getPreference(this.vc, "display:autoUpdate"),
shouldChangeSortOrder: this.shouldChangeSortOrder,
shouldChangeTimestampType: this.shouldChangeTimestampType,
shouldChangeDisplaySettings: this.shouldChangeDisplaySettings,
shouldChangeAutoUpdate: this.shouldChangeAutoUpdate,
shouldChangePostListStyle: this.shouldChangePostListStyle,
shouldChangePageStyle: this.shouldChangePageStyle,
canPostCollections: l.app.user.canPostCollections(),
shouldMarkAsRead: this.markPostAsRead,
shouldMarkAsStarred: this.markPostAsStarred,
shouldPromptPostCollections: this.showPostCollectionDialog,
shouldOpenPost: this.gotoPost,
shouldQueuePost: this.queuePost,
shouldAddPostToPostCollections: this.addPostToPostCollections,
shouldRemoveFromPostCollections: this.removePostFromPostCollections,
shouldLoadMore: this.loadMore,
shouldPage: this.changePage,
shouldJumpUntil: this.loadMoreUntil,
shouldLoadReload: this.populate,
shouldAction: this.performGlobalAction
}, null) ]);
r.render(n, this.postListContainer), window.requestAnimationFrame(function() {
e.perfectScrollbar && e.perfectScrollbar.update();
}), this.lastWasLoading && !this.isLoading && this.tryToRestoreScroll(), this.lastWasLoading = this.isLoading, 
this.renderCallbacks.forEach(function(e) {
return e();
}), this.renderCallbacks = [];
}, t;
}(a.default), e("default", m);
}
};
}), System.register("client/controllers/screennofeeds", [ "client/controller", "client/appglobals", "client/pui/alert" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
n.template.set("title", "Recommended feeds");
var i = [ {
title: "Feeder development blog",
path: o.Config.feederBlog,
favicon: "http://feedercdn.com/favicon.ico",
count: "+ Follow"
}, {
title: "BBC News - Home",
path: "http://feeds.bbci.co.uk/news/rss.xml",
favicon: "https://icons.feedercdn.com/bbc.co.uk",
count: "+ Follow"
}, {
title: "XKCD",
path: "http://xkcd.com/rss.xml",
favicon: "https://icons.feedercdn.com/xkcd.com",
count: "+ Follow"
}, {
title: "Lifehacker",
path: "http://lifehacker.com/rss",
favicon: "https://icons.feedercdn.com/lifehacker.com",
count: "+ Follow"
}, {
title: "TechCrunch",
path: "http://techcrunch.com/feed/",
favicon: "https://icons.feedercdn.com/techcrunch.com",
count: "+ Follow"
}, {
title: "The Oatmeal - Comics, Quizzes, & Stories",
path: "http://feeds.feedburner.com/oatmealfeed",
favicon: "https://icons.feedercdn.com/theoatmeal.com",
count: "+ Follow"
} ];
return n.template.setItems("feeds", i), n.doneButton = n.template.element.find(".done"), 
n.followChanged(), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#no-feeds";
}, t.prototype.events = function() {
return {
"click .tpl-list-item-feed": "follow",
"click .open-sync-settings": "openSyncSettings",
"click .done": "done"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "no-feeds" ];
}, t.prototype.follow = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, r, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return e.stopPropagation(), (t = e.item, n = t.reference, o.app.user.hasFeedByPath(n.path)) ? (t.set("count", "Loading..."), 
r = o.app.store.feedBy("path", n.path), r && r.id ? [ 4, o.app.user.removeFeed(r.id) ] : [ 3, 2 ]) : [ 3, 3 ];

case 1:
a.sent(), a.label = 2;

case 2:
return this.followChanged(), t.set("count", "+ Follow"), [ 3, 5 ];

case 3:
return t.set("count", "Loading..."), [ 4, o.app.feedMapper.addFeed({
path: n.path
}) ];

case 4:
s = a.sent(), s.errors ? (t.set("count", "+ Follow"), i.default.alert("There was an error adding this feed.")) : t.set("count", "✔ Followed"), 
this.followChanged(), a.label = 5;

case 5:
return [ 2 ];
}
});
});
}, t.prototype.followChanged = function() {
this.doneButton.toggleClass("visible", o.app.user.hasFeeds());
}, t.prototype.openSyncSettings = function() {
this.vc.openSettingsPage();
}, t.prototype.done = function() {
this.onDone && this.onDone();
}, t;
}(n.default), e("default", r);
}
};
}), System.register("client/controllers/screenmain", [ "jquery", "client/controller", "client/controllers/screenwelcome", "client/controllers/screensignup", "client/controllers/feedcontainer", "client/controllers/screenposts", "client/controllers/screennofeeds", "client/init", "client/appglobals", "client/backend-imports", "client/pui/confirm", "client/pui/alert", "app/library/ts/library" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p, d, h, f, m;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
}, function(e) {
f = e;
} ],
execute: function() {
m = function(e) {
function t(t, n) {
void 0 === n && (n = {});
var o = e.call(this, t) || this;
return o.error = !1, o.numFeedsInTab = 0, o.showNoScreen = !1, o.currentNoScreen = !1, 
o.currentSignupScreen = !1, o.currentWelcomeScreen = !1, o.lastActiveIndex = !1, 
o.populate = o.populate.bind(o), o.feedsFound = o.feedsFound.bind(o), o.feedsCountChanged = o.feedsCountChanged.bind(o), 
o.errorOnLoad = o.errorOnLoad.bind(o), o.currentNoScreenCallback = o.currentNoScreenCallback.bind(o), 
o.updateAvailable = o.updateAvailable.bind(o), "number" == typeof n.active && (o.lastActiveIndex = n.active), 
n.scrollTop && (o.lastScroll = n.scrollTop), o.feedList = o.template.element.find(".put-feed-list-here"), 
o.updateAvailable(), o.updateUnread(), o.setActiveFilter(), o.vc.listener.listen("feeds:found", o.feedsFound), 
o.vc.listener.listen("feeds:recount", o.feedsCountChanged), o.vc.history.wrapAround = !0, 
u.app.user.structure.base ? o.populate() : l.runOnLoad(o.populate, o.errorOnLoad), 
o;
}
return __extends(t, e), t.fromId = function(e, n) {
return new t(e, n);
}, t.prototype.templateName = function() {
return "screen#main";
}, t.prototype.events = function() {
return {
"click .global-settings, .settings-button": "showSettings",
"click .add, .add-feed-button": "showAdd",
"click #filter-settings .all": "filterAll",
"click #filter-settings .starred": "filterStarred",
"click #filter-settings .unread": "filterUnread",
"click .deck-settings": "showDeckSettings"
};
}, t.prototype.id = function() {
return {
id: "Main",
active: this.lastActiveIndex,
scrollTop: this.lastScroll
};
}, t.prototype.inAppURL = function() {
return [ "main" ];
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.lastActiveIndex = !!this.feedContainer && this.feedContainer.state.highlightedIndex, 
this.clearCurrentPage(), this.vc.listener.unlisten("feeds:found", this.feedsFound), 
this.vc.listener.unlisten("feeds:recount", this.feedsCountChanged), this.clearCurrentNoScreen(), 
this.removeSignupScreen();
}, t.prototype.errorOnLoad = function() {
h.default.alertError("Error loading everything."), this.showError();
}, t.prototype.onPopupVisible = function() {
var e = this;
this.updateAvailable(), u.app.user.structure.base && this.populate(), this.currentSignupScreen && !this.shouldSeeSignup() && setTimeout(function() {
e.removeSignupScreen();
}, this.currentSignupScreen.removeDelayInMilliseconds());
}, t.prototype.removeSignupScreen = function() {
this.currentSignupScreen && (this.currentSignupScreen.template.element.remove(), 
this.currentSignupScreen.destroy(), this.currentSignupScreen = !1);
}, t.prototype.onClearAllUnread = function() {
this.updateUnread();
}, t.prototype.feedsFound = function() {
this.updateAvailable();
}, t.prototype.updateUnread = function() {
this.setUnread(u.app.user.unreads.countStored());
}, t.prototype.updateAvailable = function() {
var e = this;
u.UI.currentTab().then(function(t) {
e.setNewFeeds(u.app.finder.countFeedsInTab(t.id));
});
}, t.prototype.feedsCountChanged = function(e) {
this.setUnread(e.total), this.render();
}, t.prototype.shouldSeeSignup = function() {
return !u.app.user.isLoggedIn() && !this.vc.stateFactory.getPreference(this.vc, "didChooseToUseBasic");
}, t.prototype.getCurrentFilter = function() {
return this.vc.stateFactory.getPreference(this.vc, "popup:filter") || "all";
}, t.prototype.setCurrentFilter = function(e) {
this.vc.stateFactory.shouldUpdatePreference(this.vc, "popup:filter", e);
}, t.prototype.setUnread = function(e) {
this.template.set("num_unread", e > 9999 ? "9999" : e), this.feedContainer && this.feedContainer.render();
}, t.prototype.setNewFeeds = function(e) {
this.numFeedsInTab = e, this.template.set("num_feeds", e), this.template.element.find(".add .bubble").toggle(!!e);
}, t.prototype.showAdd = function() {
this.vc.stateFactory.shouldGotoSettings(this.vc, "add-feed");
}, t.prototype.showSettings = function() {
this.vc.stateFactory.shouldGotoSettings(this.vc, "main");
}, t.prototype.showLoading = function() {
this.template.element.find(".settings").addClass("loading");
}, t.prototype.hideLoading = function() {
this.template.element.find(".settings").removeClass("loading");
}, t.prototype.filterAll = function() {
u.app.analytics.collectEvent("popup:change-filter", "all"), this.setCurrentFilter("all"), 
this.setActiveFilter(), this.populate();
}, t.prototype.filterStarred = function() {
u.app.analytics.collectEvent("popup:change-filter", "starred"), this.setCurrentFilter("starred"), 
this.setActiveFilter(), this.populate();
}, t.prototype.filterUnread = function() {
u.app.analytics.collectEvent("popup:change-filter", "unread"), this.setCurrentFilter("unread"), 
this.setActiveFilter(), this.populate();
}, t.prototype.setActiveFilter = function() {
var e = this.getCurrentFilter();
this.template.element.find("#filter-settings .current").removeClass("current"), 
this.template.element.find("#filter-settings ." + e).addClass("current");
}, t.prototype.hasFeeds = function() {
return !!u.app.user.structure.base && u.app.user.structure.base.items().length > 0;
}, t.prototype.currentNoScreenCallback = function() {
this.clearCurrentNoScreen(), this.populate();
}, t.prototype.clearCurrentNoScreen = function() {
this.template.element.removeClass("no-feeds"), this.currentNoScreen && (this.currentNoScreen.template.element.remove(), 
this.currentNoScreen.destroy()), this.currentWelcomeScreen && (this.currentWelcomeScreen.template.element.remove(), 
this.currentWelcomeScreen.destroy());
}, t.prototype.openAddFeed = function() {
var e = f.getQueryParameter("url");
e && d.default.confirm("Subscribe to:\n" + e).yes(function() {
u.app.feedMapper.addFeed({
path: e
}).then(function(e) {
e.errors && h.default.alert("Could not subscribe to feed...");
});
});
}, t.prototype.startOrganizeMode = function() {
this.vc.openSettingsPage("/feeds/");
}, t.prototype.triggerIntercom = function() {
n.default(".intercom-activator:first").click();
}, t.prototype.getFeed = function() {
return !!(this.postsPage && this.postsPage.feed && this.postsPage.feed) && this.postsPage.feed;
}, t.prototype.navForward = function() {
this.postsPage ? this.postsPage.navForward(this.vc.history.current()) : this.feedContainer ? this.feedContainer.navForward(this.vc.history.current()) : e.prototype.navForward.call(this, this.vc.history.current());
}, t.prototype.navigateTo = function(t) {
this.postsPage && t instanceof p.Post ? this.postsPage.navigateTo(t) : this.feedContainer ? this.feedContainer.navigateTo(t) : e.prototype.navigateTo.call(this, t);
}, t.prototype.setFeedsPage = function(e) {
if (this.clearCurrentNoScreen(), this.clearCurrentPage(), e.isEmpty() && e.standard) this.showNoScreen = !0; else {
var t = this.vc.stateFactory.shouldOverrideMagicPostsLists(), n = this.template.el(".put-feed-list-here")[0];
this.feedContainer = new s.default(e, n, this, {
highlightedIndex: this.lastActiveIndex,
showAllItem: t,
showStarredItem: t,
unreadOfAll: function() {
return u.app.user.unreads.countStored();
}
}), this.lastActiveIndex = !1, this.showNoScreen = !1;
}
}, t.prototype.setPostsPage = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t = this;
return __generator(this, function(n) {
return this.magicFeed = e, this.vc.stateFactory.shouldOverrideMagicPostsLists() ? [ 2 ] : (this.showNoScreen = !1, 
this.clearCurrentNoScreen(), this.clearCurrentPage(), this.postsPage = new a.default(this.vc, e, !0), 
this.postsPage.forceReload = function() {
t.populate();
}, this.template.element.addClass("screen-has-posts-page"), this.template.element.find(".screen-container").append(this.postsPage.template.container), 
this.postsPage.populate(), [ 2 ]);
});
});
}, t.prototype.clearCurrentPage = function() {
this.template.element.removeClass("no-posts-page screen-has-posts-page"), this.magicFeed = !1, 
this.postsPage && (this.postsPage.destroy(), this.postsPage.template.element.remove(), 
this.postsPage = !1), this.feedContainer && (this.feedContainer.destroy(), this.feedContainer = !1);
}, t.prototype.showError = function() {
n.default(document.body).addClass("in-error");
}, t.prototype.performKeyboardAction = function(e) {
"next-tab" === e ? this.nextTab() : this.postsPage && this.postsPage.performKeyboardAction(e);
}, t.prototype.nextTab = function() {
switch (this.getCurrentFilter()) {
case "starred":
this.filterUnread();
break;

case "unread":
this.filterAll();
break;

case "all":
this.filterStarred();
}
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return ("all" === this.getCurrentFilter() || this.vc.stateFactory.shouldOverrideMagicPostsLists()) && (e = u.app.user.structure.base, 
e ? (this.error = !1, this.setFeedsPage(e)) : this.error = !0), "starred" !== this.getCurrentFilter() ? [ 3, 2 ] : [ 4, this.setPostsPage(u.app.user.createFeedOnlyStarred()) ];

case 1:
return o.sent(), [ 3, 4 ];

case 2:
return "unread" !== this.getCurrentFilter() ? [ 3, 4 ] : [ 4, this.setPostsPage(u.app.user.createFeedOnlyUnread()) ];

case 3:
o.sent(), o.label = 4;

case 4:
try {
this.vc.refreshWindowHeight();
} catch (e) {}
if (this.tryToRestoreScroll(), this.error || this.postsPage && this.postsPage.error) return this.showError(), 
[ 2 ];
if (!this.showNoScreen) return [ 2 ];
switch (this.getCurrentFilter()) {
case "all":
t = new c.default(this.vc), this.template.element.removeClass("no-posts-page");
break;

default:
throw new Error("Invalid this.getCurrentFilter(): " + this.getCurrentFilter());
}
return this.clearCurrentPage(), this.clearCurrentNoScreen(), this.currentNoScreen = t, 
this.currentNoScreen.onDone = this.currentNoScreenCallback, this.feedList.parent().append(this.currentNoScreen.template.container), 
this.template.element.addClass("no-feeds"), "all" === this.getCurrentFilter() && this.shouldSeeSignup() && !this.currentSignupScreen && (this.currentSignupScreen = new r.default(this.vc), 
this.currentSignupScreen.onSuccess = function() {
n.onPopupVisible();
}, this.feedList.closest(".page-scroll-container").parent().append(this.currentSignupScreen.template.container), 
this.currentSignupScreen.onVisible()), localStorage.hasSeenWelcome || "all" !== this.getCurrentFilter() || u.Ext.isOnline() || (localStorage.hasSeenWelcome = !0, 
this.currentWelcomeScreen = new i.default(this.vc), this.feedList.closest(".page-scroll-container").parent().append(this.currentWelcomeScreen.template.container)), 
[ 2 ];
}
});
});
}, t.prototype.render = function() {
this.postsPage && this.postsPage.render(), this.feedContainer && this.feedContainer.render();
}, t;
}(o.default), e("default", m);
}
};
}), System.register("client/controllers/screenpaymentrequired", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return o.app.analytics.collectEvent("screen:visible", "paymentrequired"), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#payment-required";
}, t.prototype.events = function() {
return {
"click .action-button": "goToBilling"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "payment-required" ];
}, t.prototype.goToBilling = function() {
o.app.analytics.collectEvent("screen:paymentrequired:button", "go_to_billing"), 
this.vc.openSettingsPage("/billing/");
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenisinsync", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#is-in-sync";
}, t.prototype.events = function() {
return {};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "is-in-sync" ];
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/controllers/controllers", [ "client/controllers/screenconnectedautomatically", "client/controllers/screenconsume", "client/controllers/screencouldnotverifytoken", "client/controllers/screenexpired", "client/controllers/screenfolder", "client/controllers/screengetstarted", "client/controllers/screeniframe", "client/controllers/screenmain", "client/controllers/screennofeeds", "client/controllers/screenpaymentrequired", "client/controllers/screenposts", "client/controllers/screensignup", "client/controllers/screenwelcome", "client/controllers/screenisinsync" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p, d, h, f, m, g;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
}, function(e) {
f = e;
}, function(e) {
m = e;
} ],
execute: function() {
g = {
Connectedautomatically: n.default,
Consume: o.default,
Couldnotverifytoken: i.default,
Expired: r.default,
Folder: s.default,
Getstarted: a.default,
Iframe: c.default,
Main: l.default,
NoFeeds: u.default,
Paymentrequired: p.default,
Posts: d.default,
Signup: h.default,
Welcome: f.default,
IsInSync: m.default,
get: function(e) {
return this[e];
}
}, e("default", g);
}
};
}), System.register("client/controllers/screenproonlyfeature", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#pro-only-feature";
}, t.prototype.events = function() {
return {
"click .action-button": "goToBilling"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "pro-only-feature" ];
}, t.prototype.goToBilling = function() {
this.vc.openSettingsPage("/billing/");
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/components/UserMessageModal", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickOK = function(e) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
e.preventDefault(), this.setState({
isLoading: !0
}), t.label = 1;

case 1:
return t.trys.push([ 1, , 3, 4 ]), [ 4, this.props.shouldDismiss() ];

case 2:
return t.sent(), [ 3, 4 ];

case 3:
return this.setState({
isLoading: !1
}), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, n.didClickCallToAction = function(e) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
e.preventDefault(), this.setState({
isLoadingCallToAction: !0
}), t.label = 1;

case 1:
return t.trys.push([ 1, , 3, 4 ]), [ 4, this.props.shouldPerformCallToAction() ];

case 2:
return t.sent(), [ 3, 4 ];

case 3:
return this.setState({
isLoadingCallToAction: !1
}), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, n.state = {
isLoading: !1,
isLoadingCallToAction: !1
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "UserMessageModal"
}, n.createElement("h2", {
className: "margin-bottom-small"
}, this.props.title), n.createElement("p", {
className: "margin-bottom-medium",
dangerouslySetInnerHTML: {
__html: this.props.body
}
}), this.props.callToActionLink ? n.createElement("p", {
className: "margin-bottom-small"
}, n.createElement("a", {
className: "button--primary button--100 " + (this.state.isLoadingCallToAction ? "is-loading" : ""),
onClick: this.didClickCallToAction
}, this.state.isLoadingCallToAction ? "Loading..." : this.props.callToActionText)) : null, n.createElement("p", null, n.createElement("a", {
className: "button--secondary button--100 large " + (this.state.isLoading ? "is-loading" : ""),
onClick: this.didClickOK
}, this.state.isLoading ? "Loading..." : "OK")));
}, t;
}(n.PureComponent), e("UserMessageModal", o);
}
};
}), System.register("client/controllers/ScreenUserMessage", [ "client/controller", "client/appglobals", "client/components/UserMessageModal", "react", "react-dom" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t, n) {
var i = e.call(this, t) || this;
return i.dismiss = function() {
return __awaiter(i, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return t.trys.push([ 0, 2, , 3 ]), [ 4, this.userMessage.acknowledge() ];

case 1:
return t.sent(), [ 3, 3 ];

case 2:
return e = t.sent(), console.error("Could not acknowledge call to action", e), [ 2, !1 ];

case 3:
return [ 2, !1 ];
}
});
});
}, i.performCallToAction = function() {
return __awaiter(i, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return t.trys.push([ 0, 2, , 3 ]), [ 4, this.userMessage.acknowledge() ];

case 1:
return t.sent(), [ 3, 3 ];

case 2:
return e = t.sent(), console.error("Could not acknowledge call to action", e), [ 2, !1 ];

case 3:
return this.userMessage.callToActionLink && o.UI.openTab(this.userMessage.callToActionLink), 
[ 2, !0 ];
}
});
});
}, i.userMessage = n, i.reactElementContainer = i.template.el(".user-message-container")[0], 
i.render(), i;
}
return __extends(t, e), t.prototype.inAppURL = function() {
return [ "user-message" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.templateName = function() {
return "screen#user-message";
}, t.prototype.events = function() {
return {};
}, t.prototype.render = function() {
var e = r.createElement(i.UserMessageModal, {
title: this.userMessage.title,
body: this.userMessage.body,
callToActionText: this.userMessage.callToActionText,
callToActionLink: this.userMessage.callToActionLink,
shouldPerformCallToAction: this.performCallToAction,
shouldDismiss: this.dismiss
});
s.render(e, this.reactElementContainer);
}, t;
}(n.default), e("ScreenUserMessage", a);
}
};
}), System.register("client/popup", [ "jquery", "client/init", "client/viewcontroller", "client/pui/template", "client/pui/linkqueue", "client/pui/alert", "client/pui/modal", "client/pui/screenmodal", "app/library/ts/library", "client/library/keyboard-navigation", "client/controllers/controllers", "client/controllers/screenmain", "client/controllers/screenconnectedautomatically", "client/controllers/screencouldnotverifytoken", "client/controllers/screenexpired", "client/controllers/screenpaymentrequired", "client/controllers/screenproonlyfeature", "client/controllers/screenisinsync", "client/controllers/screenconsume", "client/controllers/ScreenUserMessage", "client/controllers/datahooks", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u, p, d, h, f, m, g, v, y, C, b, S, w, k;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
}, function(e) {
f = e;
}, function(e) {
m = e;
}, function(e) {
g = e;
}, function(e) {
v = e;
}, function(e) {
y = e;
}, function(e) {
C = e;
}, function(e) {
b = e;
}, function(e) {
S = e;
}, function(e) {}, function(e) {
w = e;
} ],
execute: function() {
k = function(e) {
function t(t, o) {
var i = e.call(this, t, o, function(e) {
return d.default.get(e);
}) || this;
return i.onPopupCloseListeners = [], i.destroy = i.destroy.bind(i), i.queueChanged = i.queueChanged.bind(i), 
i.onPopupHide = i.onPopupHide.bind(i), i.onPopupVisible = i.onPopupVisible.bind(i), 
i.feederConnectChanged = i.feederConnectChanged.bind(i), i.feederExpiredChanged = i.feederExpiredChanged.bind(i), 
i.onKeyDown = i.onKeyDown.bind(i), i.onSafariBlur = i.onSafariBlur.bind(i), i.refreshTheme = i.refreshTheme.bind(i), 
i.head = new r.default("popup#head"), n.default(i.head.container).insertBefore(i.container), 
i.refreshTheme(), w.app.events.subscribe("theme:changed", i.refreshTheme), i.queue = new s.default(i.head.element.find(".link-queue")), 
i.queue.setListener(i.queueChanged), window.addEventListener("unload", i.destroy, !1), 
w.Ext.isSafari() && window.addEventListener("blur", i.onSafariBlur, !0), w.Ext.isSafari() && n.default(document.body).on("click", ".safari-link", function(e) {
e.preventDefault();
var t = e.target.getAttribute("href");
t && (w.UI.openTab(t), w.UI.closePopup());
}), w.Platform.env.onPopoverVisible(i.onPopupVisible), i.listener.listen("feeder:connected", i.feederConnectChanged), 
i.listener.listen("feeder:expiredChanged", i.feederExpiredChanged), document.addEventListener("keydown", i.onKeyDown, !1), 
i.toggleNotification(), i.feederExpiredChanged(), i;
}
return __extends(t, e), t.defaultStateFactory = function() {
return {
getRememberedScreenChain: function(e) {
return w.app.rememberedScreenChain || !1;
},
getPreference: function(e, t) {
if ("display:pageStyle" === t && !w.Ext.isConsume()) {
return {
columns: [ "sidebar" ]
};
}
return w.app.user.preferences.get(t);
},
getPostDisplayOptionsForFeed: function(e, t) {
return t.displayOptions();
},
getSortOrderForFeed: function(e, t) {
return t.getSortOrder();
},
shouldNavigationEventOpenPost: function() {
return w.Ext.isOnline();
},
shouldOverrideMagicPostsLists: function() {
return !1;
},
shouldRemoveDeck: function(e) {},
shouldMoveDeck: function(e, t) {},
shouldUpdatePreference: function(e, t, n) {
w.app.user.preferences.set(t, n);
},
shouldUpdatePostDisplayOptionsForFeed: function(e, t, n) {
t.persistDisplaySettings(n);
},
shouldUpdateSortOrderForFeed: function(e, t, n) {
t.changeSortOrder(n), t.save();
},
shouldPersistScreenChain: function(e, t) {
w.app.rememberedScreenChain = t;
},
willChangePage: function(e, t) {},
didChangePage: function(e) {},
shouldGotoSettings: function(e, t) {
"main" === t ? e.showSettingsScreen() : "add-feed" === t && w.UI.currentTab().then(function(t) {
w.app.finder.countFeedsInTab(t.id) ? e.showAddScreen({
tabId: t.id
}) : e.showAddScreen();
});
},
shouldGotoPost: function(e, t) {
w.app.analytics.collectEvent("open-post", "post-item"), w.Ext.isMobile() ? e.pushScreen(new b.default(e, t)) : e.stateFactory.getPreference(e, "global:openPostsInNewTab") ? w.UI.openTab(t.getLink()) : w.UI.currentTab().then(function(e) {
e && w.UI.tabChangeURL(e.id, t.getLink());
});
},
shouldGotoPostList: function(e, t) {
var n = e.controllerInjector("Posts"), o = new n(e, t);
e.pushScreen(o);
},
shouldChangePageStyle: function(e) {},
onGlobalKeyDown: function(e, t) {
c.default.onGlobalKeyDown(t) || p.onKeyDownEvent(t, e);
}
};
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), window.removeEventListener("unload", this.destroy, !1), 
w.Ext.isSafari() && window.removeEventListener("blur", this.onSafariBlur, !0), w.app.events.unsubscribe("theme:changed", this.refreshTheme), 
this.listener.unlisten("feeder:connected", this.feederConnectChanged), this.listener.unlisten("feeder:expiredChanged", this.feederExpiredChanged), 
window.removeEventListener("keydown", this.onKeyDown, !1), this.queue && (this.queue.pump(), 
this.queue.queue = [], this.queue.destroy()), this.listener.unlisten("feeder:connect", this.feederConnectChanged), 
w.app.events.unsubscribe("theme:changed", this.refreshTheme), this.screenStack.clearAll(), 
this.currentScreen && (this.currentScreen.onOff(), this.currentScreen.destroy(), 
delete this.currentScreen), this.head.destroy(), delete this.head, this.queue && this.queue.removeListener(this.queueChanged), 
this.onPopupCloseListeners.forEach(function(e) {
e();
}), this.onPopupCloseListeners = [], w.Platform.env.removePopoverVisible(this.onPopupVisible);
}, t.prototype.start = function() {
if (!this.screenStack.remember()) {
var e = new h.default(this);
this.stateFactory.willChangePage(this, e), this.setCurrentScreen(e);
}
}, t.prototype.onPopupVisible = function() {
setTimeout(function() {
return window.focus();
}, 1e3), this.currentScreen.onPopupVisible();
}, t.prototype.onSafariBlur = function() {
"undefined" != typeof safari && (safari.extension.popovers[0].visible || this.onPopupHide());
}, t.prototype.onPopupHide = function() {
this.queue && (this.queue.pump(), this.queue.queue = []), this.currentScreen && "function" == typeof this.currentScreen.onPopupHide && this.currentScreen.onPopupHide(), 
this.onPopupCloseListeners.forEach(function(e) {
e();
}), this.onPopupCloseListeners = [];
}, t.prototype.feederConnectChanged = function() {
o.reloadProClasses(), o.Init.activateIntercom(), this.toggleNotification(), this.currentScreen.onFeedConnectChanged(), 
this.feederExpiredChanged(), this.currentScreen.onPopupVisible();
}, t.prototype.feederExpiredChanged = function() {
var e = this;
if (n.default(document.body).toggleClass("is-expired", w.app.user.proHasExpired()), 
w.app.user.isTrial() ? (n.default(".trial-days-left").show(), n.default(".trial-days-left-text").text(w.app.user.proTrialDaysLeft())) : n.default(".trial-days-left").hide(), 
w.app.sync.feederAccountManager.isInSync) this.currentInSyncModal || (this.currentInSyncModal = new l.default(function() {
return new C.default(e);
}), this.currentInSyncModal.canClose = !1, this.currentInSyncModal.autoWidth = !0, 
this.currentInSyncModal.show()); else if (this.stateFactory.getPreference(this, "backend:hasChangedStatusAndNeedsToVerifyWithUser")) this.currentConnectedModal || (this.currentConnectedModal = new l.default(function() {
return new f.default(e);
}), this.currentConnectedModal.canClose = !1, this.currentConnectedModal.show()); else if (w.app.user.hasMessage()) {
if (!this.currentUserMessageModal) {
var t = w.app.user.getUserMessages()[0];
this.currentUserMessageModal = new l.default(function() {
return new S.ScreenUserMessage(e, t);
}), this.currentUserMessageModal.canClose = !1, this.currentUserMessageModal.autoWidth = !0, 
this.currentUserMessageModal.show();
}
} else w.app.user.proHasExpired() && !w.app.user.hasChosenPlan() ? this.currentExpiredModal || (this.currentExpiredModal = new l.default(function() {
return new g.default(e);
}), this.currentExpiredModal.canClose = !1, this.currentExpiredModal.autoWidth = !0, 
this.currentExpiredModal.show()) : w.app.user.doesProRequirePayment() ? this.currentPaymentRequiredScreen || (this.currentPaymentRequiredScreen = new l.default(function() {
return new v.default(e);
}), this.currentPaymentRequiredScreen.canClose = !1, this.currentPaymentRequiredScreen.show()) : w.app.user.isLite() && w.Ext.isOnline() ? this.currentPaidOnlyScreen || (this.currentPaidOnlyScreen = new l.default(function() {
return new y.default(e);
}), this.currentPaidOnlyScreen.canClose = !1, this.currentPaidOnlyScreen.show()) : w.app.sync.feederAccountManager.checkResponse && w.app.sync.feederAccountManager.checkResponse.no_pro_for_token ? this.currentCouldNotVerifyTokenModal || (this.currentCouldNotVerifyTokenModal = new l.default(function() {
return new m.default(e);
}), this.currentCouldNotVerifyTokenModal.canClose = !1, this.currentCouldNotVerifyTokenModal.show()) : this.stateFactory.getPreference(this, "feeder:shouldSeeDowngradeSuccessMessage") ? (w.app.analytics.collectEvent("screen:visible", "downgradesuccess"), 
a.default.alert("You have downgraded to Feeder Lite. All feeds and settings are now stored locally.", function() {
w.app.analytics.collectEvent("screen:downgradesuccess:button", "ok"), e.stateFactory.shouldUpdatePreference(e, "feeder:shouldSeeDowngradeSuccessMessage", !1);
})) : (this.currentInSyncModal && (this.currentInSyncModal.destroy(), this.currentInSyncModal = void 0), 
this.currentConnectedModal && (this.currentConnectedModal.destroy(), this.currentConnectedModal = void 0), 
this.currentExpiredModal && (this.currentExpiredModal.destroy(), this.currentExpiredModal = void 0), 
this.currentPaymentRequiredScreen && (this.currentPaymentRequiredScreen.destroy(), 
this.currentPaymentRequiredScreen = void 0), this.currentCouldNotVerifyTokenModal && (this.currentCouldNotVerifyTokenModal.destroy(), 
this.currentCouldNotVerifyTokenModal = void 0), this.currentPaidOnlyScreen && (this.currentPaidOnlyScreen.destroy(), 
this.currentPaidOnlyScreen = void 0), this.currentUserMessageModal && (this.currentUserMessageModal.destroy(), 
this.currentUserMessageModal = void 0));
}, t.prototype.refreshTheme = function() {
var e = u.getQueryParameter("theme") || this.stateFactory.getPreference(this, "activeTheme");
"theme-light-old" === e && (e = "theme-light"), "theme-dark-old" === e && (e = "theme-dark");
var t = !1;
w.app.user.preferences.allThemes.forEach(function(n) {
n.identifier === e && (t = !0);
}), t || (e = "theme-light"), w.app.user.preferences.allThemes.forEach(function(e) {
n.default(document.body).removeClass(e.identifier);
}), n.default(document.body).addClass(e);
}, t.prototype.onScreenChange = function() {
this.disableTopBar();
}, t.prototype.disableTopBar = function() {
n.default(".bar.bottom, .bar.top").css("top", ""), n.default(document.body).addClass("at-top");
}, t.prototype.queueChanged = function(e, t) {
this.queue && this.queue.isEmpty() && this.disableTopBar();
}, t.prototype.onKeyDown = function(e) {
this.stateFactory.onGlobalKeyDown(this, e);
}, t.prototype.returnFromFeedView = function() {
this.currentScreen instanceof h.default && [ "unread", "starred" ].includes(this.currentScreen.getCurrentFilter()) ? this.currentScreen.filterAll() : this.popScreen();
}, t;
}(i.default), e("Popup", k);
}
};
}), System.register("client/library/immutable", [], function(e, t) {
"use strict";
function n(e, t, n) {
return e.map(function(e) {
return t(e) ? n(e) : e;
});
}
function o(e, t, n) {
var o = e.slice();
return o.splice(n, 0, o.splice(t, 1)[0]), o;
}
t && t.id;
return e("replaceInArray", n), e("moveItemInArray", o), {
setters: [],
execute: function() {}
};
}), System.register("client/library/deck", [ "client/popup", "client/library/immutable" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e(e, t) {
this.app = e, this.consume = t, this._loadConfig();
}
return e.prototype.start = function() {
if ("number" == typeof this.config.numberOfDecks) for (var e = this.consume.props.columns.length; e < this.config.numberOfDecks; e++) this.addDeck();
}, e.prototype._loadConfig = function() {
var e = this.app.user.preferences.get("deck:ui");
e ? (this.config = e, this.config.decks = this.config.decks || []) : this.config = {
numberOfDecks: 3,
decks: []
};
}, e.prototype.saveConfig = function() {
this.app.user.preferences.set("deck:ui", this.config);
}, e.prototype.getIndexForDeck = function(e) {
return this.consume.props.columns.findIndex(function(t) {
return t.id === e.id;
});
}, e.prototype.getConfigForDeck = function(e) {
if (e instanceof n.Popup) {
var t = this.getIndexForDeck(e);
return -1 === t ? this.config.decks[this.consume.props.columns.length] || !1 : this.config.decks[t] || !1;
}
return !1;
}, e.prototype.getPageStyle = function() {
return {
columns: [ "sidebar", "content" ]
};
}, e.prototype.addDeck = function() {
var e = this.consume.props.columns.length;
this.config.decks[e] || this.config.decks.push({}), this.consume.addPopup();
}, e.prototype.addAndSaveDeck = function() {
this.config.numberOfDecks = this.consume.props.columns.length + 1, this.addDeck(), 
this.saveConfig();
}, e.prototype.removeDeck = function(e) {
var t = this.getIndexForDeck(e);
this.config.numberOfDecks = this.consume.props.columns.length - 1, this.consume.removePopupAt(t), 
this.config.decks.splice(t, 1), this.saveConfig();
}, e.prototype.buildStateFactory = function() {
var e = this;
return {
getRememberedScreenChain: function(t) {
var n = e.getConfigForDeck(t);
return !!n && (n.rememberedScreenChain || !1);
},
getPreference: function(t, n) {
var o = e.getConfigForDeck(t);
if (!o) return e.app.user.preferences.get(n);
switch (n) {
case "popup:filter":
return void 0 === o[n] ? e.app.user.preferences.get(n) : o[n];

case "display:pageStyle":
return e.getPageStyle();

default:
return e.app.user.preferences.get(n);
}
},
getPostDisplayOptionsForFeed: function(t, n) {
var o = e.getConfigForDeck(t);
return o ? o.postDisplayOptions || n.displayOptions() : n.displayOptions();
},
getSortOrderForFeed: function(t, n) {
var o = e.getConfigForDeck(t);
return o ? o.sortOrder || n.getSortOrder() : n.getSortOrder();
},
shouldNavigationEventOpenPost: function() {
return !!e.consume.props.consumeWindow.post;
},
shouldOverrideMagicPostsLists: function() {
return !1;
},
shouldRemoveDeck: function(t) {
t instanceof n.Popup && e.removeDeck(t);
},
shouldMoveDeck: function(t, n) {
var i = e.getIndexForDeck(t), r = "left" === n ? -1 : 1, s = i + r;
s < 0 || s >= e.consume.props.columns.length || (e.consume.movePopupAt(i, s), e.config.decks = o.moveItemInArray(e.config.decks, i, s), 
e.saveConfig());
},
shouldUpdatePreference: function(t, n, o) {
var i = e.getConfigForDeck(t);
if (!i) return e.app.user.preferences.set(n, o);
switch (n) {
case "popup:filter":
i[n] = o, e.saveConfig();
break;

default:
e.app.user.preferences.set(n, o);
}
},
shouldUpdatePostDisplayOptionsForFeed: function(t, n, o) {
var i = e.getConfigForDeck(t);
i && (i.postDisplayOptions = o, e.saveConfig());
},
shouldUpdateSortOrderForFeed: function(t, n, o) {
var i = e.getConfigForDeck(t);
i && (i.sortOrder = o, e.saveConfig());
},
shouldPersistScreenChain: function(t, n) {
var o = e.getConfigForDeck(t);
o && n && (o.rememberedScreenChain = n, e.saveConfig());
},
shouldGotoPost: function(t, n) {
e.consume.gotoPostFromViewController(n, t);
},
shouldGotoPostList: function(e, t) {
n.Popup.defaultStateFactory().shouldGotoPostList(e, t);
},
shouldChangePageStyle: function(e) {},
shouldGotoSettings: function(e, t) {
"main" === t ? e.showSettingsScreen() : "add-feed" === t && e.showAddScreen();
},
willChangePage: function(e, t) {},
didChangePage: function(t) {
var n = e.getConfigForDeck(t);
if (n) {
var o = t.screenStack.serialize();
o && (n.rememberedScreenChain = o, e.saveConfig());
}
},
onGlobalKeyDown: function(e, t) {}
};
}, e;
}(), e("Deck", i);
}
};
}), System.register("client/components/MoreFeatures", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.containerElement = null, t.onClick = function(e) {
e.preventDefault(), t.props.didClick();
}, t;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "MoreFeatures"
}, n.createElement("div", {
className: "MoreFeatures--message"
}, n.createElement("div", {
className: "MoreFeatures--text"
}, n.createElement("p", {
className: "MoreFeatures--heading"
}, this.props.text.title), n.createElement("p", {
className: "MoreFeatures--subheading"
}, this.props.text.body)), n.createElement("a", {
className: "MoreFeatures--button button--primary",
onClick: this.onClick
}, "Learn more")));
}, t;
}(n.Component), e("MoreFeatures", o);
}
};
}), System.register("client/components/PopupWrapper", [ "react", "client/popup", "client/components/MoreFeatures" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.containerElement = null, n.state = {
popupInstance: void 0
}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
if (this.containerElement) {
var e = new o.Popup(this.containerElement, this.props.stateFactory);
e.id = this.props.popupId, e.start(), this.setState({
popupInstance: e
}), this.props.popupRef && this.props.popupRef(e);
}
}, t.prototype.componentWillUnmount = function() {
this.state.popupInstance && this.state.popupInstance.destroy();
}, t.prototype.render = function() {
var e = this;
return n.createElement("div", {
className: "popup-container column " + (this.props.isHighlighted ? "deck--highlighted" : null) + " " + (this.props.isHighlighted ? "column--is-highlighted" : "column--is-not-highlighted"),
"data-scroll-main": "yah"
}, n.createElement("div", {
className: "tpl-popup"
}, n.createElement("div", {
className: "popup"
}, n.createElement("div", {
className: "popup-content",
ref: function(t) {
return e.containerElement = t;
}
})), this.props.moreFeaturesText ? n.createElement(i.MoreFeatures, {
text: this.props.moreFeaturesText,
didClick: this.props.didClickUpgrade
}) : null));
}, t;
}(n.Component), e("PopupWrapper", r);
}
};
}), System.register("client/components/ReaderView", [ "react", "react-dom" ], function(e, t) {
"use strict";
function n(e) {
return !(0 !== e.indexOf("http://") || !document.location || "https:" !== document.location.protocol);
}
function o(e) {
return "https://adder.feeder.co/imageproxy?url=" + encodeURIComponent(e) + "&thisisnotapublicapi=dbfc259c68b9408511c1a1edce9a7845fa8fd82a5a8776da6d93da469544450911a7287e5b300bb6587ad8afcfabfe2d45c31d91e690d935ca933a6cbf50306d";
}
var i, r, s;
t && t.id;
return {
setters: [ function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.childrenDidMutate = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var i = o[t];
[].slice.call(i.addedNodes).forEach(function(e) {
n.safeNode(e);
}), i.target instanceof Element && "target" === i.attributeName && "_blank" === i.oldValue && i.target.setAttribute("target", "_blank");
}
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
var e = this, t = r.findDOMNode(this);
t instanceof Element && ([].slice.call(t.querySelectorAll("a, img")).forEach(function(t) {
e.safeNode(t);
}), this.mutationObserver = new MutationObserver(this.childrenDidMutate), this.mutationObserver.observe(t, {
attributes: !0,
childList: !0
}));
}, t.prototype.componentWillUnmount = function() {
this.mutationObserver.disconnect();
}, t.prototype.safeNode = function(e) {
var t = this;
if (e instanceof Element && "A" === e.tagName && (e.onclick = function(n) {
if ("#" === (e.getAttribute("href") || "").substring(0, 1)) {
n.preventDefault();
var o = (e.getAttribute("href") || "").split("#").pop(), i = r.findDOMNode(t);
if (o && i instanceof Element) {
var s = i.querySelector('[id="' + o + '"], [name="' + o + '"]');
s && s.scrollIntoView();
}
}
}, e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer")), 
e instanceof HTMLImageElement && "IMG" === e.tagName) {
if ("string" == typeof e.src) {
var i = e.src;
n(i) && e.setAttribute("src", o(i));
}
if ("string" == typeof e.srcset) {
var s = e.srcset.split(",").map(function(e) {
var t = e.trim().split(" ");
return n(t[0]) ? o(t[0]) + " " + t[1] : e;
});
e.setAttribute("srcset", s.join(", "));
}
}
}, t.prototype.render = function() {
return i.createElement("div", {
className: "tpl-reader-view",
dangerouslySetInnerHTML: {
__html: this.props.contents
}
});
}, t;
}(i.Component), e("ReaderView", s);
}
};
}), System.register("client/models/Sharer", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
e("SHARERS", n = [ {
id: "facebook",
name: "Facebook",
url: "https://www.facebook.com/sharer/sharer.php?u=$URL&p%5Btitle%5D=$TITLE",
typeId: "popup",
popupWidth: 600,
popupHeight: 500
}, {
id: "twitter",
name: "Twitter",
url: "http://twitter.com/share?url=$URL&text=$TITLE",
typeId: "popup",
popupWidth: 600,
popupHeight: 400
}, {
id: "linkedin",
name: "LinkedIn",
url: "https://www.linkedin.com/shareArticle?mini=true&url=$URL&title=$TITLE" + encodeURIComponent(" via feeder.co"),
typeId: "popup",
popupWidth: 700,
popupHeight: 500
}, {
id: "email",
name: "E-mail",
url: "mailto:?body=$BODY%0D%0A%0D%0ASent%20with%20Feeder.co&subject=$TITLE",
typeId: "link_internal",
popupWidth: null,
popupHeight: null
} ]);
}
};
}), System.register("client/models/Share", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/components/ShareDialog", [ "react", "client/components/Modal" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didSubmit = function(e) {
e.preventDefault();
var t = {
postId: n.props.post.id || "unknown_post_id",
email: n.state.email,
onComplete: function() {
n.setState({
isLoading: !1,
isError: !1
}), n.props.shouldClose();
},
onError: function() {
n.setState({
isError: !0,
isLoading: !1
});
}
};
n.setState({
isLoading: !0,
isError: !1
}), n.props.shouldShare(t, n.props.sharer);
}, n.state = {
email: "",
isError: !1,
isLoading: !1
}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.inputElement && this.inputElement.focus();
}, t.prototype.render = function() {
var e = this;
return n.createElement(o.Modal, {
className: "ShareDialog",
onClickOverlay: this.props.shouldClose
}, n.createElement("div", {
className: "share-email"
}, n.createElement("form", {
onSubmit: this.didSubmit
}, n.createElement("div", {
className: "share-title"
}, this.props.sharer.name), n.createElement("div", {
className: "share-content"
}, n.createElement("div", {
className: "share-field"
}, n.createElement("input", {
type: "text",
placeholder: "buddy@example.com",
value: this.state.email,
onChange: function(t) {
return e.setState({
email: t.target.value
});
},
ref: function(t) {
return e.inputElement = t;
}
})), n.createElement("input", {
type: "submit",
value: this.state.isLoading ? "Loading..." : "Share",
disabled: this.state.isLoading,
className: "action-button " + (this.state.isLoading ? "action-button--loading" : null)
}), this.state.isError ? n.createElement("div", {
className: "share-error"
}, "Something went wrong. Please try again or contact support") : null))));
}, t;
}(n.Component), e("ShareDialog", i);
}
};
}), System.register("client/components/ShareSheet", [ "react", "react-dom", "client/components/ContextMenu", "client/components/ContextMenuItem", "client/components/ShareDialog" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickShare = function(e) {
var t = e.url ? n.sharePrep(e.url) : null;
switch (e.typeId) {
case "popup":
t && window.open(t, "sharePopup", "width=" + (e.popupWidth || 600) + ",height=" + (e.popupHeight || 500));
break;

case "link":
if (t) {
var o = document.createElement("a");
o.setAttribute("href", t), o.setAttribute("target", "_blank"), o.style.position = "absolute", 
o.style.top = "-19999px", document.body.appendChild(o), o.doNotTriggerHideEvent = !0, 
o.click(), document.body.removeChild(o);
}
break;

case "link_internal":
if (t) {
var o = document.createElement("a");
o.setAttribute("href", t), o.setAttribute("target", "_blank"), o.style.position = "absolute", 
o.style.top = "-19999px", document.body.appendChild(o), o.doNotTriggerHideEvent = !0, 
o.onclick = function(e) {
e.stopPropagation();
}, o.click(), document.body.removeChild(o);
}
break;

case "dialog":
n.setState({
chosenSharer: e
});
}
}, n.getElementPosition = function() {
var e = o.findDOMNode(n);
return e instanceof Element ? e.parentNode : document.body;
}, n.shouldCloseAndDisgardSharer = function() {
n.setState({
chosenSharer: !1
}), n.props.shouldClose();
}, n.state = {
chosenSharer: !1
}, n;
}
return __extends(t, e), t.prototype.sharePrep = function(e) {
return e = e.replace(/\$URL/, encodeURIComponent(this.props.post.link)), e = e.replace(/\$TITLE/, encodeURIComponent(this.props.post.title)), 
e = e.replace(/\$BODY/, encodeURIComponent(this.props.post.link));
}, t.prototype.render = function() {
var e = this;
return n.createElement("div", null, n.createElement(i.ContextMenu, {
className: "with-arrow",
isVisible: !this.state.chosenSharer && this.props.isVisible,
elementPosition: this.getElementPosition,
elementSticky: {
x: "center",
y: "bottom"
},
shouldClose: this.props.shouldClose
}, this.props.sharers.map(function(t) {
return n.createElement(r.ContextMenuItem, {
key: t.id,
onClick: function() {
return e.didClickShare(t);
}
}, t.name);
})), this.state.chosenSharer && this.props.isVisible ? n.createElement(s.ShareDialog, {
sharer: this.state.chosenSharer,
post: this.props.post,
shouldShare: this.props.shouldShare,
shouldClose: this.shouldCloseAndDisgardSharer
}) : null);
}, t;
}(n.Component), e("ShareSheet", a);
}
};
}), System.register("client/components/PostContent", [ "react", "client/appglobals", "client/components/CountGroup", "client/components/ReaderView", "client/components/PostListItem", "client/components/FeederIcon", "client/components/ShareSheet", "client/components/ContextMenuForPost" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c, l, u;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
} ],
execute: function() {
u = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClick = function() {
n.props.shouldExpand(n.props.post);
}, n.didContextMenu = function(e) {
n.props.isExpanded || (e.preventDefault(), e.stopPropagation(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!0));
}, n.didClickToggleRead = function() {
n.props.shouldMarkAsRead(n.props.post, !n.props.post.is_read);
}, n.didClickToggleStar = function() {
n.props.shouldMarkAsStarred(n.props.post, !n.props.post.is_starred);
}, n.didClickToggleCollections = function() {
n.props.shouldPromptPostCollections(n.props.post);
}, n.didClickItem = function(e) {
if (l.isGlobalContextMenuAction(e)) n.props.shouldAction(n.props.post, e); else switch (e) {
case "toggle-read":
n.props.shouldMarkAsRead(n.props.post, !n.props.post.is_read);
break;

case "toggle-star":
n.props.shouldMarkAsStarred(n.props.post, !n.props.post.is_starred);
break;

case "add-to-collection":
n.props.shouldPromptPostCollections(n.props.post);
}
n.toggleContextMenu(!1);
}, n.didClickNewBlock = function(e) {
e.stopPropagation(), n.didClickToggleRead();
}, n.toggleContextMenu = function(e) {
n.setState({
isContextMenuOpen: e
});
}, n.toggleShare = function() {
n.setState({
shareVisible: !n.state.shareVisible
});
}, n.state = {
shareVisible: !1,
isContextMenuOpen: !1,
rightClick: {
x: 0,
y: 0
}
}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
"activate" === this.props.markAsReadType && this.props.isExpanded && this.shouldTryMarkAsRead();
}, t.prototype.componentDidUpdate = function(e, t) {
"activate" !== this.props.markAsReadType || e.isExpanded || this.shouldTryMarkAsRead();
}, t.prototype.shouldTryMarkAsRead = function() {
this.props.isExpanded && !this.props.post.is_read && this.props.shouldMarkAsRead(this.props.post, !0);
}, t.prototype.render = function() {
var e = this, t = o.app.store.feed(this.props.post.feed_id), u = s.makeTimestamp(this.props.post.getTimestamp(), this.props.timestampType, !!this.props.postListStyle.compactMode), p = u[0], d = u[1], h = [ "tpl-post-content" ];
this.props.isExpanded ? h.push("expanded") : h.push("not-expanded"), this.props.isActive && h.push("is-active"), 
this.props.post.is_read ? h.push("is-read") : h.push("is-not-read"), this.props.post.is_starred ? h.push("is-starred") : h.push("is-not-starred"), 
this.props.postListStyle.compactMode && h.push("compact-mode");
var f = this.props.post.getCollectionsNamed();
return n.createElement("div", {
className: h.join(" "),
"data-post-id": this.props.post.id,
onClick: this.didClick,
onContextMenu: this.didContextMenu
}, n.createElement("div", {
className: "post-content--top-bar"
}, n.createElement("div", {
className: "post-content--feed-icon"
}, t ? n.createElement("img", {
src: t.favicon
}) : null, !t && this.props.post.getFeedFavicon() ? n.createElement("img", {
src: this.props.post.getFeedFavicon()
}) : null, this.props.post.is_starred ? n.createElement("span", {
className: "starred-icon"
}, n.createElement(a.FeederIcon, {
icon: "star-filled"
})) : null), t && this.props.titleLink ? n.createElement("a", {
href: t.link,
target: "_blank",
rel: "noopener",
className: "post-content--feed-title"
}, t.title) : null, t && !this.props.titleLink ? n.createElement("span", {
className: "post-content--feed-title"
}, t.title) : null, !t && this.props.post.feed_title ? n.createElement("a", {
href: this.props.post.feed_link,
rel: "noopener",
target: "_blank",
className: "post-content--feed-title"
}, this.props.post.feed_title) : null, p ? n.createElement("div", {
className: "post-content--posted",
title: d
}, p) : null, f.length ? n.createElement("div", {
className: "post-content--collections"
}, f.map(function(e) {
return n.createElement("div", {
key: e
}, e);
})) : null, this.props.post.is_read ? null : n.createElement("div", {
className: "post-content--new"
}, n.createElement("span", {
className: "new-badge"
}, n.createElement(i.CountGroup, {
text: "NEW",
onClick: this.didClickNewBlock
})))), this.props.isExpanded ? n.createElement("a", {
href: this.props.post.link,
target: "_blank",
className: "post-content--title"
}, this.props.post.title) : n.createElement("div", {
className: "post-content--title"
}, this.props.post.title), this.props.isExpanded ? n.createElement("div", {
className: "post-content--content"
}, n.createElement(r.ReaderView, {
contents: this.props.post.post_contents
})) : null, this.props.isExpanded ? n.createElement("div", {
className: "post-content--bottom-bar"
}, n.createElement("a", {
href: this.props.post.link,
target: "_blank",
className: "nav-button",
onClick: function() {
return e.props.shouldMarkAsRead(e.props.post, !0);
}
}, "Read more"), n.createElement("div", {
className: "nav-button nav-button--icon push right-toolbar-button",
onClick: this.toggleShare,
title: "Share post"
}, n.createElement(a.FeederIcon, {
icon: "share"
}), n.createElement(c.ShareSheet, {
post: this.props.post,
sharers: this.props.sharers,
isVisible: this.state.shareVisible,
shouldClose: this.toggleShare,
shouldShare: this.props.shouldShare
})), n.createElement("div", {
className: "nav-button nav-button--icon  right-toolbar-button",
onClick: this.didClickToggleStar,
title: "Toggle star"
}, this.props.post.is_starred ? n.createElement(a.FeederIcon, {
icon: "star-filled"
}) : n.createElement(a.FeederIcon, {
icon: "star-outline"
})), this.props.canPostCollections ? n.createElement("div", {
className: "nav-button nav-button--icon  right-toolbar-button",
onClick: this.didClickToggleCollections,
title: "Add to Collection"
}, n.createElement(a.FeederIcon, {
icon: "label"
})) : null, n.createElement("div", {
className: "nav-button nav-button--icon  right-toolbar-button " + (this.props.post.is_read ? "" : "on"),
onClick: this.didClickToggleRead,
title: "Toggle Read status"
}, n.createElement(a.FeederIcon, {
icon: "checkmark"
}))) : null, this.state.isContextMenuOpen ? n.createElement(l.ContextMenuForPost, {
hide: [ "jump", "open-many" ],
canPostCollections: this.props.canPostCollections,
elementPosition: function() {
return e.state.rightClick;
},
shouldClose: function() {
return e.toggleContextMenu(!1);
},
didClickItem: function(t) {
return e.didClickItem(t);
}
}) : null);
}, t;
}(n.Component), e("PostContent", u);
}
};
}), System.register("client/components/ConsumeNoPostsInFeed", [ "react", "client/components/NoUnreadScreen" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {}, n;
}
return __extends(t, e), t.prototype.getTexts = function() {
switch (this.props.emptyType) {
case "starred":
return {
title: "No starred posts",
body: "Star posts by clicking the Star button"
};

case "unread":
return {
title: "No unread posts",
body: o.getUnreadText(),
link: o.getUnreadLink()
};

default:
return {
title: "No posts",
body: "Post list is empty"
};
}
}, t.prototype.render = function() {
var e = this.getTexts();
return n.createElement("div", {
className: "tpl-consume-no-posts no-screen"
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("div", {
className: "no-screen--title"
}, e.title), n.createElement("div", {
className: "no-screen--text"
}, e.link ? n.createElement("a", {
href: e.link,
target: "_blank"
}, e.body) : e.body)));
}, t;
}(n.Component), e("ConsumeNoPostsInFeed", i);
}
};
}), System.register("client/components/PostFeed", [ "react", "react-dom", "client/components/PostContent", "client/components/SortToolbar", "client/appglobals", "app/library/ts/debounce", "client/components/ConsumeNoPostsInFeed" ], function(e, t) {
"use strict";
function n(e) {
setTimeout(function() {
requestAnimationFrame(e);
}, 0);
}
var o, i, r, s, a, c, l, u;
t && t.id;
return {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
} ],
execute: function() {
u = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.postLocations = {}, n.lastScrollWasInitiated = !1, n.lastAutoAddTimestamp = 0, 
n.feederIsMounted = !1, n.updateScrollCache = function() {
if (n.feederIsMounted) {
var e = i.findDOMNode(n);
e instanceof Element && (n.postLocations = {}, e.querySelectorAll(".tpl-post-content").forEach(function(e) {
var t = e, o = t.dataset.postId;
o && (n.postLocations[o] = {
x: t.offsetLeft,
y: t.offsetTop
});
}));
}
}, n.didScroll = function() {
if (n.scrollContainer) {
if (n.lastScrollWasInitiated) return void (n.lastScrollWasInitiated = !1);
if ("scroll" === n.props.markAsReadType) {
var e = n.getUnreadPostsOutOfView();
e.length > 0 && e.forEach(function(e) {
n.props.shouldMarkAsRead(e, !0);
});
}
n.props.canLoadMore && n.getCurrentScrollTop() >= .95 * n.getScrollBottom() && n.props.shouldLoadPosts();
}
}, n.markPostAsRead = function(e, t) {
n.props.shouldMarkAsRead(e, t);
}, n.state = {}, n.debouncedUpdateScrollCache = c.default(n.updateScrollCache, 100), 
n;
}
return __extends(t, e), t.prototype.componentWillMount = function() {
this.props.shouldLoadPosts();
}, t.prototype.componentDidMount = function() {
var e = this;
this.feederIsMounted = !0, window.addEventListener("resize", this.debouncedUpdateScrollCache), 
n(function() {
if (!a.Ext.isMobile() && !e.perfectScrollbar && e.feederIsMounted) {
var t = i.findDOMNode(e);
t instanceof Element && (e.scrollContainer = t.querySelector(".tpl-post-feed--scroll"), 
e.scrollContainer && (e.perfectScrollbar = new window.PerfectScrollbar(e.scrollContainer), 
e.scrollContainer.addEventListener("scroll", e.didScroll)));
}
e.updateScrollCache();
});
}, t.prototype.componentWillUnmount = function() {
this.feederIsMounted = !1, window.removeEventListener("resize", this.debouncedUpdateScrollCache);
}, t.prototype.componentWillUpdate = function(e, t, n) {
e.lastPostAutoAdded && e.lastPostAutoAdded.timestamp !== this.lastAutoAddTimestamp && (this.lastScrollHeight = this.getScrollBottom(), 
this.lastScrollTop = this.getCurrentScrollTop());
}, t.prototype.componentDidUpdate = function(e, t, o) {
var r = this, s = e.activeIndex !== this.props.activeIndex, a = !1 !== this.props.activeIndex && this.props.posts[this.props.activeIndex];
if (this.props.lastPostAutoAdded && this.props.lastPostAutoAdded.timestamp !== this.lastAutoAddTimestamp) {
this.lastAutoAddTimestamp = this.props.lastPostAutoAdded.timestamp;
var c = this.getScrollBottom();
if (this.lastScrollHeight !== c && this.lastScrollTop > 0) {
var l = this.lastScrollHeight - c;
this.scrollContainer && (this.scrollContainer.scrollTop -= l);
}
}
n(function() {
if (r.perfectScrollbar && r.perfectScrollbar.update(), s && a) {
var e = i.findDOMNode(r);
if (e instanceof Element) {
var t = e.querySelector('[data-post-id="' + a.id + '"]');
t && t.scrollIntoViewSmart(0);
}
}
r.updateScrollCache();
});
}, t.prototype.getIsExpanded = function(e) {
return !this.props.pageStyle.columns.includes("content") && ("expanded" === this.props.postListStyle.showContent || this.props.posts.indexOf(e) === this.props.activeIndex);
}, t.prototype.getCurrentScrollTop = function() {
return this.scrollContainer ? this.scrollContainer.scrollTop : 0;
}, t.prototype.getScrollBottom = function() {
return this.scrollContainer ? this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight : 0;
}, t.prototype.getUnreadPostsOutOfView = function() {
var e = this, t = this.getCurrentScrollTop();
return this.props.posts.filter(function(n) {
var o = e.postLocations[n.id || ""];
return !!o && (!(o.y >= t) && !n.is_read);
});
}, t.prototype.getEmptyType = function() {
return this.props.postDisplayOptions.filters.includes("unread") ? "unread" : this.props.postDisplayOptions.filters.includes("starred") ? "starred" : "default";
}, t.prototype.render = function() {
var e = this;
return o.createElement("div", {
className: "tpl-post-feed column " + (this.props.isHighlighted ? "column--is-highlighted" : "column--is-not-highlighted")
}, o.createElement(s.SortToolbar, __assign({
barHeight: "large",
shouldNavigate: this.props.shouldNavigate
}, this.props)), o.createElement("div", {
className: "tpl-post-feed--scroll feeder--perfect-scrollbar-scroller"
}, this.props.isError ? o.createElement("div", {
className: "tpl-post-feed--error"
}, "An error ocurred when loading the posts. Please try again") : null, this.props.isLoading ? o.createElement("div", {
className: "tpl-post-feed--loading"
}, "Loading...") : null, this.props.posts.map(function(t, n) {
return o.createElement(r.PostContent, {
key: t.id,
post: t,
sharers: e.props.sharers,
timestampType: e.props.timestampType,
markAsReadType: e.props.markAsReadType,
isActive: n === e.props.activeIndex,
isExpanded: e.getIsExpanded(t),
titleLink: !e.props.pageStyle.columns.includes("content"),
shouldExpand: e.props.shouldGotoPost,
postListStyle: e.props.postListStyle,
canPostCollections: e.props.canPostCollections,
shouldMarkAsStarred: e.props.shouldMarkAsStarred,
shouldMarkAsRead: e.props.shouldMarkAsRead,
shouldPromptPostCollections: e.props.shouldPromptPostCollections,
shouldAction: e.props.shouldAction,
shouldShare: e.props.shouldShare
});
}), this.props.isLoading || this.props.isError || this.props.posts.length ? null : o.createElement(l.ConsumeNoPostsInFeed, {
emptyType: this.getEmptyType()
}), this.props.canLoadMore ? o.createElement("div", {
className: "tpl-post-feed--load-more",
onClick: this.props.shouldLoadPosts
}, "Load more") : null));
}, t;
}(o.Component), e("PostFeed", u);
}
};
}), System.register("client/components/ConsumeToolbar", [ "react", "client/components/FeederIcon", "client/components/ShareSheet", "client/components/ContextMenu", "client/components/PageStyleDialog", "client/components/_new_reader" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, c;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
c = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickNext = function(e) {
e.preventDefault(), n.props.shouldNavigate("down");
}, n.didClickPrevious = function(e) {
e.preventDefault(), n.props.shouldNavigate("up");
}, n.didClickReadabilityOn = function(e) {
e.preventDefault(), n.props.shouldToggleReadability(!0);
}, n.didClickReadabilityOff = function(e) {
e.preventDefault(), n.props.shouldToggleReadability(!1);
}, n.didClickToggleStar = function(e) {
e.preventDefault(), n.props.post && n.props.shouldMarkAsStarred(n.props.post, !n.props.post.is_starred);
}, n.didClickToggleRead = function(e) {
e.preventDefault(), n.props.post && n.props.shouldMarkAsRead(n.props.post, !n.props.post.is_read);
}, n.didClickPostCollection = function(e) {
e.preventDefault(), n.props.post && n.props.shouldPromptPostCollections(n.props.post);
}, n.state = {
showShareSheet: !1,
showPageStyleDialog: a.shouldSeePageStyleDialog()
}, a.resetShouldSeePageStyleDialog(), n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.createElement("div", {
className: "consume-toolbar " + (this.props.post ? "with-post" : "")
}, n.createElement("span", {
className: "consume-post-window--close nav-button nav-button--icon",
title: "Close",
onClick: this.props.shouldClose
}, n.createElement(o.FeederIcon, {
icon: "close"
})), n.createElement("span", {
className: "prev nav-button nav-button--icon",
title: "Previous post",
onClick: this.didClickPrevious
}, n.createElement(o.FeederIcon, {
icon: "arrow-up"
})), n.createElement("span", {
className: "next nav-button nav-button--icon",
title: "Next post",
onClick: this.didClickNext
}, n.createElement(o.FeederIcon, {
icon: "arrow-down"
})), n.createElement("span", {
className: "read-post nav-button nav-button--icon " + (this.props.post && this.props.post.is_read ? "" : "on"),
title: "Mark as read",
onClick: this.didClickToggleRead
}, n.createElement(o.FeederIcon, {
icon: "checkmark"
})), n.createElement("span", {
className: "star-post nav-button nav-button--icon " + (this.props.post && this.props.post.is_starred ? "on" : ""),
title: "Star post",
onClick: this.didClickToggleStar
}, n.createElement(o.FeederIcon, {
icon: "star-filled"
})), this.props.canPostCollections ? n.createElement("span", {
className: "toggle-post-collection nav-button nav-button--icon",
title: "Add to Collection",
onClick: this.didClickPostCollection
}, n.createElement(o.FeederIcon, {
icon: "label"
})) : null, n.createElement("span", {
className: "nav-button nav-button--icon share",
title: "Share",
onClick: function() {
return e.setState({
showShareSheet: !0
});
}
}, n.createElement(o.FeederIcon, {
icon: "share"
}), this.props.post ? n.createElement(i.ShareSheet, {
post: this.props.post,
sharers: this.props.sharers,
isVisible: this.state.showShareSheet,
shouldClose: function() {
return e.setState({
showShareSheet: !1
});
},
shouldShare: this.props.shouldShare
}) : null), n.createElement("div", {
className: "current-post-header"
}, n.createElement("a", {
href: this.props.post ? this.props.post.link : "",
className: "text",
target: "_blank"
}, this.props.post ? this.props.post.title : ""), n.createElement("a", {
href: this.props.post ? this.props.post.link : "",
className: "link",
target: "_blank"
}, this.props.post ? this.props.post.link : "")), n.createElement("a", {
className: "nav-button readability simple " + (this.props.isReadabilityOn ? "on" : null),
onClick: this.didClickReadabilityOn
}, "Simple"), n.createElement("a", {
className: "nav-button readability full " + (this.props.isReadabilityOn ? null : "on"),
onClick: this.didClickReadabilityOff
}, "Full"), n.createElement("span", {
ref: "pageStyleButton",
className: "consume-post-window--page-style feed-options nav-button",
onClick: function() {
return e.setState({
showPageStyleDialog: !0
});
}
}, "Display"), n.createElement(r.ContextMenu, {
isVisible: this.state.showPageStyleDialog,
elementPosition: function() {
return e.refs.pageStyleButton;
},
elementSticky: {
x: "center",
y: "bottom"
},
className: "with-arrow wide page-style-menu",
shouldClose: function() {
return e.setState({
showPageStyleDialog: !1
});
}
}, n.createElement(s.PageStyleDialog, {
pageStyle: this.props.pageStyle,
shouldChangePageStyle: this.props.shouldChangePageStyle
})));
}, t;
}(n.Component), e("ConsumeToolbar", c);
}
};
}), System.register("client/components/ConsumeNoPosts", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "tpl-consume-no-posts no-screen"
}, n.createElement("div", {
className: "no-screen--message"
}, n.createElement("div", {
className: "no-screen--title"
}, "No posts selected"), n.createElement("div", {
className: "no-screen--text"
}, "Open a post in the bar to the left", n.createElement("br", null), "to begin consuming feeds")));
}, t;
}(n.Component), e("ConsumeNoPosts", o);
}
};
}), System.register("client/components/ReaderViewFrame", [ "react", "client/components/ReaderView" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickReadFullPost = function(e) {
n.props.overrideReadMore && (e.preventDefault(), n.props.didClickReadMore());
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement("div", {
className: "ReaderViewFrame"
}, n.createElement("div", {
className: "wrapper"
}, n.createElement("h1", null, n.createElement("a", {
target: "_blank",
rel: "noopener noreferrer",
href: this.props.post.link,
onClick: this.didClickReadFullPost
}, this.props.post.title)), n.createElement(o.ReaderView, {
contents: this.props.post.post_contents
}), n.createElement("p", {
className: "feeder-post-link mobile"
}, n.createElement("a", {
target: "_blank",
rel: "noopener noreferrer",
href: this.props.post.link,
onClick: this.didClickReadFullPost
}, "Read full post"))));
}, t;
}(n.Component), e("ReaderViewFrame", i);
}
};
}), System.register("client/components/ConsumePostWindow", [ "react", "client/components/ConsumeToolbar", "client/components/ConsumeNoPosts", "client/appglobals", "client/components/ReaderViewFrame" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.props.post && !this.props.post.is_read && this.props.shouldMarkAsRead(this.props.post, !0);
}, t.prototype.componentDidUpdate = function(e) {
this.props.post && e.post && e.post.id !== this.props.post.id && !this.props.post.is_read && this.props.shouldMarkAsRead(this.props.post, !0);
}, t.prototype.getPostLink = function(e) {
var t = !!e.feed_id && r.app.user.feed(e.feed_id), n = t && 1 == t.getQuirk("no_iframing_allowed");
if (this.props.isReadabilityOn) return e.getConsumePath();
if (n) return e.getConsumePath();
var o = e.getLink();
return document.location && "https:" === document.location.protocol && (o = o.replace(/^http:/, "https:")), 
o;
}, t.prototype.checkIfShouldOverrideReadMore = function() {
return r.Ext.isExtensionInstalled();
}, t.prototype.render = function() {
var e = this, t = this.props.post && this.props.isReadabilityOn && this.props.post.post_contents, r = this.props.post && !t;
return n.createElement("div", {
className: "consume-post-window-container " + (this.props.isAttached ? "attached" : null) + " " + (this.props.post ? "consume-post-visible" : null)
}, n.createElement("div", {
className: "consume-popup-hider",
onClick: this.props.didClickHider
}), n.createElement("div", {
className: "consume-post-window " + (this.props.post ? "consume-post-window--show" : null)
}, n.createElement(o.ConsumeToolbar, {
post: this.props.post,
sharers: this.props.sharers,
pageStyle: this.props.pageStyle,
isReadabilityOn: this.props.isReadabilityOn,
shouldNavigate: this.props.shouldNavigate,
canPostCollections: this.props.canPostCollections,
shouldMarkAsStarred: this.props.shouldMarkAsStarred,
shouldMarkAsRead: this.props.shouldMarkAsRead,
shouldAction: function() {
return alert("How did you get here?");
},
shouldPromptPostCollections: this.props.shouldPromptPostCollections,
shouldToggleReadability: this.props.shouldToggleReadability,
shouldClose: this.props.didClickHider,
shouldChangePageStyle: this.props.shouldChangePageStyle,
shouldShare: this.props.shouldShare
}), this.props.post && t ? n.createElement(s.ReaderViewFrame, {
post: this.props.post,
overrideReadMore: this.checkIfShouldOverrideReadMore(),
didClickReadMore: function() {
return e.props.shouldToggleReadability(!1);
}
}) : null, this.props.post && r ? n.createElement("iframe", {
frameBorder: "0",
className: "consumer",
src: this.getPostLink(this.props.post),
sandbox: "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts",
allowFullScreen: !0
}) : t ? null : n.createElement(i.ConsumeNoPosts, null)));
}, t;
}(n.Component), e("ConsumePostWindow", a);
}
};
}), System.register("client/library/MiniRedux", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e(e) {
var t = this;
this.dispatch = function() {
for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
for (var o = 0, i = e; o < i.length; o++) {
var r = i[o], s = function(e) {
switch (typeof e) {
case "function":
return {
value: e(t.dispatch, function() {
return t.currentState;
})
};

default:
console.log("[action] %s", e.type), Object.keys(t.reducers).forEach(function(n) {
var o = n, i = t.reducers[o], r = i(t.currentState[o], e);
t.currentState[o] = r;
});
}
}(r);
if ("object" == typeof s) return s.value;
}
t.render();
}, this.reducers = {}, this.currentState = {}, this.render = e;
}
return e.prototype.connect = function(e) {
var t = this;
Object.keys(e).forEach(function(n) {
var o = n;
t.reducers[o] = e[o];
});
}, e;
}(), e("MiniRedux", n);
}
};
}), System.register("client/actions/share_actions", [ "client/models/Sharer", "client/appglobals" ], function(e, t) {
"use strict";
function n() {
return {
type: "SHARERS_LOAD"
};
}
function o(e, t) {
return {
type: "SHARERS_LOAD_COMPLETED",
sharers: e,
error: t
};
}
function i(e, t) {
return {
type: "SHARE_CREATE",
sharerId: e,
share: t
};
}
function r(e, t) {
return {
type: "SHARE_CREATE_COMPLETED",
shareId: e,
error: t
};
}
function s() {
var e = this;
return function(t, i) {
return __awaiter(e, void 0, void 0, function() {
var e, i;
return __generator(this, function(r) {
switch (r.label) {
case 0:
t(n()), r.label = 1;

case 1:
return r.trys.push([ 1, 3, , 4 ]), [ 4, l.app.sharers.load() ];

case 2:
return e = r.sent(), 0 === e.length && (e = c.SHARERS), t(o(e, void 0)), [ 2, !0 ];

case 3:
return i = r.sent(), console.error(i), t(o(void 0, "An error occurred")), [ 2, !1 ];

case 4:
return [ 2 ];
}
});
});
};
}
function a(e, t) {
var n = this;
return function(o, s) {
return __awaiter(n, void 0, void 0, function() {
var n, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
o(i(e, t)), a.label = 1;

case 1:
return a.trys.push([ 1, 3, , 4 ]), [ 4, l.app.sharers.share({
sharerId: e,
postId: t.postId,
email: t.email
}) ];

case 2:
return n = a.sent(), o(r(n.id, void 0)), t.onComplete && t.onComplete(), [ 2, !0 ];

case 3:
return s = a.sent(), console.error(s), o(r(void 0, "An error occurred")), t.onError && t.onError(), 
[ 2, !1 ];

case 4:
return [ 2 ];
}
});
});
};
}
var c, l;
t && t.id;
return e("sharersLoadAction", n), e("sharersLoadCompletedAction", o), e("shareCreateAction", i), 
e("shareCreateCompletedAction", r), e("loadSharers", s), e("share", a), {
setters: [ function(e) {
c = e;
}, function(e) {
l = e;
} ],
execute: function() {}
};
}), System.register("client/actions/post_actions", [], function(e, t) {
"use strict";
function n(e) {
return {
type: "LOAD_POSTS",
columnId: e
};
}
function o(e, t) {
return {
type: "LOAD_POSTS_COMPLETE",
columnId: e,
posts: t
};
}
function i(e) {
return {
type: "LOAD_POSTS_ERROR",
columnId: e
};
}
function r(e) {
return {
type: "POST_ADDED",
postId: e
};
}
function s(e) {
return {
type: "RESET_POSTS",
columnId: e
};
}
function a(e, t) {
return {
type: "MARK_POSTS_AS_READ",
postIds: e,
isRead: t
};
}
function c(e, t) {
return {
type: "MARK_POSTS_AS_STARRED",
postIds: e,
isStarred: t
};
}
function l(e, t) {
return {
type: "MARK_ALL_AS_READ",
feedId: e,
folderId: t
};
}
function u(e, t) {
var r = t.resetPosts;
return function(t, a) {
return __awaiter(this, void 0, void 0, function() {
var c, l, u, p;
return __generator(this, function(d) {
switch (d.label) {
case 0:
if (!(c = a().consume.columns.find(function(t) {
return t.id === e;
}))) return [ 2 ];
if ("POST_FEED" !== c.type) return console.error("Calling loadPosts on non-post-feed column"), 
[ 2 ];
r && t(s(e)), t(n(e)), d.label = 1;

case 1:
return d.trys.push([ 1, 3, , 4 ]), l = a().consume.columns.find(function(t) {
return t.id === e;
}), l ? "POST_FEED" !== l.type ? (console.error("Calling loadPosts on non-post-feed column. after"), 
t(o(e, [])), [ 2 ]) : [ 4, l.postFeed.postFetcher.fetch() ] : (t(o(e, [])), [ 2 ]);

case 2:
return u = d.sent(), t(o(e, u)), [ 3, 4 ];

case 3:
return p = d.sent(), console.error(p), t(i(e)), [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
}
t && t.id;
return e("loadPostsAction", n), e("loadPostsCompleteAction", o), e("loadPostsErrorAction", i), 
e("postAddedAction", r), e("resetPostsAction", s), e("markPostsAsReadAction", a), 
e("markPostsAsStarredAction", c), e("markAllAsReadAction", l), e("loadPosts", u), 
{
setters: [],
execute: function() {}
};
}), System.register("client/actions/post_feed_view_actions", [ "client/backend-imports", "client/library/keyboard-navigation", "client/actions/post_actions", "client/actions/consume_actions", "client/actions/post_collection_actions" ], function(e, t) {
"use strict";
function n(e, t, n) {
return {
type: "OPEN_POST_FEED",
feed: e,
fromViewController: t,
shouldActivate: n
};
}
function o(e, t) {
return {
type: "NAVIGATE_POST_FEED",
columnId: e,
offset: t
};
}
function i(e) {
return {
type: "OPEN_POST_IN_POST_FEEDS",
postId: e
};
}
function r(e) {
return function(t, n) {
return __awaiter(this, void 0, void 0, function() {
var o, i, r, l, f;
return __generator(this, function(m) {
if (o = h.postCollectionsKeyboardNavigation(e)(t, n)) return [ 2 ];
if (!u.canOverrideKeyboardEvent(e)) return [ 2 ];
if (i = u.NAVIGATION_KEYS[e.keyCode], i && c(i, function() {
return e.preventDefault();
})(t, n), r = u.KEYBOARD_KEYS[e.keyCode]) switch (e.preventDefault(), l = a(n().consume), 
r) {
case "read":
l && l.id && t(p.markPostsAsReadAction([ l.id ], !l.is_read));
break;

case "star":
l && l.id && t(p.markPostsAsStarredAction([ l.id ], !l.is_starred));
break;

case "column-previous":
t(d.navigateColumnAction(-1));
break;

case "column-next":
t(d.navigateColumnAction(1));
break;

case "toggle-readability":
t(d.setReadabilityAction(!n().consume.isReadabilityOn));
break;

case "close":
t(d.closeConsumeWindowAction());
break;

case "post-collections":
l && t(h.promptPostCollectionsAction(l, n().database.postCollections.models));
break;

case "queue":
case "next-tab":
f = s(n().consume), f && "POPUP" === f.type && f.popup && f.popup.performKeyboardAction(r);
}
return [ 2 ];
});
});
};
}
function s(e) {
return e.columns[e.activeColumn] || !1;
}
function a(e) {
var t = s(e);
if (!t) return !1;
if ("POST_FEED" === t.type) return !1 !== t.postFeed.activeIndex && (t.postFeed.posts[t.postFeed.activeIndex] || !1);
if (!t.popup) return !1;
var n = t.popup.history.current();
return n instanceof l.Post && n;
}
function c(e, t) {
return void 0 === t && (t = function() {}), function(n, i) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(a) {
if (!(r = s(i().consume))) return [ 2, !1 ];
if ("POST_FEED" === r.type) switch (e) {
case "up":
return t(), n(o(r.id, -1)), [ 2, !0 ];

case "down":
return t(), n(r.postFeed.activeIndex === r.postFeed.posts.length - 1 && r.postFeed.postFetcher.hasMore() ? p.loadPosts(r.id, {
resetPosts: !1
}) : o(r.id, 1)), [ 2, !0 ];

case "back":
return t(), n(d.navigateColumnAction(-1)), [ 2, !0 ];

case "forward":
return t(), n(d.navigateColumnAction(1)), [ 2, !0 ];

default:
console.log("Unhandled keyboard navigation event", e);
} else {
if (!r.popup) return [ 2, !1 ];
switch (e) {
case "up":
t(), r.popup.historyPrevious();
break;

case "down":
t(), r.popup.historyNext();
break;

case "forward":
t(), r.popup.navForward();
break;

case "back":
t(), r.popup.navBack();
break;

default:
console.log("Unhandled keyboard navigation event", e);
}
}
return [ 2, !1 ];
});
});
};
}
var l, u, p, d, h;
t && t.id;
return e("openPostFeedAction", n), e("navigatePostFeedAction", o), e("openPostsInPostFeeds", i), 
e("postFeedKeyboardNavigation", r), e("getActivePost", a), e("postFeedNavigate", c), 
{
setters: [ function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
} ],
execute: function() {}
};
}), System.register("client/actions/post_collection_actions", [ "client/library/keyboard-navigation", "client/actions/post_feed_view_actions" ], function(e, t) {
"use strict";
function n(e, t) {
return {
type: "PROMPT_POST_COLLECTIONS",
post: e,
postCollections: t
};
}
function o(e) {
return {
type: "NAVIGATE_POST_COLLECTIONS",
delta: e
};
}
function i(e) {
return {
type: "UPDATED_POST_COLLECTIONS",
postCollections: e
};
}
function r(e, t) {
return function(n, o) {
return __awaiter(this, void 0, void 0, function() {
var o, i, r, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
o = 0, i = t, a.label = 1;

case 1:
return o < i.length ? (r = i[o], [ 4, r.addPost(e) ]) : [ 3, 4 ];

case 2:
if (!(s = a.sent())) return [ 2, !1 ];
a.label = 3;

case 3:
return o++, [ 3, 1 ];

case 4:
return n(), [ 2, !0 ];
}
});
});
};
}
function s(e, t) {
return function(n, o) {
return __awaiter(this, void 0, void 0, function() {
var o, i, r, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
o = 0, i = t, a.label = 1;

case 1:
return o < i.length ? (r = i[o], [ 4, r.removePost(e) ]) : [ 3, 4 ];

case 2:
if (!(s = a.sent())) return [ 2, !1 ];
a.label = 3;

case 3:
return o++, [ 3, 1 ];

case 4:
return n(), [ 2, !0 ];
}
});
});
};
}
function a(e) {
return function(t, o) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(i) {
return t(n(e, o().database.postCollections.models)), [ 2, !0 ];
});
});
};
}
function c(e) {
return function(t, i) {
var a = i().postCollection, c = i().database.postCollections.models, p = c.find(function(t) {
return t.matchesKeyCode(e.keyCode);
});
if (p) {
var d = u.getActivePost(i().consume);
return !!d && (d.hasCollection(p.feed_guid) ? s(d, [ p ])(t, i) : r(d, [ p ])(t, i), 
!0);
}
if (!a) return !1;
var h = a.post, f = a.activeIndex, m = a.postCollections;
switch (e.keyCode) {
case l.KEYS.ESCAPE:
return t(n(!1, [])), !0;

case l.KEYS.ENTER:
if (!1 === f) t(n(!1, [])); else {
var g = m[f];
g && (h.hasCollection(g.feed_guid) ? s(h, [ g ])(t, i) : r(h, [ g ])(t, i));
}
return !0;

case l.KEYS.J:
case l.KEYS.UP:
return t(o(-1)), !0;

case l.KEYS.K:
case l.KEYS.DOWN:
return t(o(1)), !0;
}
return !0;
};
}
var l, u;
t && t.id;
return e("promptPostCollectionsAction", n), e("navigatePostCollectionsAction", o), 
e("updatedPostCollectionsAction", i), e("addPostToPostCollections", r), e("removePostFromPostCollections", s), 
e("openPostCollectionDialog", a), e("postCollectionsKeyboardNavigation", c), {
setters: [ function(e) {
l = e;
}, function(e) {
u = e;
} ],
execute: function() {}
};
}), System.register("client/actions/database_actions", [ "client/appglobals", "client/actions/post_collection_actions" ], function(e, t) {
"use strict";
function n() {
return {
type: "LOAD_POST_COLLECTIONS"
};
}
function o(e) {
return {
type: "LOAD_POST_COLLECTIONS_COMPLETE",
postCollections: e
};
}
function i() {
return {
type: "LOAD_POST_COLLECTIONS_ERROR"
};
}
function r(e) {
return function(t, r) {
return __awaiter(this, void 0, void 0, function() {
var r, c, l;
return __generator(this, function(u) {
switch (u.label) {
case 0:
t(n()), u.label = 1;

case 1:
return u.trys.push([ 1, 6, , 7 ]), e ? [ 4, s.app.postCollectionMapper.performReload() ] : [ 3, 3 ];

case 2:
return c = u.sent(), [ 3, 5 ];

case 3:
return [ 4, s.app.postCollectionMapper.getAll() ];

case 4:
c = u.sent(), u.label = 5;

case 5:
return r = c, r ? (t(o(r)), t(a.updatedPostCollectionsAction(r))) : t(i()), [ 3, 7 ];

case 6:
return l = u.sent(), console.error(l), t(i()), [ 3, 7 ];

case 7:
return [ 2 ];
}
});
});
};
}
var s, a;
t && t.id;
return e("loadPostCollectionsAction", n), e("loadPostCollectionsCompleteAction", o), 
e("loadPostCollectionsErrorAction", i), e("loadPostCollections", r), {
setters: [ function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/post_collection_reducers", [], function(e, t) {
"use strict";
function n(e, t) {
if (void 0 === e) return !1;
switch (t.type) {
case "PROMPT_POST_COLLECTIONS":
return !!t.post && {
post: t.post,
postCollections: t.postCollections,
activeIndex: !1
};

case "UPDATED_POST_COLLECTIONS":
return !!e && __assign({}, e, {
postCollections: t.postCollections
});

case "NAVIGATE_POST_COLLECTIONS":
if (e) {
var n = 0;
return !1 === e.activeIndex ? n = t.delta >= 0 ? 0 : e.postCollections.length + t.delta : (n = e.activeIndex + t.delta, 
n >= e.postCollections.length ? n = 0 : n < 0 && (n = e.postCollections.length - 1)), 
__assign({}, e, {
activeIndex: n
});
}
return !1;
}
return e;
}
t && t.id;
return e("postCollectionReducer", n), {
setters: [],
execute: function() {}
};
}), System.register("client/reducers/app_reducers", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/library/after-render", [], function(e, t) {
"use strict";
function n() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, new Promise(function(e) {
requestAnimationFrame(function() {
setTimeout(function() {
e();
}, 0);
});
}) ];
});
});
}
t && t.id;
return e("afterRender", n), {
setters: [],
execute: function() {}
};
}), System.register("client/actions/consume_actions", [ "client/actions/post_feed_view_actions", "client/library/after-render", "client/actions/post_actions", "client/appglobals", "client/controller" ], function(e, t) {
"use strict";
function n(e) {
return {
type: "SET_STATE_FACTORY",
stateFactory: e
};
}
function o(e) {
return {
type: "SET_READABILITY",
isOn: e
};
}
function i(e, t) {
return {
type: "STORE_POPUP",
popup: t,
columnId: e
};
}
function r() {
return {
type: "ADD_POPUP"
};
}
function s(e) {
return {
type: "REMOVE_POPUP",
columnId: e
};
}
function a(e, t) {
return {
type: "MOVE_POPUP",
columnId: e,
newIndex: t
};
}
function c(e) {
return {
type: "ACTIVATE_COLUMN",
columnId: e
};
}
function l(e) {
return {
type: "NAVIGATE_COLUMN",
offset: e
};
}
function u(e, t) {
return {
type: "SET_DISPLAY_OPTIONS",
columnId: e,
filters: t
};
}
function p(e, t) {
return {
type: "SET_AUTO_UPDATE",
columnId: e,
isOn: t
};
}
function d(e, t) {
return {
type: "SET_SORT_ORDER",
columnId: e,
sortOrder: t
};
}
function h(e, t) {
return {
type: "SET_TIMESTAMP_TYPE",
columnId: e,
timestampType: t
};
}
function f(e, t) {
return {
type: "SET_POST_LIST_STYLE",
columnId: e,
postListStyle: t
};
}
function m(e) {
return {
type: "SET_PAGE_STYLE",
pageStyle: e
};
}
function g(e) {
return {
type: "OPEN_CONSUME_WINDOW",
post: e
};
}
function v() {
return {
type: "CLOSE_CONSUME_WINDOW"
};
}
function y(e) {
return {
type: "OPEN_WELCOME_MODAL",
style: e
};
}
function C() {
return {
type: "CLOSE_WELCOME_MODAL"
};
}
function b(e) {
var t = this;
return function(n, o) {
return __awaiter(t, void 0, void 0, function() {
var t, i, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return t = o().consume.pageStyle, n(m(e)), [ 4, E.afterRender() ];

case 1:
return s.sent(), i = o().consume, r = i.stateFactory, [ 2 ];
}
});
});
};
}
function S(e, t) {
var n = this;
return function(t, o) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(n) {
return t(g(e)), t(k.openPostsInPostFeeds(e.id || "")), [ 2 ];
});
});
};
}
function w(e, t, n) {
var o = this;
return function(t, i) {
return __awaiter(o, void 0, void 0, function() {
var o, i, r, s, a, r, a;
return __generator(this, function(c) {
switch (c.label) {
case 0:
switch (o = n) {
case "mark-all-as-read":
return [ 3, 1 ];

case "open-all-unread":
return [ 3, 6 ];

case "open-every-unread-post":
return [ 3, 7 ];

case "clear-all-unread":
return [ 3, 8 ];
}
return [ 3, 11 ];

case 1:
return i = _.app.store.feed(e.feed_id), i ? [ 4, i.countUnread() ] : [ 3, 3 ];

case 2:
return s = c.sent(), [ 3, 4 ];

case 3:
s = 0, c.label = 4;

case 4:
return r = s, [ 4, x.askMarkManyAsRead(r) ];

case 5:
return a = c.sent(), a && t(P.markAllAsReadAction(null, e.feed_id)), [ 3, 11 ];

case 6:
case 7:
return [ 3, 11 ];

case 8:
return [ 4, _.app.user.unreads.count() ];

case 9:
return r = c.sent(), [ 4, x.askMarkManyAsRead(r) ];

case 10:
return a = c.sent(), a && t(P.markAllAsReadAction(null, null)), [ 3, 11 ];

case 11:
return [ 2 ];
}
});
});
};
}
var k, E, P, _, x;
t && t.id;
return e("setStateFactoryAction", n), e("setReadabilityAction", o), e("storePopupAction", i), 
e("addPopupAction", r), e("removePopupAction", s), e("movePopupAction", a), e("activateColumnAction", c), 
e("navigateColumnAction", l), e("setDisplayOptionsAction", u), e("setAutoUpdateAction", p), 
e("setSortOrderAction", d), e("setTimestampTypeAction", h), e("setPostListStyleAction", f), 
e("setPageStyleAction", m), e("openConsumeWindowAction", g), e("closeConsumeWindowAction", v), 
e("openWelcomeModalAction", y), e("closeWelcomeModalAction", C), e("updatePageStyle", b), 
e("openPost", S), e("performGlobalAction", w), {
setters: [ function(e) {
k = e;
}, function(e) {
E = e;
}, function(e) {
P = e;
}, function(e) {
_ = e;
}, function(e) {
x = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/post_reducers", [ "client/library/immutable", "client/appglobals" ], function(e, t) {
"use strict";
function n(e, t) {
switch (t.type) {
case "POST_ADDED":
var n = r.app.store.post(t.postId);
return n ? __assign({}, e, {
columns: e.columns.map(function(t) {
if (!e.stateFactory) return t;
if ("POST_FEED" !== t.type) return t;
if (!t.postFeed.autoUpdate) return t;
if (!t.postFeed.feed.matchesPost(n)) return t;
var i, r = e.stateFactory.getSortOrderForFeed(t.postFeed.fromViewController, t.postFeed.feed), s = t.postFeed.posts.slice(), a = t.postFeed.activeIndex, c = 0;
return "newest-first" === r ? (i = "top", s.unshift(n), "number" == typeof a && (c = 1)) : (i = "bottom", 
s.push(n)), s = o(s), s.length === t.postFeed.posts.length ? t : ("number" == typeof a && (a += c), 
__assign({}, t, {
postFeed: __assign({}, t.postFeed, {
activeIndex: a,
posts: s,
lastPostAutoAdded: {
timestamp: Date.now(),
direction: i
}
})
}));
})
}) : e;

case "LOAD_POSTS":
return __assign({}, e, {
columns: i.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
isLoading: !0,
isError: !1
})
});
})
});

case "LOAD_POSTS_COMPLETE":
return __assign({}, e, {
columns: i.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
posts: o(e.postFeed.posts.concat(t.posts)),
isLoading: !1,
isError: !1
})
});
})
});

case "LOAD_POSTS_ERROR":
return __assign({}, e, {
columns: i.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
isLoading: !1,
isError: !0
})
});
})
});

case "RESET_POSTS":
return __assign({}, e, {
columns: i.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
postFetcher: e.postFeed.feed.getPostIterator(e.postFeed.postDisplayOptions),
posts: [],
isLoading: !1,
isError: !1
})
});
})
});

case "MARK_POSTS_AS_READ":
return t.postIds.forEach(function(e) {
var n = r.app.store.post(e);
n && n.mark(t.isRead ? 1 : 0);
}), e;

case "MARK_POSTS_AS_STARRED":
return t.postIds.forEach(function(e) {
var n = r.app.store.post(e);
n && n.toggleStar(t.isStarred);
}), e;

case "MARK_POSTS_AS_READ":
default:
return e;
}
}
function o(e) {
return e.feederUnique("id");
}
var i, r;
t && t.id;
return e("postReducer", n), {
setters: [ function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/post_feed_view_reducers", [ "client/library/immutable" ], function(e, t) {
"use strict";
function n(e, t) {
var n = e.stateFactory;
switch (t.type) {
case "OPEN_POST_FEED":
var i = n.getPostDisplayOptionsForFeed(t.fromViewController, t.feed), r = n.getSortOrderForFeed(t.fromViewController, t.feed), s = n.getPreference(t.fromViewController, "global:timestampType"), a = n.getPreference(t.fromViewController, "display:autoUpdate"), c = n.getPreference(t.fromViewController, "display:postListStyle"), l = e.columns.filter(function(e) {
return "POST_FEED" !== e.type;
});
return l.push({
id: Math.random().toString(),
type: "POST_FEED",
postFeed: {
fromViewController: t.fromViewController,
activeIndex: !1,
feed: t.feed,
posts: [],
postFetcher: t.feed.getPostIterator(i),
postDisplayOptions: i,
sortOrder: r,
timestampType: s,
autoUpdate: a,
postListStyle: c,
isLoading: !1,
isError: !1,
lastPostAutoAdded: void 0
},
isVisible: function(e) {
return e.pageStyle.columns.includes("feed");
}
}), __assign({}, e, {
activeColumn: t.shouldActivate ? l.length - 1 : e.activeColumn,
columns: l
});

case "NAVIGATE_POST_FEED":
var u, p = o.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
if ("POST_FEED" !== e.type) return e;
var n;
return !1 === e.postFeed.activeIndex ? n = 0 : (n = e.postFeed.activeIndex + t.offset, 
n < 0 && (n = 0), n >= e.postFeed.posts.length && (n = e.postFeed.posts.length - 1)), 
u = e.postFeed.posts[n], __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
activeIndex: n
})
});
}), d = e.consumeWindow;
return u && (d = {
id: Math.random().toString(),
post: u
}), __assign({}, e, {
columns: p,
consumeWindow: d
});

case "OPEN_POST_IN_POST_FEEDS":
return __assign({}, e, {
columns: e.columns.map(function(e) {
if ("POST_FEED" !== e.type) return e;
var n = e.postFeed.posts.findIndex(function(e) {
return e.id === t.postId;
});
return __assign({}, e, {
postFeed: __assign({}, e.postFeed, {
activeIndex: -1 === n ? e.postFeed.activeIndex : n
})
});
})
});

default:
return e;
}
}
var o;
t && t.id;
return e("postFeedViewReducer", n), {
setters: [ function(e) {
o = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/consume_reducers", [ "client/reducers/post_reducers", "client/library/immutable", "client/reducers/post_feed_view_reducers", "client/appglobals", "client/library/after-render" ], function(e, t) {
"use strict";
function n(e) {
return void 0 !== e.id && "object" == typeof e.posts && "object" == typeof e.feed && "object" == typeof e.fromViewController;
}
function o(e, t) {
if (void 0 === e) return {
stateFactory: void 0,
columns: [],
pageStyle: r(),
consumeWindow: i(),
isReadabilityOn: !0,
activeColumn: 0,
welcomeScreen: !1
};
var n = e.stateFactory;
switch (t.type) {
case "SET_STATE_FACTORY":
return __assign({}, e, {
stateFactory: t.stateFactory
});

case "SET_READABILITY":
return l.app.user.preferences.set("global:useReadability", t.isOn), __assign({}, e, {
isReadabilityOn: t.isOn
});

case "SET_DISPLAY_OPTIONS":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
if ("POST_FEED" !== e.type) return e;
var o = __assign({}, e.postFeed.postDisplayOptions, {
filters: t.filters
});
return n.shouldUpdatePostDisplayOptionsForFeed(e.postFeed.fromViewController, e.postFeed.feed, o), 
__assign({}, e, {
postFeed: __assign({}, e.postFeed, {
postDisplayOptions: o
})
});
})
});

case "SET_SORT_ORDER":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : (n.shouldUpdateSortOrderForFeed(e.postFeed.fromViewController, e.postFeed.feed, t.sortOrder), 
__assign({}, e, {
postFeed: __assign({}, e.postFeed, {
sortOrder: t.sortOrder
})
}));
})
});

case "SET_AUTO_UPDATE":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : (n.shouldUpdatePreference(e.postFeed.fromViewController, "display:autoUpdate", t.isOn), 
__assign({}, e, {
postFeed: __assign({}, e.postFeed, {
autoUpdate: t.isOn
})
}));
})
});

case "SET_TIMESTAMP_TYPE":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : (n.shouldUpdatePreference(e.postFeed.fromViewController, "global:timestampType", t.timestampType), 
__assign({}, e, {
postFeed: __assign({}, e.postFeed, {
timestampType: t.timestampType
})
}));
})
});

case "SET_POST_LIST_STYLE":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POST_FEED" !== e.type ? e : (n.shouldUpdatePreference(e.postFeed.fromViewController, "display:postListStyle", t.postListStyle), 
__assign({}, e, {
postFeed: __assign({}, e.postFeed, {
postListStyle: t.postListStyle
})
}));
})
});

case "SET_PAGE_STYLE":
var o = e.activeColumn;
if (t.pageStyle.defaultPage !== e.pageStyle.defaultPage) {
var p = e.pageStyle.defaultPage, d = t.pageStyle.defaultPage, h = !1;
p || "reader" !== d ? "dashboard" === d ? -1 === document.location.href.indexOf("/dashboard") && (h = "/dashboard?new_page=dashboard") : "reader" === d && -1 === document.location.href.indexOf("/reader") && (h = "/reader?new_page=reader") : -1 !== document.location.href.indexOf("/dashboard") && -1 === document.location.href.indexOf("/reader") && (h = "/reader?new_page=reader"), 
l.app.user.preferences.set("display:pageStyle", t.pageStyle), h && (document.body.style.opacity = "0.5", 
l.app.user.preferences.flushPreferences().then(function() {
document.location.href = h;
}).catch(function(e) {
console.error(e), document.body.style.opacity = "", alert("Could not change display style. Please try again or contact support@feeder.co");
}));
} else {
var f = e.columns.find(function(e) {
return "POPUP" === e.type;
});
if (f && "POPUP" === f.type && f.popup) {
var m = f.popup;
n.shouldUpdatePreference(m, "display:pageStyle", t.pageStyle), u.afterRender().then(function() {
m.currentScreen.populate();
});
} else console.error("No popup instance present. Not saving preference");
e.pageStyle.columns.includes("feed") && !t.pageStyle.columns.includes("feed") && (o = 0);
}
return __assign({}, e, {
pageStyle: t.pageStyle,
activeColumn: o
});

case "STORE_POPUP":
return __assign({}, e, {
columns: a.replaceInArray(e.columns, function(e) {
return e.id === t.columnId;
}, function(e) {
return "POPUP" !== e.type ? e : __assign({}, e, {
popup: t.popup
});
})
});

case "ADD_POPUP":
return __assign({}, e, {
columns: e.columns.concat([ {
id: Math.random().toString(),
type: "POPUP",
popup: void 0,
isVisible: function(e) {
return !0;
}
} ])
});

case "REMOVE_POPUP":
return __assign({}, e, {
columns: e.columns.filter(function(e) {
return e.id !== t.columnId;
})
});

case "MOVE_POPUP":
return __assign({}, e, {
columns: a.moveItemInArray(e.columns, e.columns.findIndex(function(e) {
return e.id === t.columnId;
}), t.newIndex)
});

case "NAVIGATE_COLUMN":
var g = e.columns.filter(function(t) {
return "POST_FEED" !== t.type || e.pageStyle.columns.includes("feed");
}).length, v = e.activeColumn + t.offset;
return v >= g ? v = 0 : v < 0 && (v = g - 1), __assign({}, e, {
activeColumn: v
});

case "ACTIVATE_COLUMN":
return __assign({}, e, {
activeColumn: e.columns.findIndex(function(e) {
return e.id === t.columnId;
})
});

case "OPEN_CONSUME_WINDOW":
return __assign({}, e, {
consumeWindow: {
id: Math.random().toString(),
post: t.post
}
});

case "CLOSE_CONSUME_WINDOW":
return __assign({}, e, {
consumeWindow: i()
});

case "OPEN_WELCOME_MODAL":
return __assign({}, e, {
welcomeScreen: t.style
});

case "CLOSE_WELCOME_MODAL":
return "dashboard" === e.welcomeScreen && l.app.user.preferences.set("dashboard:seenWelcome", !0), 
__assign({}, e, {
welcomeScreen: !1
});

default:
return e = s.postReducer(e, t), e = c.postFeedViewReducer(e, t);
}
}
function i() {
return {
id: "no_post",
post: null
};
}
function r() {
return l.Ext.isMobile() ? {
defaultPage: "reader",
columns: [ "sidebar" ]
} : l.app.user.preferences.get("display:pageStyle") || {
defaultPage: "reader",
columns: [ "sidebar", "feed" ]
};
}
var s, a, c, l, u;
t && t.id;
return e("isPostFeedDTO", n), e("consumeReducer", o), {
setters: [ function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
} ],
execute: function() {}
};
}), System.register("client/components/ModalWelcome", [ "react", "client/components/Modal", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickGetStarted = function(e) {
e.preventDefault(), n.props.shouldClose();
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.createElement(o.Modal, {
className: "ModalWelcome"
}, n.createElement("h1", {
className: "spacing--large-bottom"
}, "Welcome to Feeder Dashboard"), n.createElement("div", {
className: "ModalWelcome--items"
}, n.createElement("div", {
className: "ModalWelcome--item"
}, n.createElement("div", {
className: "ModalWelcome--icon"
}, n.createElement("img", {
src: i.Ext.assetURL("icons/dashboard-setup@2x.png")
})), n.createElement("div", {
className: "ModalWelcome--text"
}, n.createElement("h2", null, "Setup your dashboard"), n.createElement("p", null, "Get started by setting up the decks you wish to see. Add more by pressing the (+) button in the top left."))), n.createElement("div", {
className: "ModalWelcome--item"
}, n.createElement("div", {
className: "ModalWelcome--icon"
}, n.createElement("img", {
src: i.Ext.assetURL("icons/dashboard-keyboard@2x.png")
})), n.createElement("div", {
className: "ModalWelcome--text"
}, n.createElement("h2", null, "Navigate with the keyboard"), n.createElement("p", null, "Press up, down, left, right, and enter to get started. ", n.createElement("a", {
target: "_blank",
href: "https://feeder.co/help/account/feeder-dashboard-power-up/"
}, "Click here for a full list of keyboard shortcuts.")))), n.createElement("div", {
className: "ModalWelcome--item"
}, n.createElement("div", {
className: "ModalWelcome--icon"
}, n.createElement("img", {
src: i.Ext.assetURL("icons/dashboard-support@2x.png")
})), n.createElement("div", {
className: "ModalWelcome--text"
}, n.createElement("h2", null, "Need help?"), n.createElement("p", null, "Have any questions, feedback or need help setting up your Feeder Dashboard? ", n.createElement("a", {
href: "mailto:support@feeder.co"
}, "Just contact us at support@feeder.co")))), n.createElement("div", {
className: "spacing--medium-vertical"
}, n.createElement("a", {
href: "",
onClick: this.didClickGetStarted,
className: "get-started-button button--primary button--large"
}, "Get started")), n.createElement("div", {
className: "text-center text-muted"
}, n.createElement("small", null, "Switch between display modes in the lower left corner"))));
}, t;
}(n.Component), e("ModalWelcome", r);
}
};
}), System.register("client/actions/dashboard_actions", [ "client/appglobals", "client/actions/consume_actions", "app/library/ts/library" ], function(e, t) {
"use strict";
function n() {
var e = this;
return function(t, n) {
return __awaiter(e, void 0, void 0, function() {
var e, s;
return __generator(this, function(a) {
return (e = n().consume.stateFactory) ? (s = o.app.user.preferences.get("dashboard:seenWelcome"), 
s && !r.getQueryParameter("welcome_modal") || t(i.openWelcomeModalAction("dashboard")), 
[ 2 ]) : [ 2 ];
});
});
};
}
var o, i, r;
t && t.id;
return e("activateDashboard", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {}
};
}), System.register("client/Consume", [ "jquery", "react", "client/pui/alert", "client/pui/modal", "client/controllers/screengetstarted", "client/pui/screenmodal", "client/popup", "app/library/ts/library", "client/library/deck", "client/components/PopupWrapper", "client/components/FeederIcon", "client/components/PostFeed", "client/components/ConsumePostWindow", "client/appglobals", "client/actions/consume_actions", "client/actions/post_actions", "client/actions/post_feed_view_actions", "client/components/PageStyleDialog", "client/actions/share_actions", "client/components/ContextMenu", "client/components/ModalWelcome", "client/actions/dashboard_actions", "client/actions/database_actions", "client/components/Modal", "client/components/PostCollectionDialog", "client/actions/post_collection_actions", "client/controllers/screenmain", "client/controllers/screenposts", "client/controllers/screenfolder" ], function(e, t) {
"use strict";
function n(e) {
var t = this;
return {
shouldApplyStateFactory: function(t) {
e(v.setStateFactoryAction(t));
},
shouldToggleReadability: function(t) {
e(v.setReadabilityAction(t));
},
shouldChangeDisplaySettings: function(t, n) {
e(v.setDisplayOptionsAction(t.id, n), y.loadPosts(t.id, {
resetPosts: !0
}));
},
shouldChangeSortOrder: function(t, n) {
e(v.setSortOrderAction(t.id, n), y.loadPosts(t.id, {
resetPosts: !0
}));
},
shouldChangeTimestampType: function(t, n) {
e(v.setTimestampTypeAction(t.id, n));
},
shouldChangeAutoUpdate: function(t, n) {
e(v.setAutoUpdateAction(t.id, n));
},
shouldChangePostListStyle: function(t, n) {
e(v.setPostListStyleAction(t.id, n));
},
shouldChangePageStyle: function(t) {
e(v.updatePageStyle(t));
},
shouldStorePopupInstance: function(t, n) {
e(v.storePopupAction(t, n));
},
shouldAddPopup: function() {
e(v.addPopupAction());
},
shouldRemovePopup: function(t) {
e(v.removePopupAction(t));
},
shouldMovePopup: function(t, n) {
e(v.movePopupAction(t, n));
},
shouldOpenFeedViaViewController: function(t, n, o) {
var i = !1, r = t.columns.includes("feed");
o instanceof A.default ? (i = g.app.user.createFeedOnlyUnread(), o.feedContainer && r && (o.feedContainer.state.highlightedIndex = 0, 
o.lastActiveIndex = 0, o.vc.history.setActiveActionIndex(0))) : o instanceof M.default || o instanceof T.default && (i = g.app.user.createFeedOfFolder(o.folder), 
r && (o.feedContainer.navigateTo(o.feedContainer.state.listItems[0]), o.vc.history.setActiveActionIndex(0))), 
i && e(C.openPostFeedAction(i, n, r));
},
shouldOpenFeed: function(t, n, o) {
e(C.openPostFeedAction(n, t, o));
},
shouldLoadPosts: function(t) {
e(y.loadPosts(t.id, {
resetPosts: !1
}));
},
shouldHandleKeyboardNavigation: function(t) {
e(C.postFeedKeyboardNavigation(t));
},
shouldNavigate: function(t) {
e(C.postFeedNavigate(t));
},
shouldActivateColumn: function(t) {
e(v.activateColumnAction(t.id));
},
shouldOpenPost: function(t, n) {
e(v.openPost(t, n));
},
shouldClosePosts: function() {
e(v.closeConsumeWindowAction());
},
shouldMarkPostsAsRead: function(t, n) {
e(y.markPostsAsReadAction([ t ].map(function(e) {
return e.id || "";
}), n));
},
shouldMarkPostsAsStarred: function(t, n) {
e(y.markPostsAsStarredAction([ t ].map(function(e) {
return e.id || "";
}), n));
},
shouldShare: function(t, n) {
e(S.share(n.id, t));
},
shouldLoadSharers: function() {
e(S.loadSharers());
},
shouldShowAd: function() {
return g.app.user.can("ads");
},
shouldCloseWelcomeModal: function() {
e(v.closeWelcomeModalAction());
},
shouldActivateDashboardMode: function() {
e(E.activateDashboard());
},
shouldAddToPostCollections: function(n, o) {
return __awaiter(t, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, e(L.addPostToPostCollections(n, o)) ];
});
});
},
shouldRemoveFromPostCollections: function(n, o) {
return __awaiter(t, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, e(L.removePostFromPostCollections(n, o)) ];
});
});
},
shouldLoadPostCollections: function(t) {
return e(P.loadPostCollections(t));
},
shouldPerformGlobalAction: function(t, n, o) {
e(v.performGlobalAction(t, n, o));
},
shouldPromptPostCollections: function(t) {
e(L.openPostCollectionDialog(t));
}
};
}
var o, i, r, s, a, c, l, u, p, d, h, f, m, g, v, y, C, b, S, w, k, E, P, _, x, L, A, M, T, N, F, I;
t && t.id;
return e("mapDispatchToProps", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
}, function(e) {
f = e;
}, function(e) {
m = e;
}, function(e) {
g = e;
}, function(e) {
v = e;
}, function(e) {
y = e;
}, function(e) {
C = e;
}, function(e) {
b = e;
}, function(e) {
S = e;
}, function(e) {
w = e;
}, function(e) {
k = e;
}, function(e) {
E = e;
}, function(e) {
P = e;
}, function(e) {
_ = e;
}, function(e) {
x = e;
}, function(e) {
L = e;
}, function(e) {
A = e;
}, function(e) {
M = e;
}, function(e) {
T = e;
} ],
execute: function() {
N = 15, F = window.EXTRA_VARIABLES || {}, I = function(e) {
function t(t) {
var n = e.call(this, t) || this;
n.pageStyleButton = null, n.deck = !1, n.hasConsideredGetStartedModal = !1, n.setUnreadTitle = function(e) {
var t = "number" == typeof e ? e : e.total;
document.title = t > 0 ? "(" + t + ") Feeder" : "Feeder";
}, n.onGlobalKeyDown = function(e) {
s.default.onGlobalKeyDown(e) || e.ctrlKey || e.metaKey || e.altKey || n.props.shouldHandleKeyboardNavigation(e);
}, n.gotoPostFromViewController = function(e, t) {
var o = n.props.columns.find(function(e) {
return "POPUP" === e.type && e.popup === t;
});
o ? n.gotoPostFromColumn(o, e) : console.error("Could not find viewcontroller", t);
}, n.gotoPostFromColumn = function(e, t) {
n.props.shouldOpenPost(t, e), n.props.shouldActivateColumn(e);
}, n.dismissPost = function() {
n.props.shouldClosePosts();
}, n.didClickAddPopup = function() {
n.deck && n.deck.addAndSaveDeck();
}, n.didClickPageStyleIcon = function() {
n.setState({
showPageStyleDialog: !n.state.showPageStyleDialog
});
}, n.didClickSettings = function() {
document.location.href = g.Ext.settingsURL(g.Config.feeder.root, {}, "/feeds");
}, n.didClickAddFeed = function() {
document.location.href = g.Ext.settingsURL(g.Config.feeder.root, {}, "/feeds/new");
}, n.toggleStar = function(e, t) {
e.toggleStar(t), n.forceUpdate();
}, n.toggleReadability = function(e) {
n.props.shouldToggleReadability(e);
}, n.didClickUpgrade = function() {
g.UI.openTab(g.Config.feeder.payURL);
}, n.showPostCollectionDialog = function(e) {
n.props.shouldLoadPostCollections(!1), n.props.shouldPromptPostCollections(e);
}, n.closePostCollectionDialog = function() {
n.props.shouldPromptPostCollections(!1);
}, n.closeTryV2 = function() {
n.setState({
showTryV2: !1
});
try {
localStorage.closeV2 = !0;
} catch (e) {
console.error(e);
}
}, n.tryV2 = function() {
if (n.setState({
showTryV2: !1
}), document.location) {
var e = document.location.href;
e += -1 !== e.indexOf("?") ? "&" : "?", e = e.replace(/v1=/, "vX="), e += "v2=try", 
document.location.href = e;
}
};
var o = !0;
try {
localStorage.closeV2 && (o = !1);
} catch (e) {}
n.state = {
showPageStyleDialog: !1,
showTryV2: o
}, n.stateFactory = l.Popup.defaultStateFactory(), n.stateFactory.shouldGotoPost = function(e, t) {
n.gotoPostFromViewController(t, e);
};
var i = n.stateFactory.shouldGotoPostList;
n.stateFactory.shouldGotoPostList = function(e, t) {
n.gotoFeed(e, t), n.getPageStyle().columns.includes("feed") || i(e, t);
}, n.stateFactory.shouldOverrideMagicPostsLists = function() {
return n.getPageStyle().columns.includes("feed");
}, n.stateFactory.shouldChangePageStyle = function(e) {
n.props.shouldChangePageStyle(e);
}, n.stateFactory.shouldGotoSettings = function(e, t) {
"main" === t ? e.showSettingsScreen() : "add-feed" === t && e.showAddScreen();
}, n.stateFactory.onGlobalKeyDown = function(e, t) {}, n.stateFactory.willChangePage = function(e, t) {
n.props.shouldOpenFeedViaViewController(n.props.pageStyle, e, t);
}, n.props.shouldApplyStateFactory(n.stateFactory);
var r = u.getQueryParameter("new_page");
return "dashboard" === r || "reader" === r ? (n.props.shouldChangePageStyle(__assign({}, n.props.pageStyle, {
defaultPage: r
})), window.history.replaceState(null, "", document.location.href.replace("new_page=" + r, "").replace(/\?$/, ""))) : F.dashboard_mode && n.props.shouldChangePageStyle(__assign({}, n.props.pageStyle, {
defaultPage: "dashboard"
})), F.dashboard_mode ? n.enableDashboardMode() : n.addPopup(), n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
if (window.addEventListener("keydown", this.onGlobalKeyDown, !0), this.countUnreadTitle(), 
g.app.events.subscribe("feeds:recount", this.setUnreadTitle), this.ensurePushNotificationsAreEnabled(), 
-1 !== document.location.search.indexOf("add_feed=")) {
var e = u.getQueryParameter("add_feed");
this.showSettingsWithAddFeed(e);
}
this.props.shouldLoadSharers(), this.props.shouldLoadPostCollections(!0);
}, t.prototype.componentWillUnmount = function() {}, t.prototype.enableDashboardMode = function() {
o.default(document.body).addClass("dashboard-mode"), this.deck = new p.Deck(g.app, this), 
this.stateFactory = this.deck.buildStateFactory(), this.deck.start(), this.props.shouldActivateDashboardMode();
}, t.prototype.showGetStartedOverlay = function(e) {
this.getStartedModal = new c.default(function() {
return new a.default(e);
}), this.getStartedModal.autoWidth = !0, this.getStartedModal.translucent = !0, 
this.getStartedModal.white = !1, this.getStartedModal.canClose = !1, this.getStartedModal.show(), 
this.getStartedModal.onDestroy = function() {
this.popup.currentScreen.currentNoScreenCallback && this.popup.currentScreen.currentNoScreenCallback();
};
}, t.prototype.countUnreadTitle = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, g.app.user.unreads.count() ];

case 1:
return e = t.sent(), this.setUnreadTitle(e), [ 2 ];
}
});
});
}, t.prototype.ensurePushNotificationsAreEnabled = function() {
if (!g.Ext.isExtensionInstalled()) {
var e = !1;
g.app.store.feeds().forEach(function(t) {
g.app.ui.shouldShowNotificationsOn(t) && (e = !0);
}), e && !g.UI.Notifications.can() && g.UI.Notifications.ask();
}
}, t.prototype.showSettingsWithAddFeed = function(e) {
document.location.href = g.Ext.settingsURL(g.Config.feeder.root, {
q: e
}, "/feeds/new");
}, t.prototype.shouldPopupsBeFullWidth = function() {
return this.props.columns.length > 2;
}, t.prototype.getUpgradeText = function() {
return g.app.user.isTrial() ? {
title: g.app.user.getProductName() + " Trial",
body: g.app.user.getProductName().replace(/Feeder /i, "") + " features: " + g.app.user.proTrialDaysLeft() + " left"
} : !g.app.user.backend.isPro() && {
title: "Get Feeder Pro",
body: "Unlock all features"
};
}, t.prototype.addPopup = function() {
if (this.props.columns.length >= N) return void r.default.alert("Can't add more than " + N + " decks.");
this.props.shouldAddPopup();
}, t.prototype.removePopupAt = function(e) {
this.removePopup(this.props.columns[e].id);
}, t.prototype.removePopup = function(e) {
if (1 === this.props.columns.length) return void r.default.alert("Can't remove all decks.");
this.props.shouldRemovePopup(e);
}, t.prototype.movePopupAt = function(e, t) {
var n = this.props.columns[e].id;
this.props.shouldMovePopup(n, t);
}, t.prototype.gotoFeed = function(e, t) {
var n = !!this.getPageStyle().columns.includes("feed");
this.props.shouldOpenFeed(e, t, n);
}, t.prototype.isOnlinePostsWindowAttached = function() {
return this.props.columns.length > 2;
}, t.prototype.storePopupInstance = function(e, t) {
-1 === document.location.search.indexOf("pro_trial=") && -1 === document.location.search.indexOf("get_started=") || this.hasConsideredGetStartedModal || (this.hasConsideredGetStartedModal = !0, 
this.showGetStartedOverlay(t)), this.props.shouldStorePopupInstance(e, t);
}, t.prototype.getPageStyle = function() {
return this.deck ? this.deck.getPageStyle() : this.props.pageStyle;
}, t.prototype.getMarkAsReadType = function(e) {
return this.getPageStyle().columns.includes("content") ? "activate" : "POST_FEED" === e.type && "expanded" === e.postFeed.postListStyle.showContent ? "scroll" : "activate";
}, t.prototype.isOldStyleHeader = function() {
return !!this.deck || b.comparePageStyleColumns(this.props.pageStyle, [ "sidebar", "content" ]);
}, t.prototype.getPageStyleClasses = function() {
var e = this.getPageStyle().columns.map(function(e) {
return "popup--column-" + e;
});
return this.deck && e.push("popup--style-deck"), g.Ext.isMobile() || (this.deck || this.isOldStyleHeader() || e.push("popup--hide-main-bar"), 
this.isOldStyleHeader() || e.push("popup--new-style")), e = e.concat(this.getThemeClasses()), 
e.join(" ");
}, t.prototype.getThemeClasses = function() {
return [ this.getPageStyle().columns.includes("content") ? "page--feed-medium" : "page--feed-large", this.isOldStyleHeader() ? "" : "page--consume-toolbar-large" ].filter(function(e) {
return !!e;
});
}, t.prototype.render = function() {
var e = this;
b.comparePageStyleColumns(this.getPageStyle(), [ "sidebar", "content" ]);
return this.props.columns.forEach(function(e) {
"POPUP" === e.type && e.popup && e.popup.currentScreen && "function" == typeof e.popup.currentScreen.render && e.popup.currentScreen.render();
}), i.createElement("div", {
className: "tpl-screen-consume " + this.getPageStyleClasses()
}, "dashboard" === this.props.welcomeScreen ? i.createElement(k.ModalWelcome, {
shouldClose: this.props.shouldCloseWelcomeModal
}) : null, i.createElement("div", null, i.createElement("div", {
className: "sidebar-navigation"
}, i.createElement("div", {
className: "sidebar-nav-button nav-button nav-button--icon " + (this.props.columns.length >= N ? "disabled" : ""),
title: "Add column",
onClick: this.didClickAddPopup
}, i.createElement(h.FeederIcon, {
icon: "plus"
})), i.createElement("div", {
className: "sidebar-nav-button nav-button nav-button--icon sidebar-navigation--push",
title: "Display Options",
ref: function(t) {
return e.pageStyleButton = t;
},
onClick: this.didClickPageStyleIcon
}, i.createElement(h.FeederIcon, {
icon: "dashboard"
})), i.createElement("div", {
className: "sidebar-nav-button nav-button nav-button--icon",
title: "Settings",
onClick: this.didClickSettings
}, i.createElement(h.FeederIcon, {
icon: "settings"
}))), this.props.columns.filter(function(t) {
return t.isVisible(e.props);
}).map(function(t, n) {
return "POPUP" === t.type ? i.createElement("div", {
key: t.id,
className: "consume-popup popup--hide-main-bar"
}, i.createElement("div", {
className: "popups " + e.getPageStyleClasses() + " " + (e.shouldPopupsBeFullWidth() ? "full-width-popup" : "")
}, i.createElement(d.PopupWrapper, {
popupId: t.id,
stateFactory: e.stateFactory,
moreFeaturesText: 0 === n && e.getUpgradeText(),
isHighlighted: e.props.activeColumn === n,
popupRef: function(n) {
return e.storePopupInstance(t.id, n);
},
didClickUpgrade: e.didClickUpgrade
}))) : i.createElement(f.PostFeed, {
key: t.id,
activeIndex: t.postFeed.activeIndex,
feed: t.postFeed.feed,
posts: t.postFeed.posts,
sharers: e.props.sharers,
sortOrder: t.postFeed.sortOrder,
timestampType: t.postFeed.timestampType,
postDisplayOptions: t.postFeed.postDisplayOptions,
postListStyle: t.postFeed.postListStyle,
pageStyle: e.getPageStyle(),
autoUpdate: t.postFeed.autoUpdate,
isError: t.postFeed.isError,
isLoading: t.postFeed.isLoading,
isHighlighted: e.props.activeColumn === n,
canLoadMore: t.postFeed.postFetcher.hasMore(),
lastPostAutoAdded: t.postFeed.lastPostAutoAdded,
markAsReadType: e.getMarkAsReadType(t),
defaultDisplayOptions: t.postFeed.feed.defaultDisplayOptions(),
canSeeFiltered: g.app.user.isPro(),
shouldGotoPost: function(n) {
return e.gotoPostFromColumn(t, n);
},
canPostCollections: g.app.user.canPostCollections(),
shouldAction: function(n, o) {
return e.props.shouldPerformGlobalAction(n, t.postFeed.feed, o);
},
shouldMarkAsStarred: e.props.shouldMarkPostsAsStarred,
shouldMarkAsRead: e.props.shouldMarkPostsAsRead,
shouldPromptPostCollections: e.showPostCollectionDialog,
shouldChangeSortOrder: function(n) {
return e.props.shouldChangeSortOrder(t, n);
},
shouldChangeTimestampType: function(n) {
return e.props.shouldChangeTimestampType(t, n);
},
shouldChangeDisplaySettings: function(n) {
return e.props.shouldChangeDisplaySettings(t, n);
},
shouldChangeAutoUpdate: function(n) {
return e.props.shouldChangeAutoUpdate(t, n);
},
shouldChangePostListStyle: function(n) {
return e.props.shouldChangePostListStyle(t, n);
},
shouldChangePageStyle: function(t) {
return e.props.shouldChangePageStyle(t);
},
shouldLoadPosts: function() {
return e.props.shouldLoadPosts(t);
},
shouldShare: e.props.shouldShare,
shouldNavigate: e.props.shouldNavigate
});
}), this.getPageStyle().columns.includes("content") ? i.createElement(m.ConsumePostWindow, {
key: this.props.consumeWindow.id,
isAttached: this.isOnlinePostsWindowAttached(),
isReadabilityOn: this.props.isReadabilityOn,
pageStyle: this.getPageStyle(),
post: this.props.consumeWindow.post ? this.props.consumeWindow.post : null,
sharers: this.props.sharers,
canPostCollections: g.app.user.canPostCollections(),
shouldPromptPostCollections: this.showPostCollectionDialog,
shouldMarkAsStarred: this.toggleStar,
shouldMarkAsRead: this.props.shouldMarkPostsAsRead,
shouldAction: function() {
return alert("Seriously, how did you end up here?");
},
shouldNavigate: this.props.shouldNavigate,
shouldToggleReadability: this.toggleReadability,
shouldChangePageStyle: function(t) {
return e.props.shouldChangePageStyle(t);
},
shouldShare: this.props.shouldShare,
didClickHider: this.dismissPost
}) : null), this.state.showTryV2 ? i.createElement("div", {
className: "TryV2"
}, i.createElement("h3", null, "Try out the new Reader"), i.createElement("p", {
className: "TryV2--text"
}, "We're working on a new Reader and would love your feedback."), i.createElement("div", {
className: "TryV2--buttons"
}, i.createElement("span", {
className: "button--secondary TryV2--button",
onClick: this.closeTryV2
}, "No thanks"), i.createElement("span", {
className: "button--primary TryV2--button",
onClick: this.tryV2
}, "Try it out"))) : null, i.createElement(w.ContextMenu, {
isVisible: this.state.showPageStyleDialog,
elementPosition: function() {
return e.pageStyleButton;
},
elementSticky: {
x: "center",
y: "top"
},
className: "with-arrow wide page-style-menu",
shouldClose: function() {
return e.setState({
showPageStyleDialog: !1
});
}
}, i.createElement(b.PageStyleDialog, {
pageStyle: this.props.pageStyle,
shouldChangePageStyle: this.props.shouldChangePageStyle
})), this.props.postCollectionDialog ? i.createElement(_.Modal, {
onClickOverlay: this.closePostCollectionDialog
}, i.createElement(x.PostCollectionDialog, {
post: this.props.postCollectionDialog.post,
postCollections: this.props.postCollectionDialog.postCollections,
activeIndex: this.props.postCollectionDialog.activeIndex,
shouldAddToCollections: this.props.shouldAddToPostCollections,
shouldRemoveFromCollections: this.props.shouldRemoveFromPostCollections,
shouldLoadCollections: function() {
return e.props.shouldLoadPostCollections(!0);
},
shouldClose: this.closePostCollectionDialog
})) : null);
}, t;
}(i.Component), e("Consume", I);
}
};
}), System.register("client/reducers/share_reducers", [ "client/models/Sharer" ], function(e, t) {
"use strict";
function n(e, t) {
if (void 0 === e) return {
sharers: o.SHARERS
};
switch (t.type) {
case "SHARERS_LOAD":
return e;

case "SHARERS_LOAD_COMPLETED":
return __assign({}, e, {
sharers: t.sharers || o.SHARERS
});

case "SHARE_CREATE":
case "SHARE_CREATE_COMPLETED":
default:
return e;
}
}
var o;
t && t.id;
return e("shareReducer", n), {
setters: [ function(e) {
o = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/pusher_receiver_middleware", [ "client/appglobals", "client/actions/post_actions" ], function(e, t) {
"use strict";
function n(e) {
o.app.events.subscribe("post:added", function(t) {
var n = o.app.store.post(t.post);
n && n.id && e.dispatch(i.postAddedAction(n.id));
}), o.app.events.subscribe("post:updated", function(e) {});
}
var o, i;
t && t.id;
return e("pusherReceiverMiddleware", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {}
};
}), System.register("client/reducers/database_reducers", [], function(e, t) {
"use strict";
function n(e, t) {
if (!e) return {
postCollections: {
isLoading: !1,
models: []
}
};
switch (t.type) {
case "LOAD_POST_COLLECTIONS":
return __assign({}, e, {
postCollections: __assign({}, e.postCollections, {
isLoading: !1
})
});

case "LOAD_POST_COLLECTIONS_COMPLETE":
return __assign({}, e, {
postCollections: {
isLoading: !1,
models: t.postCollections
}
});

case "LOAD_POST_COLLECTIONS_ERROR":
return __assign({}, e, {
postCollections: {
isLoading: !1,
models: []
}
});

default:
return e;
}
}
t && t.id;
return e("databaseReducer", n), {
setters: [],
execute: function() {}
};
}), System.register("client/client", [ "react", "react-dom", "client/appglobals", "client/Consume", "client/popup", "client/reducers/consume_reducers", "client/library/MiniRedux", "client/reducers/share_reducers", "client/reducers/pusher_receiver_middleware", "client/reducers/database_reducers", "client/reducers/post_collection_reducers" ], function(e, t) {
"use strict";
function n() {
window.popup = new c.Popup(".popup-content", c.Popup.defaultStateFactory()), window.popup.start(), 
$(document.body).removeClass("popup-loading");
}
function o() {
var e = document.getElementById("backend-is-loading");
e && e.parentNode && e.parentNode.removeChild(e);
var t = document.getElementById("app-container"), n = new u.MiniRedux(function() {
r.render(i.createElement(a.Consume, __assign({}, n.currentState.consume, n.currentState.database, {
postCollectionDialog: n.currentState.postCollection,
sharers: n.currentState.share.sharers
}, a.mapDispatchToProps(n.dispatch))), t);
});
n.connect({
consume: l.consumeReducer,
share: p.shareReducer,
database: h.databaseReducer,
postCollection: f.postCollectionReducer
}), n.dispatch({
type: "__INITIAL_ACTION"
}), window.consumeState = n, d.pusherReceiverMiddleware(n), n.render();
}
var i, r, s, a, c, l, u, p, d, h, f, m;
t && t.id;
return {
setters: [ function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
c = e;
}, function(e) {
l = e;
}, function(e) {
u = e;
}, function(e) {
p = e;
}, function(e) {
d = e;
}, function(e) {
h = e;
}, function(e) {
f = e;
} ],
execute: function() {
window.document.getElementById("is-consume") ? s.Ext.getBackgroundPage().onAppReady(function() {
o();
}) : document.getElementById("is-popup") && (s.Ext.isChrome() ? setTimeout(function() {
n();
}, 100) : setTimeout(function() {
n();
}, 30)), m = window.setInterval(function() {
window.popup._lolSize = document.body.offsetHeight + document.documentElement.offsetHeight;
}, 1), setTimeout(function() {
clearInterval(m);
}, 1999);
}
};
});