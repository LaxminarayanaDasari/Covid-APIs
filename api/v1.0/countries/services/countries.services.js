'use strict';

import _ from 'lodash';
import md5 from 'md5';
import schema from '../models/countries.model';

const findOne = (query) => {
  return schema.findOne(query).exec();
};

const create = (data) => {  
  return schema.create(data);
};

const find = (query) => {
  return schema.find(query).exec();
};

const count = (query) => {
  return schema.count(query).exec();
};

const remove = (query) => {
  return schema.remove(query).exec();
};

module.exports = {
  findOne,
  create,
  find,
  count,
  remove
};
