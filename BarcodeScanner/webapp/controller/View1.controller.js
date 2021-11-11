sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ndc/BarcodeScanner"
], function (Controller, BarcodeScanner) {
	"use strict";

	return Controller.extend("Barcode.BarcodeScanner.controller.View1", {
		onInit: function () {

		},

		onPress: function (oEvent) {
			var that = this;
			BarcodeScanner.scan(
				function (mResult) {
					var oResult = mResult.text;   // get result
					var oFormat = mResult.format; // get format
				 
				 //get value of input fields
                  var oScr      = that.getView().byId("Input4").getValue();
                  var oStorloc1 = that.getView().byId("Input5").getValue();
                  var oDest     = that.getView().byId("Input6").getValue();
                  var oStorloc2 = that.getView().byId("Input7").getValue();
                
                //if format is null send manual entry
					if (oFormat === undefined)
						oFormat = "Manual Entry";

					var oCancelled = mResult.cancelled;
					// "Result: " + mResult.text + 
					/*alert("We got a bar code\n" +
				     "Result: " + mResult.text + "\n" +
						"Format: " + mResult.format + "\n" +
						"Cancelled: " + mResult.cancelled);*/
					var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
					//oRouter.navTo("Page2");
					oRouter.navTo("Page2", {
						//odePath: window.encodeURIComponent(oResult)
						Result: oResult,
						// Result: output,
						Format: oFormat,
						Scr: oScr,
						Storloc1: oStorloc1,
						Dest: oDest,
						Storloc2: oStorloc2

					});
				},
				function (Error) {
					alert("Scanning failed: " + Error);
				},
			);
		}
	});
});