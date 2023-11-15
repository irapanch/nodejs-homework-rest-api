const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeById(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
