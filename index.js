const express = require("express");

const app = new express();

app.use(express.json());

app.use((req, res) => {
  res.status(200).json({ message: "hello Thiago" });
});

app.listen(3030, () => {
  console.log("🔥 Running on Port 3030! 🔥");
});
