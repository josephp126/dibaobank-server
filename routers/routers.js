const express = require("express");
const app = express();
const users = require("./users");
const forgetPass = require("./forget");
const accountInfo = require("./accountInfo");
const pricing = require("./pricing");

app.use("/users", users);
app.use("/forget", forgetPass);
app.use("/accountInfo", accountInfo);
app.use("/pricing", pricing);

module.exports = app;
