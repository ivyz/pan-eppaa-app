/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.
 * A starting point for tab-based application with multiple top-level windows.
 * Requires Titanium Mobile SDK 1.8.0+.
 *
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *
 */
/*jsl:declare Ti*/
/*jsl:declare alert*/
/*jsl:declare require*/


//bootstrap and check dependencies
    if (Ti.version < 1.8 ) {
        alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
    }

// This is a single context application with mutliple windows in a stack
(function() {

    var Window;

    Window = require('ui/ApplicationWindow');

    var ApplicationTabGroup = require('ui/ApplicationTabGroup');
    new ApplicationTabGroup(Window).open();

})();
