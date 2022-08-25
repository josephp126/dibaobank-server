const express = require("express");
const app = express();
const users = require("./users");
const forgetPass = require("./forget");
const accountInfo = require("./accountInfo");
const report = require("./report");
const bankInfo = require("./bankInfo");

app.use("/users", users);
app.use("/forget", forgetPass);
app.use("/accountInfo", accountInfo);
app.use("/report", report);
app.use("/bankInfo", bankInfo);

module.exports = app;
