const { Contact } = require("../../models/contact");

// const listContacts = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await Contact.find({ owner }).populate("owner", "email");
//   res.json(result);
// };

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;

  // pagination vs. quiry filter!!!
  const { page = 1, limit = 20, ...query } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(
    { owner, ...query },
    "-createdAt -updatedAt",
    { skip, limit }
  ).populate("owner", "name email");

  res.json(result);
};

module.exports = listContacts;
