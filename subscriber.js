const redis = require("redis");

// create a redis client for the subscriber
const subscriber = redis.createClient();

subscriber.connect()
    .then(() => console.log('Subscriber connected to redis!'))
    .catch(console.error)

// subsscribe to a chanbel.
const channel = 'my-channel';

subscriber.subscribe(channel, (message) => {
    console.log(`Received message: ${message}`)
});