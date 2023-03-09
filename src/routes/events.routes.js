import { Router } from "express";
import {
  createEvent,
  deleteEventById,
  findAllEvents,
  findOneEventById,
  updateEventByID,
} from "../controllers/events/events.controller.js";

const routes = Router();

routes.post("/events", createEvent);
routes.get("/events", findAllEvents);
routes.get("/events/:_id", findOneEventById);
routes.put("/events/:_id", updateEventByID);
routes.delete("/events/:_id", deleteEventById);

export default routes;
