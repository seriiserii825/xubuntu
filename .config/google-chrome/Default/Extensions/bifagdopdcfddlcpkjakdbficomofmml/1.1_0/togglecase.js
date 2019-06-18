

// Create Menus
function createMenus() {
	var context = "editable";
	chrome.contextMenus.create({"title": 'To Sentence case', "contexts":[context], "onclick": function(info, tab) { changeCase(info, tab, "toSentenceCase"); } });
	chrome.contextMenus.create({"title": 'To Title Case', "contexts":[context], "onclick": function(info, tab) { changeCase(info, tab, "toTitleCase"); } });
	chrome.contextMenus.create({"title": 'To UPPER CASE', "contexts":[context], "onclick": function(info, tab) { changeCase(info, tab, "toUpperCase"); } });
	chrome.contextMenus.create({"title": 'To lower case', "contexts":[context], "onclick": function(info, tab) { changeCase(info, tab, "toLowerCase"); } });
}

function changeCase(info, tab, method) {
	var existingText = info.selectionText;
	//var selection = window.getSelection();
	
	chrome.tabs.executeScript(null, {
	  file: "content-script.js"
    }, function() {
		 chrome.tabs.executeScript(null, {
			code: "replaceSelectedText(" + method + ")"
		 });
	  }
	);

}

// Main Method
createMenus();