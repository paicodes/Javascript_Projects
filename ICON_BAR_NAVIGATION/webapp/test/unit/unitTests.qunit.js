/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"icon/ICON_BAR_NAVIGATE/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});