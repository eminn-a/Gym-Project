const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String, required: true },
    img: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length >= 2;
        },
        message: "The images field must contain at least 2 images",
      },
    },
    _ownerId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
