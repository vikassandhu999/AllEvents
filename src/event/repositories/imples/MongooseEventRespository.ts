import Event from 'event/domain/Event';
import { EventModel } from 'event/infra/database/mongoose/models/EventModel';
import IEventRepository from '../IEventRepository';
import EventMapper from '../../mappers/EventMapper';

export class MongooseEventRepository implements IEventRepository {
  private readonly model = EventModel;

  async getByEventId(eventId: string): Promise<Event | null> {
    const event = await this.model.findOne({ event_id: eventId }).exec();
    if (!event) return null;
    return EventMapper.toDomain(event);
  }

  async getByUserId(organizerId: string): Promise<Event[]> {
    const result = await this.model.find({ organizer_id: organizerId }).exec();
    if (!result) return [];
    return result.map((eventDoc) => EventMapper.toDomain(eventDoc));
  }

  async save(event: Event): Promise<void> {
    const eventDoc = EventMapper.toPersistence(event);
    const newEvent = new EventModel(eventDoc);
    await newEvent.save();
  }

  async deleteOne(eventId: string): Promise<void> {
    return this.model.deleteOne({ event_id: eventId });
  }

  async deleteAll(): Promise<void> {
    return this.model.deleteMany();
  }
}
