'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import Promise from 'bluebird';

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const schema = new Schema({
  name: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('countries', schema);
