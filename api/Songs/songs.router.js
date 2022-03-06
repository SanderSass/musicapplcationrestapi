const { createSong, getSongByUserId,  deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const songSchema = require("../../schemas/songs");
// validateDto(songSchema)

// All routed CRUD calls
router.post("/", validateDto(songSchema), createSong);
router.get("/user/:UserId", validateDto(songSchema), getSongByUserId);
router.patch("/", updateSong);
router.delete("/", deleteSong);

module.exports = router;