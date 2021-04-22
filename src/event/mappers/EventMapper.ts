import Event from "event/domain/Event";

export default class EventMapper {
	public static toDomain(model : any) {
		return new Event({
		eventId: model.event_id,
		organizerId: model.organizer_id,
		eventName: model.event_name,
		poster: model.poster,
		venue: model.venue,
		ticketPrice: model.ticket_price,
		maxAllowedTickets: model.max_allowed_tickets,
		description: model.description,
		eventTime: model.event_time,
		duration: model.duration,
		createdAt: model.created_at,
		category: model.category,

})	}

	public static toPersistence(domainModel : Event) {
		return {
		event_id: domainModel.eventId,
		organizer_id: domainModel.organizerId,
		event_name: domainModel.eventName,
		poster: domainModel.poster,
		venue: domainModel.venue,
		ticket_price: domainModel.ticketPrice,
		max_allowed_tickets: domainModel.maxAllowedTickets,
		description: domainModel.description,
		event_time: domainModel.eventTime,
		duration: domainModel.duration,
		created_at: domainModel.createdAt,
		category: domainModel.category,

}	}

}
