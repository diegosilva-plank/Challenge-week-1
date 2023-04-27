import "reflect-metadata";
import "dotenv/config";
import * as Sentry from "@sentry/node";
import express from "express";
import { router } from "./src/routes";
import { errors } from "celebrate";
import { AppDataSource } from "./src/database";

const app = express();
const PORT = 3333;

Sentry.init({
  dsn: "https://02afaa85ede049c38097f23c0023fff4@o4505081419661312.ingest.sentry.io/4505081421824000",
});

initializeDatabase()
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  })
  .then(initializeApp);

function initializeApp() {
  app.use(Sentry.Handlers.requestHandler());

  app.use(express.json());
  app.use(router);

  app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  app.use(Sentry.Handlers.errorHandler());
  app.use(errors());

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
}

async function initializeDatabase() {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!");
}