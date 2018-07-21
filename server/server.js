const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000; // process.env.PORT is the env variable that Heroku dynamically assigns

app.use(express.static(publicPath)); // fire up and use express

app.get('*', (req, res) => { // 1st arg says to match all unmatched routes, 2nd arg is func that sends back index.html
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log('Server is up')); // start up on port 3000
