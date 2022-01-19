const { create, getSongs, getSongById, updateSong, deleteSong } = require("./songs.service");

module.exports = {
    createSong: (req, res) => {
        const body = req.body;
        // here we migt to add encryption
        create(body, (err, results) => {
            if (!err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                });
            } else {
                return res.status(300).json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    getSongById: (req, res) => {
        const id = req.params.id;
        getSongById(id, (err, results)=> {
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
    },
    getSongs: (req, res) => {
        getSongs((err, results)=> {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateSong: (req, res) => {
        const body = req.body;
        // here we migt to add encryption
        updateSong(body, (err, results)=> {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Updated successfully!"
            });
        });
    },
    deleteSong: (req, res) => {
        const data = req.body;
        // here we migt to add encryption
        deleteSong(data, (err, results)=> {
            if (err) {
                console.log(err);
                return;
            }
            if (results) {
                return res.json({
                    success: 0,
                    message: "Record not found!"
                });
            } else {
                return res.json({
                    success: 1,
                    message: "Song is deleted successfully!"
                });
            }
        });
    },
};