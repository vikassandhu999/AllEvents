import dotenv from 'dotenv';
import { CreateUserResponse, EmailAlreadyExistError } from './types';
import createUserUseCase from 'user/usecase/CreateUser/index';
import { mongooseConnection } from '@app/infra/db/mongoose/connection';
import { userRepository } from 'user/repositories';

dotenv.config();

const fakeUserDTO = {
  firstName: 'Vikas',
  lastName: 'Sandhu',
  imgAvatar:
    'https://miro.medium.com/fit/c/262/262/2*jqzCm0lwcJV7QGadqxS3hg.jpeg',
  email: 'kai100@gmail.com',
  password: 'chistagram',
};

describe('CreateUser', () => {
  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL_DEV as string;
    await mongooseConnection(mongoUrl);
  });

  it('should create user successfully', async function () {
    try {
      const response = await createUserUseCase.run(fakeUserDTO, {});
      expect(response).toEqual(new CreateUserResponse());
    } catch (e) {
      console.log(e);
      fail('Test failed');
    }
  });

  it('should return email already exists error', async function () {
    try {
      const response = await createUserUseCase.run(fakeUserDTO, {});
      fail('Test failed');
    } catch (e) {
      console.log(e);
      expect(e).toEqual(new EmailAlreadyExistError());
    }
  });

  afterAll(async () => {
    const user = await userRepository.getByEmail(fakeUserDTO.email);
    if (!!user) {
      await userRepository.deleteOne(user?.userId);
    }
  });
});
