'use strict';

const express = require('express');
// Constants
// const PORT = config.PORT;
// const HOST = config.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(5000, () => console.log('Server is up and running'));

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);