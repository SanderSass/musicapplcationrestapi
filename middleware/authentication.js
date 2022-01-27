require("dotenv").config();

const code = process.env.ENC_SECRET;

/**
 * JWT key
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
 function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync(code, "utf8");
        
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
