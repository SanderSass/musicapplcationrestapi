const ajvInstance = require('./ajv-instance');

const keys = {
  type: "object",
  title: "Keys",
  description: "This document records the details of an user songs",
  properties: {
    UserID: {
        title: "UserID", 
        type: "string"
    },
  },
  required: [		
      "UserID",
    "songName"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(keys);