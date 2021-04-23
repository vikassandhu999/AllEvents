import {v4 as uuid} from "uuid";
import { Money } from "@app/domain/Money";
import { Venue } from "venue/domain/Venue";

export interface IEvent {
	eventId : string;
	organizerId : string;
	eventName : string;
	language : string;
	poster : string;
	venue : Venue;
	ticketPrice : Money;
	maxAllowedTickets : number;
	description : string;
	eventTime : Date;
	duration : number;
	createdAt : Date;
	category : string;

}

interface EventProps {
	eventId ?: string;
	organizerId : string;
	eventName : string;
	language : string;
	poster : string;
	venue : Venue;
	ticketPrice : Money;
	maxAllowedTickets : number;
	description : string;
	eventTime : Date;
	duration : number;
	createdAt ?: Date;
	category : string;

}

export default class Event {
	state : IEvent;
	constructor(props : EventProps) {
		this.state = {
			...props,
			eventId : props.eventId??uuid(),
			createdAt : props.createdAt??new Date(),
		};
	}


	set eventId(eventId:string) {
		this.state.eventId=eventId;
	}
	set organizerId(organizerId:string) {
		this.state.organizerId=organizerId;
	}
	set eventName(eventName:string) {
		this.state.eventName=eventName;
	}
	set language(language:string) {
		this.state.language=language;
	}
	set poster(poster:string) {
		this.state.poster=poster;
	}
	set venue(venue:Venue) {
		this.state.venue=venue;
	}
	set ticketPrice(ticketPrice:Money) {
		this.state.ticketPrice=ticketPrice;
	}
	set maxAllowedTickets(maxAllowedTickets:number) {
		this.state.maxAllowedTickets=maxAllowedTickets;
	}
	set description(description:string) {
		this.state.description=description;
	}
	set eventTime(eventTime:Date) {
		this.state.eventTime=eventTime;
	}
	set duration(duration:number) {
		this.state.duration=duration;
	}
	set createdAt(createdAt:Date) {
		this.state.createdAt=createdAt;
	}
	set category(category:string) {
		this.state.category=category;
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
	get language(): string {
		return this.state.language;
	}
	get poster(): string {
		return this.state.poster;
	}
	get venue(): Venue {
		return this.state.venue;
	}
	get ticketPrice(): Money {
		return this.state.ticketPrice;
	}
	get maxAllowedTickets(): number {
		return this.state.maxAllowedTickets;
	}
	get description(): string {
		return this.state.description;
	}
	get eventTime(): Date {
		return this.state.eventTime;
	}
	get duration(): number {
		return this.state.duration;
	}
	get createdAt(): Date {
		return this.state.createdAt;
	}
	get category(): string {
		return this.state.category;
	}

	toDTO() : IEvent {
		return this.state;
	}
}
