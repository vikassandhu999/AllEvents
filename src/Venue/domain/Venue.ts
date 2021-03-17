import {v4 as uuid} from "uuid";
import {Location} from "../../XShared/domain/Location";

export interface IVenue {
    venueId : string;
    venueName : string;
    media : Array<string>;
    location: Location;
    createdAt: Date;
}

interface VenueProps {
    venueId ?: string;
    venueName : string;
    media : Array<string>;
    location: Location;
    createdAt?: Date;
}

export class Venue {
    state : IVenue;
    constructor(props : VenueProps) {
        this.state = {
            ...props,
            venueId: props.venueId ?? uuid(),
            createdAt: props.createdAt ?? new Date(),
        }
    }

    get venueId() : string {
        return this.state.venueId;
    }

    get venueName() : string {
        return this.state.venueName;
    }

    get media() : Array<string> {
        return this.state.media;
    }

    get location() : Location {
        return this.state.location;
    }

    get createdAt() : Date {
        return this.state.createdAt;
    }

    toDTO() : IVenue {
        return this.state;
    }
}