import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
async function login(req, res) {
  try {
    let result = await User.findOne({ email: req.body.email });
    if (!result) return res.status(404).send("User not found");
    let authResult = await bcrypt.compare(req.body.password, result.password);
    if (!authResult) return res.status(401).send("Incorrect Password");
    const token = jwt.sign(
      {
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password,
        expiresIn: 180,
      },
      process.env.JWT_SECRET
    );
    res.status(200).send({ Success: "Login Success", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function verify(req, res) {
  try {
    let { token } = req.query;
    let decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findOneAndUpdate(
      { email: decodedInfo.email },
      { isVerified: true }
    );
    res.status(200).send("Your account has been verified");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { login, verify };
