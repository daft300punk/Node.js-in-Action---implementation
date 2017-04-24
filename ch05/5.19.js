var net = require('net');
var redis = require('redis');

var server = net.createServer((socket) => {
  var subscriber;
  var publisher;

  socket.on('connect', () => {
    subscriber = redis.createClient();
    subscriber.subscribe('main_chat_room');

    subscriber.on_connect('message', (channel, message) => {
      socket.write('Channel ' + channel + ': ' + message);
    });

    publisher = redis.createClient();
  });

  socket.on('data', (data) => {
    publisher.publish('main_chat_room', data);
  });

  socket.on('end', () => {
    subscriber.unsubscribe('main_chat_room');
    subscriber.end();
    publisher.end();
  });
});

server.listen(3000);