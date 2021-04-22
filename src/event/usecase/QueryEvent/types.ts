import {Location} from "@app/domain/Location";
import Event from "event/domain/Event";

export interface QueryEventsDTO {
    location ?: Location;
    locationTextQuery ?: string;
    query ?: string;
    category ?: string;
}

export class QueryEventsResponse {
    status : string = "success";
    data : Event[];
    constructor(data : Event[]) {
        this.data=data;
    }
}