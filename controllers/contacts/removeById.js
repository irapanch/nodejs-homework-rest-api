const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
