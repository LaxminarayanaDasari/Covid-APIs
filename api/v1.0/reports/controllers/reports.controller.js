'use strict';
/**
 * Module dependencies.
 */
import reportsService from '../services/reports.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  reportsService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "report added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  reportsService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "reports loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
