import { UseCase } from "@app/core/Usecase";
import { CreateEventDTO, CreateEventResponse, VenueDoesNotExist } from "event/usecase/CreateEvent/types";
import { UserContext } from "user/domain/UserContext";
import { AssertContext } from "@app/core/AssertContext";
import { IUserRepository } from "user/repositories/IUserRepository";
import IEventRepository from "event/repositories/IEventRepository";
import { IVenueRepository } from "venue/repositories/IVenueRepository";
import { Venue } from "venue/domain/Venue";
import { assert } from "@app/core/Assert";
import { Money } from "@app/domain/Money";
import Event from "event/domain/Event";

export default class CreateEventUseCase extends UseCase<CreateEventDTO, CreateEventResponse> {

    protected inputConstraints = {
        eventName: { presence: true },
        poster: { presence: true },
        venueId: { presence: true },
        ticketPrice: { presence: true },
        ticketPriceCurrency: { presence: true },
        maxAllowedTickets: { presence: true },
        description: { presence: true },
        eventTime: { presence: true },
        duration: { presence: true },
    }

    private userRepository: IUserRepository;
    private eventRepository: IEventRepository;
    private venueRepository: IVenueRepository;

    constructor(
        userRepository: IUserRepository,
        eventRepository: IEventRepository,
        venueRepository: IVenueRepository
    ) {
        super();
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
        this.venueRepository = venueRepository;
    }

    protected async runImpl(params: CreateEventDTO, context: UserContext): Promise<CreateEventResponse> {
        AssertContext(context, { isAuthenticated: true });

        const {
            venueId,
            eventName,
            ticketPrice,
            ticketPriceCurrency,
            category,
            poster,
            maxAllowedTickets,
            description,
            eventTime,
            duration,
            language
        } = params;

        const organizerId = context.userId;

        const venue: Venue | null = await this.venueRepository.getById(venueId);

        assert(!!venue, new VenueDoesNotExist());

        const ticketPriceObject = new Money({ currency: ticketPriceCurrency, value: ticketPrice });

        const event = new Event({
            venue, eventName,
            ticketPrice: ticketPriceObject,
            language,
            organizerId: organizerId, poster,
            category, maxAllowedTickets, description,
            eventTime, duration
        });

        await this.eventRepository.save(event);

        return new CreateEventResponse();
    }
}