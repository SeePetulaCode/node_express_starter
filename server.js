const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(3030, (err) =>
	console.log(`${err ? err : 'Running on port 3030'}`),
);