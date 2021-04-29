import { Schema, model, SchemaTypes } from 'mongoose';
import { venueSchema } from 'venue/infra/db/mongoose/VenueModel';
import { moneySchema } from '@app/infra/db/mongoose/models/Money';

const { String, Date, Number } = SchemaTypes;
//TODO: create indexes according to the queries &
//TODO: add geolocation index venue
//TODO: add full text search on event_name
const eventSchema = new Schema({
  event_id: { required: true, unique: true, type: String },
  organizer_id: { required: true, type: String },
  event_name: { required: true, type: String },
  language: { required: true, type: String },
  poster: { required: true, type: String },
  venue: { required: true, type: venueSchema },
  ticket_price: { required: true, type: moneySchema },
  max_allowed_tickets: { required: true, type: Number },
  description: { required: true, type: String },
  event_time: { required: true, type: Date },
  duration: { required: true, type: Number },
  category: { required: true, type: String },
  created_at: { required: true, type: Date },
});

eventSchema.index('event_id');
eventSchema.index('organizer_id');

const EventModel = model('event', eventSchema);
export { EventModel };
