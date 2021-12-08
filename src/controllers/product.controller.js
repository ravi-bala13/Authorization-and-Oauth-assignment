const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      const user = req.user;

      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_urls: ["www.google.com"],
        user: user.user._id,
      });

      return res.status(201).json({ product });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();

  return res.send(products);
});

router.patch("/:id/:price", async (req, res) => {
console.log('id:', req.params.id)

  const product = await Product.findById(req.params.id).lean().exec();

  product.price = req.params.price;

  res.send(product)

})

app.delete("/:id", (req, res) => {

  const product = Product.filter( (each_user) => each_user.id !== +req.params.id )

  res.send(product)

})

module.exports = router;
