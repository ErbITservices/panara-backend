const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComplainSchema = new Schema(
  {
    Name: { type: String, required: true },
    // buy_price: { type: Number, required: true },
    Number: { type: Number, required: true },
    Email: { type: String },
    Descr: { type: String },
  },
  { timestamps: true }
);

const Contectschema = mongoose.model("Contectschema", Contectschema);
module.exports = Contectschema;
