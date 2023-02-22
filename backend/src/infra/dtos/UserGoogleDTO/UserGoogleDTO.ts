type UserGoogleType = {
  id?: string,
  name?: string,
  email: string
}

export class UserGoogleDTO {
  constructor({
    id,
    name,
    email
  }: UserGoogleType) { }

  get id(): string { return this.id }
  get name(): string { return this.name }
  get email(): string { return this.email }
}