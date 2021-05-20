import GetUploadLinkUseCase from 'storage/usecase/GetUploadLink/usecase';
import { s3Client } from 'storage/infra/aws-s3';

const getUploadLinkUseCase = new GetUploadLinkUseCase(s3Client);

export default getUploadLinkUseCase;
