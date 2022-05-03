import { User } from '../model/User';

interface ICreateUserDTO {
  name: string;
  cell: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, cell, email }: ICreateUserDTO): void {
    const user = new User();
    Object.assign(user, {
      name,
      cell,
      email,
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByName(name: string): User {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  findByEmail(email: string): User {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  findByCell(cell: string): User {
    const user = this.users.find(user => user.cell === cell);

    return user;
  }
}

export { UsersRepository };
