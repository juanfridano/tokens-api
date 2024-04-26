import { AppDataSource } from "./persistence/data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { router } from "./api/routes";

dotenv.config();

const app = express();
app.use(express.json());
const { API_PORT = 3000 } = process.env;
app.use("/api", router);

app.get("*", (req: Request, res: Response) => {
  res.status(400).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(API_PORT, () => {
      console.log("Server up on http://localhost:" + API_PORT);
    });
    console.log("Data Source up!");
  })
  .catch((error: string) => console.log(error));

