import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import appointmentsRouter from './routes/appointments.js';
import contactRouter from './routes/contact.js';
import { verifyMail } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load server/.env when present (local runs). On Hostinger, set the same keys under
// the app's Environment variables in hPanel instead.
try {
  process.loadEnvFile(path.join(__dirname, '.env'));
} catch {
  // no .env file: rely on the host's environment variables
}
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));
app.use('/api/appointments', appointmentsRouter);
app.use('/api/contact', contactRouter);
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// Serve the built React app in production, with SPA fallback for client-side routes
const dist = path.resolve(__dirname, '../client/dist');
if (fs.existsSync(dist)) {
  app.use(express.static(dist, { maxAge: '7d', index: false }));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  verifyMail().then((m) => console.log(`[mail] ${m}`)).catch((e) => console.error('[mail] SMTP check failed:', e.message));
});
