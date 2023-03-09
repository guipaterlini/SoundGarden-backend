import { Router } from "express";
import {
  createEvent,
  deleteEventById,
  findAllEvents,
  findOneEventById,
  updateEventByID,
} from "../controllers/events/events.controller.js";
import {
  createBooking,
  deleteBookingById,
  findAllBookings,
  findAllBookingsByEventId,
  findOneBookingsById,
} from "../controllers/bookings/bookings.controllers.js";

const routes = Router();

// EVENTS ROUTES
routes.post("/events", createEvent);
routes.get("/events", findAllEvents);
routes.get("/events/:_id", findOneEventById);
routes.put("/events/:_id", updateEventByID);
routes.delete("/events/:_id", deleteEventById);

// BOOKINGS ROUTES
routes.post("/bookings", createBooking);
routes.get("/bookings", findAllBookings);
routes.get("/bookings/:_id", findOneBookingsById);
routes.get("/bookings/event/:_id", findAllBookingsByEventId);
routes.delete("/bookings/:_id", deleteBookingById);

export default routes;
