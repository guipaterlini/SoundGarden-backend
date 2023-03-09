import { Router } from "express";
import {
  createBooking,
  deleteBookingById,
  findAllBookings,
  findAllBookingsByEventId,
  findOneBookingsById,
} from "../controllers/bookings/bookings.controllers";

const routes = Router();

routes.post("/bookings", createBooking);
routes.get("/bookings", findAllBookings);
routes.get("/bookings/:_id", findOneBookingsById);
routes.get("/bookings/event/:_id", findAllBookingsByEventId);
routes.delete("/bookings/:_id", deleteBookingById);

export default routes;
