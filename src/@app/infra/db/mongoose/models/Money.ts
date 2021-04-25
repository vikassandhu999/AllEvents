import { Schema, SchemaTypes } from 'mongoose';

const { String, Boolean } = SchemaTypes;

const moneySchema = new Schema({
  currency: {
    required: true,
    type: String,
  },
  value: {
    required: true,
    type: Number,
  },
});

export { moneySchema };
