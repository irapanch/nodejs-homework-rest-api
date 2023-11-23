const { Contact } = require("../../models/contacts/contact");

const listContacts = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

module.exports = listContacts;

// const contacts = require("../../models/contacts");

// const listContacts = async (req, res) => {
//   const result = await contacts.listContacts();
//   res.status(200).json(result);
// };

// module.exports = listContacts;
