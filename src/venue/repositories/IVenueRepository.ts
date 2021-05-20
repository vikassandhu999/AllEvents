import { Venue } from 'venue/domain/Venue';
import { Location } from '@app/domain/Location';

export interface IVenueRepository {
  search(query: string): Promise<Venue[]>;
  getById(venueId: string): Promise<Venue | null>;
  getWithDistance(
    location: Location,
    maxDistance: number,
  ): Promise<Array<Venue>>;
  save(venue: Venue): Promise<void>;
  deleteAll(): Promise<void>;
}
