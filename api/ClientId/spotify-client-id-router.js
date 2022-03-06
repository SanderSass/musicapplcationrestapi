const {postClientID, getCliendID} = require("./spotify-client-id-controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const spotifySchema = require("../../schemas/clientid");

router.post("/", validateDto(spotifySchema),postClientID);
router.get("/:UserID", getCliendID);

module.exports = router;
