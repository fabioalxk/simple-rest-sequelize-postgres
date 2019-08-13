const express = require("express");

const app = express();
app.use(express.json());

// Database
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

app.use("/api/items", require("./routes/api/items"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
