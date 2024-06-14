const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generatetoken");
exports.signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullName,
      username,
      password: hashedPwd,
      gender,
      Profilepic: gender === "male" ? boyprofilepic : girlprofilepic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        Profilepic: newUser.Profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordMatch = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      Profilepic: user.Profilepic,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

exports.logout = (req, res) => {
  try {
    res.cookie("jwt" , "" , {maxAge:0});
res.status(200).json({message:"Logged out successfully"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};
