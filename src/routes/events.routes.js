import { Router } from "express";
import { findAllEvents } from "../controllers/events/events.controller.js";

const routes = Router();

routes.get("/events", findAllEvents);

export default routes;
