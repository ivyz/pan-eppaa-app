//  -*- coding: utf-8 -*-
// :Project:    idog -- tab group
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function ApplicationTabGroup(Window) {
    //create module instance
    var self = Ti.UI.createTabGroup();

    //create app tabs
    var win1 = new Window("Cani"),
        win2 = new Window("Eventi"),
        win3 = new Window("Help"),
        win4 = new Window("Noi");

    var tab1 = Ti.UI.createTab({
        title: "Cani",
        icon: '/images/paw.png',
        window: win1
    });
    win1.containingTab = tab1;

    var tab2 = Ti.UI.createTab({
        title: "Eventi",
        icon: '/images/event.png',
        window: win2
    });
    win2.containingTab = tab2;

    var tab3 = Ti.UI.createTab({
        title: "Help",
        icon: '/images/help.png',
        window: win3
    });
    win3.containingTab = tab3;

    var tab4 = Ti.UI.createTab({
        title: "Noi",
        icon: '/images/about.png',
        window: win4
    });
    win4.containingTab = tab4;

    var doglist = require('doglist');
    win1.add(new doglist());
    var events = require('events');
    win2.add(new events());
    var helpus = require('helpus');
    win3.add(new helpus());
    var about = require('about');
    win4.add(new about());

    self.addTab(tab1);
    self.addTab(tab2);
    self.addTab(tab3);
    self.addTab(tab4);
    return self;
}

module.exports = ApplicationTabGroup;
