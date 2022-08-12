// import jwt from "jsonwebtoken";
// const secret = "saini7284";
// // let token = jwt.sign({ id: 123, name: "Rahul Saini", City: "Mohali" }, secret);
// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiUmFodWwgU2FpbmkiLCJDaXR5IjoiTW9oYWxpIiwiaWF0IjoxNjUyMDY1NDU0fQ.F1phGkvwWmf6EcFLOB5TgEhlND696VDxBvpBWNhYFt4";
// // let token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiUmFodWwgU2FpbmkiLCJDaXR5IjoiTW9oYWxpIiwiaWF0IjoxNjUxMTE4MDcyfQ.bLBwVsR3C-UM_hiwKkLHPHzPxTlMxYxTtvFuaDg4lw4";
// // let confirm = jwt.verify(token, secret);
// let confirm = jwt.verify(token, secret);
// console.log(token);
// if (confirm) console.log("Verified");

import jwt from "jsonwebtoken";
let secret = "saini7284";
// let token2 = jwt.sign(
//   { id: 123, name: "Rahul Saini", password: "saini7284", expiresIn: 60 },
//   secret
// );
let token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiUmFodWwgU2FpbmkiLCJwYXNzd29yZCI6InNhaW5pNzI4NCIsImV4cGlyZXNJbiI6NjAsImlhdCI6MTY1NDQyNzE5OH0.VKDI8NvJDHblxaXSRtRxtJyMn66Vz5BABKhe4ZlTtRk";
// console.log(token2);

let info = jwt.verify(token2, "saini7284");
// let dura;
// console.log(info);
let duration = parseInt(new Date().getTime() / 1000) - info.iat;
if (duration > info.expiresIn) {
  console.log("Token Expired", duration);
}
