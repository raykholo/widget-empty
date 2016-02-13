// Makes sure we only run once jquery is loaded as well
// as ensuring we don't load javascript libraries multiple times
cprequire(["chilipeppr_ready"], function () {

    // Define standard ChiliPeppr objects
    var ws = {
        id: "com-chilipeppr-ws-webrtcserver",
        url: 'http://jsfiddle.net/chilipeppr/wG25a/show/light',
        fiddleurl: 'http://jsfiddle.net/chilipeppr/wG25a/',
        name: "Workspace / WebRTC Server",
        desc: "This is a workspace for serving up a webcam.",
        foreignSubscribe: {
        },
        foreignPublish: {
        }
    }
            
    // Load top bar elements


    // Workspace Menu with Workspace Billboard
    // http://jsfiddle.net/jlauer/yC8Hv/
    //chilipeppr.load(
    //    "#com-chilipeppr-ws-serialport-menu-billboard",
    //    "http://fiddle.jshell.net/chilipeppr/astYW/show/light/");
    chilipeppr.load(
        "http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", 
        function () {
            require(['inline:com-chilipeppr-elem-pubsubviewer'], function (pubsubviewer) {
                    pubsubviewer.attachTo(
                        $('#com-chilipeppr-ws-webrtcserver-menu .dropdown-menu'), 
                        ws, 
                        "Workspace"
                    );
                });
            });
            

    // WebRTC Server Widget
    // http://jsfiddle.net/chilipeppr/7P2bJ/
    chilipeppr.load("#com-chilipeppr-webrtcserver",
        "http://fiddle.jshell.net/chilipeppr/7P2bJ/show/light/",

    function () {
        cprequire(
        ["inline:com-chilipeppr-widget-webrtc-server"],

        function (webrtcserver) {
            webrtcserver.init();
            
            // resize this console on a browser resize
            $(window).on('resize', function (evt) {
                //console.log("serial-port-console. resize evt:", evt);
                if ($.isWindow(evt.target)) {
                    //console.log("resize was window. so resizing");
                    //spc.resize();
                } else {
                    //console.log("resize was not window, so ignoring");
                }
            });

        });
    });
    
    

});