// src/routes/testRoutes.ts

import { Router, Request, Response } from 'express';
import { testDatabaseConnection } from '../dbTest';

const router = Router();

// Test endpoint to check database connection
router.get('/db', async (req: Request, res: Response) => {
  try {
    await testDatabaseConnection();
    res.json({ message: 'Database connection is successful' });
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

export default router;
