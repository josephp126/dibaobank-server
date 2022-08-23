const con = require("../db/conn");

const getReports = (datas, callback) => {
  let sql = "select * from reports";
  let args = [];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("get reports error" + err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

exports.getReports = getReports;
