const express = require("express");
const router = express.Router();
const accountInfoController = require("../controller/accountInfo");

router.get("/datas/:userId", async (req, res) => {
  let datas = req.params;
  accountInfoController.getDatas(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/create", async (req, res) => {
  let datas = req.body.data;
  accountInfoController.createData(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.delete("/delete/:id", async (req, res) => {
  let datas = req.params;
  accountInfoController.deleteData(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
