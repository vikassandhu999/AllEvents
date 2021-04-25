import { Location } from '@app/domain/Location';
import { Venue } from 'venue/domain/Venue';

export class VenueMapper {
  public static toDomain(venueModel: any): Venue {
    const location = new Location({
      lat: venueModel.location.coordinates[0],
      lng: venueModel.location.coordinates[1],
    });
    return new Venue({
      venueId: venueModel.venue_id,
      venueName: venueModel.venue_name,
      media: venueModel.media,
      location: location,
      createdAt: venueModel.createdAt,
    });
  }

  public static toPersistence(venue: Venue): any {
    const location = {
      type: 'Point',
      coordinates: [venue.location.lat, venue.location.lng],
    };
    return {
      venue_id: venue.venueId,
      venue_name: venue.venueName,
      media: venue.media,
      location: location,
      created_at: venue.createdAt,
    };
  }
}
