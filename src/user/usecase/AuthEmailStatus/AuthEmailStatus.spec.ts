import dotenv from 'dotenv';
import authEmailStatusUseCase from 'user/usecase/AuthEmailStatus/index';
import { mongooseConnection } from '@app/infra/db/mongoose/connection';
import { EMAIL_STATUS } from 'user/usecase/AuthEmailStatus/types';

dotenv.config();

const fakeDTO0 = {
  email: 'kai100@gmail.com',
};

const fakeDTO1 = {
  email: 'kaizejasdfkjas@gmail.com',
};

describe('AuthEmailStatus', () => {
  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL_DEV as string;
    await mongooseConnection(mongoUrl);
  });

  it('should return status does_not_exist', async function () {
    try {
      const response = await authEmailStatusUseCase.run(fakeDTO0, {});
      expect(response.emailStatus).toEqual(EMAIL_STATUS.DOES_NOT_EXIST);
    } catch (e) {
      console.log(e);
      fail('Test failed');
    }
  });

  it('should return status exist_not_verified', async function () {
    try {
      const response = await authEmailStatusUseCase.run(fakeDTO1, {});
      expect(response.emailStatus).toEqual(EMAIL_STATUS.EXISTS_NOT_VERIFIED);
    } catch (e) {
      console.log(e);
      fail('Test failed');
    }
  });
});
