sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Barcode.BarcodeScanner.controller.Page2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Barcode.BarcodeScanner.view.Page2
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Page2").attachPatternMatched(this._onObjectMatched, this);

			// var Storloc1 = sap.ui.getCore().byId("app");
			// console.log(StorLoc1);

		},

		_onObjectMatched: function (oEvent) {
			var res1 = oEvent.getParameter("arguments").Result;
			var output = res1.split(':');
			var op1 = output[0];
			var op2 = output[1];
			var op3 = output[2];

			var res2 = oEvent.getParameter("arguments").Format;
			var res3 = oEvent.getParameter("arguments").Scr;
			var res4 = oEvent.getParameter("arguments").Storloc1;
			var res5 = oEvent.getParameter("arguments").Dest;
			var res6 = oEvent.getParameter("arguments").Storloc2;
			
			
			var oModel = new sap.ui.model.json.JSONModel([{
					// "Result": res1
					"Matnumb": op1
				}, {
					"Batch": op2
				}, {
					"Qty": op3
				},
				
				{
					"Format": res2
				},
				{"Scr": res3 },
				{"Storloc1": res4 },
				{"Dest": res5 },
				{"Storloc2": res6 }
				 
			]);
			this.getView().setModel(oModel, "rModel");
		},

		onPrint: function (oEvent) {
			
			window.print();

			// var printBtn = this.getView().byId("print");
			// if (printBtn.getVisible()) {
			// 	printBtn.setVisible(false);
			// }

			// var oTarget = this.getView(),
			// 	sTargetId = oEvent.getSource().data("targetId");

			// //         console.log(oTarget);
			// //         console.log(sTargetId);

			// if (sTargetId) {
			// 	oTarget = oTarget.byId(sTargetId);
			// }

			// if (oTarget) {
			// 	// 	// var hContent = '<html><head></head><body>';
			// 	// 	// var bodyContent = $(".printAreaBox").html();
			// 	// 	// var closeContent = "</body></html>";
			// 	// 	// var htmlpage = hContent + bodyContent + closeContent;

			// 	// 	// var win = window.open("", "PrintWindow");
			// 	// 	// win.document.write(htmlpage);
			// 	// 	// win.print();
			// 	// 	// win.stop();
			// 	// 	 window.print();
			// 	var $domTarget = oTarget.$()[0],
			// 		sTargetContent = $domTarget.innerHTML,
			// 		sOriginalContent = document.body.innerHTML;
			// 	document.body.innerHTML = sTargetContent;
			// 	window.print();
			// 	document.body.innerHTML = sOriginalContent;
			// } else {
			// 	jQuery.sap.log.error("onPrint needs a valid target container [view|data:targetId=\"SID\"]");
			// }
		}

		// onPrint: function(oEvent){

		// 	var source = $("#UIComp_0")[0];
		// 	var doc = new jsPDF('p', 'mm');
		// 	html2canvas(source /*document.body*/ , {
		// 		onrendered: function(canvas) {

		// 			var img = canvas.toDataURL("image/jpg");
		// 			doc.addImage(img, 'JPEG', 50, 50);

		// 			doc.save("Doc.pdf");
		// 		}

		// 	});
		// }

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Barcode.BarcodeScanner.view.Page2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Barcode.BarcodeScanner.view.Page2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Barcode.BarcodeScanner.view.Page2
		 */
		//	onExit: function() {
		//
		//	}

	});

});