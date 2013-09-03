//  -*- coding: utf-8 -*-
// :Project:    idog -- main window
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare module*/


function ApplicationWindow(title) {
    var self = Ti.UI.createWindow({
        title: title,
        backgroundColor: 'white'
    });

    return self;
}

module.exports = ApplicationWindow;
