const route=require('express').Router()

const fs = require("fs");

const express = require("express");
const multer = require("multer");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const uploadDir = "./uploads";

// @creates the upload destination [folder] if it doesn't exist at server boot.
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, uploadDir);
  },
  filename: function(req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage });

route.post("/api/upload", upload.single("userFile"), function(req, res) {
  const file = req.file;
  if (!file) {
    res.status(400).send("No File Selected");
  }
  res.send(file);
});

module.exports=route