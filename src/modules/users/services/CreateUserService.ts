import { UsersRepository } from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  cell: string;
}

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  execute({ name, email, cell }: IRequest): void {
    const userAlredyexistis = this.usersRepository.findByEmail(email);

    if (userAlredyexistis) {
      throw new Error('User alredy exists');
    }

    this.usersRepository.create({ name, cell, email });
  }
}

export { CreateUserService };
