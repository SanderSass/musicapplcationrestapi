const {postClientID, getCliendID} = require("./spotify-client-id-controller");

const router = require("express").Router();

router.post("/", postClientID);
router.get("/:UserID", getCliendID);

module.exports = router;
