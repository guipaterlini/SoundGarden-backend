import express from "express";

const app = express();

const PORT = 3333;

var eventos = [];

app.post("/", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.get("/:id", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.put("/:id", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.delete("/:id", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
