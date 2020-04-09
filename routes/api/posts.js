const express = require("express");
const router = express.Router();

//@route GET api/post/
//@desc original post route
//@access public
router.get("/", (req, res) => res.json({ msg: "posts" }));

module.exports = router;
