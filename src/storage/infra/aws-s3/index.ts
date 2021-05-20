import S3 from 'aws-sdk/clients/s3';
import { Credentials } from 'aws-sdk';

const s3BucketName = process.env.S3_BUCKET as string;
const accessKeyId = process.env.AWS_ACCESS_KEY as string;
const secretAccessKey = process.env.AWS_SECRET_KEY as string;

enum S3_ACL {
  PUBLIC_READ = 'public-read',
}

const accessCredentials = new Credentials({
  accessKeyId,
  secretAccessKey,
});

const s3Client = new S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: process.env.S3_REGION,
  signatureVersion: 'v4',
});

export { s3Client, s3BucketName, S3_ACL };
