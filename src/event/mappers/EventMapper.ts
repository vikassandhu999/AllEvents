import Event from "event/domain/Event"
import MoneyMapper from '../../@app/mappers/MoneyMapper';
import { VenueMapper } from '../../venue/mapper/VenueMapper';

export default class EventMapper {
	public static toDomain(model: any) {

		const ticketPrice = MoneyMapper.toDomain(model.ticket_price);
		const venue = VenueMapper.toDomain(model.venue);

		return new Event({
			eventId: model.event_id,
			organizerId: model.organizer_id,
			eventName: model.event_name,
			language: model.language,
			poster: model.poster,
			venue: venue,
			ticketPrice: ticketPrice,
			maxAllowedTickets: model.max_allowed_tickets,
			description: model.description,
			eventTime: model.event_time,
			duration: model.duration,
			createdAt: model.created_at,
			category: model.category,
		})
	}

	public static toPersistence(domainModel: Event) {

		const ticket_price = MoneyMapper.toPersistence(domainModel.ticketPrice);
		const venue = VenueMapper.toPersistence(domainModel.venue);

		return {
			event_id: domainModel.eventId,
			organizer_id: domainModel.organizerId,
			event_name: domainModel.eventName,
			language: domainModel.language,
			poster: domainModel.poster,
			venue: venue,
			ticket_price: ticket_price,
			max_allowed_tickets: domainModel.maxAllowedTickets,
			description: domainModel.description,
			event_time: domainModel.eventTime,
			duration: domainModel.duration,
			created_at: domainModel.createdAt,
			category: domainModel.category,
		}
	}

}
