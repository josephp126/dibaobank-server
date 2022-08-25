const con = require("../db/conn");

const saveData = (datas, callback) => {
  let sql = "insert bank_info(device_name, message) values(?, ?)";
  let args = [datas.value, datas.message];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("get reports error" + err);
      callback(err, null);
    } else {
      callback(null, "success");
    }
  });
};

exports.saveData = saveData;
