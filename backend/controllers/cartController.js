const Cart = require("../models/cartModel");

const getProduct = async (req, res) => {
  const product = await Cart.find({});

  res.status(200).json({
    sucess: "sucess",
    product,
  });
};

const createProduct = async (req, res) => {
  const { title, description, price } = req.body;

  const product = await Cart.create({ title, description, price });

  res.status(200).json({
    sucess: "sucess",
    product,
  });
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Cart.findById(id);

  res.status(200).json({
    success: "success",
    product,
  });
};

module.exports = {
  getProduct,
  createProduct,
  getOneProduct,
};
