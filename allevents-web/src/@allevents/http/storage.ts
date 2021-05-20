import axios from 'axios';
import Result from '@app/@allevents/core/Result';
import UnitResponse from '@app/@allevents/core/UnitResponse';

const baseURL = `http://192.168.43.159:5000/v1`;

type GetUploadLinkProps = {
  fileType: string;
};

type GetUploadLinkResponse = {
  uploadLink: string;
  downloadLink: string;
};

type DeleteFileProps = {
  downloadUrl: string;
};

export interface IStorageApi {
  getUploadLink(
    props: GetUploadLinkProps,
  ): Promise<Result<GetUploadLinkResponse>>;

  deleteFile(props: DeleteFileProps): Promise<Result<UnitResponse>>;
}

class StorageApi implements IStorageApi {
  httpClient: any;

  constructor() {
    this.httpClient = axios.create({
      baseURL: baseURL,
      headers: { Accept: 'application/json' },
    });

    this.httpClient.defaults.withCredentials = true;
  }

  async getUploadLink(
    props: GetUploadLinkProps,
  ): Promise<Result<GetUploadLinkResponse>> {
    try {
      const params = props;

      const response = await this.httpClient.get('/storage/upload-link', {
        params,
      });
      return Result.success<GetUploadLinkResponse>(response.data);
    } catch (e) {
      return Result.failed<GetUploadLinkResponse>(e);
    }
  }

  async deleteFile(props: DeleteFileProps): Promise<Result<UnitResponse>> {
    try {
      const params = props;

      const response = await this.httpClient.delete('/storage/file', {
        params,
      });
      return Result.success<UnitResponse>(response.data);
    } catch (e) {
      return Result.failed<UnitResponse>(e);
    }
  }
}

const storageApi = new StorageApi();

export default storageApi;
