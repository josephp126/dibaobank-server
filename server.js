const express = require("express");
const request = require("request");
const cors = require("cors");

// app.post("/datas", (req, res) => {
//   request(
//     { url: "https://cryptfolio.com/api/currencies/tokens" },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: "error", message: err.message });
//       }
//       res.json(JSON.parse(body));
//     }
//   );
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/build"));

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE form (id INT AUTO_INCREMENT PRIMARY KEY, sub_date datetime, date datetime, lane_number varchar(255), distributor varchar(255), dis_notes varchar(255), table_title  varchar(255),table_notes varchar(255), sweep varchar(255), sweep_notes varchar(255), pin varchar(255), pin_notes_needed varchar(255), ball_return varchar(255), ball_return_notes varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

app.post("/", (req, res) => {
  console.log("sds");

  var sql =
    " INSERT INTO form (sub_date, date, lane_number , distributor , dis_notes , table_title  ,table_notes , sweep , sweep_notes , pin , pin_notes_needed , ball_return , ball_return_notes ) VALUES ? ";
  var values = [
    [
      req.body.sub_date,
      req.body.date,
      req.body.lane_number,
      req.body.distributor,
      req.body.dis_notes,
      req.body.table_title,
      req.body.table_notes,
      req.body.sweep,
      req.body.sweep_notes,
      req.body.pin,
      req.body.pin_notes_needed,
      req.body.ball_return,
      req.body.ball_return_notes,
    ],
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/datas", (req, res) => {
  const url = `https://io.dexscreener.com/u/trading-history/recent/fantom/0xA73d251D37040ADE6e3eFf71207901621c9C867a`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "access-control-allow-origin": "https://dexscreener.com",
      "content-type": "application/json",
    },
  };
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      var pumpkinInfo = JSON.parse(data);
      var history = pumpkinInfo.tradingHistory;
      document.getElementById("boo_price").innerHTML =
        "<img class='boo-symbol-image' src='images/boo_symbol.png' />" +
        ": " +
        "$" +
        history[0]["priceUsd"];
    })
    .catch(console.log(Error));
});

const dbo = require("./db/conn");

const form = require("./api/form/form");

app.use(require("./routes/record"));

app.use("/api/form", form);

app.post("/", function (req, res) {
  let tmp = req.body;
  res.send(tmp);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
