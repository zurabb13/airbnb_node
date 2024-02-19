import mongoose from 'mongoose';

const { Schema } = mongoose;

const houseSchema = new Schema({
  name: {
    type: String,
  },
  _id: {
    type: String,
  },
  last_scraped: {
    type: String,
  },
  name: {
    type: String,
  },
  summary: {
    type: String,
  },
  space: {
    type: String,
  },
  description: {
    type: String,
  },
  medium_url: {
    type: String,
  },
  host_name: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  bathrooms: {
    type: Number,
  },
  bedrooms: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const House = mongoose.model('detabase', houseSchema);
export default House;
