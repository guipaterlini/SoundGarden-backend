import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.listen(3333, () => console.log("server running in localhost:3333"));
