import { randomUUID } from "node:crypto";

export const createBooking = (req, res) => {
  const { owner_name, owner_email, number_tickets, event_id } = req.body;

  const bookings = global.bookings;

  const booking = {
    owner_name,
    owner_email,
    number_tickets,
    event_id,
    _id: randomUUID(),
  };

  bookings.push(booking);

  return res.status(201).json({ bookings });
};

export const findAllBookings = (req, res) => {
  const bookings = global.bookings;

  return res.status(200).json({ bookings });
};

export const findOneBookingsById = (req, res) => {
  const { _id } = req.params;

  const bookings = global.bookings;

  const booking = bookings.find((booking) => booking._id === _id);

  if (!booking) {
    return res.status(404).json({ message: "BOOKING NOT FOUND" });
  }

  return res.status(200).json({ booking });
};

export const findAllBookingsByEventId = (req, res) => {
  const { _id } = req.params;

  const bookings = global.bookings;

  const bookingsEvent = bookings.filter(
    (bookingsEvent) => bookingsEvent.event_id === _id
  );

  if (!bookingsEvent) {
    return res.status(404).json({ message: "BOOKINGS NOT FOUND" });
  }

  return res.status(200).json({ bookingsEvent });
};

export const deleteBookingById = (req, res) => {
  const { _id } = req.params;

  const bookings = global.bookings;

  const indexOfBooking = bookings.findIndex((booking) => booking._id === _id);
  bookings.splice(indexOfBooking, 1);

  return res.status(204).send();
};
