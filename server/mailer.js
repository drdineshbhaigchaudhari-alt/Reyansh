import nodemailer from 'nodemailer';

const env = process.env;
const enabled = Boolean(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);

const transporter = enabled
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT || 465),
      secure: (env.SMTP_SECURE ?? 'true') === 'true',
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    })
  : null;

const FROM = env.MAIL_FROM || env.SMTP_USER;
const NOTIFY_TO = env.NOTIFY_TO || env.SMTP_USER;

const esc = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function layout(title, bodyHtml) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;border:1px solid #e1e7f2;border-radius:12px;overflow:hidden">
  <div style="background:#02368A;color:#fff;padding:18px 24px;font-size:18px;font-weight:bold">Reyansh Prime Multispecialty Hospital</div>
  <div style="height:4px;background:#CD1E2C"></div>
  <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6"><h2 style="margin:0 0 16px;color:#02368A;font-size:18px">${esc(title)}</h2>${bodyHtml}</div>
  <div style="background:#F6F8FC;padding:14px 24px;font-size:12px;color:#64748b">Near Geeta Mandir, Berhampur Lati Bazar – Gandhinagar Hwy, Ahmedabad, Gujarat 380059</div>
</div>`;
}

function table(rows) {
  return `<table style="border-collapse:collapse;width:100%">${rows
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `<tr><td style="padding:8px 10px;border-bottom:1px solid #eef2f7;color:#64748b;width:38%">${esc(k)}</td><td style="padding:8px 10px;border-bottom:1px solid #eef2f7;font-weight:600">${esc(v)}</td></tr>`)
    .join('')}</table>`;
}

async function send(msg) {
  if (!transporter) {
    console.warn('[mail] SMTP not configured; skipping email:', msg.subject);
    return;
  }
  try {
    await transporter.sendMail({ from: FROM, ...msg });
  } catch (err) {
    // Never fail a booking because email failed; the record is already saved.
    console.error('[mail] send failed:', err.message);
  }
}

export function notifyAppointment(row, reference) {
  const rows = [
    ['Reference', reference],
    ['Name', row.name],
    ['Mobile', row.phone],
    ['Email', row.email],
    ['Speciality', row.service],
    ['Preferred date', row.date],
    ['Consultation', row.mode === 'teleconsult' ? 'Video teleconsult' : 'In-person'],
    ['Message', row.message],
    ['Received', new Date(row.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
  ];
  const jobs = [
    send({
      to: NOTIFY_TO,
      replyTo: row.email || undefined,
      subject: `New appointment request ${reference}: ${row.name} (${row.service})`,
      html: layout('New appointment request', table(rows)),
    }),
  ];
  if (row.email) {
    jobs.push(
      send({
        to: row.email,
        subject: `We received your appointment request (${reference})`,
        html: layout(
          `Thank you, ${row.name}`,
          `<p>We have received your appointment request. Our patient care executive will call you on <b>${esc(row.phone)}</b> to confirm your slot.</p>
           ${table([['Reference', reference], ['Speciality', row.service], ['Preferred date', row.date]])}
           <p style="margin-top:16px">For emergencies, please call our 24×7 emergency line.</p>`
        ),
      })
    );
  }
  return Promise.all(jobs);
}

export function notifyContact(row) {
  return Promise.all([
    send({
      to: NOTIFY_TO,
      replyTo: row.email,
      subject: `Website enquiry: ${row.subject}`,
      html: layout('New website enquiry', table([['Name', row.name], ['Email', row.email], ['Phone', row.phone], ['Subject', row.subject], ['Message', row.message]])),
    }),
    send({
      to: row.email,
      subject: 'Thank you for contacting Reyansh Prime Hospital',
      html: layout(`Thank you, ${row.name}`, '<p>We have received your message and will reply within one working day.</p>'),
    }),
  ]);
}

export async function verifyMail() {
  if (!transporter) return 'SMTP not configured';
  await transporter.verify();
  return `SMTP ready (${env.SMTP_USER} via ${env.SMTP_HOST})`;
}
