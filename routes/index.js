const express = require("express");

const router = express.Router();
const { createParticipants } = require("../controller/participants");

router.get("/v1/test", (req, res) => {
  res.send("This is a test route");
});

router.post("/v1/participants", createParticipants);

module.exports = router;
