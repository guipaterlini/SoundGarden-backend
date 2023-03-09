import { randomUUID } from "node:crypto";

export const createEvent = (req, res) => {
  const { name, poster, attractions, description, scheduled, number_tickets } =
    req.body;

  const events = global.events;

  const event = {
    _id: randomUUID(),
    name,
    poster,
    attractions,
    description,
    scheduled,
    number_tickets,
  };

  events.push(event);

  return res.status(201).json({ events });
};

export const findAllEvents = (req, res) => {
  const events = global.events;

  return res.status(200).json({ events });
};

export const findOneEventById = (req, res) => {
  const { _id } = req.params;

  const events = global.events;

  const event = events.find((event) => event._id === _id);

  if (!event) {
    return res.status(404).json({ message: "EVENT NOT FOUND" });
  }

  return res.status(200).json({ event });
};

export const updateEventByID = (req, res) => {
  const { _id } = req.params;

  const { name, poster, attractions, description, scheduled, number_tickets } =
    req.body;

  const events = global.events;

  const event = events.find((event) => event._id === _id);

  event.name = name;
  event.poster = poster;
  event.attractions = attractions;
  event.description = description;
  event.scheduled = scheduled;
  event.number_tickets = number_tickets;

  return res.status(202).json({ event });
};

export const deleteEventById = (req, res) => {
  const { _id } = req.params;

  const events = global.events;

  const indexOfEvent = events.findIndex((event) => event._id === _id);
  events.splice(indexOfEvent, 1);

  return res.status(204).send();
};
