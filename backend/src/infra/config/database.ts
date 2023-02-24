import env from "@infra/config/env"
import { DataSource } from "typeorm"

export const DataContext = new DataSource({
  type: "postgres",
  ...env.pgsql,
  entities: [],
})

export const connectDB = async () => {
  try {
    const dataSource = await DataContext.initialize()

    if (dataSource) {
      console.log("Connection sucessfully established")
      return dataSource
    }
  } catch (err: any) {
    console.log(err)
  }
}