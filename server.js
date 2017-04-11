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

app.get('/journals', listJournalItems)
app.post('/journals', createJournalItem)

app.route('/journals')
  .get(listJournalItems)
  .post(createJournalItem);

function listJournalItems(req, res, next) {
  r.db('care_cru').table('journals').run(connection, function(err, cursor) {
    if(err) {
      console.log(err)
      return next(err);
    }

    cursor.toArray(function(err, result) {
      if(err) {
        return next(err);
      }
      res.json(result);
    });
  });
}

function createJournalItem(req, res, next) {
  var text = req.body.text;
  var happiness_level = req.body.happiness_level;
  r.db('care_cru').table('journals').insert([
    { text: text, happiness_level: happiness_level }
  ]).run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
    res.json(req.body)
  })
}
