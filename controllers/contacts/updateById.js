const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const updateById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw RequestError(400, "missing fields");
  }
  const { id } = req.params;
  const result = await contacts.updateById(id, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = updateById;
