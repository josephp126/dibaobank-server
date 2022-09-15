const con = require("../db/conn");

const getDatas = async (data, callback) => {
  let sql = "select * from account_info";
  let args = [];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("get accountInfo error" + err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const createData = async (data, callback) => {
  let sql = `insert into account_info(userId, type, nickName, account, accountName, created_at)
  values(?, ?, ?, ?, ?, ?)`;
  let nowday = dateFormat(new Date(), "%Y-%m-%d %H:%M:%S", true);
  let args = [
    data.userId,
    data.type,
    data.nickName,
    data.account,
    data.accountName,
    nowday,
  ];
  con.query(sql, args, function (err, result) {
    if (err) {
      console.log("create accountInfo error" + err);
      callback(err, null);
    } else {
      callback(null, "success");
    }
  });
};

const deleteData = async (data, callback) => {
  let sql = `delete from account_info where id=?`;
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

const dateFormat = (date, fstr, utc) => {
  utc = utc ? "getUTC" : "get";
  return fstr.replace(/%[YmdHMS]/g, function (m) {
    switch (m) {
      case "%Y":
        return date[utc + "FullYear"](); // no leading zeros required
      case "%m":
        m = 1 + date[utc + "Month"]();
        break;
      case "%d":
        m = date[utc + "Date"]();
        break;
      case "%H":
        m = date[utc + "Hours"]();
        break;
      case "%M":
        m = date[utc + "Minutes"]();
        break;
      case "%S":
        m = date[utc + "Seconds"]();
        break;
      default:
        return m.slice(1); // unknown code, remove %
    }
    // add leading zero if required
    return ("0" + m).slice(-2);
  });
};

exports.deleteData = deleteData;
exports.getDatas = getDatas;
exports.createData = createData;
