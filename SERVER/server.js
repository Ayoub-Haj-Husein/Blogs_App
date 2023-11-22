const express = require("express")
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config();
require('dotenv').config();
const DB_URI = process.env.DB_URI;
const mongoose = require("mongoose")

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected Successfuly")
  }).catch((error) => {
    console.error('Error connecting to the database:', error.message);
  })

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

