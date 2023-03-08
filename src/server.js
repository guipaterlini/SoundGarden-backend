import express from "express";
import { randomUUID } from "node:crypto";

const app = express();

const PORT = 3333;

app.use(express.json()); //sempre em cima das rotas

var eventos = [];

var reservas = [];

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

  if (!evento) {
    return res.status(404).json({ message: "EVENT NOT FOUND" });
  }

  return res.status(200).json({ evento });
});

// UPDATE EVENT
app.put("/events/:_id", (req, res) => {
  const { _id } = req.params;

  const { name, poster, attractions, description, scheduled, number_tickets } =
    req.body;

  const evento = eventos.find((evento) => evento._id === _id);

  evento.name = name;
  evento.poster = poster;
  evento.attractions = attractions;
  evento.description = description;
  evento.scheduled = scheduled;
  evento.number_tickets = number_tickets;

  return res.status(202).json({ evento });
});

// DELETE EVENT
app.delete("/events/:_id", (req, res) => {
  const { _id } = req.params;

  const indexOfEvento = eventos.findIndex((evento) => evento._id === _id);
  eventos.splice(indexOfEvento, 1);

  return res.status(204).send();
});

// INSERT BOOKING
app.post("/bookings", (req, res) => {
  const { owner_name, owner_email, number_tickets, event_id } = req.body;

  const reserva = {
    owner_name,
    owner_email,
    number_tickets,
    event_id,
    _id: randomUUID(),
  };

  reservas.push(reserva);

  return res.status(201).json({ reservas });
});

// FIND ALL BOOKINGS
app.get("/bookings", (req, res) => {
  return res.status(200).json({ reservas });
});

// FIND ONE BOOKING
app.get("/bookings/:_id", (req, res) => {
  const { _id } = req.params;

  const reserva = reservas.find((reserva) => reserva._id === _id);

  if (!reserva) {
    return res.status(404).json({ message: "BOOKING NOT FOUND" });
  }

  return res.status(200).json({ reserva });
});

// FIND ALL BOOKINGS BY EVENT
app.get("/bookings/event/:_id", (req, res) => {
  const { _id } = req.params;

  const reservasEvento = reservas.filter(
    (reservasEvento) => reservasEvento.event_id === _id
  );

  if (!reservasEvento) {
    return res.status(404).json({ message: "BOOKINGS NOT FOUND" });
  }

  return res.status(200).json({ reservasEvento });
});

// DELETE BOOKING
app.delete("/bookings/:_id", (req, res) => {
  const { _id } = req.params;

  const indexOfReserva = reservas.findIndex((reserva) => reserva._id === _id);
  reservas.splice(indexOfReserva, 1);

  return res.status(204).send();
});

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
