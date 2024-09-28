const Comment = require("../models/Comments");

exports.getAll = (limit) => {
  let query = Comment.find().sort({ createdAt: -1 });
  if (limit) {
    query.limit(limit);
  }
  return query;
};

exports.create = (userComment) => Comment.create(userComment);

exports.updateById = (id, updateData) =>
  Comment.findByIdAndUpdate(id, updateData);

exports.delete = (id) => Comment.findByIdAndDelete(id);
