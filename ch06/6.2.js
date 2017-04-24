function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}

function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
}

var connect = require('connect');
var app = connect();

app.use(logger)
  .use(hello);
  
app.listen(3000);