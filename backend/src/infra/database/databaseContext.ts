import { DataSource } from "typeorm"
import { DatabaseMessage } from "@core/common/util/messages/database.util"
import env from '../../config/env'

export const DataContext = new DataSource({
  type: "postgres",
  ...env.pgsql,
  entities: [],
})

export const getManager = async () => {
  try {
    const connectDB = await DataContext.initialize()

    if (connectDB) {
      console.log("Connection sucessfully established")
      return connectDB
    }
  } catch (err) {
    console.log(`${DatabaseMessage.message01EX01(err)}`)
  }
}