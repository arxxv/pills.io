const express = require("express");
const router = express.Router();
const selector = require("../utils/selector").pillSelector;
const data = require("../data/data");

router.post("/", (req, res) => {
  const pill = selector(req.body);
  res.json({ data: data[pill], pill });
});

module.exports = router;
