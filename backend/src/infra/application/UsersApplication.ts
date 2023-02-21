import { User } from "@infra/models/User";
import { IUsersApplication } from "./contracts/IUsersApplication";
import { TokenPayload } from "google-auth-library";

export class UsersApplication implements IUsersApplication {
  getAllUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  getUserById(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async getUserByEmail(): Promise<User> {
    return new User();
  }
  async setUser(userPayload: TokenPayload): Promise<User> {
    const user = new User();
    user.name = userPayload.name;
    user.email = userPayload.email;
    return user;
  }
}