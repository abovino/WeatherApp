const express = require('express');
const app = express();
const path = require('path');
const ip = require('ip');
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));