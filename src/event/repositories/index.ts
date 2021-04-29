import { MongooseEventRepository } from 'event/repositories/imples/MongooseEventRespository';
import { MongooseBookingRepository } from 'event/repositories/imples/MongooseBookingRepository';

const eventRepository = new MongooseEventRepository();
const bookingRepository = new MongooseBookingRepository();

export { eventRepository, bookingRepository };
