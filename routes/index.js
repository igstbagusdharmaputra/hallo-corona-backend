const express = require("express");
const router = express.Router();
require("dotenv").config();
const { auth } = require("../middleware/auth");

const { signin } = require("../controllers/signin");
const { signup } = require("../controllers/signup");

router.post("/signin", signin);
router.post("/signup", signup);

const {
  consul: create,
  getconsul: getconsul,
  getAll: getAll,
  reply: reply
} = require("../controllers/consultation");

router.get("/consultation", auth, getAll);
router.get("/consultation/:id", auth, getconsul);
router.get("/consultation/:id/reply", auth, getconsul);
router.post("/consultation", auth, create);

const { profile: get } = require("../controllers/profile");
router.get("/profile/:id", auth, get);

const {
  create: newArticle,
  index: getAllArticle,
  getbyId: getbyId
} = require("../controllers/article");
router.post("/article", auth, newArticle);
router.get("/article", getAllArticle);
router.get("/article/:id", getbyId);
module.exports = router;
