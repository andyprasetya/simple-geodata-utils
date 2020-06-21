var server = require('./lib/server');
var workers = require('./lib/workers');
var app = {};
app.init = function(){
  server.init();
  workers.init();
};
module.exports = app;
