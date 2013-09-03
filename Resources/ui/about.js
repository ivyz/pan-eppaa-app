//  -*- coding: utf-8 -*-
// :Project:    idog -- about
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function about() {
    var instance = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: 'black',
        layout: 'vertical'
    });

    var titlelabel = Ti.UI.createLabel({
        id: 'maintitle',
        text: "PAN - EPPAA"
    });

    var descrlabel = Ti.UI.createLabel({
        id: 'normaltext',
        text: "Il Canile di Rovereto è gestito dall'associazione " +
            "PAN - EPPAA (Protezione Animali Natura - Ente Provinciale Protezione Animali e Ambiente)"
    });

    var descrlabel2 = Ti.UI.createLabel({
        id: 'normaltext',
        text: "La PAN - EPPAA è una Onlus che si finanzia quasi " +
            "esclusivamente con il contrbuto di soci e donazioni.\n\n" +
            "Sede legale: 38068 Rovereto, via Balteri, 2"
    });    
    var titlelabel2 = Ti.UI.createLabel({
        id: 'maintitle',
        text: "PAN - EPPAA"
    });
    
    var descrlabel3 = Ti.UI.createLabel({
        id: 'normaltext',
        text: "" +
            "esclusivamente con il contrbuto di soci e donazioni.\n\n" +
            "Sede legale: 38068 Rovereto, via Balteri, 2"
    });
    
    instance.add(titlelabel);
    instance.add(descrlabel);
    instance.add(descrlabel2);
    instance.add(descrlabel3);

    return instance;
}

module.exports = about;
