import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { Token } from "./models/Token";

dotenv.config();

const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV
} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST ? DB_HOST : "localhost",
    port: parseInt(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Token],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
    ssl: NODE_ENV === "dev" ? false : {rejectUnauthorized: false} 
  })
