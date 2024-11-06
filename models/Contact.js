const mongoose = require("mongoose");
const { Schema } = mongoose;

const Contact = new Schema(
  {
    Name: { type: String, required: true },
    // buy_price: { type: Number, required: true },
    Number: { type: String, required: true },
    Email: { type: String },
    Descr: { type: String },
  },
  { timestamps: true }
);

const Contactschema = mongoose.model("Contact", Contact);
module.exports = Contactschema;
