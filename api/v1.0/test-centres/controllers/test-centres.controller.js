'use strict';
/**
 * Module dependencies.
 */
import testCentresService from '../services/test-centres.services';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  testCentresService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "testCentre added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {
  testCentresService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "testCentres loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
