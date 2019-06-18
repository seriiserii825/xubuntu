'use strict';

function GEBI(id){ return document.getElementById(id);}
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options();},!1);} )();
(function(){GEBI("SL_save_button2").addEventListener("click",function(){save_options();},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();

(function(){INIT();})();



function INIT(){
  ACTIVATE_MENU_ELEMENT(10);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  CONSTRUCTOR();
     GEBI("SL_DOM").value = FExtension.store.get("SL_DOM");

     var mySL_SLVoices = FExtension.store.get("SL_SLVoices");
     var mySL_SLVoiceSelect = GEBI("SL_SLVoiceState");
     for (var i = 0; i < mySL_SLVoiceSelect.options.length; i++) {
    	var mySL_SLVoiceOption = mySL_SLVoiceSelect.options[i];
	    if (String(mySL_SLVoiceOption.value) == String(mySL_SLVoices)) {
	      mySL_SLVoiceOption.selected = "true";
	      break;
	    }
     }
     var SL_TransButton = FExtension.store.get("SL_PrefTrans");
     GEBI("imtranslator"+SL_TransButton).checked = "true";
     for (var j = 1; j <= 7; j++){
	     var SL_CM = String(FExtension.store.get("SL_CM"+j));

	     if(SL_CM=="1") GEBI("Context"+j).checked = true;
	     else GEBI("Context"+j).checked = false;
     }

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
 GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
 GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
 GEBI('SL_save_button2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
 GEBI('SL_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV')));
 GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVTTS')));
 GEBI('SL_ADVuse').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVuse')));
 GEBI('SL_SLVoice0').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV4lt')));
 GEBI('SL_SLVoice1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVN')));
 GEBI('SL_SLVoice2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVA')));
 GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
 GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));
 GEBI('SL_tb').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttb')));
 GEBI('SL_cm').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extcm')));
 GEBI('SL_chl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions') + " ("+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")"));
 GEBI('SL_cltr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'))); 
 GEBI('SL_PDOM').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extPDOM'))); 
 GEBI('SL_UDOM').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUDOM'))); 

	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="http://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/advanced-settings/"; break;
	 case "Chrome": GEBI('SL_info').href="http://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/advanced-settings/"; break;
	 default      : GEBI('SL_info').href="http://about.imtranslator.net/";break;
	}
}


function save_options() {
//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================

		FExtension.store.set("SL_SLVoices", GEBI("SL_SLVoiceState").value);

		FExtension.store.set("SL_DOM", GEBI("SL_DOM").value);

		var PT=1;
                if(GEBI("imtranslator1").checked==true) PT=1;
                if(GEBI("imtranslator2").checked==true) PT=2;
                if(GEBI("imtranslator3").checked==true) PT=3;
                if(GEBI("imtranslator4").checked==true) PT=4;
		FExtension.store.set("SL_PrefTrans", PT);

	        for (var j = 1; j <= 7; j++){
		     var SL_CM = GEBI("Context"+j).checked;
		     var ID = "SL_CM"+j;
		     if(SL_CM==true){
			FExtension.store.set(ID, "1");
		     }else{
			FExtension.store.set(ID, "0");
		     }
	        }


		FExtension.store.set("SL_Flag", "FALSE");
		FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();




                FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
                FExtension.AddHtmlToObj("SL_status2","img","../../img/util/indicator.gif");
		setTimeout(function() {
			SL_status.innerText = "";
			SL_status2.innerText = "";
		}, 2000);

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


