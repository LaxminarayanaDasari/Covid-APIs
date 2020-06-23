'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import casesController from '../controllers/cases.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, casesController.add);

router.get('/list', casesController.list);

export default router;
