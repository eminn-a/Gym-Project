const router = require("express").Router();
const userService = require("../services/userService");
const { verifyRefreshToken } = require("./../middlewares/verifyRefreshToken");
const jwt = require("jsonwebtoken");

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

    res.cookie("authCookie", result.refreshToken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json(result.userData);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.post("/refresh-token", verifyRefreshToken, (req, res) => {
  try {
    const { _id, email } = req.user;
    const newAccessToken = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    res.status(200).json({
      accessToken: newAccessToken,
      _id,
      email,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Възникна проблем при обновяването на токен!" });
  }
});

router.post("/logout", (req, res) => {
  try {
    res.clearCookie("authCookie");
    res.status(200).json({ message: "Успешен изход!" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed." });
  }
});

module.exports = router;
