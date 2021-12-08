const app = require("./index");
const connect = require("./configs/db");

app.listen(2346, async function () {
  await connect();
  console.log("listening on port 2346");
});


// "bcryptjs": "^2.4.3",
// "dotenv": "^10.0.0",
// "express": "^4.17.1",
// "jsonwebtoken": "^8.5.1",
// "mongoose": "^6.0.14",
// "passport": "^0.5.0",
// "passport-google-oauth2": "^0.2.0",
// "uuidv4": "^6.2.12"
