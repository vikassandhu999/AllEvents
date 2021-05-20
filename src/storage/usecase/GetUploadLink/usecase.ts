import {
  GetUploadLinkDTO,
  GetUploadLinkResponse,
} from 'storage/usecase/GetUploadLink/types';
import { UseCase } from '@app/core/Usecase';
import { v4 as uuid } from 'uuid';
import { AssertContext } from '@app/core/AssertContext';
import S3 from 'aws-sdk/clients/s3';
import { UserContext } from 'user/domain/UserContext';
import { S3_ACL } from 'storage/infra/aws-s3';

const SIGNED_URL_EXPIRES_IN = 60 * 10;

export default class GetUploadLinkUseCase extends UseCase<
  GetUploadLinkDTO,
  GetUploadLinkResponse
> {
  protected inputConstraints: any;
  protected s3Client: S3;

  constructor(s3Client: S3) {
    super();
    this.s3Client = s3Client;
  }

  protected async runImpl(
    params: GetUploadLinkDTO,
    context: UserContext,
  ): Promise<GetUploadLinkResponse> {
    AssertContext(context, { isAuthenticated: true });

    const fileId = uuid();

    const options = {
      Bucket: process.env.S3_BUCKET as string,
      Key: fileId,
      ContentType: params.fileType,
      Expires: SIGNED_URL_EXPIRES_IN,
    };

    const url = await this.s3Client.getSignedUrlPromise('putObject', options);

    return new GetUploadLinkResponse(url, '');
  }
}
