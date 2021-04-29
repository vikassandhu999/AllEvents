import { BaseError } from '@app/core/BaseError';
import { HttpErrors } from '@app/infra/http/errorCode';
import { IBooking } from 'event/domain/Booking';

export type CreateBookingDTO = {
  eventId: string;
};

export class CreateBookingResponse {
  status: string = 'successful';
  action: string = 'payment';
  booking: IBooking;

  constructor(booking: IBooking) {
    this.booking = booking;
  }
}

export class UserDoesNotExistError extends BaseError {
  constructor() {
    super("User doesn't exist", HttpErrors.NOT_FOUND, {
      userId: "User id doesn't exist",
    });
  }
}

export class AllTicketsHaveBeenBookedExistError extends BaseError {
  constructor() {
    super('All the tickets have been booked', HttpErrors.NOT_FOUND, {
      maximumTicketsReached: 'All the tickets have been booked',
    });
  }
}
