const { createSong, getSongById, getSongs, deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();

// All routed crud calls
router.post("/",createSong);
router.get("/", getSongs);
router.get("/:id", getSongById);
router.patch("/", updateSong);
router.delete("/", deleteSong);

module.exports = router;