import { uuid } from "uuidv4";

export class User {
  public id: string;
  public name: string | undefined;
  public email: string | undefined;

  constructor() {
    this.id = uuid();
  }
}