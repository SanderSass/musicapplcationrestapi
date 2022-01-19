const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO songs(UserID, song_name) VALUES(?, ?)`,
            [data.UserID, data.song_name],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    getSongs: callBack => {
        pool.query(
            `SELECT id, UserID, song_name FROM songs`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getSongById: (id, callBack) => {
        pool.query(
            `SELECT id, UserID, song_name FROM songs WHERE id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateSong: (data, callBack) => {
        pool.query(
            `UPDATE songs SET song_name=? WHERE id=?`,
            [data.songs_name, data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    },
    deleteSong: (data, callBack) => {
        pool.query(
            `DELETE FROM songs WHERE id=?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }
};