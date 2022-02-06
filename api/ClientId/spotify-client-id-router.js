const {postClientID} = require("./spotify-client-id-controller");

const router = require("express").Router();

router.post("/", postClientID);

module.exports = router;
