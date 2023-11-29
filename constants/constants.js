const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const allowedSubscriptions = ["starter", "pro", "business"];

module.exports = {
  emailRegexp,
  allowedSubscriptions,
};
