require('dotenv').config();
require('./database/database');
const app = require('./app');

const port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
