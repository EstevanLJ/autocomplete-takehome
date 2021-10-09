import express, { Application } from "express";
import cors from "cors";
import countryController from "./controllers/countryController";

const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ['GET']
  })
);

countryController(app);

export default app;
