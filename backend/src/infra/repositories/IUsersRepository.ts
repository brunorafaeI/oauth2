import { User } from "@infra/models/User";

export interface IUsersRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(): Promise<User>;
  setUser(user: User): Promise<void>;
}
