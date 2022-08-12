import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transport from "../config/nodeMailer.js";
const createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let result = await User.create({
      name,
      email,
      password: hash,
    });
    let token = jwt.sign(
      { name, email, password, expiresIn: 2 * 24 * 3600 },
      process.env.JWT_SECRET
    );
    const mailData = {
      from: "rs8813963349@gmail.com",
      to: req.body.email,
      subject: "User Verification message",
      text: "This is verification message",
      html: `<h2>Account Verified</h2>
            <a href="http://localhost:7284/auth/verify/?token=${token}">Verify</a>
      `,
    };
    await transport.sendMail(mailData);
    res.status(201).send({
      success: true,
      result: {
        name: result.name,
        email: result.email,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    let result = await User.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createUser, getUsers };
