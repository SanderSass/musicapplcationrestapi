require("dotenv").config();
const pool = require("../../config/database");

const publishSongs = process.env.PUBLISH_SONGS;
const readSongs = process.env.READ_SONGS;
const readSongsById = process.env.READ_SONGS_ID;
const readSongsByUserId = process.env.READ_SONGS_SECRET;
const editSongs = process.env.UPDATE_SONG;
const removeSong = process.env.DELETE_SONG;

module.exports = {
    create: (data, callBack) => {
        pool.query(
            publishSongs,
            [data.UserID, data.songName],
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
            readSongs,
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
            readSongsById,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getSongByUserId: (UserId, callBack) => {
        pool.query(
            readSongsByUserId,
            [UserId],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateSong: (data, callBack) => {
        pool.query(
            editSongs,
            [data.songName, data.id],
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
            removeSong,
            [data.songName],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }
};