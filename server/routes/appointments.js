import { Router } from 'express';
import { z } from 'zod';
import { append, validate } from '../store.js';
import { notifyAppointment } from '../mailer.js';

const schema = z.object({
  name: z.string({ required_error: 'Please enter your name' }).trim().min(2, 'Please enter your name').max(80),
  phone: z
    .string({ required_error: 'Enter a valid 10-digit Indian mobile number' })
    .trim()
    .regex(/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/,'Enter a valid 10-digit Indian mobile number'),
  email: z.string().trim().email('Enter a valid email').max(120).optional().or(z.literal('')),
  service: z.string({ required_error: 'Please choose a service' }).trim().min(1, 'Please choose a service').max(80),
  date: z.string({ required_error: 'Please choose a date' }).trim().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please choose a date'),
  mode: z.enum(['in-person', 'teleconsult']).default('in-person'),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

const router = Router();

router.post('/', validate(schema), async (req, res) => {
  const row = await append('appointments', req.valid);
  const reference = `RPH-${row.id.slice(0, 6).toUpperCase()}`;
  notifyAppointment(row, reference); // fire-and-forget; errors are logged in mailer
  res.status(201).json({
    ok: true,
    reference,
    message: 'Thank you. Our care coordinator will call you within 2 working hours to confirm your appointment.',
  });
});

export default router;
