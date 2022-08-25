const express = require("express");
const router = express.Router();
const bankInfoController = require("../controller/bankInfo");

router.post("/datas", async (req, res) => {
  let datas = req.body.data;
  bankInfoController.saveData(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
