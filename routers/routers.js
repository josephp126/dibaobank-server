const express = require("express");
const app = express();
const users = require("./users");
const forgetPass = require("./forget");
const accountInfo = require("./accountInfo");
const report = require("./report");

app.use("/users", users);
app.use("/forget", forgetPass);
app.use("/accountInfo", accountInfo);
app.use("/report", report);

module.exports = app;
