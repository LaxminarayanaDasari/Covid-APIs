'use strict';
/**
 * Module dependencies.
 */
import casesService from '../services/cases.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  casesService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "case added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {

  casesService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "cases loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
