'use strict';

import _ from 'lodash';
import mongoose from "mongoose";
import moment from "moment";
import AWS from "aws-sdk";

import config from '../../../config/config';
AWS.config.loadFromPath('./config/s3_credentials.json');

const BucketName = config.default.awsS3.bucketName;
const s3Bucket = new AWS.S3({ params: { Bucket: BucketName } });
import { decodeJwtToken, uploadToS3 } from '../../../common/utils.js';

const objectId = mongoose.Types.ObjectId;

let isUser = {};

isUser.authenticated = (req, res, next) => {
  const token = req.headers['x-auth-code'];
  if (token) {
    decodeJwtToken(token)
      .then(decoded => {
        req.decoded = decoded.data;
        next();
      })
      .catch((error) => {
        console.log(error)
        res.status(401).json({ success: false, message: "Your Login Token Expired. Please Login." });
      });
  } else {
    res.status(401).json({ success: false, message: "You are not authorised." });
  }
};

isUser.hasSecretKey = (req, res, next) => {
  const secretCode = req.headers['x-secret-code'];
  if (secretCode == 'covid19india') {
   next();
  } else {
    res.status(401).json({ success: false, message: "Secret key not provided" });
  }
}

let isBody = {};

let requires = {};

requires.body = (req, res, next) => {
  if (!_.isEmpty(req.body)) next();
  else res.json({ success: false, message: 'Request Body is Empty. Please Provide Data.' });
};

export {
  isBody,
  isUser,
  requires
};
