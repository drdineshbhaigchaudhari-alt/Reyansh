import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? '!text-crimson-100' : ''}`}>
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-[2.75rem] ${light ? '!text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-navy-100' : 'text-slate-600'}`}>{text}</p>}
    </Reveal>
  );
}
