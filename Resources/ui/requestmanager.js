//  -*- coding: utf-8 -*-
// :Progetto:  AirPIM/i.canile --
// :Creato:    gio 30 mag 2013 08:49:54 CEST
// :Autore:     <silvia@airpim.com>
// :Licenza:   Copyright (C) 2013 Airpim S.r.l. Tutti i diritti riservati.
//

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/
/*jsl:declare JSON*/


function requestmanager() {
}

var activityIndicator = require('activityIndicator');

requestmanager.base_url = 'http://192.168.2.129:8080';
requestmanager.busyCursor = Ti.Platform.osname == 'android' ? Ti.UI.createActivityIndicator({
    top: '50%',
    style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
    width: 100,
    height: 50
}): new activityIndicator();

requestmanager.wait = function(activate, message) {
    var osname = Ti.Platform.osname;
    if (activate) {
        requestmanager.busyCursor.setMessage(message || 'Loading...');
        if (osname == 'android')
            requestmanager.busyCursor.show();
        else
            requestmanager.busyCursor.open();
    } else {
        if (osname == 'android')
            requestmanager.busyCursor.hide();
        else
            requestmanager.busyCursor.close();
    }
};

requestmanager.urlmap = function(url) {
    return {
        dogs: '/dogs',
        events: '/events'
    }[url];
};

requestmanager.manageErrors = function(message, caption) {
    if (! message)
        message = "E' avvenuto un errore, controlla la connessione o prova più tardi";
    Ti.UI.createAlertDialog({
        title: caption,
        message: message,
        buttonNames: ['OK']
    }).show();

    requestmanager.wait(false);
};

requestmanager.request = function(urlmapping, callback) {
    requestmanager.wait(true);
    var request = Ti.Network.createHTTPClient();
    var url = requestmanager.urlmap(urlmapping);
    request.open('GET', url);

    request.onload = function() {
        try {
            if (request.responseText) {
                var json_response = JSON.parse(request.responseText);
                if (json_response.success === false) {
                    requestmanager.manageErrors(json_response.message);
                    return;
                }
            }
        }
        catch (e) {
            requestmanager.manageErrors(null);
        }
        return callback(json_response);
    };

    request.onerror = function() {
        if (request.responseText) {
            var result = JSON.parse(request.responseText);
            requestmanager.manageErrors(result.message);
        }
        return;
    };
    request.send();
};

module.exports = requestmanager;
