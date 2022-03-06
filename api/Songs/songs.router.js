const { createSong, getSongByUserId,  deleteSong, updateSong } = require("./songs.controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const songSchema = require("../../schemas/songs");
// validateDto(songSchema)

/**
 * @swagger
 * /songs:
 *  post:
 *      description: Use it to insert the user songs with user identification
 *      responses: 
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
router.post("/songs", validateDto(songSchema), createSong);

/**
 * @swagger
 * /songs/user/:UserID:
 *  get:
 *      description: Use it to retrieve the user songs with user identification
 *      responses:
 *          '200':
 *              description: A successful response
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad GET Request
 */
router.get("/songs/user/:UserID", getSongByUserId);

/**
 * @swagger
 * /songs:
 *  patch:
 *      description: Use it to update the user song with user identification
 *      responses:
 *          '200':
 *              description: Updated successfully!
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad Update Request
 */
router.patch("/songs", updateSong);

/**
 * @swagger
 * /songs:
 *  delete:
 *      description: Use it to delete the user song with user identification
 *      responses:
 *          '200':
 *              description: "Song is deleted successfully!"
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad Delete Request
 */
router.delete("/songs", deleteSong);

module.exports = router;