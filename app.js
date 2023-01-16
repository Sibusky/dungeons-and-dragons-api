const express = require("express");

const { NODE_ENV, DB_CONNECTION_STRING, PORT = 3001 } = process.env;

const app = express();


app.listen(PORT, () => {
  console.log('App started and listen port', PORT);
});