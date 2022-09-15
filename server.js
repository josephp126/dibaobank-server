const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const routers = require("./routers/routers");
const fileUpload = require("express-fileupload");
const axios = require("axios");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use(express.static(__dirname + "/build"));

app.use(
  fileUpload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `/uploads`,
  })
);

// all Routers
app.use("/", routers);

// const fetchSync = async () => {
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization:
//       "Apikey AK_CS.4adff760276711edab64f1c512bb3edd.2z9Sc1zNNeCOvRVGpUXAEcsRPBegdl51cSnTRHN5Ir4TjFxmJuSZWYAhWNfLAObUT0kSMEm5",
//   };
//   axios
//     .post(
//       "https://oauth.casso.vn/v2/sync",
//       {
//         bank_acc_id: "05803661601",
//       },
//       {
//         headers: headers,
//       }
//     )
//     .then((response) => {
//       console.log(response.data.data);
//       if (response.data.data) {
//         console.log(response.data);
//         clearInterval(fetchSync);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// setInterval(fetchSync, 300);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
