import Product from "../model/Product.js";
import cloudinaryUploader from "../config/cloudinaryConfig.js";

const createProductData = async (req, res) => {
  try {
    let fileUrls = [];
    for (let file of req.files) {
      let result = await cloudinaryUploader.uploader.upload(file.path);
      fileUrls.push(result.secure_url);
    }
    let result = await Product.create({ ...req.body, images: fileUrls });
    console.log(req.body);

    res.status(201).send({ success: "Created Successfully", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getProductsData = async (req, res) => {
  let { limit, page, sortBy, sortOrder } = req.query;
  try {
    let count = await Product.find().count();
    let result = await Product.find().populate("category");
    //   .populate("category")
    //   .sort({ [sortBy]: sortOrder })
    //   .limit(limit || 1)
    //   .skip(parseInt(page) * limit);
    res.status(200).send({ Total: count, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProductData = async (req, res) => {
  try {
    let result = await Product.findById(req.params.id).populate("category");
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProductData = async (req, res) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({ success: "Deleted Successfully", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProductData = async (req, res) => {
  let { name, category, material, color, price, inStock, images } = req.body;
  try {
    let result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { name, category, material, color, price, inStock, images }
    );
    res.status(202).send({ success: "Updated Successfully", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export {
  createProductData,
  getProductsData,
  getProductData,
  deleteProductData,
  updateProductData,
};
