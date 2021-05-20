require('dotenv').config();
import getUploadLinkUseCase from 'storage/usecase/GetUploadLink/index';

describe('getUploadLink', () => {
  test('should get the link successfully', async () => {
    try {
      const response = await getUploadLinkUseCase.run(
        { fileType: 'image/jpeg' },
        { isAuthenticated: true },
      );
      console.log({ response });
      expect(response).not.toBe(null);
    } catch (e) {
      console.log({ e });
      fail('failed the tests');
    }
  });
});
