import jwt from "jsonwebtoken";

function hasTokenExpired(req, res, next) {
  try {
    let token = req.headers.token;
    let decoded_info = jwt.verify(token, process.env.JWT_SECRET);
    let interval = parseInt(new Date().getTime() / 1000) - decoded_info.iat;
    if (!(interval < decoded_info.expiresIn)) {
      res.status(401).send("Token has expired");
    }
    next();
  } catch (error) {}
}

export { hasTokenExpired };
