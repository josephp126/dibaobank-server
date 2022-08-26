const express = require("express");
const router = express.Router();
const userController = require("../controller/users");
const auth = require("../middleware/passport");

router.post("/register", async (req, res) => {
  let datas = req.body;
  userController.register(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("success");
    }
  });
});

router.post("/login", async (req, res) => {
  let datas = req.body.data;
  userController.login(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/uploadfile", (req, res) => {
  userController.uploadFile(req, function (err, result) {
    if (err) {
      res.send("error");
    } else {
      res.send("success");
    }
  });
});

router.post("/verifytoken", auth, (req, res) => {
  res.send("success");
});

router.post("/changeloginpassword", (req, res) => {
  let datas = req.body;
  userController.changeLoginPassword(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("success");
    }
  });
});

router.post("/changewithdrawlpassword", (req, res) => {
  let datas = req.body;
  userController.changeWithdrawlPassword(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
