//FirstView Component Constructor
function OnlineView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		accessibilityLabel:"onlineview",
		accessibilityHint: "view",
		visible:true,
		top:"50dp"
	});

	var listView = Ti.UI.createListView({

	});

	logarea = Titanium.UI.createTextArea({
	    backgroundColor: "#eee",
	    value: '',
	    editable: false,
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0
	});
	self.add(logarea);

	var log = function(str) {
	    logarea.value += str + "\n";
	};

	var messageField = Ti.UI.createTextField({
	    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	    width: Ti.UI.width,
	    height: "40dp",
	    bottom: "50dp",
	    left: 5,
	    value:"Hello World From 泰坦!"
	});
	self.add(messageField);

	var sendBtn = Titanium.UI.createButton({
	    title: 'Send',
	    font: {
	        fontSize: 16,
	        fontFamily: 'Helvetica Neue'
	    },
	    textAlign: 'center',
	    width: 70,
	    height: "40dp",
	    bottom: "50dp",
	    right: 5
	});
	self.add(sendBtn);
	sendBtn.addEventListener('click', function() {
	    var v = messageField.value;
	    log('< ' + v);
	    send(v,'text');
	    messageField.blur();
	});
	// self.add(listView);

	return self;
}

module.exports = OnlineView;
