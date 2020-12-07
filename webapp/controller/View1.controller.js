sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("com.exercise2.Exercise2.controller.View1", {
		onInit: function () {

			var data = {
				recipient: {
					name: 'World'
				}
			};
			var model = new JSONModel(data);
			this.getView().setModel(model);
		},
		onShowHello: function () {
			MessageToast.show('Hello World');
		},
		onOpenDialog: function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "com.exercise2.Exercise2.view.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this.pDialog.then(function (oDialog) {
				oDialog.open();
			});
		},

		onCloseDialog : function () { 
			this.byId("helloDialog").close();
		}
	});
});