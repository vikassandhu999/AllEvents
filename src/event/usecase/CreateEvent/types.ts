import {BaseError} from "@app/core/BaseError";
import {HttpErrors} from "@app/infra/http/errorCode";

export type CreateEventDTO = {
    eventName : string;
    poster : string;
    venueId : string;
    ticketPrice : number;
    ticketPriceCurrency : string;
    maxAllowedTickets : number;
    description : string;
    language : string;
    category : string;
    eventTime : Date;
    duration : number;
}

export class CreateEventResponse {
    status : string = "success";
}

export class VenueDoesNotExist extends BaseError {
    constructor() {
        super("Venue doesn't exist" ,HttpErrors.NOT_FOUND ,{venue : "venue id doesn't exist"});
    }
}