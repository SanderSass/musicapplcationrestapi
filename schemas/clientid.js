const ajvInstance = require('./ajv-instance');

const clientID = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "Spotify Client IDs",
  description: "This document records the details of an user spotify client IDs",
  properties: {
    UserID: {
        title: "UserID", 
        type: "string",
        minLength: 3
    },
    ClientID: {
      title: "ClientID", 
      type: "string",
      minLength: 3
    },
    iv: {
      title: "iv", 
      type: "string",
      minLength: 1
    }
  },
  required: [		
      "UserID",
      "ClientID",
      "iv"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(clientID);