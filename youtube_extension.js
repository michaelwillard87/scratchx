/* Youtube video loader for Scratch */
/* Michael Willard, Nov 2015 */

new (function() {
    var ext = this;
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    
    ext.load_video = function(location) {
        window.open(location, '_blank');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'load youtube video', 'load_video', 'url']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Youtube extension', descriptor, ext);
})();
