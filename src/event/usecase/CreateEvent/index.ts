import CreateEventUseCase from 'event/usecase/CreateEvent/usecase';
import { userRepository } from 'user/repositories';
import { eventRepository } from 'event/repositories';
import { venueRepository } from 'venue/repositories';

const createEventUseCase = new CreateEventUseCase(
  userRepository,
  eventRepository,
  venueRepository,
);

export default createEventUseCase;
