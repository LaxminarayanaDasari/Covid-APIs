'use strict';
/**
 * Module dependencies.
 */
import chalk from 'chalk';
import config from '../config';
import express from './express';
import { connect, loadModels } from './mongoose';
import events from "events";
events.EventEmitter.prototype._maxListeners = 100;

var http = require('http').Server(express());
// var io = require('socket.io')(http);

const app = connect(function(db) {
  loadModels();

  const server = express(db);

  http.listen(config.default.port, function () {
    console.log(chalk.green(config.default.app.title + ' is running on port ' + config.default.port));
  });

  return server;
});

export default app;
