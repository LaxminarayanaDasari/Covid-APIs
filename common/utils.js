'use strict';

import config from '../config/config';
import jwt from 'jsonwebtoken';
import Promise from 'bluebird';
import AWS from "aws-sdk";
import crypto from "crypto";
import moment from "moment";

import otpGenerator from "otp-generator";

AWS.config.loadFromPath('./config/s3_credentials.json');

const BucketName = config.default.awsS3.bucketName;
const s3Bucket = new AWS.S3({ params: { Bucket: BucketName } });

const uploadToS3 = (fileName, fileExt, fileType, fileData, callback) => {
  let data = new Buffer(fileData.replace("data:" + fileType + "\/" + fileExt + ";base64,", ""), "base64")
  var uploadabledata = {
    Key: fileName + '.' + fileExt,
    Body: data,
    ContentType: fileType + '/' + fileExt
  };
  s3Bucket.putObject(uploadabledata, function (err, response) {
    if (err) {
      console.log('Error in uploading', err);
    } else {
      callback(fileName + '.' + fileExt);
    }
  });
};

const generateJwtToken = (data, requestFrom) => {

  let secretCode = config.default.jwt.secret;
  let expiresIn = config.default.jwt.expiresIn;

  return jwt.sign({ data }, secretCode, { expiresIn: expiresIn });

};

const decodeJwtToken = (jwtToken) => {
  let secretCode = config.default.jwt.secret;

  return new Promise((resolve, reject) => {
    jwt.verify(jwtToken, secretCode, (error, decodedData) => {
      if (!error) resolve(decodedData);
      else reject({ status: 'unauthorised', message: 'jwt expired' });
    });
  });
};

const generateOTP = (password) => {
  return otpGenerator.generate(5, { alphabets: false, upperCase: false, specialChars: false });
}

export {
  generateJwtToken,
  decodeJwtToken,
  generateOTP,
  uploadToS3
};
