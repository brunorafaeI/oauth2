import { uuid } from "uuidv4";

export class User {
  public id: string;
  public name: string;
  public email: string;
  public photo: string;
  public accessToken: string;
  public idToken: string;
  public createdAt: Date;
  public status: number;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    
    if (!id) {
      this.id = uuid();
    }
  }
}