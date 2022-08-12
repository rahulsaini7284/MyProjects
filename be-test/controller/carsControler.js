import Car from "../model/Cars.js";
import cloudinaryUploader from "../config/cloudinaryConfig.js";
const createCarsData = async (req, res) => {
  try {
    let filesUrls = [];
    if (req.files) {
      for (let file of req.files) {
        let result = await cloudinaryUploader.uploader.upload(file.path);
        filesUrls.push(result.secure_url);
      }
    }
    let result = await Car.create({ ...req.body, images: filesUrls });
    res.status(201).send({ status: 201, result });
    // let ulploadResult = await cloudinaryUploader.uploader.upload(
    //   req.files[0].path
    // );
    // console.log(ulploadResult);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getCarsData = async (req, res) => {
  let { limit, page, sortBy, sortOrder } = req.query;

  try {
    let count = await Car.find().count();
    let result = await Car.find().populate("category");
    // .sort({ [sortBy]: sortOrder || 1 })
    // .limit(limit || 10)
    // .skip(parseInt(page) * limit);
    res.status(200).send({ totalData: count, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getCarData = async (req, res) => {
  try {
    let result = await Car.findById(req.params.id).populate("category");
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteCarData = async (req, res) => {
  try {
    let result = await Car.deleteOne({ _id: req.params.id });
    res.status(200).send("Product Deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateCarsData = async (req, res) => {
  console.log(req.body);
  try {
    let { company, type, fuel, category, color, price } = req.body;
    let result = await Car.findOneAndUpdate(
      { _id: req.params.id },
      {
        company,
        type,
        fuel,
        category,
        color,
        price,
      }
    );
    res.status(200).send({ Updated: "Success", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export {
  createCarsData,
  getCarsData,
  getCarData,
  deleteCarData,
  updateCarsData,
};
