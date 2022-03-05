const { createSong, getSongById, getSongs, getSongByUserId,  deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const songSchema = require("../../schemas/songs");
// validateDto(songSchema)

// All routed CRUD calls
router.post("/", validateDto(songSchema), createSong);
router.get("/", getSongs);
// router.get("/:id", getSongById);
router.get("/user/:UserId", getSongByUserId);
router.patch("/", updateSong);
router.delete("/", deleteSong);

module.exports = router;