const Comment = require("../models/Comments");

exports.getAll = (limit, skip) => {
  let query = Comment.find().sort({ createdAt: -1 });
  if (limit) {
    query = query.limit(limit).skip(skip);
  }
  return query;
};

exports.create = (userComment) => Comment.create(userComment);

exports.updateById = (id, updateData) =>
  Comment.findByIdAndUpdate(id, updateData);

exports.delete = (id) => Comment.findByIdAndDelete(id);

exports.countAll = () => Comment.countDocuments();

exports.countByOwner = (ownerId) => {
  return Comment.countDocuments({ ownerId });
};

exports.getByOwner = (_ownerId, limit, skip) => {
  return Comment.find({ _ownerId })
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);
};
