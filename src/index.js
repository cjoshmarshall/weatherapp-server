const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3006;
dotenv.config();

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/weather", require("./routes/weatherRoute"));

// app.listen(PORT, () => {
//   console.log(`Server Running at port ${PORT}`);
// });

module.exports = app;
