import {IVenueRepository} from "../IVenueRepository";
import {Venue} from "../../domain/Venue";
import {VenueModel} from "../../infra/db/mongoose/VenueModel";
import {VenueMapper} from "../../mapper/VenueMapper";
import {Location} from "../../../XShared/domain/Location";

export class MongooseVenueRepository implements IVenueRepository {
    private readonly model = VenueModel;

    async getById(venueId: string): Promise<Venue | null> {
        const venueDoc = await this.model.findOne({venue_id : venueId}).exec();
        if(!venueDoc) return null;
        return VenueMapper.toDomain(venueDoc);
    }

    async getWithDistance(location: Location, maxDistance: number): Promise<Array<Venue>> {
        const query = MongooseVenueRepository.createLocationQuery(location,maxDistance);
        const result = await this.model.find(query).exec();
        if(!result) return [];
        return result.map((venueDoc)=> VenueMapper.toDomain(venueDoc));
    }

    async save(venue: Venue): Promise<void> {
        const venueDoc = VenueMapper.toPersistence(venue);
        const newVenue = new this.model(venueDoc);
        await newVenue.save();
    }

    async deleteAll() : Promise<void> {
        await this.model.deleteMany();
    }

    private static createLocationQuery(location: Location, maxDistance: number) : any {
        const METERS_PER_MILE = 1609.34;
        return {
            location: {
                $near: {
                    $maxDistance: maxDistance * METERS_PER_MILE,
                    $geometry: {
                        type: "Point",
                        coordinates: [location.lat,location.lng]
                    }
                }
            }
        }
    }

}