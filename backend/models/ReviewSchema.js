const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "doctors",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "hospitalUser",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports =  mongoose.model("Review", reviewSchema);
