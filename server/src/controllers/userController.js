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

    res.cookie("authCookie", result, {
      httpOnly: true,
      // secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
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
