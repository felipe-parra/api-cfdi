require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const session = require('express-session');
const compression = require('compression');

const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// Session setup
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24
		},
		secret: process.env.SECRET
	})
);

app.use(cors());

app.use('/v1/facturas', require('./routes/facturas'));
app.use('/v1/notas', require('./routes/notas'));
app.use('/v1/pagos', require('./routes/pagos'));

app.use((req, res, next) => {
	res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

module.exports = app;
