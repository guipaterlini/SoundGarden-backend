import express from "express";

const app = express();

const PORT = 3333;

var eventos = [];

// INSERT EVENT
app.post("/events", (req, res) => {
  const { name, poster, attractions, description, scheduled, number_tickets } =
    req.body;

  eventos.push({
    name,
    poster,
    attractions,
    description,
    scheduled,
    number_tickets,
  });

  return res.status(201).json({ eventos });
});

// FIND ALL EVENTS
app.get("/events", (req, res) => {
  return res.status(200).json({ message: "sucess" });
});

// FIND ONE EVENT
app.get("/events/:_id", (req, res) => {
  return res.status(200).json({ message: "sucess" });
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
