sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createProductsModel: function () {
			var path = jQuery.sap.getModulePath(
				"com.exercise2.Exercise2",
				"/model/products.json");
			var productsModel = new JSONModel(path);
			return productsModel; 
		}
	};
});