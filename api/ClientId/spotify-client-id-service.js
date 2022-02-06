require("dotenv").config();
const pool = require("../../config/database");

const saveClientID = process.env.SAVE_CLIENTID;

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
};
