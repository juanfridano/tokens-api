import { AppDataSource } from "./persistence/data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { router } from "./api/routes";

dotenv.config();

const app = express();
app.use(express.json());
const { PORT } = process.env;
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "up" });
});
app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Page not found" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server up on http://localhost:" + PORT);
    });
    console.log("Data Source up!");
  })
  .catch((error: string) => console.log(error));

