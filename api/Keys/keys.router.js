const {insertKey, getKeyByUserID} = require("./keys.controller");

const router = require("express").Router();

//All routed key CRUD calls
router.post("/", insertKey);
router.get("/", getKeyByUserID);

module.exports = router;