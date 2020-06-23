'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import reportsController from '../controllers/reports.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, reportsController.add);

router.get('/list', reportsController.list);

export default router;
