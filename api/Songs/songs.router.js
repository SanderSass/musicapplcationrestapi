const { createSong, getSongById, getSongs, deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();

// All routed crud calls
router.post("/", createSong, isAuthorized);
router.get("/", getSongs, isAuthorized);
router.get("/:id", getSongById, isAuthorized);
router.patch("/", updateSong, isAuthorized);
router.delete("/", deleteSong, isAuthorized);

function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync("./private.perm", "utf8");
        
        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) => {
            if (err) {
                res.status(500).json({ error: "Not Authorized" })
            }
            console.log(decoded);

            return next();
        })
    } else {
        res.status(500).json({ error: "Not Authorized" })
    }
}

module.exports = router;