'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import helplinesController from '../controllers/helpline.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, helplinesController.add);

router.get('/list', helplinesController.list);

export default router;
