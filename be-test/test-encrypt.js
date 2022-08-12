// import transport from "./config/nodeMailer.js";
// const message = {
//   from: "rs8813963349@gmail.com",
//   to: "rahulsaini7284@gmail.com",
//   subject: "User auth message",
//   text: "This is verification message",
//   html: `<h>Hello World!</h>1`,
// };
// async function sendingMail() {
//   let result = await transport.sendMail(message);
//   console.log(result);
// }
// sendingMail();
// import multer from "multer";
// let storage = multer.diskStorage()
// export const upload = multer({ dest: "./uploads" });
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("saini7284", salt);
console.log(hash);
let result = bcrypt.compareSync("saini7284", hash);
console.log(result);
if (result) {
  let token = jwt.sign(
    {
      id: 1,
      name: "Rahul Saini",
      mobile: 8813963349,
      email: "rahulsaini7284@gmail.com",
    },
    "rahul12345!@#$%"
  );
  console.log("TOKEN=", token);
  let verify = jwt.verify(token, "rahul12345!@#$%");
  console.log(verify);
}
