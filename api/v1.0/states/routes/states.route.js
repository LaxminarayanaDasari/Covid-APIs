'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import statesController from '../controllers/states.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, statesController.add);

router.get('/list', statesController.list);

export default router;
