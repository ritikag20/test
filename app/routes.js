const express = require("express");
const router = express.Router();

const controller = require('./controller');

//Two routes are created below

//This API will help us in saving the Call-ID to the redis database
router.post("/api/save-call-id", controller.saveCallId);

//This API will take in the Call-ID from the Front-end and pass it to the getCallID controller method
router.get("/api/get-call-id/:id", controller.getCallId);

module.exports = router;