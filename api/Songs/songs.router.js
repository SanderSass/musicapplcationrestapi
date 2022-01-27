const { createSong, getSongById, getSongs, getSongByUserId,  deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();

// All routed CRUD calls
router.post("/", createSong);
router.get("/", getSongs);
router.get("/:id", getSongById);
router.get("/user/:UserId", getSongByUserId);
router.patch("/", updateSong);
router.delete("/", deleteSong);

module.exports = router;