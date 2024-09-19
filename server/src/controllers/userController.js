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

    // Set the refresh token in the cookie
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      // secure: true, // Uncomment in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send the access token, refresh token, and user info in the response
    res.status(200).json({
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.post("/refresh-token", verifyRefreshToken, (req, res) => {
  const { _id, email } = req.user; // User info from the middleware

  const newAccessToken = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  res.json({
    accessToken: newAccessToken,
    user: {
      _id,
      email,
    },
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
