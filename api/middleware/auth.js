const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log(token);
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const user = decodedToken.user;
    req.auth = {
      user: user,
    };

    User.findOne({ _id: user._id })
      .then((result) => {
        req.user = {
          user: result,
        };
      })
      .catch((err) => {});
    next();
  } catch (error) {
    res.status(401).json(" ERROR : 401 Unauthorized ");
  }
};
