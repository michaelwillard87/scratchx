(function(ext) {

	$.getScript("https://connect.soundcloud.com/sdk/sdk-3.0.0.js", function(){
	   alert("Script loaded but not necessarily executed.");
	});
      
    SC.initialize({
  		client_id: 'f703c7a6871d553a7db785800792ccb8',
  		redirect_uri: ' '
	});

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

	ext.play_video = function(location) {
        window.open(location);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, default value
            [' ', 'Play %s', 'play_video', 'YqeW9_5kURI']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Youtube extension', descriptor, ext);
})({});