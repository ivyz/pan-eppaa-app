//  -*- coding: utf-8 -*-
// :Project:    idog -- events
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/

function events() {
    var requestmanager = require('/globals').global.requestmanager;
    var instance = Ti.UI.createView({
        height : Ti.UI.FILL,
        width : Ti.UI.FILL,
        backgroundColor : 'green',
        layout : 'vertical',
        navBarHidden : true,
        modal : true
    });
    var evtTbl = Ti.UI.createTableView({
        backgroundColor : 'black',
        separatorColor : 'black'
    });

    var onEventsLoaded = function(response) {
        var rows = response.events.map(function(e) {
            var row;
            row = Ti.UI.createTableViewRow({
                layout : 'horizontal',
                id : 'eventrow',
                height : Ti.UI.SIZE,
                hasChild : true
            });
            var img_view = Ti.UI.createView({
                id : 'imgview',
                layout : 'vertical'
            });
            var img = Ti.UI.createImageView({
                image : e.image,
                id : 'eventimg'
            });
            var name = Ti.UI.createLabel({
                id : 'maintitle',
                text : e.title
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
    };
    requestmanager.request('events', onEventsLoaded);
    instance.add(evtTbl);
    return instance;
}

module.exports = events;
