import path from "node:path"
import { DataSource } from "typeorm"

import env from "@infra/config/env"
import { AppError } from "@infra/config/error"

export const DataContext = new DataSource({
  type: "postgres",
  ...env.pgsql,
  entities: [path.resolve(__dirname, "database","models", "**", "*.js")],
  migrations: [path.resolve(__dirname, "migration", "**", "*.js")]
})

export const connectDB = async () => {
  try {
    const dataSource = await DataContext.initialize()

    if (dataSource) {
      console.log("Connection database sucessfully established")
      return dataSource
    }
  } catch (err: any) {
    throw new AppError(err.message, 500)
  }
}

connectDB()