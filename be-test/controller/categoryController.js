import Category from "../model/Category.js";
const createCategory = async (req, res) => {
  try {
    let { name } = req.body;
    let result = await Category.create({ name });
    res.status(201).send({ result });
  } catch (error) {
    res.status(200).send(error.message);
  }
};
const getCategories = async (req, res) => {
  try {
    let result = await Category.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getCategory = async (req, res) => {
  try {
    let result = await Category.find({ _id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export { createCategory, getCategories, getCategory };
