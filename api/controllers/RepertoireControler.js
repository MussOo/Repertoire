const Repertoire = require("../models/Repertoire");
const User = require("../models/User");

module.exports.index = async (req, res) => {
  console.log("aedjioadjioazdio");
  let data = req.body;
  let repertoire = await Repertoire.find({ user: req.auth.user._id });
  res.json(repertoire);
};

module.exports.insert = async (req, res) => {
  let data = req.body;
  console.log(data);
  let repertoire = new Repertoire({
    user: req.auth.user._id,
    name: data.name,
    email: data.email,
    numero: data.numero,
  });
  repertoire = await repertoire
    .save()
    .then((result) => {
      res.json({ message: result.message, repertoire_id: result._id });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};
module.exports.getOne = async (req, res) => {
  let id = req.params.id;
  let repertoire = await Repertoire.find({
    _id: id,
    user: req.auth.user._id,
  })
    .then((result) => {
      res.json({ message: "success", data: result });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};
module.exports.update = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  let repertoire = await Repertoire.updateOne(
    { _id: id, user: req.auth.user._id },
    {
      name: data.name,
      email: data.email,
      numero: data.numero,
    }
  )
    .then((result) => {
      res.json({ message: "success", data: result });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};
module.exports.delete = async (req, res) => {
  let id = req.params.id;
  let repertoire = await Repertoire.deleteOne({
    _id: id,
    user: req.auth.user._id,
  })
    .then((result) => {
      res.json({ message: "delete successfull" });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};
