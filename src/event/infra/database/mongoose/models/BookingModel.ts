import { Schema, model, SchemaTypes } from 'mongoose';
import { venueSchema } from 'venue/infra/db/mongoose/VenueModel';
import { moneySchema } from '@app/infra/db/mongoose/models/Money';

const { String, Date, Number, Boolean, Mixed } = SchemaTypes;
//TODO : add payment schema
const bookingSchema = new Schema({
  booking_id: { required: true, unique: true, type: String },
  event_id: { required: true, type: String },
  user_id: { required: true, type: String },
  is_complete: { required: true, type: Boolean },
  is_payment_successful: { required: true, type: Boolean },
  payment_details: { required: false, type: Mixed },
  booked_at: { required: true, type: Date },
  last_try_at: { required: true, type: Date },
  created_at: { required: true, type: Date },
});

bookingSchema.index('booking_id');
bookingSchema.index('event_id');
bookingSchema.index('user_id');

const BookingModel = model('booking', bookingSchema);
export { BookingModel };
