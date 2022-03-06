const {postClientID, getCliendID} = require("./spotify-client-id-controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const spotifySchema = require("../../schemas/songs");

router.post("/", validateDto(spotifySchema),postClientID);
router.get("/:UserID", validateDto(spotifySchema), getCliendID);

module.exports = router;
