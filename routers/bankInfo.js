const express = require("express");
const router = express.Router();
const bankInfoController = require("../controller/bankInfo");

router.post("/create", async (req, res) => {
  let datas = req.body.data;
  console.log(datas);
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
  bankInfoController.geDatas(datas, function (err, result) {
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

module.exports = router;
