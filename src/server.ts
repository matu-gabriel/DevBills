import "dotenv/config";
import express, { json } from "express";
import { routes } from "./routes";
import { setupMongo } from "./database";

setupMongo().then(() => {
  const app = express();
  const port = process.env.PORT || 3334;
  app.use(json());
  app.use(routes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
