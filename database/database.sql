CREATE TABLE `facturas` (
	`folio`	TEXT NOT NULL UNIQUE,
	`importe`	NUMERIC NOT NULL,
	`fecha_expedicion`	TEXT,
	`fecha_timbrado`	TEXT,
	`UUID`	TEXT,
	`id_proveedor`	TEXT,
	`id_empresa`	TEXT,
	`createdAt`	TEXT,
	`updatedAt`	TEXT
);

CREATE TABLE `notas_credito` (
	`folio`	TEXT NOT NULL UNIQUE,
	`importe`	NUMERIC NOT NULL,
	`fecha_expedicion`	TEXT,
	`fecha_timbrado`	TEXT,
	`UUID`	TEXT,
	`UUID_RELACIONADO`	TEXT,
	`id_proveedor`	TEXT,
	`id_empresa`	TEXT,
	`createdAt`	TEXT,
	`updatedAt`	TEXT
);