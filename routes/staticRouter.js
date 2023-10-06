const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allurls = await URL.find({});
  res.render("home", {
    urls: allurls,
  });
});

router.get("/", restrictTo(["NORMAL","ADMIN"]), async (req, res) => {
  const allurls = await URL.find({ createdBy: req.user._id });
  res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
