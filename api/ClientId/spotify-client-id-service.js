require("dotenv").config();
const pool = require("../../config/database");

const saveClientID = process.env.SAVE_CLIENTID;
const getClientID = process.env.GET_CLIENTID;

module.exports = {
    create: (data, callBack) => {
        pool.query(saveClientID,[data.UserID, data.ClientID, data.iv], (error, results) => {
            if(error) {
                return callBack(error);
            } else {
                return callBack(results)
            }
        });
    },

    read: (UserID, callBack) => {
        pool.query(
            getClientID,
            [UserID],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};
