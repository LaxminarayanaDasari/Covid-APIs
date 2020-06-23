'use strict';
/**
 * Module dependencies.
 */
import countryService from '../services/countries.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  countryService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "country added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  countryService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "country loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
