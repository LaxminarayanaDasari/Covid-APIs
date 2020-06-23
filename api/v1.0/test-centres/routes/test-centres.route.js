'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import testCentresController from '../controllers/test-centres.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, testCentresController.add);

router.get('/list', testCentresController.list);

export default router;
