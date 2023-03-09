import express from "express";
import { randomUUID } from "node:crypto";
import routes from "./routes/events.routes.js";

const app = express();

const PORT = 3333;

app.use(express.json()); //sempre em cima das rotas
app.use(routes);

global.events = [];

global.bookings = [];

// INSERT BOOKING
app.post("/bookings", (req, res) => {
  const { owner_name, owner_email, number_tickets, event_id } = req.body;

  const booking = {
    owner_name,
    owner_email,
    number_tickets,
    event_id,
    _id: randomUUID(),
  };

  bookings.push(booking);

  return res.status(201).json({ bookings });
});

// FIND ALL BOOKINGS
app.get("/bookings", (req, res) => {
  return res.status(200).json({ bookings });
});

// FIND ONE BOOKING
app.get("/bookings/:_id", (req, res) => {
  const { _id } = req.params;

  const booking = bookings.find((booking) => booking._id === _id);

  if (!booking) {
    return res.status(404).json({ message: "BOOKING NOT FOUND" });
  }

  return res.status(200).json({ booking });
});

// FIND ALL BOOKINGS BY EVENT
app.get("/bookings/event/:_id", (req, res) => {
  const { _id } = req.params;

  const bookingsEvent = bookings.filter(
    (bookingsEvent) => bookingsEvent.event_id === _id
  );

  if (!bookingsEvent) {
    return res.status(404).json({ message: "BOOKINGS NOT FOUND" });
  }

  return res.status(200).json({ bookingsEvent });
});

// DELETE BOOKING
app.delete("/bookings/:_id", (req, res) => {
  const { _id } = req.params;

  const indexOfBooking = bookings.findIndex((booking) => booking._id === _id);
  bookings.splice(indexOfBooking, 1);

  return res.status(204).send();
});

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
