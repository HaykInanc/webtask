
let htmleditor = CodeMirror.fromTextArea(
	document.querySelector('#html'), 
	{
		lineNumbers: true,
		mode: 'xml',
		theme: 'dracula',
		keyMap: "sublime"
	}
);

let csseditor = CodeMirror.fromTextArea(
	document.querySelector('#css'), 
	{
		lineNumbers: true,
		mode: 'css',
		theme: 'dracula',
		keyMap: "sublime"
	}
);

let javascripteditor = CodeMirror.fromTextArea(
	document.querySelector('#js'), 
	{
		lineNumbers: true,
		mode: 'javascript',
		theme: 'dracula',
		keyMap: "sublime"
	}
);

let logeditor = CodeMirror.fromTextArea(
	document.querySelector('#log'), 
	{
		lineNumbers: true,
		mode: 'shell',
		theme: 'dracula',
		keyMap: "sublime"
	}
);