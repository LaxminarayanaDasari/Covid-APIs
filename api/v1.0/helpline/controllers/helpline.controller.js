'use strict';
/**
 * Module dependencies.
 */
import helplinesService from '../services/helpline.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  helplinesService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "helpline added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  helplinesService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "helplines loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
