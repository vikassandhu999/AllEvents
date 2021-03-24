import {Performer} from "../domain/Performer";
import {Event} from "../domain/Event";

export class EventMapper {
    public static toDomain(eventModel: any): Event {
        return new Event({

        });
    }

    public static toPersistence(event: Event): any {
        return {

        }
    }