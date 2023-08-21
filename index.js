const express = require('express');
const NodeMediaServer = require('node-media-server');

const app = express();

app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8001,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config);
nms.run();