import IBookingRepository from 'event/repositories/IBookingRepository';
import Booking from 'event/domain/Booking';
import BookingMapper from 'event/mappers/BookingMapper';
import { BookingModel } from 'event/infra/database/mongoose/models/BookingModel';

export class MongooseBookingRepository implements IBookingRepository {
  private readonly model = BookingModel;

  async getByBookingId(bookingId: string): Promise<Booking | null> {
    const booking = await this.model.findOne({ booking_id: bookingId }).exec();
    if (!booking) return null;
    return BookingMapper.toDomain(booking);
  }

  async getByEventId(eventId: string): Promise<Booking[]> {
    const result = await this.model.find({ event_id: eventId }).exec();
    if (!result) return [];
    return result.map((bookingDoc) => BookingMapper.toDomain(bookingDoc));
  }

  async getByUserId(userId: string): Promise<Booking[]> {
    const result = await this.model.find({ user_id: userId }).exec();
    if (!result) return [];
    return result.map((bookingDocs) => BookingMapper.toDomain(bookingDocs));
  }

  async save(booking: Booking): Promise<void> {
    const bookingDoc = BookingMapper.toPersistence(booking);
    const newBooking = new BookingModel(bookingDoc);
    await newBooking.save();
  }

  async deleteOne(bookingId: string): Promise<void> {
    return this.model.deleteOne({ booking_id: bookingId });
  }

  async deleteAll(): Promise<void> {
    return this.model.deleteMany();
  }
}
