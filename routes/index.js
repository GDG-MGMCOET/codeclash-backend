const express = require("express");

const router = express.Router();

router.get("/v1/test", (req, res) => {
  res.send("This is a test route");
});

module.exports = router;
