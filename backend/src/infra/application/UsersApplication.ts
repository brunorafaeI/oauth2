import { User } from "@infra/models/User";
import { IUsersApplication } from "./contracts/IUsersApplication";
import { UserGoogleDTO } from "@infra/dtos/UserGoogleDTO/UserGoogleDTO";

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

  async setUser(userDto: UserGoogleDTO): Promise<User> {
    const user = new User();
    user.name = userDto.name;
    user.email = userDto.email;
    return user;
  }
}
