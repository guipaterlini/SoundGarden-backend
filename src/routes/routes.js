import { Router } from "express";

const routes = Router();

routes.get("/events", (req, res) => {
  return res.status(200).json({ eventos: global.eventos });
});

export default routes;
