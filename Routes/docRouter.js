const express = require("express")
const router = express.Router()
const { createDoc, upload, getDocs, login, getSingle} = require("../Controllers/docController")

router.post("/register", upload, createDoc);
router.post("/Login", login);
router.get("/docs", getDocs)
router.get("/get/:id", getSingle)

module.exports = router