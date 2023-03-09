import express from "express";
import routes from "./routes/events.routes.js";

const app = express();

const PORT = 3333;

app.use(express.json()); //sempre em cima das rotas
app.use(routes);

global.events = [];

global.bookings = [];

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
