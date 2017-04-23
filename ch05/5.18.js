var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', (err) => {
  console.log('Error ' + err);
});

client.set('color', 'red', redis.print);
client.get('color', (err, value) => {
  if (err) throw err;
  console.log('Got: ' + value);
});
