import { UserGoogleDTO } from "@infra/dtos/UserGoogleDTO/UserGoogleDTO";
import { User } from "@infra/models/User";

export interface IUsersApplication {
  getAllUsers(): Promise<User[]>;
  getUserById(): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  setUser(userDto: UserGoogleDTO): Promise<User>;
}
