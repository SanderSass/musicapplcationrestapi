require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
app.use(express.json())

const songRouter = require("./api/Songs/songs.router");
//define root route
app.use("/api/songs", songRouter);

app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});