import { UseCase } from '@app/core/Usecase';
import { UserContext } from 'user/domain/UserContext';
import { AssertContext } from '@app/core/AssertContext';
import { IUserRepository } from 'user/repositories/IUserRepository';
import IEventRepository from 'event/repositories/IEventRepository';
import { assert } from '@app/core/Assert';
import Event from 'event/domain/Event';
import {
  CreateBookingDTO,
  CreateBookingResponse,
  UserDoesNotExistError,
} from 'event/usecase/CreateBooking/types';
import IBookingRepository from 'event/repositories/IBookingRepository';
import User from 'user/domain/User';
import { EventDoesNotExist } from 'event/usecase/GetEventById/types';
import Booking from 'event/domain/Booking';
//TODO: add payment support
//TODO: add database levels locks to ensure updates
export default class CreateBookingUseCase extends UseCase<
  CreateBookingDTO,
  CreateBookingResponse
> {
  protected inputConstraints = {
    eventId: { presence: true },
  };

  private userRepository: IUserRepository;
  private eventRepository: IEventRepository;
  private bookingRepository: IBookingRepository;

  constructor(
    userRepository: IUserRepository,
    eventRepository: IEventRepository,
    bookingRepository: IBookingRepository,
  ) {
    super();
    this.userRepository = userRepository;
    this.eventRepository = eventRepository;
    this.bookingRepository = bookingRepository;
  }

  private async isBookingAvailable(event: Event, numberOfTickets: number = 1) {
    // if(event.maxAllowedTickets)
    return;
  }

  protected async runImpl(
    params: CreateBookingDTO,
    context: UserContext,
  ): Promise<CreateBookingResponse> {
    AssertContext(context, { isAuthenticated: true });

    const { eventId } = params;

    const userId = context.userId;

    const user: User | null = await this.userRepository.getById(userId);

    assert(!!user, new UserDoesNotExistError());

    const event: Event | null = await this.eventRepository.getByEventId(
      eventId,
    );

    assert(!!event, new EventDoesNotExist());

    await this.isBookingAvailable(event);

    const timeNow = new Date();

    const booking = new Booking({
      userId: userId,
      eventId: eventId,
      isComplete: false,
      isPaymentSuccessful: false,
      bookedAt: timeNow,
      lastTryAt: timeNow,
      createdAt: timeNow,
    });

    await this.bookingRepository.save(booking);

    return new CreateBookingResponse(booking.toDTO());
  }
}
