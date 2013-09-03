//  -*- coding: utf-8 -*-
// :Progetto:  mobile --
// :Creato:    mer 12 dic 2012 15:34:59 CET
// :Autore:     <silvia@airpim.com>

/*jsl:declare L*/
/*jsl:declare Ti*/
/*jsl:declare module*/
/*jsl:declare require*/


function activityIndicator() {
    var indWin = Ti.UI.createWindow({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    });

    var indView = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        layout: 'vertical',
        backgroundColor: '#000',
        opacity: 0.7
    });
    indWin.add(indView);
    var message = Ti.UI.createLabel({
        text: L('loading', 'Loading...'),
        color: '#fff',
        font: {fontWeight: 'bold'},
        width: Ti.UI.FILL,
        textAlign: 'center',
        height: 50,
        top: '40%'
    });
    var loadimg = Ti.UI.createImageView({
        images: ['/images/loading1.png',
                 '/images/loading2.png',
                 '/images/loading3.png',
                 '/images/loading4.png',
                 '/images/loading5.png',
                 '/images/loading6.png',
                 '/images/loading7.png'],
        height: 150,
        width: 150
    });
    loadimg.start();
    indView.add(message);
    indView.add(loadimg);
    return indWin;
}

module.exports = activityIndicator;
