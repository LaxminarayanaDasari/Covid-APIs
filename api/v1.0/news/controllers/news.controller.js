'use strict';
/**
 * Module dependencies.
 */
import newsService from '../services/news.services.js';
import mongoose from "mongoose";

import config from '../../../../config/config';

const objectId = mongoose.Types.ObjectId;

const add = (req, res) => {

  newsService.create(req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "new added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
    });
};

const list = (req, res) => {

  let { skipCount } = req.params;

  newsService.find({})
  .then((response) => {
    res.status(200).json({ success: true, message: "news loaded successfully", data: response });
  })
  .catch((error) => {
    res.status(400).json({ success: false, message: "Internal server error. Please try after sometime." });
  });
}

export default {
  add,
  list
};
