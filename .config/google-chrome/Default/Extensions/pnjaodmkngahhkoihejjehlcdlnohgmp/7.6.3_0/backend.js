var __extends = this && this.__extends || function() {
var e = function(t, r) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(t, r);
};
return function(t, r) {
function n() {
this.constructor = t;
}
e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, 
new n());
};
}(), __awaiter = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(s, o) {
function i(e) {
try {
u(n.next(e));
} catch (e) {
o(e);
}
}
function a(e) {
try {
u(n.throw(e));
} catch (e) {
o(e);
}
}
function u(e) {
e.done ? s(e.value) : new r(function(t) {
t(e.value);
}).then(i, a);
}
u((n = n.apply(e, t || [])).next());
});
}, __generator = this && this.__generator || function(e, t) {
function r(e) {
return function(t) {
return n([ e, t ]);
};
}
function n(r) {
if (s) throw new TypeError("Generator is already executing.");
for (;u; ) try {
if (s = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
switch (o = 0, i && (r = [ 2 & r[0], i.value ]), r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
return u.label++, {
value: r[1],
done: !1
};

case 5:
u.label++, o = r[1], r = [ 0 ];
continue;

case 7:
r = u.ops.pop(), u.trys.pop();
continue;

default:
if (i = u.trys, !(i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
u = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
u.label = r[1];
break;
}
if (6 === r[0] && u.label < i[1]) {
u.label = i[1], i = r;
break;
}
if (i && u.label < i[2]) {
u.label = i[2], u.ops.push(r);
break;
}
i[2] && u.ops.pop(), u.trys.pop();
continue;
}
r = t.call(e, u);
} catch (e) {
r = [ 6, e ], o = 0;
} finally {
s = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
var s, o, i, a, u = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: r(0),
throw: r(1),
return: r(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
};

System.register("library/ts/function", [], function(e, t) {
"use strict";
function r(e, t) {
e = e || {};
for (var r in t) t.hasOwnProperty(r) && void 0 === e[r] && (e[r] = t[r]);
return e;
}
function n(e, t) {
void 0 === t && (t = !1);
var r = [];
for (var n in e) if (e.hasOwnProperty(n)) {
var s = e[n];
s && "object" == typeof s && s.constructor === Array ? s.forEach(function(e) {
r.push(encodeURIComponent(n) + (t ? "" : "[]") + "=" + encodeURIComponent(e));
}) : r.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
}
return r.join("&");
}
function s(e) {
return new Promise(function(t, r) {
setTimeout(function() {
return t();
}, e);
});
}
t && t.id;
return e("toOptions", r), e("objectToQueryString", n), e("sleep", s), {
setters: [],
execute: function() {}
};
}), System.register("ext/ext", [ "library/ts/function" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
if (n = {
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
return !n.isOnline() && screen.width <= 480;
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
pageURL: function(e, t, n) {
if (void 0 === t && (t = {}), n && (e += "#" + n), e += Object.keys(t).length ? "?" + r.objectToQueryString(t) : "", 
this.isChrome()) return chrome.extension.getURL(e);
if (this.isSafari()) return safari.extension.baseURI + e;
if (this.isOnline()) {
var s = document.location.port ? document.location.port : "";
return -1 !== e.indexOf("settings/index.html") && (e = e.replace("index.html", "").replace("/#/", "")), 
document.location.protocol + "//" + document.location.hostname + (s ? ":" + s : "") + "/" + e;
}
throw new Error("Could not generate pageURL for platform.");
},
settingsURL: function(e, t, n) {
void 0 === t && (t = {});
var s = e + "/settings/";
return t = t || {}, n && (s += "#" + n), this.isOnline() ? t.ctx = "online" : (this.isChrome() || this.isSafari()) && (t.ctx = "extension"), 
s += Object.keys(t).length ? "?" + r.objectToQueryString(t) : "", s = s.replace("/#/", "/");
},
getVersion: function() {
return "undefined" != typeof chrome && chrome.runtime && "function" == typeof chrome.runtime.getManifest ? chrome.runtime.getManifest().version : window.safari && safari.extension ? safari.extension.displayVersion : this.isOnline() ? "online" : "?";
},
getPlatformName: function() {
return this.isSafari() ? "safari" : this.isChrome() ? "chrome" : this.isOnline() ? "online" : "unknown";
}
}, window.document && document.documentElement) {
var t = n.getPlatformName();
document.body.className += " platform-" + t, document.documentElement.className += " html-platform-" + t, 
"safari" === t ? document.documentElement.className += " html-platform-safari" : n.isMobile() && (document.documentElement.className += " html-platform-mobile");
}
e("default", n);
}
};
}), System.register("ext/platformport", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("ext/platformenv", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e() {
this.events = {}, this.events.connect = [], this.events.message = [];
}
return e.prototype.makeCallback = function(e, t, r) {
return r["_" + e + "originalCallback"] = t, this._getCallbacks(e).push(r), r;
}, e.prototype.getCallback = function(e, t) {
for (var r, n = this._getCallbacks(e), s = 0; r = n[s]; s++) if (r["_" + e + "originalCallback"] === t) return r;
return !1;
}, e.prototype.fireCallback = function(e, t) {
var r = this;
this._getCallbacks(e).forEach(function(e) {
e.apply(r, t);
});
}, e.prototype.removeCallback = function(e, t) {
this._getCallbacks(e).remove(t);
}, e.prototype._getCallbacks = function(e) {
return this.events[e] || [];
}, e;
}(), e("default", r);
}
};
}), System.register("ext/uinotifications", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("ext/ui", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("ext/chrome/env", [ "ext/platformenv" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.DBAdapter = "function" == typeof window.openDatabase ? "WebSQLDatabase" : "IndexedDBDatabase", 
t;
}
return __extends(t, e), t.prototype.connectToBackground = function() {
return new s();
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
e(new s(t));
});
chrome.runtime.onConnect.addListener(t);
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && (this.removeCallback("connect", t), chrome.runtime.onConnect.removeListener(t));
}, t.prototype.onMessage = function(e) {
var t = this.makeCallback("message", e, function(t, r) {
e(t, r);
});
chrome.runtime.onMessage.addListener(t);
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && (this.removeCallback("message", t), chrome.runtime.onMessage.removeListener(t));
}, t.prototype.sendMessageToTab = function(e, t, r) {
r.type = t, chrome.tabs.sendMessage(e, r);
}, t.prototype.onPopoverVisible = function(e) {}, t.prototype.removePopoverVisible = function(e) {}, 
t;
}(r.default), s = function() {
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
}(), e("ChromePlatformPort", s), e("default", n);
}
};
}), System.register("ext/safari/safariopaquetab", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e) {
this.id = e.__feederId, this.__tab = e;
}
return e;
}(), e("default", r);
}
};
}), System.register("backend/config", [ "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o, i;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = localStorage.feederRoot || "https://feeder.co", s = localStorage.adderRoot || "https://adder.feeder.co", 
o = localStorage.pusherRoot || "https://pusher.feeder.co", i = localStorage.analyticsURL || "https://analytics.feeder.co", 
document && document.location && (0 === document.location.href.indexOf("http://dev.feeder.co") || 0 === n.indexOf("http://dev.feeder.co")) && (o = "http://localhost:3337", 
s = "http://localhost:60111", i = "http://localhost:3338"), "http:" !== document.location.protocol && "https:" !== document.location.protocol || (n = document.location.protocol + "//" + document.location.host), 
e("default", {
icon: {
addFeed: r.default.isSafari() ? r.default.assetURL("icons/safari-icon-add.png") : r.default.assetURL("icons/icon-add.png"),
standard: r.default.isSafari() ? r.default.assetURL("icons/safari-icon.png") : r.default.assetURL("icons/icon-retina.png")
},
images: {
folder: r.default.assetURL("icons/folder_2x.png")
},
feeder: {
root: n,
pusherURL: o,
analyticsURL: i,
adderAPI: s,
api: n + "/1",
adder: s + "/rss",
payURL: n + "/account/subscription",
trialOverURL: n + "/account/subscription?trial_over=yes",
upgradeURL: n + "/account/subscription",
connectURL: n + "/pro?flow=ext",
importURL: n + "/api/feed-imports",
getStartedFeedURL: "https://feeder.co/get-started-feed",
loginUrl: n + "/login?flow=login",
logoutUrl: n + "/logout",
welcomeUrl: n + "/?pro_trial=awesome&ref=welcomeUrl",
termsUrl: n + "/terms?inline=1",
loginStatusURL: n + "/api/feeder/status",
checkURL: n + "/api/feeder/check",
destroyTokenURL: n + "/api/feeder/invalidate-token",
postURL: n + "/api/post/{post_id}?redirect_if_empty=true",
addFeedWithPlugin: n + "/settings/feeds/new/{plugin}?q={query}",
iosURL: "https://itunes.apple.com/us/app/feeder.co-rss-feed-reader/id668210239?mt=8",
installedURL: n + "/installed",
uninstallURL: n + "/uninstalled?c={client_id}&i={installed_at}",
reviewURL: n + "/leave-a-review?c={client_id}&i={installed_at}"
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
defaultFaviconPath: r.default.assetURL("icons/default-icon.png")
});
}
};
}), System.register("ext/safari/ui", [ "ext/safari/safariopaquetab", "backend/config" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e() {
this.tabGUID = 1, this.Notifications = new o(), safari.application.addEventListener("activate", this.onTabChangedState.bind(this), !0), 
safari.application.addEventListener("open", this.onTabChangedState.bind(this), !0), 
safari.application.addEventListener("navigate", this.onTabChangedState.bind(this), !0), 
this.__tabImages = {}, this.__tabImageUrls = {};
}
return e.prototype.createOpaqueTab = function(e) {
return new r.default(e);
}, e.prototype.onTabChangedState = function(e) {
var t = e.target;
t.activeTab && (t = t.activeTab), this.__ensureId(t), this.__tabImages[t.__feederId] && this.__tabImageUrls[t.__feederId] == t.url ? this.setBadgeIcon(this.__tabImages[t.__feederId], t.__feederId) : this.setBadgeIcon(n.default.icon.standard, t.__feederId);
}, e.prototype.openTab = function(e) {
var t = safari.application.activeBrowserWindow.openTab();
t.url = e, this.__ensureId(t);
}, e.prototype.closeTab = function(e) {
this.__getNativeTab(e).close();
}, e.prototype.onTabRemoved = function(e) {
var t = this;
e._uiWrapped = function(r) {
"close-tab" === r.command && e(t._getTabSync(r.target));
}, safari.application.addEventListener("command", e._uiWrapped, !1);
}, e.prototype.removeOnTabRemoved = function(e) {
safari.application.removeEventListener("command", e._uiWrapped, !1);
}, e.prototype.setBadge = function(e) {
safari.extension.toolbarItems.forEach(function(t) {
t.badge = parseInt(e, 10);
});
}, e.prototype.setBadgeIcon = function(e, t) {
var r = !1;
void 0 !== t && (r = this._getTabSync(t)) && (this.__tabImages[r.id] = e, this.__tabImageUrls[r.id] = this.__getNativeTab(t).url), 
this.currentTab().then(function(n) {
r && n.id != t || safari.extension.toolbarItems.forEach(function(t) {
t.image = e;
});
});
}, e.prototype.currentTab = function() {
return Promise.resolve(this.createOpaqueTab(safari.application.activeBrowserWindow.activeTab));
}, e.prototype.tabChangeURL = function(e, t) {
this.__getNativeTab(e).url = t;
}, e.prototype._getTabSync = function(e) {
for (var t, r = 0; t = safari.application.browserWindows[r]; r++) if (t.tabs) for (var n, s = 0; n = t.tabs[s]; s++) if (n.__feederId === e) return this.createOpaqueTab(n);
return !1;
}, e.prototype.getTab = function(e, t) {
t(this._getTabSync(e));
}, e.prototype.__getNativeTab = function(e) {
return this._getTabSync(e).__tab;
}, e.prototype.openPopup = function(e, t) {
var r = window.open(e, "", "width=500,height=400");
t && t(r);
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
var t, r = this;
return __generator(this, function(n) {
return t = [], safari.application.browserWindows.forEach(function(e) {
e.tabs.forEach(function(e) {
t.push({
id: r.__ensureId(e).__feederId,
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
var r;
return __generator(this, function(n) {
return r = this.__getNativeTab(e), r && r.page.dispatchMessage("safari:runScript", {
script: t
}), [ 2, null ];
});
});
}, e;
}(), o = function() {
function e() {
this.image = "/icons/icon48x48.png", this.duration = 15e3;
}
return e.prototype.can = function() {
return window.webkitNotifications ? 0 === window.webkitNotifications.checkPermission() : "undefined" != typeof browser || void 0 !== window.Notification && "granted" === window.Notification.permission;
}, e.prototype.ask = function(e) {
e = e || function() {}, window.webkitNotifications ? window.webkitNotifications.requestPermission(e) : void 0 !== window.Notification ? window.Notification.requestPermission(e) : e();
}, e.prototype.show = function(e, t, r) {
function n() {
"function" == typeof s.cancel ? s.cancel() : "function" == typeof s.close && s.close();
}
void 0 === r && (r = {}), r.link = r.link || function() {}, r.keepAlive = r.keepAlive || !1;
var s;
if (window.webkitNotifications) s = window.webkitNotifications.createNotification(this.image, e, t); else {
if (void 0 === window.Notification) return;
s = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: r.keepAlive
});
}
return s && (s.onclick = function() {
window.focus(), r.link && r.link(), n();
}, "function" == typeof s.show && s.show(), setTimeout(function() {
r.keepAlive || n();
}, this.duration)), s;
}, e;
}(), e("default", s);
}
};
}), System.register("ext/safari/env", [ "ext/platformenv" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t(t) {
var r = e.call(this) || this;
return r.DBAdapter = "WebSQLDatabase", r.UI = t, r.events.popover = [], safari.application.addEventListener("message", function(e) {
if ("connect" === e.name) {
var t = new s(e.target, e.message.type);
r.fireCallback("connect", [ t ]);
}
}, !1), r;
}
return __extends(t, e), t.prototype.setInstallListener = function(e) {}, t.prototype.setUninstallUrl = function(e) {}, 
t.prototype.connectToBackground = function() {
var e = new s();
return this.fireCallback("connect", [ e ]), e;
}, t.prototype.onBackgroundConnect = function(e) {
this.makeCallback("connect", e, function(t) {
e(t);
});
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && this.removeCallback("connect", t);
}, t.prototype.onMessage = function(e) {
var t = this, r = this.makeCallback("message", e, function(r) {
var n = r.message;
if (!r.message) return void console.error(r, "did not have message abort :(");
n.type = r.name, e(n, {
tab: t.UI.createOpaqueTab(r.target)
});
});
safari.application.addEventListener("message", r, !1);
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
}, t.prototype.sendMessageToTab = function(e, t, r) {
r.type = t, this.UI.__getNativeTab(e).page.dispatchMessage(t, r);
}, t;
}(r.default), s = function() {
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
if (this.tab) e.name == this.type && this.tab.page && this.tab.page.dispatchMessage(this.type, e); else for (var t, r = 0; t = this.messageListeners[r]; r++) t(e, this);
}, e.prototype.disconnect = function() {
for (var e, t = 0; e = this.disconnectListeners[t]; t++) e(this);
this.tab && (this.tab.removeEventListener("close", this.boundDisconnect, !1), this.tab.removeEventListener("navigate", this.boundDisconnect, !1), 
this.tab.removeEventListener("navigate", this.boundNavigateAwayEventListener, !1));
}, e.prototype.addNavigateAwayEventListener = function() {
this.tab.addEventListener("navigate", this.boundDisconnect, !1), this.tab.removeEventListener("navigate", this.boundNavigateAwayEventListener, !1);
}, e;
}(), e("default", n);
}
};
}), System.register("ext/online/env", [ "ext/platformenv" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.DBAdapter = "APIDatabase", t;
}
return __extends(t, e), t.prototype.setInstallListener = function(e) {}, t.prototype.setUninstallUrl = function(e) {}, 
t.prototype.connectToBackground = function() {
var e = new s();
return this.fireCallback("connect", [ e ]), e;
}, t.prototype.onBackgroundConnect = function(e) {
this.makeCallback("connect", e, function(t) {
e(t);
});
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && this.removeCallback("connect", t);
}, t.prototype.onMessage = function(e) {
this.makeCallback("message", e, function(t, r) {
e(t, r);
});
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && this.removeCallback("message", t);
}, t.prototype.sendMessageToTab = function(e, t, r) {}, t.prototype.onPopoverVisible = function(e) {}, 
t.prototype.removePopoverVisible = function(e) {}, t;
}(r.default), s = function() {
function e() {
this.messageListeners = [], this.disconnectListeners = [];
}
return e.prototype.onMessage = function(e) {
this.messageListeners.push(e);
}, e.prototype.onDisconnect = function(e) {
this.disconnectListeners.push(e);
}, e.prototype.postMessage = function(e) {
var t = this;
this.messageListeners.forEach(function(r) {
r(e, t);
});
}, e.prototype.disconnect = function() {
var e = this;
this.disconnectListeners.forEach(function(t) {
t(e);
});
}, e;
}(), e("default", n);
}
};
}), System.register("ext/chrome/ui", [], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e() {
this.Notifications = new n();
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
var r = {
path: e
};
t && (r.tabId = t), chrome.browserAction.setIcon(r);
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
var r = window.open(e, "", "width=500,height=400");
t && t(r);
}, e.prototype.getIntentFeedURL = function() {
return !1;
}, e.prototype.setPopupSize = function(e, t) {}, e.prototype.closePopup = function() {}, 
e.prototype.showPopup = function() {}, e.prototype.queryTabsByRegex = function(e) {
return new Promise(function(t) {
chrome.tabs.query({}, function(r) {
var n = r.map(function(e) {
return {
id: e.id,
url: e.url
};
});
t(n.filter(function(t) {
return e.test(t.url);
}));
});
});
}, e.prototype.executeScriptInTab = function(e, t) {
return new Promise(function(r) {
chrome.tabs.executeScript(e, {
code: t
}, function(e) {
r(e);
});
});
}, e;
}(), n = function() {
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
}, e.prototype.show = function(e, t, r) {
function n() {
"function" == typeof s.cancel ? s.cancel() : "function" == typeof s.close && s.close();
}
void 0 === r && (r = {}), r.link = r.link || function() {}, r.keepAlive = r.keepAlive || !1;
var s;
if (window.webkitNotifications) s = window.webkitNotifications.createNotification(this.image, e, t); else if ("undefined" != typeof browser) {
var o = Date.now() + "-" + Math.random();
browser.notifications.create(o, {
type: "basic",
title: e,
message: t,
iconUrl: this.image
}), this.clickCallbacks[o] = function() {
r.link && r.link();
};
} else {
if ("undefined" == typeof Notification) return;
s = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: r.keepAlive
});
}
return s && (s.onclick = function() {
window.focus(), r.link && r.link(), n();
}, "function" == typeof s.show && s.show(), setTimeout(function() {
r.keepAlive || n();
}, this.duration)), s;
}, e;
}(), e("default", r);
}
};
}), System.register("ext/online/ui", [], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e() {
this.Notifications = new n();
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
var r = window.open(e, "", "width=500,height=400");
t && t(r);
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
}(), n = function() {
function e() {
this.image = "https://s3-eu-west-1.amazonaws.com/feeder-static/logo/icon48x48.png", 
this.duration = 15e3;
}
return e.prototype.can = function() {
return void 0 !== window.Notification && "granted" == window.Notification.permission;
}, e.prototype.ask = function(e) {
void 0 !== window.Notification ? window.Notification.requestPermission(e || function() {}) : e && e();
}, e.prototype.show = function(e, t, r) {
void 0 === r && (r = {}), r.keepAlive = r.keepAlive || !1;
var n = new Notification(e, {
body: t,
icon: this.image,
requireInteraction: r.keepAlive
});
n.onclick = function() {
window.focus(), r.link && r.link(), n.close();
}, setTimeout(function() {
r.keepAlive || n.close();
}, this.duration);
}, e;
}(), e("default", r);
}
};
}), System.register("ext/platform", [ "ext/ext", "ext/chrome/env", "ext/safari/env", "ext/online/env", "ext/chrome/ui", "ext/safari/ui", "ext/online/ui" ], function(e, t) {
"use strict";
var r, n, s, o, i, a, u, c;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
} ],
execute: function() {
c = function() {
function e() {
if (r.default.isChrome()) this.name = "chrome", this.env = new n.default(), this.UI = new i.default(); else if (r.default.isSafari()) {
var e = new a.default();
this.name = "safari", this.UI = e, this.env = new s.default(e);
} else r.default.isOnline() && (this.name = "online", this.env = new o.default(), 
this.UI = new u.default());
}
return e;
}(), e("PlatformContainer", c);
}
};
}), System.register("backend/platformload", [ "ext/platform" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = new r.PlatformContainer(), e("Platform", n), s = n.UI, e("UI", s);
}
};
}), System.register("backend/orm/dbfieldefinition", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("backend/orm/model", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e() {}
return e.prototype.setup = function(t, r) {
this.app = r, this.mapper = r.getMapperByName(this.mapperName), this.modelGUID = e.GUID++, 
this.copyPropertiesFrom(t), this.onInit();
}, e.prototype.onInit = function() {}, e.prototype.setFromDB = function(e) {
this.fromDB = {};
for (var t in e) e.hasOwnProperty(t) && ("id" !== t && (this.fromDB[t] = e[t]), 
this.fromSourceOfTruth && delete this.fromSourceOfTruth[t]);
for (var t in this.fromDB) this.fromDB.hasOwnProperty(t) && (this[t] = this.fromDB[t]);
this.id = e.id;
}, e.prototype.setFromSourceOfTruth = function(e) {
this.fromSourceOfTruth = {};
for (var t in e) e.hasOwnProperty(t) && "id" !== t && (this.fromSourceOfTruth[t] = e[t]);
for (var t in this.fromSourceOfTruth) this.fromSourceOfTruth.hasOwnProperty(t) && (this[t] = this.fromSourceOfTruth[t]);
}, e.prototype.save = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.mapper.save(this) ];

case 1:
return e = t.sent(), [ 2, !e.meta.error ];
}
});
});
}, e.prototype.saveWith = function(e) {
var t = this;
return new Promise(function(r, n) {
t.mapper.pushDatabase(e, function(e) {
return __awaiter(t, void 0, void 0, function() {
var t, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return o.trys.push([ 0, 2, , 3 ]), [ 4, e.save(this) ];

case 1:
return t = o.sent(), r(!t.meta.error), [ 3, 3 ];

case 2:
return s = o.sent(), n(s), [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
});
});
}, e.prototype.copyPropertiesFrom = function(e) {
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
}, e.prototype.copyDBPropertiesFrom = function(e) {
if (e.fromDB) {
this.fromDB || (this.fromDB = {});
for (var t in e.fromDB) e.fromDB.hasOwnProperty(t) && (this.schema.hasOwnProperty(t) || "id" === t) && (this.fromDB[t] = e.fromDB[t]);
}
}, e.prototype.isDirty = function() {
if (!this.fromDB) return !0;
var e = this.getValues();
return JSON.stringify(e) !== JSON.stringify(this.fromDB);
}, e.prototype.getDirty = function() {
var e = this.getValues();
if (!this.fromDB) return e;
var t = {};
for (var r in e) e.hasOwnProperty(r) && JSON.stringify(this.fromDB[r]) !== JSON.stringify(e[r]) && (t[r] = e[r]);
return t;
}, e.prototype.markValueClean = function(e) {
this.fromDB || (this.fromDB = {});
for (var t in e) e.hasOwnProperty(t) && (this.schema.hasOwnProperty(t) || "id" === t) && (this.fromDB[t] = e[t], 
this[t] = e[t]);
}, e.prototype.getValues = function() {
var e = {
id: this.id
};
for (var t in this.schema) this.schema.hasOwnProperty(t) && (e[t] = this[t]);
if (this.fromDB) for (var t in this.fromDB) void 0 === e[t] && (e[t] = this[t]);
if (this.fromSourceOfTruth) for (var t in this.fromSourceOfTruth) void 0 === e[t] && (e[t] = this[t]);
return e;
}, e.prototype.setMeta = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return r = this.ensureMeta(), r[e] = t, this.meta = JSON.stringify(r), [ 4, this.save() ];

case 1:
return n.sent(), [ 2 ];
}
});
});
}, e.prototype.getMeta = function(e) {
return this.ensureMeta()[e];
}, e.prototype.ensureMeta = function() {
return this.parsedMetaString === this.meta && this.parsedMeta || (this.parsedMeta = JSON.parse(this.meta || "{}"), 
this.parsedMetaString = this.meta), this.parsedMeta || (this.parsedMeta = {}), this.parsedMeta;
}, e.GUID = 0, e.primaryKey = "id", e;
}(), e("default", r);
}
};
}), System.register("library/ts/md5", [], function(e, t) {
"use strict";
function r(e, t) {
var r = e[0], n = e[1], u = e[2], c = e[3];
r = s(r, n, u, c, t[0], 7, -680876936), c = s(c, r, n, u, t[1], 12, -389564586), 
u = s(u, c, r, n, t[2], 17, 606105819), n = s(n, u, c, r, t[3], 22, -1044525330), 
r = s(r, n, u, c, t[4], 7, -176418897), c = s(c, r, n, u, t[5], 12, 1200080426), 
u = s(u, c, r, n, t[6], 17, -1473231341), n = s(n, u, c, r, t[7], 22, -45705983), 
r = s(r, n, u, c, t[8], 7, 1770035416), c = s(c, r, n, u, t[9], 12, -1958414417), 
u = s(u, c, r, n, t[10], 17, -42063), n = s(n, u, c, r, t[11], 22, -1990404162), 
r = s(r, n, u, c, t[12], 7, 1804603682), c = s(c, r, n, u, t[13], 12, -40341101), 
u = s(u, c, r, n, t[14], 17, -1502002290), n = s(n, u, c, r, t[15], 22, 1236535329), 
r = o(r, n, u, c, t[1], 5, -165796510), c = o(c, r, n, u, t[6], 9, -1069501632), 
u = o(u, c, r, n, t[11], 14, 643717713), n = o(n, u, c, r, t[0], 20, -373897302), 
r = o(r, n, u, c, t[5], 5, -701558691), c = o(c, r, n, u, t[10], 9, 38016083), u = o(u, c, r, n, t[15], 14, -660478335), 
n = o(n, u, c, r, t[4], 20, -405537848), r = o(r, n, u, c, t[9], 5, 568446438), 
c = o(c, r, n, u, t[14], 9, -1019803690), u = o(u, c, r, n, t[3], 14, -187363961), 
n = o(n, u, c, r, t[8], 20, 1163531501), r = o(r, n, u, c, t[13], 5, -1444681467), 
c = o(c, r, n, u, t[2], 9, -51403784), u = o(u, c, r, n, t[7], 14, 1735328473), 
n = o(n, u, c, r, t[12], 20, -1926607734), r = i(r, n, u, c, t[5], 4, -378558), 
c = i(c, r, n, u, t[8], 11, -2022574463), u = i(u, c, r, n, t[11], 16, 1839030562), 
n = i(n, u, c, r, t[14], 23, -35309556), r = i(r, n, u, c, t[1], 4, -1530992060), 
c = i(c, r, n, u, t[4], 11, 1272893353), u = i(u, c, r, n, t[7], 16, -155497632), 
n = i(n, u, c, r, t[10], 23, -1094730640), r = i(r, n, u, c, t[13], 4, 681279174), 
c = i(c, r, n, u, t[0], 11, -358537222), u = i(u, c, r, n, t[3], 16, -722521979), 
n = i(n, u, c, r, t[6], 23, 76029189), r = i(r, n, u, c, t[9], 4, -640364487), c = i(c, r, n, u, t[12], 11, -421815835), 
u = i(u, c, r, n, t[15], 16, 530742520), n = i(n, u, c, r, t[2], 23, -995338651), 
r = a(r, n, u, c, t[0], 6, -198630844), c = a(c, r, n, u, t[7], 10, 1126891415), 
u = a(u, c, r, n, t[14], 15, -1416354905), n = a(n, u, c, r, t[5], 21, -57434055), 
r = a(r, n, u, c, t[12], 6, 1700485571), c = a(c, r, n, u, t[3], 10, -1894986606), 
u = a(u, c, r, n, t[10], 15, -1051523), n = a(n, u, c, r, t[1], 21, -2054922799), 
r = a(r, n, u, c, t[8], 6, 1873313359), c = a(c, r, n, u, t[15], 10, -30611744), 
u = a(u, c, r, n, t[6], 15, -1560198380), n = a(n, u, c, r, t[13], 21, 1309151649), 
r = a(r, n, u, c, t[4], 6, -145523070), c = a(c, r, n, u, t[11], 10, -1120210379), 
u = a(u, c, r, n, t[2], 15, 718787259), n = a(n, u, c, r, t[9], 21, -343485551), 
e[0] = l(r, e[0]), e[1] = l(n, e[1]), e[2] = l(u, e[2]), e[3] = l(c, e[3]);
}
function n(e, t, r, n, s, o) {
return t = l(l(t, e), l(n, o)), l(t << s | t >>> 32 - s, r);
}
function s(e, t, r, s, o, i, a) {
return n(t & r | ~t & s, e, t, o, i, a);
}
function o(e, t, r, s, o, i, a) {
return n(t & s | r & ~s, e, t, o, i, a);
}
function i(e, t, r, s, o, i, a) {
return n(t ^ r ^ s, e, t, o, i, a);
}
function a(e, t, r, s, o, i, a) {
return n(r ^ (t | ~s), e, t, o, i, a);
}
function u(e) {
var t, n = e.length, s = [ 1732584193, -271733879, -1732584194, 271733878 ];
for (t = 64; t <= e.length; t += 64) r(s, c(e.substring(t - 64, t)));
e = e.substring(t - 64);
var o = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
for (t = 0; t < e.length; t++) o[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
if (o[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (r(s, o), t = 0; t < 16; t++) o[t] = 0;
return o[14] = 8 * n, r(s, o), s;
}
function c(e) {
var t, r = [];
for (t = 0; t < 64; t += 4) r[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
return r;
}
function d(e) {
for (var t = "", r = 0; r < 4; r++) t += g[e >> 8 * r + 4 & 15] + g[e >> 8 * r & 15];
return t;
}
function p(e) {
for (var t = 0; t < e.length; t++) e[t] = d(e[t]);
return e.join("");
}
function f(e) {
return p(u(e));
}
function l(e, t) {
return e + t & 4294967295;
}
function h(e) {
return e = e.toUpperCase(), e.replace(/[^A-Fa-f0-9]/g, "");
}
function m(e) {
for (var t = "", r = 0, n = 0, s = new Array(3), o = new Array(4), i = e.length, a = 0; i--; ) if (s[r++] = e[a++], 
3 == r) {
for (o[0] = (252 & s[0]) >> 2, o[1] = ((3 & s[0]) << 4) + ((240 & s[1]) >> 4), o[2] = ((15 & s[1]) << 2) + ((192 & s[2]) >> 6), 
o[3] = 63 & s[2], r = 0; r < 4; r++) t += y.charAt(o[r]);
r = 0;
}
if (r) {
for (n = r; n < 3; n++) s[n] = 0;
for (o[0] = (252 & s[0]) >> 2, o[1] = ((3 & s[0]) << 4) + ((240 & s[1]) >> 4), o[2] = ((15 & s[1]) << 2) + ((192 & s[2]) >> 6), 
o[3] = 63 & s[2], n = 0; n < r + 1; n++) t += y.charAt(o[n]);
for (;r++ < 3; ) t += "=";
}
return t;
}
function v(e) {
for (var t = h(e), r = [], n = 0; n < t.length / 2; n++) {
var s = t.substr(2 * n, 2);
r[n] = parseInt(s, 16);
}
return m(r);
}
var g, y;
t && t.id;
return {
setters: [],
execute: function() {
g = "0123456789abcdef".split(""), y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", 
e("default", {
hex: function(e) {
return f(e);
},
base64: function(e) {
return v(f(e));
}
});
}
};
}), System.register("backend/model/post", [ "backend/orm/model", "backend/config", "library/ts/md5" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function(e) {
function t(r, n) {
var s = e.call(this) || this;
return s.mapperName = "post", s.model = "post", s.schema = t.schema, s.is_filtered = !1, 
s.setup(r, n), s;
}
return __extends(t, e), t.hashGuid = function(e) {
return s.default.base64(e).slice(0, -2);
}, t.prototype.getCacheId = function() {
return this.id ? this.id.toString() : "";
}, t.prototype.markAsRead = function() {
return this.mark(1);
}, t.prototype.markAsUnread = function() {
return this.mark(0);
}, t.prototype.mark = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n = this;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return t = this.is_read, this.is_read = e, r = !1, !!this.is_read != !!t && (r = !!t != !!this.is_read), 
[ 4, this.mapper.save(this) ];

case 1:
return s.sent(), r && (this.feed_id && this.app.user.unreads.incrementForFeed(this.feed_id, e ? -1 : 1, {
manual: !0,
updatedPosts: this.id ? [ {
id: this.id,
is_read: e
} ] : void 0
}), this.app.events.send("post:updated", {
post: this.id
})), this.app.events.send("feed:updated", {
feed: this.feed_id,
manual: !0
}), this.getCollections().forEach(function(t) {
var r = n.app.store.feedBy("guid", t);
r && r.id && (n.app.user.unreads.incrementForFeed(r.id, e ? -1 : 1, {
manual: !0
}), n.app.events.send("feed:updated", {
feed: r.id,
manual: !0
}));
}), [ 2 ];
}
});
});
}, t.prototype.getCollections = function() {
if (!this.collections || !this.collections.forEach) return [];
var e = [];
return this.collections.forEach(function(t) {
if (0 === t.indexOf("c:")) {
var r = t.split("c:")[1];
e.push(r);
}
}), e;
}, t.prototype.toggleStar = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.is_starred = e ? e ? 1 : 0 : this.is_starred ? 0 : 1, [ 4, this.save() ];

case 1:
return t.sent(), this.app.events.send("post:updated", {
post: this.id
}), this.is_starred ? this.app.analytics.collectEvent("user:starred_post", this.id) : this.app.analytics.collectEvent("user:unstarred_post", this.id), 
this.id && this.app.events.send("status:shouldSync", {
updatedPosts: [ {
id: this.id,
is_starred: this.is_starred
} ],
manual: !0
}), [ 2 ];
}
});
});
}, t.prototype.getTimestamp = function() {
return this.isFromBackend ? this.created_at || 1e3 * this.published : this.published;
}, t.prototype.getCollectionsNamed = function() {
var e = this;
return this.getCollections().map(function(t) {
var r = e.app.store.postCollections().find(function(e) {
return e.feed_guid == t;
});
return !!r && r.title;
}).filter(function(e) {
return !!e;
});
}, t.prototype.hasCollection = function(e) {
return this.getCollections().includes(e);
}, t.prototype.getValues = function() {
var t = e.prototype.getValues.call(this);
t.mega_guid || (t.mega_guid = this.getGUIDHash());
for (var r in t) null == t[r] && void 0 !== this.schema[r] && void 0 !== this.schema[r].standard && (t[r] = this.schema[r].standard);
return t.summary = "", t;
}, t.prototype.getRESTValues = function() {
var e = this.getValues();
return e.published_from_feed = this.published_from_feed, e.feed_id = this.adder_feed_id, 
e.summary = this.summary, e;
}, t.prototype.getGUID = function() {
return this.guid || this.link;
}, t.prototype.getLink = function() {
return this.link;
}, t.prototype.getConsumePath = function() {
return n.default.feeder.postURL.replace("{post_id}", this.id || "");
}, t.prototype._makeHash = function() {
return s.default.hex(this.feed_id + "" + this.title + Math.floor(this.published_from_feed / 1e4));
}, t.prototype.makeGUID = function() {
return !this._guid && this.getHashFeedId(), this.getHashFeedId() + ":" + (this.guid || this._makeHash());
}, t.prototype.getHashFeedId = function() {
return this.adder_feed_id || this.feed_id || "";
}, t.prototype.getServerGUID = function() {
return this._guid || (this._guid = this.makeGUID()), this._guid;
}, t.prototype.getAllFeedIdsImIn = function() {
var e = this, t = [];
return this.feed_id && t.push(this.feed_id), this.getCollections().forEach(function(r) {
var n = e.app.store.feedBy("guid", r);
n && n.id && t.push(n.id);
}), t;
}, t.prototype.getGUIDHash = function() {
return this._guidHash || (this._guidHash = t.hashGuid(this.getServerGUID())), this._guidHash;
}, t.prototype.getFeedFavicon = function() {
if (this.feed_link) return n.default.defaultFavicon(this.feed_link);
}, t.schema = {
feed_id: {
type: "string"
},
title: {
type: "text"
},
link: {
type: "text"
},
summary: {
type: "text",
mandatory: !1,
standard: ""
},
is_read: {
type: "int",
standard: 0
},
is_starred: {
type: "int",
standard: 0
},
published: {
type: "int"
},
guid: {
type: "text",
mandatory: !1
},
mega_guid: {
type: "text",
mandatory: !0,
standard: ""
},
meta: {
type: "text",
mandatory: !1
}
}, t;
}(r.default), e("default", o);
}
};
}), System.register("backend/migrations", [ "backend/model/post" ], function(e, t) {
"use strict";
var r, n, s;
r = this;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e(e) {
this.migrations = e;
}
return e.prototype.migrate = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return [ 4, e.getMigrationVersion() ];

case 1:
return t = n.sent(), r = this.getNextMigrationVersion(t), r ? [ 4, this.performMigrations(e, r) ] : [ 3, 3 ];

case 2:
return [ 2, n.sent() ];

case 3:
return [ 2, !0 ];
}
});
});
}, e.prototype.getNextMigrationVersion = function(e) {
var t = parseInt(e, 10);
if (t && !isNaN(t)) {
var r = (t + 1).toString();
return this.migrations[r] ? r : "";
}
return "createSchema";
}, e.prototype.performMigrations = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return "createSchema" !== t ? [ 3, 3 ] : [ 4, this.performMigration(e, this.migrations.createSchema) ];

case 1:
return s.sent(), r = this.getLatestMigrationVersion(), [ 4, e.setMigrationVersion(r) ];

case 2:
return s.sent(), [ 2, !0 ];

case 3:
n = parseInt(t, 10), s.label = 4;

case 4:
return this.migrations[n.toString()] ? (r = n, [ 4, this.performMigrationNumber(e, r.toString()) ]) : [ 3, 6 ];

case 5:
return s.sent(), n++, [ 3, 4 ];

case 6:
return [ 4, e.setMigrationVersion((n - 1).toString()) ];

case 7:
return s.sent(), [ 2, !0 ];
}
});
});
}, e.prototype.performMigrationNumber = function(e, t) {
var r = this.migrations[t];
return this.performMigration(e, r);
}, e.prototype.performMigration = function(e, t) {
return t(e);
}, e.prototype.getLatestMigrationVersion = function() {
for (var e = 1; this.migrations[e + 1]; ) e += 1;
return e.toString();
}, e;
}(), s.migrations = {
createSchema: function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, e.app.feedMapper.install(e) ];

case 1:
return t.sent(), [ 4, e.app.postMapper.install(e) ];

case 2:
return t.sent(), [ 4, e.app.folderMapper.install(e) ];

case 3:
return t.sent(), [ 2, !0 ];
}
});
});
},
"1": function(e) {
return Promise.resolve(!0);
},
"2": function(e) {
return Promise.resolve(!0);
},
"3": function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, e.app.postMapper.addField(e, "mega_guid") ];

case 1:
return t.sent(), [ 2, !0 ];
}
});
});
},
"4": function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, e.app.feedMapper.addField(e, "filter_string") ];

case 1:
return t.sent(), [ 2, !0 ];
}
});
});
},
"5": function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, !0 ];
});
});
},
"6": function(e) {
return __awaiter(r, void 0, void 0, function() {
var t, r, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
return u.trys.push([ 0, 6, 7, 8 ]), [ 4, e.find("posts", "id", [], {}, {}, e.app.postMapper.getSchema()) ];

case 1:
t = u.sent(), console.log("Migrating to mega_guid..."), window._migrationToRun = {
total: t.res.length,
current: 0
}, r = 0, u.label = 2;

case 2:
return r < t.res.length ? (window._migrationToRun.current = r, s = t.res[r], o = s.mega_guid, 
i = new n.default(s, e.app), i.published_from_feed || (i.published_from_feed = i.published), 
s.mega_guid = i.getGUIDHash(), s.mega_guid === o ? [ 3, 4 ] : (console.log("Doing %d... %s != %s", s.id, s.mega_guid, o), 
[ 4, e.update("posts", "id", [], {
mega_guid: s.mega_guid
}, s, {
id: s.id
}, e.app.postMapper.getSchema()) ])) : [ 3, 5 ];

case 3:
u.sent(), u.label = 4;

case 4:
return r++, [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return a = u.sent(), console.error("Could not migrate to mega_guid"), [ 3, 8 ];

case 7:
return delete window._migrationToRun, [ 7 ];

case 8:
return [ 2, !0 ];
}
});
});
},
"7": function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(t) {
try {
e.addIndex("posts", "mega_guid");
} catch (e) {
console.error("Could not create mega_guid index"), console.error(e);
}
return [ 2, !0 ];
});
});
}
}, s.indexedDBMigrations = {
createSchema: function(e) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, s.migrations.createSchema(e) ];

case 1:
return [ 2, t.sent() ];
}
});
});
},
"2": function(e) {
return e.app.postMapper.addIndex(e, "feed_id"), Promise.resolve(!0);
}
}, e("default", s);
}
};
}), System.register("backend/orm/dbqueryresult", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("backend/orm/database", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e, t, r) {
this.name = e, this.migrations = t, this.app = r;
}
return e.prototype.performMigrations = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.migrations ? [ 4, this.migrations.migrate(this) ] : [ 3, 2 ];

case 1:
e.sent(), e.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.find = function(e, t, r, n, s, o) {
var i = this.buildFind(e, t, r, n, s, o);
return this.executeQuery(i);
}, e.prototype.insert = function(e, t, r, n) {
var s = this.buildInsert(e, t, r, n);
return this.executeQuery(s);
}, e.prototype.update = function(e, t, r, n, s, o, i) {
var a = this.buildUpdate(e, t, r, n, s, o, i);
return this.executeQuery(a);
}, e.prototype.del = function(e, t, r, n, s) {
var o = this.buildDelete(e, t, r, n, s);
return this.executeQuery(o);
}, e.prototype.count = function(e, t, r, n, s, o) {
var i = this.buildCount(e, t, r, n, s, o);
return this.executeQuery(i);
}, e.prototype.onError = function(e, t) {
console.error("SQLERROR " + t), console.error(e.sql, "failed with error", t);
}, e.prototype.analyticsCollectEvent = function(e, t) {
var r = this;
setTimeout(function() {
r.app.analytics.collectEvent(e, t);
}, 10);
}, e.instances = {}, e;
}(), e("default", r);
}
};
}), System.register("backend/orm/dbfetch", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("backend/orm/mapper", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e, t) {
this.dbStack = [], this.indexes = [], this.indexedDBIndexes = !1, this.db = e, this.app = e.app, 
this.dbStack = [], this.modelConstructor = t, this.pk = this.modelConstructor.primaryKey;
}
return e.prototype.getIndexes = function() {
return "IndexedDBDatabase" === this.db.adapterName ? this.indexedDBIndexes || this.indexes : this.indexes;
}, e.prototype.install = function(e) {
return e.makeTable(this.table, this.pk, this.modelConstructor.schema);
}, e.prototype.addField = function(e, t) {
var r = this.modelConstructor.schema[t];
return e.addField(this.table, t, r);
}, e.prototype.addIndex = function(e, t) {
return e.addIndex(this.table, t);
}, e.prototype.pushDatabase = function(e, t) {
this.dbStack.push(this.db), this.db = e, t(this);
var r = this.dbStack.pop();
if (!r) throw new Error("Could not pop database. Something is seriously wrong.");
this.db = r;
}, e.prototype.find = function(e, t) {
return void 0 === t && (t = {}), __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return r = 0 === Object.keys(e).length, n = Date.now(), [ 4, this.db.find(this.table, this.pk, this.getIndexes(), e, t, this.getSchema()) ];

case 1:
return s = a.sent(), o = {
meta: s.meta
}, o.results = [], s.res && s.res.forEach(function(e) {
var t = i.objectForRow(e), r = i.db.app.store.addObject(t);
o.results && o.results.push(r);
}), r && this.db.app.analytics.collectEvent("query:all_" + this.table, Date.now() - n), 
[ 2, o ];
}
});
});
}, e.prototype.massDelete = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.db.del(this.table, this.pk, this.getIndexes(), e, this.getSchema()) ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, e.prototype.massUpdate = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.db.update(this.table, this.pk, this.getIndexes(), e, null, t, this.getSchema()) ];

case 1:
return r.sent(), [ 2 ];
}
});
});
}, e.prototype.save = function(e) {
return e[this.pk] ? this.update(e) : this.insert(e);
}, e.prototype.insert = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.db.insert(this.table, this.pk, e, this.getSchema()) ];

case 1:
return t = r.sent(), [ 2, this.onSaveOrUpdate(t, e) ];
}
});
});
}, e.prototype.update = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return e.isDirty() ? (t = {}, t[this.pk] = e[this.pk], [ 4, this.db.update(this.table, this.pk, this.getIndexes(), e.getDirty(), e, t, this.getSchema()) ]) : [ 2, {
meta: {
error: !1
}
} ];

case 1:
return r = n.sent(), [ 2, this.onSaveOrUpdate(r, e) ];
}
});
});
}, e.prototype.onSaveOrUpdate = function(e, t) {
var r = {
meta: e.meta,
results: []
}, n = [];
n = t instanceof Array ? t : [ t ];
for (var s = 0, o = n.length; s < o; s++) {
var i = n[s];
e.meta.insertId && (i[this.pk] = e.meta.insertId), e.meta.errorCode ? i.errorCode = e.meta.errorCode : i.errorCode = void 0, 
e.meta.errorMessages ? i.errorMessages = e.meta.errorMessages : i.errorMessages = void 0, 
e.updatedModels || (i.fromDB = i.getValues()), this.db.app.store.addObject(i);
}
return r;
}, e.prototype.remove = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
if (!e[this.pk]) throw "Remove object must have " + this.pk;
return t = {}, t[this.pk] = e[this.pk], [ 4, this.db.del(this.table, this.pk, this.getIndexes(), t, this.getSchema()) ];

case 1:
return r.sent(), [ 2 ];
}
});
});
}, e.prototype.count = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return [ 4, this.db.count(this.table, this.pk, this.getIndexes(), e, t, this.getSchema()) ];

case 1:
return r = s.sent(), n = 0, r.res[0] && (n = r.res[0].total), [ 2, n ];
}
});
});
}, e.prototype.getSchema = function() {
return this.modelConstructor.schema;
}, e.prototype.objectForRow = function(e) {
var t = new this.modelConstructor(e, this.app);
return t.setFromDB(e), "RESTDatabase" === this.db.adapterName && (t.isFromBackend = !0), 
t;
}, e;
}(), e("default", r);
}
};
}), System.register("backend/userpreferences", [ "backend/config" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e) {
this.cached = {}, this.defaults = {
"backend:shouldCheckStatus": !0,
"backend:hasCheckedStatus": !1,
"backend:hasChangedStatusAndNeedsToVerifyWithUser": !1,
"global:updateInterval": r.default.defaultUpdateInterval,
"global:postsDisplay": r.default.defaultNumPosts,
"global:trackUnreads": !0,
"global:openPostsInNewTab": !0,
"global:notifications": !1,
"global:soundNotifications": !1,
"global:hasAskedForLargeTabs": !1,
"global:disableContentHelper": !1,
"global:hasAskedToShowContentHelper": !1,
"global:notificationsKeepAlive": !1,
"global:seenReview": !1,
"global:timestampType": "relative",
"display:unread": null,
"display:starred": null,
"display:folder": null,
"display:default": null,
"display:autoUpdate": !0,
"popup:filter": "all",
"options:theme": "normal",
activeTheme: "theme-light",
"global:useReadability": !1,
"global:showUnreadCountInBadge": !0,
didChooseToUseBasic: !1,
acceptedNewTheme: !0,
specialSortOrder: "newest-first",
"deck:ui": !1,
"display:postListStyle": {
showContent: "collapsed"
},
"dashboard:seenWelcome": !1,
"ask:markMany": !0,
"ask:openMany": !0
}, this.allThemes = [ {
name: "Light",
identifier: "theme-light",
image: "css/gfx/theme-light.png"
}, {
name: "Dark",
identifier: "theme-dark",
image: "css/gfx/theme-dark.png"
}, {
name: "Orange",
identifier: "theme-orange",
image: "css/gfx/theme-dark.png"
}, {
name: "Holiday",
identifier: "theme-xmas",
image: "css/gfx/theme-dark.png"
} ], this.app = e;
}
return e.prototype.get = function(e) {
if (void 0 !== this.cached[e]) return this.cached[e];
var t = localStorage.getItem(e);
try {
t && (t = JSON.parse(t));
} catch (r) {
if (t) return this.cached[e] = t, t;
}
return null === t && void 0 !== this.defaults[e] ? (this.cached[e] = this.defaults[e], 
this.defaults[e]) : (this.cached[e] = t, t);
}, e.prototype.set = function(e, t, r) {
void 0 === r && (r = !1);
var n = localStorage.getItem(e), s = JSON.stringify(t);
if (n !== s) {
if ("object" == typeof t) try {
t = JSON.parse(s);
} catch (e) {
console.warn("Could not reparse value", e);
}
localStorage.setItem(e, s), this.cached[e] = t, r || this.app.events.send("preferences:changed", {
key: e,
value: t
}), "activeTheme" === e && this.app.events.send("theme:changed");
}
}, e.prototype.has = function(e) {
return e in localStorage;
}, e.prototype.setQuiet = function(e, t) {
this.set(e, t, !0);
}, e.prototype.remove = function(e) {
localStorage.setItem(e, ""), delete this.cached[e];
}, e.prototype.getAll = function() {
var e = {};
for (var t in this.defaults) this.defaults.hasOwnProperty(t) && -1 === t.indexOf("backend:") && (e[t] = this.get(t));
return e;
}, e.prototype.updateMany = function(e) {
for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && void 0 !== e[t] && this.set(t, e[t]);
}, e.prototype.flushPreferences = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e = this.app.sync.getActive(), [ 4, e.flushPreferences() ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, e;
}(), e("default", n);
}
};
}), System.register("library/ts/request", [ "library/ts/function" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e, t) {
this.rawBody = e, this.status = t;
}
return e.prototype.isSuccess = function() {
return this.status >= 200 && this.status <= 299;
}, e.prototype.json = function() {
try {
return JSON.parse(this.rawBody);
} catch (e) {
return !1;
}
}, e;
}(), e("Response", n), s = function() {
function e(e) {
this.params = r.toOptions(e, {
url: "",
method: "GET",
contentType: "form",
onComplete: function() {},
onError: function() {},
arrayedParamsToMultipleKey: !1,
timeout: !1,
addFeederAuthorization: !1,
rawBody: !1
}), this.headers = {}, this.params.addFeederAuthorization && this.addFeederAuthorization(), 
this.request = new XMLHttpRequest();
}
return e.prototype.addHeader = function(e, t) {
this.headers[e] = t;
}, e.prototype.send = function(e) {
var t = this;
e = r.toOptions(e || {}, {
get: {},
post: {}
}), e.get = e.get || {}, e.post = e.post || {};
var s = this.getAndClearCachedResponse(this.params.method, this.params.url);
if (s) {
var o = new n(s, 200);
return this.params.onComplete(200, s, null), Promise.resolve(o);
}
var i = this.makeParams(e.post, this.params.contentType), a = this.makeParams(e.get, "form"), u = this.params.url;
a && (u += (-1 !== u.indexOf("?") ? "&" : "?") + a), this.request.open(this.params.method, u, !0), 
this.request.withCredentials = !0, "form" === this.params.contentType ? this.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8") : "json" === this.params.contentType && this.request.setRequestHeader("Content-type", "application/json; charset=utf-8");
for (var c in this.headers) this.headers.hasOwnProperty(c) && this.request.setRequestHeader(c, this.headers[c]);
return new Promise(function(e, r) {
t.request.onreadystatechange = function() {
if (4 === t.request.readyState) {
try {
t.params.onComplete(t.request.status, t.request.responseText, t.request.responseXML);
} catch (e) {
console.error("[request.readyState == 4] ERROR", e);
}
e(new n(t.request.responseText, t.request.status));
}
}, t.request.onerror = function() {
try {
t.requestError();
} catch (e) {
console.error("[request.onError] ERROR", e);
}
r();
}, t.params.timeout && (t.request.timeout = t.params.timeout, t.request.ontimeout = function() {
try {
t.requestError();
} catch (e) {
console.error("[request.ontimeout] ERROR", e);
}
r();
}), t.params.rawBody ? t.request.send(t.params.rawBody) : t.request.send(i || null);
});
}, e.prototype.abort = function() {
this.request.abort();
}, e.prototype.requestError = function() {
this.params.onError && this.params.onError();
}, e.prototype.makeParams = function(e, t) {
if (!e) return null;
if ("form" === t) return r.objectToQueryString(e, this.params.arrayedParamsToMultipleKey);
if ("json" === t) return JSON.stringify(e);
if (!t) return null;
throw "No such content type " + t;
}, e.prototype.addFeederAuthorization = function() {
if (localStorage["feeder:token"]) {
var e = JSON.parse(localStorage["feeder:token"]) + ":" + JSON.parse(localStorage.client_id);
this.addHeader("Authorization", btoa(e));
}
}, e.prototype.getHeader = function(e) {
return this.request.getResponseHeader(e);
}, e.prototype.getAndClearCachedResponse = function(e, t) {
if ("GET" === e) {
var r = window;
if (r.EXTRA_VARIABLES && r.EXTRA_VARIABLES.preloaded_responses) try {
var n = new URI(t), s = n.path(), o = r.EXTRA_VARIABLES.preloaded_responses[s];
return delete r.EXTRA_VARIABLES.preloaded_responses[s], o ? console.log("Used cached value for: %s", s) : console.log("Calling... %s", s), 
o;
} catch (e) {
return void console.error(e);
}
}
}, e;
}(), e("default", s);
}
};
}), System.register("backend/feedloader", [ "library/ts/request" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e) {
this.isAborted = !1, this.feed = e;
}
return e.prototype.load = function() {
var e = this;
return new Promise(function(t, n) {
e.request = new r.default({
url: e.pathToLoad(),
method: "GET",
contentType: null,
onComplete: function(e, r, n) {
t([ e, r, n ]);
},
onError: function() {
n();
},
timeout: 45e3
}), e.request.send();
});
}, e.prototype.pathToLoad = function() {
return this.feed.getPath();
}, e.prototype.abort = function() {
this.isAborted = !0, this.request.abort();
}, e;
}(), e("default", n);
}
};
}), System.register("backend/model/PostFetcher", [ "ext/ext" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e, t, r) {
this.posts = [], this.hasMorePosts = !1, this.offset = 0, this.limit = !1, this.numberOfFetchedPosts = 0, 
this.feed = e, this.sortOrder = t, this.options = r;
}
return e.prototype.fetch = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e = this.limit ? this.limit : this.feed.getNumPosts(), [ 4, this.feed.app.postMapper.find(this.findConditions(), {
limit: [ this.offset, e + 1 ],
by: this.byConditions()
}) ];

case 1:
return t = r.sent(), this.offset += e, this._setPosts(t, e), [ 2, this.posts ];
}
});
});
}, e.prototype._setPosts = function(e, t) {
e.results && (this.posts = e.results.slice(0, t), this.hasMorePosts = e.results.length > t);
}, e.prototype.hasMore = function() {
return this.hasMorePosts;
}, e.prototype.byConditions = function() {
switch (this.sortOrder) {
case "newest-first":
return this.feed.app.postMapper.getPostSort();

case "oldest-first":
return this.feed.app.postMapper.getPostSortOldestFirst();

default:
return this.feed.app.postMapper.getPostSort();
}
}, e.prototype.findConditions = function() {
var e = this, t = this.feed.findConditions();
return this.options.filters.forEach(function(r) {
switch (r) {
case "unread":
t.is_read = 0;
break;

case "starred":
t.is_starred = 1;
break;

case "filtered":
"RESTDatabase" === e.feed.mapper.db.adapterName && (t.is_filtered = 1);
}
}), r.default.isOnline() && (t.post_contents = 1), t;
}, e;
}(), e("PostFetcher", n);
}
};
}), System.register("backend/model/PostCollection", [ "library/ts/request", "backend/config", "backend/orm/model" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function(e) {
function t(r, n) {
var s = e.call(this) || this;
return s.mapperName = "postCollection", s.model = "PostCollection", s.schema = t.schema, 
s.setup(r, n), s;
}
return __extends(t, e), t.postInCollectionFeed = function(e, t) {
return !(!t.id || "collection" !== t.type) && (!!e.collections && e.collections.includes("c:" + t.guid));
}, t.addPostToCollection = function(e, t, r) {
if (e.collections = e.collections || [], e.collections.push("c:" + t), e.collections = e.collections.feederUnique(), 
r.events.send("post:updated", {
post: e.id
}), !e.is_read) {
var n = e.app.store.feedBy("guid", t);
n && n.id && e.app.user.unreads.incrementForFeed(n.id, 1, {
manual: !0
});
}
}, t.removePostFromCollection = function(e, t, r) {
if (e.collections = (e.collections || []).filter(function(e) {
return e !== "c:" + t;
}), r.events.send("post:updated", {
post: e.id
}), !e.is_read) {
var n = e.app.store.feedBy("guid", t);
n && n.id && e.app.user.unreads.incrementForFeed(n.id, -1, {
manual: !0
});
}
}, t.prototype.getCacheId = function() {
return this.id || "";
}, t.prototype.addPost = function(e) {
return __awaiter(this, void 0, void 0, function() {
var s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return this.app.user.backend.isConnectedToBackend() ? (s = new r.default({
url: n.default.feeder.api + "/post-collection-items",
method: "POST",
contentType: "json",
addFeederAuthorization: !0
}), [ 4, s.send({
post: {
post_collection_item: {
post_uuid: e.id,
post_collection_id: this.id
}
}
}) ]) : [ 2, !1 ];

case 1:
return o = i.sent(), o.isSuccess() ? (t.addPostToCollection(e, this.feed_guid, this.app), 
[ 2, !0 ]) : [ 2, !1 ];
}
});
});
}, t.prototype.removePost = function(e) {
return __awaiter(this, void 0, void 0, function() {
var s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return this.app.user.backend.isConnectedToBackend() ? (s = new r.default({
url: n.default.feeder.api + "/post-collection-items/" + e.id,
method: "DELETE",
contentType: "json"
}), [ 4, s.send({
get: {
post_collection_id: this.id
}
}) ]) : [ 2, !1 ];

case 1:
return o = i.sent(), o.isSuccess() ? (t.removePostFromCollection(e, this.feed_guid, this.app), 
[ 2, !0 ]) : [ 2, !1 ];
}
});
});
}, t.prototype.matchesKeyCode = function(e) {
return !!this.keyboard_shortcut && this.keyboard_shortcut.toUpperCase().charCodeAt(0) === e;
}, t.schema = {
feed_guid: {
type: "text"
},
title: {
type: "text"
},
created_at: {
type: "text"
},
icon: {
type: "text"
},
keyboard_shortcut: {
type: "text"
}
}, t;
}(s.default), e("PostCollection", o);
}
};
}), System.register("backend/model/feed", [ "backend/orm/model", "ext/ext", "library/ts/request", "backend/model/PostFetcher", "backend/model/PostCollection" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
a = function(e) {
function t(r, n) {
var s = e.call(this) || this;
return s.mapperName = "feed", s.model = "feed", s.schema = t.schema, s.noFolderOnAdd = !1, 
s.allReadOnNextCrawl = !1, s.feedTypeId = "default", s.isStale = !1, s.error = !1, 
s.setup(r, n), s;
}
return __extends(t, e), t.prototype.onInit = function() {
this.lastUpdated = 0;
}, t.prototype.toJSON = function() {
return {
isFeed: !0,
guid: this._originalId || this.id,
path: this.path,
title: this.title,
favicon: this.favicon
};
}, t.prototype.getCacheId = function() {
return this.id ? this.id.toString() : "";
}, t.prototype.copyPropertiesFromServerData = function(e) {
var t = "link title favicon numposts forceupdate usenotifications updateinterval meta quirks".split(" ");
for (var r in e) e.hasOwnProperty(r) && t.contains(r) && (this[r] = e[r]);
}, t.prototype.findConditions = function() {
return {
feed_id: this.id,
_hint: {
index: [ "feed_id", "published" ]
}
};
}, t.prototype.displayOptions = function() {
return this.getMeta("display") || this.defaultDisplayOptions();
}, t.prototype.defaultDisplayOptions = function() {
return {
filters: []
};
}, t.prototype.getBackingFeedType = function() {
return this.legacy_extension_type || this.type;
}, t.prototype.getPostIterator = function(e) {
return new o.PostFetcher(this, this.getSortOrder(), e);
}, t.prototype.getPostsOfInterest = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return e = this.app.postMapper, t = [], [ 4, e.find({
is_read: 0,
feed_id: this.id
}) ];

case 1:
return r = s.sent(), r.results && (t = t.concat(r.results)), [ 4, e.find({
is_starred: 1,
feed_id: this.id
}) ];

case 2:
return n = s.sent(), n.results && (t = t.concat(n.results)), [ 2, t ];
}
});
});
}, t.prototype._pageThroughPosts = function(e, t, r) {
return void 0 === t && (t = 30), void 0 === r && (r = 5), __awaiter(this, void 0, void 0, function() {
var t, n, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
t = this.getPostIterator(e), n = [], s = 0, i.label = 1;

case 1:
return [ 4, t.fetch() ];

case 2:
if (o = i.sent(), n = n.concat(o), n.length > 30) return [ 3, 4 ];
if (++s >= r) return [ 3, 4 ];
i.label = 3;

case 3:
if (t.hasMore()) return [ 3, 1 ];
i.label = 4;

case 4:
return [ 2, n ];
}
});
});
}, t.prototype.unreadPosts = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this._pageThroughPosts({
filters: [ "unread" ]
}) ];

case 1:
return [ 2, e.sent() ];
}
});
});
}, t.prototype.starredPosts = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this._pageThroughPosts({
filters: [ "starred" ]
}) ];

case 1:
return [ 2, e.sent() ];
}
});
});
}, t.prototype.countUnread = function() {
if (this.id) {
var e = this.app.user.unreads.maxUnreads();
return Math.min(this.app.user.unreads.unreadCounts[this.id] || 0, e);
}
return 0;
}, t.prototype.hasUnread = function(e) {
return !!this.id && this.app.user.unreads.forFeed(this.id) > 0;
}, t.prototype.shouldTrackUnreads = function(e) {
var t = this.getMeta("trackUnreads");
return "boolean" == typeof t ? t : e;
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
var e = this;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.id ? (this.app.user.unreads.updateForFeed(this.id, 0, {
manual: !0,
clearedFeeds: [ this.id ]
}), this.app.store.postsForFeed(this.id).forEach(function(t) {
t.is_read || (t.is_read = 1, e.app.events.send("post:updated", {
post: t.id
}));
}), this.app.events.send("feed:updated", {
feed: this.id,
manual: !0
}), [ 4, this.app.sync.getActive().clearAllUnread(this) ]) : [ 2 ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, t.prototype.deleteAllPosts = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.id ? (this.app.user.unreads.updateForFeed(this.id, 0, {
manual: !0
}), this.app.store.deleteAllPosts(this.id), this.app.user.backend.isConnectedToBackend() ? [ 3, 2 ] : [ 4, this.app.postMapper.massDelete({
feed_id: this.id
}) ]) : [ 2 ];

case 1:
e.sent(), e.label = 2;

case 2:
return [ 2 ];
}
});
});
}, t.prototype.getPath = function() {
var e = this.path;
return this.forceupdate && (e += (-1 !== e.indexOf("?") ? "&" : "?") + "forceupdate=" + Date.now()), 
e;
}, t.prototype.getPathDisplay = function() {
return this.path;
}, t.prototype.getFavicon = function() {
return "https://icons.feedercdn.com/" + new URI(this.path).domain();
}, t.prototype.getNumPosts = function() {
return this.numposts || this.app.user.preferences.get("global:postsDisplay");
}, t.prototype.loadFavicon = function() {
this.favicon && this.favicon.length && -1 === this.favicon.indexOf("chrome://favicon/") || n.default.isOnline() || this.app.user.backend.isConnectedToBackend() || this.forceReloadFavicon();
}, t.prototype.forceReloadFavicon = function() {
var e = this;
new s.default({
url: this.link,
method: "GET",
onComplete: function(t, r) {
e._parseFaviconRequest(t, r);
}
}).send();
}, t.prototype._parseFaviconRequest = function(e, t) {
var r = t.match(/<link (.*)\/?>/g) || [], n = this._getFaviconFromLinks(r, this.link);
this.favicon = n || this.getFavicon(), this.save(), this.app.events.send("feed:updated", {
id: this.id
});
}, t.prototype._getFaviconFromLinks = function(e, t) {
try {
return !!e && (e.forEach(function(e) {
var r = e.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g) || [], n = {};
if (r.forEach(function(e) {
var t = e.split("=");
if (t && t.length >= 2) {
var r = (t.shift() || "").trim(), s = t.join("=");
n[r] = s.trimChars("'\"").trim();
}
}), n.rel && [ "icon", "shortcut icon" ].contains(n.rel) && n.href && n.href.length) return new URI(n.href, t).toString();
}), !1);
} catch (e) {}
return !1;
}, t.prototype.getQuirk = function(e) {
try {
return JSON.parse(this.quirks)[e];
} catch (e) {
return null;
}
}, t.prototype.changeSortOrder = function(e) {
this.setMeta("sortOrder", e);
}, t.prototype.persistDisplaySettings = function(e) {
this.setMeta("display", e);
}, t.prototype.matchesPost = function(e) {
return !!this.id && (!(!e.feed_id || e.feed_id.toString() !== this.id.toString()) || !!i.PostCollection.postInCollectionFeed(e, this));
}, t.prototype.getSortOrder = function() {
switch (this.getMeta("sortOrder")) {
case "oldest-first":
return "oldest-first";

case "newest-first":
default:
return "newest-first";
}
}, t.prototype.isPostCollection = function() {
return "collection" === this.type;
}, t.schema = {
type: {
type: "text",
standard: "rss",
possible: [ "rss" ]
},
guid: {
type: "text",
standard: ""
},
title: {
type: "text"
},
path: {
type: "text"
},
link: {
type: "text"
},
favicon: {
type: "text",
standard: ""
},
numposts: {
type: "int",
standard: 0
},
forceupdate: {
type: "int",
standard: 0
},
usenotifications: {
type: "int",
standard: 0
},
updateinterval: {
type: "int",
standard: 0
},
meta: {
type: "text",
mandatory: !1,
standard: ""
},
quirks: {
type: "text",
standard: ""
},
filter_string: {
type: "text",
standard: ""
}
}, t;
}(r.default), e("Feed", a), e("default", a);
}
};
}), System.register("backend/feedcontainer", [ "backend/model/feed", "backend/model/folder", "backend/config" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function() {
function e(e) {
this.feedsByGUID = {}, this.app = e, this.feeds = {}, this.folders = {}, this.feedIdCounter = 9999999, 
this.folderIdCounter = 9999999, this.base = !1, this.folderQueue = [];
}
return e.prototype.addFeed = function(e) {
var t = e.id || !1, n = new r.default(e, this.app);
return n._originalId = t, this.feedsByGUID[n.guid] ? n : (n.favicon || (n.favicon = s.default.defaultFavicon(n.path)), 
n.title || (n.title = n.path), n.type || (n.type = "rss"), n.link || (n.link = "http://" + new URI(n.path).host()), 
n.id || (n.id = (this.feedIdCounter++).toString()), this.feeds[n.id] = n, this.feedsByGUID[n.guid] = n, 
this.currentFolder.addFeed(n.id), n);
}, e.prototype.addFolder = function(e) {
e.id = (this.folderIdCounter++).toString(), this.folders[e.id] = e, this.currentFolder && this.currentFolder.addFolder(e.id);
}, e.prototype.pushFolder = function(e) {
var t;
return "string" == typeof e ? (t = new n.default({}, this.app), t.name = e, this.addFolder(t)) : t = e, 
t.structure = this, this.base || (this.base = t, t.standard = 1), this.currentFolder = t, 
this.folderQueue.push(t), t;
}, e.prototype.popFolder = function() {
this.folderQueue.pop(), this.currentFolder = this.folderQueue[this.folderQueue.length - 1];
}, e.prototype.feed = function(e) {
return this.feeds[e];
}, e.prototype.folder = function(e) {
return this.folders[e];
}, e.prototype.forEachFeed = function(e) {
for (var t in this.feeds) this.feeds.hasOwnProperty(t) && e(this.feeds[t]);
}, e.prototype.removeFeed = function(e) {
this.feedToRemove = e, e.id && delete this.feeds[e.id], delete this.feedsByGUID[e.guid], 
this.base && this.recursivelyRemoveFeedFromFolder(this.base);
}, e.prototype.recursivelyRemoveFeedFromFolder = function(e) {
var t = this;
this.feedToRemove.id && e.removeFeed(this.feedToRemove.id), e.getFolders().forEach(function(e) {
t.recursivelyRemoveFeedFromFolder(e);
});
}, e.prototype.toJSON = function() {
var e = {
name: "Feeds"
};
return this.base && (e.items = this.base.items().map(function e(t) {
if (t instanceof r.default) return t.toJSON();
var n = t.toJSON();
return n.items = t.items().map(e), n;
})), JSON.stringify(e);
}, e;
}(), e("default", o);
}
};
}), System.register("backend/model/folder", [ "backend/orm/model", "backend/model/feed", "backend/feedcontainer" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function(e) {
function t(r, n) {
var s = e.call(this) || this;
return s.mapperName = "folder", s.model = "folder", s.schema = t.schema, s.setup(r, n), 
s;
}
return __extends(t, e), t.prototype.onInit = function() {
this.orderstring || (this.orderstring = "");
}, t.prototype.toJSON = function() {
return {
isFolder: !0,
name: this.name
};
}, t.prototype.getCacheId = function() {
return this.id ? this.id.toString() : "";
}, t.prototype.forEachItem = function(e) {
return this.items().forEach(e);
}, t.prototype.forEachFolder = function(e) {
this.items().filter(function(r) {
r instanceof t && e(r);
});
}, t.prototype.forEachFolderRecursively = function(e) {
this.forEachFolder(function(t) {
e(t), t.forEachFolder(e);
});
}, t.prototype.allFeeds = function() {
var e = [];
return this.forEachItem(function(t) {
t instanceof n.default ? e.push(t) : e = e.concat(t.allFeeds());
}), e;
}, t.prototype.rawItems = function() {
return this.orderstring ? this.orderstring.split(",").map(function(e) {
return e.split(":");
}) : [];
}, t.prototype.items = function() {
var e = this;
return this.rawItems().map(function(t) {
var r = t[0], n = t[1];
return "f" === r ? e.getFeed(n) : "d" === r && e.getFolder(n);
}).filter(function(e) {
return !!e;
});
}, t.prototype.addItem = function(e) {
e.id && (e instanceof n.default ? this.addFeed(e.id) : e instanceof t && this.addFolder(e.id));
}, t.prototype.addFeed = function(e) {
this.hasFeed(e) ? this.moveFeedToBack(e) : this.orderstring = (this.orderstring + ",f:" + e).trimChars(",");
}, t.prototype.addFolder = function(e) {
e != this.id && (this.hasFolder(e) ? this.moveFolderToBack(e) : this.orderstring = (this.orderstring + ",d:" + e).trimChars(","));
}, t.prototype.removeItem = function(e) {
e.id && ("feed" === e.model ? this.removeFeed(e.id) : "folder" === e.model && this.removeFolder(e.id));
}, t.prototype.removeFeed = function(e) {
this.orderstring = this.rawItems().filter(function(t) {
return !("f" == t[0] && t[1] === e.toString());
}).map(function(e) {
return e.join(":");
}).join(",");
}, t.prototype.removeFolder = function(e) {
this.orderstring = this.rawItems().filter(function(t) {
return !("d" == t[0] && t[1] === e.toString());
}).map(function(e) {
return e.join(":");
}).join(",");
}, t.prototype.moveFeedToBack = function(e) {
this.removeFeed(e), this.addFeed(e);
}, t.prototype.moveFolderToBack = function(e) {
this.removeFolder(e), this.addFolder(e);
}, t.prototype.hasFeed = function(e) {
return this.rawItems().some(function(t) {
return "f" == t[0] && t[1] == e.toString();
});
}, t.prototype.hasFolder = function(e) {
return this.rawItems().some(function(t) {
return "d" == t[0] && t[1] == e.toString();
});
}, t.prototype.hasFolderRecursively = function(e) {
return !!this.hasFolder(e) || this.items().some(function(r) {
return r instanceof t && r.hasFolderRecursively(e);
});
}, t.prototype.unreadPosts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
e = [], t = 0, r = this.items(), o.label = 1;

case 1:
return t < r.length ? (n = r[t], [ 4, n.unreadPosts() ]) : [ 3, 4 ];

case 2:
s = o.sent(), e = e.concat(s), o.label = 3;

case 3:
return t++, [ 3, 1 ];

case 4:
return [ 2, e ];
}
});
});
}, t.prototype.countUnread = function() {
var e = this.allFeeds(), t = 0;
return e.forEach(function(e) {
t += e.countUnread();
}), t;
}, t.prototype.starredPosts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
e = [], t = 0, r = this.items(), o.label = 1;

case 1:
return t < r.length ? (n = r[t], [ 4, n.starredPosts() ]) : [ 3, 4 ];

case 2:
s = o.sent(), e = e.concat(s), o.label = 3;

case 3:
return t++, [ 3, 1 ];

case 4:
return [ 2, e ];
}
});
});
}, t.prototype.countItems = function() {
var e = 0;
return this.items().forEach(function(t) {
t instanceof n.default ? e++ : e += t.countItems();
}), e;
}, t.prototype.isEmpty = function() {
return 0 === this.rawItems().length;
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e = 0, t = this.items(), n.label = 1;

case 1:
return e < t.length ? (r = t[e], [ 4, r.markAllAsRead() ]) : [ 3, 4 ];

case 2:
n.sent(), n.label = 3;

case 3:
return e++, [ 3, 1 ];

case 4:
return this.app.events.send("folder:updated", {
folder: this.id
}), [ 2 ];
}
});
});
}, t.prototype.setOrderFromArray = function(e) {
this.orderstring = e.map(function(e) {
return e instanceof n.default ? "f:" + e.id : "d:" + e.id;
}).join(",");
}, t.prototype.getParent = function() {
return this.id ? this.app.user.structure.folderWithFolder(this.id) : void 0;
}, t.prototype.getFeeds = function() {
var e = [];
return this.items().forEach(function(t) {
t instanceof n.default && e.push(t);
}), e;
}, t.prototype.getFolders = function() {
var e = [];
return this.items().forEach(function(r) {
r instanceof t && e.push(r);
}), e;
}, t.prototype.getFeed = function(e) {
return this.structure ? this.structure.feed(e) : this.app.user.feed(e);
}, t.prototype.getFolder = function(e) {
return this.structure ? this.structure.folder(e) : this.app.user.structure.folder(e);
}, t.prototype.getStructure = function() {
for (var e = [ this ], t = this; t = t.getParent(); ) e.push(t);
return e;
}, t.prototype.feedBy = function(e, t) {
var r;
return this.items().forEach(function(s) {
s instanceof n.default && s[e] === t && (r = s);
}), r;
}, t.prototype.folderBy = function(e, r) {
var n;
return this.items().forEach(function(s) {
s instanceof t && s[e] === r && (n = s);
}), n;
}, t.prototype.toContainer = function() {
var e = new s.default(this.app);
return e.pushFolder("Feeds"), this.forEachItem(function t(r) {
r instanceof n.default ? e.addFeed(r) : (e.pushFolder(r.name), r.forEachItem(t), 
e.popFolder());
}), e;
}, t.schema = {
name: {
type: "text"
},
orderstring: {
type: "text",
standard: ""
},
standard: {
type: "int",
standard: 0
},
meta: {
type: "text",
mandatory: !1
}
}, t;
}(r.default), e("default", o);
}
};
}), System.register("backend/userstructure", [ "backend/model/folder", "backend/model/feed" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e(e) {
this.FAILED = !1, this.app = e, this.folders = {}, this.base = !1;
}
return e.prototype.install = function() {
return this.reloadFolders();
}, e.prototype.addStandard = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e = new r.default({}, this.app), e.standard = 1, e.name = "Feeds", this.base = e, 
[ 4, e.save() ];

case 1:
if (t.sent(), !e.id) throw new Error("Could not add standard folder.");
return this.folders[e.id] = e, [ 2 ];
}
});
});
}, e.prototype.reloadFoldersHard = function() {
return this.folders = {}, this.base = !1, this.reloadFolders();
}, e.prototype.reloadFolders = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.folderMapper.find({}) ];

case 1:
return e = t.sent(), [ 4, this.setFolders(e) ];

case 2:
return t.sent(), [ 2 ];
}
});
});
}, e.prototype.setFolders = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t = this;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return !e.results || e.meta.error ? (this.FAILED = !0, [ 2 ]) : (this.FAILED = !1, 
e.results.forEach(function(e) {
e.standard && (t.base ? (t.base.copyPropertiesFrom(e), e = t.base) : t.base = e), 
e.id && (t.folders[e.id] ? t.folders[e.id].copyPropertiesFrom(e) : t.folders[e.id] = e);
}), this.base ? [ 3, 2 ] : [ 4, this.addStandard() ]);

case 1:
return [ 2, r.sent() ];

case 2:
return [ 2 ];
}
});
});
}, e.prototype.folder = function(e) {
return this.folders[e] || !1;
}, e.prototype.save = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e = 0, t = this.getFolders(), n.label = 1;

case 1:
return e < t.length ? (r = t[e], [ 4, this.app.folderMapper.save(r) ]) : [ 3, 4 ];

case 2:
n.sent(), n.label = 3;

case 3:
return e++, [ 3, 1 ];

case 4:
return [ 4, this.reloadFolders() ];

case 5:
return n.sent(), [ 2 ];
}
});
});
}, e.prototype.addFeedToFolder = function(e, t) {
var r = this.folder(t);
r && (r.addFeed(e), this.app.events.send("folder:updated", {
folder: r.id
}));
}, e.prototype.addFolderToFolder = function(e, t) {
var r = (this.folder(e), this.folder(t));
r && (r.addFolder(e), this.app.events.send("folder:updated", {
folder: r.id
}));
}, e.prototype.addNewFolderToFolder = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var n, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return n = new r.default({}, this.app), (n.name = e, s = this.folder(t) || this.base) ? (o = s, 
[ 4, n.save() ]) : [ 2, Promise.reject("Could not find folder.") ];

case 1:
if (i.sent(), !n.id) throw new Error("Could not add new folder.");
return o.addFolder(n.id), this.app.events.send("folder:updated", {
folder: o.id
}), [ 4, o.save() ];

case 2:
return i.sent(), [ 4, this.reloadFolders() ];

case 3:
return i.sent(), [ 4, this.folder(n.id) ];

case 4:
return i.sent(), [ 2, n ];
}
});
});
}, e.prototype.findByParentAndName = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var n, s, o, i;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return (n = this.folder(e)) ? (s = n, o = !1, this.forEachFolder(function(e) {
e.name == t && e.id && s.hasFolder(e.id) && (o = e);
}), o ? [ 2, o ] : [ 3, 1 ]) : [ 2, Promise.reject("Could not find folder") ];

case 1:
return i = new r.default({}, this.app), i.name = t, [ 4, i.save() ];

case 2:
if (a.sent(), !i.id) throw new Error("Could not create folder.");
return this.folders[i.id] = i, this.app.events.send("folder:updated", {
folder: i.id
}), [ 2, i ];
}
});
});
}, e.prototype.removeFolder = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.folderMapper.remove(e) ];

case 1:
return t.sent(), [ 4, this.removeReferenceOfFolder(e) ];

case 2:
return t.sent(), [ 4, this.removeChildren(e) ];

case 3:
return t.sent(), this.app.store.deleteObject(e), [ 2 ];
}
});
});
}, e.prototype.removeFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
t = this.foldersWithFeed(e), r = 0, n = t, o.label = 1;

case 1:
return r < n.length ? (s = n[r], s.removeFeed(e), this.app.events.send("folder:updated", {
folder: s.id
}), [ 4, s.save() ]) : [ 3, 4 ];

case 2:
o.sent(), o.label = 3;

case 3:
return r++, [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
}, e.prototype.removeReferenceOfFolder = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
if (!e.id) return [ 2 ];
t = 0, r = this.getFolders(), s.label = 1;

case 1:
return t < r.length ? (n = r[t], n.hasFolder(e.id) ? (n.removeFolder(e.id), [ 4, n.save() ]) : [ 3, 3 ]) : [ 3, 4 ];

case 2:
s.sent(), s.label = 3;

case 3:
return t++, [ 3, 1 ];

case 4:
return delete this.folders[e.id], [ 2 ];
}
});
});
}, e.prototype.removeChildren = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
t = 0, r = e.items(), o.label = 1;

case 1:
return t < r.length ? (s = r[t], s instanceof n.default ? s.id ? [ 4, this.app.user.removeFeedIfNotInCategories(s.id) ] : [ 3, 3 ] : [ 3, 4 ]) : [ 3, 7 ];

case 2:
o.sent(), o.label = 3;

case 3:
return [ 3, 6 ];

case 4:
return [ 4, this.removeFolder(s) ];

case 5:
o.sent(), o.label = 6;

case 6:
return t++, [ 3, 1 ];

case 7:
return [ 2 ];
}
});
});
}, e.prototype.forEachFolder = function(e) {
for (var t in this.folders) this.folders.hasOwnProperty(t) && e(this.folders[t]);
}, e.prototype.getFolders = function() {
var e = this;
return Object.keys(this.folders).map(function(t) {
return e.folders[t];
});
}, e.prototype.foldersWithFeed = function(e) {
var t = [];
return this.forEachFolder(function(r) {
r.hasFeed(e) && t.push(r);
}), !t.length && this.base && t.push(this.base), t;
}, e.prototype.foldersWithFolder = function(e) {
var t = [];
return this.forEachFolder(function(r) {
r.hasFolder(e) && t.push(r);
}), !t.length && this.base && t.push(this.base), t;
}, e.prototype.feedInFolder = function(e) {
var t = this.foldersWithFeed(e);
return t.length > 1 || t[0].hasFeed(e);
}, e.prototype.folderWithFolder = function(e) {
var t = this.folder(e);
if (t && !t.standard) {
for (var r in this.folders) if (this.folders.hasOwnProperty(r) && this.folders[r].hasFolder(e)) return this.folders[r];
return this.base || void 0;
}
}, e.prototype.tryToMoveFeedToFolder = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
if (r = [], !(n = this.folder(t))) return [ 3, 6 ];
s = this.foldersWithFeed(e), o = 0, i = s, u.label = 1;

case 1:
return o < i.length ? (a = i[o], a.id && a.id.toString() === t.toString() ? [ 3, 3 ] : (a.removeFeed(e), 
[ 4, a.save() ])) : [ 3, 4 ];

case 2:
u.sent(), r.push(a), u.label = 3;

case 3:
return o++, [ 3, 1 ];

case 4:
return n.hasFeed(e) ? [ 3, 6 ] : (n.addFeed(e), [ 4, n.save() ]);

case 5:
u.sent(), r.push(n), u.label = 6;

case 6:
return [ 2, r ];
}
});
});
}, e.prototype.tryToMoveFolderToFolder = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
if (r = [], !(n = this.folder(t))) return [ 3, 6 ];
s = this.foldersWithFolder(e), o = 0, i = s, u.label = 1;

case 1:
return o < i.length ? (a = i[o], a.id && a.id.toString() === t.toString() ? [ 3, 3 ] : (a.removeFolder(e), 
[ 4, a.save() ])) : [ 3, 4 ];

case 2:
u.sent(), r.push(a), u.label = 3;

case 3:
return o++, [ 3, 1 ];

case 4:
return n.hasFolder(e) ? [ 3, 6 ] : (n.addFolder(e), [ 4, n.save() ]);

case 5:
u.sent(), r.push(n), u.label = 6;

case 6:
return [ 2, r ];
}
});
});
}, e;
}(), e("default", s);
}
};
}), System.register("backend/model/FeedOnlyUnread", [ "backend/model/feed", "backend/config" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t(t, r) {
var s = e.call(this, t, r) || this;
return s.isMagic = !0, s.title = "All unread", s.favicon = n.default.defaultFavicon(), 
s.feedTypeId = "unread", s;
}
return __extends(t, e), t.prototype.displayOptions = function() {
return this.app.user.preferences.get("display:unread") || this.defaultDisplayOptions();
}, t.prototype.defaultDisplayOptions = function() {
return {
filters: [ "unread" ]
};
}, t.prototype.findConditions = function() {
return {
_hint: {
index: [ "published" ]
}
};
}, t.prototype.markAllAsRead = function() {
return this.app.user.unreads.clearAll();
}, t.prototype.countUnread = function() {
return this.app.user.unreads.countStored();
}, t.prototype.changeSortOrder = function(e) {
this.app.user.preferences.set("specialSortOrder", e);
}, t.prototype.persistDisplaySettings = function(e) {
this.app.user.preferences.set("display:unread", e);
}, t.prototype.getSortOrder = function() {
return this.app.user.preferences.get("specialSortOrder");
}, t.prototype.matchesPost = function(e) {
return !0;
}, t.prototype.save = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, !0 ];
});
});
}, t;
}(r.default), e("default", s);
}
};
}), System.register("backend/userunreads", [ "backend/model/FeedOnlyUnread", "backend/config", "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function() {
function e(e) {
this._forceCount = !1, this._inCount = !1, this.app = e, this.unreadCounts = {}, 
this._pendingCounts = [];
}
return e.prototype.unreadsAndFeedsMatch = function() {
var e = this, t = {}, r = Object.keys(this.unreadCounts);
return !this.app.store.feeds().some(function(r) {
return t[r.id || ""] = !0, void 0 === e.unreadCounts[r.id || ""];
}) && !r.some(function(e) {
return t[e || ""] = !0, void 0 === t[e || ""];
});
}, e.prototype.count = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n, s, o, i, a, u = this;
return __generator(this, function(c) {
switch (c.label) {
case 0:
if (this._inCount) return [ 2, new Promise(function(e, t) {
u._pendingCounts.push(function(t) {
e(t);
});
}) ];
if (!this._forceCount && this.unreadsAndFeedsMatch()) return [ 2, this.countStored() ];
this._inCount = !0, e = 0, c.label = 1;

case 1:
return c.trys.push([ 1, 3, , 4 ]), e = this.countStored(), t = this._forceCount, 
[ 4, this.app.sync.loadUnreadCounts() ];

case 2:
if (r = c.sent()) {
this._forceCount = !1, n = {}, this.app.user.forEachFeed(function(e) {
e.id && (n[e.id] = 0);
}), s = {};
for (o in r) s[o] = r[o].unread;
for (i in s) s.hasOwnProperty(i) && this.app.user.feed(i) && (n[i] = s[i]);
this.unreadCounts = n, e = this.countStored(), this.app.events.send("feeds:recount", {
total: e,
manual: !1
});
}
return [ 3, 4 ];

case 3:
return a = c.sent(), console.error("Error on count"), console.error(a), [ 3, 4 ];

case 4:
return this._inCount = !1, this._pendingCounts.forEach(function(t) {
try {
t(e);
} catch (e) {
console.error("[userunreads] ERROR Calling callback", e);
}
}), this._pendingCounts = [], [ 2, e ];
}
});
});
}, e.prototype.forceCount = function() {
return this._forceCount = !0, this.count();
}, e.prototype.countStored = function() {
var e = this.maxUnreads(), t = 0, r = this._forceCount && this.lastUnreads ? this.lastUnreads : this.unreadCounts;
for (var n in r) r.hasOwnProperty(n) && (t += Math.min(r[n], e));
return t;
}, e.prototype.updateForFeed = function(e, t, r) {
this.unreadCounts[e] = Math.max(t, 0), this.app.events.send("feeds:recount", {
total: this.countStored(),
updatedPosts: r.updatedPosts,
clearedFeeds: r.clearedFeeds,
manual: r.manual
});
}, e.prototype.incrementForFeed = function(e, t, r) {
this.updateForFeed(e, (this.unreadCounts[e] || 0) + t, r);
}, e.prototype.hasCachedForFeed = function(e) {
return "number" == typeof this.unreadCounts[e] && this.unreadCounts[e] < 0 && delete this.unreadCounts[e], 
"number" == typeof this.unreadCounts[e] && this.unreadCounts[e] >= 0;
}, e.prototype.forFeed = function(e) {
return this.unreadCounts[e];
}, e.prototype.clearCache = function() {
this._forceCount || (this.lastUnreads = this.unreadCounts, this.unreadCounts = {}, 
this._forceCount = !0);
}, e.prototype.zeroCache = function(e) {
void 0 === e && (e = {
manual: !1
});
for (var t in this.unreadCounts) this.unreadCounts[t] = 0;
this.app.events.send("feeds:recount", {
total: 0,
manual: e && e.manual
});
}, e.prototype.removeFeed = function(e) {
delete this.unreadCounts[e];
}, e.prototype.clearAll = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t = this;
return __generator(this, function(r) {
switch (r.label) {
case 0:
this.app.events.hold(), r.label = 1;

case 1:
return r.trys.push([ 1, , 3, 4 ]), e = [], this.app.store.posts().forEach(function(t) {
t.is_read || (t.is_read = 1, t.markValueClean({
is_read: 1
}), t.feed_id && e.push(t.feed_id));
}), e.feederUnique().forEach(function(e) {
t.app.events.send("feed:updated", {
feed: e,
manual: !0
});
}), this.zeroCache({
manual: !0
}), [ 4, this.app.sync.getActive().clearAllUnreadEverywhere() ];

case 2:
return r.sent(), [ 3, 4 ];

case 3:
return this.app.events.release(), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, e.prototype.openAll = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return "cancel" === e ? [ 2 ] : (t = [], n = new r.default({}, this.app), n.numposts = 250, 
[ 4, n.getPostIterator({
filters: [ "unread" ]
}).fetch() ]);

case 1:
switch (s = o.sent(), e) {
case "open_minimum":
s = s.slice(0, 20);
}
return this.app.ui.openMany(s), [ 2 ];
}
});
});
}, e.prototype.maxUnreads = function() {
return this.app.user.backend.isConnectedToBackend() || s.default.isOnline() ? 9999999999 : n.default.maxNumberOfUnreads;
}, e;
}(), e("default", o);
}
};
}), System.register("backend/userreview", [ "ext/ext", "backend/config" ], function(e, t) {
"use strict";
var r, n, s, o, i;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = 1 / 60 / 60 / 24 / 1e3, o = 7, i = function() {
function e(e) {
this.user = e;
}
return e.prototype.shouldSee = function() {
try {
var e = this.user.getInstalledAt() || 0, t = (Date.now() - e) * s;
return r.default.hasReviewURL() && !this.user.preferences.get("global:seenReview") && t >= o;
} catch (e) {
return console.error(e), !1;
}
}, e.prototype.markSeen = function() {
this.user.preferences.set("global:seenReview", !0);
}, e.prototype.getURL = function() {
return this.user.prepareExternalURLWithTracking(n.default.feeder.reviewURL);
}, e;
}(), e("UserReview", i);
}
};
}), System.register("library/ts/library", [], function(e, t) {
"use strict";
function r(e) {
try {
return JSON.parse(e);
} catch (e) {}
return null;
}
function n(e) {
for (var t = window.location.search.substring(1), r = t.split("&"), n = 0; n < r.length; n++) {
var s = r[n].split("=");
if (s[0] == e) return decodeURIComponent(s[1]);
}
return "";
}
function s(e, t) {
var r = new FileReader();
if (r.onload = function(e) {
t && t(e.target.result);
}, r.onerror = function(e) {
t && t(!1);
}, !e.files[0]) return void (t && t(!1));
r.readAsText(e.files[0]);
}
function o(e, t) {
var r = {};
for (var n in e) r[n] = e[n];
for (var n in t) r[n] = t[n];
return r;
}
function i() {
var e = function() {
return Math.floor(65536 * Math.random()).toString(16);
};
return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}
t && t.id;
return e("tryToParseJSON", r), e("getQueryParameter", n), e("readFileInput", s), 
e("mergeObjects", o), e("GUID", i), {
setters: [],
execute: function() {
Object.values = function(e) {
var t = [];
for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
return t;
};
}
};
}), System.register("backend/feederbackend", [ "backend/config", "library/ts/library", "library/ts/request", "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o, i;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e(e) {
this.app = e;
}
return e.prototype.isConnectedToBackend = function() {
return o.default.isOnline() || this.shouldConnectToBackend();
}, e.prototype.shouldConnectToBackend = function() {
return !!this.app.user.preferences.get("feeder:token") && (this.isPro() || this.usingNewFeedSync());
}, e.prototype.usingNewFeedSync = function() {
return "basic" == this.app.user.preferences.get("feeder:lastPlan");
}, e.prototype.isPro = function() {
return "pro" === this.app.user.preferences.get("feeder:lastPlan") || "trial_expired" === this.app.user.preferences.get("feeder:lastPlan");
}, e.prototype.switchDatabase = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e = this.app.getDatabaseWithAdapter(t), [ 4, e.connect() ];

case 1:
return r.sent(), [ 4, this.app.switchDatabase(e) ];

case 2:
return r.sent(), [ 2 ];
}
});
});
}, e.prototype.switchToAPIDatabase = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.switchDatabase("FeederAPI", "APIDatabase") ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.switchToLocalDatabase = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.switchDatabase("Feeds", this.app.getCurrentDBAdapter()) ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.checkIfIsLoggedIn = function() {
var e = this;
return new Promise(function(t, o) {
var i = !e.app.user.preferences.get("backend:hasCheckedStatus") || !e.app.user.preferences.get("feeder:token");
new s.default({
url: r.default.feeder.loginStatusURL,
method: "GET",
onComplete: function(r, s) {
var o = n.tryToParseJSON(s);
o && o.user ? (e._loggedInAs = o.user, t([ o.user, {
isFirstTime: i
} ])) : (e._loggedInAs = !1, t([ !1, {
isFirstTime: i
} ])), e.app.user.preferences.set("backend:hasCheckedStatus", !0);
},
onError: function() {
e._loggedInAs = !1, e.app.user.preferences.set("backend:hasCheckedStatus", !0), 
t([ !1, {
isFirstTime: i
} ]);
}
}).send({
get: {
client_id: e.app.user.preferences.get("client_id")
}
});
});
}, e.prototype.connectWithBackend = function(e) {
this.app.user.preferences.set("feeder:token", e), this.app.events.send("feeder:statusMightHaveChanged");
}, e;
}(), e("default", i);
}
};
}), System.register("backend/model/FeedOnlyStarred", [ "backend/model/feed", "backend/config" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t(t, r) {
var s = e.call(this, t, r) || this;
return s.isMagic = !0, s.title = "All starred", s.favicon = n.default.defaultFavicon(), 
s.feedTypeId = "starred", s;
}
return __extends(t, e), t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t = this;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e = this.app.store.posts().map(function(e) {
if (!e.id) return "nonpersisted-post";
var r = t.app.store.post(e.id);
return r && (r.is_read = 1, r.markValueClean({
is_read: 1
})), e.id;
}), [ 4, this.app.postMapper.massUpdate({
is_read: 1
}, {
id: e
}) ];

case 1:
return r.sent(), [ 2 ];
}
});
});
}, t.prototype.countUnread = function() {
return 0;
}, t.prototype.displayOptions = function() {
return this.app.user.preferences.get("display:starred") || this.defaultDisplayOptions();
}, t.prototype.defaultDisplayOptions = function() {
return {
filters: [ "starred" ]
};
}, t.prototype.findConditions = function() {
return {
_hint: {
index: [ "published" ]
}
};
}, t.prototype.changeSortOrder = function(e) {
this.app.user.preferences.set("specialSortOrder", e);
}, t.prototype.persistDisplaySettings = function(e) {
this.app.user.preferences.set("display:starred", e);
}, t.prototype.getSortOrder = function() {
return this.app.user.preferences.get("specialSortOrder");
}, t.prototype.matchesPost = function(e) {
return !0;
}, t.prototype.save = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, !0 ];
});
});
}, t;
}(r.default), e("default", s);
}
};
}), System.register("backend/model/FeedOfFolders", [ "backend/model/feed", "backend/config", "backend/model/PostCollection" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function(e) {
function t(t, r) {
var s = e.call(this, t, r) || this;
return s.isMagic = !0, s.favicon = n.default.images.folder, s;
}
return __extends(t, e), t.prototype.setFolder = function(e) {
this.folderToUse = e, this.title = e.name, this.magicId = {
type: "FeedOfFolders",
folder: e.id
};
}, t.prototype.countUnread = function() {
return this.folderToUse.countUnread();
}, t.prototype.findConditions = function() {
if ("RESTDatabase" === this.mapper.db.adapterName) return {
folder_id: this.folderToUse.id
};
var e = this.folderToUse.allFeeds().map(function(e) {
return e.id ? e.id.toString() : "0";
});
return e.length ? {
feed_id: e,
_hint: {
index: [ "feed_id", "published" ]
}
} : {
feed_id: [ -1 ],
_hint: {
index: [ "feed_id", "published" ]
}
};
}, t.prototype.displayOptions = function() {
return this.app.user.preferences.get("display:folder") || this.defaultDisplayOptions();
}, t.prototype.defaultDisplayOptions = function() {
return {
filters: []
};
}, t.prototype.changeSortOrder = function(e) {
this.app.user.preferences.set("specialSortOrder", e);
}, t.prototype.persistDisplaySettings = function(e) {
this.app.user.preferences.set("display:folder", e);
}, t.prototype.getSortOrder = function() {
return this.app.user.preferences.get("specialSortOrder");
}, t.prototype.matchesPost = function(e) {
var t = this.folderToUse.allFeeds(), r = t.map(function(e) {
return e.id ? e.id.toString() : "";
});
return !(!e.feed_id || !r.contains(e.feed_id.toString())) || !!t.find(function(t) {
return s.PostCollection.postInCollectionFeed(e, t);
});
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.folderToUse.markAllAsRead() ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.save = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, !0 ];
});
});
}, t;
}(r.default), e("default", o);
}
};
}), System.register("standard_feeds", [], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [],
execute: function() {
r = [ {
name: "Tech",
id: "tech",
htmlClass: "tech",
feeds: [ "https://techcrunch.com/feed/", "http://www.theverge.com/rss/index.xml", "https://www.reddit.com/r/technology/.rss" ]
}, {
name: "Marketing",
id: "marketing",
htmlClass: "marketing",
feeds: [ "https://www.entrepreneur.com/topic/marketing.rss", "http://blog.hubspot.com/marketing/rss.xml", "http://contentmarketinginstitute.com/feed/", "http://feeds.feedburner.com/insideintercom" ]
}, {
name: "Business",
id: "business",
htmlClass: "business",
feeds: [ "http://feeds.reuters.com/reuters/businessNews", "http://feeds2.feedburner.com/businessinsider", "http://www.nytimes.com/services/xml/rss/nyt/Business.xml" ]
}, {
name: "Food",
id: "food",
htmlClass: "food",
feeds: [ "http://feeds.feedburner.com/seriouseatsfeaturesvideos", "https://www.buzzfeed.com/tasty.xml", "https://www.reddit.com/r/AskCulinary/.rss" ]
}, {
name: "News",
id: "news",
htmlClass: "news",
feeds: [ "http://feeds.bbci.co.uk/news/rss.xml", "https://www.reddit.com/r/worldnews/top/.rss", "http://www.vox.com/rss/index.xml" ]
}, {
name: "Startups",
id: "startups",
htmlClass: "startups",
feeds: [ "http://feeds.mashable.com/Mashable", "http://feeds.feedburner.com/insideintercom", "https://m.signalvnoise.com/feed" ]
}, {
name: "Comics",
id: "comics",
htmlClass: "comics",
feeds: [ "http://xkcd.com/rss.xml", "http://feeds.feedburner.com/oatmealfeed", "http://www.smbc-comics.com/rss.php" ]
}, {
name: "Gaming",
id: "gaming",
htmlClass: "gaming",
feeds: [ "https://www.reddit.com/r/Games/top/.rss", "http://digg.com/channel/gaming.rss", "http://www.giantbomb.com/feeds/", "http://feeds.gawker.com/kotaku/full" ]
} ], e("STANDARD_FEEDS", r), n = {}, e("STANDARD_FEEDS_BY_ID", n), r.forEach(function(e) {
n[e.id] = e;
});
}
};
}), System.register("backend/model/UserMessage", [ "library/ts/request", "backend/config" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e(e) {
this.app = e;
}
return e.fromJSON = function(t, r) {
var n = new e(r);
return n.id = t.id, n.messageType = t.message_type, n.body = t.body, n.title = t.title, 
n.isAcknowledged = t.is_acknowledged, n.createdAt = t.created_at, n.callToActionLink = t.call_to_action_link, 
n.callToActionText = t.call_to_action_text, n;
}, e.prototype.acknowledge = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, s = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return this.isAcknowledged = !0, (this.app.user.updateRawUserMessage(this.id, function(e) {
return e.is_acknowledged = !0, e;
}), this.app.user.backend.isConnectedToBackend()) ? (e = new r.default({
url: n.default.feeder.api + "/user-messages/" + this.id,
method: "PATCH",
contentType: "json",
addFeederAuthorization: !0
}), [ 4, e.send({
post: {
user_message: {
is_acknowledged: this.isAcknowledged
}
}
}) ]) : (this.app.events.send("feeder:expiredChanged"), [ 2, !0 ]);

case 1:
return t = o.sent(), setTimeout(function() {
s.app.events.send("feeder:expiredChanged");
}, 50), this.app.events.send("feeder:statusMightHaveChanged"), [ 2, t.isSuccess() ];
}
});
});
}, e;
}(), e("UserMessage", s);
}
};
}), System.register("backend/user", [ "ext/ext", "backend/userpreferences", "backend/userstructure", "backend/userunreads", "backend/userreview", "backend/feederbackend", "backend/config", "backend/model/feed", "backend/model/post", "backend/model/FeedOnlyStarred", "backend/model/FeedOnlyUnread", "backend/model/FeedOfFolders", "library/ts/library", "library/ts/md5", "standard_feeds", "backend/model/UserMessage" ], function(e, t) {
"use strict";
var r, n, s, o, i, a, u, c, d, p, f, l, h, m, v, g, y, b, _;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
l = e;
}, function(e) {
h = e;
}, function(e) {
m = e;
}, function(e) {
v = e;
}, function(e) {
g = e;
} ],
execute: function() {
e("DEFAULT_CANS", y = {
consume: !1,
ads: !1,
superfast: !1,
custom_update_interval: !1
}), b = 1537524e6, _ = function() {
function e(e) {
this.proRequiresPayment = !1, this.proExpired = !1, this.FAILURE = !1, this.FAILED = !1, 
this.app = e, this.preferences = new n.default(e), this.structure = new s.default(e), 
this.unreads = new o.default(e), this.review = new i.UserReview(this), this.backend = new a.default(this.app);
}
return e.prototype.destroy = function() {}, e.prototype.install = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.backend.isConnectedToBackend() ? [ 4, this.backend.switchToAPIDatabase() ] : [ 3, 2 ];

case 1:
t.sent(), t.label = 2;

case 2:
this.createClientID(), t.label = 3;

case 3:
return t.trys.push([ 3, 6, , 7 ]), [ 4, this.reloadFeeds() ];

case 4:
return t.sent(), [ 4, this.structure.install() ];

case 5:
return t.sent(), [ 3, 7 ];

case 6:
return e = t.sent(), this.FAILED = !0, console.error("In failed state", e), [ 2 ];

case 7:
this.FAILED = !1;
try {
this.unreads.count();
} catch (e) {
console.error("Could not count initial unreads", e);
}
return this.prunePosts().then(function() {
console.log("Prune done");
}, function(e) {
console.error("Failed to prune posts. Not throwing error.", e);
}), console.log("All install steps complete"), [ 2 ];
}
});
});
}, e.prototype.createClientID = function() {
this.preferences.get("client_id") || this.preferences.set("client_id", h.GUID()), 
this.preferences.get("first_seen") || (this.preferences.set("first_seen", Date.now()), 
this.app.analytics.collectEvent("user:installed", Date.now()));
}, e.prototype.prunePosts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return r.default.isOnline() || this.backend.isConnectedToBackend() ? [ 2, Promise.resolve() ] : [ 4, this.app.feedMapper.find({}) ];

case 1:
if (e = i.sent(), !e.results) return [ 2 ];
t = 0, n = e.results, i.label = 2;

case 2:
if (!(t < n.length)) return [ 3, 7 ];
if (s = n[t], !s.id) return [ 3, 6 ];
i.label = 3;

case 3:
return i.trys.push([ 3, 5, , 6 ]), [ 4, this.app.feedMapper.prunePostsToMax(s.id, u.default.minNumberOfPosts, !0) ];

case 4:
return i.sent(), [ 3, 6 ];

case 5:
return o = i.sent(), console.error("[WARNING] Could not prune feed", s.id, o), [ 3, 6 ];

case 6:
return t++, [ 3, 2 ];

case 7:
return console.log("Pruned done."), [ 2 ];
}
});
});
}, e.prototype.getEmail = function() {
var e = this.preferences.get("feeder:email");
return "undefined" === e ? void 0 : e;
}, e.prototype.getUserKey = function() {
var e = this.getEmail(), t = this.preferences.get("client_id");
return e ? "v1:" + u.default.feeder.root.replace(/http?s:\/\//, "") + "/" + m.default.hex(e) : "v1:" + m.default.hex(t);
}, e.prototype.feed = function(e) {
return !!e && (this.app.store.feed(e) || !1);
}, e.prototype.hasFeeds = function() {
return this.app.store.feeds().length > 0;
}, e.prototype.forEachFeed = function(e) {
this.app.store.feeds().forEach(function(t) {
e(t);
});
}, e.prototype.removeFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return (t = this.feed(e)) instanceof c.default ? (r = t, r.id ? [ 4, t.deleteAllPosts() ] : (console.error("Trying to remove non-persisted feed."), 
[ 2 ])) : [ 3, 4 ];

case 1:
return n.sent(), [ 4, this.structure.removeFeed(r.id) ];

case 2:
return n.sent(), [ 4, this.app.feedMapper.remove(r) ];

case 3:
n.sent(), r.id && this.unreads.removeFeed(r.id), this.app.store.deleteObject(r), 
this.app.events.send("feed:removed", {
feed: r.id,
guid: r.guid,
feedType: r.type
}), n.label = 4;

case 4:
return [ 2 ];
}
});
});
}, e.prototype.removeFeedFromAllFolders = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
if (!(t = this.app.store.feed(e)) || !t.id) return [ 2 ];
r = 0, n = this.structure.getFolders(), o.label = 1;

case 1:
return r < n.length ? (s = n[r], s.hasFeed(t.id) ? (s.removeFeed(t.id), [ 4, s.save() ]) : [ 3, 3 ]) : [ 3, 4 ];

case 2:
o.sent(), o.label = 3;

case 3:
return r++, [ 3, 1 ];

case 4:
return [ 4, this.removeFeed(t.id) ];

case 5:
return o.sent(), [ 2 ];
}
});
});
}, e.prototype.removeFeedIfNotInCategories = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.app.user.structure.feedInFolder(e) ? [ 3, 2 ] : [ 4, this.removeFeed(e) ];

case 1:
t.sent(), t.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.unfollowFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return t = this.app.store.feedBy("path", e), t && t.id ? [ 4, this.removeFeedFromAllFolders(t.id) ] : [ 3, 2 ];

case 1:
return r.sent(), [ 2, !0 ];

case 2:
return [ 2, !0 ];
}
});
});
}, e.prototype.fixOrphanFeeds = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
for (e = !1, t = 0, r = this.app.store.feeds(); t < r.length; t++) n = r[t], n.id && (this.structure.feedInFolder(n.id) || (console.log("FIXING ORPHAN: %s:%d was oprhan", n.title, n.id), 
this.structure.base && (e = !0, this.structure.base.addFeed(n.id))));
return e && this.app.user.structure.base ? [ 4, this.app.user.structure.base.save() ] : [ 3, 2 ];

case 1:
s.sent(), s.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.createPost = function(e) {
return new d.default(e, this.app);
}, e.prototype.createFeed = function(e) {
return new c.default(e, this.app);
}, e.prototype.createFeedOnlyUnread = function() {
return new f.default({}, this.app);
}, e.prototype.createFeedOnlyStarred = function() {
return new p.default({}, this.app);
}, e.prototype.createFeedOfFolder = function(e) {
var t = new l.default({}, this.app);
return t.setFolder(e), t;
}, e.prototype.createMagicFeedFromId = function(e) {
if ("FeedOfFolders" === e.type) {
var t = this.app.store.folder(e.folder);
return !!t && this.createFeedOfFolder(t);
}
return !1;
}, e.prototype.hasFeedByPath = function(e) {
return !!this.app.store.feedBy("path", e);
}, e.prototype.hasFeed = function(e) {
return !!this.app.store.feedBy("guid", e);
}, e.prototype.shouldHaveIntercom = function() {
return this.backend.isConnectedToBackend();
}, e.prototype.moveToLocalDatabase = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.backend.switchToLocalDatabase() ];

case 1:
return e.sent(), [ 4, this.reloadDB() ];

case 2:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.moveToAPIDatabase = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.backend.switchToAPIDatabase() ];

case 1:
return e.sent(), [ 4, this.reloadDB() ];

case 2:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.reload = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.reloadFeeds() ];

case 1:
return e.sent(), [ 4, this.structure.reloadFolders() ];

case 2:
return e.sent(), [ 4, this.reloadUnreads() ];

case 3:
return e.sent(), this.app && this.app.sync ? [ 4, this.app.sync.fetchSettingsFromServer() ] : [ 3, 5 ];

case 4:
e.sent(), e.label = 5;

case 5:
return [ 2 ];
}
});
});
}, e.prototype.reloadFeeds = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.app.store.clearForFeed(), [ 4, this.app.feedMapper.find({}) ];

case 1:
return e = t.sent(), this.FAILURE = e.meta.error, this.FAILURE && console.log("feedsFetched resulted in error.", e.meta), 
[ 2 ];
}
});
});
}, e.prototype.reloadUnreads = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.unreads.clearCache(), [ 4, this.unreads.count() ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.reloadDB = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.app.store.clearCache(), this.unreads.clearCache(), [ 4, this.reloadFeeds() ];

case 1:
return e.sent(), [ 4, this.reloadUnreads() ];

case 2:
return e.sent(), [ 4, this.structure.reloadFoldersHard() ];

case 3:
return e.sent(), this.app && this.app.sync ? [ 4, this.app.sync.fetchSettingsFromServer() ] : [ 3, 5 ];

case 4:
e.sent(), e.label = 5;

case 5:
return [ 2 ];
}
});
});
}, e.prototype.loginToPro = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.sync.feederAccountManager.loginToPro(e) ];

case 1:
return [ 2, t.sent() ];
}
});
});
}, e.prototype.signupToPro = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.sync.feederAccountManager.signupToPro(e) ];

case 1:
return [ 2, t.sent() ];
}
});
});
}, e.prototype.isLoggedIn = function() {
return !!this.preferences.get("feeder:token") || r.default.isOnline();
}, e.prototype.hasChosenPlan = function() {
var e = this.preferences.get("feeder:lastPlan");
return "lite" === e || "basic" === e || "pro" === e;
}, e.prototype.isPro = function() {
return "pro" === this.preferences.get("feeder:lastPlan");
}, e.prototype.isLite = function() {
return "lite" === this.preferences.get("feeder:lastPlan");
}, e.prototype.isTrial = function() {
return !(!this.app.sync.feederAccountManager.checkResponse || !this.app.sync.feederAccountManager.checkResponse.is_trial);
}, e.prototype.trialDaysLeft = function() {
return this.app.sync.feederAccountManager.checkResponse && this.app.sync.feederAccountManager.checkResponse.days_left_on_trial ? this.app.sync.feederAccountManager.checkResponse.days_left_on_trial : 0;
}, e.prototype.getProductName = function() {
return this.app.sync.feederAccountManager.checkResponse && this.app.sync.feederAccountManager.checkResponse.product_name ? this.app.sync.feederAccountManager.checkResponse.product_name : "";
}, e.prototype.can = function(e) {
return this.app.sync.feederAccountManager.checkResponse && this.app.sync.feederAccountManager.checkResponse.cans ? this.app.sync.feederAccountManager.checkResponse.cans[e] || !1 : y[e] || !1;
}, e.prototype.canBeta = function(e) {
return !(!this.app.sync.feederAccountManager.checkResponse || !this.app.sync.feederAccountManager.checkResponse.beta) && -1 !== this.app.sync.feederAccountManager.checkResponse.beta.indexOf(e);
}, e.prototype.proHasExpired = function() {
return window.IS_EXPIRED || this.proExpired;
}, e.prototype.doesProRequirePayment = function() {
return window.REQUIRES_PAYMENT || this.proRequiresPayment;
}, e.prototype.proTrialDaysLeft = function() {
if (this.isTrial()) {
var e = this.trialDaysLeft();
return 1 == e ? e + " day" : e + " days";
}
return "";
}, e.prototype.setDidChooseToUseBasic = function(e) {
this.preferences.set("didChooseToUseBasic", e);
}, e.prototype.canPostCollections = function() {
return this.backend.isConnectedToBackend();
}, e.prototype.truncateAll = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.app.feedMapper.massDelete({}) ];

case 1:
return e.sent(), [ 4, this.app.folderMapper.massDelete({}) ];

case 2:
return e.sent(), [ 4, this.app.postMapper.massDelete({}) ];

case 3:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.addStandardFeeds = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
t = 0, r = e, u.label = 1;

case 1:
if (!(t < r.length)) return [ 3, 6 ];
n = r[t], s = (v.STANDARD_FEEDS_BY_ID[n] || []).feeds, o = 0, i = s, u.label = 2;

case 2:
return o < i.length ? (a = i[o], [ 4, this.app.feedMapper.addFeedIfNotExists({
path: a,
guid: a
}) ]) : [ 3, 5 ];

case 3:
u.sent(), u.label = 4;

case 4:
return o++, [ 3, 2 ];

case 5:
return t++, [ 3, 1 ];

case 6:
return [ 4, this.app.poller.forceUpdate() ];

case 7:
return u.sent(), [ 2 ];
}
});
});
}, e.prototype.addGetStartedFeed = function() {
return Promise.resolve();
}, e.prototype.getInstalledAt = function() {
return this.preferences.get("first_seen") || 0;
}, e.prototype.getClientId = function() {
return this.preferences.get("client_id");
}, e.prototype.prepareExternalURLWithTracking = function(e) {
return e.replace("{client_id}", this.getClientId()).replace("{installed_at}", this.getInstalledAt().toString());
}, e.prototype.hasMessage = function() {
return this.getUserMessages().length >= 1;
}, e.prototype.getUserMessages = function() {
var e = this;
if (!this.app.sync.feederAccountManager.checkResponse) return [];
try {
return this.app.sync.feederAccountManager.checkResponse.user_messages.map(function(t) {
return g.UserMessage.fromJSON(t, e.app);
}).filter(function(e) {
return !e.isAcknowledged;
});
} catch (e) {
return [];
}
}, e.prototype.updateRawUserMessage = function(e, t) {
this.app.sync.feederAccountManager.checkResponse && (this.app.sync.feederAccountManager.checkResponse.user_messages = this.app.sync.feederAccountManager.checkResponse.user_messages.map(function(r) {
return r.id === e ? t(r) : r;
}));
}, e;
}(), e("default", _);
}
};
}), System.register("library/ts/debounce", [], function(e, t) {
"use strict";
function r(e, t, r) {
void 0 === r && (r = !1);
var n;
return function() {
var s = this, o = arguments, i = function() {
n = null, r || e.apply(s, o);
}, a = r && !n;
clearTimeout(n), n = setTimeout(i, t), a && e.apply(s, o);
};
}
t && t.id;
return e("default", r), {
setters: [],
execute: function() {}
};
}), System.register("backend/appui", [ "backend/platformload", "ext/ext", "backend/config", "library/ts/debounce" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = 50, a = function() {
function e(e) {
this.app = e, this.debouncedSetBadge = o.default(this.setBadge.bind(this), i);
}
return e.prototype.startListening = function() {
this.app.events.subscribe("post:updated", this.postUpdated.bind(this), this.postUpdated), 
this.app.events.subscribe("post:added", this.postAdded.bind(this), this.postAdded), 
this.app.events.subscribe("feed:updated", this.feedUpdated.bind(this), this.feedUpdated), 
this.app.events.subscribe("feed:removed", this.feedRemoved.bind(this), this.feedRemoved), 
this.app.events.subscribe("feeds:found", this.feedsFound.bind(this), this.feedsFound), 
this.app.events.subscribe("feeds:recount", this.setBadge.bind(this), this.setBadge), 
this.app.events.subscribe("preferences:changed", this.preferencesChanged.bind(this), this.preferencesChanged);
}, e.prototype.destroy = function() {
this.app.events.unsubscribe("post:updated", this.postUpdated), this.app.events.unsubscribe("post:added", this.postAdded), 
this.app.events.unsubscribe("feed:updated", this.feedUpdated), this.app.events.unsubscribe("feed:removed", this.feedRemoved), 
this.app.events.unsubscribe("feeds:found", this.feedsFound), this.app.events.unsubscribe("feeds:recount", this.setBadge), 
this.app.events.unsubscribe("preferences:changed", this.preferencesChanged);
}, e.prototype.postUpdated = function(e) {
this.debouncedSetBadge();
}, e.prototype.postAdded = function(e) {
var t = this;
this.debouncedSetBadge();
var n = this.app.store.post(e.post);
if (n) {
var s = this.app.store.feed(e.ownerFeed || n.feed_id);
if (s) {
if (this.notificationsArePushedFromExtension()) return void (n.showNotificationAnyway = !1);
n.is_read && !n.showNotificationAnyway || (this.shouldShowNotificationsOn(s) && r.UI.Notifications.can() && r.UI.Notifications.show(s.title, n.title, {
link: function() {
t.app.analytics.collectEvent("open-post", "notification"), n.markAsRead(), r.UI.openTab(n.getLink());
},
keepAlive: this.app.user.preferences.get("global:notificationsKeepAlive")
}), (this.app.user.preferences.get("global:soundNotifications") || s.getMeta("soundNotifications")) && this.playSound()), 
n.showNotificationAnyway = !1;
}
}
}, e.prototype.playSound = function() {
this.audioElement || ("undefined" != typeof safari && safari.extension.popovers[0] ? this.audioElement = safari.extension.popovers[0].contentWindow.document.createElement("audio") : this.audioElement = document.createElement("audio"), 
this.audioElement.autoplay = !1, this.audioElement.src = n.default.assetURL("library/media/alert.mp3")), 
this.audioElement.currentTime = 0, this.audioElement.play();
}, e.prototype.feedUpdated = function(e) {
this.debouncedSetBadge();
}, e.prototype.feedRemoved = function(e) {
this.debouncedSetBadge();
}, e.prototype.setBadge = function() {
if (!n.default.isOnline()) {
if (!1 === this.app.user.preferences.get("global:showUnreadCountInBadge")) return void r.UI.setBadge("");
var e = this.app.user.unreads.countStored();
e > 999 ? r.UI.setBadge("999") : e > 0 ? r.UI.setBadge(e.toString()) : r.UI.setBadge("");
}
}, e.prototype.feedsFound = function(e) {
this.app.finder.countFeedsInTab(e.tab) ? r.UI.setBadgeIcon(s.default.icon.addFeed, e.tab) : r.UI.setBadgeIcon(s.default.icon.standard, e.tab);
}, e.prototype.preferencesChanged = function(e) {
"global:showUnreadCountInBadge" === e.key && this.debouncedSetBadge();
}, e.prototype.openManyById = function(e) {
var t = this, r = e.map(function(e) {
return t.app.store.post(e);
}).filter(function(e) {
return !!e;
});
this.openMany(r);
}, e.prototype.openMany = function(e) {
e.forEach(function(e) {
e.markAsRead();
}), e.forEach(function(e) {
r.UI.openTab(e.getLink());
});
}, e.prototype.shouldShowNotificationsOn = function(e) {
return this.app.user.preferences.get("global:notifications") || e.usenotifications;
}, e.prototype.notificationsArePushedFromExtension = function() {
return n.default.isOnline() && n.default.isExtensionInstalled();
}, e;
}(), e("default", a);
}
};
}), System.register("backend/cachestore", [ "backend/model/feed", "backend/model/folder", "backend/model/post", "backend/model/PostCollection" ], function(e, t) {
"use strict";
function r(e) {
return Object.keys(e).map(function(t) {
return e[t];
});
}
var n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
a = function() {
function e(e) {
this.app = e, this.clearCache();
}
return e.prototype.clearCache = function() {
this.store = {
feed: {},
folder: {},
post: {},
postCollection: {}
}, this.cache = {
posts: {}
};
}, e.prototype.addObject = function(e) {
var t = e.getCacheId();
if (!t) return e;
var r = this.getObjectListFor(e);
return r[t] ? (r[t].copyPropertiesFrom(e), r[t].copyDBPropertiesFrom(e)) : r[t] = e, 
e instanceof o.default && this.addPostToFeed(this.store.post[t]), r[t];
}, e.prototype.getObjectListFor = function(e) {
if (e instanceof o.default) return this.store.post;
if (e instanceof n.default) return this.store.feed;
if (e instanceof s.default) return this.store.folder;
if (e instanceof i.PostCollection) return this.store.postCollection;
throw new Error("Could not cache the object passed in");
}, e.prototype.addPostToFeed = function(e) {
e.feed_id && (this.cache.posts[e.feed_id] || (this.cache.posts[e.feed_id] = {}), 
this.cache.posts[e.feed_id][e.getCacheId()] || (this.cache.posts[e.feed_id][e.getCacheId()] = e));
}, e.prototype.deleteObject = function(e) {
delete this.getObjectListFor(e)[e.getCacheId()], e instanceof o.default && e.feed_id && (this.cache.posts[e.feed_id] = {});
}, e.prototype.clearForFeed = function() {
this.store.feed = {};
}, e.prototype.randomObjectFor = function(e) {
var t = r(e);
return t[Math.floor(Math.random() * t.length)] || !1;
}, e.prototype.randomPost = function() {
return this.randomObjectFor(this.store.post);
}, e.prototype.deleteAllPosts = function(e) {
var t = this;
this.cache.posts[e] && this.postsForFeed(e).forEach(function(e) {
t.deleteObject(e);
}), delete this.cache.posts[e];
}, e.prototype.feed = function(e) {
return e ? this.store.feed[e] : void 0;
}, e.prototype.post = function(e) {
return this.store.post[e];
}, e.prototype.folder = function(e) {
return this.store.folder[e];
}, e.prototype.folders = function() {
return r(this.store.folder);
}, e.prototype.feeds = function() {
return r(this.store.feed);
}, e.prototype.posts = function() {
return r(this.store.post);
}, e.prototype.postCollections = function() {
return r(this.store.postCollection).sort(function(e, t) {
return e.title.localeCompare(t.title);
});
}, e.prototype.clearPostCollections = function() {
this.store.postCollection = {};
}, e.prototype.postsForFeed = function(e) {
return this.cache.posts[e] ? r(this.cache.posts[e]) : [];
}, e.prototype.sortedPostsForFeed = function(e) {
var t = this, r = this.postsForFeed(e);
return r.sort(function(e, r) {
return e.published || r.published ? e.published == r.published ? 0 : e.published > r.published ? -1 : 1 : t.app.user.backend.isConnectedToBackend() ? e.created_at === r.created_at ? 0 : e.created_at > r.created_at ? -1 : 1 : e.id === r.id ? 0 : e.id && r.id && e.id > r.id ? -1 : 1;
}), r;
}, e.prototype.feedBy = function(e, t) {
for (var r, n = this.feeds(), s = 0; r = n[s]; s++) if (r[e] == t) return r;
return !1;
}, e;
}(), e("default", a);
}
};
}), System.register("backend/discovery", [ "backend/config", "library/ts/request" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = 3024e5, o = function() {
function e(e) {
var t = this;
this.plugins = [], this.app = e, this.reloadRequest = new n.default({
url: r.default.feeder.adderAPI + "/discovery/plugins?v=1",
method: "GET",
addFeederAuthorization: !0
}), this.app.events.subscribe("feeder:statusMightHaveChanged", this.statusMightHaveChanged.bind(this), this.statusMightHaveChanged), 
this.reloadTimer = setInterval(function() {
t.loadPlugins();
}, s);
}
return e.prototype.statusMightHaveChanged = function() {
this.app.user.backend.isConnectedToBackend() ? this.loadPlugins() : this.plugins = [];
}, e.prototype.loadPlugins = function() {
var e = this;
this.app.user.backend.isConnectedToBackend() && this.reloadRequest.send().then(function(t) {
var r = t.json();
r && r.site_plugins && e.setPluginsFromJSON(r.site_plugins);
});
}, e.prototype.setPluginsFromJSON = function(e) {
"object" == typeof e && "function" == typeof e.forEach && (this.plugins = e.map(function(e) {
return i.buildFromJson(e);
}));
}, e.prototype.findFeedsForURL = function(e) {
var t = [];
return this.plugins.forEach(function(r) {
var n = r.matches(e);
n && t.push(n);
}), t;
}, e;
}(), e("Discovery", o), i = function() {
function e(e, t) {
this.id = e, this.urlRegex = new RegExp(t.urlRegex), this.feedNameSelector = t.feedNameSelector, 
this.feedNameTemplate = t.feedNameTemplate, this.feedUrlSelector = t.feedUrlSelector, 
this.feedUrlTemplate = t.feedUrlTemplate, this.goToSettings = t.goToSettings;
}
return e.buildFromJson = function(t) {
return new e(t.id, {
urlRegex: t.url_regex,
feedNameSelector: t.feed_name_selector,
feedNameTemplate: t.feed_name_template,
feedUrlSelector: t.feed_url_selector,
feedUrlTemplate: t.feed_url_template,
goToSettings: t.go_to_settings
});
}, e.prototype.matches = function(e) {
if (this.urlRegex.test(e)) {
var t = new a(this);
return t.href = e, t.title = this.id, t;
}
return !1;
}, e;
}(), e("DiscoverySitePlugin", i), a = function() {
function e(e) {
this.plugin = e;
}
return e;
}(), e("DiscoverySiteMatch", a);
}
};
}), System.register("backend/feedevents", [ "backend/platformload" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e() {
this.ports = {}, this.queue = !1, this.portConnected = this.portConnected.bind(this), 
this.onMessage = this.onMessage.bind(this), r.Platform.env.onBackgroundConnect(this.portConnected), 
r.Platform.env.onMessage(this.onMessage);
}
return e.prototype.destroy = function() {
r.Platform.env.removeOnBackgroundConnect(this.portConnected), r.Platform.env.removeOnMessage(this.onMessage);
}, e.prototype.send = function(e, t, r) {
if (void 0 === r && (r = !1), t = t || {}, t.name = e, this.queue && !r) return void this.queue.push(t);
console.log("//%s", e), (this.ports[e] || []).forEach(function(e) {
e.postMessage(t);
}), (this.ports[""] || []).forEach(function(e) {
e.postMessage(t);
});
}, e.prototype.sendForced = function(e, t) {
this.send(e, t, !0);
}, e.prototype.portConnected = function(e) {
var t = this;
this.addPort(e), e.onDisconnect(function() {
return t.portDisconnected(e);
});
}, e.prototype.addPort = function(e) {
var t = e.name || "", r = this.ports[t];
r || (r = [], this.ports[t] = r), r.push(e);
}, e.prototype.portDisconnected = function(e) {
var t = e.name || "";
(this.ports[t] || []).remove(e);
}, e.prototype.onMessage = function(e, t) {
e.tab = t.tab.id, this.send(e.type, e);
}, e.prototype.subscribe = function(e, t, r) {
var n = {
name: e,
callback: t,
idObject: r,
postMessage: function(r) {
r.name === e && t(r);
}
};
return this.addPort(n), n;
}, e.prototype.unsubscribe = function(e, t) {
var r = this.ports[e] || [];
r.forEach(function(n) {
var s = n;
s.name != e || s.callback !== t && s.idObject !== t || r.remove(s);
});
}, e.prototype.hold = function() {
this.queue = [];
}, e.prototype.release = function() {
var e = this.queue;
if (this.queue = !1, e) for (var t, r = 0; t = e[r]; r++) this.send(t.name, t);
}, e.prototype.transaction = function(e) {
var t = this;
this.hold(), e(function() {
t.release();
});
}, e;
}(), e("default", n);
}
};
}), System.register("backend/feedpoller", [ "backend/config" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e) {
this.isStarted = !1, this.isInitialized = !1, this.lastForceUpdate = 0, this.app = e;
}
return e.prototype.destroy = function() {
clearInterval(this.updateInterval), clearTimeout(this.startTimeout);
}, e.prototype.startPolling = function() {
var e = this;
console.log("Waiting for %s ms before starting", r.default.onLoadPollTimeout), this.startTimeout = setTimeout(function() {
return e.start();
}, r.default.onLoadPollTimeout), this.isStarted = !1, this.isInitialized = !0;
}, e.prototype.start = function() {
this.checkUpdate(), this.isStarted = !0, this.startUpdater();
}, e.prototype.startUpdater = function() {
var e = this;
this.updateInterval = setInterval(function() {
return e.checkUpdate();
}, r.default.pollTimeout);
}, e.prototype.checkUpdate = function() {
var e = this;
console.log("=== FEED POLL CHECK UPDATE"), this.app.events.send("poller:check"), 
this.app.user.forEachFeed(function(t) {
e.checkIfFeedNeedsUpdate(t);
});
}, e.prototype.forceUpdate = function() {
var e = this;
this.lastForceUpdate = Date.now(), this.app.user.forEachFeed(function(t) {
e.app.poller.updateFeed(t, !0);
}), this.app.events.send("poller:check", {
force: !0
});
}, e.prototype.checkIfFeedNeedsUpdate = function(e) {
var t = e.updateinterval || this.app.user.preferences.get("global:updateInterval"), r = e.lastUpdated;
Date.now() - r >= t && this.updateFeed(e);
}, e.prototype.updateFeed = function(e, t) {
void 0 === t && (t = !1), this.app.events.send("feed:needsUpdate", {
feed: e.id,
force: t
});
}, e;
}(), e("default", n);
}
};
}), System.register("backend/feedparser", [ "backend/model/feed", "backend/model/post" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e(e, t) {
this.app = t, this.feed = e, this.path = e.path, this.error = !1, this.posts = [], 
this.data = {};
}
return e.prototype.getFeed = function() {
var e = new r.default({}, this.app);
return e.path = this.data.path, e.copyPropertiesFromServerData(this.data), e.lastUpdated = Date.now(), 
e.favicon = this.feed.favicon || "", e.meta = this.feed.meta || "", e.type = this.feed.type || "rss", 
e.title = this.data.title || this.data.path, e.guid = this.data.guid, e;
}, e.prototype.getPosts = function() {
var e = this;
return this.posts.map(function(t) {
return e.makePost(t);
});
}, e.prototype.makePost = function(e) {
var t = Date.now(), r = t + 864e5, s = new n.default(e, this.app);
return s.published_from_feed = e.published_from_feed, s.published = s.published_from_feed || t - e.index, 
s.published > r && (s.published = t - e.index), s.feed_id = this.feed.id || "", 
s;
}, e;
}(), e("default", s);
}
};
}), System.register("backend/parser/onlineparser", [ "backend/feedparser", "library/ts/library" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.setResult = function(e, t, r) {
return this.result = n.tryToParseJSON(t), this.result || (this.error = !0), Promise.resolve();
}, t.prototype.parse = function() {
this.error || (this.data.title = this.result.title, this.data.path = this.result.path, 
this.data.link = this.result.link, this.data.favicon = this.result.favicon, this.data.guid = this.result.guid, 
this.findPosts());
}, t.prototype.findPosts = function() {
var e = this;
this.result.posts.forEach(function(t) {
e.parsePost(t);
});
}, t.prototype.parsePost = function(e) {
this.posts.push({
title: e.title,
link: e.link,
summary: e.summary || "",
guid: e.id,
published: e.published
});
}, t;
}(r.default), e("default", s);
}
};
}), System.register("backend/parser/rssparser", [ "backend/feedparser" ], function(e, t) {
"use strict";
function r(e) {
for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
console.log.apply(console, [ e ].concat(t));
}
var n, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t(t, r) {
var n = e.call(this, t, r) || this;
return n.useSummary = !1, n.parser = new RSSParser({
path: t.path
}), n;
}
return __extends(t, e), t.prototype.setResult = function(e, t, n) {
var s = this;
return t && "function" == typeof t.trim && (t = t.trim()), r("Parsing", this.path), 
this.response = t, new Promise(function(e, r) {
s.parser.setResult(t, function() {
e();
});
});
}, t.prototype.parse = function() {
this.parser.parse(), this.parser.error ? this.tryToParseJSON() || this.setDataFromParser() : this.setDataFromParser(), 
this.response = "", this.logErrors();
}, t.prototype.tryToParseJSON = function() {
var e, t = this;
try {
e = JSON.parse(this.response);
} catch (e) {
return !1;
}
return void 0 === e.title || "object" != typeof e.items || "function" != typeof e.items.map ? (r("Was JSON but not conforming JSON feed. (Checked for title and items)"), 
!1) : (this.data = {
link: e.home_page_url,
path: this.path,
guid: this.path,
title: e.title,
favicon: e.favicon || null
}, this.posts = e.items.map(function(e, r) {
return {
title: e.title || e.content_text,
link: t.parser.resolveURL(e.url || e.id),
published_from_feed: t.parser.parseDate(e.date_published),
guid: e.id,
summary: e.content_html || e.summary || e.content_text,
index: r
};
}), !0);
}, t.prototype.setDataFromParser = function() {
this.data = this.parser.data, this.data.path = this.path, this.data.guid = this.path, 
this.error = this.parser.error, this.posts = this.parser.posts || [], this.posts = this.posts.sort(function(e, t) {
return e.published_from_feed || t.published_from_feed ? e.published_from_feed < t.published_from_feed ? 1 : e.published_from_feed > t.published_from_feed ? -1 : 0 : e.index > t.index ? 1 : e.index < t.index ? -1 : 0;
}), this.posts = this.posts.slice(0, 100);
}, t.prototype.logErrors = function() {
this.error ? r("Error parsing", this.feed.path, this.parser.errorMessage) : r("Completed parsing", this.feed.path);
}, t;
}(n.default), e("default", s);
}
};
}), System.register("backend/parser/rssloader", [ "backend/feedloader" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t;
}(r.default), e("default", n);
}
};
}), System.register("backend/parser/onlineloader", [ "backend/feedloader", "backend/config", "library/ts/request" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.load = function() {
var e = this;
return new Promise(function(t, r) {
new s.default({
url: n.default.feeder.root + "/api/feeds/" + e.feed.guid + ".json",
method: "GET",
onComplete: function(e, r, n) {
t([ e, r, n ]);
},
onError: function() {
r();
}
}).send();
});
}, t;
}(r.default), e("default", o);
}
};
}), System.register("backend/parser/all", [ "backend/parser/onlineparser", "backend/parser/rssparser", "backend/parser/rssloader", "backend/parser/onlineloader" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
e("default", {
parserForFeed: function(e, t) {
switch (e.getBackingFeedType()) {
case "rss":
return new n.default(e, t);

case "online":
return new r.default(e, t);

case "error":
default:
return new n.default(e, t);
}
},
loaderForFeed: function(e) {
switch (e.getBackingFeedType()) {
case "rss":
return new s.default(e);

case "online":
return new o.default(e);

default:
return new s.default(e);
}
},
load: function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
return r = this.loaderForFeed(e), n = this.parserForFeed(e, t), [ 4, r.load() ];

case 1:
return s = u.sent(), o = s[0], i = s[1], a = s[2], n.setResult(o, i, a), n.parse(), 
[ 2, n ];
}
});
});
}
});
}
};
}), System.register("backend/feedunreadcount", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("backend/feedupdater", [ "backend/config", "backend/parser/all", "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function() {
function e(e) {
this.app = e, this.updating = [], this.waiting = [];
}
return e.prototype.startListening = function() {
this.app.events.subscribe("feed:needsUpdate", this.eventUpdateFeed.bind(this), this.eventUpdateFeed), 
this.app.events.subscribe("poller:check", this.eventPollerCheck.bind(this), this.eventPollerCheck);
}, e.prototype.destroy = function() {
this.isDestroyed = !0, this.app.events.unsubscribe("feed:needsUpdate", this.eventUpdateFeed), 
this.app.events.unsubscribe("poller:check", this.eventPollerCheck), this.updating.forEach(function(e) {
e.abort();
});
}, e.prototype.eventPollerCheck = function(e) {
for (var t, n = 0; (t = this.waiting[n]) && n < r.default.maxConcurrentUpdates; n++) {
var s = this.app.user.feed(t);
s && this.updateFeed(s);
}
this.app.sync.supportsCheckingUnreadCounts() && e.force && this.checkUnreadCounts();
}, e.prototype.eventUpdateFeed = function(e) {
var t = this.app.user.feed(e.feed);
t && this.updateFeed(t, e.force);
}, e.prototype.updateFeed = function(e, t) {
if (void 0 === t && (t = !1), "rss" === e.type && !s.default.isOnline()) {
if (this.app.sync.feederAccountManager.isInSync) return void console.log("Ignore feed update because we are in sync!");
if (!this.updating.find(function(t) {
return t.feed === e;
})) return this.updating.length >= r.default.maxConcurrentUpdates && !t ? void (e.id && (this.waiting.contains(e.id) || this.waiting.push(e.id))) : void this.runUpdate(e);
}
}, e.prototype.runUpdate = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e.id && this.waiting.remove(e.id), [ 4, this.loadFeed(e) ];

case 1:
return t = r.sent(), t ? [ 4, this.storeResults(t) ] : [ 3, 3 ];

case 2:
r.sent(), r.label = 3;

case 3:
return [ 2 ];
}
});
});
}, e.prototype.loadFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, s, o, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
t = n.default.loaderForFeed(e), r = n.default.parserForFeed(e, this.app), this.updating.push(t), 
c.label = 1;

case 1:
return c.trys.push([ 1, 3, 4, 5 ]), [ 4, t.load() ];

case 2:
return s = c.sent(), [ 3, 5 ];

case 3:
return o = c.sent(), console.error(o), [ 2, !1 ];

case 4:
return this.updating.remove(t), [ 7 ];

case 5:
return i = s[0], a = s[1], u = s[2], r.setResult(i, a, u), r.parse(), t.isAborted ? [ 2, !1 ] : r.error ? (this.app.events.send("error", {
code: "PARSER_ERROR"
}), this.app.events.send("updater:failed", {
feed: r.feed.id
}), e.lastUpdated = Date.now(), [ 2, !1 ]) : [ 2, r ];
}
});
});
}, e.prototype.storeResults = function(e) {
if (!e) return Promise.resolve();
var t = e.feed;
t.loadFavicon(), t.lastUpdated = Date.now();
var r = e.getPosts();
return "rss" !== t.type ? Promise.resolve() : this.app.sqs.postQueue.run({
feed: t,
posts: r
});
}, e.prototype.checkUnreadCounts = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.sync.loadUnreadCounts() ];

case 1:
return e = t.sent(), e && this.checkUnreadCountsForNew(e), [ 2 ];
}
});
});
}, e.prototype.checkUnreadCountsForNew = function(e) {
for (var t in e) if (e.hasOwnProperty(t)) {
var r = this.app.user.feed(t);
r && this.checkUnreadCountAndLastUpdatedForFeed(r, e[t].last_updated, e[t].unread);
}
}, e.prototype.checkUnreadCountAndLastUpdatedForFeed = function(e, t, r) {
if (e.id) {
var n = this.app.user.unreads.forFeed(e.id);
if (this.app.user.unreads.updateForFeed(e.id, r, {
manual: !1
}), void 0 === n && this.app.events.send("feed:updated", {
feed: e.id,
manual: !1
}), void 0 === e.apiLastUpdated || void 0 === n) return e.apiLastUpdated = t, void (e.previousUnreadCount = n);
e.apiLastUpdated === t && n === r || (console.log("NEEDS UPDATE: %s # %s != %s || %s != %s", e.title, e.apiLastUpdated, t, n, r), 
e.needsUpdate = !0, e.previousUnreadCount = n, e.previousApiLastUpdated = e.apiLastUpdated, 
e.apiLastUpdated = t, this.app.events.send("feed:backendUpdated", {
feed: e.id
}));
}
}, e;
}(), e("default", o);
}
};
}), System.register("backend/feedfinder", [ "backend/config", "backend/platformload", "backend/parser/all", "backend/model/feed" ], function(e, t) {
"use strict";
var r, n, s, o, i;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e(e) {
this.app = e, this.availableFeeds = {}, "undefined" != typeof chrome && void 0 !== chrome.webNavigation && chrome.webNavigation.onHistoryStateUpdated.addListener(function(e) {
chrome.tabs.sendMessage(e.tabId, {
type: "historystatechanged"
});
});
}
return e.prototype.startListening = function() {
this.app.events.subscribe("feedsFound", this.foundInTab.bind(this), this.foundInTab), 
this.app.events.subscribe("shouldIActivateThePopup", this.shouldIActivateThePopup.bind(this), this.shouldIActivateThePopup), 
this.app.events.subscribe("parseFeedAndReturnResults", this.parseFeedAndReturnResults.bind(this), this.parseFeedAndReturnResults), 
this.app.events.subscribe("shouldSubscribe", this.shouldSubscribe.bind(this), this.shouldSubscribe), 
this.app.events.subscribe("disableContentHelper", this.shouldDisableContentHelper.bind(this), this.shouldDisableContentHelper), 
this.boundTabClosed = this.tabClosed.bind(this), n.UI.onTabRemoved(this.boundTabClosed);
}, e.prototype.destroy = function() {
this.app.events.unsubscribe("feedsFound", this.foundInTab), this.app.events.unsubscribe("shouldIActivateThePopup", this.shouldIActivateThePopup), 
this.app.events.unsubscribe("parseFeedAndReturnResults", this.parseFeedAndReturnResults), 
this.app.events.unsubscribe("shouldSubscribe", this.shouldSubscribe), this.app.events.unsubscribe("disableContentHelper", this.shouldDisableContentHelper), 
n.UI.removeOnTabRemoved(this.boundTabClosed);
}, e.prototype.foundInTab = function(e) {
var t = e.feeds;
if (e.url && !e.withPlugins) {
var r = this.app.discovery.findFeedsForURL(e.url);
r.length && n.Platform.env.sendMessageToTab(e.tab, "checkwithplugins", {
plugins: r
});
}
this.availableFeeds[e.tab] = t, this.app.events.send("feeds:found", {
tab: e.tab
});
}, e.prototype.countFeedsInTab = function(e) {
return this.availableFeeds[e] ? this.availableFeeds[e].length : 0;
}, e.prototype.tabClosed = function(e) {
delete this.availableFeeds[e];
}, e.prototype.parseFeedAndReturnResults = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, i, a, u, c, d, p, f;
return __generator(this, function(l) {
switch (l.label) {
case 0:
return t = e.path, r = e.tab, i = new o.default({}, this.app), i.path = t, i.type = "rss", 
a = s.default.loaderForFeed(i), u = s.default.parserForFeed(i, this.app), [ 4, a.load() ];

case 1:
return c = l.sent(), d = c[0], p = c[1], f = c[2], u.setResult(d, p, f), u.parse(), 
n.Platform.env.sendMessageToTab(e.tab, "parsedFeedReturn", {
feed: u.getFeed().getValues(),
posts: u.getPosts().map(function(e) {
return e.getValues();
}),
following: !!this.app.store.feedBy("guid", t)
}), [ 2 ];
}
});
});
}, e.prototype.shouldIActivateThePopup = function(e) {
this.app.user.preferences.get("global:disableContentHelper") || n.Platform.env.sendMessageToTab(e.tab, "yesYouShouldActivateThePopup", {
hasAskedToShowContentHelper: this.app.user.preferences.get("global:hasAskedToShowContentHelper")
});
}, e.prototype.shouldSubscribe = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, s, o, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
return t = e.path, s = e.tab, o = this.app.discovery.findFeedsForURL(t), o.length && (i = o.find(function(e) {
return e.plugin.goToSettings;
})) ? (a = r.default.feeder.addFeedWithPlugin.replace("{plugin}", i.plugin.id).replace("{query}", encodeURIComponent(t)), 
n.UI.tabChangeURL(e.tab, a), [ 2 ]) : [ 4, this.app.feedMapper.addFeedIfNotExists(t) ];

case 1:
return u = c.sent(), n.Platform.env.sendMessageToTab(e.tab, "subscribedWorked", {
success: !u.errors
}), [ 2 ];
}
});
});
}, e.prototype.shouldDisableContentHelper = function(e) {
e.value && this.app.user.preferences.set("global:disableContentHelper", !0), this.app.user.preferences.set("global:hasAskedToShowContentHelper", !0);
}, e;
}(), e("default", i);
}
};
}), System.register("backend/mapper/feedmapper", [ "backend/orm/mapper", "backend/model/feed" ], function(e, t) {
"use strict";
function r(e, t, r) {
return {
feed: e,
errors: t,
errorCode: r
};
}
function n(e) {
return {
feed: e,
errors: !1,
errorCode: !1
};
}
var s, o, i;
t && t.id;
return e("failedAddFeed", r), e("successAddFeed", n), {
setters: [ function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.table = "feeds", t.model = "Feed", t;
}
return __extends(t, e), t.prototype.addFeedIfNotExistsWithoutFolder = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e.noFolderOnAdd = !0, [ 4, this.addFeedIfNotExists(e) ];

case 1:
return [ 2, t.sent() ];
}
});
});
}, t.prototype.addFeedIfNotExists = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return t = e, ("string" == typeof e && (t = {
path: e,
guid: e
}), r = this.app.store.feedBy("guid", t.guid)) ? (t.id = r.id, t.title === r.title ? [ 3, 2 ] : (r.title = t.title, 
[ 4, r.save() ])) : [ 3, 3 ];

case 1:
return o.sent(), [ 2, n(r) ];

case 2:
return [ 2, n(r) ];

case 3:
return [ 4, this.addFeed(t) ];

case 4:
return s = o.sent(), s.feed && (t.id = s.feed.id), [ 2, s ];
}
});
});
}, t.prototype.addFeed = function(e) {
return void 0 === e && (e = {}), __awaiter(this, void 0, void 0, function() {
var t, s, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
return e.path || console.error("No path provided."), e instanceof o.default ? (t = e, 
t.path && (t.guid = t.path)) : t = new o.default(e, this.app), t.setFromDB(e), delete t.id, 
s = {
noFolderOnAdd: e.noFolderOnAdd,
markPostsAsUnread: !0 === e.markPostsAsUnread,
title: e.title,
folderId: e.folderId
}, [ 4, this.app.sync.processFeed(t) ];

case 1:
return (i = c.sent()) && i.errors ? [ 2, i ] : (i && i.feed && (t = i.feed), [ 4, this.loadAndStoreFeed(s, t) ]);

case 2:
return a = c.sent(), a.errors ? [ 2, a ] : [ 4, this.addFeedToStructure(s, t) ];

case 3:
return u = c.sent(), u ? (this.app.events.send("feed:added", {
feed: u.id
}), u.forceReloadFavicon(), [ 2, n(u) ]) : [ 2, r(!1, {
feed: "Could not add feed to structure"
}, "internal_server_error") ];
}
});
});
}, t.prototype.loadAndStoreFeed = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var s, o, i, a, u, c;
return __generator(this, function(d) {
switch (d.label) {
case 0:
return [ 4, this.app.updater.loadFeed(t) ];

case 1:
if (!(s = d.sent())) return t.error = !0, [ 2, r(t, {
feed: "Could not parse feed"
}, "parse_error") ];
o = this.createFeedFromParser(s, e), i = o[0], a = o[1], i && t.copyPropertiesFrom(i), 
e.title && (t.title = e.title), d.label = 2;

case 2:
return d.trys.push([ 2, 4, , 5 ]), [ 4, this.app.sqs.feedQueue.run({
feed: t,
posts: a
}) ];

case 3:
return u = d.sent(), u.success ? [ 2, n(t) ] : [ 2, r(t, u.errors || {
feed: "Unknown error"
}, u.errorCode) ];

case 4:
return c = d.sent(), console.error(c), t.error = !0, [ 2, r(t, {
feed: "Could not save feed with posts."
}, "database_create_error") ];

case 5:
return [ 2 ];
}
});
});
}, t.prototype.createFeedFromParser = function(e, t) {
var r = e.getFeed(), n = e.getPosts();
return n.forEach(function(e) {
t.markPostsAsUnread ? e.is_read = 0 : e.is_read = 1;
}), [ r, n ];
}, t.prototype.addFeedToStructure = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return e.noFolderOnAdd ? [ 2, t ] : t.id ? (r = this.app.store.folder(e.folderId), 
!r && this.app.user.structure.base && (r = this.app.user.structure.base), r ? (r.addFeed(t.id), 
[ 4, r.save() ]) : [ 3, 2 ]) : [ 3, 3 ];

case 1:
n.sent(), n.label = 2;

case 2:
return [ 2, t ];

case 3:
return [ 2, !1 ];
}
});
});
}, t.prototype.getPruneSort = function() {
return "WebSQLDatabase" === this.db.adapterName ? [ "id desc" ] : [ "published desc" ];
}, t.prototype.prunePostsToMax = function(e, t, r) {
return __awaiter(this, void 0, void 0, function() {
var n, s, o, i, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
return console.log("Pruning %d to %d", e, t), n = 0, [ 4, this.app.postMapper.find({
feed_id: e
}, {
by: this.getPruneSort()
}) ];

case 1:
if (s = u.sent(), !s.results) return [ 2 ];
if (!r && s.results.length < t) return [ 2 ];
o = {}, i = [], s.results.forEach(function(e) {
if (e.id) {
if (e.is_starred) return n += 1, void (e.mega_guid && (o[e.mega_guid] = !0));
n > t || e.mega_guid && o[e.mega_guid] ? i.push(e.id) : n += 1, e.mega_guid && (o[e.mega_guid] = !0);
}
}), u.label = 2;

case 2:
return i.length > 0 ? (a = i.splice(0, 100), [ 4, this.app.postMapper.massDelete({
id: a
}) ]) : [ 3, 4 ];

case 3:
return u.sent(), [ 3, 2 ];

case 4:
return [ 2 ];
}
});
});
}, t;
}(s.default), e("default", i);
}
};
}), System.register("backend/sync/syncer", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e) {
this.FAILURE = !1, this.app = e;
}
return e.prototype.startListening = function() {
this.app.events.subscribe("preferences:changed", this.preferencesChanged.bind(this), this.preferencesChanged);
}, e.prototype.destroy = function() {
this.app.events.unsubscribe("preferences:changed", this.preferencesChanged);
}, e.prototype.failedInit = function() {
console.log("Syncer did fail: failedInit"), this.FAILURE = !0;
}, e.prototype.succeededInit = function() {
this.FAILURE = !1;
}, e;
}(), e("default", r);
}
};
}), System.register("backend/feedunreadcontainer", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e() {
this.feeds = {};
}
return e.prototype.addPostFor = function(e, t) {
this.feeds[e.path] || (this.feeds[e.path] = []), this.feeds[e.path].push({
title: t.title,
link: t.link,
guid: t.guid,
is_read: t.is_read,
is_starred: t.is_starred
});
}, e.prototype.toJSON = function() {
return JSON.stringify(this.feeds);
}, e;
}(), e("default", r);
}
};
}), System.register("backend/export-import", [ "backend/feedcontainer", "backend/model/feed", "backend/feedunreadcontainer" ], function(e, t) {
"use strict";
function r(e) {
return e instanceof Array ? e : [ e ];
}
var n, s, o, i, a, u;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e() {}
return e.prototype.exportFeeds = function(e) {
return '<?xml version="1.0" encoding="UTF-8"?>' + json2xml({
opml: {
"@version": "1.0",
head: {
title: "Feeder - RSS Feed Reader"
},
body: {
outline: this.toOutlines(e)
}
}
});
}, e.prototype.toOutlines = function(e) {
var t = this, r = this.outlines;
this.outlines = [], e.forEachItem(function(e) {
t.toOutlineFromItem(e);
});
var n = this.outlines;
return this.outlines = r, n;
}, e.prototype.toOutlineFromItem = function(e) {
var t;
(t = e instanceof s.default ? this.toOutlineFromFeed(e) : this.toOutlineFromFolder(e)) && this.outlines.push(t);
}, e.prototype.toOutlineFromFeed = function(e) {
return e && e.path ? {
"@text": (e.title || e.path).encodeHTML(),
"@title": (e.title || e.path).encodeHTML(),
"@type": "rss",
"@xmlUrl": e.path.encodeHTML(),
"@htmlUrl": (e.link || "").encodeHTML(),
"@rssfr-numPosts": e.numposts,
"@rssfr-forceUpdate": e.forceupdate,
"@rssfr-favicon": (e.favicon || "").encodeHTML(),
"@rssfr-useNotifications": e.usenotifications,
"@rssfr-updateInterval": e.updateinterval
} : null;
}, e.prototype.toOutlineFromFolder = function(e) {
return e && e.name ? {
"@title": e.name.encodeHTML(),
"@text": e.name.encodeHTML(),
outline: this.toOutlines(e)
} : null;
}, e.prototype.exportUnreads = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n, s, i, a, u, c;
return __generator(this, function(d) {
switch (d.label) {
case 0:
t = new o.default(), r = 0, n = e, d.label = 1;

case 1:
return r < n.length ? (s = n[r], [ 4, s.getPostsOfInterest() ]) : [ 3, 4 ];

case 2:
for (i = d.sent(), a = 0, u = i; a < u.length; a++) c = u[a], t.addPostFor(s, c);
d.label = 3;

case 3:
return r++, [ 3, 1 ];

case 4:
return [ 2, t ];
}
});
});
}, e;
}(), e("ExportClass", i), a = function() {
function e(e) {
this.isError = !1, this.data = e;
}
return e.prototype.execute = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.feedContainer = new n.default(e), this.tryLoadOPML(), this.isError ? [ 2, !1 ] : [ 4, e.sync.importFeedContainer(this.feedContainer) ];

case 1:
return [ 2, t.sent() ];
}
});
});
}, e.prototype.tryLoadOPML = function() {
var e = new DOMParser().parseFromString(this.data, "text/xml");
if (!e) return this.isError = !0, !1;
var t = xml2json(e);
return t && t.body && t.body.outline ? (this.convertOPML(t), !0) : (this.isError = !0, 
!1);
}, e.prototype.convertOPML = function(e) {
this.outlineToFolder({
"@title": "Feeds",
outline: e.body.outline
});
}, e.prototype.outlineToFolder = function(e) {
var t = this, n = this.feedContainer.pushFolder(e["@title"] || e["@text"]);
if (!e.outline) return this.feedContainer.popFolder(), !1;
r(e.outline).map(function(e) {
return t.outlineToItem(e);
}).filter(function(e) {
return !!e;
});
return this.feedContainer.popFolder(), n;
}, e.prototype.outlineToItem = function(e) {
return e["@xmlurl"] ? this.outlineToFeed(e) : !(!e["@title"] && !e["@text"]) && this.outlineToFolder(e);
}, e.prototype.outlineToFeed = function(e) {
return this.feedContainer.addFeed({
path: e["@xmlurl"],
guid: e["@xmlurl"],
link: e["@htmlurl"],
title: e["@title"] || e["@text"] || e["@htmlurl"] || e["@xmlurl"],
favicon: e["@rssfr-favicon"],
numPosts: e["@rssfr-numposts"],
forceUpdate: e["@rssfr-forceupdate"],
useNotifications: e["@rssfr-usenotifications"]
});
}, e;
}(), e("Import", a), u = new i(), e("Export", u);
}
};
}), System.register("backend/parser/parserstore", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e) {
this.app = e;
}
return e.prototype.destroy = function() {}, e;
}(), e("default", r);
}
};
}), System.register("backend/sync/backendsyncer", [ "backend/sync/syncer", "ext/ext", "library/ts/request", "library/ts/library", "backend/config", "backend/export-import", "library/ts/debounce", "backend/mapper/feedmapper" ], function(e, t) {
"use strict";
function r(e) {
return e >= 200 && e <= 299;
}
var n, s, o, i, a, u, c, d, p;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
} ],
execute: function() {
p = function(e) {
function t(t) {
var r = e.call(this, t) || this;
return r.timesFailed = {}, r.updateBecauseUnreadsMisMatch = !1, r.dirtyPreferences = {}, 
r.debouncedSyncPreferences = c.default(function() {
return r.flushPreferences();
}, 500), r;
}
return __extends(t, e), t.path = function(e) {
return a.default.feeder.root + e;
}, t.prototype.startListening = function() {
e.prototype.startListening.call(this), this.app.events.subscribe("feed:backendUpdated", this.eventUpdateFeed.bind(this), this.eventUpdateFeed);
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.app.events.unsubscribe("feed:backendUpdated", this.eventUpdateFeed);
}, t.prototype.isEnabled = function() {
return s.default.isOnline() || this.app.user.backend.isConnectedToBackend();
}, t.prototype.eventUpdateFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
function t(e) {
return e.created_at > n.getTime();
}
var r, n, s, o, i = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return this.isEnabled() && ((r = this.app.user.feed(e.feed)) && r.id) ? (n = new Date(r.previousApiLastUpdated), 
[ 4, r.getPostIterator({
filters: []
}).fetch() ]) : [ 2 ];

case 1:
return (s = a.sent()) ? (o = r.previousUnreadCount !== this.app.user.unreads.forFeed(r.id), 
s.forEach(function(e) {
t(e) && (e.addedSent || (o = !0, i.app.events.send("post:added", {
post: e.id
})));
}), o && this.app.events.send("feed:updated", {
feed: r.id,
manual: !1
}), [ 2 ]) : [ 2 ];
}
});
});
}, t.prototype.processFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return this.isEnabled() ? "online" === e.getBackingFeedType() ? [ 2, d.successAddFeed(e) ] : [ 4, e.mapper.save(e) ] : [ 2, null ];

case 1:
return t = n.sent(), t.meta.error ? (console.log(t, "did not indicate success. Trying locally"), 
[ 4, this.tryLocalFeed(e) ]) : [ 3, 3 ];

case 2:
return r = n.sent(), r ? [ 2, r ] : [ 2, d.failedAddFeed(e, e.errorMessages || {}, e.errorCode || "internal_server_error") ];

case 3:
return [ 2, d.successAddFeed(e) ];
}
});
});
}, t.prototype.tryLocalFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return s.default.isOnline() ? (e.error = !0, [ 2, null ]) : [ 4, this.app.updater.loadFeed(e) ];

case 1:
return t = r.sent(), t ? (e.error = !1, [ 2, d.successAddFeed(e) ]) : (e.error = !0, 
[ 2, null ]);
}
});
});
}, t.prototype.preferencesChanged = function(e) {
this.isEnabled() && -1 === [ "feeder:lastPlan" ].indexOf(e.key) && (this.dirtyPreferences[e.key] = e.value, 
this.debouncedSyncPreferences());
}, t.prototype.flushPreferences = function() {
return __awaiter(this, void 0, void 0, function() {
var e, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
if (!this.isEnabled()) return [ 2 ];
if (0 === Object.keys(this.dirtyPreferences).length) return console.log("Nothing changed, so no sync"), 
[ 2 ];
e = new o.default({
url: t.path("/api/settings.json"),
method: "POST",
addFeederAuthorization: !0
}), n.label = 1;

case 1:
return n.trys.push([ 1, 3, , 4 ]), [ 4, e.send({
post: {
settings: JSON.stringify(this.dirtyPreferences)
}
}) ];

case 2:
return n.sent(), this.dirtyPreferences = {}, [ 3, 4 ];

case 3:
return r = n.sent(), console.error("Could not sync preferences. Not clearing dirty", r), 
[ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.fetchSettingsFromServer = function() {
return __awaiter(this, void 0, void 0, function() {
var e, r, n, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return [ 4, new Promise(function(e, r) {
new o.default({
url: t.path("/api/settings.json"),
method: "GET",
onComplete: function(t, r) {
e(r);
},
onError: function() {
r();
},
addFeederAuthorization: !0
}).send();
}) ];

case 1:
if (e = a.sent(), !(r = i.tryToParseJSON(e))) return this.failedInit(), [ 2 ];
this.succeededInit();
for (n in r) r.hasOwnProperty(n) && this.app.user.preferences.setQuiet(n, r[n]);
return s = this.app.user.preferences.get("feeder:socket_token"), s && this.app.events.send("online:socketToken", {
token: s
}), [ 2 ];
}
});
});
}, t.prototype.importFeedsAndFolders = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e.base ? (t = u.Export.exportFeeds(e.base), [ 4, this.importOPML(t) ]) : [ 3, 2 ];

case 1:
return [ 2, r.sent() ];

case 2:
return [ 2, !1 ];
}
});
});
}, t.prototype.importOPML = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, new Promise(function(t, r) {
new o.default({
url: a.default.feeder.importURL,
method: "POST",
onComplete: function(e, r) {
var n = i.tryToParseJSON(r);
console.log("Sent import request", r), t(n && n.success);
},
onError: function() {
r();
},
addFeederAuthorization: !0
}).send({
post: {
opml: e
}
});
}) ];
});
});
}, t.prototype.countUnread = function() {
return new Promise(function(e, r) {
new o.default({
url: t.path("/api/unread.json"),
method: "GET",
addFeederAuthorization: !0,
onComplete: function(t, r) {
var n = i.tryToParseJSON(r);
if (n) {
for (var s in n) n.hasOwnProperty(s) && (n[s] = n[s].unread);
e(n);
} else e({});
},
onError: function() {
r();
}
}).send();
});
}, t.prototype.supportsCheckingUnreadCounts = function() {
return !0;
}, t.prototype.loadUnreadCounts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return e = new o.default({
url: t.path("/api/unread.json"),
method: "GET",
addFeederAuthorization: !0
}), [ 4, e.send() ];

case 1:
return r = s.sent(), n = r.json(), n && !n.error ? [ 3, 2 ] : [ 2, {} ];

case 2:
return [ 4, this.loadNewFeedsNotInCounts(n) ];

case 3:
return s.sent(), [ 2, n ];
}
});
});
}, t.prototype.loadNewFeedsNotInCounts = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
t = Object.keys(e).length != this.app.store.feeds().length;
for (r in e) e.hasOwnProperty(r) && (n = this.app.user.feed(r), n ? e[r].is_error && this.checkAndFixErrorFeedLocally(n) : t = !0);
return !t || this.updateBecauseUnreadsMisMatch ? [ 3, 3 ] : (this.updateBecauseUnreadsMisMatch = !0, 
[ 4, this.app.user.reloadFeeds() ]);

case 1:
return s.sent(), [ 4, this.app.user.structure.reloadFolders() ];

case 2:
return s.sent(), [ 3, 4 ];

case 3:
return this.updateBecauseUnreadsMisMatch = !1, [ 2, Promise.resolve() ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.checkAndFixErrorFeedLocally = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return s.default.isOnline() ? [ 2 ] : [ 4, this.checkErrorFeedLocally(e) ];

case 1:
return t = r.sent(), t || this.errorFeedFailed(e), console.log("Checked error feed locally", t), 
[ 2 ];
}
});
});
}, t.prototype.checkErrorFeedLocally = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return s.default.isOnline() ? [ 2, !1 ] : [ 4, this.tryLocalFeed(e) ];

case 1:
return t = r.sent(), e.error ? (console.log("Checked error feed locally. FAIL"), 
[ 2, !1 ]) : [ 3, 2 ];

case 2:
return e.type = "rss", console.log("Checked error feed locally. Success!"), [ 4, this.app.feedMapper.loadAndStoreFeed({}, e) ];

case 3:
return r.sent(), [ 2, !0 ];
}
});
});
}, t.prototype.errorFeedFailed = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e.id ? ("number" != typeof this.timesFailed[e.id] && (this.timesFailed[e.id] = 0), 
this.timesFailed[e.id] += 1, this.timesFailed[e.id] > 9 ? [ 4, this.app.adderStore.errorFeedFailed(e) ] : [ 3, 2 ]) : [ 2 ];

case 1:
t.sent(), t.label = 2;

case 2:
return [ 2 ];
}
});
});
}, t.prototype.clearAllUnread = function(e) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, i = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return r = new o.default({
method: "POST",
url: t.path("/api/mark-as-read.json"),
addFeederAuthorization: !0
}), [ 4, r.send({
post: {
feed_id: e.id
}
}) ];

case 1:
return n = a.sent(), n.isSuccess() && e.id && (s = n.json(), this.app.store.postsForFeed(e.id).forEach(function(e) {
e.markValueClean({
is_read: 1
});
}), "object" == typeof s.affected_counts && Object.keys(s.affected_counts).forEach(function(e) {
var t = s.affected_counts[e];
t.forEach(function(e) {
var t = i.app.store.post(e);
t && t.markValueClean({
is_read: 1
});
}), i.app.user.unreads.incrementForFeed(e, -t.length, {
manual: !0,
updatedPosts: t.map(function(e) {
return {
id: e,
is_read: 1
};
})
});
})), [ 2 ];
}
});
});
}, t.prototype.clearAllUnreadEverywhere = function() {
var e = this;
return new Promise(function(n, s) {
new o.default({
method: "POST",
url: t.path("/api/mark-as-read.json"),
onComplete: function(t) {
r(t) && e.app.store.posts().forEach(function(e) {
e.markValueClean({
is_read: 1
});
}), n();
},
onError: function() {
s();
},
addFeederAuthorization: !0
}).send({
post: {}
});
});
}, t;
}(n.default), e("default", p);
}
};
}), System.register("backend/feederaccountmanager", [ "backend/config", "ext/ext", "library/ts/request", "library/ts/library", "library/ts/function", "backend/platformload", "backend/export-import", "backend/sync/backendsyncer" ], function(e, t) {
"use strict";
function r(e) {
if (!e) return !1;
var t = [];
return Object.keys(e).forEach(function(r) {
var n = e[r];
if ("string" == typeof n) t.push(n); else if (n.length) for (var s = 0; s < n.length; s++) t.push(n[s]);
}), 0 !== t.length && t;
}
var n, s, o, i, a, u, c, d, p, f;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
} ],
execute: function() {
p = 216e5, f = function() {
function e(e) {
this.doMerge = !1, this.isInSync = !1, this.hasOpenedTrialExpired = !1, this.app = e;
}
return e.prototype.startListening = function() {
var e = this;
if (this.app.events.subscribe("feeder:connect", this.receivedConnectRequest.bind(this), this.receivedConnectRequest), 
this.app.events.subscribe("feeder:fetchFeeds", this.receivedFetchFeedsRequest.bind(this), this.receivedFetchFeedsRequest), 
this.app.events.subscribe("feeder:statusMightHaveChanged", this.checkToken.bind(this), this.checkToken), 
this.app.events.subscribe("feeder:didLogin", this.checkLoginStatus.bind(this), this.checkLoginStatus), 
this.checkResponse = {}, this.checkToken(), this.checkTokenTimer = setInterval(function() {
return e.checkToken();
}, p), s.default.isSafari()) {
try {
safari.extension.removeContentScripts(s.default.assetURL("content/feeder_api.js"));
} catch (e) {
console.error(e);
}
safari.extension.addContentScriptFromURL(s.default.assetURL("content/feeder_api.js"), [ "http://*.feeder.co/*", "https://*.feeder.co/*" ], [], !0);
}
}, e.prototype.destroy = function() {
this.app.events.unsubscribe("feeder:connect", this.receivedConnectRequest), this.app.events.unsubscribe("feeder:fetchFeeds", this.receivedFetchFeedsRequest), 
this.app.events.unsubscribe("feeder:statusMightHaveChanged", this.checkToken), this.app.events.unsubscribe("feeder:didLogin", this.checkLoginStatus), 
clearInterval(this.checkTokenTimer), s.default.isSafari() && safari.extension.removeContentScripts(s.default.assetURL("content/feeder_api.js"));
}, e.prototype.logOut = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return e = this.app.user.preferences.get("feeder:token"), e && (t = new o.default({
url: n.default.feeder.destroyTokenURL,
method: "POST"
}), t.send({
post: {
client_id: this.app.user.preferences.get("client_id"),
token: e
}
})), this.removeProPreferences(), [ 4, this.app.user.moveToLocalDatabase() ];

case 1:
return r.sent(), this.app.events.send("feeder:expiredChanged"), this.app.events.send("online:socketToken", {
token: null
}), [ 2 ];
}
});
});
}, e.prototype.removeProPreferences = function() {
this.app.user.preferences.remove("feeder:email"), this.app.user.preferences.remove("feeder:id"), 
this.app.user.preferences.remove("feeder:intercom_app_id"), this.app.user.preferences.remove("feeder:intercom_hash"), 
this.app.user.preferences.remove("feeder:lastPlan"), this.app.user.preferences.remove("feeder:shouldSeeDowngradeSuccessMessage"), 
this.app.user.preferences.remove("feeder:token"), this.clearStateVariables();
}, e.prototype.clearStateVariables = function() {
delete this.app.user.proExpired, this.app.user.proExpired = !1, this.app.user.proRequiresPayment = !1;
}, e.prototype.receivedConnectRequest = function(e) {
var t = this, r = e.connectURL;
this.doMerge = e.doMerge;
var n = this.app.user.preferences.get("client_id");
new o.default({
url: r,
method: "GET",
onComplete: function(r, n) {
return __awaiter(t, void 0, void 0, function() {
var t, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return t = i.tryToParseJSON(n), (r = e.tab, t && !t.error && t.token) ? (this.receivedToken(t.token, t.email), 
[ 4, this.checkToken() ]) : [ 2, alert(t.error || "Could not connect to Feeder account") ];

case 1:
return s.sent(), u.UI.tabChangeURL(r, t.redirect), [ 2 ];
}
});
});
}
}).send({
get: {
client_id: n
}
});
}, e.prototype.receivedToken = function(e, t) {
this.app.user.preferences.set("feeder:token", e), this.app.user.preferences.set("feeder:email", t);
}, e.prototype.checkToken = function() {
var e = this, t = this.app.user.preferences.get("feeder:token"), r = this.app.user.preferences.get("client_id");
return new Promise(function(i, a) {
var u = new o.default({
url: n.default.feeder.checkURL,
method: "GET",
onComplete: function(t, r) {
return __awaiter(e, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.checkedToken(t, r) ];

case 1:
return e.sent(), i(), [ 2 ];
}
});
});
},
onError: function() {
a();
}
}), c = {};
s.default.isOnline() || (c = {
token: t || "",
client_id: r
}), u.send({
get: c
});
});
}, e.prototype.checkedToken = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var e, r, n, s = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return this.clearStateVariables(), (e = i.tryToParseJSON(t)) ? (this.checkResponse = e || {}, 
r = this.app.user.preferences.get("feeder:lastPlan") || "none", e && e.requires_payment && (this.app.user.proRequiresPayment = !0), 
n = !1, e && e.plan_id && (n = e.plan_id, this.app.user.preferences.set("feeder:lastPlan", n)), 
r === n ? [ 3, 2 ] : [ 4, this.didSwitchPlan(r, n) ]) : [ 2 ];

case 1:
o.sent(), o.label = 2;

case 2:
return e && (this.app.user.preferences.set("feeder:email", e.email), this.app.user.preferences.set("feeder:id", e.user_id), 
this.app.user.preferences.set("feeder:intercom_hash", e.intercom_hash), this.app.user.preferences.set("feeder:intercom_app_id", e.intercom_app_id)), 
setTimeout(function() {
s.app.events.send("feeder:expiredChanged");
}, 1), e && e.is_pro || (e && e.expired ? this.app.user.proExpired = !0 : e && e.no_pro_for_token ? console.log("Pro problem reported for user.") : e && this.app.events.send("feeder:connected")), 
this.app.user.proHasExpired() && !this.app.user.hasChosenPlan() && (this.hasOpenedTrialExpired || (this.hasOpenedTrialExpired = !0)), 
[ 2 ];
}
});
});
}, e.prototype.didSwitchPlan = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ "none", "lite" ].contains(e.toString()) && [ "pro", "basic", "trial_expired" ].contains(t.toString()) ? [ 4, this.syncFeeds() ] : [ 3, 2 ];

case 1:
r.sent(), console.log("FEEDS SYNCED!"), r.label = 2;

case 2:
return console.log("!!!!!!!!!!!!!!!! SWITCHED PLAN"), console.log(e, t), [ 2 ];
}
});
});
}, e.prototype.syncFeeds = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n, s, o, i;
return __generator(this, function(u) {
switch (u.label) {
case 0:
return (e = this.app.user.structure.base) ? [ 3, 3 ] : (this.app.events.send("sync:merge", {
status: "Starting immediate sync"
}), console.error("No base folder present"), [ 4, this.app.user.moveToAPIDatabase() ]);

case 1:
return u.sent(), this.app.events.send("sync:merge", {
status: "Reloading"
}), [ 4, this.app.user.reload() ];

case 2:
return u.sent(), this.app.events.send("sync:merge", {
status: "Done"
}), this.app.events.send("feeder:connected"), [ 2 ];

case 3:
if (this.isInSync) return console.error("Requesting sync when already in sync."), 
this.app.events.send("sync:merge", {
status: "New sync initiated while in sync?"
}), [ 2 ];
this.isInSync = !0, t = this.doMerge && this.app.user.hasFeeds(), u.label = 4;

case 4:
return u.trys.push([ 4, 17, 18, 19 ]), (console.log("[sync] Moving to API database"), 
r = void 0, t) ? (this.app.events.send("sync:merge", {
status: "Exporting local feeds"
}), r = c.Export.exportFeeds(e), console.log(r), this.app.events.send("sync:merge", {
status: "Exporting unreads"
}), [ 4, c.Export.exportUnreads(e.allFeeds()) ]) : [ 3, 6 ];

case 5:
n = u.sent(), this.unreadContainer = n, u.label = 6;

case 6:
return this.app.events.send("sync:merge", {
status: "Booting up cloud"
}), [ 4, this.app.user.moveToAPIDatabase() ];

case 7:
return u.sent(), t ? (console.log("[sync] doMerge!"), r ? (this.app.events.send("sync:merge", {
status: "Importing feeds to cloud"
}), [ 4, this.app.sync.backendSyncer.importOPML(r) ]) : [ 3, 9 ]) : [ 3, 15 ];

case 8:
return s = u.sent(), s || alert("There was a problem syncing your feeds"), [ 3, 10 ];

case 9:
console.error("No OPML to import. Nothing imported!"), u.label = 10;

case 10:
return this.app.events.send("sync:merge", {
status: "Pushing list of unreads to cloud"
}), [ 4, this.syncUnreads() ];

case 11:
return o = u.sent(), o || alert("There was a problem syncing your unreads"), this.app.events.send("sync:merge", {
status: "Waiting for a calm moment"
}), [ 4, a.sleep(500) ];

case 12:
return u.sent(), console.log("[sync] Force recount"), this.app.events.send("sync:merge", {
status: "Recounting unreads"
}), [ 4, this.app.user.unreads.forceCount() ];

case 13:
return u.sent(), this.app.events.send("sync:merge", {
status: "Reloading feeds after import"
}), [ 4, this.app.user.reload() ];

case 14:
return u.sent(), [ 3, 16 ];

case 15:
console.log("[sync] NO MERGE!"), u.label = 16;

case 16:
return console.log("[sync] isInSync: false"), this.isInSync = !1, this.app.events.send("sync:merge", {
status: "Done"
}), this.app.events.send("feeder:connected"), [ 3, 19 ];

case 17:
throw i = u.sent(), this.app.events.send("sync:merge", {
status: "Error!!! " + i.message
}), i;

case 18:
return this.isInSync = !1, [ 7 ];

case 19:
return [ 2 ];
}
});
});
}, e.prototype.syncUnreads = function() {
var e = this;
return new Promise(function(t, r) {
if (!e.unreadContainer) return !0;
var n = e.unreadContainer.toJSON();
new o.default({
method: "POST",
url: d.default.path("/api/sync-posts-of-interest.json"),
onComplete: function(e) {
t(200 == e);
},
onError: function() {
r();
},
addFeederAuthorization: !0
}).send({
post: {
feeds: n
}
});
});
}, e.prototype.getEmail = function() {
return this.app.user.preferences.get("feeder:email");
}, e.prototype.receivedFetchFeedsRequest = function(e) {
var t = this.app.user.structure.base;
if (t) {
var r = t.toContainer().toJSON();
this.app.events.send("feeder:feedsFetched", {
feeds: r
});
}
}, e.prototype.checkLoginStatus = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.app.user.backend.checkIfIsLoggedIn() ];

case 1:
return e = t.sent()[0], this.app.user.preferences.set("backend:shouldCheckStatus", !1), 
e && this.app.user.backend.connectWithBackend(e.token), [ 2 ];
}
});
});
}, e.prototype.loginToPro = function(e) {
var t = this;
return new Promise(function(n, s) {
var a = new o.default({
method: "POST",
contentType: "json",
url: d.default.path("/1/session.json"),
onComplete: function(s, o) {
return __awaiter(t, void 0, void 0, function() {
var t, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return t = i.tryToParseJSON(o) || {}, (s = t.session && t.session.token) ? (this.receivedToken(s, e.email), 
[ 4, this.checkToken() ]) : [ 3, 3 ];

case 1:
return a.sent(), [ 4, this.app.sync.fetchSettingsFromServer() ];

case 2:
return a.sent(), this.app.events.send("feeder:connected"), n([ !0, [] ]), [ 3, 4 ];

case 3:
n([ !1, r(t.session) || [ "Invalid response from server." ] ]), a.label = 4;

case 4:
return [ 2 ];
}
});
});
},
onError: function() {
s();
}
});
e.client_id = t.app.user.preferences.get("client_id"), e.from = "extension", a.send({
post: {
session: e
}
});
});
}, e.prototype.signupToPro = function(e) {
var t = this;
return new Promise(function(r, n) {
var s = new o.default({
method: "POST",
contentType: "json",
url: d.default.path("/1/user.json?from=extension"),
onComplete: function(n, s) {
return __awaiter(t, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return t = i.tryToParseJSON(s) || {}, t.session ? (this.receivedToken(t.session.token, e.email), 
[ 4, this.checkToken() ]) : [ 3, 3 ];

case 1:
return n.sent(), [ 4, this.app.sync.fetchSettingsFromServer() ];

case 2:
return n.sent(), this.app.events.send("feeder:connected"), r([ !0, [] ]), [ 3, 4 ];

case 3:
r([ !1, t && t.user ? t.user.errors : [ "Could not connect to the server" ] ]), 
n.label = 4;

case 4:
return [ 2 ];
}
});
});
},
onError: function() {
n();
}
});
e.client_id = t.app.user.preferences.get("client_id"), e.from = "extension", s.send({
post: {
user: e
}
});
});
}, e;
}(), e("default", f);
}
};
}), System.register("backend/sync/localsyncer", [ "backend/sync/syncer", "backend/model/feed", "backend/model/folder", "ext/ext", "backend/config" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
a = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.startListening = function() {
e.prototype.startListening.call(this);
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this);
}, t.prototype.isEnabled = function() {
return !o.default.isOnline() && !this.app.user.backend.isConnectedToBackend();
}, t.prototype.supportsCheckingUnreadCounts = function() {
return !1;
}, t.prototype.processFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, null ];
});
});
}, t.prototype.preferencesChanged = function(e) {}, t.prototype.flushPreferences = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.fetchSettingsFromServer = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.importFeedsAndFolders = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t = this;
return __generator(this, function(r) {
return this.currentFolder = this.app.user.structure.base || new s.default({}, this.app), 
[ 2, new Promise(function(r, n) {
t.app.events.transaction(function(n) {
return __awaiter(t, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.importFolderItems(e.base || new s.default({}, this.app)) ];

case 1:
return t.sent(), [ 4, this.app.user.structure.save() ];

case 2:
return t.sent(), n(), [ 4, this.app.events.sendForced("sync:import", {
status: "Merge done"
}) ];

case 3:
return t.sent(), r(!0), [ 2 ];
}
});
});
});
}) ];
});
});
}, t.prototype.loadUnreadCounts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r, n, s, o, a;
return __generator(this, function(u) {
switch (u.label) {
case 0:
console.log("[count] Starting costly unread count"), e = {}, t = i.default.maxNumberOfUnreads, 
r = Date.now(), n = 0, s = this.app.store.feeds(), u.label = 1;

case 1:
return n < s.length ? (o = s[n], o.id ? (e[o.id] = {
unread: 0,
is_error: !1,
last_updated: 0
}, [ 4, this.app.postMapper.count({
is_read: 0,
feed_id: o.id
}, {
by: this.app.postMapper.getPostSort()
}) ]) : [ 3, 3 ]) : [ 3, 4 ];

case 2:
a = u.sent(), e[o.id] = {
unread: a,
is_error: !1,
last_updated: 0
}, u.label = 3;

case 3:
return n++, [ 3, 1 ];

case 4:
return console.log("[count] Finished counting unreads: %s seconds", (Date.now() - r) / 1e3), 
[ 2, e ];
}
});
});
}, t.prototype.clearAllUnread = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e.id ? [ 4, this.app.postMapper.massUpdate({
is_read: 1
}, {
feed_id: e.id
}) ] : [ 3, 2 ];

case 1:
t.sent(), this.app.store.postsForFeed(e.id).forEach(function(e) {
e.is_read = 1, e.markValueClean({
is_read: 1
});
}), t.label = 2;

case 2:
return [ 2 ];
}
});
});
}, t.prototype.clearAllUnreadEverywhere = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.app.postMapper.massUpdate({
is_read: 1
}, {}) ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.importFolderItems = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
this.app.events.sendForced("sync:import", {
status: "Merging " + e.name
}), t = 0, r = e.items(), s.label = 1;

case 1:
return t < r.length ? (n = r[t], [ 4, this.importItems(n) ]) : [ 3, 4 ];

case 2:
s.sent(), s.label = 3;

case 3:
return t++, [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.importItems = function(e) {
return e instanceof n.default ? this.importFeed(e) : this.importFolder(e);
}, t.prototype.importFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return t = this.currentFolder, t.id ? (r = new n.default(e, this.app), e.type || (e.type = "rss"), 
delete r.id, this.app.events.sendForced("sync:import", {
status: "Merging feed " + e.title
}), [ 4, this.app.feedMapper.addFeedIfNotExistsWithoutFolder(r) ]) : (console.error("Can't import feed into folder without ID."), 
[ 2 ]);

case 1:
return s.sent(), console.log("Was created: %d", r.id), r.id && !t.hasFeed(r.id) ? (console.log("adding %d to %d", r.id, t.id), 
t.addFeed(r.id)) : console.log("currentFolder already had feed"), [ 2 ];
}
});
});
}, t.prototype.importFolder = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return delete e.id, this.app.events.sendForced("sync:import", {
status: "Merging folder " + e.name
}), this.currentFolder.id ? [ 4, this.app.user.structure.findByParentAndName(this.currentFolder.id, e.name) ] : [ 3, 2 ];

case 1:
return t = r.sent(), t.id && (this.currentFolder.hasFolder(t.id) || this.currentFolder.addFolder(t.id)), 
[ 2, this.importNextFolder(t, e) ];

case 2:
return [ 2 ];
}
});
});
}, t.prototype.importNextFolder = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return r = this.currentFolder, this.currentFolder = e, [ 4, this.importFolderItems(t) ];

case 1:
return n.sent(), this.currentFolder = r, [ 2 ];
}
});
});
}, t;
}(r.default), e("default", a);
}
};
}), System.register("backend/feedsync", [ "backend/feederaccountmanager", "backend/sync/backendsyncer", "backend/sync/localsyncer" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function() {
function e(e) {
this.app = e, this.syncers = [], this.feederAccountManager = new r.default(this.app), 
this.feederAccountManager.startListening(), this.backendSyncer = new n.default(this.app), 
this.backendSyncer.startListening(), this.syncers.push(this.backendSyncer), this.localSyncer = new s.default(this.app), 
this.localSyncer.startListening(), this.syncers.push(this.localSyncer);
}
return e.prototype.destroy = function() {
for (var e = 0, t = this.syncers; e < t.length; e++) {
t[e].destroy();
}
}, e.prototype.isFailedState = function() {
return this.syncers.some(function(e) {
return e.FAILURE;
});
}, e.prototype.fetchSettingsFromServer = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e = 0, t = this.syncers, n.label = 1;

case 1:
return e < t.length ? (r = t[e], r.isEnabled() ? [ 4, r.fetchSettingsFromServer() ] : [ 3, 3 ]) : [ 3, 4 ];

case 2:
n.sent(), n.label = 3;

case 3:
return e++, [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
}, e.prototype.processFeed = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
t = 0, r = this.syncers, s.label = 1;

case 1:
return t < r.length ? (n = r[t], n.isEnabled() ? [ 4, n.processFeed(e) ] : [ 3, 3 ]) : [ 3, 4 ];

case 2:
return [ 2, s.sent() ];

case 3:
return t++, [ 3, 1 ];

case 4:
return [ 2, null ];
}
});
});
}, e.prototype.getActive = function() {
return this.syncers.find(function(e) {
return e.isEnabled();
}) || this.localSyncer;
}, e.prototype.supportsCheckingUnreadCounts = function() {
return this.syncers.some(function(e) {
return e.isEnabled() && e.supportsCheckingUnreadCounts();
});
}, e.prototype.loadUnreadCounts = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e = 0, t = this.syncers, n.label = 1;

case 1:
return e < t.length ? (r = t[e], r.isEnabled() ? [ 4, r.loadUnreadCounts() ] : [ 3, 3 ]) : [ 3, 4 ];

case 2:
return [ 2, n.sent() ];

case 3:
return e++, [ 3, 1 ];

case 4:
return [ 2, !1 ];
}
});
});
}, e.prototype.importFeedContainer = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
t = 0, r = this.app.sync.syncers, s.label = 1;

case 1:
return t < r.length ? (n = r[t], n.isEnabled() ? [ 4, n.importFeedsAndFolders(e) ] : [ 3, 3 ]) : [ 3, 4 ];

case 2:
s.sent(), s.label = 3;

case 3:
return t++, [ 3, 1 ];

case 4:
return [ 2, !0 ];
}
});
});
}, e;
}(), e("default", o);
}
};
}), System.register("backend/feedernotifications", [ "backend/config", "ext/ext", "library/ts/request", "backend/model/feed", "backend/parser/rssparser" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
a = function() {
function e(e) {
var t = this;
this.app = e, setInterval(function() {
return t.check();
}, r.default.feederNotificationCheckInterval);
}
return e.prototype.check = function() {
var e = this;
return n.default.isOnline() ? Promise.resolve() : new Promise(function(t, n) {
new s.default({
url: r.default.feederNotificationsURL,
method: "GET",
onComplete: function(r, n, s) {
e.loaded(r, n, s), t();
}
}).send({
get: {
id: e.app.user.preferences.get("client_id"),
_random: Date.now()
}
});
});
}, e.prototype.loaded = function(e, t, n) {
var s = new o.default({
path: r.default.feederNotificationsURL
}, this.app), a = new i.default(s, this.app);
a.useSummary = !0, a.setResult(e, t, n), a.parse();
var u = a.getPosts();
u[0] ? (this.current = this.encodeText(u[0].summary), this.currentId = u[0].guid) : this.current = !1, 
this.app.user.preferences.get("notifications:hide") === this.currentId && (this.current = !1);
}, e.prototype.encodeText = function(e) {
return !!e && e.replace(/feeder pro/, 'feeder <span class="pro-badge">pro</span>');
}, e.prototype.hideCurrent = function() {
this.currentId && (this.current = !1, this.app.user.preferences.set("notifications:hide", this.currentId));
}, e;
}(), e("default", a);
}
};
}), System.register("backend/pusherreceiver", [ "backend/config", "backend/model/post", "backend/model/PostCollection" ], function(e, t) {
"use strict";
var r, n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = 18e5, i = 15e3, a = function() {
function e(e) {
var t = this;
this.app = e, this.app.events.subscribe("online:socketToken", this.didGetSocketToken.bind(this), this.didGetSocketToken), 
this.app.events.subscribe("feeds:recount", this.shouldSyncStatus.bind(this), this.shouldSyncStatus), 
this.app.events.subscribe("status:shouldSync", this.shouldSyncStatus.bind(this), this.shouldSyncStatus), 
this.app.events.subscribe("feeder:expiredChanged", this.feederExpiredChanged.bind(this), this.feederExpiredChanged), 
this.fallbackPollingTimer = setInterval(function() {
return t.triggerNewPostFetchIfLongTimeAgo();
}, i);
}
return e.prototype.destroy = function() {
this.app.events.unsubscribe("online:socketToken", this.didGetSocketToken), this.app.events.unsubscribe("feeds:recount", this.shouldSyncStatus), 
this.app.events.unsubscribe("status:shouldSync", this.shouldSyncStatus), this.app.events.unsubscribe("feeder:expiredChanged", this.feederExpiredChanged), 
clearInterval(this.fallbackPollingTimer);
}, e.prototype.didGetSocketToken = function(e) {
this.currentToken = e.token, this.connect();
}, e.prototype.shouldBeConnected = function() {
return !(this.app.user.proHasExpired() && !this.app.user.hasChosenPlan());
}, e.prototype.feederExpiredChanged = function() {
this.shouldBeConnected() ? this.socket || this.connect() : this.disconnect();
}, e.prototype.connect = function() {
var e = this;
this.socket && this.socket.destroy(), this.currentToken && this.app.user.isLoggedIn() && this.shouldBeConnected() && (this.socket = io(r.default.feeder.pusherURL, {
reconnectionDelay: 3e4,
query: {
token: this.currentToken
}
}), this.socket.on("connect", function(t) {
return e.didConnect(t);
}), this.socket.on("disconnect", function(t) {
return e.didDisconnect(t);
}), this.socket.on("feedupdated", function(t) {
return e.newMessageReceived(t);
}), this.socket.on("feeds:recount", function(t) {
return e.feedsRecountReceived(t);
}));
}, e.prototype.disconnect = function() {
this.socket && (this.socket.close(), this.socket = null);
}, e.prototype.newMessageReceived = function(e) {
var t = this;
console.log("[pusher] Got message %s bytes", e.length);
var r = !1;
try {
r = JSON.parse(e);
} catch (e) {
return void console.log("Could not parse message JSON", e);
}
if (r) {
var o = r;
o.PostIDs.forEach(function(e, r) {
var i, a = t.app.store.post(e);
o.FeedGUIDs[r];
if (a ? i = a : (i = new n.default({
title: o.PostTitles[r],
is_read: o.PostIsReads[r] ? 1 : 0,
is_starred: o.PostIsStarreds[r] ? 1 : 0,
link: o.PostLinks[r],
feed_id: o.UserFeedIDs[r] || null
}, t.app), i.id = e, i.created_at = Date.now(), i.showNotificationAnyway = !0, i.isFromBackend = !0), 
0 === i.is_read && t.app.user.unreads.incrementForFeed(o.FeedID.toString(), 1, {
manual: !1
}), "" + o.FeedID != "" + i.feed_id) {
var u = t.app.store.feed("" + o.FeedID);
u && s.PostCollection.addPostToCollection(i, u.guid, t.app);
}
t.app.store.addObject(i), t.app.events.send("post:added", {
post: i.id,
ownerFeed: o.FeedID
}), i.addedSent = !0;
});
}
}, e.prototype.didConnect = function(e) {
this.app.socketIsConnected = !0, console.log("[pusher]: did connect"), this.triggerNewPostFetchIfLongTimeAgo();
}, e.prototype.didDisconnect = function(e) {
this.app.socketIsConnected = !1, console.log("[pusher]: did disconnect");
}, e.prototype.triggerNewPostFetchIfLongTimeAgo = function() {
Date.now() - this.app.poller.lastForceUpdate > o && this.triggerNewPostFetch();
}, e.prototype.triggerNewPostFetch = function() {
this.app.user.backend.isConnectedToBackend() && this.shouldBeConnected() && this.app.poller.forceUpdate();
}, e.prototype.shouldSyncStatus = function(e) {
if (this.app.socketIsConnected && e.manual) {
if (void 0 !== e.total) {
if (e.total == this.lastBroadcastedUnreads && !e.updatedPosts && !e.clearedFeeds) return;
this.lastBroadcastedUnreads = e.total;
}
this.lastBroadcastTime = Date.now(), console.log("[pusher] Status updated"), this.socket.emit("feeds:recount", {
counts: this.app.user.unreads.unreadCounts,
updatedPosts: e.updatedPosts,
clearedFeeds: e.clearedFeeds,
broadCastId: this.lastBroadcastTime
});
}
}, e.prototype.feedsRecountReceived = function(e) {
var t = this;
if (e.broadCastId === this.lastBroadcastTime) return void console.log("(got message but ignored)");
console.log("[pusher] Update counts: %d. Posts: %d. Cleared feeds: %d", Object.keys(e.counts).length, (e.updatedPosts || []).length, (e.clearedFeeds || []).length), 
this.app.user.unreads.unreadCounts = e.counts, this.app.events.send("feeds:recount", {
total: this.app.user.unreads.countStored(),
manual: !1
}), e.updatedPosts && "function" == typeof e.updatedPosts.forEach && e.updatedPosts.forEach(function(e) {
var r = t.app.store.post(e.id);
if (r) {
var n = {};
void 0 !== e.is_read && (n.is_read = e.is_read), void 0 !== e.is_starred && (n.is_starred = e.is_starred), 
r.markValueClean(n), t.app.events.send("post:updated", {
post: e.id
});
}
}), e.clearedFeeds && "function" == typeof e.clearedFeeds.forEach && e.clearedFeeds.forEach(function(e) {
var r = t.app.store.feed(e);
r && r.id && t.app.store.postsForFeed(r.id).forEach(function(e) {
e.markValueClean({
is_read: 1
}), t.app.events.send("post:updated", {
post: e.id
});
});
});
}, e;
}(), e("default", a);
}
};
}), System.register("backend/domevents", [ "backend/config", "backend/platformload", "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
} ],
execute: function() {
o = function() {
function e(e) {
this.app = e, this.app.events.subscribe("userDomEvent", this.eventReceived.bind(this), this.eventReceived), 
this.app.events.subscribe("dom:getUserKey", this.returnUserKey.bind(this), this.returnUserKey), 
this.app.events.subscribe("executeOnReader", this.executeOnReader.bind(this), this.executeOnReader);
}
return e.prototype.destroy = function() {
this.app.events.unsubscribe("userDomEvent", this.eventReceived), this.app.events.unsubscribe("dom:getUserKey", this.returnUserKey);
}, e.prototype.eventReceived = function(e) {
var t = e.loba;
switch (t.type) {
case "addFeed":
this.addFeed(t, e.tab);
break;

case "openURL":
this.openURL(t, e.tab);
break;

default:
console.log("No message called %s", t.type, t);
}
}, e.prototype.returnUserKey = function(e) {
n.Platform.env.sendMessageToTab(e.tab, "dom:gotUserKey", {
userKey: this.app.user.getUserKey(),
email: this.app.user.getEmail() || "n/a"
});
}, e.prototype.addFeed = function(e, t) {
var o = s.default.settingsURL(r.default.feeder.root, {
q: e.url
}, "/feeds/new");
n.UI.tabChangeURL(t, o);
}, e.prototype.openURL = function(e, t) {
for (var r = 0; r < e.urls.length && r < 50; r++) n.UI.openTab(e.urls[r]);
}, e.prototype.executeOnReader = function(e) {
function t(e) {
return 0 === e.indexOf("https://feeder.co/reader") || 0 === e.indexOf("http://feeder.co/reader") || 0 === e.indexOf("http://dev.feeder.co:3000/reader");
}
var r = e.tab;
n.UI.getTab(r, function(e) {
t(e.url) && n.Platform.env.sendMessageToTab(r, "executeOnReader:true", {});
});
}, e;
}(), e("default", o);
}
};
}), System.register("backend/feedanalytics", [ "backend/config", "ext/ext", "library/ts/request", "backend/export-import", "library/ts/debounce", "backend/platformload" ], function(e, t) {
"use strict";
var r, n, s, o, i, a, u, c, d;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
} ],
execute: function() {
u = 3e4, c = 5e3, d = function() {
function e(e) {
this.batched = [], this.app = e, this.debouncedBatchSend = i.default(this.batchSend, c), 
this.app.events.subscribe("feed:added", this.feedAdded.bind(this), this.feedAdded), 
this.app.events.subscribe("feed:removed", this.feedRemoved.bind(this), this.feedRemoved), 
this.app.events.subscribe("folder:added", this.folderAdded.bind(this), this.folderAdded), 
this.app.events.subscribe("folder:removed", this.folderRemoved.bind(this), this.folderRemoved);
}
return e.prototype.destroy = function() {
this.app.events.unsubscribe("feed:added", this.feedAdded), this.app.events.unsubscribe("feed:removed", this.feedRemoved), 
this.app.events.unsubscribe("folder:added", this.folderAdded), this.app.events.unsubscribe("folder:removed", this.folderRemoved);
}, e.prototype.feedAdded = function(e) {
this.collectEvent("user:add_feed", e.feed);
}, e.prototype.feedRemoved = function(e) {
this.collectEvent("user:remove_feed", e.feed);
}, e.prototype.folderAdded = function(e) {
this.collectEvent("user:add_folder", e.folder);
}, e.prototype.folderRemoved = function(e) {
this.collectEvent("user:remove_folder", e.folder);
}, e.prototype.backup = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return this.app.user.structure.base ? (e = o.Export.exportFeeds(this.app.user.structure.base), 
[ 4, this.collectOpml(e) ]) : [ 3, 2 ];

case 1:
return t = r.sent(), t ? [ 2, !0 ] : (this.initiateOpmlRetries(e), [ 2, !1 ]);

case 2:
return [ 2, !0 ];

case 3:
return [ 2 ];
}
});
});
}, e.prototype.collectOpml = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.collect("opml", {
opml: e,
clientId: this.app.user.preferences.get("client_id")
}) ];

case 1:
return [ 2, t.sent() ];
}
});
});
}, e.prototype.collectEvent = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return r = this.app.user.preferences.get("feeder:id"), s = {
userId: r && "undefined" !== r ? r : null,
clientId: this.app.user.preferences.get("client_id"),
clientVersion: n.default.getVersion(),
eventName: e,
eventValue: "" + (t || 0),
metaData: {
platform: a.Platform.name,
isPro: this.app.user.backend.isConnectedToBackend()
}
}, [ 4, this.collect("event", s) ];

case 1:
return [ 2, o.sent() ];
}
});
});
}, e.prototype.collect = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
return r = Date.now(), this.batched.push({
what: e,
body: t,
timestamp: r
}), this.debouncedBatchSend(), [ 2, !0 ];
});
});
}, e.prototype.batchSend = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n, o, i;
return __generator(this, function(a) {
switch (a.label) {
case 0:
if (0 === this.batched.length) return [ 2, !0 ];
e = this.batched, t = {
events: e
}, this.batched = [], n = new s.default({
url: r.default.feeder.analyticsURL + "/collect/batch",
method: "POST",
contentType: "json"
}), a.label = 1;

case 1:
return a.trys.push([ 1, 3, , 4 ]), [ 4, n.send({
post: t
}) ];

case 2:
return o = a.sent(), [ 2, 200 === o.status ];

case 3:
return i = a.sent(), console.error(i), this.batched = this.batched.concat(e), [ 2, !1 ];

case 4:
return [ 2 ];
}
});
});
}, e.prototype.initiateOpmlRetries = function(e) {
var t = this;
this.retryOpmlInterval = setInterval(function() {
return t.retryOpml(e);
}, u);
}, e.prototype.retryOpml = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.collectOpml(e) ];

case 1:
return t = r.sent(), t && clearInterval(this.retryOpmlInterval), [ 2 ];
}
});
});
}, e.prototype.checkNeedsMigration = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, !1 ];
});
});
}, e;
}(), e("default", d);
}
};
}), System.register("backend/websqltoindexeddb", [ "backend/platformload" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e) {
this.app = e, this.resetCaches();
}
return e.needsMigration = function(e) {
return "IndexedDBDatabase" !== r.Platform.env.DBAdapter || localStorage.migratedDatabase ? Promise.resolve(!1) : e.analytics.checkNeedsMigration();
}, e.hasMigrated = function() {
return "IndexedDBDatabase" === r.Platform.env.DBAdapter && !!localStorage.migratedDatabase;
}, e.prototype.resetCaches = function() {
this.idMap = {
feeds: {},
posts: {},
folders: {}
}, this.objects = {
feeds: {},
posts: {},
folders: {}
};
}, e.prototype.hasMigrated = function() {
return e.hasMigrated();
}, e.prototype.markAsDone = function() {
localStorage.migratedDatabase = "true";
}, e;
}(), e("default", n);
}
};
}), System.register("backend/feedsearch", [ "library/ts/request", "backend/config", "backend/model/feed", "backend/parser/rssparser" ], function(e, t) {
"use strict";
function r(e, t) {
try {
var r = URI(e), n = URI(t);
return r.host() || r.host(n.host()), r.scheme() || r.scheme(n.scheme()), r.scheme() || r.scheme("http"), 
r.toString();
} catch (t) {
return console.error("Could not parse URL for cleanURI", t), e;
}
}
var n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
a = function() {
function e(e) {
this.app = e;
}
return e.prototype.searchURL = function() {
return s.default.feeder.root + "/1/feeds/search.json?q=$term";
}, e.prototype.search = function(e) {
var t = this;
return this.term = e, e.match(/https?:\/\//) || (e = "http://" + e), this.searchTerm = e, 
new Promise(function(r, s) {
t.request = new n.default({
url: e,
method: "GET",
onComplete: function(e, n) {
t.searchComplete(e, n).then(r, s);
},
onError: function() {
t.keywordSearch(t.term).then(r, s);
}
}), t.request.addHeader("Pragma", "no-cache"), t.request.addHeader("Cache-control", "no-cache"), 
t.request.send();
});
}, e.prototype.searchComplete = function(e, t) {
var r = {
feeds: [],
error_code: null
};
return r.feeds = this.searchForFeedsInText(t, this.searchTerm), r.feeds.length ? Promise.resolve(r) : this.keywordSearch(this.term);
}, e.prototype.keywordSearch = function(e) {
var t = this;
return this.app.user.backend.isConnectedToBackend() ? new Promise(function(e, r) {
t.request = new n.default({
url: t.searchURL().replace("$term", encodeURIComponent(t.term)),
method: "GET",
onComplete: function(r, n) {
e(t.keywordSearchComplete(r, n));
},
onError: function() {
r();
}
}), t.request.send();
}) : Promise.resolve({
feeds: [],
error_code: null
});
}, e.prototype.keywordSearchComplete = function(e, t) {
var r = {
feeds: [],
error_code: null
};
try {
var n = JSON.parse(t);
r.error_code = n.error_code, r.feeds = n.feeds.map(function(e) {
return {
title: e.title,
href: e.path,
path: e.path,
guid: e.guid
};
});
} catch (e) {
r.error_code = "internal_server_error";
}
return r;
}, e.prototype.searchForFeedsInText = function(e, t) {
var n, s = e.match(/<head[^>]*>([\s\S]*?)<\/head>/i), a = [];
if (s) {
n = s[1];
var u = document.createElement("div");
u.innerHTML = n;
for (var c, d = u.querySelectorAll("link[rel=alternate], link[type*=rss], link[type*=atom], link[type*=rdf]"), p = 0; c = d[p]; p++) {
var f = r(c.getAttribute("href") || "", t);
a.push({
title: c.getAttribute("title") || f,
href: f,
path: f,
guid: f
});
}
} else {
e && "function" == typeof e.trim && (e = e.trim());
var l = new i.default(new o.default({
path: t
}, this.app), this.app);
if (l.useSummary = !0, l.setResult(200, e, null), l.parse(), !l.error) {
var h = l.getFeed();
a.push({
title: h.title || h.path,
href: h.link,
path: h.path,
guid: h.guid
});
}
}
return a;
}, e;
}(), e("default", a);
}
};
}), System.register("backend/model/Sharer", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
e("SHARERS", r = [ {
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
}), System.register("backend/apiserver", [ "backend/config", "backend/feedsearch", "library/ts/request", "library/ts/library", "ext/ext", "backend/export-import", "backend/model/Sharer" ], function(e, t) {
"use strict";
function r(e, t) {
var r = this;
e.DELETE("/1/session", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, t.sync.feederAccountManager.logOut() ];

case 1:
return e.sent(), n.send(200, {}, {}), [ 2 ];
}
});
});
}), e.GET("/1/user", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
user: {
id: "ext-" + t.user.preferences.get("client_id"),
email: "",
is_free: !t.user.backend.isConnectedToBackend(),
preferences: t.user.preferences.getAll(),
client_version: c.default.getVersion()
}
}), [ 2 ]);
});
});
}), e.GET("/1/preferences", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return n.send(200, {}, {
preferences: t.user.preferences.getAll()
}), [ 2 ];
});
});
}), e.PUT("/1/preferences", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(r) {
return t.user.preferences.updateMany(e.body.preferences), n.send(200, {}, {
preferences: t.user.preferences.getAll()
}), [ 2 ];
});
});
}), e.GET("/1/opml", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var e;
return __generator(this, function(r) {
return e = t.user.structure.base, e ? n.send(200, {}, {
opml: {
xml: d.Export.exportFeeds(e)
}
}) : n.send(200, {}, {
opml: {
xml: ""
}
}), [ 2 ];
});
});
}), e.GET("/1/imports", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
imports: []
}), [ 2 ]);
});
});
}), e.POST("/1/imports", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
if (t.user.backend.isConnectedToBackend()) return [ 2, n.forwardToRealApi() ];
r = new d.Import(e.body.import.opml), s = !1, i.label = 1;

case 1:
return i.trys.push([ 1, 3, , 4 ]), [ 4, r.execute(t) ];

case 2:
return s = i.sent(), [ 3, 4 ];

case 3:
return o = i.sent(), console.error(o), [ 3, 4 ];

case 4:
return s ? n.send(200, {}, {
import: {
id: Date.now(),
status: "success",
created_at: Date.now()
}
}) : n.send(422, {}, {
errors: [ "Something went wrong during the import" ]
}), [ 2 ];
}
});
});
}), e.GET("/1/feeds/search", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return r = {
feeds: [],
error_code: null
}, e.body.q ? (s = new i.default(t), [ 4, s.search(e.body.q) ]) : [ 3, 2 ];

case 1:
return r = o.sent(), [ 3, 3 ];

case 2:
e.body.tabId && (r.feeds = (t.finder.availableFeeds[e.body.tabId] || []).map(function(e) {
return {
title: e.title || e.href,
href: e.href,
path: e.href,
guid: e.href,
isSearch: e.isSearch
};
})), o.label = 3;

case 3:
return n.send(200, {}, {
feeds: r.feeds,
error_code: r.error_code
}), [ 2 ];
}
});
});
}), e.GET("/1/feeds", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var e;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, t.feedMapper.find({}) ];

case 1:
return e = r.sent(), n.send(200, {}, {
feeds: e.results ? e.results.map(function(e) {
return e.getValues();
}) : []
}), [ 2 ];
}
});
});
}), e.GET("/1/feeds/unread", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, t.user.unreads.count() ];

case 1:
return e.sent(), n.send(200, {}, {
unreads: Object.keys(t.user.unreads.unreadCounts).map(function(e) {
return {
unread: t.user.unreads.unreadCounts[e],
feed_id: e
};
})
}), [ 2 ];
}
});
});
}), e.GET("/1/feeds/new", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(r) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
feed: {
path: e.params.path || e.body.path
}
}), [ 2 ]);
});
});
}), e.GET("/1/feeds/:feedId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return i.trys.push([ 0, 2, , 3 ]), [ 4, t.feedMapper.find({
id: e.params.feedId
}) ];

case 1:
return r = i.sent(), [ 3, 3 ];

case 2:
return s = i.sent(), console.error("Error", s), n.send(404, {}, {}), [ 2 ];

case 3:
return r.results && r.results.length ? (o = r.results[0], n.send(200, {}, {
feed: o.getValues()
})) : n.send(404, {}, {}), [ 2 ];
}
});
});
}), e.POST("/1/feeds", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
r = e.body.feed, s = !1, i.label = 1;

case 1:
return i.trys.push([ 1, 3, , 4 ]), [ 4, t.feedMapper.addFeed(r) ];

case 2:
return s = i.sent(), [ 3, 4 ];

case 3:
return o = i.sent(), console.error(o), [ 3, 4 ];

case 4:
return s ? s.errors ? n.send(422, {}, {
errors: s.errors,
error_code: s.errorCode
}) : s.feed ? n.send(200, {}, {
feed: s.feed.getValues(),
folders: t.user.structure.base ? t.user.structure.base.getValues() : null
}) : n.send(422, {}, {
errors: {
base: "A programmer error occurred that should never happen. Please contact support@feeder.co"
},
error_code: "internal_server_error"
}) : n.send(422, {}, {
errors: {
base: "Could not add the feed."
},
error_code: "internal_server_error"
}), [ 2 ];
}
});
});
}), e.PUT("/1/feeds/:feedId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
r = e.params.feedId, c.label = 1;

case 1:
return c.trys.push([ 1, 3, , 4 ]), [ 4, t.feedMapper.find({
id: r
}) ];

case 2:
return s = c.sent(), [ 3, 4 ];

case 3:
return o = c.sent(), console.error("Error", o), n.send(404, {}, {}), [ 2 ];

case 4:
return i = e.body.feed, s.results && s.results.length && i ? (a = s.results[0], 
a.setFromSourceOfTruth(i), [ 4, a.save() ]) : [ 3, 7 ];

case 5:
return c.sent(), [ 4, t.user.structure.tryToMoveFeedToFolder(r, i.folderId) ];

case 6:
return u = c.sent(), n.send(200, {}, {
feed: a.getValues(),
folders: u.map(function(e) {
return e.getValues();
})
}), [ 3, 8 ];

case 7:
n.send(404, {}, {}), c.label = 8;

case 8:
return [ 2 ];
}
});
});
}), e.DELETE("/1/feeds/:feedId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
if (r = t.store.feed(e.params.feedId)) return [ 3, 4 ];
i.label = 1;

case 1:
return i.trys.push([ 1, 3, , 4 ]), [ 4, t.feedMapper.find({
id: e.params.feedId
}) ];

case 2:
return s = i.sent(), s.results && s.results.length && (r = s.results[0]), [ 3, 4 ];

case 3:
return o = i.sent(), console.error("Error", o), n.send(404, {}, {}), [ 2 ];

case 4:
return r ? r.id ? [ 4, t.user.removeFeedFromAllFolders(r.id) ] : [ 3, 6 ] : [ 3, 7 ];

case 5:
i.sent(), i.label = 6;

case 6:
return n.send(200, {}, {
folders: t.store.folders().map(function(e) {
return e.getValues();
})
}), [ 3, 8 ];

case 7:
n.send(404, {}, {}), i.label = 8;

case 8:
return [ 2 ];
}
});
});
}), e.GET("/1/folders", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var e;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, t.folderMapper.find({}) ];

case 1:
return e = r.sent(), n.send(200, {}, {
folders: e.results ? e.results.map(function(e) {
return e.getValues();
}) : []
}), [ 2 ];
}
});
});
}), e.GET("/1/folders/:folderId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return i.trys.push([ 0, 2, , 3 ]), [ 4, t.folderMapper.find({
id: e.params.folderId
}) ];

case 1:
return r = i.sent(), [ 3, 3 ];

case 2:
return s = i.sent(), console.error("Error", s), n.send(404, {}, {}), [ 2 ];

case 3:
return r.results && r.results.length ? (o = r.results[0], n.send(200, {}, {
folder: o.getValues()
})) : n.send(404, {}, {}), [ 2 ];
}
});
});
}), e.POST("/1/folders", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return r = e.body.folder, r.name && r.parent_folder_id ? (s = t.store.folder(r.parent_folder_id), 
s && s.id ? [ 4, t.user.structure.addNewFolderToFolder(r.name, s.id) ] : (n.send(422, {}, {
errors: {
name: "parent folder does not exist"
}
}), [ 2 ])) : (n.send(422, {}, {
errors: {
name: "can't be empty"
}
}), [ 2 ]);

case 1:
return o = i.sent(), o ? n.send(200, {}, {
folders: [ o.getValues(), s.getValues() ]
}) : n.send(422, {}, {
errors: {
name: "something went wrong!"
}
}), [ 2 ];
}
});
});
}), e.PUT("/1/folders/:folderId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
r = e.params.folderId, s = e.body.folder, c.label = 1;

case 1:
return c.trys.push([ 1, 3, , 4 ]), [ 4, t.folderMapper.find({
id: r
}) ];

case 2:
return o = c.sent(), [ 3, 4 ];

case 3:
return i = c.sent(), console.error("Error", i), n.send(404, {}, {}), [ 2 ];

case 4:
return o.results && o.results.length ? (a = o.results[0], a.setFromSourceOfTruth(s), 
[ 4, a.save() ]) : [ 3, 7 ];

case 5:
return c.sent(), [ 4, t.user.structure.tryToMoveFolderToFolder(r, s.folderId) ];

case 6:
return u = c.sent(), n.send(200, {}, {
folder: a.getValues()
}), [ 3, 8 ];

case 7:
n.send(404, {}, {}), c.label = 8;

case 8:
return [ 2 ];
}
});
});
}), e.DELETE("/1/folders/:folderId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, s, o, i;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return a.trys.push([ 0, 2, , 3 ]), [ 4, t.folderMapper.find({
id: e.params.folderId
}) ];

case 1:
return r = a.sent(), [ 3, 3 ];

case 2:
return s = a.sent(), console.error("Error", s), n.send(404, {}, {}), [ 2 ];

case 3:
return r.results && r.results.length ? (o = r.results[0], [ 4, t.user.structure.removeFolder(o) ]) : [ 3, 6 ];

case 4:
return a.sent(), [ 4, t.folderMapper.find({}) ];

case 5:
return i = a.sent(), n.send(200, {}, {
folders: i.results ? i.results.map(function(e) {
return e.getValues();
}) : []
}), [ 3, 7 ];

case 6:
n.send(404, {}, {}), a.label = 7;

case 7:
return [ 2 ];
}
});
});
}), e.GET("/1/posts", function(e, o) {
return __awaiter(r, void 0, void 0, function() {
var r, i, a, u, c, d, p, f;
return __generator(this, function(l) {
switch (l.label) {
case 0:
return t.user.isLoggedIn() ? [ 2, o.forwardToRealApi() ] : (r = Object.assign({}, e.params, e.body), 
r.feed_id ? [ 4, t.feedMapper.find({
id: r.feed_id
}) ] : [ 3, 2 ]);

case 1:
return a = l.sent(), i = a.results ? a.results[0] : void 0, [ 3, 5 ];

case 2:
return r.folder_id ? [ 4, t.folderMapper.find({
id: r.folder_id
}) ] : [ 3, 4 ];

case 3:
return u = l.sent(), c = u.results ? u.results[0] : void 0, c && (i = t.user.createFeedOfFolder(c)), 
[ 3, 5 ];

case 4:
t.user.structure.base && (i = t.user.createFeedOfFolder(t.user.structure.base)), 
l.label = 5;

case 5:
return i ? (d = {
filters: []
}, void 0 === r.is_read || n(r.is_read) || d.filters.push("unread"), void 0 !== r.is_starred && n(r.is_starred) && d.filters.push("starred"), 
p = i.getPostIterator(d), r.offset && (p.offset = parseInt(r.offset, 10)), r.limit && (p.limit = parseInt(r.limit, 10)), 
[ 4, p.fetch() ]) : (o.send(404, {}, {}), [ 2 ]);

case 6:
return f = l.sent(), o.send(200, {}, {
posts: f.map(function(e) {
return e.getValues();
}).map(s)
}), [ 2 ];
}
});
});
}), e.PUT("/1/posts/:postId", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
var r, o, i, a, u, c;
return __generator(this, function(d) {
switch (d.label) {
case 0:
return r = e.params.postId, o = e.body.post, i = t.store.post(r), i ? void 0 === o.is_read ? [ 3, 2 ] : [ 4, i.mark(o.is_read ? 1 : 0) ] : [ 3, 4 ];

case 1:
d.sent(), delete o.is_read, d.label = 2;

case 2:
return void 0 === o.is_starred ? [ 3, 4 ] : [ 4, i.toggleStar(!!o.is_starred) ];

case 3:
d.sent(), delete o.is_starred, d.label = 4;

case 4:
if (t.user.isLoggedIn()) return [ 2, n.forwardToRealApi() ];
d.label = 5;

case 5:
return d.trys.push([ 5, 7, , 8 ]), [ 4, t.postMapper.find({
id: r
}) ];

case 6:
return a = d.sent(), [ 3, 8 ];

case 7:
return u = d.sent(), console.error("Error", u), n.send(404, {}, {}), [ 2 ];

case 8:
return a.results && a.results.length ? (c = a.results[0], c.setFromSourceOfTruth(o), 
[ 4, c.save() ]) : [ 3, 10 ];

case 9:
return d.sent(), n.send(200, {}, {
post: s(c.getValues())
}), [ 3, 11 ];

case 10:
n.send(404, {}, {}), d.label = 11;

case 11:
return [ 2 ];
}
});
});
}), e.GET("/1/subscriptions", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
subscriptions: [ {
id: "ext-" + t.user.preferences.get("client_id"),
type: "free",
status: "active",
is_active: !0,
created_at: t.user.preferences.get("first_seen"),
updated_at: t.user.preferences.get("first_seen"),
next_payment_due: null,
status_name: "lite",
status_header: "Lite plan",
status_text: "You are on our free lite plan.",
status_icon: "green-checkmark",
status_color: "grey"
} ]
}), [ 2 ]);
});
});
}), e.GET("/1/notification-settings", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
notificationSettings: []
}), [ 2 ]);
});
});
}), e.GET("/1/sharers", function(e, n) {
return __awaiter(r, void 0, void 0, function() {
return __generator(this, function(e) {
return t.user.isLoggedIn() ? [ 2, n.forwardToRealApi() ] : (n.send(200, {}, {
sharers: p.SHARERS.map(function(e) {
return {
id: e.id,
name: e.name,
url: e.url,
type_id: e.typeId,
popup_width: e.popupWidth,
popup_height: e.popupHeight
};
})
}), [ 2 ]);
});
});
});
}
function n(e) {
var t = ("" + e).toString();
return !("0" === t || "false" === t || "no" === t || "" == t);
}
function s(e) {
return e.published && (e.published = e.published / 1e3), e;
}
var o, i, a, u, c, d, p, f, l;
t && t.id;
return e("routes", r), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
} ],
execute: function() {
f = {
REFER_TO_REAL_API: 405
}, l = function() {
function e(e) {
this.app = e, this.allRoutes = [], this.app.events.subscribe("api:request", this.apiRequestReceived.bind(this), this.apiRequestReceived);
}
return e.prototype.destroy = function() {
this.app.events.unsubscribe("api:request", this.apiRequestReceived);
}, e.prototype.apiRequestReceived = function(e) {
var t = this;
try {
this.serve(e.method, e.url, e.data, e.headers, function(r, n, s) {
t.app.events.send("api:response", {
requestId: e.requestId,
status: r,
headers: n,
body: s
});
});
} catch (e) {
console.error(e);
}
}, e.prototype.match = function(e, t, r) {
var n = [];
this.allRoutes.push({
method: e,
path: t,
regex: pathToRegexp(t, n),
paramKeys: n,
callback: r
});
}, e.prototype.serve = function(e, t, r, n, s) {
var i = this, d = new URI(t), p = d.path().replace(/\.[^\/.]+$/, "");
p = p.replace(/\/\.\//g, "/"), console.log("[" + e + "] " + d.path(), r || "");
var f = function() {
var d = new a.default({
method: e,
url: o.default.feeder.root + t,
addFeederAuthorization: !0,
onComplete: function(e, t) {
s(e, {
clientVersion: c.default.getVersion()
}, u.tryToParseJSON(t));
},
onError: function() {
s(500, {}, {});
},
rawBody: r,
contentType: "json"
});
for (var p in n) ({}).hasOwnProperty.call(n, p) && d.addHeader(p, n[p]);
d.addHeader("X-Feeder-Token", i.app.user.preferences.get("feeder:token")), d.addHeader("X-Feeder-ClientId", i.app.user.preferences.get("client_id"));
var f = void 0;
"GET" === e && (f = {
get: r
}), d.send(f);
}, l = this.handleRequest(e, p);
if (l) return void l.route.callback({
url: d,
body: "string" == typeof r ? JSON.parse(r) : r,
headers: n,
params: l.params
}, {
send: s,
forwardToRealApi: f
}).catch(function(e) {
console.error("Server error", e), s(500, {}, {
error: e
});
});
this.app.user.isLoggedIn() ? (console.log("[404] Refer to real API"), f()) : s(404, [], {});
}, e.prototype.handleRequest = function(e, t) {
for (var r = 0, n = this.allRoutes.length; r < n; r++) {
var s = this.allRoutes[r], o = t.match(s.regex);
if (s.method === e && o) {
var i = {};
return o.slice(1).forEach(function(e, t) {
i[s.paramKeys[t].name] = e;
}), {
route: s,
params: i
};
}
}
return !1;
}, e.prototype.GET = function(e, t) {
this.match("GET", e, t);
}, e.prototype.POST = function(e, t) {
this.match("POST", e, t);
}, e.prototype.PUT = function(e, t) {
this.match("PUT", e, t);
}, e.prototype.DELETE = function(e, t) {
this.match("DELETE", e, t);
}, e;
}(), e("default", l);
}
};
}), System.register("backend/orm/restdatabase", [ "backend/orm/database", "library/ts/library", "library/ts/request" ], function(e, t) {
"use strict";
function r(e, t) {
delete e._hint;
var r = s.mergeObjects({}, e);
return "number" == typeof t.limit ? r.limit = t.limit : t.limit && t.limit.length > 1 && (r.limit = t.limit[1], 
r.offset = t.limit[0]), t.by && (r.by = t.by), r;
}
var n, s, o, i, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.adapterName = "RESTDatabase", t;
}
return __extends(t, e), t.prototype.connect = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, this ];
});
});
}, t.prototype.close = function() {}, t.prototype.getMigrationVersion = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, "" ];
});
});
}, t.prototype.setMigrationVersion = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.executeQuery = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return "function" == typeof e.prematureCallback ? [ 2, this.querySuccess(e, e.prematureCallback()) ] : (e.addFeederAuthorization = !0, 
e.contentType = "json", t = new o.default(e), [ 4, t.send(e.sendParams) ]);

case 1:
if (r = s.sent(), !(n = r.json())) throw new a(r);
return [ 2, this.querySuccess(e, n) ];
}
});
});
}, t.prototype.querySuccess = function(e, t) {
var r = t[e.table] || t[e.table.replace(/s$/, "")], n = !1, s = [];
r && (r.constructor === Array ? (s = r, e.model && e.model.constructor === Array && e.model.forEach(function(e, t) {
if (r[t].error) return void (e.error = !0);
e.setFromDB(r[t]), e.isFromBackend = !0;
})) : (s = [ r ], n = r.id), e.model && e.model.setFromDB && s[0] && (e.model.setFromDB(s[0]), 
e.model.isFromBackend = !0));
var o = {
insertId: n,
error: !1,
errorMessages: void 0,
errorCode: void 0
};
return t.errors && "object" == typeof t.errors && (o.errorMessages = t.errors), 
t.error_code && "string" == typeof t.error_code && (o.errorCode = t.error_code), 
{
res: s,
meta: o,
updatedModels: !0
};
}, t.prototype.makeTable = function(e, t, r) {
return Promise.resolve();
}, t.prototype.dropTable = function(e) {
return Promise.resolve();
}, t.prototype.tableExists = function(e) {
return Promise.resolve(!0);
}, t.prototype.addIndex = function(e, t) {
return Promise.resolve();
}, t.prototype.addField = function(e, t, r) {
return Promise.resolve();
}, t.prototype.buildFind = function(e, t, n, s, o, i) {
var a = !1;
return 0 === Object.keys(s).length ? (a = !1, s = {}) : s[t] && (a = s[t], delete s[t]), 
{
method: "GET",
url: this.urlFor(e, a),
table: e,
sendParams: {
get: r(s, o)
}
};
}, t.prototype.buildCount = function(e, t, r, n, s, o) {
return {
prematureCallback: function() {
var t = {};
return t[e] = {
total: 0
}, t;
}
};
}, t.prototype.buildUpdate = function(e, t, r, n, s, o, i) {
if (!o[t]) throw "Need primary key to update REST model";
return {
method: "PUT",
url: this.urlFor(e, o[t]),
table: e,
sendParams: {
post: this.makePostParams(e, n),
get: o
},
model: s
};
}, t.prototype.buildInsert = function(e, t, r, n) {
return {
method: "POST",
url: this.urlFor(e),
table: e,
sendParams: {
post: this.makePostParams(e, r)
},
model: r
};
}, t.prototype.buildDelete = function(e, t, r, n, s) {
if (!n[t]) throw "Need primary key to delete REST model";
return {
method: "DELETE",
url: this.urlFor(e, n[t]),
table: e
};
}, t.prototype.urlFor = function(e, t) {
return void 0 === t && (t = !1), this.name + "/" + e.replace(/_/g, "-") + (t ? "/" + t : "");
}, t.prototype.makePostParams = function(e, t) {
function r(e) {
return e.getRESTValues ? e = e.getRESTValues() : e.getValues && (e = e.getValues()), 
e;
}
var n = e;
t.constructor === Array ? t = t.map(r) : (t = r(t), n = n.replace(/s$/, ""));
var s = {};
return s[n] = t, s;
}, t;
}(n.default), a = function(e) {
function t(t) {
var r = e.call(this, "RESTError: status#" + status) || this;
return r.response = t, r;
}
return __extends(t, e), t;
}(Error), e("RESTError", a), e("default", i);
}
};
}), System.register("backend/orm/websqldatabase", [ "backend/orm/database" ], function(e, t) {
"use strict";
function r(e) {
for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
window.dbLogOn && console.log.apply(console, [ e ].concat(t));
}
var n, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.adapterName = "WebSQLDatabase", t.queue = [], t.queueIsRunning = !1, t;
}
return __extends(t, e), t.prototype.connect = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
try {
this.db = window.openDatabase(this.name, "0.1", this.name.toLowerCase(), 5242880);
} catch (e) {
return console.error("MASSIVE MASSIVE ERROR! COULD NOT OPEN DATABASE", e.message, e), 
[ 2, this ];
}
return [ 4, this.performMigrations() ];

case 1:
return e.sent(), [ 2, this ];
}
});
});
}, t.prototype.close = function() {}, t.prototype.getMigrationVersion = function() {
var e = this;
return new Promise(function(t, r) {
return __awaiter(e, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.createMigrationTable() ];

case 1:
return e.sent(), this.db.readTransaction(function(e) {
e.executeSql("SELECT * FROM migrations WHERE version != 'createSchema' ORDER BY version DESC LIMIT 1", [], function(e, r) {
t(r.rows.length > 0 ? r.rows.item(0).version : "createSchema");
}, function(e, r) {
return console.error("Could not find migration version", r), t("createSchema"), 
!1;
});
}, function(e) {
console.error("Could not get migration version", e.message), r();
}), [ 2 ];
}
});
});
});
}, t.prototype.createMigrationTable = function() {
var e = this;
return new Promise(function(t, r) {
e.db.transaction(function(e) {
e.executeSql("CREATE TABLE IF NOT EXISTS migrations (version int, created int)", [], function(e, r) {
t();
}, function(e, t) {
return console.error("Could not create migrations table", t), r(), !1;
});
}, function(e) {
console.error("Could not create migration table", e.message), r();
});
});
}, t.prototype.setMigrationVersion = function(e) {
var t = this;
return new Promise(function(r, n) {
t.db.transaction(function(t) {
t.executeSql("INSERT INTO migrations (version, created) VALUES(?, ?)", [ e, Date.now() ], function(e, t) {
r();
}, function(e, t) {
return console.error("Could not add migration version", t), n(), !1;
});
}, function(e) {
console.error("Could not set migration version", e.message), n();
});
});
}, t.prototype.executeQuery = function(e) {
var t = this;
return r("=== Running query\n" + e.sql + " " + e.args.join(", ")), this.db || this.connect(), 
new Promise(function(n, s) {
t.addToQueue(function(o) {
var i = Date.now(), a = function(a) {
a.executeSql(e.sql, e.args, function(s, a) {
r("=== Query success: Took " + (Date.now() - i) / 1e3 + " seconds"), t.isError = !1, 
o(), n(t.querySuccess(e, s, a));
}, function(r, n) {
return console.error("=== Query error: Took " + (Date.now() - i) / 1e3 + " seconds", e), 
t.isError = !0, o(), s(), !1;
});
};
e.readOnly ? t.db.readTransaction(a, function(t) {
console.error("Could not start read only transaction for query: %s\nGot error: %s", e.sql, t.message), 
o();
}) : t.db.transaction(a, function(r) {
console.error("[FIRST] Could not start transaction for query: %s\nGot error: %s", e.sql, r.message), 
setTimeout(function() {
t.db.transaction(a, function(t) {
console.error("[TRY AGAIN] Could not start transaction for query: %s\nGot error: %s", e.sql, t.message), 
o();
});
}, 500);
});
});
});
}, t.prototype.addToQueue = function(e) {
this.queue.push(e), this.runNextInQueue();
}, t.prototype.runNextInQueue = function() {
var e = this;
if (!this.queueIsRunning) {
var t = this.queue.shift();
t ? (this.queueIsRunning = !0, setTimeout(function() {
try {
t(function() {
e.queueIsRunning = !1, e.runNextInQueue();
});
} catch (t) {
throw e.queueIsRunning = !1, e.runNextInQueue(), t;
}
}, 1)) : this.queueIsRunning = !1;
}
}, t.prototype.querySuccess = function(e, t, r) {
for (var n = [], s = 0; s < r.rows.length; s++) {
var o = {}, i = r.rows.item(s);
for (var a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
n.push(o);
}
var u = !1;
try {
u = r.insertId;
} catch (e) {}
return {
res: n,
meta: {
insertId: u,
error: !1
}
};
}, t.prototype.makeTable = function(e, t, r) {
return __awaiter(this, void 0, void 0, function() {
var n, s, o, i;
return __generator(this, function(a) {
switch (a.label) {
case 0:
t = t || "id", n = "CREATE TABLE IF NOT EXISTS `" + e + "`", s = [], o = [], o.push("`" + t + "` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT");
for (i in r) r.hasOwnProperty(i) && o.push(this.makeColumnDefinition(i, r[i]));
return n += " (" + o.join(",\n") + ")", [ 4, this.executeQuery({
sql: n,
args: s
}) ];

case 1:
return a.sent(), [ 2 ];
}
});
});
}, t.prototype.makeColumnDefinition = function(e, t) {
var r = {
int: "integer",
float: "real",
text: "text"
}, n = "`" + e + "` ";
return n += " " + r[t.type], void 0 !== t.standard && (n += " DEFAULT " + this._escapeDefaultValue(t.standard)), 
n += " " + (void 0 === t.mandatory || t.mandatory ? "NOT NULL" : "");
}, t.prototype.addIndex = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return r = t instanceof Array ? t : [ t ], n = r.map(function(e) {
return "`" + e + "`";
}).join(", "), [ 4, this.executeQuery({
sql: "CREATE INDEX IF NOT EXISTS `" + e + "_" + r.join("_") + "` ON `" + e + "` (" + n + ")",
args: []
}) ];

case 1:
return s.sent(), [ 2 ];
}
});
});
}, t.prototype.addField = function(e, t, r) {
return __awaiter(this, void 0, void 0, function() {
var n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
n = "ALTER TABLE `" + e + "` ADD COLUMN ", n += this.makeColumnDefinition(t, r), 
o.label = 1;

case 1:
return o.trys.push([ 1, 3, , 4 ]), [ 4, this.executeQuery({
sql: n,
args: []
}) ];

case 2:
return o.sent(), [ 3, 4 ];

case 3:
return s = o.sent(), console.log("Error when adding field: ", s), [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.dropTable = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.executeQuery({
sql: "DROP TABLE IF EXISTS `" + e + "`",
args: []
}) ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, t.prototype.tableExists = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.executeQuery({
sql: "SELECT * FROM `" + e + "` LIMIT 1",
args: [],
readOnly: !0
}) ];

case 1:
return t.sent(), r("===== %s %s", e, this.isError ? "didn't exist" : "did exist"), 
[ 2, this.isError ];
}
});
});
}, t.prototype.buildFind = function(e, t, r, n, s, o) {
return this.buildSelect(e, t, r, n, s, "*");
}, t.prototype.buildSelect = function(e, t, r, n, s, o) {
var i = "SELECT " + o + " FROM `" + e + "`\n", a = [], u = this.buildWhere(n);
if (i += u.sql, u.args.forEach(function(e) {
a.push(e);
}), void 0 !== s.by) {
i += "ORDER BY ";
var c = [];
"string" == typeof s.by ? c.push(s.by) : c = s.by, c.map(function(e) {
var t = e.split(" ");
return "`" + t[0] + "` " + (t[1] || "asc").toUpperCase();
}), i += c.join(", ") + "\n";
}
return void 0 !== s.limit && (i += "LIMIT ", "number" == typeof s.limit ? (i += "?", 
a.push(s.limit)) : (i += "?, ?", a.push(s.limit[0]), a.push(s.limit[1])), i += "\n"), 
{
sql: i,
args: a,
readOnly: !0
};
}, t.prototype.buildWhere = function(e) {
delete e._hint;
var t = [], r = [];
for (var n in e) if (e.hasOwnProperty(n) && void 0 !== e[n]) {
var s = e[n].constructor === Array ? e[n] : [ e[n] ], o = n.split(" "), i = o[0], a = (o[1] || "=").toUpperCase(), u = "`" + i + "` ";
if ("IN" === a || "NOT_IN" === a || s.length > 1) "=" === a && (a = "IN"), a = a.replace(/NOT_/i, "NOT "), 
u += a + "(" + new Array(s.length).join("?,") + "?)", t.push(u), r = r.concat(s); else {
u += a + " ?";
for (var c = [], d = 0, p = s.length; d < p; d++) {
var f = s[d];
c.push(u), r.push(f);
}
t.push("(" + c.join(" OR ") + ")");
}
}
return {
sql: t.length ? "WHERE " + t.join(" AND ") + "\n" : "",
args: r
};
}, t.prototype.filterAllowedAttributes = function(e, t, r) {
var n = {};
for (var s in r) (t.hasOwnProperty(s) || s === e) && (n[s] = r[s]);
return n;
}, t.prototype.buildUpdate = function(e, t, r, n, s, o, i) {
var a = "UPDATE `" + e + "`\n", u = this.filterAllowedAttributes(t, i, n), c = this.buildSet(u), d = c.args;
a += c.sql;
var p = this.buildWhere(o);
return a += p.sql, p.args.forEach(function(e) {
d.push(e);
}), {
sql: a,
args: d
};
}, t.prototype.buildSet = function(e) {
var t = "", r = [], n = [];
for (var s in e) e.hasOwnProperty(s) && (r.push("`" + s + "` = ?"), n.push(e[s]));
return r.length && (t = "SET " + r.join(", ") + "\n"), {
sql: t,
args: n
};
}, t.prototype.buildInsert = function(e, t, r, n) {
if (!r.schema) throw new Error(r + " has no schema. Is not DB object");
var s = "INSERT INTO `" + e + "`", o = [], i = [], a = [], u = r.getValues();
u = this.filterAllowedAttributes(t, n, u), delete u[t];
for (var c in u) u.hasOwnProperty(c) && void 0 !== u[c] && (i.push("`" + c + "`"), 
o.push(u[c]), a.push("?"));
return s += "(" + i.join(", ") + ")\n", s += "VALUES(" + a.join(", ") + ")", {
sql: s,
args: o
};
}, t.prototype.buildDelete = function(e, t, r, n, s) {
var o = "DELETE FROM `" + e + "`\n", i = this.buildWhere(n);
return o += i.sql, {
sql: o,
args: i.args
};
}, t.prototype.buildCount = function(e, t, r, n, s, o) {
var i = [ "COUNT(*) AS total" ];
return this.buildSelect(e, t, r, n, s, i.join(","));
}, t.prototype._escapeDefaultValue = function(e) {
return "number" == typeof e ? "(" + e + ")" : '"' + e + '"';
}, t;
}(n.default), e("default", s);
}
};
}), System.register("backend/orm/indexeddbdatabase", [ "backend/orm/database" ], function(e, t) {
"use strict";
function r() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
window.dbLogOn && console.log.apply(console, e);
}
function n(e) {
return e && "object" == typeof e && e.constructor === Array;
}
function s(e, t) {
return n(t) ? t.includes(e) : t === e;
}
var o, i, a;
t && t.id;
return {
setters: [ function(e) {
o = e;
} ],
execute: function() {
i = 2, a = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.couldNotOpen = !1, t.adapterName = "IndexedDBDatabase", t;
}
return __extends(t, e), t.prototype.connect = function() {
var e = this;
return new Promise(function(t, r) {
var n = indexedDB.open(e.name, i);
n.onerror = function(t) {
e.couldNotOpen = !0, e.analyticsCollectEvent("indexeddb:open:onerror", !0), r();
}, n.onupgradeneeded = function(t) {
e.db = n.result, e.analyticsCollectEvent("indexeddb:open:onupgradeneeded", !0), 
console.log("onupgradeneeded:", t.oldVersion, "to", t.newVersion), t.oldVersion ? (e.objectStoresForMigration = {
feeds: n.transaction.objectStore("feeds"),
folders: n.transaction.objectStore("folders"),
posts: n.transaction.objectStore("posts")
}, t.oldVersion <= 1 && e.migrations.migrations[2](e)) : (e.objectStoresForMigration = {}, 
e.migrations.migrations.createSchema(e));
}, n.onsuccess = function() {
return e.db = n.result, t(e), !0;
};
});
}, t.prototype.close = function() {
this.db.close();
}, t.prototype.performMigrations = function() {
return Promise.resolve();
}, t.prototype.getMigrationVersion = function() {
return Promise.resolve(i.toString());
}, t.prototype.createMigrationTable = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.setMigrationVersion = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.executeQuery = function(e) {
if (r("=== Running query\n"), this.couldNotOpen) throw new Error("Database could not be opened");
return e();
}, t.prototype.makeTable = function(e, t, r) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
return this.db.objectStoreNames.contains(e) && this.db.deleteObjectStore(e), t = this.db.createObjectStore(e, {
autoIncrement: !0
}), this.objectStoresForMigration[e] = t, [ 2 ];
});
});
}, t.prototype.addIndex = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
return r = this.objectStoresForMigration[e], r.createIndex(t, t, {
unique: !1
}), [ 2 ];
});
});
}, t.prototype.addField = function(e, t, r) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.dropTable = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.tableExists = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, this.db.objectStoreNames.contains(e) ];
});
});
}, t.prototype.buildFind = function(e, t, r, n, s, o) {
var i = this;
return function() {
return new Promise(function(a, u) {
var c = i.db.transaction([ e ], "readonly"), d = c.objectStore(e), p = n._hint;
delete n._hint, n = i.normalizeTypesForStorage(n, o, t);
var f = i.cursorForWhere(d, n, s, t, r, p), l = f.cursorRequest, h = {
res: [],
meta: {
error: !1
}
}, m = i.getOffsetAndLimit(s), v = m[0], g = m[1], y = v > 0;
l.onerror = i.errorHandler(a), c.onabort = function() {
a(h);
}, l.onsuccess = function(e) {
var r = l.result;
if (r) {
if (y) return y = !1, void r.advance(v);
if (f.searchFunction && !f.searchFunction(r)) return void r.continue();
h.res.push(i.rowToObject(r, t)), !1 === g || h.res.length < g ? r.continue() : c.abort();
} else a(h);
};
});
};
}, t.prototype.buildUpdate = function(e, t, r, n, s, o, i) {
var a = this;
return function() {
return new Promise(function(s, u) {
var c = a.db.transaction([ e ], "readwrite"), d = c.objectStore(e), p = o._hint;
delete o._hint, o = a.normalizeTypesForStorage(o, i, t), n = a.normalizeTypesForStorage(n, i, t);
var f = a.cursorForWhere(d, o, {}, t, r, p), l = f.cursorRequest, h = {
res: [],
meta: {
error: !1
}
};
l.onerror = a.errorHandler(s), l.onsuccess = function(e) {
var r = l.result;
if (r) {
if (f.searchFunction && !f.searchFunction(r)) return void r.continue();
var o = r.value;
for (var i in n) i !== t && (o[i] = n[i]);
r.update(o), r.continue();
} else s(h);
};
});
};
}, t.prototype.buildInsert = function(e, t, r, n) {
var s = this;
if (!r.schema) throw new Error(r + " has no schema. Is not DB object");
return function() {
var o = s.db.transaction([ e ], "readwrite"), i = o.objectStore(e), a = r.getValues();
delete a[t], a = s.normalizeTypesForStorage(a, n, t), a = s.addDefaults(a, n);
var u = i.add(a);
return new Promise(function(e) {
u.onerror = s.errorHandler(e), u.onsuccess = function(t) {
e({
res: [],
meta: {
error: !1,
insertId: u.result
}
});
};
});
};
}, t.prototype.buildDelete = function(e, t, r, n, s) {
var o = this;
return function() {
var i = o.db.transaction([ e ], "readwrite"), a = i.objectStore(e), u = n._hint;
delete n._hint, n = o.normalizeTypesForStorage(n, s, t);
var c = o.cursorForWhere(a, n, {}, t, r, u), d = c.cursorRequest, p = {
res: [],
meta: {
error: !1
}
};
return new Promise(function(e, t) {
d.onerror = o.errorHandler(e), d.onsuccess = function(t) {
var r = d.result;
if (r) {
if (c.searchFunction && !c.searchFunction(r)) return void r.continue();
r.delete(), r.continue();
} else e(p);
};
});
};
}, t.prototype.buildCount = function(e, t, r, n, s, o) {
var i = this;
return function() {
return new Promise(function(a, u) {
var c = i.db.transaction([ e ], "readonly"), d = c.objectStore(e), p = n._hint;
delete n._hint, n = i.normalizeTypesForStorage(n, o, t);
var f = i.storeOrIndexForWhere(d, n, s, t, r, p), l = f.store, h = i.keyRangeForWhere(n, s, t, r, p), m = l.count(h.keyRange);
m.onerror = i.errorHandler(u), m.onsuccess = function(e) {
a({
res: [ {
total: m.result
} ],
meta: {
error: !1
}
});
};
});
};
}, t.prototype.rowToObject = function(e, t) {
var r = {};
r[t] = e.primaryKey || e.key;
for (var n in e.value) Object.prototype.hasOwnProperty.call(e.value, n) && n !== t && (r[n] = e.value[n]);
return r;
}, t.prototype.errorHandler = function(e) {
return function(t) {
r("=== Query error", t), e({
res: [],
meta: {
error: !0
}
});
};
}, t.prototype.cursorForWhere = function(e, t, r, o, i, a) {
var u = this.storeOrIndexForWhere(e, t, r, o, i, a), c = u.store, d = this.keyRangeForWhere(t, r, o, i, a), p = !1;
if (d.manualSearch && "object" == typeof t) {
var f = Object.keys(t), l = {};
f.forEach(function(e) {
u.index ? u.index.includes(e) || (l[e] = t[e]) : l[e] = t[e];
}), p = function(e) {
var r = !0;
if (u.index) {
var o = u.index;
(n(e.key) ? e.key : [ e.key ]).every(function(e, r) {
var n = t[o[r]];
return void 0 === n || s(e, n);
}) || (r = !1);
}
return Object.keys(l).forEach(function(t) {
var n = e.value;
if (!n) return void (r = !1);
s(n[t], l[t]) || (r = !1);
}), r;
};
}
return {
cursorRequest: c.openCursor(d.keyRange, this.directionFromHow(r)),
searchFunction: p
};
}, t.prototype.storeOrIndexForWhere = function(e, t, r, n, s, o) {
if (0 === Object.keys(t).length) return {
store: e,
index: [ n ]
};
if (t[n]) return {
store: e,
index: [ n ]
};
var i = o ? o.index : this.makeIndexNameFromWhereAndBy(t, r, s);
switch (i.length) {
case 0:
return {
store: e,
index: null
};

default:
return {
store: e.index(i.join(",")),
index: i
};
}
}, t.prototype.keyRangeForWhere = function(e, t, r, s, o) {
if (0 === Object.keys(e).length) return {
keyRange: void 0,
manualSearch: !1
};
if (e[r]) return n(e[r]) ? {
keyRange: void 0,
manualSearch: !0
} : {
keyRange: e[r],
manualSearch: !0
};
var i = !1, a = o ? o.index : this.makeIndexNameFromWhereAndBy(e, t, s), u = a.map(function(t) {
return t in e ? (n(e[t]) && (i = !0), e[t]) : -1 / 0;
}), c = a.map(function(t) {
return t in e ? e[t] : 1 / 0;
});
if (i) return {
keyRange: void 0,
manualSearch: !0
};
switch (a.length) {
case 0:
return {
keyRange: void 0,
manualSearch: !0
};

case 1:
return {
keyRange: IDBKeyRange.bound(u[0], c[0]),
manualSearch: !0
};

default:
return {
keyRange: IDBKeyRange.bound(u, c),
manualSearch: !0
};
}
}, t.prototype.makeIndexNameFromWhereAndBy = function(e, t, r) {
var n = Object.keys(e);
return t.by && t.by.forEach(function(e, t) {
e = e.split(" ")[0], n.push(e);
}), this.getIndexForKeys(n, r);
}, t.prototype.getIndexForKeys = function(e, t) {
var r = e.sort().join("|"), n = t.find(function(e) {
var t = "string" == typeof e ? e : e.sort().join("|");
return r === t;
});
if (!n) throw new Error("No available index for " + e.join("|"));
return "string" == typeof n && (n = [ n ]), n;
}, t.prototype.directionFromHow = function(e) {
var t = /\WDESC$/i;
return e.by && t.test(e.by[0]) ? "prev" : "next";
}, t.prototype.getOffsetAndLimit = function(e) {
var t = e.limit;
return t || [ 0, !1 ];
}, t.prototype.normalizeTypesForStorage = function(e, t, r) {
var s = {};
return Object.keys(e).forEach(function(o) {
if (n(e[o])) return void (s[o] = e[o]);
if (void 0 === t[o] && o !== r || (s[o] = e[o]), o === r && "number" != typeof s[o] && (s[o] = parseInt(s[o])), 
t[o] && null != s[o]) switch (t[o].type) {
case "int":
"number" != typeof s[o] && (s[o] = parseInt(s[o], 10));
break;

case "string":
case "text":
"string" != typeof s[o] && (s[o] = s[o] ? s[o].toString() : s[o]);
}
}), s;
}, t.prototype.addDefaults = function(e, t) {
return Object.keys(t).forEach(function(r) {
void 0 !== t[r].standard && null == e[r] && (e[r] = t[r].standard);
}), e;
}, t;
}(o.default), e("default", a);
}
};
}), System.register("backend/parser/localstore", [ "backend/parser/parserstore" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.addFeed = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return [ 4, e.save() ];

case 1:
return r = n.sent(), r ? [ 4, this.app.postMapper.addPostsToFeed(e, t) ] : [ 2, !1 ];

case 2:
return n.sent(), [ 2, !0 ];
}
});
});
}, t.prototype.addPosts = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.app.postMapper.addPostsToFeed(e, t) ];

case 1:
return r = n.sent(), r.length ? e.id && this.app.user.unreads.hasCachedForFeed(e.id) ? (this.app.user.unreads.incrementForFeed(e.id, r.filter(function(e) {
return !e.is_read;
}).length, {
manual: !1
}), [ 3, 4 ]) : [ 3, 2 ] : [ 3, 4 ];

case 2:
return [ 4, this.app.user.unreads.count() ];

case 3:
n.sent(), n.label = 4;

case 4:
return [ 2 ];
}
});
});
}, t;
}(r.default), e("default", n);
}
};
}), System.register("backend/model/guid", [ "backend/orm/model" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t(r, n) {
var s = e.call(this) || this;
return s.mapperName = "guid", s.model = "guid", s.schema = t.schema, s.setup(r, n), 
s;
}
return __extends(t, e), t.prototype.setFromDB = function(e) {
this.hash = e;
}, t.prototype.getCacheId = function() {
return "";
}, t.schema = {
hash: {
type: "text"
}
}, t;
}(r.default), e("default", n);
}
};
}), System.register("backend/parser/adderstore", [ "backend/parser/parserstore" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t(t) {
var r = e.call(this, t) || this;
return r.guids = {}, r.app.events.subscribe("feed:removed", r.eventFeedsRemoved.bind(r), r.eventFeedsRemoved), 
r;
}
return __extends(t, e), t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.app.events.unsubscribe("feed:removed", this.eventFeedsRemoved);
}, t.prototype.addFeed = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i, a, u;
return __generator(this, function(c) {
switch (c.label) {
case 0:
if (!e.id) return [ 3, 8 ];
c.label = 1;

case 1:
return c.trys.push([ 1, 3, , 4 ]), [ 4, e.saveWith(this.app.adderDatabase) ];

case 2:
return r = c.sent(), r ? [ 3, 4 ] : [ 2, !1 ];

case 3:
return n = c.sent(), console.error("Could not save with adderDatabase"), console.error(n), 
[ 2, !1 ];

case 4:
return c.trys.push([ 4, 6, , 7 ]), [ 4, this.addPosts(e, t) ];

case 5:
return c.sent(), [ 3, 7 ];

case 6:
return s = c.sent(), console.error("Could not save posts using Adder with ID present."), 
console.error(s), [ 3, 7 ];

case 7:
return [ 2, !0 ];

case 8:
return c.trys.push([ 8, 10, , 11 ]), [ 4, e.saveWith(this.app.adderDatabase) ];

case 9:
return c.sent(), [ 3, 11 ];

case 10:
return o = c.sent(), console.error("Could not save with adderDatabase 2."), console.error(o), 
[ 2, !1 ];

case 11:
if (!e.id) return [ 2, !1 ];
if (e.guid = e.id.toString(), delete e.id, (i = this.app.store.feedBy("guid", e.guid)) && i.id) return e.id = i.id, 
[ 2, !0 ];
c.label = 12;

case 12:
return c.trys.push([ 12, 14, , 15 ]), [ 4, this.addPosts(e, t) ];

case 13:
return c.sent(), [ 3, 15 ];

case 14:
return a = c.sent(), console.error("Could not save posts using Adder."), console.error(a), 
[ 3, 15 ];

case 15:
return c.trys.push([ 15, 17, , 18 ]), [ 4, e.save() ];

case 16:
return [ 2, c.sent() ];

case 17:
return u = c.sent(), console.error("Could not save Adder feed."), [ 2, !1 ];

case 18:
return [ 2 ];
}
});
});
}, t.prototype.addPosts = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n = this;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return e.id ? (r = t, r.forEach(function(t) {
t.adder_feed_id = e.guid, t.feed_id = e.id;
}), [ 4, this.loadGuids(e) ]) : (console.error("Can't add posts to non-persisted feed."), 
[ 2 ]);

case 1:
return s.sent(), r = r.filter(function(e) {
return n.isNewPost(e);
}), r.length ? [ 4, new Promise(function(e, r) {
n.app.postMapper.pushDatabase(n.app.adderDatabase, function() {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.app.postMapper.saveMany(t) ];

case 1:
return r.sent(), this.addGuidsIfSuccessful(t), e(), [ 2 ];
}
});
});
});
}) ] : [ 2 ];

case 2:
return s.sent(), [ 2 ];
}
});
});
}, t.prototype.addGuidsIfSuccessful = function(e) {
var t = this;
e.forEach(function(e) {
e.error || t.addGuidForPost(e);
});
}, t.prototype.addGuid = function(e, t) {
this.guids[e] || (this.guids[e] = {}), this.guids[e][t] = !0;
}, t.prototype.addGuidForPost = function(e) {
e.feed_id ? this.addGuid(e.feed_id, e.getGUIDHash()) : console.warn("[adderstore.addGuidForPost] Not adding because no feed_id.", e);
}, t.prototype.hasGuid = function(e) {
return !!e.feed_id && !(!this.guids[e.feed_id] || !this.guids[e.feed_id][e.getGUIDHash()]);
}, t.prototype.isNewPost = function(e) {
return !this.hasGuid(e);
}, t.prototype.loadGuids = function(e) {
var t = this;
return !e.id || this.guids[e.id] ? Promise.resolve() : new Promise(function(r, n) {
t.app.guidMapper.pushDatabase(t.app.adderDatabase, function() {
return __awaiter(t, void 0, void 0, function() {
var t, n = this;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return [ 4, this.app.guidMapper.find({
id: e.guid
}) ];

case 1:
return t = s.sent(), t.results && t.results.forEach(function(t) {
n.addGuid(e.id, t.hash);
}), r(), [ 2 ];
}
});
});
});
});
}, t.prototype.eventFeedsRemoved = function(e) {
console.log("removing guids for: %d", e.feed), delete this.guids[e.feed];
}, t.prototype.errorFeedFailed = function(e) {
return e.type = "broken", e.saveWith(this.app.adderDatabase);
}, t;
}(r.default), e("default", n);
}
};
}), System.register("backend/sqs", [], function(e, t) {
"use strict";
var r;
t && t.id;
return {
setters: [],
execute: function() {
r = function() {
function e(e) {
this.app = e;
}
return e.prototype.destroy = function() {}, e;
}(), e("default", r);
}
};
}), System.register("backend/sqs/postqueue", [ "backend/sqs", "backend/config" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.run = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
return t = e.feed, r = e.posts, this.app.user.backend.isConnectedToBackend() ? "rss" === t.type ? [ 2, this.app.adderStore.addPosts(t, r) ] : [ 2 ] : [ 3, 1 ];

case 1:
return t.id ? [ 4, this.app.localStore.addPosts(t, r) ] : [ 3, 4 ];

case 2:
return s.sent(), Math.random() < n.default.chanceOfPruneOnCrawl ? [ 4, this.app.feedMapper.prunePostsToMax(t.id, n.default.minNumberOfPosts, !1) ] : [ 3, 4 ];

case 3:
s.sent(), s.label = 4;

case 4:
return [ 2 ];
}
});
});
}, t;
}(r.default), e("default", s);
}
};
}), System.register("backend/sqs/feedqueue", [ "backend/sqs" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.run = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n, s, n, o, i, a, u, n, c;
return __generator(this, function(d) {
switch (d.label) {
case 0:
return t = e.feed, r = e.posts, this.app.user.backend.isConnectedToBackend() ? "rss" !== t.type ? [ 3, 2 ] : [ 4, this.app.adderStore.addFeed(t, r) ] : [ 3, 11 ];

case 1:
return n = d.sent(), !n || t.errorMessages ? [ 2, {
success: !1,
errors: t.errorMessages || {
feed: "Could not save the feed. Please try again later."
},
errorCode: "internal_server_error"
} ] : [ 2, {
success: !0,
errors: !1,
errorCode: !1
} ];

case 2:
return s = r.filter(function(e) {
return !e.is_read;
}), [ 4, t.save() ];

case 3:
if (!(n = d.sent()) || t.errorMessages) return [ 2, {
success: !1,
errors: t.errorMessages || {
feed: "Could not save the feed. It might be temporary."
},
errorCode: t.errorCode || "internal_server_error"
} ];
o = 0, i = s, d.label = 4;

case 4:
if (!(o < i.length)) return [ 3, 9 ];
a = i[o], a.id = a.guid, d.label = 5;

case 5:
return d.trys.push([ 5, 7, , 8 ]), [ 4, a.save() ];

case 6:
return d.sent(), [ 3, 8 ];

case 7:
return u = d.sent(), console.error("Could not save unread post:"), console.error(u), 
[ 3, 8 ];

case 8:
return o++, [ 3, 4 ];

case 9:
return [ 2, {
success: !0,
errors: !1,
errorCode: !1
} ];

case 10:
return [ 3, 14 ];

case 11:
return d.trys.push([ 11, 13, , 14 ]), [ 4, this.app.localStore.addFeed(t, r) ];

case 12:
return n = d.sent(), n ? [ 2, {
success: !0,
errors: !1,
errorCode: !1
} ] : [ 2, {
success: !1,
errors: t.errorMessages || {
feed: "Could not save the feed to your database."
},
errorCode: t.errorCode || !1
} ];

case 13:
return c = d.sent(), [ 2, {
success: !1,
errorCode: "database_create_error",
errors: {
base: "Unknown local storage problem."
}
} ];

case 14:
return [ 2 ];
}
});
});
}, t;
}(r.default), e("default", n);
}
};
}), System.register("backend/mapper/postmapper", [ "backend/orm/mapper" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.table = "posts", t.indexes = [ "feed_id", "mega_guid" ], t.indexedDBIndexes = [ "published", [ "feed_id", "published" ], [ "is_read", "published" ], [ "is_starred", "published" ], [ "feed_id", "is_read", "published" ], "feed_id", "mega_guid", [ "feed_id", "guid" ], [ "feed_id", "is_read" ], [ "feed_id", "is_starred" ] ], 
t;
}
return __extends(t, e), t.prototype.install = function(t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return [ 4, e.prototype.install.call(this, t) ];

case 1:
o.sent(), r = 0, n = this.getIndexes(), o.label = 2;

case 2:
return r < n.length ? (s = n[r], [ 4, this.addIndex(t, s) ]) : [ 3, 5 ];

case 3:
o.sent(), o.label = 4;

case 4:
return r++, [ 3, 2 ];

case 5:
return [ 2 ];
}
});
});
}, t.prototype.addPostsToFeed = function(e, t) {
return __awaiter(this, void 0, void 0, function() {
var r, n, s, o, i, a = this;
return __generator(this, function(u) {
switch (u.label) {
case 0:
return e.id ? (r = e.id, 0 === t.length ? [ 2, [] ] : (t.forEach(function(t) {
t.feed_id = r, e.allReadOnNextCrawl ? t.is_read = 1 : e.shouldTrackUnreads(a.app.user.preferences.get("global:trackUnreads")) || (t.is_read = 1, 
t.showNotificationAnyway = !0);
}), delete e.allReadOnNextCrawl, this.app.user.backend.isConnectedToBackend() ? [ 2, [] ] : (n = [], 
s = {}, t.forEach(function(e) {
var t = e.getGUIDHash();
s[t] = e, n.push(t);
}), [ 4, this.find({
mega_guid: n
}) ]))) : (console.error("Adding posts to feed with non-persisted feed"), [ 2, [] ]);

case 1:
return o = u.sent(), o.results ? (o.results.forEach(function(e) {
delete s[e.mega_guid];
}), i = Object.values(s), 0 === i.length ? [ 2, [] ] : [ 4, this._addPosts(i) ]) : [ 3, 3 ];

case 2:
return u.sent(), this.app.events.send("feed:updated", {
feed: e.id,
manual: !1
}), [ 2, i ];

case 3:
return [ 2, [] ];
}
});
});
}, t.prototype._addPosts = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, r, n;
return __generator(this, function(s) {
switch (s.label) {
case 0:
this.app.events.hold(), s.label = 1;

case 1:
s.trys.push([ 1, , 6, 7 ]), t = 0, r = e, s.label = 2;

case 2:
return t < r.length ? (n = r[t], [ 4, this._addPost(n) ]) : [ 3, 5 ];

case 3:
s.sent(), s.label = 4;

case 4:
return t++, [ 3, 2 ];

case 5:
return [ 3, 7 ];

case 6:
return this.app.events.release(), [ 7 ];

case 7:
return [ 2 ];
}
});
});
}, t.prototype._addPost = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, e.save() ];

case 1:
return t = r.sent(), t ? this.app.events.send("post:added", {
post: e.id
}) : console.error("Could not add post:", e.title), [ 2 ];
}
});
});
}, t.prototype.saveMany = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.db.insert(this.table, this.pk, e, this.getSchema()) ];

case 1:
return t = r.sent(), this.onSaveOrUpdate(t, e), [ 2 ];
}
});
});
}, t.prototype.getPostSort = function() {
return "WebSQLDatabase" === this.db.adapterName ? [ "published desc", "id desc" ] : [ "published desc" ];
}, t.prototype.getPostSortOldestFirst = function() {
return "WebSQLDatabase" === this.db.adapterName ? [ "published", "id" ] : [ "published" ];
}, t;
}(r.default), e("default", n);
}
};
}), System.register("backend/mapper/foldermapper", [ "backend/orm/mapper" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.table = "folders", t.model = "Folder", t;
}
return __extends(t, e), t;
}(r.default), e("default", n);
}
};
}), System.register("backend/mapper/guidmapper", [ "backend/orm/mapper" ], function(e, t) {
"use strict";
var r, n;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.table = "guids", t.model = "Guid", t;
}
return __extends(t, e), t;
}(r.default), e("default", n);
}
};
}), System.register("backend/mapper/postcollectionmapper", [ "backend/orm/mapper" ], function(e, t) {
"use strict";
var r, n, s;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = 600, s = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.table = "post_collections", t.lastFetch = 0, t.isFetching = !1, t._waitingCallbacks = [], 
t;
}
return __extends(t, e), t.prototype.install = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, t.prototype.shouldReload = function() {
if (this.app.user.canPostCollections()) {
return (Date.now() - this.lastFetch) / 1e3 >= n;
}
return !1;
}, t.prototype.getLoadedCollections = function() {
return !!this.app.user.canPostCollections() && this.app.store.postCollections();
}, t.prototype.getAll = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
if (!this.app.user.canPostCollections()) return [ 3, 5 ];
if (!this.shouldReload()) return [ 2, this.app.store.postCollections() ];
t.label = 1;

case 1:
return t.trys.push([ 1, 3, , 4 ]), [ 4, this.performReload() ];

case 2:
return [ 2, t.sent() ];

case 3:
return e = t.sent(), this.isFetching = !1, console.error(e), [ 2, [] ];

case 4:
return [ 3, 6 ];

case 5:
return [ 2, !1 ];

case 6:
return [ 2 ];
}
});
});
}, t.prototype.performReload = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return this.isFetching ? (e = function() {}, t = new Promise(function(t) {
e = t;
}), this._waitingCallbacks.push(e), [ 4, t ]) : [ 3, 2 ];

case 1:
return [ 2, n.sent() ];

case 2:
return this.isFetching = !0, this.app.store.clearPostCollections(), [ 4, this.find({}) ];

case 3:
return n.sent(), r = this.app.store.postCollections(), this._waitingCallbacks.forEach(function(e) {
return e(r);
}), this._waitingCallbacks = [], this.isFetching = !1, this.lastFetch = Date.now(), 
[ 2, this.app.store.postCollections() ];
}
});
});
}, t;
}(r.default), e("default", s);
}
};
}), System.register("backend/sharers", [ "backend/config", "library/ts/request" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
} ],
execute: function() {
s = function() {
function e(e) {
this.sharers = [], this.app = e, this.reloadRequest = new n.default({
url: r.default.feeder.api + "/sharers",
method: "GET",
addFeederAuthorization: !0
});
}
return e.prototype.load = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return this.app.user.backend.isConnectedToBackend() ? [ 4, this.reloadRequest.send() ] : [ 3, 2 ];

case 1:
return e = r.sent(), t = e.json(), t && t.sharers && this.setPluginsFromJSON(t.sharers), 
[ 2, this.sharers ];

case 2:
return [ 2, [] ];
}
});
});
}, e.prototype.share = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, s, o;
return __generator(this, function(i) {
switch (i.label) {
case 0:
return t = new n.default({
url: r.default.feeder.api + "/share",
addFeederAuthorization: !0,
method: "POST",
contentType: "json"
}), [ 4, t.send({
post: {
share: {
sharer_id: e.sharerId,
post_id: e.postId,
email: e.email
}
}
}) ];

case 1:
if (s = i.sent(), (o = s.json()) && o.share && o.share.id) return e.id = o.share.id, 
[ 2, e ];
throw new Error("Invalid response. No ID provided");
}
});
});
}, e.prototype.setPluginsFromJSON = function(e) {
"object" == typeof e && "function" == typeof e.forEach && (this.sharers = e.map(function(e) {
return o.buildFromJson(e);
}));
}, e;
}(), e("Sharers", s), o = function() {
function e() {}
return e.buildFromJson = function(t) {
var r = new e();
return r.id = t.id, r.typeId = t.type_id, r.name = t.name, r.url = t.url, r.popupWidth = t.popup_width, 
r.popupHeight = t.popup_height, r;
}, e;
}(), e("Sharer", o);
}
};
}), System.register("backend/application", [ "backend/config", "backend/user", "backend/appui", "backend/cachestore", "backend/discovery", "backend/feedevents", "backend/feedpoller", "backend/feedupdater", "backend/feedfinder", "backend/feedsync", "backend/feedernotifications", "backend/pusherreceiver", "backend/domevents", "backend/feedanalytics", "backend/websqltoindexeddb", "backend/apiserver", "backend/orm/restdatabase", "backend/orm/websqldatabase", "backend/orm/indexeddbdatabase", "backend/migrations", "backend/parser/localstore", "backend/parser/adderstore", "backend/sqs/postqueue", "backend/sqs/feedqueue", "backend/mapper/feedmapper", "backend/mapper/postmapper", "backend/mapper/foldermapper", "backend/mapper/guidmapper", "backend/mapper/postcollectionmapper", "backend/model/feed", "backend/model/post", "backend/model/folder", "backend/model/guid", "backend/model/PostCollection", "ext/ext", "backend/platformload", "backend/sharers" ], function(e, t) {
"use strict";
var r, n, s, o, i, a, u, c, d, p, f, l, h, m, v, g, y, b, _, w, k, F, S, C, T, x, I, P, E, R, O, U, A, D, M, L, N, B;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
l = e;
}, function(e) {
h = e;
}, function(e) {
m = e;
}, function(e) {
v = e;
}, function(e) {
g = e;
}, function(e) {
y = e;
}, function(e) {
b = e;
}, function(e) {
_ = e;
}, function(e) {
w = e;
}, function(e) {
k = e;
}, function(e) {
F = e;
}, function(e) {
S = e;
}, function(e) {
C = e;
}, function(e) {
T = e;
}, function(e) {
x = e;
}, function(e) {
I = e;
}, function(e) {
P = e;
}, function(e) {
E = e;
}, function(e) {
R = e;
}, function(e) {
O = e;
}, function(e) {
U = e;
}, function(e) {
A = e;
}, function(e) {
D = e;
}, function(e) {
M = e;
}, function(e) {
L = e;
}, function(e) {
N = e;
} ],
execute: function() {
B = function() {
function e() {
var t = this;
this.popupLastScroll = 0, this.retryTimes = 0, this.isLoaded = !1, this.isDestroyed = !1, 
this.socketIsConnected = !1, console.log("Hello"), this.initializedAt = Date.now(), 
this.id = e.counterID++, this.store = new o.default(this), this.user = new n.default(this), 
this.events = new a.default(), this.poller = new u.default(this), this.updater = new c.default(this), 
this.finder = new d.default(this), this.sync = new p.default(this), this.notifications = new f.default(this), 
this.pusher = new l.default(this), this.domEvents = new h.default(this), this.analytics = new m.default(this), 
this.apiServer = new g.default(this), this.localStore = new k.default(this), this.adderStore = new F.default(this), 
this.sqs = {
postQueue: new S.default(this),
feedQueue: new C.default(this)
}, this.discovery = new i.Discovery(this), this.sharers = new N.Sharers(this), this.ui = new s.default(this), 
L.Platform.env.setInstallListener(function(e, r) {
if (setTimeout(function() {
t.analytics.collectEvent("app:install_event", (e || "") + ":" + (r || ""));
}, 5e3), console.log("[log] Install event", e, r), "install" === e && !r) {
var n = !!localStorage.clientId;
setTimeout(function() {
n || t.onNewInstall();
}, 1500);
}
});
}
return e.prototype.onNewInstall = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return [ 4, L.UI.queryTabsByRegex(/feeder.co.*\/onboarding/) ];

case 1:
return e = n.sent(), e.length ? (t = e[0].id, L.UI.activateTab(t), L.UI.executeScriptInTab(t, "var event = new CustomEvent('feeder:installed', { bubbles: true }); document.body.dispatchEvent(event);")) : L.UI.openTab(r.default.feeder.installedURL), 
[ 2 ];
}
});
});
}, e.prototype.getCurrentDBAdapter = function() {
return v.default.hasMigrated() ? L.Platform.env.DBAdapter : (M.default.isOnline(), 
L.Platform.env.DBAdapter);
}, e.prototype.getReadyToRumble = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
this.apiDatabase = new y.default(r.default.feeder.api, null, this), this.adderDatabase = new y.default(r.default.feeder.adder, null, this), 
void 0 !== window.openDatabase && "WebSQLDatabase" === L.Platform.env.DBAdapter ? this.websqlDatabase = new b.default("Feeds", new w.default(w.default.migrations), this) : this.indexedDBDatabase = new _.default("Feeds", new w.default(w.default.indexedDBMigrations), this), 
e = this.getActiveDatabase(), this.feedMapper = new T.default(e, R.default), this.postMapper = new x.default(e, O.default), 
this.folderMapper = new I.default(e, U.default), this.guidMapper = new P.default(e, A.default), 
this.postCollectionMapper = new E.default(e, D.PostCollection), n.label = 1;

case 1:
return n.trys.push([ 1, 3, , 4 ]), [ 4, e.connect() ];

case 2:
return n.sent(), [ 3, 4 ];

case 3:
return t = n.sent(), console.log("================================="), console.log("========== WARNING =============="), 
console.log("================================="), console.error(t), [ 3, 4 ];

case 4:
return [ 4, this.start(e) ];

case 5:
return n.sent(), [ 2, this ];
}
});
});
}, e.prototype.getDatabaseWithAdapter = function(e) {
switch (e) {
case "APIDatabase":
return this.apiDatabase;

case "RESTDatabase":
return this.adderDatabase;

case "IndexedDBDatabase":
return this.indexedDBDatabase;

default:
return this.websqlDatabase;
}
}, e.prototype.getActiveDatabase = function() {
return this.getDatabaseWithAdapter(this.getCurrentDBAdapter());
}, e.prototype.start = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return g.routes(this.apiServer, this), [ 4, this.runSetupSteps() ];

case 1:
return e.sent(), [ 4, this.ready() ];

case 2:
return e.sent(), [ 2, this ];
}
});
});
}, e.prototype.runSetupSteps = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.user.install() ];

case 1:
return e.sent(), [ 4, this.user.fixOrphanFeeds() ];

case 2:
return e.sent(), [ 4, this.sync.fetchSettingsFromServer() ];

case 3:
return e.sent(), [ 2 ];
}
});
});
}, e.prototype.ready = function() {
return __awaiter(this, void 0, void 0, function() {
var e = this;
return __generator(this, function(t) {
return this.isFailedState() ? (console.log("App is in failed state. Retry in %d ms", r.default.retryInitializeTimeout), 
setTimeout(function() {
return e.retryInitialize();
}, r.default.retryInitializeTimeout), [ 2 ]) : (console.log("App started safely. Go go go"), 
this.startListeners(), this.user.unreads.count(), this.ui.setBadge(), this.loaded(), 
this.backendLoadCallback && this.backendLoadCallback(), this.analytics.collectEvent("app:initialize_time", Date.now() - this.initializedAt), 
this.discovery.loadPlugins(), this.setupUninstallUrl(), [ 2 ]);
});
});
}, e.prototype.setupUninstallUrl = function() {
var e = this.user.prepareExternalURLWithTracking(r.default.feeder.uninstallURL);
L.Platform.env.setUninstallUrl(e);
}, e.prototype.onLoad = function(e) {
if (this.isLoaded) return void e();
this.onLoadCallback = e;
}, e.prototype.loaded = function() {
this.isLoaded = !0, this.onLoadCallback && this.onLoadCallback();
}, e.prototype.startListeners = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, r;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return this.updater.startListening(), this.poller.startPolling(), this.finder.startListening(), 
this.ui.startListening(), this.notifications.check(), this.user.backend.isConnectedToBackend() || !this.user.preferences.get("backend:shouldCheckStatus") ? [ 3, 2 ] : [ 4, this.user.backend.checkIfIsLoggedIn() ];

case 1:
e = n.sent(), t = e[0], r = e[1].isFirstTime, this.user.preferences.set("backend:shouldCheckStatus", !1), 
t && r && this.user.backend.connectWithBackend(t.token), n.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.switchDatabase = function(e) {
this.feedMapper.db = e, this.postMapper.db = e, this.folderMapper.db = e, this.guidMapper.db = e, 
this.postCollectionMapper.db = e;
}, e.prototype.getMapperByName = function(e) {
switch (e) {
case "feed":
return this.feedMapper;

case "folder":
return this.folderMapper;

case "post":
return this.postMapper;

case "guid":
return this.guidMapper;

case "postCollection":
return this.postCollectionMapper;

default:
throw new Error("No mapper for " + e);
}
}, e.prototype.isFailedState = function() {
return this.sync.isFailedState() || this.user.FAILED || this.user.structure.FAILED;
}, e.prototype.retryInitialize = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return console.log("Asked to retry (%s time)", this.retryTimes), console.log("... Retrying"), 
this.retryTimes++, [ 4, this.runSetupSteps() ];

case 1:
return e.sent(), this.isFailedState() ? [ 2, !1 ] : (this.ready(), [ 2, !0 ]);
}
});
});
}, e.prototype.destroy = function() {
this.isDestroyed = !0, this.poller.destroy(), this.updater.destroy(), this.finder.destroy(), 
this.ui.destroy(), this.sync.destroy(), this.user.destroy(), this.events.destroy(), 
this.pusher.destroy(), this.domEvents.destroy(), this.analytics.destroy(), this.apiServer.destroy(), 
this.localStore.destroy(), this.adderStore.destroy(), this.sqs.feedQueue.destroy(), 
this.sqs.postQueue.destroy();
}, e.counterID = 0, e;
}(), e("default", B);
}
};
}), System.register("backend/analytics", [ "ext/ext" ], function(e, t) {
"use strict";
var r, n, s, o;
t && t.id;
return {
setters: [ function(e) {
r = e;
} ],
execute: function() {
n = function() {
function e(e) {
this.id = e, this.id && (ga("create", this.id, "auto"), ga("set", "checkProtocolTask", function() {}));
}
return e.prototype.trackPageView = function() {
this.id && (r.default.isOnline() ? ga("send", "pageview") : ga("send", "pageview", "feeder.co.extension" + window.document.location.pathname + window.document.location.search));
}, e.prototype.trackInAppPageView = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
this.id && (r.default.isOnline() ? ga("send", "pageview", "inapp/" + e.join("/")) : ga("send", "pageview", "feeder.co.extension/inapp/" + e.join("/")));
}, e;
}(), s = new n("UA-19457192-1"), e("analytics", s), o = new n(!1), e("analyticsFAKE", o), 
e("default", n);
}
};
}), System.register("backend/corsblocker", [], function(e, t) {
"use strict";
function r() {
if ("undefined" != typeof chrome && chrome.tabs) {
var e = new o();
return chrome.tabs.query({}, function(t) {
t.forEach(function(t) {
e.addTabOrRemoveIfNeeded(t);
});
}), chrome.tabs.onCreated.addListener(function(t) {
e.addTabOrRemoveIfNeeded(t);
}), chrome.tabs.onUpdated.addListener(function(t, r, n) {
e.addTabOrRemoveIfNeeded(n);
}), chrome.tabs.onRemoved.addListener(function(t) {
e.removeHeaderListener(t);
}), e;
}
return "not-available";
}
var n, s, o;
t && t.id;
return e("startCorsBlocker", r), {
setters: [],
execute: function() {
n = [ "content-security-policy", "x-frame-options" ], s = [ /^https?:\/\/feeder\.co\// ], 
o = function() {
function e() {
var e = this;
this.headerListener = function(t) {
return e.feederTabs[t.tabId] ? {
responseHeaders: t.responseHeaders.filter(function(e) {
return n.indexOf(e.name.toLowerCase()) < 0;
})
} : {};
}, this.feederTabs = {}, this.listenerAdded = !1;
}
return e.prototype.urlMatchesFeederServers = function(e) {
return s.some(function(t) {
return t.test(e);
});
}, e.prototype.addTabOrRemoveIfNeeded = function(e) {
this.urlMatchesFeederServers(e.url) ? this.addHeaderListenerIfNeeded(e.id) : this.removeHeaderListener(e.id);
}, e.prototype.addHeaderListenerIfNeeded = function(e) {
if (!this.feederTabs[e]) {
var t = [ this.headerListener, {
urls: [ "<all_urls>" ],
tabId: e
}, [ "blocking", "responseHeaders" ] ];
chrome.webRequest.onHeadersReceived.addListener(t[0], t[1], t[2]), this.feederTabs[e] = t;
}
}, e.prototype.removeHeaderListener = function(e) {
if (this.feederTabs[e]) {
var t = this.feederTabs[e];
chrome.webRequest.onHeadersReceived.removeListener(t[0]), delete this.feederTabs[e];
}
}, e;
}(), e("CORSBlocker", o);
}
};
}), System.register("backend/main", [ "ext/ext", "backend/platformload", "backend/application", "backend/config", "backend/analytics", "standard_feeds", "ext/chrome/env", "backend/orm/model", "backend/model/feed", "backend/model/folder", "backend/model/post", "backend/export-import", "backend/corsblocker", "backend/model/FeedOnlyStarred", "backend/model/FeedOnlyUnread", "backend/model/PostFetcher", "backend/model/UserMessage" ], function(e, t) {
"use strict";
var r, n, s, o, i, a, u, c, d, p, f, l, h, m, v, g, y, b, _, w, k, F, S, C, T, x;
t && t.id;
return {
setters: [ function(e) {
r = e;
}, function(e) {
n = e;
}, function(e) {
s = e;
}, function(e) {
o = e;
}, function(e) {
i = e, h = e;
}, function(e) {
a = e;
}, function(e) {
u = e;
}, function(e) {
c = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
l = e;
}, function(e) {
m = e;
}, function(e) {
v = e;
}, function(e) {
g = e;
}, function(e) {
y = e;
}, function(e) {
b = e;
} ],
execute: function() {
if (_ = r.default.getBackgroundPage(), w = _ === window, k = [], F = !1, S = function() {}, 
C = !0, T = null, window && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
"feeder.env": n.Platform.name
})), w) {
F = !1, k = [], S = function(e, t) {
if (F) try {
e();
} catch (e) {
console.error("Could not call fn()"), console.error(e);
} else if (k.push(e), t) try {
t();
} catch (e) {
console.error("Could not call loadingCallback()"), console.error(e);
}
};
var e = function() {
F = !0, k.forEach(function(e) {
try {
e();
} catch (e) {
console.error("Could not call callback() in backendListeners"), console.error(e);
}
}), k = [];
};
T = new s.default(), T.backendLoadCallback = e, T.getReadyToRumble().then(function() {
console.log("Rumble ready.");
}).catch(function(e) {
throw console.error(e), e;
});
}
x = window, x.corsBlocker || (x.corsBlocker = m.startCorsBlocker()), x.app = T, 
x.analytics = i.analytics, x.analyticsFAKE = i.analyticsFAKE, x.Platform = n.Platform, 
x.Ext = r.default, x.onAppReady = S, x.Config = o.default, x.UI = n.UI, x.ChromePlatformPort = u.ChromePlatformPort, 
x.STANDARD_FEEDS = a.STANDARD_FEEDS, x.Model = c.default, x.Feed = d.default, x.FeedOnlyUnread = g.default, 
x.FeedOnlyStarred = v.default, x.PostFetcher = y.PostFetcher, x.Folder = p.default, 
x.Post = f.default, x.Import = l.Import, x.Application = s.default, x.Analytics = h.default, 
x.UserMessage = b.UserMessage;
}
};
});