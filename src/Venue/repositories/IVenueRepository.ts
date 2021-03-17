import {Venue} from "../domain/Venue";
import {Location} from "../../XShared/domain/Location";

export interface IVenueRepository {
    getById(venueId : string): Promise<Venue | null>
    getWithDistance(location: Location, maxDistance: number): Promise<Array<Venue>>
    save(venue:Venue): Promise<void>
    deleteAll(): Promise<void>
}