import {v4 as uuid} from "uuid";

export type EventDTO = {
    eventId: string;
    organizerId: string;
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
    eventType: string;
    duration: string;
    eventPoster: string;
    ageGroup: string;
    ticketPrice: number;
    ticketPriceCurrency: string;
    venue : string;
    numberOfTickets:string;
    numberOfBookedTickets:string;
    performer:string;
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
    duration: string;
    eventPoster: string;
    ageGroup: string;
    ticketPrice: number;
    ticketPriceCurrency: string;
    venue: string;
    numberOfTickets:string;
    numberOfBookedTickets:string;
    performer:string;
    isCancelled?: boolean;
    createdAt?: Date;
}

export class Event {
    state : EventDTO;

    constructor(props: EventProps) {
        this.state = {
            ...props,
            eventId : props.eventId??uuid(),
            isCancelled: props.isCancelled??false,
            createdAt: props.createdAt?? new Date()
        }
    }

    get eventId():string {
        return this.state.eventId;
    }

    get organizerId():string {
        return this.state.organizerId;
    }

    get eventName():string {
        return this.state.eventName;
    }

    get eventDescription():string {
        return this.state.eventDescription;
    }

    get eventDate():string {
        return this.state.eventDate;
    }

    get eventTime():string {
        return this.state.eventTime;
    }

    get eventType():string {
        return this.state.eventType;
    }

    get duration():string {
        return this.state.duration;
    }

    get eventPoster():string {
        return this.state.eventPoster;
    }

    get ageGroup():string {
        return this.state.ageGroup;
    }

    get ticketPrice():number {
        return this.state.ticketPrice;
    }

    get ticketPriceCurrency():string {
        return this.state.ticketPriceCurrency;
    }

    get venue():string {
        return this.state.venue;
    }

    get numberOfTickets():string {
        return this.state.numberOfTickets;
    }

    get numberOfBookedTickets():string {
        return this.state.numberOfBookedTickets;
    }

    get performer():string {
        return this.state.performer;
    }

    get isCancelled():boolean {
        return this.state.isCancelled;
    }

    get createdAt():Date {
        return this.state.createdAt;
    }

    toDTO(): EventDTO {
        return this.state;
    }
}