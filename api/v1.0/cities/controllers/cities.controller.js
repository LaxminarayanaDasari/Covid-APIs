'use strict';
/**
 * Module dependencies.
 */
import citiesService from '../services/cities.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  citiesService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "city added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  citiesService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "cities loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
