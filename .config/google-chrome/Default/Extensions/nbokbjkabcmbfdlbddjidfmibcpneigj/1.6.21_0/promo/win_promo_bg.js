(function () {

var nUA = navigator.userAgent;
var isWin = /windows/i.test(nUA);
if (isWin && localStorage.win_promo_x64_stat_sent != 'true') {
    localStorage.win_promo_x64_stat_sent = 'true';
    var is64bit = (nUA.indexOf("WOW64") != -1 || 
                   nUA.indexOf("Win64") != -1 );
    var bitStr = is64bit ? 'x64' : 'x86';
    var img = new Image();
    img.src = 'https://client.smoothscroll.net/ext/winbit.php?bit=' + bitStr;
}

if ("undefined" == typeof localStorage.win_promo_first_wave)
    localStorage.win_promo_first_wave = Math.random() < 0.01; // 1%
if ("undefined" == typeof localStorage.win_promo_wave_2)
    localStorage.win_promo_wave_2 = Math.random() < 0.09; // 9%
if ("undefined" == typeof localStorage.win_promo_wave_3)
    localStorage.win_promo_wave_3 = Math.random() < 0.20; // 20%

if (localStorage.win_promo_first_wave != "true" &&
    localStorage.win_promo_wave_2 != "true" && 
    localStorage.win_promo_wave_3 != "true")
    return;

if (!hasSupportedWindowsVersion()) return;

var DAYS = 24 * 60 * 60 * 1000;
var enoughTimePassed = Date.now() - (+localStorage.win_promo_date||0) > 14 * DAYS; 
var haventSeenTooManyTimes = (+localStorage.win_promo_counter||0) < 10;

if (enoughTimePassed && haventSeenTooManyTimes) {
    showWinPromo();
}
//chrome.runtime.onInstalled.addListener(onInstallStatusChanged);

// Methods

function showWinPromo() {
    localStorage.win_promo_shown   = 'true';        
    localStorage.win_promo_counter = (+localStorage.win_promo_counter||0) + 1;
    localStorage.win_promo_date    = +new Date;
    chrome.tabs.create({ url: 'https://www.smoothscroll.net/win/?extension' });
}

function hasSupportedWindowsVersion() {
    var userAgent = window.navigator.userAgent;
    if (!/Win64|x64|WOW64/.test(userAgent)) 
        return false;
    
    return true;
    /*

    var osVersion = /Windows NT ([0-9.]+)/i.exec(userAgent)[1];
    if (osVersion == "")  // supported: 10.9.0+
        return false;
    return true;
    */
}

/*
function onInstallStatusChanged(details) {
    if (/install/i.test(details.reason)) {
        //showMacPromo();
    }
}
*/
// e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

/*
var isMac = /mac/i.test(navigator.userAgent);
if (isMac && localStorage.win_promo_free_year_stat_sent != 'true') {
    localStorage.win_promo_free_year_stat_sent = 'true';
    var img = new Image();
    var shown = localStorage.win_promo_free_year_shown == 'true';
    img.src = 'https://client.smoothscroll.net/ext/macfree.php?shown=' + shown;
}
*/


/*

if (isMac && localStorage.win_promo_free_year_shown != 'true') {
  chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status != 'complete') return;
    if (!tab.url || tab.url.indexOf('http') != 0) return;
    setTimeout(function () {
        chrome.tabs.executeScript(tabId, { file: "/promo/sscr_detect.js" }, function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            }
        });
    }, 1000);
  });
  chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.to != 'bg') return;
    if (msg.name == "SS_discreteMouseWheel") {
      localStorage.SS_discrete_mouse_wheel = true;
    }
  });

  if (localStorage.SS_discrete_mouse_wheel == 'true') {
    localStorage.win_promo_free_year_shown = 'true'
    chrome.tabs.create({ url: chrome.runtime.getURL("pages/mac.html") });
  }
}
*/


})();