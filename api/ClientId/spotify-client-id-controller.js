const {create, read} = require("./spotify-client-id-service")

module.exports = {
    postClientID: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    message: err.code
                });
            } else {
                return res.status(201).json({
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
                return res.status(400).json({
                    success: 0,
                    message: err.code
                });
            }
            if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: "Record not found!"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
};
