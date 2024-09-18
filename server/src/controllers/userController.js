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

router.post("/refresh-token", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid refresh token

    const newAccessToken = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({
      accessToken: newAccessToken,
      user: {
        _id: user._id,
        email: user.email, // Include some minimal user info if needed
      },
    });
  });
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
