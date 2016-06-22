
define(['text!../config/config_build.json'],
function(build) {
    var config = {
        dev: { host: "178.79.166.11", port: 80, dispatcher: false },
        build: JSON.parse(build)
    };
    
    //>>excludeStart("prodHost", pragmas.prodHost);
    require(['text!../config/config_local.json'], function(local) {
        try {
            config.local = JSON.parse(local);
        } catch(e) {
            // Exception triggered when config_local.json does not exist. Nothing to do here.
        }
    });
    //>>excludeEnd("prodHost");
    
    return config;
});