const router = require("express").Router();
const commentService = require("../services/commentService");
const { auth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const comments = await commentService.getAll();
    res.json(comments);
  } catch (error) {
    res.status(400).json({ message: "Грешка коментари!" });
  }
});

router.post("/", auth, async (req, res) => {
  console.log(req.user);
  try {
    const comments = await commentService.create({
      ...req.body,
      _ownerId: req.user._id,
    });

    res.status(201).json(comments);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Comment not created",
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const comment = await commentService.delete(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.json({
      message: "Something went wrong deleting destination",
    });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const updatedComment = await commentService.updateById(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.json({
      message: "Something went wrong updating destination",
    });
  }
});

module.exports = router;
