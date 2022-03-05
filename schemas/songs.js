const ajvInstance = require('./ajv-instance');

const schema = {
  type: "object",
  title: "List of Songs",
  description: "This document records the details of an user songs",
  properties: {
    UserID: {
        title: "Userid", 
        type: "string"
    },
    songName: {
        title: "songName", 
        type: "string",
    }
  },
  required: [		
      "UserID",
    "songName"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);