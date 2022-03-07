const express = require('express');
const app = express();
const models = require('./models');
const config = require('./config');

require('./loaders')(app);
const PORT = config.port;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${PORT}`);
});
