var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com')
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  console.log(topic);
  client.end()
})