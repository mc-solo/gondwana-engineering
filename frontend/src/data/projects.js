// ---------------------------------------------------------------------------
// CENTRAL PROJECTS DATA — FROM THE COMPANY PROFILE ONLY
// ---------------------------------------------------------------------------
// Every project below is taken from section 1.8, Major Past Experience, of
// Brief_Company_Profile__Geotechnical.docx. Period, client and services are
// as stated there. Where the profile gives no location, no location is
// invented. Photographs are representative, except where the alt text says
// the image is from the company profile; no photograph here is claimed to
// be a photograph of the named project.
// ---------------------------------------------------------------------------

import { heroDrillingData as heroDrilling, materialsLabData as materialsLab } from '../assets/profileImages.js'

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const projectCategories = [
  'All projects',
  'Building investigation',
  'Bridge investigation',
  'Dam and wind power investigation'
]

export const projects = [
  {
    id: 'edget-village',
    title: 'EDGET Village Geotechnical Investigation',
    category: 'Building investigation',
    period: 'December 2024',
    client: 'EDGET Village Real Estate',
    location: 'Addis Ababa',
    description: 'Geotechnical investigation works for 16 blocks of 5B+G+35, 3B+G+33 and B+G+33 buildings: 46 boreholes to depths of 60 and 50 metres, a total of 2,400 metres.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Bearing capacity determination'],
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile'
  },
  {
    id: 'eotc-building',
    title: 'EOTC Building Geotechnical Investigation',
    category: 'Building investigation',
    period: 'September to October 2024',
    client: 'EOTC',
    location: 'Addis Ababa',
    description: 'Geotechnical investigation works for a 3B+G+12 building: 7 boreholes to a depth of 50 metres, a total of 330 metres.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Bearing capacity determination'],
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile'
  },
  {
    id: 'tinsae-building',
    title: 'Tinsae Real Estate Building Investigation',
    category: 'Building investigation',
    period: 'March 2024',
    client: 'Tinsae Real Estate',
    location: 'Addis Ababa',
    description: 'Subsurface exploration and geotechnical engineering analysis for a 3B+G+25 building: 3 boreholes to a depth of 40 metres, a total of 120 metres.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Bearing capacity determination'],
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile'
  },
  {
    id: 'orbis-towers',
    title: 'Eight Towers Near African Union HQ',
    category: 'Building investigation',
    period: 'September to December 2023',
    client: 'ORBIS Trading and Technical Center',
    location: 'Near African Union HQ, Addis Ababa',
    description: 'Subsurface exploration and geotechnical engineering analysis for eight 2B+G+25 building towers: 21 boreholes to a depth of 60 metres, a total of 1,260 metres.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Bearing capacity determination'],
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile'
  },
  {
    id: 'sky-view-building',
    title: 'Sky View Real Estate Building Investigation',
    category: 'Building investigation',
    period: 'May 2023',
    client: 'Sky View Real Estate',
    location: 'In front of Gandi Hospital, Addis Ababa',
    description: 'Subsurface exploration and geotechnical engineering analysis for a 4B+G+30 building.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Bearing capacity determination'],
    image: materialsLab,
    imageAlt: 'Materials testing work in the company laboratory, from the company profile'
  },
  {
    id: 'goba-berbere-bridges',
    title: 'Eleven Bridges, Goba to Dolomena Road',
    category: 'Bridge investigation',
    period: 'June 2024',
    client: 'Alemayehu Ketema General Contractor',
    location: 'Goba - Berbere - Dolomena DB road',
    description: 'Subsurface investigation for 11 bridges along the Goba - Berbere - Dolomena DB road project.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Foundation depth and bearing capacity determination'],
    image: unsplash('photo-1504307651254-35680f356dfd', 1200),
    imageAlt: 'Road construction work'
  },
  {
    id: 'addis-ababa-its',
    title: 'Addis Ababa Intelligent Transportation System',
    category: 'Bridge investigation',
    period: 'February to November 2021',
    client: 'Guaff Ingineure / AACRA',
    location: 'Addis Ababa',
    description: 'Geotechnical investigation for the Addis Ababa intelligent transportation system, including test pitting, DCP testing and subgrade and construction material survey and sampling.',
    scope: ['Rotary core drilling', 'SPT and undisturbed sampling', 'Laboratory testing', 'Test pitting and DCP testing', 'Geotechnical investigation report'],
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial engineering equipment in a facility'
  },
  {
    id: 'mekuaturi-alem-ketema',
    title: 'Bridge and Landslide Sites, Mekuaturi to Alem Ketema',
    category: 'Bridge investigation',
    period: 'August to October 2020',
    client: 'China State Construction Engineering Company',
    location: 'Mekuaturi - Alem Ketema Road Project, Lot II',
    description: 'Geotechnical investigation for bridge and potential landslide sites, including geophysical investigation, engineering geological mapping and landslide assessment.',
    scope: ['Geophysical investigation', 'Engineering geological mapping', 'Landslide assessment', 'Rotary core drilling', 'Laboratory testing'],
    image: unsplash('photo-1581094794329-c8112a89af12', 1200),
    imageAlt: 'Engineer in protective equipment at a site'
  },
  {
    id: 'mota-jara-gedo',
    title: 'Mota - Jara - Gedo Road Project',
    category: 'Bridge investigation',
    period: 'December 2019 to May 2021',
    client: 'Zongmi Engineering Plc.',
    location: 'Mota - Jara - Gedo Road',
    description: 'Geotechnical investigation along the Mota - Jara - Gedo road project, with a foundation investigation report.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Foundation investigation report'],
    image: unsplash('photo-1504307651254-35680f356dfd', 1200),
    imageAlt: 'Road construction work'
  },
  {
    id: 'modjo-hawassa-highway',
    title: 'Modjo - Hawassa Highway, Lot III',
    category: 'Bridge investigation',
    period: 'April to December 2019',
    client: 'SBI, International Holdings',
    location: 'Ziway (Batu) - Arsinegele section, realignment',
    description: 'Subsurface exploration and geotechnical investigation for river crossings and overpass bridges, including test pitting, DCP testing, field density and sampling.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Test pitting and DCP testing'],
    image: unsplash('photo-1504307651254-35680f356dfd', 1200),
    imageAlt: 'Road construction work'
  },
  {
    id: 'arjo-didessa',
    title: 'Arjo-Didessa Spillway and Right Intake',
    category: 'Dam and wind power investigation',
    period: 'February to April 2019',
    client: 'Zhongmei Engineering Group Ltd',
    location: 'Arjo-Didessa',
    description: 'Subsurface exploration and geotechnical engineering analysis for spillway and right intake construction work, including falling head and packer testing.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Laboratory testing', 'Falling head and packer testing'],
    image: heroDrilling,
    imageAlt: 'A drilling rig at a site investigation, from the company profile'
  },
  {
    id: 'grand-millennium-dam',
    title: 'Grand Millennium Dam Site Investigation',
    category: 'Dam and wind power investigation',
    period: 'March 2011 to March 2012',
    client: 'Salini Contractor',
    location: 'Over the Blue Nile River',
    description: 'Site investigation for the Grand Millennium Dam project over the Blue Nile River, including lagoon testing and a factual report.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Lagoon test', 'Laboratory testing'],
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial engineering equipment in a facility'
  },
  {
    id: 'ashegoda-wind-power',
    title: 'Ashegoda Wind Power Project Site Investigation',
    category: 'Dam and wind power investigation',
    period: 'April 2010 to December 2012',
    client: 'Vergnet, of France',
    location: 'Mekelle',
    description: 'Site investigation over the Ashegoda wind power project, including water pressure testing and a factual report.',
    scope: ['Rotary core drilling', 'Undisturbed sampling', 'SPT testing', 'Water pressure test', 'Laboratory testing'],
    image: unsplash('photo-1581092160562-40aa08e78837', 1200),
    imageAlt: 'Engineers discussing a technical investigation'
  }
]
