import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  findAllEvents,
  findOneEventById,
  updateEvent,
} from "../controllers/events/events.controller.js";

const routes = Router();

routes.post("/events", createEvent);
routes.get("/events", findAllEvents);
routes.get("/events/:_id", findOneEventById);
routes.put("/events/:_id", updateEvent);
routes.delete("/events/:_id", deleteEvent);

export default routes;
