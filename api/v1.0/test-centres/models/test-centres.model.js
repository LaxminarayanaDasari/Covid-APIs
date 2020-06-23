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
  stateID: {
    type: Schema.Types.ObjectId,
    ref: 'states'
  },
  centres: [{
    name: String,
    createdAt: {type: Date, default: Date.now},
  }],
  confirmedAt: {type: Date, default: Date.now},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('testcentres', schema);
