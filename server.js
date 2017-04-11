var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./config/webpack.config.dev');
var r = require('rethinkdb')
 
var app = express();

var compiler = webpack(config);
 
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json())
 
app.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});

var connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

