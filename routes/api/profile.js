const express = require("express");
const router = express.Router();

//@route    GET api/profile/
//@desc     original profile route
//@access   public
router.get("/", (req, res) => res.json({ msg: "profiles" }));

module.exports = router;
