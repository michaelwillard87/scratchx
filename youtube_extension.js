(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

	ext.play_video = function(location) {
        window.open(location, '_blank');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Play %s', 'play_video', 'location'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Youtube extension', descriptor, ext);
})({});