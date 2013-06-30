var BackgroundMode = {
	start: function() {
		if (device.platform.substring(0,2) == "iO" || device.platform.substring(0,2) == "iP") {
			cordova.exec(null, null, "BackgroundMode", "start", []);
		}
	},
	stop: function() {
		if (device.platform.substring(0,2) == "iO" || device.platform.substring(0,2) == "iP") {
			cordova.exec(null, null, "BackgroundMode", "end", []);
		}
	}
};