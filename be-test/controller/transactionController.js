import Transaction from "../model/Transaction.js";

const createTransaction = async (req, res) => {
  try {
    let result = await Transaction.create(req.body);
    res.status(201).send({ success: true, result });
  } catch (er) {
    res.status(400).send(er.message);
  }
};
const getTransactions = async (req, res) => {
  try {
    let result = await Transaction.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getTransaction = async (req, res) => {
  try {
    let result = await Transaction.findById({ _id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status().send(error.message);
  }
};
export { createTransaction, getTransactions, getTransaction };
