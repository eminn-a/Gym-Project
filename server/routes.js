const router = require("express").Router();

const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");

router.use("/users", userController);
router.use("/data/comments", commentController);

module.exports = router;
