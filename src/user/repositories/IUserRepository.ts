import User from 'user/domain/User';

export interface IUserRepository {
  emailExists(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
  setAuthSecret(userId: string, authSecret: string): Promise<void>;
  setIsEmailVerified(userId: string, value: boolean): Promise<void>;
  getAuthSecret(userId: string): Promise<string | null>;
  getByEmail(email: string): Promise<User | null>;
  getById(userId: string): Promise<User | null>;
  deleteOne(userId: string): Promise<void>;
  deleteAll(): Promise<void>;
}
