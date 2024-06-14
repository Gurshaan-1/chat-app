const express = require("express");
const {sendMessage , getMessage} = require("../controllers/messagecontroller");
const protectedRoute = require("../middleware/protectedroute");
const router = express.Router();

router.get("/:id", protectedRoute , getMessage);
router.post("/send/:id", protectedRoute , sendMessage);

module.exports = router;
