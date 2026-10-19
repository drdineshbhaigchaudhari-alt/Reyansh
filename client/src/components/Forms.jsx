import { useId, useState } from 'react';
import { CheckCircle2, Loader2, Lock, Send, PhoneCall } from 'lucide-react';
import { departments, hivServices } from '../data/site';

function useSubmit(endpoint) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  async function submit(data) {
    setStatus('loading');
    setErrors({});
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(body.errors || {});
        setMessage(body.error || 'Something went wrong. Please try again or call us.');
        setStatus('error');
        return;
      }
      setMessage(body.reference ? `${body.message} Your reference: ${body.reference}` : body.message);
      setStatus('success');
    } catch {
      setMessage('We could not reach the server. Please call us or try again shortly.');
      setStatus('error');
    }
  }
  return { status, errors, message, submit, reset: () => setStatus('idle') };
}

function Field({ label, id, error, children, required, srOnlyLabel = false }) {
  return (
    <div>
      <label htmlFor={id} className={srOnlyLabel ? 'sr-only' : 'label'}>
        {label} {required && <span className="text-crimson-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-crimson-600">{error}</p>}
    </div>
  );
}

function Success({ message, onReset }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <CheckCircle2 className="h-14 w-14 text-navy-500" />
      <h3 className="mt-5 text-2xl font-semibold">Thank you</h3>
      <p className="mt-3 max-w-sm text-slate-600">{message}</p>
      <button onClick={onReset} className="btn-ghost mt-6">Submit another</button>
    </div>
  );
}

const today = () => new Date().toISOString().slice(0, 10);

function ServiceOptions() {
  return (
    <>
      <option value="" disabled>Choose a speciality</option>
      <optgroup label="Specialities">
        {departments.filter((d) => !d.link).map((d) => <option key={d.slug} value={d.title}>{d.title}</option>)}
        <option value="Health check-up package">Health check-up package</option>
        <option value="General consultation">General consultation</option>
      </optgroup>
      <optgroup label="HIV Care Centre (confidential)">
        {hivServices.map((s) => <option key={s.slug} value={`HIV Care – ${s.title}`}>{s.title}</option>)}
      </optgroup>
    </>
  );
}

/**
 * variant: 'full' (contact page), 'compact' (sidebars), 'bar' (horizontal "Get a call back" strip)
 */
export function AppointmentForm({ variant = 'full' }) {
  const { status, errors, message, submit, reset } = useSubmit('/api/appointments');
  const uid = useId();
  const id = (k) => `${uid}-${k}`;
  const full = variant === 'full';

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    submit({
      name: f.get('name'),
      phone: f.get('phone'),
      email: f.get('email') || '',
      service: f.get('service'),
      date: f.get('date') || today(),
      mode: f.get('mode') || 'in-person',
      message: f.get('message') || '',
      consent: f.get('consent') === 'on',
    });
  }

  if (status === 'success') return <Success message={message} onReset={reset} />;

  if (variant === 'bar') {
    return (
      <form onSubmit={onSubmit} noValidate>
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.2fr_auto]">
          <Field label="Your name" id={id('name')} error={errors.name} srOnlyLabel>
            <input id={id('name')} name="name" className="field" autoComplete="name" placeholder="Your name *" />
          </Field>
          <Field label="Mobile number" id={id('phone')} error={errors.phone} srOnlyLabel>
            <input id={id('phone')} name="phone" type="tel" inputMode="tel" className="field" autoComplete="tel" placeholder="Mobile number *" />
          </Field>
          <Field label="Speciality" id={id('service')} error={errors.service} srOnlyLabel>
            <select id={id('service')} name="service" className="field" defaultValue="">
              <ServiceOptions />
            </select>
          </Field>
          <button type="submit" disabled={status === 'loading'} className="btn-crimson h-[46px] whitespace-nowrap">
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <PhoneCall className="h-4 w-4" />}
            Get a call back
          </button>
        </div>
        <label className="mt-3 flex items-start gap-2.5 text-xs text-slate-500">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-navy-700" />
          <span>I authorise Reyansh Prime Hospital to contact me by call, SMS or WhatsApp about my appointment.</span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-crimson-600">{errors.consent}</p>}
        {status === 'error' && !Object.keys(errors).length && <p role="alert" className="mt-2 text-sm text-crimson-700">{message}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className={`grid gap-4 ${full ? 'sm:grid-cols-2' : ''}`}>
        <Field label="Patient name" id={id('name')} error={errors.name} required>
          <input id={id('name')} name="name" className="field" autoComplete="name" placeholder="Full name" />
        </Field>
        <Field label="Mobile number" id={id('phone')} error={errors.phone} required>
          <input id={id('phone')} name="phone" type="tel" inputMode="tel" className="field" autoComplete="tel" placeholder="10-digit mobile number" />
        </Field>
        {full && (
          <Field label="Email (optional)" id={id('email')} error={errors.email}>
            <input id={id('email')} name="email" type="email" className="field" autoComplete="email" placeholder="you@example.com" />
          </Field>
        )}
        <Field label="Speciality" id={id('service')} error={errors.service} required>
          <select id={id('service')} name="service" className="field" defaultValue="">
            <ServiceOptions />
          </select>
        </Field>
        <Field label="Preferred date" id={id('date')} error={errors.date} required>
          <input id={id('date')} name="date" type="date" min={today()} className="field" />
        </Field>
        <Field label="Consultation type" id={id('mode')}>
          <select id={id('mode')} name="mode" className="field" defaultValue="in-person">
            <option value="in-person">In-person (Ahmedabad)</option>
            <option value="teleconsult">Video teleconsult</option>
          </select>
        </Field>
      </div>
      {full && (
        <Field label="Anything you'd like us to know? (optional)" id={id('message')} error={errors.message}>
          <textarea id={id('message')} name="message" rows={3} className="field resize-none" placeholder="Symptoms, preferred doctor or time. Please avoid sharing sensitive medical details here." />
        </Field>
      )}
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300 accent-navy-700" />
        <span>I authorise Reyansh Prime Hospital to contact me by call, SMS or WhatsApp about this appointment.</span>
      </label>
      {errors.consent && <p className="text-xs text-crimson-600">{errors.consent}</p>}
      {status === 'error' && <p role="alert" className="rounded-xl bg-crimson-50 px-4 py-3 text-sm text-crimson-700">{message}</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-crimson w-full">
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Book Appointment
      </button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500"><Lock className="h-3.5 w-3.5" /> Your details are kept private and confidential.</p>
    </form>
  );
}

export function ContactForm() {
  const { status, errors, message, submit, reset } = useSubmit('/api/contact');
  const uid = useId();
  const id = (k) => `${uid}-${k}`;

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    submit(Object.fromEntries(['name', 'email', 'phone', 'subject', 'message'].map((k) => [k, f.get(k) || ''])));
  }

  if (status === 'success') return <Success message={message} onReset={reset} />;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" id={id('name')} error={errors.name} required>
          <input id={id('name')} name="name" className="field" autoComplete="name" />
        </Field>
        <Field label="Email" id={id('email')} error={errors.email} required>
          <input id={id('email')} name="email" type="email" className="field" autoComplete="email" />
        </Field>
        <Field label="Phone (optional)" id={id('phone')} error={errors.phone}>
          <input id={id('phone')} name="phone" type="tel" className="field" autoComplete="tel" />
        </Field>
        <Field label="Subject" id={id('subject')} error={errors.subject} required>
          <input id={id('subject')} name="subject" className="field" />
        </Field>
      </div>
      <Field label="Message" id={id('message')} error={errors.message} required>
        <textarea id={id('message')} name="message" rows={5} className="field resize-none" />
      </Field>
      {status === 'error' && <p role="alert" className="rounded-xl bg-crimson-50 px-4 py-3 text-sm text-crimson-700">{message}</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-primary">
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Message
      </button>
    </form>
  );
}
