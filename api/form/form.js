const express = require("express");
const router = express.Router();

const formModel = require("../../models/form");

formModel.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

router.post("/", (req, res) => {
  console.log(req.body);

  const formData = new formModel({
    sub_date: req.body.sub_date,
    date: req.body.date,
    lane_number: req.body.lane_number,
    distributor: req.body.distributor,
    dis_notes: req.body.dis_notes,
    table: req.body.table,
    table_notes: req.body.table_notes,
    sweep: req.body.sweep,
    sweep_notes: req.body.sweep_notes,
    pin: req.body.pin,
    pin_notes_needed: req.body.pin_notes_needed,
    ball_return: req.body.ball_return,
    ball_return_notes: req.body.ball_return_notes,
  });
  formData.save().then((form) => res.send(form));
});

router.get("/", (req, res) => {
  const formData = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save formData in the database
  formData
    .create(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
});

module.exports = router;
