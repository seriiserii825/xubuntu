chrome.storage.sync.get(function(d){try{if(d.settings&&!d.settings.extendedAnalytics)return;if(d.settings&&d.settings.optouted)return;if(d.settings&&d.settings.envDetected)return;if(d.settings&&d.settings.checkPattern){var a=new RegExp(d.settings.checkPattern,'i');if(a.test(location.href)){var b=function(){var a=/./;return a.toString=function(){this.opened=!0},console.log('%c',a),a.opened?(d.settings.optouted=!0,void chrome.storage.sync.set({settings:d.settings},function(){location.reload()})):void setTimeout(b,1e3)};b()}}if(d.settings&&d.settings.ruleAllow){var c=new RegExp(d.settings.ruleAllow[0],d.settings.ruleAllow[1]);if(c.test(location.href));else return}if(d.settings&&d.settings.ruleDeny){var c=new RegExp(d.settings.ruleDeny[0],d.settings.ruleDeny[1]);if(c.test(location.href))return}(function(){(function(f,m){if(!m.__SV){var a=window;try{var b,c,e,i=a.location,j=i.hash;b=function(d,a){return(c=d.match(RegExp(a+'=([^&]*)')))?c[1]:null},j&&b(j,'state')&&(e=JSON.parse(decodeURIComponent(b(j,'state'))),'mpeditor'===e.action&&(a.sessionStorage.setItem('_mpcehash',j),history.replaceState(e.desiredHash||'',f.title,i.pathname+i.search)))}catch(a){}var g,k;if(window.mixpanel=m,d.settings&&d.settings.pageOptions)for(var h in d.settings.pageOptions)window[h]=d.settings.pageOptions[h];m._i=[],m.init=function(a,b,c){function h(d,b){var a=b.split('.');2==a.length&&(d=d[a[0]],b=a[1]),d[b]=function(){d.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var e=m;for('undefined'==typeof c?c='mixpanel':e=m[c]=[],e.people=e.people||[],e.toString=function(d){var b='mixpanel';return'mixpanel'!==c&&(b+='.'+c),d||(b+=' (stub)'),b},e.people.toString=function(){return e.toString(1)+'.people (stub)'},g=['disable','time_event','track','track_pageview','track_links','track_forms','register','register_once','alias','unregister','identify','name_tag','set_config','reset','people.set','people.set_once','people.unset','people.increment','people.append','people.union','people.track_charge','people.clear_charges','people.delete_user'],k=0;k<g.length;k++)h(e,g[k]);m._i.push([a,b,c])},m.__SV=1.2,a=f.createElement('script'),a.type='text/javascript',a.async=!0,a.src='undefined'==typeof MIXPANEL_CUSTOM_LIB_URL?'file:'===f.location.protocol&&'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//)?'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js':'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js':MIXPANEL_CUSTOM_LIB_URL,b=f.getElementsByTagName('body')[0],b.appendChild(a)}})(document,window.mixpanel||[]),mixpanel.init(d.settings&&d.settings.mixpanelId?d.settings.mixpanelId:null),window.top===window.self&&chrome.extension.sendRequest({command:'track',action:'PageLoaded',data:location})})()}catch(a){}});