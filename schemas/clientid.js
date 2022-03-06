const ajvInstance = require('./ajv-instance');

const clientID = {
  type: "object",
  title: "Spotify Client IDs",
  description: "This document records the details of an user spotify client IDs",
  properties: {
    UserID: {
        title: "UserID", 
        type: "string"
    },
    ClientID: {
      title: "ClientID", 
      type: "string"
    },
    iv: {
      title: "iv", 
      type: "string"
    }
  },
  required: [		
      "UserID",
      "ClientID",
      "iv"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(clientID);