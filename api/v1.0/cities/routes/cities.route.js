'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import citiesController from '../controllers/cities.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, citiesController.add);

router.get('/list', citiesController.list);

export default router;
