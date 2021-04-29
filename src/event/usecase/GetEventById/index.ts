import GetEventUseCase from 'event/usecase/GetEventById/usecase';
import { eventRepository } from 'event/repositories';

const getEventByIdUseCase = new GetEventUseCase(eventRepository);

export default getEventByIdUseCase;
