import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data');

// Minimal JSON-file store. Swap for a real database before going live.
export async function append(collection, record) {
  await fs.mkdir(dataDir, { recursive: true });
  const file = path.join(dataDir, `${collection}.json`);
  let rows = [];
  try {
    rows = JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    // first write
  }
  const row = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...record };
  rows.push(row);
  await fs.writeFile(file, JSON.stringify(rows, null, 2));
  return row;
}

export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = Object.fromEntries(result.error.issues.map((i) => [i.path.join('.'), i.message]));
      return res.status(400).json({ error: 'Please check the highlighted fields.', errors });
    }
    req.valid = result.data;
    next();
  };
}
