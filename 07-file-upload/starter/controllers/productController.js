const Product = require('../models/Product')

const path = require('path')
const { StatusCodes } = require('http-status-codes')

const createProduct = async (req, res) => {
  const productImage = req.files.image;

  const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } })

}
const getAllProducts = async (req, res) => {
  res.send('list of products')
}

module.exports = {
  createProduct,
  getAllProducts
}