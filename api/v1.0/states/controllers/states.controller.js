'use strict';
/**
 * Module dependencies.
 */
import statesService from '../services/states.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  statesService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "state added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  statesService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "states loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
