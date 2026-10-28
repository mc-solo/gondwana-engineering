// ---------------------------------------------------------------------------
// CENTRAL PROJECTS DATA
// ---------------------------------------------------------------------------
// Demonstration content only. No project below is presented as a completed
// company project. To go live, replace each entry with a real, client-approved
// project, its category, description, scope and photograph. Pages read this
// file only, so no component needs to change for a content swap.
//
// Images are temporary, publicly accessible Unsplash images.
// ---------------------------------------------------------------------------

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const projectCategories = [
  'All projects',
  'Laboratory installation',
  'Facility setup',
  'Maintenance programme',
  'Consultancy & training'
]

export const projects = [
  {
    id: 'research-laboratory-installation',
    title: '[Demo] Research Laboratory Installation',
    category: 'Laboratory installation',
    description: 'Demo project: supply, installation and testing of laboratory instruments for a new research workspace.',
    scope: ['Equipment supply', 'Installation', 'Testing and handover'],
    image: unsplash('photo-1532187863486-abf9dbad1b69', 1200),
    imageAlt: 'Laboratory bench with scientific equipment'
  },
  {
    id: 'industrial-commissioning',
    title: '[Demo] Industrial Equipment Commissioning',
    category: 'Facility setup',
    description: 'Demo project: commissioning support for technical equipment in an industrial facility.',
    scope: ['Site preparation', 'Commissioning', 'Operator orientation'],
    image: unsplash('photo-1504328345606-18bbc8c9d7d1', 1200),
    imageAlt: 'Industrial engineering equipment in a workshop'
  },
  {
    id: 'laboratory-refurbishment',
    title: '[Demo] Laboratory Refurbishment',
    category: 'Facility setup',
    description: 'Demo project: layout, workflow and equipment planning for a refurbished laboratory.',
    scope: ['Layout planning', 'Equipment selection', 'Workflow advice'],
    image: unsplash('photo-1581091226825-a6a2a5aee158', 1200),
    imageAlt: 'Engineer reviewing technical work in a laboratory setting'
  },
  {
    id: 'calibration-programme',
    title: '[Demo] Calibration & Maintenance Programme',
    category: 'Maintenance programme',
    description: 'Demo project: a planned calibration and maintenance schedule for laboratory instruments.',
    scope: ['Planned servicing', 'Calibration records', 'Fault support'],
    image: unsplash('photo-1576086213369-97a306d36557', 1200),
    imageAlt: 'Laboratory microscope in use'
  },
  {
    id: 'training-facility-setup',
    title: '[Demo] Technical Training Facility Setup',
    category: 'Consultancy & training',
    description: 'Demo project: equipment setup and practical training for a new technical team.',
    scope: ['Equipment setup', 'Operator training', 'Care guidance'],
    image: unsplash('photo-1581093458791-9f3c3900df4b', 1200),
    imageAlt: 'Professional working with a laptop in a technical setting'
  },
  {
    id: 'laboratory-consultancy',
    title: '[Demo] Laboratory Planning Consultancy',
    category: 'Consultancy & training',
    description: 'Demo project: technical advice on laboratory layout, equipment choice and documentation.',
    scope: ['Needs assessment', 'Layout advice', 'Documentation support'],
    image: unsplash('photo-1581092160562-40aa08e78837', 1200),
    imageAlt: 'Engineers discussing a technical installation'
  }
]
