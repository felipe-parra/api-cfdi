const Factura = require('../models/Factura.model');
const Op = require('sequelize').Op;
module.exports = {
	createFactura: (req, res) => {
		const { folio, importe, fecha_expedicion, fecha_timbrado, UUID, id_proveedor, id_empresa } = req.body;
		Factura.create(
			{
				folio,
				importe,
				fecha_expedicion,
				fecha_timbrado,
				UUID,
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
					'id_proveedor',
					'id_empresa'
				]
			}
		)
			.then(() => {
				res.status(201).json({ message: 'Created successfully!' });
			})
			.catch((err) => {
				res.status(500).json({
					message: 'Something was wrong!'
				});
				console.log(err);
			});
	},
	getAll: (req, res) => {
		Factura.findAll()
			.then((facturas) => {
				res.status(200).json(facturas);
			})
			.catch((err) => {
				res.status(500).json({
					message: 'Something was wrong!'
				});
				console.log(err);
			});
	},

	searchAndUpdate: (req, res) => {
		const { folio, importe, fecha_expedicion, fecha_timbrado, UUID, id_proveedor, id_empresa } = req.body;
		const uuidId = req.query.uuid || '';
		const folioId = req.query.folio || '';
		Factura.update(
			{ folio, importe, fecha_expedicion, fecha_timbrado, UUID, id_proveedor, id_empresa },
			{
				where: {
					[Op.or]: [ { folio: folioId }, { UUID: uuidId } ]
				}
			}
		)
			.then(() => {
				res.status(200).json({ message: 'Updated Successfully' });
			})
			.catch((err) => {
				res.status(500).json({ message: 'Something was wrong!' });
				console.log(err);
			});
	},
	searchAndDelete: (req, res) => {
		const uuid = req.query.uuid || '';
		const folio = req.query.folio || '';
		Factura.findAll({
			where: {
				[Op.or]: [ { folio: folio }, { UUID: uuid } ]
			}
		}).then((factura) => {
			Factura.destroy({
				where: {
					[Op.or]: [ { folio: folio }, { UUID: uuid } ]
				}
			})
				.then(() => {
					res.status(200).json({ message: 'Deleted successfully!' });
				})
				.catch((err) => {
					res.status(500).json({ message: 'Something was wrong!' });
					console.log(err);
				});
		});
	},
	search: (req, res) => {
		const uuid = req.query.uuid || '';
		const folio = req.query.folio || '';
		Factura.findAll({
			where: {
				[Op.or]: [ { folio: folio }, { UUID: uuid } ]
			}
		})
			.then((factura) => {
				res.status(200).json(factura);
			})
			.catch((err) => {
				res.status(500).json({ message: 'Something was wrong!' });
				console.log(err);
			});
	}
};
