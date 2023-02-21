import { User } from "@infra/models/User";
import { TokenPayload } from "google-auth-library";

export interface IUsersApplication {
  getAllUsers(): Promise<User[]>;
  getUserById(): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  setUser(userPayload: TokenPayload): Promise<User>;
}
