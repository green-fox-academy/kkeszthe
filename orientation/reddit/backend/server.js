'use strict';

const routes = require('./index');
const port = 3000;

//Start application
routes.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
