import { Venue } from '../../domain/Venue';

export type GetWithinDistanceDTO = {
  maxDistance: number;
  lat: number;
  lng: number;
};

export class GetWithinDistanceResponse {
  status: string = 'success';
  data: Array<Venue>;
  constructor(data: Array<Venue>) {
    this.data = data;
  }
}
