import { User } from '../../core/user.entity';

export interface IUserRepository {
  create(name: string): Promise<User>;
}
