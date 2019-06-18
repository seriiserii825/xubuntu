'use strict';
function GEBI(id){ return document.getElementById(id);}
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){INIT();})();


function INIT(){
  ACTIVATE_MENU_ELEMENT(8);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  CONSTRUCTOR();
}


function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}


function CONSTRUCTOR(){  
 GEBI('SL_menu_h3').innerText="v."+FExtension.bg.ImTranslatorBG.Version();  
 GEBI('SL_descr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extAboutDescr')));  
 GEBI('SL_contrib').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extContrib')));  
 GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
 var Ab = "© ImTranslator";
 if(FExtension.store.get("SL_LOCALIZATION")=="en") Ab = "About";
 GEBI('SL_ttl').appendChild(document.createTextNode(Ab));

	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="http://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/"; break;
	 case "Chrome": GEBI('SL_info').href="http://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/"; break;
	 default      : GEBI('SL_info').href="http://about.imtranslator.net/";break;
	}

}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  parent.frames["menu"].location.reload();
  location.reload();
}

