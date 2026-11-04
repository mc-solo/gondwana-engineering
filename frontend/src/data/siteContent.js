// ---------------------------------------------------------------------------
// SINGLE SOURCE FOR REPLACEABLE CONTENT
// ---------------------------------------------------------------------------
// Source of truth: Brief_Company_Profile__Geotechnical.docx, supplied by the
// user on 2026-11-04. Only facts from that profile are stated as company
// facts below. Anything not in the profile is omitted or clearly marked
// "[To be confirmed]".
//
// No company slogan is given in the profile, so no slogan is invented here.
// No company email address or social media link is given in the profile, so
// those fields are marked to be confirmed instead of using a made-up address.
// The laboratory's ISO/IEC 17025 accreditation is a stated goal in the
// profile, not a certification, so it is never presented as certified.
// Images: head-office, hero-drilling and materials-lab are photographs from
// the supplied profile document. The home hero photograph is a representative
// Pexels photograph (see profileImages.js for its source page), not a
// company photograph. All other images are representative professional
// photographs, not claimed to be company photographs.
// ---------------------------------------------------------------------------

import { heroDrillingData as heroDrilling, headOfficeData as headOffice, materialsLabData as materialsLab, heroPinData as heroPin } from '../assets/profileImages.js'

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const site = {
  name: 'Gondwana Engineering',
  fullName: 'Gondwana Engineering Private Limited Company (PLC)',
  // Factual descriptor from the profile's service list, not a slogan.
  // The profile gives no slogan, so none is claimed.
  description: 'Civil engineering, geotechnical investigation, highway design and water well drilling.',
  // Verified contact details from the profile, section 1.1.
  phone: '+251-114-407-468 / +251-911-202-223',
  phonePrimary: '+251-911-202-223',
  fax: '+251-114-407-469',
  address: 'Near Saris Telecommunication, Nifas Silk Lafto Sub city, Woreda 09, House No. 096, Addis Ababa, Ethiopia',
  addressShort: 'Near Saris Telecommunication, Addis Ababa',
  email: '[Email to be confirmed]',
  certification: 'ISO 9001:2015 Certified Company'
}

export const images = {
  hero: heroPin,
  heroAlt: 'Four engineers gathered around a blueprint at a construction site, demo photograph from Adobe Stock via Pinterest',
  introduction: headOffice,
  introductionAlt: 'Gondwana Engineering head office building, from the company profile',
  showcase: heroDrilling,
  showcaseAlt: 'A drilling rig at a site investigation, from the company profile',
  aboutMain: headOffice,
  aboutMainAlt: 'Gondwana Engineering head office building, from the company profile',
  aboutSecondary: materialsLab,
  aboutSecondaryAlt: 'Materials testing work in the company laboratory, from the company profile',
  servicesHero: heroDrilling,
  servicesHeroAlt: 'A drilling rig at a site investigation, from the company profile',
  productsHero: materialsLab,
  productsHeroAlt: 'Materials testing work in the company laboratory, from the company profile',
  contactHero: headOffice,
  contactHeroAlt: 'Gondwana Engineering head office building, from the company profile',
  projectsHero: heroDrilling,
  projectsHeroAlt: 'A drilling rig at a site investigation, from the company profile'
}

export const company = {
  overview:
    'Gondwana Engineering Private Limited Company (PLC) is a private limited company registered and licensed to conduct a wide spectrum of services in civil engineering. It is a multi-disciplinary firm serving individuals, non-governmental organisations and governmental institutions, with over 60 permanent professional and sub-professional staff, most of whom hold M.Sc. degrees.',
  vision:
    'To become one of the leading companies in the areas of its professional involvement, recognised as a consultant of choice and one of the most prestigious civil engineering companies, particularly in design and supervision of highways, roads and geotechnical services in Ethiopia and the region, growing in an innovative and environmentally friendly way.',
  mission:
    'Providing superior services in highway design and supervision, foundation investigation for dams, buildings, factories, bridges and highways, laboratory testing, production of testing appliances, ground investigation and drilling of shallow and deep water wells, that meet or exceed customers’ expectations.',
  goals: [
    'Increase the number of skilled workers, especially in the Design, Geotechnical and Water Well Drilling departments, by increasing the number of B.Sc. and M.Sc. holders.',
    'Provide a good working environment suitable for innovation.',
    'Increase the leadership skills of department, division and unit heads.',
    'Accredit the laboratory with ISO/IEC 17025 standard (a stated goal, not yet presented as a certification).',
    'Strengthen and expand the laboratory service with state-of-the-art equipment.'
  ],
  staff:
    'Over 60 permanent professional and sub-professional staff, including geotechnical, structural and highway engineers, materials engineers, hydrologists, GIS experts, laboratory technicians, surveyors, drillers and machinists. Most staff have over six years of experience.',
  facilities:
    'A head office in Addis Ababa with a design studio, soil laboratory, workshop, display room and administrative offices, plus its own drilling rigs, survey equipment and transport fleet.'
}

export const services = [
  {
    id: 'geotechnical-investigation',
    title: 'Geotechnical Investigation and Core Drilling',
    short: 'Foundation investigations and bearing capacity analysis for buildings, bridges, dams, factories and tunnels.',
    detail: 'Foundation investigations and bearing capacity analysis through test pitting, rotary conventional and structural drilling, in-situ and laboratory testing.',
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile',
    includes: ['Test pitting and rotary core drilling', 'In-situ testing, including SPT', 'Laboratory testing and bearing capacity analysis']
  },
  {
    id: 'highway-bridge-design',
    title: 'Highway and Bridge Design',
    short: 'Road design from planning through completion and maintenance, and design of all kinds of highway bridges.',
    detail: 'Highways, rural and feeder roads, and urban and compound roads, in all types of terrain. Bridge design, inspection, condition surveys, maintenance and management.',
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial engineering equipment in a facility',
    includes: ['Highways, rural, feeder and urban roads', 'Bridge design and condition surveys', 'Inspection and evaluation of existing roads']
  },
  {
    id: 'land-survey-gis',
    title: 'Land Survey and GIS',
    short: 'Route location, topographic surveys, cadastral mapping and Geographic Information Systems.',
    detail: 'Efficient and advanced equipment for route location, topographic surveys and data processing, plus cadastral mapping and GIS applied to different sectors.',
    image: unsplash('photo-1581091226825-a6a2a5aee158', 1200),
    imageAlt: 'Engineer reviewing technical work',
    includes: ['Route location and topographic surveys', 'Cadastral mapping', 'GIS services for different sectors']
  },
  {
    id: 'geophysical-assessment',
    title: 'Geophysical Assessment',
    short: 'Geophysical investigation, engineering geological mapping and landslide assessment.',
    detail: 'Geophysical assessment as listed in the company profile, including seismic and electrical resistivity investigation, engineering geological mapping and landslide assessment where a project requires it.',
    image: unsplash('photo-1581092160562-40aa08e78837', 1200),
    imageAlt: 'Engineers discussing a technical investigation',
    includes: ['Seismic and electrical resistivity investigation', 'Engineering geological mapping', 'Landslide assessment']
  },
  {
    id: 'water-well-drilling',
    title: 'Water Well Drilling and Construction',
    short: 'Drilling, rehabilitation and construction of shallow and deep water wells.',
    detail: 'With various capacity drilling rigs owned by the company, water wells can be drilled and rehabilitated from 6 to 14 inches in diameter up to 300 metres in depth.',
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile',
    includes: ['Shallow and deep water well drilling', 'Well rehabilitation and construction', 'Company-owned drilling rigs of various capacities']
  },
  {
    id: 'supervision-contract-administration',
    title: 'Construction Supervision and Contract Administration',
    short: 'Contract administration, construction supervision and tender document preparation.',
    detail: 'Contract administration and construction supervision, with tender document preparation, as listed in the company profile.',
    image: unsplash('photo-1581094794329-c8112a89af12', 1200),
    imageAlt: 'Engineer in protective equipment at a site',
    includes: ['Contract administration', 'Construction supervision', 'Tender document preparation']
  },
  {
    id: 'pavement-materials-investigation',
    title: 'Pavement and Materials Investigation',
    short: 'Pavement design, condition surveys and construction material investigation and location.',
    detail: 'Soil survey and sampling for new, upgrading and rehabilitation road projects, pavement condition survey and evaluation, pavement thickness design for new, upgrading, rehabilitation and airfield projects, and construction material investigation and location.',
    image: unsplash('photo-1504307651254-35680f356dfd', 1200),
    imageAlt: 'Road construction work',
    includes: ['Pavement design and thickness design', 'Pavement condition survey and evaluation', 'Soil survey, sampling and material investigation']
  },
  {
    id: 'materials-testing-workshop',
    title: 'Materials Testing Laboratory and Workshop',
    short: 'A well-established soil laboratory and a workshop producing laboratory accessories and bridge steel bearings.',
    detail: 'The soil laboratory carries out a variety of tests related to civil engineering construction, with testing of construction materials, analysis and interpretation of results. The workshop produces laboratory accessories and steel bearings for bridges.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile',
    includes: ['Construction materials testing and analysis', 'Workshop-produced laboratory accessories', 'Bridge steel bearings for spans up to 24 metres']
  },
  {
    id: 'specialized-training',
    title: 'Specialized Training',
    short: 'Specialized training services in the company’s major areas of professional involvement.',
    detail: 'Specialized training services in its major areas of professional involvement, as listed in the company profile. Training topics and formats are to be confirmed for a specific engagement.',
    image: unsplash('photo-1581093458791-9f3c3900df4b', 1200),
    imageAlt: 'Professional working in a technical setting',
    includes: ['Training in major areas of professional involvement', 'Topics and formats confirmed per engagement']
  },
  {
    id: 'electromechanical-works',
    title: 'Electromechanical Works',
    short: 'Electromechanical works, as listed in the company profile.',
    detail: 'Electromechanical works are listed among the company’s professional services in the profile. Scope for a specific engagement is to be confirmed.',
    image: unsplash('photo-1581092918056-0c4c3acd3789', 1200),
    imageAlt: 'Engineer checking equipment on site',
    includes: ['Scope confirmed per engagement']
  },
  {
    id: 'natural-resources-rural-development',
    title: 'Natural Resources and Rural Development Studies',
    short: 'Natural resources and rural development studies, as listed in the company profile.',
    detail: 'Natural resources and rural development studies are listed among the company’s professional services in the profile. Scope for a specific study is to be confirmed.',
    image: unsplash('photo-1532187863486-abf9dbad1b69', 1200),
    imageAlt: 'Laboratory work in a research setting',
    includes: ['Scope confirmed per study']
  }
]

export const productCategories = [
  'All products',
  'Compaction and CBR',
  'Density and sampling',
  'Aggregate testing',
  'Bridge bearings'
]

export const products = [
  {
    id: 'cbr-molds',
    name: 'CBR Molds, Complete Set',
    category: 'Compaction and CBR',
    description: 'Complete set of CBR molds, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'compaction-hammers',
    name: 'Light and Heavy Compaction Hammers',
    category: 'Compaction and CBR',
    description: 'Light and heavy compaction hammers, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'compaction-molds',
    name: 'Light and Heavy Compaction Molds',
    category: 'Compaction and CBR',
    description: 'Light and heavy compaction molds, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'cbr-soaking-tanks',
    name: 'CBR Soaking Tanks',
    category: 'Compaction and CBR',
    description: 'CBR soaking tanks, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'in-situ-density-apparatus',
    name: 'In-situ Density Apparatus',
    category: 'Density and sampling',
    description: 'In-situ density apparatus, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'dcp-apparatus',
    name: 'DCP Apparatus',
    category: 'Density and sampling',
    description: 'Dynamic Cone Penetration (DCP) apparatus, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'rifle-quartering-boxes',
    name: 'Rifle / Quartering Boxes',
    category: 'Density and sampling',
    description: 'Rifle or quartering boxes of different sizes, produced in the company’s workshop.',
    specification: 'Workshop-produced, in different sizes. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'universal-sample-extruders',
    name: 'Universal Sample Extruders',
    category: 'Density and sampling',
    description: 'Universal sample extruders, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'sample-trays',
    name: 'Sample Trays',
    category: 'Density and sampling',
    description: 'Sample trays, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'aggregate-impact-testing-apparatus',
    name: 'Aggregate Impact Testing Apparatus',
    category: 'Aggregate testing',
    description: 'Aggregate impact testing apparatus, produced in the company’s workshop.',
    specification: 'Workshop-produced. Further specification to be confirmed.',
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'bridge-steel-bearings',
    name: 'Bridge Steel Bearings',
    category: 'Bridge bearings',
    description: 'Steel bearings for bridges, produced in the company’s workshop.',
    specification: 'For bridge spans up to 24 metres, as stated in the company profile.',
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial engineering equipment in a facility'
  }
]

// Demonstration testimonials only. Do not present these as genuine client
// feedback. The profile refers to testimonial letters but does not include
// their text, so no genuine testimonial is available here. Replace every
// entry with a verified testimonial, with the client's permission, before
// the public website is launched.
export const testimonials = [
  {
    quote: 'Placeholder testimonial: replace this quote with verified client feedback about a completed geotechnical investigation, with permission.',
    author: '[Placeholder client name]',
    role: '[Placeholder role and organisation]'
  },
  {
    quote: 'Placeholder testimonial: replace this quote with verified client feedback about highway design, supervision or water well drilling, with permission.',
    author: '[Placeholder client name]',
    role: '[Placeholder role and organisation]'
  },
  {
    quote: 'Placeholder testimonial: replace this quote with verified client feedback about materials testing or workshop-produced accessories, with permission.',
    author: '[Placeholder client name]',
    role: '[Placeholder role and organisation]'
  }
]

export const values = [
  { title: 'Professionalism', text: 'From the profile vision: professionalism, creativity and punctuality in the services provided to clients.' },
  { title: 'Quality', text: 'Quality objectives established throughout the organisation to support the company’s goals.' },
  { title: 'Innovation', text: 'A working environment suitable for innovation, as stated among the company’s goals.' },
  { title: 'Client focus', text: 'Services that meet or exceed customers’ expectations, as stated in the company mission.' }
]
