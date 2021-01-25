const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server', //Container Name
  port: 6379
});
const port = 3001;

client.set('visits', 0);

app.get('/', (req, res) => {
    //process.exit(1);
    client.get('visits', (err, visits) => {
        res.send('Hello World! Yacob T : made ' + visits +' visits.')
        client.set('visits', parseInt(visits) + 1)
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});