'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import notificationsController from '../controllers/notifications.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, notificationsController.add);

router.get('/list/:skipCount?', notificationsController.list);

export default router;
