'use strict';
/**
 * Module dependencies.
 */
import notificationsService from '../services/notifications.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  notificationsService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "notification added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {

  let { skipCount } = req.params;
  
  notificationsService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "notifications loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
