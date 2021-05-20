import axios from 'axios';
import Result from '@app/@allevents/core/Result';
import { VenueSearchProps } from '@app/venue/http/types';

const baseURL = `http://192.168.43.159:5000/v1`;

export interface IVenueApi {
  search(props: VenueSearchProps): Promise<Result<any[]>>;
}

class VenueApi implements IVenueApi {
  httpClient: any;

  constructor() {
    this.httpClient = axios.create({
      baseURL: baseURL,
      headers: { Accept: 'application/json' },
    });

    this.httpClient.defaults.withCredentials = true;
  }

  async search(props: VenueSearchProps): Promise<Result<any>> {
    try {
      const response = await this.httpClient.get('/venue/search', {
        params: props,
      });
      return Result.success<any>(response.data);
    } catch (e) {
      return Result.failed<any>(e);
    }
  }
}

const venueApi = new VenueApi();

export default venueApi;
