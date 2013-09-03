//  -*- coding: utf-8 -*-
// :Project:    idog -- event detail
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function eventdetail(event) {
    var instance = Ti.UI.createWindow({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: 'black',
        layout: 'vertical',
        modal: true
    });
    var view = Ti.UI.createScrollView({
		height: Ti.UI.FILL,
		width: Ti.UI.SIZE,
		layout: 'vertical'
	});

    var img = Ti.UI.createImageView({
        image: event.image,
        id: 'eventimg'
    });
    var name = Ti.UI.createLabel({
        id: 'name',
        text: event.name
    });
    var descr = Ti.UI.createLabel({
        id: 'description',
        text: event.description
    });
    view.add(name);
    view.add(img);
    view.add(descr);
    instance.add(view);
    return instance;
}

module.exports = eventdetail;
