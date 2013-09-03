//  -*- coding: utf-8 -*-
// :Project:    idog -- about
// :Creato:    mer 29 mag 2013 09:56:28 CEST
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function helpus() {
    var instance = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: 'black',
        layout: 'vertical'
    });

    var needslabel = Ti.UI.createLabel({
        id: 'maintitle',
        text: "Come puoi aiutarci?"
    });

    var needsdescr = Ti.UI.createLabel({
        id: 'normaltext',
        text: "In canile servono quotidianamente tantissime cose:"
    });

    var allneeds = Ti.UI.createLabel({
        id: 'normaltext',
        text: "- COPERTE e MAGLIONI (ricaviamo dei cappottini :) )\n" +
            "- CIBO (crocchette, scatolette, biscotti...)\n" +
            "- GUINZAGLI (ogni giorno qualche peloso ne mangiucchia uno)\n" +
            "- GIOCHI (il gioco è il modo migliore per educarli)\n" +
            "- MEDICINALI"
    });

    var title5x1000label = Ti.UI.createLabel({
        id: 'maintitle',
        text: "5 x 1000"
    });

    var cod = Ti.UI.createLabel({
        id: 'normaltext',
        text: "Codice Fiscale - Partita I.V.A. 01142600228"
    });

    var donate = Ti.UI.createLabel({
        id: 'maintitle',
        text: 'Per altre donazioni:'
    });

    var coordlabel = Ti.UI.createLabel({
        id: 'normaltext',
        text: "Banca d'appoggio: Rurale Giudicarie Valsabbia Paganella\n\n"+
            "C.C. 10/1001136 ABI 08078 CAB 35540\n\n" +
            "Conto corrente Postale n° 11244381"
    });

    instance.add(needslabel);
    instance.add(needsdescr);
    instance.add(allneeds);
    instance.add(title5x1000label);
    instance.add(cod);
    instance.add(donate);
    instance.add(coordlabel);

    return instance;
}


module.exports = helpus;
