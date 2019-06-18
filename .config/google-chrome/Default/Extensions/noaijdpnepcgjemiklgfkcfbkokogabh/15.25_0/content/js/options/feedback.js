(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
window.addEventListener("load",function(){ 
 ACTIVATE_MENU_ELEMENT(7);
 GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
 CONSTRUCTOR();
},!1);
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab('http://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/');},!1);} )();
function GEBI(id){ return document.getElementById(id);}

function CONSTRUCTOR(){
 var v = FExtension.bg.ImTranslatorBG.Version();
 var ln = FExtension.store.get("SL_LOCALIZATION");
 if(ln == "tl" || ln=="vi" || ln=="sr") ln="en";
 GEBI('SL_mailer').src = GEBI('SL_mailer').src + ln;
 GEBI('SL_mailer').src = GEBI('SL_mailer').src.replace("v=","v="+ v);
 GEBI('SL_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')));
 GEBI('SL_FBK1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFBK1')));
 GEBI('SL_FBK2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFBK2')));
 GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
}

function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  parent.frames["menu"].location.reload();
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  location.reload();
}
