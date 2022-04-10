const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const pillRouter = require("./routes/pill");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/pill", pillRouter);

app.get("/", (req, res) => {
  res.send("BirthC™️");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
