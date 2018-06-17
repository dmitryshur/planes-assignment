const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const fetch = require('node-fetch');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

const URL = 'https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48';

// fetch the JSON data with the plane's info. needed to override CORS
app.get('/data', async (req, res) => {
  const jsonData = await fetch(URL).then(response => response.json());
  res.send(jsonData);
});

app.listen(9000);
