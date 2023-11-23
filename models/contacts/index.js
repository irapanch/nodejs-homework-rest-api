// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");

// const contactspath = path.join(__dirname, "contacts.json");

// const updateContacts = async (contacts) =>
//   await fs.writeFile(contactspath, JSON.stringify(contacts, null, 2));

// const listContacts = async () => {
//   const data = await fs.readFile(contactspath);
//   return JSON.parse(data);
// };

// const getById = async (id) => {
//   const contacts = await listContacts();
//   const result = contacts.find((item) => item.id === id);
//   return result || null;
// };

// const add = async (data) => {
//   const contacts = await listContacts();
//   const newContacts = {
//     id: nanoid(),
//     ...data,
//   };
//   contacts.push(newContacts);
//   await updateContacts(contacts);
//   return newContacts;
// };

// const updateById = async (id, body) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { id, ...body };
//   await updateContacts(contacts);
//   return contacts[index];
// };

// const removeById = async (id) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await updateContacts(contacts);
//   return result;
// };

// module.exports = {
//   listContacts,
//   getById,
//   add,
//   updateById,
//   removeById,
// };
