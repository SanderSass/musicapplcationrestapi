const { create, getSongByUserId, updateSong, deleteSong } = require("./songs.service");


module.exports = {
    createSong: (req, res) => {
        const body = req.body;
        // here we migt to add encryption
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    message: "Bad Request to POST" + err.code
                });
            } else if (!err) {
                return res.status(201).json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    getSongByUserId: (req, res) => {
        const UserID = req.params.UserID;
        getSongByUserId(UserID, (err, results)=> {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    data: "Bad Request to GET: " + err.code
                });
            } else if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: "Record not found!"
                });
            } else {
                return res.status(200).json({
                success: 1,
                data: results
            });}
        });
    },
    updateSong: (req, res) => {
        const body = req.body;
        // here we migt to add encryption
        updateSong(body, (err, results)=> {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    data: "Bad Request to UPDATE" + err.code
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
                return res.status(400).json({
                    success: 0,
                    data: "Bad Request to DELETE" + err.code
                });
            }
            if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: "Record not found!"
                });
            } else {
                return res.status(200).json({
                    success: 1,
                    message: "Song is deleted successfully!"
                });
            }
        });
    }
};