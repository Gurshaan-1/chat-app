const express = require("express");
const {getSideBarUsers} = require("../controllers/usercontroller");
const protectedRoute = require("../middleware/protectedroute");
const router = express.Router();

router.get("/", protectedRoute, getSideBarUsers);

module.exports = router;
