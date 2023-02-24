type UserDTOType = {
  id?: string
  name?: string
  email: string
  picture?: string
  token?: string
}

export class UserDTO {
  id?: string
  name?: string
  email: string
  picture?: string
  token?: string

  constructor({
    id,
    name,
    email,
    picture,
    token
  }: UserDTOType) {
    this.id = id
    this.name = name
    this.email = email
    this.picture = picture
    this.token = token
  }
}