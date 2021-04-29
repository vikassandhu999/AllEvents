import Booking from 'event/domain/Booking';

export default interface IBookingRepository {
  save(booking: Booking): Promise<void>;

  getByBookingId(bookingId: string): Promise<Booking | null>;

  getByEventId(eventId: string): Promise<Array<Booking>>;
  getByUserId(userId: string): Promise<Array<Booking>>;

  deleteOne(bookingId: string): Promise<void>;
  deleteAll(): Promise<void>;
}
