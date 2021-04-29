import { v4 as uuid } from 'uuid';

export interface IBooking {
  bookingId: string;
  eventId: string;
  userId: string;
  isComplete: boolean;
  isPaymentSuccessful: boolean;
  paymentDetails?: any;
  bookedAt: Date;
  lastTryAt: Date;
  createdAt: Date;
}

interface BookingProps {
  bookingId?: string;
  eventId: string;
  userId: string;
  isComplete: boolean;
  isPaymentSuccessful: boolean;
  paymentDetails?: any;
  bookedAt: Date;
  lastTryAt: Date;
  createdAt?: Date;
}

export default class Booking {
  state: IBooking;
  constructor(props: BookingProps) {
    this.state = {
      ...props,
      bookingId: props.bookingId ?? uuid(),
      createdAt: props.createdAt ?? new Date(),
    };
  }

  set bookingId(bookingId: string) {
    this.state.bookingId = bookingId;
  }
  set eventId(eventId: string) {
    this.state.eventId = eventId;
  }
  set userId(userId: string) {
    this.state.userId = userId;
  }
  set isComplete(isComplete: boolean) {
    this.state.isComplete = isComplete;
  }
  set isPaymentSuccessful(isPaymentSuccessful: boolean) {
    this.state.isPaymentSuccessful = isPaymentSuccessful;
  }
  set paymentDetails(paymentDetails: any) {
    this.state.paymentDetails = paymentDetails;
  }
  set bookedAt(bookedAt: Date) {
    this.state.bookedAt = bookedAt;
  }
  set lastTryAt(lastTryAt: Date) {
    this.state.lastTryAt = lastTryAt;
  }
  set createdAt(createdAt: Date) {
    this.state.createdAt = createdAt;
  }

  get bookingId(): string {
    return this.state.bookingId;
  }
  get eventId(): string {
    return this.state.eventId;
  }
  get userId(): string {
    return this.state.userId;
  }
  get isComplete(): boolean {
    return this.state.isComplete;
  }
  get isPaymentSuccessful(): boolean {
    return this.state.isPaymentSuccessful;
  }
  get paymentDetails(): any {
    return this.state.paymentDetails;
  }
  get bookedAt(): Date {
    return this.state.bookedAt;
  }
  get lastTryAt(): Date {
    return this.state.lastTryAt;
  }
  get createdAt(): Date {
    return this.state.createdAt;
  }

  toDTO(): IBooking {
    return this.state;
  }
}
