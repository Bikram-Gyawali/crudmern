const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", router);
const db = require("./config").MONGO_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server running on http://localhost:" + PORT);
});
