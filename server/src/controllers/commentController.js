const router = require("express").Router();
const commentService = require("../services/commentService");
const { auth } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
  const limit = Number(req.query.limit);
  const page = Number(req.query.page);
  const ownerId = req.query.ownerId; // Optional ownerId parameter
  const startIndex = (page - 1) * limit;

  try {
    let total, comments;

    if (ownerId) {
      // Count and fetch only the comments for the specific owner
      total = await commentService.countByOwner(ownerId);
      comments = await commentService.getByOwner(ownerId, limit, startIndex);
    } else {
      // Count and fetch all comments
      total = await commentService.countAll();
      comments = await commentService.getAll(limit, startIndex);
    }

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      comments,
    });
  } catch (error) {
    res.status(400).json({ message: "Грешка коментари!" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const comments = await commentService.create({
      ...req.body,
      _ownerId: req.user._id,
    });

    res.status(201).json(comments);
  } catch (error) {
    res.status(400).json({
      message: "Коментара не е създаден - Грешка в сървъра!",
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const comment = await commentService.delete(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.json({
      message: "Възникна грешка при изтриването на коментара",
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
      message: "Възникна грешка при обновяването на коментара",
    });
  }
});

module.exports = router;
