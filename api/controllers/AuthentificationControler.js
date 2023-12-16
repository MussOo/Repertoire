const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  let data = req.body;
  User.findOne({ email: data.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(data.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ status: 401, error: "Mot de passe incorrect !" });
          }
          userWithoutPassword = user;
          userWithoutPassword.password = undefined;
          res.status(200).json({
            status: 200,
            user: userWithoutPassword,
            userId: user._id,
            token: jwt.sign({ user: user }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => res.status(401).json({ error }));
};

module.exports.register = async (req, res) => {
  let data = req.body;
  const user = new User({
    username: data.username,
  });
  bcrypt
    .hash(data.password, 10)
    .then((hash) => {
      user.password = hash;
      user
        .save()
        .then(() => res.status(201).json({ message: "user create !!" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports.me = async (req, res) => {
  let data = req.auth.user;

  res.json(data);
};
