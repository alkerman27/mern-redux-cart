const express = require("express");

const {
  getProduct,
  createProduct,
  getOneProduct,
} = require("../controllers/cartController");
const router = express.Router();

router.get("/cart", getProduct);
router.post("/cart", createProduct);
router.get("/cart/:id", getOneProduct);

module.exports = router;
