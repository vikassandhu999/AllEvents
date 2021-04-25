import { Schema, model, SchemaTypes } from 'mongoose';

const { String, Boolean } = SchemaTypes;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const venueSchema = new Schema({
  venue_id: {
    type: String,
    required: true,
  },
  venue_name: {
    type: String,
    required: true,
  },
  media: {
    type: [String],
  },
  location: {
    type: pointSchema,
    required: true,
  },
});

venueSchema.index('venue_id');
venueSchema.index('venue_name');
venueSchema.index({ location: '2dsphere' });

const VenueModel = model('venue', venueSchema);

export { VenueModel, venueSchema };
