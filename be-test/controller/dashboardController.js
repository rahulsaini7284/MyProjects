import User from "../model/User.js";
import Category from "../model/Category.js";
import Transaction from "../model/Transaction.js";
import Products from "../model/Product.js";
import Cars from "../model/Cars.js";
import moment from "moment";

const dashboardController = async (req, res) => {
  try {
    let users = await User.find().count();
    let categories = await Category.find().count();
    let transactions = await Transaction.find().count();
    let products = await Products.find().count();
    let cars = await Cars.find().count();
    let recentTransaction = await Transaction.find({
      createAt: { $gt: moment().startOf("day").subtract(1, "day") },
    }).sort({ createAt: 1 });
    res.status(200).send({
      users,
      categories,
      transactions,
      products,
      cars,
      recentTransaction,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default dashboardController;
