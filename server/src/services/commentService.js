const Comment = require("../models/Comments");

exports.getAll = () => Comment.find();

exports.create = (userComment) => Comment.create(userComment);

exports.updateById = (id, updateData) => {
  Comment.findByIdAndUpdate(id, updateData);
};

exports.delete = (id) => Comment.findByIdAndDelete(id);
