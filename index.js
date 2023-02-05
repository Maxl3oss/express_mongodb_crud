const dotenv = require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
// route
const animeRoute = require("./routes/anime.route");
// set up dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// mongodb
mongoose.set('strictQuery', false);
mongoose
  .connect(dotenv.parsed.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// path
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/anime", animeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
