const express = require("express");
const router = express.Router();
const { sendFeedbackMail } = require("../../controller/feedback/sendFeedback");

router.post("/", sendFeedbackMail);

module.exports = router;
