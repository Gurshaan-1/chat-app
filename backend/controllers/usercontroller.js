const User = require("../models/usermodel");
const getSideBarUsers = async (req, res) => {
try {
    const loggedInUser = req.user._id;
    const filteredusers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
    res.status(200).json(filteredusers);
} catch (error) {
    res.status(500).json({message: "Internal server error"});
}
};

module.exports = {
  getSideBarUsers,
};