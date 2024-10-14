const express = require("express");
const { handleUserSignup, allUsersDetails, handleUserSignin } = require("../controllers/user");
const router = require("express").Router();

router.post("/signup", handleUserSignup);
router.post("/signin", handleUserSignin);
router.get("/getUser", allUsersDetails);

module.exports = router;
