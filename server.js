const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
