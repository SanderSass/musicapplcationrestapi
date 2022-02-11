require("dotenv").config();
const pool = require("../../config/database");

const saveClientID = process.env.SAVE_CLIENTID;
const getClientID = process.env.GET_CLIENTID;

module.exports = {
    create: (data, callBack) => {
        pool.query(saveClientID,[data.UserID, data.ClientID], (error, results) => {
            if(error) {
                return callBack(error);
            } else {
                return callBack(results)
            }
        });
    },

    read: (UserId, callBack) => {
        pool.query(
            getClientID,
            [UserId],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
