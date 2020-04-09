const express = require("express");
const router = express.Router();

//@route    GET api/users/
//@desc     original users route
//@access   public
router.get("/", (req, res) => res.json({ msg: "users" }));

module.exports = router;
