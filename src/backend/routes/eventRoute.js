import {getEvents} from '../controllers/eventController';
import express from 'express';

const router = express.Router();

router.route('/').get(getEvents)

export default router;