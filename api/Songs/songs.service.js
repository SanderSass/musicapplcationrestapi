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
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    getSongByUserId: (UserID, callBack) => {
        pool.query(
            readSongsByUserId,
            [UserID],
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
                return callBack(null, results)
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
                return callBack(null, results)
            }
        )
    }
};