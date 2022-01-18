require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const songRouter = require("./api/Songs/songs.router");

//define root route
app.use(express.json())
app.use("/api/songs", songRouter);
app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});