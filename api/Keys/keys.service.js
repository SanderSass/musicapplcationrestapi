require("dotenv").config();
const pool = require("../../config/database");

const insertKey = process.env.INSERT_KEY;
const getKey = process.env.GET_KEY;

module.exports = {
    insertKey: (key, callBack) => {
        pool.query(
            insertKey,
            [key.UserKey, key.UserID],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    //Sander: NOT DONE YET, query is not logical yet, ask Ramon
    getKeyByUserID: (key, callBack) => {
        pool.query(
            getKey,
            [key.UserKey, key.UserID],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
};