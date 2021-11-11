sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("icon.ICON_BAR_NAVIGATE.controller.View1", {
		onInit: function () {
			var dataObject = [{
				Product: "Power Projector 4713",
				Weight: "1467"
			}, {
				Product: "Gladiator MX",
				Weight: "321"
			}, {
				Product: "Hurricane GX",
				Weight: "588"
			}, {
				Product: "Webcam",
				Weight: "700"
			}, {
				Product: "Monitor Locking Cable",
				Weight: "40"
			}, {
				Product: "Laptop Case",
				Weight: "1289"
			}];

			var oModel = new sap.ui.model.json.JSONModel(dataObject);
			this.getView().setModel(oModel);
			var oTable = this.getView().byId("idProductsTable");
			oTable.setModel(oModel);
			//	var model = new sap.ui.model.json.JSONModel(dataObject);
			// model.setData({
			// 	modelData: {
			// 		productsData: []
			// 	}
			// });
			// this.getView().setModel(model);
			sap.ui.getCore().setModel(oModel);
			sap.ui.getCore().getModel().setProperty("/modelData/productsData", dataObject);
		},

		onAfterRendering: function () {
		
			
			var that = this;
			this.getView().byId("idProductsTable").attachBrowserEvent("dblclick", function (oEvent) {
				that.getView().byId("idIconTabBarNoIcons").setSelectedKey("oIconText");
			});
		},

		rowSelect: function (oEvent) {
			
			var oSelectedItem = oEvent.getParameter("listItem").getBindingContext().getPath();
			var oModel = sap.ui.getCore().getModel().getProperty(oSelectedItem);

		//	var oTable = this.getView().byId("idProducts");
			//	oTable.setModel(oModel);
			//  sap.ui.getCore().setModel(oModel);
			sap.ui.getCore().getModel().setProperty("/data", oModel);
			//	sap.ui.getCore().getModel().setProperty("/data", oModel);
			//	sap.ui.getCore().setModel(oModel, "data");
				debugger;
			this.getView().byId("idIconTabBarNoIcons").setSelectedKey("container-ICON_BAR_NAVIGATE---View1--oIconText");
		},

		onIconFilterSelect: function (oEvent) {
			var oTable = this.getView().byId("idProductsTable");
			oTable.removeSelections();
		}

	});

	// Instantiate the View, assign a model
	// and display
	// var oView = sap.ui.xmlview({
	// 	viewContent: jQuery('#chartView').html()
	// });

});