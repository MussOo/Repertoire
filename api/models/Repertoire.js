const mongoose = require("mongoose");

const repertoireSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Repertoire", repertoireSchema);
