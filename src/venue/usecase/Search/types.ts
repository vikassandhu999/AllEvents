import { Venue } from '../../domain/Venue';

export type VenueSearchDTO = {
  query: string;
};

export class VenueSearchResponse {
  status: string = 'success';
  data: Array<Venue>;
  constructor(data: Array<Venue>) {
    this.data = data;
  }
}
