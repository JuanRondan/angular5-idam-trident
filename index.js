"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
var env = process.env.NODE_ENV || "localhost";
var PORT = process.env.PORT || 55000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname));
});
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
    console.log("Running on " + env);
});
