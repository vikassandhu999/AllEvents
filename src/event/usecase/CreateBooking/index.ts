import CreateBookingUseCase from 'event/usecase/CreateBooking/usecase';
import { bookingRepository, eventRepository } from 'event/repositories';
import { userRepository } from 'user/repositories';

const createBookingUseCase = new CreateBookingUseCase(
  userRepository,
  eventRepository,
  bookingRepository,
);

export default createBookingUseCase;
