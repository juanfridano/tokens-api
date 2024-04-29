import { AppDataSource } from "./persistence/data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { router } from "./api/routes";

dotenv.config();
/**
 * Set-up listener for api
 */
const app = express();
app.use(express.json());
// Heroku sets a random port.
const { PORT } = process.env;
app.use("/api", router);

/**
 * Health-check endpoint handler
 */
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "up" });
})
/**
 * Non-existing page handler (defaults to 404)
 */
app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Page not found" });
});

/**
 * Initializes connection to Database 
 * - Checks if migration is up-to-date
 * - Runs missing migration scripts, if any.
 * - If successful starts listening for rest-api
 */
AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server up on http://localhost:" + PORT);
    });
    console.log("Data Source up!");
  })
  .catch((error: string) => console.log(error));

