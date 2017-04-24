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

client.hmset('camping', {
  'shelter': '2-person tent',
  'cooking': 'campstove'
}, redis.print);

client.hget('camping', 'cooking', (err, value) => {
  if(err) throw err;
  console.log('Will be cooking with: ' + value);
});

client.hkeys('camping', (err, keys) => {
  if(err) throw err;
  keys.forEach((key, i) => {
    console.log(' ' + key);
  });
});