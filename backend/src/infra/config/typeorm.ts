import "dotenv/config"
import "reflect-metadata"
import path from "node:path"
import { DataSource } from "typeorm"

import env from "@infra/config/env"
import { AppError } from "@app/middlewares/error"

const IS_NOT_PROD = process.env.NODE_ENV !== "production"

export const dataSource = new DataSource({
  type: "postgres",
  ...env.pgsql,
  entities: [path.resolve(__dirname, "..", "database", "typeorm", "models", "**", "*.js")],
  migrations: [path.resolve(__dirname, "..", "database", "typeorm", "migrations", "**", "*.js")],
  synchronize: IS_NOT_PROD,
  logging: IS_NOT_PROD,
  migrationsRun: IS_NOT_PROD,
  maxQueryExecutionTime: 3000,
})

export const connectDB = async () => {
  try {
    const connector = await dataSource.initialize()

    if (connector) {
      console.log("Connection database sucessfully established")
      return connector
    }
  } catch (err: any) {
    throw new AppError(err.message, 500)
  }
}

connectDB()