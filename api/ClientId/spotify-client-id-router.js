const {postClientID, getCliendID} = require("./spotify-client-id-controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const spotifySchema = require("../../schemas/clientid");

/**
 * @swagger
 * /clientId:
 *  post:
 *      description: Use it to insert user spotify client id with user identification
 *      responses:
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
router.post("/clientId", validateDto(spotifySchema),postClientID);

/**
 * @swagger
 * /clientId/:UserID:
 *  get:
 *      description: Look the JWT token route from .env file. This route will create a jwt token to get access to the API routes
 *      responses:
 *          '200':
 *              description: A successful response
 *          '204':
 *              description: Record not found!
 *          '400':
 *              description: Bad GET Request
 */
router.get("/clientId/:UserID", getCliendID);

module.exports = router;
