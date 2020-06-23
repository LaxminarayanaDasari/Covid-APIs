'use strict';

/**
 * Module dependencies.
 */

import express from 'express';
import newsController from '../controllers/news.controller';
import {
    isUser,
    requires
} from '../../auth/auth.service';
let router = express.Router();

router.post('/add', requires.body, newsController.add);

router.get('/list/:skipCount?', newsController.list);

export default router;
