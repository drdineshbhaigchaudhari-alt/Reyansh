import {
  Flower2, Sprout, Bone, PersonStanding, Stethoscope, Baby, Scissors, Droplets, Sparkles, Ear, Brain,
  Activity, HeartPulse, Ambulance, ShieldPlus, TestTube2, Pill, ShieldCheck, Siren, Microscope, Users,
  Award, BedDouble, CreditCard, Video, MapPin, Clock, FlaskConical, Building2, HandHeart, Lock, BadgeCheck,
  ClipboardCheck, CalendarCheck,
} from 'lucide-react';

/* ------------------------------------------------------------------
 * Hospital details. Phone numbers are DUMMY placeholders; emails are the hospital's real addresses.
 * ---------------------------------------------------------------- */
export const site = {
  name: 'Reyansh Prime Multispecialty Hospital',
  short: 'Reyansh Prime',
  city: 'Ahmedabad',
  since: 2003,
  address: 'Near Geeta Mandir, Berhampur Lati Bazar – Gandhinagar Hwy, Ahmedabad, Gujarat 380059, India',
  // DUMMY numbers from series that are never issued in India, so they cannot belong to anyone:
  // mobiles start with 6–9 (never 5), and landline subscriber numbers never start with 0.
  // Replace with the hospital's real numbers before launch.
  phone: '079 0490 2003',
  phoneHref: 'tel:+917904902003',
  emergency: '+91 50250 12003',
  emergencyHref: 'tel:+915025012003',
  ambulance: '+91 50900 12003',
  ambulanceHref: 'tel:+915090012003',
  pepHelpline: '+91 50250 12003',
  pepHref: 'tel:+915025012003',
  whatsapp: '915025012003',
  email: 'infohospital@reyanshmultispeciality.com',
  emails: [
    { label: 'General enquiries', address: 'infohospital@reyanshmultispeciality.com' },
    { label: 'Hospital office', address: 'rpmh@reyanshmultispeciality.com' },
    { label: '24×7 Emergency', address: 'emergency24@reyanshmultispeciality.com' },
    { label: 'Careers & HR', address: 'hr@reyanshmultispeciality.com' },
  ],
  hours: [
    { day: 'OPD: Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'OPD: Sunday', time: '10:00 AM – 1:00 PM' },
    { day: 'Health check-ups', time: 'All 7 days, from 8:00 AM' },
    { day: 'Emergency, ICU & Ambulance', time: '24 × 7' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Geeta+Mandir+Lati+Bazar+Gandhinagar+Highway+Ahmedabad+380059&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Geeta+Mandir+Lati+Bazar+Gandhinagar+Highway+Ahmedabad+380059',
};

export const hivNav = [
  { to: '/hiv-care', label: 'HIV Care Centre' },
  { to: '/hiv-care/prep-pep', label: 'PrEP & PEP' },
  { to: '/hiv-care/testing', label: 'HIV Testing' },
  { to: '/hiv-care/resources', label: 'Patient Resources' },
];

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/specialities', label: 'Specialities' },
  { to: '/hiv-care', label: 'HIV Care Centre', children: hivNav },
  { to: '/doctors', label: 'Doctors' },
  { to: '/contact', label: 'Contact' },
];

/* ------------------------------------------------------------------
 * Departments (multispecialty)
 * ---------------------------------------------------------------- */
export const departments = [
  {
    slug: 'obstetrics-gynaecology',
    icon: Flower2,
    title: 'Obstetrics & Gynaecology',
    short: 'Safe motherhood, normal and high-risk deliveries, and complete women\'s health care.',
    image: '/images/pregnant-saree.jpg',
    overview:
      'From the first antenatal visit to a safe delivery and beyond, our obstetricians and gynaecologists look after women at every stage of life. The labour suite, neonatal support and a 24×7 operation theatre mean that both normal and high-risk pregnancies are managed safely under one roof.',
    whoFor: ['Expecting mothers, including high-risk pregnancies', 'Women with menstrual problems, PCOS or fibroids', 'Women needing menopause care', 'Routine gynaecological screening such as Pap smears'],
    expect: ['Antenatal care packages and ultrasound', 'Normal delivery, painless delivery and C-section', 'Laparoscopic gynaecological surgery', 'Postnatal and lactation support'],
  },
  {
    slug: 'ivf-fertility',
    icon: Sprout,
    title: 'IVF & Fertility',
    short: 'Compassionate fertility care with IUI, IVF and ICSI for couples hoping to start a family.',
    image: '/images/family-newborn.jpg',
    overview:
      'Infertility is common and treatable. Our fertility team evaluates both partners, explains every option clearly and creates a personalised plan, from simple ovulation tracking and IUI to advanced IVF and ICSI. The process is private and transparent, with counselling at every step.',
    whoFor: ['Couples who have been trying to conceive for over a year', 'Women with PCOS, blocked tubes or endometriosis', 'Men with a low sperm count', 'Serodiscordant couples (with our HIV Care Centre)'],
    expect: ['Complete fertility work-up for both partners', 'Ovulation induction and IUI', 'IVF / ICSI with embryo culture', 'Pregnancy confirmation and transition to antenatal care'],
  },
  {
    slug: 'orthopaedics-joint-replacement',
    icon: Bone,
    title: 'Orthopaedics & Joint Replacement',
    short: 'Knee and hip replacement, fracture care, arthroscopy and sports injury treatment.',
    image: '/images/knee-physio.jpg',
    overview:
      'Knee and hip replacement are among our hospital\'s key specialities. Our orthopaedic surgeons treat everything from fractures and sports injuries to advanced arthritis, using modern implants and a structured physiotherapy programme that gets patients walking quickly and safely.',
    whoFor: ['People with knee or hip arthritis', 'Fractures and trauma', 'Sports and ligament injuries', 'Elderly patients with joint pain and stiffness'],
    expect: ['Total and partial knee replacement', 'Total hip replacement', 'Arthroscopic (keyhole) surgery', 'In-house physiotherapy and rehabilitation'],
  },
  {
    slug: 'spine-surgery',
    icon: PersonStanding,
    title: 'Spine Care & Surgery',
    short: 'Expert treatment of back and neck pain, slipped discs and spinal conditions.',
    image: '/images/doctor-patient-clinic.jpg',
    overview:
      'Our spine centre is one of the hospital\'s best-known services. Most back and neck problems improve without surgery, so we start with an accurate diagnosis, medication and physiotherapy. When surgery is needed, our spine surgeons use minimally invasive techniques for quicker recovery.',
    whoFor: ['Chronic back or neck pain', 'Slipped disc and sciatica', 'Spinal stenosis and spondylosis', 'Spine injuries'],
    expect: ['Clinical and imaging evaluation', 'Pain-relief injections and physiotherapy', 'Micro-discectomy and spinal decompression', 'Spinal fixation when required'],
  },
  {
    slug: 'internal-medicine',
    icon: Stethoscope,
    title: 'Internal Medicine',
    short: 'Diagnosis and long-term care for diabetes, hypertension, infections and more.',
    image: '/images/consult-bp.jpg',
    overview:
      'Our physicians are often the first doctors our patients meet. They diagnose and manage a wide range of adult conditions, coordinate with other specialists, and guide patients and families through chronic illness with clear, practical advice.',
    whoFor: ['Fever, infections and dengue/malaria', 'Diabetes, thyroid and blood pressure', 'Respiratory and digestive complaints', 'Elderly patients with multiple conditions'],
    expect: ['Same-day OPD consultation', 'In-house pathology for quick reports', 'Indoor admission when needed', 'Long-term chronic disease follow-up'],
  },
  {
    slug: 'paediatrics',
    icon: Baby,
    title: 'Paediatrics & Neonatology',
    short: 'Gentle, expert care for newborns, infants and children, including vaccinations.',
    image: '/images/newborn-exam.jpg',
    overview:
      'Children are not small adults. Our paediatricians care for newborns, infants and children in a friendly, reassuring environment, covering everything from vaccinations and growth checks to acute illness and neonatal care.',
    whoFor: ['Newborns and premature babies', 'Children with fever, cough or infections', 'Growth and development concerns', 'Routine vaccinations'],
    expect: ['Newborn examination and care', 'Complete immunisation schedule', 'Paediatric admission and nebulisation', 'Nutrition and development guidance'],
  },
  {
    slug: 'general-laparoscopic-surgery',
    icon: Scissors,
    title: 'General & Laparoscopic Surgery',
    short: 'Keyhole surgery for gallstones, hernia, appendix and more, with faster recovery.',
    image: '/images/ot-team.jpg',
    overview:
      'Our surgical team is well trained in pre-operative, intra-operative and post-operative care. Well-equipped operation theatres and laparoscopic techniques mean smaller cuts, less pain, shorter hospital stays and a quicker return to daily life.',
    whoFor: ['Gallbladder stones', 'Hernia', 'Appendicitis', 'Piles, fissure and fistula'],
    expect: ['Laparoscopic cholecystectomy', 'Laparoscopic and open hernia repair', 'Emergency surgery 24×7', 'Day-care procedures'],
  },
  {
    slug: 'urology',
    icon: Droplets,
    title: 'Urology',
    short: 'Treatment of kidney stones, prostate problems and urinary conditions.',
    image: '/images/consult-stethoscope.jpg',
    overview:
      'Our urologists diagnose and treat conditions of the kidneys, bladder and prostate in men and women, using modern endoscopic and minimally invasive procedures wherever possible.',
    whoFor: ['Kidney and ureteric stones', 'Enlarged prostate (BPH)', 'Urinary infections and incontinence', 'Male sexual health concerns'],
    expect: ['Ultrasound and urine studies', 'Endoscopic stone removal', 'TURP for prostate enlargement', 'Follow-up and prevention advice'],
  },
  {
    slug: 'dermatology',
    icon: Sparkles,
    title: 'Dermatology (Skin)',
    short: 'Medical and cosmetic care for skin, hair and nails.',
    image: '/images/couple-portrait.jpg',
    overview:
      'Healthy skin builds confidence. Our dermatologists treat acne, eczema, psoriasis, infections, hair fall and pigmentation, and offer safe cosmetic procedures in a clean, private clinic.',
    whoFor: ['Acne and pigmentation', 'Eczema, psoriasis and allergies', 'Fungal and skin infections', 'Hair fall and scalp problems'],
    expect: ['Detailed skin consultation', 'Medical treatment plans', 'Chemical peels and minor procedures', 'Follow-up reviews'],
  },
  {
    slug: 'ent',
    icon: Ear,
    title: 'ENT (Ear, Nose & Throat)',
    short: 'Care for sinus, tonsils, hearing problems and ENT surgery.',
    image: '/images/ent-exam.jpg',
    overview:
      'Our ENT specialists treat ear, nose and throat conditions in adults and children, from ear infections and sinusitis to tonsillitis and hearing loss, with endoscopic examination and surgery when needed.',
    whoFor: ['Ear pain, discharge or hearing loss', 'Sinusitis and nasal blockage', 'Tonsillitis and throat infections', 'Snoring and voice problems'],
    expect: ['Endoscopic ENT examination', 'Audiometry (hearing tests)', 'Tonsillectomy and sinus surgery', 'Paediatric ENT care'],
  },
  {
    slug: 'psychiatry',
    icon: Brain,
    title: 'Psychiatry & Mental Health',
    short: 'Confidential care for anxiety, depression, sleep and addiction problems.',
    image: '/images/couple-home.jpg',
    overview:
      'Mental health is as important as physical health. Our psychiatrist and counsellors provide confidential, judgement-free assessment and treatment, combining medication and therapy where appropriate, and they involve families when it helps.',
    whoFor: ['Anxiety, stress and depression', 'Sleep problems', 'Alcohol and substance use', 'Emotional support after a difficult diagnosis'],
    expect: ['Private one-to-one consultation', 'Counselling and psychotherapy', 'Medication management', 'Family counselling'],
  },
  {
    slug: 'pain-management',
    icon: Activity,
    title: 'Pain Management',
    short: 'Specialised relief for chronic back, joint, nerve and cancer pain.',
    image: '/images/elder-gujarat.jpg',
    overview:
      'Living with constant pain affects every part of life. Our pain specialists identify the source of chronic pain and treat it with targeted medication, nerve blocks, injections and physiotherapy, so that patients can move and sleep better.',
    whoFor: ['Chronic back and neck pain', 'Knee and joint pain', 'Nerve pain and sciatica', 'Cancer-related pain'],
    expect: ['Comprehensive pain assessment', 'Image-guided injections and nerve blocks', 'Physiotherapy plans', 'Long-term pain follow-up'],
  },
  {
    slug: 'critical-care',
    icon: HeartPulse,
    title: 'Critical Care: ICU, ICCU & CCU',
    short: 'Fully equipped intensive care with round-the-clock specialist monitoring.',
    image: '/images/icu-monitor.jpg',
    overview:
      'Our fully equipped ICU, ICCU and CCU provide continuous monitoring and advanced life support for critically ill patients. Trained intensivists and nurses are present 24×7, and they work closely with every specialist department.',
    whoFor: ['Heart attacks and cardiac emergencies', 'Severe infections and sepsis', 'Post-operative critical care', 'Breathing difficulties needing ventilator support'],
    expect: ['Multi-parameter monitoring', 'Ventilator and life support', 'Cardiac monitoring in the ICCU/CCU', 'Regular family updates'],
  },
  {
    slug: 'emergency-trauma',
    icon: Ambulance,
    title: '24×7 Emergency & Ambulance',
    short: 'Round-the-clock emergency treatment and ambulance service across Ahmedabad.',
    image: '/images/ambulance.jpg',
    overview:
      'Emergencies don\'t wait. Our emergency department is open 24 hours a day, every day, with doctors on duty, an ambulance service and immediate access to the operation theatre, ICU and diagnostics.',
    whoFor: ['Accidents and trauma', 'Chest pain and stroke symptoms', 'High fever, breathlessness and poisoning', 'Obstetric emergencies'],
    expect: ['Immediate triage and stabilisation', 'Ambulance pick-up', 'Direct transfer to the OT or ICU', 'Coordination with your family'],
  },
  {
    slug: 'hiv-care-centre',
    icon: ShieldPlus,
    title: 'HIV Care Centre',
    short: 'Our centre of excellence for confidential HIV testing, ART, PrEP and 24×7 PEP.',
    image: '/images/hero-consultation.jpg',
    link: '/hiv-care',
  },
];

/* ------------------------------------------------------------------
 * HIV Care Centre services
 * ---------------------------------------------------------------- */
export const hivServices = [
  {
    slug: 'hiv-testing-counselling',
    icon: TestTube2,
    title: 'Confidential HIV Testing & Counselling',
    short: 'Same-day 4th-generation tests with pre- and post-test counselling in a private room.',
    image: '/images/consult-bp.jpg',
    overview:
      'Knowing your status is the first step to staying healthy. We offer walk-in and appointment-based HIV testing with a trained counsellor at your side before and after the test. Your results are shared only with you, in person or through a secure call. They are never sent by SMS or email without your consent.',
    whoFor: ['Anyone who has had unprotected sex or shared needles', 'Couples planning marriage or pregnancy', 'People with a partner living with HIV', 'Anyone who simply wants peace of mind'],
    expect: ['A private pre-test conversation, with no judgement and no lectures', 'A finger-prick rapid test (results in 20 minutes) or a 4th-gen lab test', 'Post-test counselling and a clear next step, whatever the result', 'Same-day linkage to treatment if the result is reactive'],
  },
  {
    slug: 'art-treatment',
    icon: Pill,
    title: 'ART Initiation & Management',
    short: 'Modern once-daily antiretroviral therapy started early, following NACO Test-and-Treat.',
    image: '/images/consult-stethoscope.jpg',
    overview:
      'Antiretroviral therapy (ART) lets people living with HIV live long, full lives. We follow the national Test-and-Treat approach: treatment begins as soon as possible after diagnosis, usually with a single, well-tolerated daily tablet such as a dolutegravir-based regimen. Your physician personalises therapy around your kidney and liver health, other medicines, pregnancy plans and lifestyle.',
    whoFor: ['People newly diagnosed with HIV', 'Patients wanting a second opinion or a regimen review', 'People with side-effects or treatment fatigue', 'Patients transferring care from another city or ART centre'],
    expect: ['Baseline tests: CD4, viral load, kidney and liver function, hepatitis B/C, TB screening', 'A clear explanation of your regimen and how to take it', 'Adherence support by phone and WhatsApp reminders (with your consent)', 'Follow-up visits at 2 weeks, 1 month, 3 months and then 6-monthly'],
  },
  {
    slug: 'viral-load-cd4',
    icon: Activity,
    title: 'Viral Load & CD4 Monitoring',
    short: 'Viral load, CD4, resistance testing and routine monitoring with quick reports.',
    image: '/images/lab-sikh-doctor.jpg',
    overview:
      'An undetectable viral load means your treatment is working and that you cannot pass HIV to a sexual partner (U=U). Our pathology department and partner laboratories run viral load, CD4 count and routine blood tests with quick turnaround, so your doctor can act on results without delay.',
    whoFor: ['Everyone on ART (routine 6–12 monthly monitoring)', 'Patients whose viral load has not become undetectable', 'People switching or simplifying treatment'],
    expect: ['HIV-1 RNA quantitative viral load', 'CD4/CD8 counts', 'Genotypic drug-resistance testing when indicated', 'Results explained in plain language by your doctor'],
  },
  {
    slug: 'prep',
    icon: ShieldCheck,
    title: 'PrEP: Pre-Exposure Prophylaxis',
    short: 'A daily or event-based pill that prevents HIV, with discreet 3-monthly follow-up.',
    image: '/images/couple-home.jpg',
    overview:
      'PrEP is a highly effective way to prevent HIV for people who are HIV-negative. Taken as prescribed, oral PrEP reduces the risk of getting HIV from sex by about 99%. We provide PrEP in line with the NACO National Technical Guidelines, and we welcome everyone, including gay, bisexual and transgender people, sex workers and serodiscordant couples.',
    whoFor: ['People whose partner is living with HIV and is not yet undetectable', 'People who do not always use condoms with new or multiple partners', 'People who have used PEP more than once', 'People who inject drugs'],
    expect: ['An HIV test, kidney function test and hepatitis B screen before starting', 'A prescription for daily or "2-1-1" event-based PrEP', 'Repeat HIV and STI tests every 3 months', 'Fully confidential, LGBTQ+-affirming care'],
  },
  {
    slug: 'pep',
    icon: Siren,
    title: 'PEP: 24×7 Emergency Prevention',
    short: 'Exposed in the last 72 hours? Start emergency HIV medicines today.',
    image: '/images/doctor-patient-clinic.jpg',
    overview:
      'Post-exposure prophylaxis (PEP) is a 28-day course of HIV medicines that can prevent infection after a possible exposure, such as condom breakage, sexual assault or a needle-stick injury. PEP works best when started as soon as possible, ideally within 2 hours and no later than 72 hours. Our emergency department provides PEP 24 hours a day, every day.',
    whoFor: ['Anyone with a possible HIV exposure in the last 72 hours', 'Survivors of sexual assault (with sensitive, trauma-informed care)', 'Healthcare workers with needle-stick or splash injuries'],
    expect: ['A rapid risk assessment and baseline HIV test', 'The first dose given on the spot', 'A 28-day course with side-effect support', 'Follow-up HIV tests at 6 weeks and 3 months'],
  },
  {
    slug: 'pptct-pregnancy',
    icon: Baby,
    title: 'HIV in Pregnancy (PPTCT)',
    short: 'Specialist care so that mothers living with HIV have healthy, HIV-free babies.',
    image: '/images/mother-child.jpg',
    overview:
      'With the right care, the chance of a mother passing HIV to her baby is less than 1%. Our Prevention of Parent-to-Child Transmission (PPTCT) programme brings together HIV physicians and our own obstetrics and paediatrics departments to look after you from planning a pregnancy through delivery, breastfeeding and your baby\'s early infant diagnosis.',
    whoFor: ['Women living with HIV who are pregnant or planning pregnancy', 'Serodiscordant couples who want a child', 'Newborns of mothers living with HIV'],
    expect: ['Pre-conception counselling and viral load optimisation', 'Joint antenatal care with our obstetricians', 'Infant prophylaxis and early infant diagnosis (EID) testing', 'Infant-feeding counselling and ongoing family support'],
  },
  {
    slug: 'oi-tb-coinfection',
    icon: Stethoscope,
    title: 'Opportunistic Infections & TB Co-infection',
    short: 'Expert diagnosis and treatment of TB, fungal and other HIV-related infections.',
    image: '/images/icu-monitor.jpg',
    overview:
      'People with advanced HIV can be vulnerable to infections such as tuberculosis, cryptococcal meningitis, pneumocystis pneumonia and toxoplasmosis. Our physicians screen for these early, provide preventive therapy (including TB preventive treatment), and manage complex drug interactions. They are backed by the hospital\'s ICU when intensive care is needed.',
    whoFor: ['People with a low CD4 count or advanced HIV disease', 'Patients with HIV and TB co-infection', 'People with hepatitis B or C alongside HIV'],
    expect: ['The advanced HIV disease package of screening and prophylaxis', 'TB screening at every visit', 'Inpatient and ICU care when needed', 'Coordination with our chest and medicine teams'],
  },
  {
    slug: 'sti-care',
    icon: Microscope,
    title: 'STI & Sexual Health Clinic',
    short: 'Discreet testing and treatment for syphilis, gonorrhoea, chlamydia, hepatitis and HPV.',
    image: '/images/lab-research.jpg',
    overview:
      'Sexual health is part of overall health. Our sexual health clinic offers confidential testing and treatment for sexually transmitted infections, hepatitis B vaccination and HPV vaccination, in a respectful, non-judgemental setting.',
    whoFor: ['Anyone with symptoms such as discharge, sores or pain', 'People starting a new relationship', 'PrEP users (for routine 3-monthly screening)'],
    expect: ['Syndromic and lab-based STI diagnosis', 'Same-day treatment for most infections', 'Confidential partner notification support', 'Hepatitis B and HPV vaccination'],
  },
  {
    slug: 'counselling-nutrition',
    icon: HandHeart,
    title: 'Counselling, Mental Health & Nutrition',
    short: 'Counsellors, our psychiatry team and dietitians who understand life with HIV.',
    image: '/images/couple-portrait.jpg',
    overview:
      'A diagnosis can bring fear, stigma and questions about relationships, work and family. Our counsellors, psychiatry department and dietitian support the whole person, not just the virus. Sessions are available in Gujarati, Hindi and English.',
    whoFor: ['People newly diagnosed and coming to terms with it', 'Anyone facing anxiety, depression or stigma', 'Families and partners who want to understand HIV'],
    expect: ['One-to-one and couples counselling', 'Disclosure support: when, how and whether to tell others', 'Personalised diet plans for weight, bone and heart health', 'Monthly peer-support circles'],
  },
  {
    slug: 'paediatric-hiv',
    icon: Users,
    title: 'Paediatric & Adolescent HIV',
    short: 'Child-friendly care and a teen clinic that supports growing up with HIV.',
    image: '/images/mother-kids.jpg',
    overview:
      'Children and adolescents living with HIV need care that grows with them. Together with our paediatrics department, the HIV Care Centre manages child-appropriate formulations and dosing, and helps young people take ownership of their treatment, education and relationships.',
    whoFor: ['Infants and children living with HIV', 'Adolescents moving to adult care', 'Parents and caregivers'],
    expect: ['Weight-based dosing and child-friendly formulations', 'Growth and development monitoring', 'Age-appropriate disclosure support', 'A Saturday teen clinic with peer mentors'],
  },
];

/* ------------------------------------------------------------------
 * About (from the hospital's About document, edited for clarity)
 * ---------------------------------------------------------------- */
export const about = {
  intro: [
    'Established in 2003, Reyansh Prime Multispecialty Hospital has been a trusted landmark of healthcare in Ahmedabad for over two decades. Excellent nursing care, well-equipped operation theatres and a dedicated team of doctors are the hallmarks of the hospital.',
    'We provide multispecialty healthcare and comprehensive treatment to international standards, with eminent consultants in their respective fields on our panel. Knee and hip replacement are among our key specialities, and our spine surgery centre is one of the most trusted in the city.',
    'Reyansh Prime is a 20-bed multispecialty hospital with a fully equipped ICU, ICCU and CCU, and emergency services. Our departments cover Obstetrics & Gynaecology, IVF, Orthopaedics (knee and hip replacement), Spine, Internal Medicine, Paediatrics, General Surgery, Dermatology, ENT, Psychiatry, Pain Management and Urology, along with a dedicated, centralised HIV Care Centre.',
    'The hospital has an in-house pharmacy and a well-equipped pathology department. We are organised to serve international patients, and we maintain a well-sanitised environment and a warm ambience to make you feel at home. Our team is well trained in pre-operative, intra-operative and post-operative care for patients undergoing surgery.',
    'We offer rooms for every need, from general wards to deluxe rooms, and health check-ups every day of the week. Reyansh Prime offers 24×7 emergency treatment and an ambulance service, and our patient care executives help with appointments and bookings, which can be confirmed by email, by phone or in person.',
  ],
  values:
    'We are committed to providing top-notch healthcare services with a focus on quality, safety and patient satisfaction.',
  vision:
    'Guided by excellence, Reyansh Prime Multispecialty Hospital will continually improve its hospital care services to become a premier medical centre, overcoming present challenges by building on its strengths and opportunities while learning from and honouring its past.',
  mission:
    'To provide the highest quality of tertiary hospital care to our community, and compassionate care that responds to the needs and values of our patients, their families, our physicians and our employees. We achieve this through dedicated medical care and ongoing research.',
};

export const values = [
  { icon: Award, title: 'Quality', text: 'Treatment of international standards, delivered by experienced consultants.' },
  { icon: ShieldCheck, title: 'Safety', text: 'Strict infection control and a well-sanitised environment in every ward and theatre.' },
  { icon: HandHeart, title: 'Compassion', text: 'Warm, respectful care that makes every patient feel at home.' },
  { icon: BadgeCheck, title: 'Patient satisfaction', text: 'Clear communication and support for families at every step.' },
];

export const facilities = [
  { icon: BedDouble, title: '20-bed hospital', text: 'Rooms for every need, from general wards to deluxe rooms.' },
  { icon: HeartPulse, title: 'ICU, ICCU & CCU', text: 'Fully equipped critical care units with 24×7 monitoring.' },
  { icon: Scissors, title: 'Modern operation theatres', text: 'Well-equipped OTs for orthopaedic, spine, gynaecological and general surgery.' },
  { icon: FlaskConical, title: 'Pathology laboratory', text: 'In-house diagnostics for quick, reliable reports.' },
  { icon: Pill, title: 'In-house pharmacy', text: 'Medicines available around the clock.' },
  { icon: Ambulance, title: '24×7 Emergency & ambulance', text: 'Immediate emergency treatment and ambulance pick-up.' },
  { icon: CreditCard, title: 'Cashless insurance & TPA', text: 'Support with health insurance, TPA and government schemes.' },
  { icon: Video, title: 'Teleconsultation', text: 'Follow-up consultations by secure video call.' },
];

export const whyUs = [
  { icon: Award, title: 'Experienced specialists', text: 'Eminent consultants across 14+ specialities, with over two decades of trust in Ahmedabad.' },
  { icon: Building2, title: 'Modern infrastructure', text: 'Well-equipped OTs, ICU/ICCU/CCU, pathology and pharmacy under one roof.' },
  { icon: Clock, title: '24×7 emergency care', text: 'Round-the-clock emergency, critical care and ambulance services.' },
  { icon: CreditCard, title: 'Insurance & cashless', text: 'Most health insurance plans and TPAs are accepted, with help from our billing desk.' },
  { icon: Lock, title: 'Privacy & dignity', text: 'Confidential care in every department, especially at our HIV Care Centre.' },
  { icon: MapPin, title: 'Easy to reach', text: 'On the Gandhinagar Highway near Geeta Mandir, with easy access from across Ahmedabad and Gandhinagar.' },
];

// ILLUSTRATIVE FIGURES: confirm before launch.
export const stats = [
  { value: new Date().getFullYear() - 2003, suffix: '+', label: 'Years of trusted care (since 2003)' },
  { value: 20, suffix: '', label: 'Beds incl. ICU, ICCU & CCU' },
  { value: 14, suffix: '+', label: 'Medical specialities' },
  { value: 24, suffix: '×7', label: 'Emergency & ambulance' },
];

export const quickActions = [
  { icon: Siren, title: '24×7 Emergency', text: 'Immediate care, day or night', href: site.emergencyHref, cta: 'Call now', accent: true },
  { icon: Ambulance, title: 'Ambulance', text: 'Fast pick-up across Ahmedabad', href: site.ambulanceHref, cta: 'Call ambulance' },
  { icon: CalendarCheck, title: 'Book Appointment', text: 'OPD with our specialists', to: '/contact#appointment', cta: 'Book now' },
  { icon: ClipboardCheck, title: 'Health Check-up', text: 'Preventive packages every day', to: '/#packages', cta: 'View packages' },
];

// PLACEHOLDER PRICES: confirm before launch.
export const healthPackages = [
  { name: 'Basic Health Check', price: '₹1,499', tests: ['Complete blood count', 'Blood sugar (fasting)', 'Lipid profile', 'Urine routine', 'Physician consultation'] },
  { name: 'Executive Health Check', price: '₹3,999', featured: true, tests: ['Everything in Basic', 'Liver & kidney function', 'Thyroid profile', 'HbA1c', 'ECG & chest X-ray', 'Dietitian consultation'] },
  { name: 'Women\'s Wellness', price: '₹3,499', tests: ['CBC, thyroid & vitamin D', 'Pap smear', 'Breast examination', 'Pelvic ultrasound', 'Gynaecologist consultation'] },
  { name: 'Senior Citizen Check', price: '₹4,499', tests: ['Executive package tests', 'Bone density (calcium, vitamin D)', 'PSA (men)', '2D Echo', 'Orthopaedic consultation'] },
];

/* ------------------------------------------------------------------
 * Doctors: FICTIONAL PLACEHOLDERS (stock photos). Replace before launch.
 * ---------------------------------------------------------------- */
export const doctors = [
  {
    // Real doctor (details supplied by the hospital)
    name: 'Dr. Keyuriben',
    role: 'Consultant – Department of Psychiatry',
    quals: 'MD (Psychiatry)',
    image: '/images/dr-keyuriben.jpg',
    link: '/specialities/psychiatry',
  },
  {
    name: 'Dr. Harsh Vyas',
    role: 'Medical Director & Senior Physician (HIV Medicine)',
    quals: 'MD (Medicine), Fellowship in HIV Medicine',
    exp: '22+ years',
    image: '/images/dr-1.jpg?v=3',
    focus: ['HIV & ART', 'Infectious diseases', 'Critical care'],
    opd: 'Mon – Sat, 10 AM – 2 PM',
    langs: 'English, Hindi, Gujarati',
  },
  {
    name: 'Dr. Meenakshi Patel',
    role: 'Consultant – Obstetrics, Gynaecology & IVF',
    quals: 'MS (Obstetrics & Gynaecology), Fellowship in Reproductive Medicine',
    exp: '16+ years',
    image: '/images/dr-2.jpg?v=3',
    focus: ['High-risk pregnancy', 'IVF & IUI', 'Laparoscopic gynaecology'],
    opd: 'Mon – Sat, 11 AM – 5 PM',
    langs: 'English, Hindi, Gujarati',
  },
  {
    name: 'Dr. Arjun Mehta',
    role: 'Consultant – Orthopaedics & Joint Replacement',
    quals: 'MS (Orthopaedics), Fellowship in Arthroplasty',
    exp: '14+ years',
    image: '/images/dr-3.jpg?v=3',
    focus: ['Knee replacement', 'Hip replacement', 'Sports injuries'],
    opd: 'Mon – Sat, 5 PM – 8 PM',
    langs: 'English, Hindi, Gujarati',
  },
  {
    name: 'Dr. Ritu Shah',
    role: 'Head – Pathology',
    quals: 'MD (Pathology)',
    exp: '12+ years',
    image: '/images/dr-4.jpg?v=4',
    focus: ['Clinical pathology', 'Haematology', 'Quality assurance'],
    opd: 'Lab consultations by appointment',
    langs: 'English, Hindi, Gujarati',
  },
  {
    name: 'Dr. Vikram Desai',
    role: 'Consultant – Spine Surgery & Pain Management',
    quals: 'MS (Orthopaedics), Fellowship in Spine Surgery',
    exp: '12+ years',
    image: '/images/dr-5.jpg?v=4',
    focus: ['Slipped disc', 'Minimally invasive spine surgery', 'Chronic pain'],
    opd: 'Tue – Sun, 4 PM – 8 PM',
    langs: 'English, Hindi, Gujarati',
  },
  {
    name: 'Dr. Aman Trivedi',
    role: 'Consultant – Internal Medicine',
    quals: 'MD (General Medicine)',
    exp: '9+ years',
    image: '/images/dr-6.jpg?v=3',
    focus: ['Diabetes & hypertension', 'Infections', 'Preventive health'],
    opd: 'Mon – Sat, 9 AM – 1 PM',
    langs: 'English, Hindi, Gujarati',
  },
];

/* Featured specialist (details supplied by the hospital) */
export const featuredDoctor = {
  name: 'Dr. Vishnu Dutt',
  role: 'Rheumatologist',
  quals: 'MBBS, MD (General Medicine), DNB (Rheumatology)',
  exp: '24 years of experience',
  specialistExp: '15 years as a specialist',
  rating: '98% patient satisfaction (1,442 patients)',
  image: '/images/dr-vishnu-dutt.jpg',
  bio: [
    'Dr. Vishnu Dutt is one of very few qualified rheumatologists in Gujarat, and the first in the state to earn a DNB in Rheumatology.',
    'His aim is to build a state-of-the-art centre for arthritis care in Gujarat. He is also an Editorial Board Member of the Journal of Surgical Oncology.',
  ],
  highlights: ['First DNB Rheumatologist of Gujarat', 'Medical registration verified', 'Arthritis & joint care', 'Editorial Board Member, Journal of Surgical Oncology'],
};

/* ------------------------------------------------------------------ */
export const testimonials = [
  { quote: 'My mother had both knees replaced here. She was walking with support the next day, and today she goes to the temple on her own. The physiotherapy team was wonderful.', name: 'Rakesh Patel', meta: 'Orthopaedics · Chandkheda' },
  { quote: 'After years of trying, the IVF team gave us our son. They explained everything honestly and were there for us at every step.', name: 'Krupa & Nirav', meta: 'IVF & Fertility · Gandhinagar' },
  { quote: 'We rushed in at 2 AM with our daughter\'s high fever. The emergency doctor and paediatrician were calm and quick. We felt in safe hands.', name: 'Hetal Shah', meta: 'Paediatrics · Motera' },
  { quote: 'At the HIV Care Centre nobody judged me. Two years on, my viral load is undetectable and my life is completely normal.', name: 'Name withheld', meta: 'HIV Care Centre · Ahmedabad' },
];

export const faqs = [
  { q: 'What medical services does Reyansh Prime offer?', a: 'We are a 20-bed multispecialty hospital offering Obstetrics & Gynaecology, IVF, Orthopaedics and joint replacement, Spine Surgery, Internal Medicine, Paediatrics, General & Laparoscopic Surgery, Urology, Dermatology, ENT, Psychiatry and Pain Management, along with ICU/ICCU/CCU, 24×7 emergency services and a dedicated HIV Care Centre.' },
  { q: 'How can I book an appointment?', a: 'You can book online using the appointment form, call our front desk, message us on WhatsApp, or visit the hospital in person. Our patient care executive will confirm your slot by phone or email.' },
  { q: 'Do you accept health insurance and cashless treatment?', a: 'Yes. We accept most health insurance plans and TPAs for cashless treatment, and our billing desk helps with pre-authorisation and claims. Please bring your insurance card and photo ID.' },
  { q: 'Are emergency and ambulance services available 24×7?', a: 'Yes. Our emergency department, ICU and ambulance service operate 24 hours a day, 7 days a week, including holidays.' },
  { q: 'Do you offer health check-up packages?', a: 'Yes. Preventive health check-ups are available every day of the week, with packages for adults, women and senior citizens.' },
  { q: 'What room options are available?', a: 'We offer general wards, semi-private rooms and deluxe rooms, so you can choose what suits your comfort and budget.' },
];

export const hivFaqs = [
  { q: 'Will my HIV test result be kept confidential?', a: 'Yes, always. Under the HIV and AIDS (Prevention and Control) Act, 2017, nobody can be forced to disclose their HIV status, and we cannot share your information without your written consent. We use coded IDs, and your results are discussed with you privately.' },
  { q: 'How soon after a risk can I get tested?', a: 'A 4th-generation lab test can detect most infections about 6 weeks after exposure, and an RNA PCR test can detect it around 10–14 days after. If the exposure was within the last 72 hours, come in immediately for PEP rather than waiting to test.' },
  { q: 'Is HIV still a death sentence?', a: 'No. With modern ART, a person diagnosed today and on treatment can expect a near-normal lifespan. Most of our patients take one tablet a day, work, marry and have children.' },
  { q: 'What does Undetectable = Untransmittable (U=U) mean?', a: 'When a person living with HIV takes ART and keeps an undetectable viral load for at least 6 months, they do not transmit HIV to sexual partners. This is backed by large international studies and endorsed by WHO.' },
  { q: 'Do I need a referral or my real name to visit?', a: 'No referral is needed. For a screening test, you may register with any name. For prescriptions and treatment records, we need valid ID, which is kept securely and confidentially.' },
  { q: 'Can a woman living with HIV have a healthy baby?', a: 'Yes. With ART and our PPTCT programme, run with our own obstetrics and paediatrics departments, the risk of a baby being born with HIV falls to less than 1%.' },
  { q: 'Do you offer teleconsultations?', a: 'Yes. Follow-up visits, report reviews and counselling sessions can be done over a secure video call.' },
  { q: 'What does treatment cost?', a: 'Costs depend on the regimen and the tests needed. We are also happy to guide you on free ART available through government ART centres in Gujarat, and we can coordinate care with them if you prefer.' },
];

export const testingOptions = [
  { name: 'Rapid HIV Antibody Test', time: '20 minutes', window: '~12 weeks', note: 'Finger-prick screening test. Reactive results are always confirmed in the lab.' },
  { name: '4th-Gen HIV Ag/Ab (CLIA/ELISA)', time: 'Same day', window: '~6 weeks', note: 'Detects both antigen and antibodies, so it picks up infection earlier. Our recommended screening test.' },
  { name: 'HIV-1 RNA PCR (Qualitative)', time: '24–48 hours', window: '10–14 days', note: 'Used for early detection after a high-risk exposure, and for infant diagnosis.' },
  { name: 'HIV Viral Load (Quantitative)', time: '24–48 hours', window: 'n/a', note: 'Measures how much virus is in the blood, to check that ART is working.' },
  { name: 'CD4 Count', time: 'Same day', window: 'n/a', note: 'Measures immune strength and guides preventive treatment for infections.' },
  { name: 'Genotypic Resistance Test', time: '7–10 days', window: 'n/a', note: 'Identifies drug-resistant HIV when treatment is not fully suppressing the virus.' },
];

export const myths = [
  { myth: 'HIV spreads by hugging, sharing food or using the same toilet.', fact: 'HIV is not spread through casual contact, saliva, sweat, mosquitoes or sharing utensils.' },
  { myth: 'You can tell if someone has HIV by looking at them.', fact: 'Most people with HIV look and feel completely healthy. The only way to know is a test.' },
  { myth: 'People with HIV cannot marry or have children.', fact: 'With treatment, people living with HIV marry, have HIV-negative children and live full lives.' },
  { myth: 'If I am on treatment, I can stop once I feel better.', fact: 'ART must be taken every day for life. Stopping lets the virus rebound and become resistant.' },
  { myth: 'HIV only affects certain communities.', fact: 'HIV can affect anyone. Prevention and testing are for everyone who is sexually active.' },
];

export const articles = [
  { title: 'Newly diagnosed? Your first 30 days', excerpt: 'What to expect at your first visits, which tests you will need and how to take care of your mind as well as your body.', image: '/images/consult-bp.jpg', tag: 'Getting started', read: '6 min' },
  { title: 'U=U explained: what undetectable really means', excerpt: 'The science behind "Undetectable = Untransmittable", and why it is changing relationships and reducing stigma.', image: '/images/couple-home.jpg', tag: 'Science', read: '5 min' },
  { title: 'Eating well with HIV: a Gujarati thali guide', excerpt: 'Simple, home-style meal ideas that support immunity, bone health and a healthy weight on ART.', image: '/images/family-home.jpg', tag: 'Nutrition', read: '7 min' },
  { title: 'Ageing well with HIV', excerpt: 'Heart health, bone density and regular screening for people living with HIV after 50.', image: '/images/elder-gujarat.jpg', tag: 'Living well', read: '5 min' },
];

export const rights = [
  'No one can be discriminated against in employment, education, healthcare, housing or insurance because of their HIV status.',
  'An HIV test or treatment needs your informed consent. No one can force you to test.',
  'Your HIV status cannot be disclosed without your written consent, except under narrow court orders.',
  'Every establishment with 100+ employees must appoint a complaints officer for HIV-related grievances.',
];

export const hivPromise = [
  { icon: Lock, title: '100% Confidential', text: 'Coded patient IDs, private consultation rooms and strict compliance with the HIV/AIDS Act, 2017.' },
  { icon: HandHeart, title: 'Judgement-free care', text: 'Every gender, sexuality, profession and background is welcome. Our team is trained in stigma-free, LGBTQ+-affirming care.' },
  { icon: BadgeCheck, title: 'Guideline-based', text: 'Treatment protocols follow the latest NACO and WHO guidelines.' },
  { icon: Clock, title: '24×7 PEP', text: 'Emergency HIV prevention any time, through our 24×7 emergency department.' },
];
