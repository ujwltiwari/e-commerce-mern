const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

router.get("/", async (req, res) => {
  const allCartItems = await Cart.find();
  return res.status(200).json(allCartItems);
});

// POST => Add an item to the cart
router.post("/", async (req, res) => {
  const { productId, quantity, userId } = req.body;
  const existingItem = await Cart.findOne({
    userId,
    productId,
  });

  if (existingItem) {
    existingItem.quantity += quantity;
    await existingItem.save();
    return res.status(200).json(existingItem);
  }

  const newCartItem = await new Cart({
    userId,
    productId,
    quantity,
  });

  const result = await newCartItem.save();
  return res.status(200).json(result);
});

// DELETE /cart/:id: Remove an item from the cart.
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Cart.findByIdAndDelete(id);
  if (!result) {
    return res.status(404).send("Product not found");
  }

  return res.status(200).json(result);
});

module.exports = router;
