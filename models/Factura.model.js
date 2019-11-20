const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const facturaSchema = sequelize.define(
	'facturas',
	{
		folio: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false
		},
		importe: {
			type: Sequelize.NUMBER
		},
		fecha_expedicion: {
			type: Sequelize.DATE
		},
		fecha_timbrado: {
			type: Sequelize.DATE
		},
		UUID: {
			type: Sequelize.TEXT
		},
		id_proveedor: {
			type: Sequelize.STRING
		},
		id_empresa: {
			type: Sequelize.STRING
		}
	},
	{
		timestamps: true
	}
);

module.exports = facturaSchema;
