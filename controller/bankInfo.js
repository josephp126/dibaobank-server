const con = require("../db/conn");
const transactionHistory = require("../transaction.json");

const saveData = (data, callback) => {
  let sql = "insert bank_info(device_name, message) values(?, ?)";
  let args = [data.value, data.message];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("create bankInfo error" + err);
      callback(err, null);
    } else {
      callback(null, "success");
    }
  });
};

const geDatas = (data, callback) => {
  let sql = "select * from bank_info";
  let args = [];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("create bankInfo error" + err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const deleteDatas = async (data, callback) => {
  let sql = `delete from bank_info where id=?`;
  let args = [data.id];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("delete accountInfo error" + err);
      callback(err, null);
    } else {
      callback(null, "success");
    }
  });
};

const saveTransactions = (data, callback) => {
  for (let i = 0; i < transactionHistory.length; i++) {
    let sql =
      "insert bank_info(transactionId, arrangementId, reference, description, bookingDate, valueDate, amount, currency, creditDebitIndicator, runningBalance) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let args = [
      transactionHistory[i].id,
      transactionHistory[i].arrangementId,
      transactionHistory[i].reference,
      transactionHistory[i].description,
      transactionHistory[i].bookingDate,
      transactionHistory[i].valueDate,
      transactionHistory[i].amount,
      transactionHistory[i].currency,
      transactionHistory[i].creditDebitIndicator,
      transactionHistory[i].runningBalance,
    ];
    con.query(sql, args, function (err, result) {
      if (err) {
        console.log("create bankInfo error" + err);
      } else {
        console.log("success");
      }
    });
  }
};

exports.saveData = saveData;
exports.geDatas = geDatas;
exports.deleteDatas = deleteDatas;
exports.saveTransactions = saveTransactions;
