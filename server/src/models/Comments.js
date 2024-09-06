const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String, required: true },
    img: {
      type: String,
      required: true,
    },
    _ownerId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
