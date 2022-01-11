const jwt = require("jsonwebtoken");
require('dotenv').config()

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["token"];
  // console.log(token);
  if (!token) {
    return res.status(403).send("user not looged in  or A token is required for authentication ");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
