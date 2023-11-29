const { User } = require("../../models/user");

const subscription = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  const { token, password, ...userData } = user._doc;
  res.json(userData);
};

module.exports = subscription;
