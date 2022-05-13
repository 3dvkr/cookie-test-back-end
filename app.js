const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(logger("tiny"));
app.use(cookieParser());

app.get("/cookie", (req, res) => {
    res.cookie("cookieName", "test-value");
    res.send("cookie set");
    // res
    // .writeHead(200, {
    //   "Set-Cookie": "token=encryptedstring; HttpOnly",
    //   "Access-Control-Allow-Credentials": "true"
    // })
    // .send();
  })

app.listen(PORT, () => {
    console.log('server running on port '+ PORT);
});