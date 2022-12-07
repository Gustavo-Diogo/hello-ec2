const express = require("express");

const app = new express();

app.use(express.json());

app.use("/thiago", (req, res) => {
  res.status(200).json({ message: "hello Thiago" });
});
app.use("/yury", (req, res) => {
  res.status(200).json({ message: "hello Yury" });
});

app.listen(3030, () => {
  console.log("🔥 Running on Port 3030! 🔥");
});
