const con = require("../db/conn");
const transactionHistory = require("../transaction.json");
const axios = require("axios");

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

const getDatas = (data, callback) => {
  // let sql = "select * from bank_info";
  // let args = [];
  // con.query(sql, args, function (err, result) {
  //   if (err) {
  //     console.log("create bankInfo error" + err);
  //     callback(err, null);
  //   } else {
  //     callback(null, result);
  //   }
  // });
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Apikey AK_CS.4adff760276711edab64f1c512bb3edd.2z9Sc1zNNeCOvRVGpUXAEcsRPBegdl51cSnTRHN5Ir4TjFxmJuSZWYAhWNfLAObUT0kSMEm5",
  };
  axios
    .get(
      "https://oauth.casso.vn/v2/transactions?fromDate=2020-04-01&page=0&pageSize=2000000&sort=DESC",
      {
        headers: headers,
      }
    )
    .then((response) => {
      const transactionData = response.data.data.records;
      const sortData = transactionData.sort(function (a, b) {
        return b.tid - a.tid;
      });
      callback(null, sortData);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getBidvDatas = (data, callback) => {
  axios
    .get(
      "http://45.76.159.90/api/history?offset=0&limit=100&memo=&accountNumber=18610000278175&accessToken=G7W2YG9RBVC81JGUVBB4KENEBV3DZ4RX"
    )
    .then((response) => {
      const transactionData = response.data.data;
      // const sortData = transactionData.sort(function (a, b) {
      //   return b.tid - a.tid;
      // });
      callback(null, transactionData);
    })
    .catch((error) => {
      console.log(error);
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
exports.getDatas = getDatas;
exports.getBidvDatas = getBidvDatas;
exports.deleteDatas = deleteDatas;
exports.saveTransactions = saveTransactions;
