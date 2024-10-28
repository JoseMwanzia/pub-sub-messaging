const redis = require('redis');

// Create a Redis client for the publisher
const publisher = redis.createClient();

publisher.connect()
  .then(() => console.log("Publisher connected to Redis"))
  .catch(console.error);

const channel = 'my-channel';

// publish to a channel every 2 seconds
setInterval(() => {
    const message = `Hello, the time is ${new Date().toLocaleDateString()}`;

    publisher.publish(channel, message)
        .then(() => console.log(`Publish message: ${message}`))
        .catch(console.error);
}, 2000);