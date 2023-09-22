import express, { Router } from 'express';
import * as authController from '../controller/authController';

const router = Router();

/**
 * @openapi
 *  '/login':
 *   post:
 *      tags:
 *          - User
 *      summary: Register a User
 *      requestBody:
 *          required: true
 *          contents:
 *              application/json:
 *                  schema:
 *          
 */
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;