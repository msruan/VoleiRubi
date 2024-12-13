export class User {
  private id: string | number;
  private name: string;
  private email: string;
  private avatar: string | null;
  private password: string;

  constructor(
    id: string | number,
    name: string,
    email: string,
    avatar: string | null,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    this.password = password;
  }
}
