const express = require("express");
const router = express.Router();

const contacts = [
  { id: "1", username: "Felix", surname: "Brown", email: "felix@test.com" },
  { id: "2", username: "Sonya", surname: "Redhead", email: "sonya@test.com" },
  { id: "3", username: "Conan", surname: "Barbarian", email: "conan@test.com" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  res.json(contacts);
});

module.exports = router;
