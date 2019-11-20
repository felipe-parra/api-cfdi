const Nota = require('../models/Nota.model');
const Op = require('sequelize').Op;

module.exports = {
	create: (req, res) => {
		const {
			folio,
			importe,
			fecha_expedicion,
			fecha_timbrado,
			UUID,
			UUID_RELACIONADO,
			id_proveedor,
			id_empresa
		} = req.body;
		Nota.create(
			{
				folio,
				importe,
				fecha_expedicion,
				fecha_timbrado,
				UUID,
				UUID_RELACIONADO,
				id_proveedor,
				id_empresa
			},
			{
				fields: [
					'folio',
					'importe',
					'fecha_expedicion',
					'fecha_timbrado',
					'UUID',
					'UUID_RELACIONADO',
					'id_proveedor',
					'id_empresa'
				]
			}
		)
			.then(() => {
				res.status(201).json({ message: 'Created Sucessfully!' });
			})
			.catch((err) => {
				res.status(500).json({
					message: 'Something was wrong!'
				});
				console.log(err);
			});
	},
	getAll: (req, res) => {
		Nota.findAll()
			.then((notas) => {
				res.status(200).json(notas);
			})
			.catch((err) => {
				res.status(500).json({
					message: 'Something was wrong!'
				});
				console.log(err);
			});
	}
};
