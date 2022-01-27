require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")
const fs = require("fs");

const app = express();

const port = process.env.APP_PORT;
const code = process.env.ENC_SECRET;
const url = process.env.URL_KEY;
const route = process.env.ROUTE_R;

app.use(cors())
app.use(express.json())

const songRouter = require("./api/Songs/songs.router");

app.get(url, (req, res) => {
    let privateKey = fs.readFileSync(code, "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
});

//define root route
app.use(route, isAuthorized, songRouter,(req, res) => {
    res.json({"message": "secret"})
});

/**
 * JWT key
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
 function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync(code, "utf8");
        
        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) => {
            if (err) {
                res.status(500).json({ error: "Not Authorized" })
            }
            console.log(decoded);

            return next();
        })
    } else {
        res.status(500).json({ error: "Not Authorized" })
    }
}

app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});