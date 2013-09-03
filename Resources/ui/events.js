//  -*- coding: utf-8 -*-
// :Project:    idog -- events
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function events() {
    var instance = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: 'green',
        layout: 'vertical',
        navBarHidden: true,
        modal: true
    });
    var evtTbl = Ti.UI.createTableView({
        backgroundColor : 'black',
        separatorColor : 'black'
    });

    var eventlist = [{
        name: 'Mercatino dei presepi',
        image: '/images/paes_presepi.png',
        description: "Mercatino a Faes per raccolta fondi",
        when: '05/12/2012'
    },{
        name: "Mercatino dell'usato",
        image: '/images/mercatino_usato.png',
        description: "Mercatino dell'usato di Rovereto",
        when: 'Tutti i primi sabati del mese'
    },{
        name: 'Porte aperte al canile Porte aperte al canile Porte aperte al canile',
        image: '/images/event3.jpg',
        description: "Vuoi diventare volontario? Vieni a vedere come si fa!",
        when: '10/07/2013'
    }];

    var rows = eventlist.map(function(e) {
        var row;
        row = Ti.UI.createTableViewRow({
            layout : 'horizontal',
            id : 'eventrow',
            height : Ti.UI.SIZE,
            hasChild: true
        });
        var img_view = Ti.UI.createView({
            id : 'imgview',
            layout : 'vertical'
        });
        var img = Ti.UI.createImageView({
            image: e.image,
            id: 'eventimg'
        });
        var name = Ti.UI.createLabel({
            id: 'maintitle',
            text: e.name
        });
        img_view.add(img);
        row.add(img_view);
        row.add(name);

        row.addEventListener('click', function() {
            var eventdetail = require('eventdetail');
            new eventdetail(e).open();
        });

        return row;
    });
    evtTbl.setData(rows);
    instance.add(evtTbl);
    return instance;
}

module.exports = events;
