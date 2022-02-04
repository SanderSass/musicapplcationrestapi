const { insertKey,  getKeyByUserID} = require("./keys.service");

module.exports = {
    insertKey: (req, res) => {
        const body = req.body;
        insertKey(body, (req, results) => {
            if (!err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                });
            } else {
                return res.status(300).json({
                    success: 1,
                    body: results
                });
            }
        });
    },
    getKeyByUserID: (req, res) => {
        const UserKey = req.params.UserID
        getKeyByUserID(UserKey, (err, results) => {
            if (!err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found!"
                });
            }
            return res.json({
                success: 1,
                UserKey: results
            });
        });
    }
};