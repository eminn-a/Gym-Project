const router = require("express").Router();
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  try {
    const result = await userService.register(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/logout", (req, res, next) => {
  try {
    res.clearCookie("authCookie");
    res.status(200).json({ message: "Изхонд!" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
