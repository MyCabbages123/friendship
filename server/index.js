// import express for backend API
const express = require("express");
// import cors so people can talk rom other computers
var cors = require("cors");
// init your backend
const app = express();
// make use of the CORS
app.use(cors());
// specify port number
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send({ troy: "neild" });
});

// turn on the server with a given port, and a function to
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
