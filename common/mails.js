'use strict';

import nodemailer from "nodemailer";
import ejs from "ejs";
import smtpTransport from 'nodemailer-smtp-transport';
import config from "../config/config";
import ses from "nodemailer-ses-transport";

var transporter = nodemailer.createTransport(smtpTransport({
  auth: {
    user: process.env.username,
    pass: process.env.password
  },
  host: "smtp.gmail.com",
  secureConnection: true,
  port: 465,
  tls: {
    rejectUnauthorized:false
  }
}));

const sendMailViaNodeMailer = (data) => {
  let { toEmail, ccEmail, subject, content, html } = data;

  var mailOptions = {
    from: process.env.fromEmail, // sender address
    to: toEmail, // list of receivers
    cc: ccEmail,
    subject: subject, // Subject line
    text: content, // plaintext body
    html: html // html body
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
};

let customerMails = {}, authentication = {};

authentication.sendOTPMail = (data) => {
  let html = '<html>';
  html+='<p>Hi '+data.name+',</p><p>Please use <a style="text-decoration: underscore; color: \'#80d4ff\';">'+data.otp+'</a> as your One Time Password(OTP) to complete your registration.</p><b>Team, <br/>HAIVA</b></html>';
  sendMailViaNodeMailer({ toEmail: data.email, subject:"Covid: One Time Password", content: "", html });
}

authentication.forgotEmail = (data) => {
  let html = '<html>';
  html+='<p>Hi '+data.name+',</p><p>Please use this <a href="'+data.link+'">Link</a> to reset your password.</p><b>Team, <br/>HAIVA</b></html>';
  sendMailViaNodeMailer({ toEmail: data.email, subject:"Covid: Reset Password", content: "", html });
}

authentication.passwordUpdated = (data) => {
  let html = '<html>';
  html+='<p>Hi '+data.name+',</p><p>Congratulations!!<br/><br/> Your password has been updated successfully.</p><b>Team, <br/>HAIVA</b></html>';
  sendMailViaNodeMailer({ toEmail: data.email, subject:"Covid: Password updated", content: "", html });
}

export {
  customerMails,
  authentication
};
