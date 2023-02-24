import {  v4 as uuid } from "uuid"

export class UserEntity {
  public id?: string
  public name?: string
  public email: string
  public picture?: string
  public token?: string

  constructor() {
    this.id = uuid()
  }
}