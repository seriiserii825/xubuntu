
function replaceSelectedText(replacementMethod) {
    if (!replacementMethod)
		return;
	var sel, range;
	
	var traverseChildNodes = function(fragment, method) {
		var nodes = fragment.childNodes;
		
		// Handle form elements
		if (nodes.length == 0 && document.activeElement && (document.activeElement.nodeName === "INPUT" || document.activeElement.nodeName === "TEXTAREA")) {
			var field = document.activeElement;
			// probably a form element
			var start = field.selectionStart;
            var end = field.selectionEnd;

            var selectedText = field.value.slice(start, end);
            var before = field.value.slice(0, start);
            var after = field.value.slice(end);
			
			var newText = method(selectedText);

            var text = before + newText + after;
            field.value = text;
			return;
		}
		
		nodes.forEach(function(node){
			console.log(node);
			if (node.nodeType === 3) // TEXT_NODE
				node.nodeValue = method(node.nodeValue);
			if (node.nodeType === 1) // ELEMENT_NODE
				traverseChildNodes(node, method);
		});
	};
	
    sel = window.getSelection();
	
	if (sel.rangeCount) {
		range = sel.getRangeAt(0);
		
		var contents = range.extractContents();
		
		traverseChildNodes(contents, replacementMethod);
		
		range.deleteContents();
		
		range.insertNode(contents);
		return;
	}
    
}

function toSentenceCase(str) {
	var rg = /(^\w{1}|\.\s*\w{1})/gi;
	
	if (str === str.toUpperCase())
		str = str.toLowerCase();
	
	var newString = str.replace(rg, function(toReplace) {
		return toReplace.toUpperCase();
	});
	
	return newString;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function toLowerCase(str) {
	return str.toLowerCase();
}

function toUpperCase(str) {
	return str.toUpperCase();
}
