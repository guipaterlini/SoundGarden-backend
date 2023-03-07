import express from "express";
import { randomUUID } from "node:crypto";

const app = express();

const PORT = 3333;

app.use(express.json()); //sempre em cima das rotas

var eventos = [];

// INSERT EVENT
app.post("/events", (req, res) => {
  const { name, poster, attractions, description, scheduled, number_tickets } =
    req.body;

  const evento = {
    _id: randomUUID(),
    name,
    poster,
    attractions,
    description,
    scheduled,
    number_tickets,
  };

  eventos.push(evento);

  return res.status(201).json({ eventos });
});

// FIND ALL EVENTS
app.get("/events", (req, res) => {
  return res.status(200).json({ eventos });
});

// FIND ONE EVENT
app.get("/events/:_id", (req, res) => {
  const { _id } = req.params;

  const evento = eventos.find((evento) => evento._id === _id);

  return res.status(200).json({ evento });
});

// UPDATE EVENT
app.put("/events/:_id", (req, res) => {
  return res.status(202).json({ message: "sucess" });
});

// DELETE EVENT
app.delete("/events/:_id", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
