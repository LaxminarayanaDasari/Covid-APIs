'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import Promise from 'bluebird';

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const schema = new Schema({
  countryID: {
    type: Schema.Types.ObjectId,
    ref: 'countries'
  },
  name: String,
  stateType: String, //state,ut
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('states', schema);
