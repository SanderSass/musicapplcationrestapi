require("dotenv").config();
const express = require("express");
const jwt =require("jsonwebtoken");
const fs = require("fs");
const app = express();
const port = process.env.APP_PORT;
const apiKey = process.env.API_KEY;
app.use(express.json())

const songRouter = require("./api/Songs/songs.router");

app.get("/jwt", (req, res) => {
    let privateKey = fs.readFileSync("./private.perm", "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
})

//define root route
app.use("/api/songs", songRouter);

app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});