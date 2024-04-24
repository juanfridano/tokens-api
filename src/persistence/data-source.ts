import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { Token } from "./models/Token";

dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_DATABASE,
  NODE_ENV,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT || "5432"),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_DATABASE,

  synchronize: NODE_ENV === "dev" ? false : false,
  logging: NODE_ENV === "dev" ? false : false,
  entities: [Token],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});
