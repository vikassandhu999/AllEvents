import {
  DeleteFileDTO,
  DeleteFileResponse,
  InvalidDownloadUrlError,
} from 'storage/usecase/DeleteFile/types';
import { UseCase } from '@app/core/Usecase';
import { v4 as uuid } from 'uuid';
import { AssertContext } from '@app/core/AssertContext';
import S3 from 'aws-sdk/clients/s3';
import { UserContext } from 'user/domain/UserContext';

const SIGNED_URL_EXPIRES_IN = 60 * 10;

export default class DeleteFileUseCase extends UseCase<
  DeleteFileDTO,
  DeleteFileResponse
> {
  protected inputConstraints = {
    downloadUrl: {
      presence: true,
    },
  };
  protected s3Client: S3;

  constructor(s3Client: S3) {
    super();
    this.s3Client = s3Client;
  }

  private async deleteFileByKey(keyId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const options = {
        Bucket: process.env.S3_BUCKET as string,
        Key: keyId,
      };

      this.s3Client.deleteObject(options, (err) => {
        if (err) reject(err);
        resolve('');
      });
    });
  }

  protected async runImpl(
    params: DeleteFileDTO,
    context: UserContext,
  ): Promise<DeleteFileResponse> {
    AssertContext(context, { isAuthenticated: true });
    //https://allevents-production.s3.ap-south-1.amazonaws.com/47f1f7ff-3366-4b08-8a2c-f05c2949cbca
    let keyId;
    try {
      const parts = params.downloadUrl.split('/');
      keyId = parts[parts.length - 1];
    } catch (e) {
      throw new InvalidDownloadUrlError();
    }

    await this.deleteFileByKey(keyId);

    return new DeleteFileResponse();
  }
}
