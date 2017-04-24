function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}

var connect = require('connect');
var app = connect();
app.use(logger);
app.listen(3000);