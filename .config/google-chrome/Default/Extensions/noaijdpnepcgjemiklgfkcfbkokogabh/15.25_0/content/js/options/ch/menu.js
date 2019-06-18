'use strict';
function GEBI(id){ return document.getElementById(id);}
(function(){
	LOCALIZATION();        
} )();

function LOCALIZATION(){	
	GEBI('SL_menu_h1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')));
	GEBI('SL_menu_PP').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extContribution_ttl');
	GEBI('SL_m5').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHistory_ttl')));
	GEBI('SL_m9').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_m6').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp')));
	GEBI('SL_m7').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')));
	var Ab = "© ImTranslator";
        if(FExtension.store.get("SL_LOCALIZATION")=="en") Ab = "About";
        GEBI('SL_m8').appendChild(document.createTextNode(Ab));
	GEBI('SL_m10').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV')));
}

if(GEBI('M_D1')) GEBI('M_D1').addEventListener("click",function(){M_DONATE_links(1);},!1);
if(GEBI('M_D2')) GEBI('M_D2').addEventListener("click",function(){M_DONATE_links(2);},!1);
if(GEBI('M_D3')) GEBI('M_D3').addEventListener("click",function(){M_DONATE_links(3);},!1);
if(GEBI('M_D4')) GEBI('M_D4').addEventListener("click",function(){M_DONATE_links(4);},!1);

if(GEBI('SL_HIST')) GEBI('SL_HIST').addEventListener("click",function(){SET_HISTORY_READY();},!1);

history.html

            
function M_DONATE_links(st){
	var link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2';
 	switch(st){
		case 1: link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HNP5KQVTGDU5U'; break;
		case 2: link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G6YZX47D6F5F8'; break;
		case 3: link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6YPF8ZCHQ872W'; break;
		case 4: link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2'; break;
	}
	M_OPEN_WINDOW(link);
}

function M_OPEN_WINDOW(url){
        window.open(url, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes,fullscreen=yes');
}

function SET_HISTORY_READY(){
	SL_setCookie("SL_anchor","");
        GEBI("SL_HIST").href="history.html";
}


function SL_setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function SL_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
