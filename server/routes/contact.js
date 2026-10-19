import { Router } from 'express';
import { z } from 'zod';
import { append, validate } from '../store.js';
import { notifyContact } from '../mailer.js';

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  email: z.string().trim().email('Enter a valid email').max(120),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  subject: z.string().trim().min(2, 'Please add a subject').max(120),
  message: z.string().trim().min(10, 'Please write at least a short message').max(2000),
});

const router = Router();

router.post('/', validate(schema), async (req, res) => {
  const row = await append('messages', req.valid);
  notifyContact(row); // fire-and-forget; errors are logged in mailer
  res.status(201).json({ ok: true, message: 'Message received. We reply to every enquiry confidentially within one working day.' });
});

export default router;
