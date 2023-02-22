import {  v4 as uuid } from "uuid"

export class User {
  public id: string;
  public name: string | undefined;
  public email: string | undefined;

  constructor() {
    this.id = uuid();
  }
}