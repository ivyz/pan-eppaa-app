//  -*- coding: utf-8 -*-
// :Project:    idog -- dog detail
// :Created:    thu 22 may 2013 16:09:04 CET
// :Author:     Silvia Zobele <silvia.zobele@gmail.com>
// :License:    GNU General Public License version 3 or later.

/*jsl:declare Ti*/
/*jsl:declare require*/
/*jsl:declare module*/

function dogdetail(dog) {
	var instance = Ti.UI.createWindow({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : 'black',
		layout : 'vertical',
		modal : true
	});
	var view = Ti.UI.createScrollView({
		height: Ti.UI.FILL,
		width: Ti.UI.SIZE,
		layout: 'vertical'
	});
	var img_view = Ti.UI.createView({
		width : Ti.UI.SIZE,
		id : 'imgview'
	});
	var img = Ti.UI.createImageView({
		image : dog.image,
		id : 'dogimg'
	});
	img_view.add(img);
	var name = Ti.UI.createLabel({
		id : 'name',
		text : dog.name
	});
	var kind = Ti.UI.createLabel({
		id : 'description',
		text : 'Razza: ' + dog.kind
	});
	var age = Ti.UI.createLabel({
		id : 'description',
		text : 'Età: ' + dog.age
	});
	var descr = Ti.UI.createLabel({
		id : 'description',
		text : dog.description
	});
	view.add(name);
	view.add(img_view);
	view.add(age);
	view.add(kind);
	view.add(descr);
	instance.add(view);
	return instance;
}

module.exports = dogdetail;
