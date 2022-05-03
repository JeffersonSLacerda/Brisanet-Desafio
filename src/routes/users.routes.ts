import { Router } from 'express';

import { UsersRepository } from '../modules/users/repositories/UsersRepository';
import { CreateUserService } from '../modules/users/services/CreateUserService';

const usersRoutes = Router();
const userRepository = new UsersRepository();

usersRoutes.post('/', (request, response) => {
  const { name, cell, email } = request.body;

  const createUserService = new CreateUserService(UsersRepository);

  const user = createUserService.execute({ name, cell, email });

  return response.status(201).json(user);
});

usersRoutes.get('/', (request, response) => {
  const users = userRepository.list();
  return response.status(200).json(users);
});

export { usersRoutes };
