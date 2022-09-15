const express = require("express");
const router = express.Router();
const bankInfoController = require("../controller/bankInfo");

router.post("/create", async (req, res) => {
  let datas = req.body;
  bankInfoController.saveData(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/datas", async (req, res) => {
  let datas = req.body;
  bankInfoController.getDatas(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/bidv", async (req, res) => {
  let datas = req.body;
  bankInfoController.getBidvDatas(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.delete("/delete/:id", async (req, res) => {
  let datas = req.params;
  bankInfoController.deleteDatas(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/save", async (req, res) => {
  let datas = req.body;
  bankInfoController.saveTransactions(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
