import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  create(name: string): Promise<User> {
    return this.userRepository.create(name);
  }
}
