const router = require("express").Router();

const {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} = require("../utils/cloudinaryMethods.js");
const Complain = require("../models/Contact.js");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "erbitservices@gmail.com",
    pass: "rorvwwarciklfgyw",
  },
});

router.post("/", async (req, res) => {
  const id = mongoose.Types.ObjectId();
  // console.log(id);
  // console.log("started");
  // console.log(req.body);
  try {
    const savedProduct = await Complain.create({
      ...req.body,
      _id: id,
    });
    // console.log("save");

    if (savedProduct) {
      // console.log(savedProduct.Email);

      const mailOptions = {
        form: "erbitservices@gmail.com",
        to: `${savedProduct.Email},patelmihir2712005@gmail.com`,
        subject: "Complain received",
        text: ` We Received New Contact Request Of ${savedProduct.Name}. decripstion :-  ${savedProduct.Descr} , mobile number :- ${savedProduct.Number}, Email :- ${savedProduct.Email}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(400).json({ msg: "error sending mail" });
        } else {
          res
            .status(200)
            .json({ msg: "password reset link sent to your email" });
        }
      });
    }
    savedProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.log("ohhno", err);

    if (err.name === "ValidationError") {
      if (err.name == "ValidationError") {
        for (field in err.errors) {
          return res
            .status(400)
            .json({ sucess: false, message: err.errors[field].message });
        }
      }
    }
    if (err.code === 11000) {
      const dublicate = Object.keys(err.keyPattern)[0];
      return res.status(400).json({
        message: ` A product already exist with the same ${dublicate}`,
      });
    }
    return res.status(500).json({ message: "internal server Error" });
  }
});
router.get("/:Name", async (req, res) => {
  try {
    const data = await Complain.findOne({ Name: req.params.Name });

    res.status(200).json(data);
    console.log("done");
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "internal servr error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Complain.find();

    res.status(200).json(data);
    console.log("done");
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "internal servr error" });
  }
});

module.exports = router;
