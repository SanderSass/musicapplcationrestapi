const {create, read} = require("./spotify-client-id-service")

module.exports = {
    postClientID: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err.code
                });
            } else {
                return res.status(300).json({
                    success: 1,
                    data: results
                });
            }
        });
    },

    getCliendID: (req, res) => {
        const UserID = req.params.UserID;
        read(UserID, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found!"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
};
