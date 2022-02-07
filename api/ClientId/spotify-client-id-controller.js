const {create} = require("./spotify-client-id-service")

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
};
