const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

module.exports = ajvInstance;


// const Ajv = require("ajv");
// const ajv = Ajv({allErrors:true, removeAdditional:'all'});
// const insertSchema = require("./schemas/songs");
// ajv.addSchema(insertSchema, 'songs')