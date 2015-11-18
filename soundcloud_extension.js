(function(ext) {
	var is_playing = false,
    	sound;
	
	$.getScript("https://connect.soundcloud.com/sdk/sdk-3.0.0.js", function(){
	   //alert("Script loaded but not necessarily executed.");
	});
    
    ext.sc_init = function() {
    	SC.initialize({
  			client_id: 'f703c7a6871d553a7db785800792ccb8',
  			redirect_uri: ' '
		});
    };
    
    ext.sc_play = function() {
        if( sound ) {
        	if(is_playing) {
            	sound.pause();
            	is_playing = false;
        	} else {
            	sound.play();
            	is_playing = true;
        	}
    	} else {
        	SC.stream("/tracks/193781466").then(function(obj){
            	obj.play();
            	sound = obj;
            	is_playing = true;
        	});
    	}
    };

	ext.sc_stop = function() {
    	obj.stop();
    };
    
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
            [' ', 'Play %s', 'play_video', 'YqeW9_5kURI'],
            [' ', 'Initialize SoundCloud API', 'sc_init'],
			[' ', 'Play SoundCloud Track', 'sc_play'],
			[' ', 'Stop SoundCloud Track', 'sc_stop']
			
        ]
    };

    // Register the extension
    ScratchExtensions.register('Youtube extension', descriptor, ext);
})({});