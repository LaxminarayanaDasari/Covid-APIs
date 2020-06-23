'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import countryController from '../controllers/countries.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, countryController.add);

router.get('/list', countryController.list);

export default router;
