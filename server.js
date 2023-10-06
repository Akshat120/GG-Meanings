import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    ServerIsOn: true,
  });
});

app.listen(3000, () => {
  console.log("Server is running @ http://localhost:3000");
});
