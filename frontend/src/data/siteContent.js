// ---------------------------------------------------------------------------
// SINGLE SOURCE FOR REPLACEABLE CONTENT
// ---------------------------------------------------------------------------
// The client has not supplied official text or images yet. Everything marked
// "Placeholder" below is sample content only. To go live, replace the values
// in this file; no page component needs to change for most copy/image edits.
//
// Images are temporary, publicly accessible Unsplash images. Replace each URL
// with a client-supplied image when it is available.
// ---------------------------------------------------------------------------

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const site = {
  name: 'Gondwana Engineering',
  tagline: 'Laboratory equipment and engineering solutions',
  // Placeholder: replace with the real logo file when supplied.
  logoText: 'Gondwana',
  logoAccent: 'Engineering',
  // Placeholders: replace with confirmed client details before launch.
  email: 'info@gondwana-engineering.example',
  phone: '+00 000 000 0000',
  address: '[Address to be confirmed by the client]',
  workingHours: '[Working hours to be confirmed]',
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
    x: '#'
  }
}

export const images = {
  hero: unsplash('photo-1581091226825-a6a2a5aee158'),
  heroAlt: 'Engineer reviewing technical work in a laboratory setting',
  introduction: unsplash('photo-1532187863486-abf9dbad1b69', 1200),
  introductionAlt: 'Laboratory professional working with scientific equipment',
  showcase: unsplash('photo-1504328345606-18bbc8c9d7d1'),
  showcaseAlt: 'Industrial engineering equipment in a workshop',
  aboutMain: unsplash('photo-1581092160562-40aa08e78837', 1200),
  aboutMainAlt: 'Engineers discussing a technical installation',
  aboutSecondary: unsplash('photo-1576086213369-97a306d36557', 1200),
  aboutSecondaryAlt: 'Laboratory microscope in use',
  servicesHero: unsplash('photo-1581094794329-c8112a89af12'),
  servicesHeroAlt: 'Engineer in protective equipment at an industrial site',
  productsHero: unsplash('photo-1532094349884-543bc11b234d'),
  productsHeroAlt: 'Laboratory glassware and research equipment',
  contactHero: unsplash('photo-1581092918056-0c4c3acd3789'),
  contactHeroAlt: 'Engineer using a tablet during a site inspection'
}

export const services = [
  {
    id: 'laboratory-equipment',
    title: 'Laboratory Equipment Supply',
    short: 'A curated range of laboratory instruments and consumables, selected for reliability and everyday laboratory use.',
    detail: 'Placeholder description: replace with the confirmed equipment range, brands and supply process.',
    image: unsplash('photo-1532187863486-abf9dbad1b69', 1200),
    imageAlt: 'Laboratory bench with scientific equipment',
    includes: ['Sample product range and specifications', 'Advice on suitability for the intended use', 'Delivery and handover support']
  },
  {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning',
    short: 'Careful installation, setup and testing so equipment is ready for reliable use from day one.',
    detail: 'Placeholder description: replace with the confirmed installation process, site requirements and handover steps.',
    image: unsplash('photo-1581092160562-40aa08e78837', 1200),
    imageAlt: 'Engineers installing technical equipment',
    includes: ['Site preparation guidance', 'Installation and initial testing', 'User handover and basic orientation']
  },
  {
    id: 'calibration-maintenance',
    title: 'Calibration & Maintenance',
    short: 'Planned servicing and calibration to help keep instruments accurate, safe and in good working order.',
    detail: 'Placeholder description: replace with the confirmed service plans, intervals and reporting format.',
    image: unsplash('photo-1576086213369-97a306d36557', 1200),
    imageAlt: 'Close view of a laboratory microscope',
    includes: ['Routine maintenance visits', 'Calibration checks and records', 'Fault diagnosis and repair support']
  },
  {
    id: 'engineering-solutions',
    title: 'Engineering Solutions & Consultancy',
    short: 'Practical technical advice for laboratory layouts, workflows and equipment selection.',
    detail: 'Placeholder description: replace with the confirmed consultancy scope and typical project stages.',
    image: unsplash('photo-1581091226825-a6a2a5aee158', 1200),
    imageAlt: 'Engineer reviewing a technical plan',
    includes: ['Needs assessment and equipment planning', 'Laboratory layout and workflow advice', 'Technical documentation support']
  },
  {
    id: 'technical-training',
    title: 'Technical Training',
    short: 'Clear, practical training so teams can operate and care for their equipment with confidence.',
    detail: 'Placeholder description: replace with the confirmed training topics, formats and audience.',
    image: unsplash('photo-1581093458791-9f3c3900df4b', 1200),
    imageAlt: 'Professional working with a laptop in a technical setting',
    includes: ['Operator training sessions', 'Routine care and safe-use guidance', 'Reference material for the team']
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    short: 'Ongoing support after delivery, including spare parts guidance and technical assistance.',
    detail: 'Placeholder description: replace with the confirmed support hours, response process and parts service.',
    image: unsplash('photo-1581092918056-0c4c3acd3789', 1200),
    imageAlt: 'Engineer checking equipment on site',
    includes: ['Technical assistance and troubleshooting', 'Spare parts and consumables guidance', 'Follow-up after installation']
  }
]

export const productCategories = [
  'All products',
  'Analytical instruments',
  'General laboratory',
  'Life science',
  'Safety & storage'
]

export const products = [
  {
    id: 'analytical-balance',
    name: '[Sample] Analytical Balance',
    category: 'Analytical instruments',
    description: 'Placeholder description: a precision balance for routine laboratory weighing. Replace with the real model, range and accuracy.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1532094349884-543bc11b234d', 1200),
    imageAlt: 'Laboratory glassware on a bench'
  },
  {
    id: 'benchtop-centrifuge',
    name: '[Sample] Benchtop Centrifuge',
    category: 'General laboratory',
    description: 'Placeholder description: a benchtop centrifuge for routine sample separation. Replace with the real model and rotor options.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1579154204601-01588f351e67', 1200),
    imageAlt: 'Laboratory equipment in a research setting'
  },
  {
    id: 'laboratory-microscope',
    name: '[Sample] Laboratory Microscope',
    category: 'Life science',
    description: 'Placeholder description: a laboratory microscope for routine observation and analysis. Replace with the real model and optics.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1576086213369-97a306d36557', 1200),
    imageAlt: 'Laboratory microscope'
  },
  {
    id: 'spectrophotometer',
    name: '[Sample] Spectrophotometer',
    category: 'Analytical instruments',
    description: 'Placeholder description: an instrument for absorbance measurement in routine analysis. Replace with the real model and wavelength range.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1532187863486-abf9dbad1b69', 1200),
    imageAlt: 'Scientist working in a laboratory'
  },
  {
    id: 'laboratory-incubator',
    name: '[Sample] Laboratory Incubator',
    category: 'Life science',
    description: 'Placeholder description: a controlled-temperature incubator for laboratory cultures. Replace with the real model and temperature range.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1581093458791-9f3c3900df4b', 1200),
    imageAlt: 'Professional working in a technical laboratory'
  },
  {
    id: 'autoclave',
    name: '[Sample] Autoclave',
    category: 'Safety & storage',
    description: 'Placeholder description: steam sterilisation equipment for laboratory use. Replace with the real model, capacity and cycle options.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial equipment in a facility'
  },
  {
    id: 'fume-hood',
    name: '[Sample] Fume Hood',
    category: 'Safety & storage',
    description: 'Placeholder description: a fume hood for safer handling of laboratory materials. Replace with the real model and dimensions.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1581094794329-c8112a89af12', 1200),
    imageAlt: 'Engineer in protective equipment'
  },
  {
    id: 'ph-meter',
    name: '[Sample] pH Meter',
    category: 'Analytical instruments',
    description: 'Placeholder description: a benchtop pH meter for routine measurement. Replace with the real model, accuracy and electrode options.',
    specification: 'Specification to be confirmed by the client.',
    image: unsplash('photo-1581092160562-40aa08e78837', 1200),
    imageAlt: 'Engineers discussing laboratory equipment'
  }
]

export const whyChooseUs = [
  {
    title: 'Professional approach',
    text: 'Clear communication, documented work and a focus on getting the details right, from first enquiry to handover.'
  },
  {
    title: 'Quality focus',
    text: 'Equipment and services are selected and checked with reliability and everyday laboratory use in mind.'
  },
  {
    title: 'Technical expertise',
    text: 'Practical engineering and laboratory knowledge applied to equipment selection, installation and support.'
  },
  {
    title: 'Customer support',
    text: 'Straightforward after-sales help, so questions about operation, care and parts are easy to resolve.'
  }
]

export const values = [
  { title: 'Professionalism', text: 'Placeholder: replace with the client-approved wording for this value.' },
  { title: 'Quality', text: 'Placeholder: replace with the client-approved wording for this value.' },
  { title: 'Reliability', text: 'Placeholder: replace with the client-approved wording for this value.' },
  { title: 'Customer focus', text: 'Placeholder: replace with the client-approved wording for this value.' }
]
