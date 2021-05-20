import { s3Client } from 'storage/infra/aws-s3';
import DeleteFileUseCase from 'storage/usecase/DeleteFile/usecase';

const deleteFileUseCase = new DeleteFileUseCase(s3Client);

export default deleteFileUseCase;
