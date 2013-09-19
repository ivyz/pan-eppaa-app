//  -*- coding: utf-8 -*-
// :Project:    idog -- dog list
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/


function doglist() {
    var requestmanager = require('/globals').global.requestmanager;

    var instance = Ti.UI.createView({
        height : Ti.UI.FILL,
        width : Ti.UI.FILL,
        backgroundColor : 'black',
        layout : 'vertical'
    });
    var dogTbl = Ti.UI.createTableView({
        id : 'fidelitytbl',
        backgroundColor : 'black',
        separatorColor : 'black'
    });

    var rows = [];

    var onDogsLoaded = function(response) {
    	var dogs =response.dogs; 
    	for (var i=0; i < dogs.length; i ++) {
    		var d = dogs[i];
            var row;
            row = Ti.UI.createTableViewRow({
                id: 'dogrow',
                height: Ti.UI.SIZE,
                hasChild: true
            });
            var row_view = Ti.UI.createView({
                layout: 'vertical'
            });
            var img_view = Ti.UI.createView({
                width: Ti.UI.SIZE,
                id: 'imgview'
            });
            var img = Ti.UI.createImageView({
                image: d.image,
                id: 'dogimg'
            });
            var name = Ti.UI.createLabel({
                id: 'name',
                text: d.name
            });
            img_view.add(img);
            row_view.add(name);
            row_view.add(img_view);
            row.add(row_view);

            row.addEventListener('click', function() {
                var dogdetail = require('dogdetail');
                new dogdetail(d).open();
            });

            rows.push(row);
        }
        dogTbl.setData(rows);
    };

    instance.add(dogTbl);
    requestmanager.request('dogs', onDogsLoaded);
    return instance;
}

module.exports = doglist;
