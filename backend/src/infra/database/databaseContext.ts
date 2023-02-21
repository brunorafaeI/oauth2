import { DataSource } from "typeorm";
import { DatabaseMessage } from "@core/common/util/messages/database.util";

export const DataContext = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
});

DataContext.initialize()
  .then(() => {
    console.log("Connection successfully established");
  })
  .catch(ex => {
    console.log(`${DatabaseMessage.message01EX01(ex)}`);
  });
