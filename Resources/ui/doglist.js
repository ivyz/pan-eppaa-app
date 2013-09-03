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
    var dogs = [{
        name: 'Terry',
        image: '/images/dog0.jpg',
        description: "Cane buonissimo, ha estremo bisogno di coccole, tira un po' al guinzaglio ma siamo sicuri che si abituerà se avrà la possibilità di sfogare le sue energie.",
        age: 3,
        taglia: 'medio-grande',
        kind: 'Labrador'
    },{
        name: 'Balto',
        image: '/images/dog1.jpg',
        description: "Il bellissimo Balto, ma anche molto diffidente, ha bisogno di incontri conoscitivi.",
        age: 4,
        kind: 'Meticcio',
        taglia: 'media'
    },{
        name: 'Balù',
        image: '/images/dog2.jpg',
        description: "Taglia quasi gigante, il nostrò Balù è da molto tempo al canile, è possessivo con il cibo e con i suoi giochi. Necessita di incontri conoscitivi.",
        age: 8,
        kind: 'Labrador',
        taglia: 'grande'
    },{
        name: 'Alba',
        image: '/images/dog3.jpg',
        description: "La spaventatissima Alba ha bisogno di un compagno paziente del quale potersi fidare, l'ambiente ideale è un posto tranquillo lontano dai rumori della città",
        age: 4,
        kind: 'Incrocio labrador',
        taglia: 'medio-grande'
    },{
        name: 'Feo',
        image: '/images/dog4.jpg',
        description: "Feo è attualmente in fase di recupero perchè non socializza bene con tutte le persone",
        age: 8,
        kind: 'San Bernardo',
        taglia: 'gigante'
    },{
        name: 'Spina',
        image: '/images/dog5.jpg',
        description: "Piccola spina, ti fiderai mai di qualcuno? Se qualcuno è molto paziente da rispettare le tue paure forse si...",
        age: 7,
        kind: 'Incrocio spinone',
        taglia: 'medio-piccola'
    },{
        name: 'Stuard',
        image: '/images/dog6.jpg',
        description: "Stuard è un po' la mascotte del canile, attualmente è il più vecchio, ma anche il più coccolone. Leggermente ipovedente, non va forzato troppo nelle passeggiate.",
        age: 10,
        kind: 'Meticcio',
        taglia: 'medio-grande'
    },{
        name: 'Black',
        image: '/images/dog7.jpg',
        description: "Black è dolcissimo con chi conosce, e diffidente con chi non conosce. Necessita di incontri conoscitivi",
        age: 6,
        kind: 'Meticcio',
        taglia: 'media'
    },{
        name: 'Bonnie',
        image: '/images/dog8.jpg',
        description: "A dispetto della nomea del Pitbull è dolcissima e coccolosissima. Cediamo solo a persone consapevoli della razza.",
        age: 35,
        kind: 'Pitbull',
        taglia: 'media'
    },{
        name: 'Eddy',
        image: '/images/dog9.jpg',
        description: "Bellissimo Eddy ma molto attaccato al canile perchè arriva da una brutta situazione. Necessita quindi di incontri conoscitivi per potersi adattare bene nella sua nuova casa. Necessita quindi di incontri conoscitivi per potersi adattare bene nella sua nuova casa. Necessita quindi di incontri conoscitivi per potersi adattare bene nella sua nuova casa.",
        age: 1,
        kind: 'Incrocio da pastore',
        taglia: 'grande'
    }];

    var onDogsLoaded = function(response) {
        rows = dogs.map(function(d) {
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

            return row;
        });
        dogTbl.setData(rows);
    };

    instance.add(dogTbl);
    requestmanager.request('dogs', onDogsLoaded);
	onDogsLoaded();
    return instance;
}

module.exports = doglist;
