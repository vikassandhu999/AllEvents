import {v4 as uuid} from "uuid";
import {Money} from "../../XShared/domain/Money";
import {AgeGroup} from "./AgeGroup";
import {Performer} from "./Performer";
import {Venue} from "../../Venue/domain/Venue";

export type EventDTO = {
    eventId: string;
    organizerId: string;
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
    eventType: string;
    duration: number;
    eventPoster: string;
    ageGroup: AgeGroup;
    ticketPrice: Money;
    venue: Venue;
    numberOfTickets: number;
    numberOfBookedTickets: number;
    performer: Performer;
    isCancelled: boolean;
    createdAt: Date;
}

interface EventProps {
    eventId?: string;
    organizerId: string;
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
    eventType: string;
    duration: number;
    eventPoster: string;
    ageGroup: AgeGroup;
    ticketPrice: Money;
    ticketPriceCurrency: string;
    venue: Venue;
    numberOfTickets: number;
    numberOfBookedTickets: number;
    performer: Performer;
    isCancelled?: boolean;
    createdAt?: Date;
}

export class Event {
    state: EventDTO;

    constructor(props: EventProps) {
        this.state = {
            ...props,
            eventId: props.eventId ?? uuid(),
            isCancelled: props.isCancelled ?? false,
            createdAt: props.createdAt ?? new Date()
        }
    }

    get eventId(): string {
        return this.state.eventId;
    }

    get organizerId(): string {
        return this.state.organizerId;
    }

    get eventName(): string {
        return this.state.eventName;
    }

    get eventDescription(): string {
        return this.state.eventDescription;
    }

    get eventDate(): string {
        return this.state.eventDate;
    }

    get eventTime(): string {
        return this.state.eventTime;
    }

    get eventType(): string {
        return this.state.eventType;
    }

    get duration(): number {
        return this.state.duration;
    }

    get eventPoster(): string {
        return this.state.eventPoster;
    }

    get ageGroup(): AgeGroup {
        return this.state.ageGroup;
    }

    get ticketPrice(): Money {
        return this.state.ticketPrice;
    }

    get venue(): Venue {
        return this.state.venue;
    }

    get numberOfTickets(): number {
        return this.state.numberOfTickets;
    }

    get numberOfBookedTickets(): number {
        return this.state.numberOfBookedTickets;
    }

    get performer(): Performer {
        return this.state.performer;
    }

    get isCancelled(): boolean {
        return this.state.isCancelled;
    }

    get createdAt(): Date {
        return this.state.createdAt;
    }

    toDTO(): EventDTO {
        return this.state;
    }
}