import { IVenueRepository } from '../IVenueRepository';
import { Venue } from '../../domain/Venue';
import { VenueModel } from '../../infra/db/mongoose/VenueModel';
import { VenueMapper } from '../../mapper/VenueMapper';
import { Location } from '@app/domain/Location';

export class MongooseVenueRepository implements IVenueRepository {
  private readonly model = VenueModel;

  async search(query: string): Promise<Venue[]> {
    const aggregatedQuery = MongooseVenueRepository.createFTSQuery(query);
    const result = await VenueModel.aggregate(aggregatedQuery).exec();
    if (!result) return [];
    return result.map((venueDoc: any) => VenueMapper.toDomain(venueDoc));
  }

  async getById(venueId: string): Promise<Venue | null> {
    const venueDoc = await this.model.findOne({ venue_id: venueId }).exec();
    if (!venueDoc) return null;
    return VenueMapper.toDomain(venueDoc);
  }

  async getWithDistance(
    location: Location,
    maxDistance: number,
  ): Promise<Array<Venue>> {
    const query = MongooseVenueRepository.createLocationQuery(
      location,
      maxDistance,
    );
    const result = await this.model.find(query).exec();
    if (!result) return [];
    return result.map((venueDoc) => VenueMapper.toDomain(venueDoc));
  }

  async save(venue: Venue): Promise<void> {
    const venueDoc = VenueMapper.toPersistence(venue);
    const newVenue = new this.model(venueDoc);
    await newVenue.save();
  }

  async deleteAll(): Promise<void> {
    return this.model.deleteMany();
  }

  private static createFTSQuery(query: string): any {
    return [
      {
        $search: {
          index: 'venue_fts_index',
          autocomplete: {
            query: query,
            path: 'venue_name',
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $project: {
          venue_id: 1,
          venue_name: 1,
          location: 1,
          media: 1,
          created_at: 1,
        },
      },
    ];
  }

  private static createLocationQuery(
    location: Location,
    maxDistance: number,
  ): any {
    const METERS_PER_MILE = 1609.34;
    return {
      location: {
        $near: {
          $maxDistance: maxDistance * METERS_PER_MILE,
          $geometry: {
            type: 'Point',
            coordinates: [location.lat, location.lng],
          },
        },
      },
    };
  }
}
