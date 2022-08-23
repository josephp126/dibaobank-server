const express = require("express");
const router = express.Router();
const reportController = require("../controller/report");

router.get("/datas", async (req, res) => {
  let datas = req.body.data;
  reportController.getReports(datas, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
