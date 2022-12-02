sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForConductores: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Imagen": "",
				"Nombre": "",
				"AnticipoMensual": 0
			};
		}
	};
});
