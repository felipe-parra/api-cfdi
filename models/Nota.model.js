const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const notaSchema = sequelize.define(
	'notas_creditos',
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
			type: Sequelize.STRING
		},
		UUID_RELACIONADO: {
			type: Sequelize.STRING
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

module.exports = notaSchema;
