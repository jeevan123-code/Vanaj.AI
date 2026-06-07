// Master registry shown on the landing page.
// `available: true` crops have a full detail page; others are "coming soon".
import { paddy } from './paddy.js'
import { wheat } from './wheat.js'
import { cotton } from './cotton.js'

export const crops = [
  {
    id: 'paddy',
    name: 'Paddy',
    scientificName: 'Oryza sativa',
    family: 'Poaceae',
    season: 'Kharif',
    tagline: 'The flooded field staple',
    blurb:
      'Trace rice through four stages of life and study the ten diseases that shape every season.',
    accent: '#27513B',
    available: true,
    data: paddy,
  },
  {
    id: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    family: 'Poaceae',
    season: 'Rabi',
    tagline: 'The golden winter grain',
    blurb:
      'Trace wheat through four stages of life and study the ten diseases that shape every season.',
    accent: '#C28E2C',
    available: true,
    data: wheat,
  },
  {
    id: 'cotton',
    name: 'Cotton',
    scientificName: 'Gossypium hirsutum',
    family: 'Malvaceae',
    season: 'Kharif',
    tagline: 'The white fibre crop',
    blurb:
      'Trace cotton through four stages of life and study the ten diseases that shape every season.',
    accent: '#A65A3A',
    available: true,
    data: cotton,
  },
]

export const getCrop = (id) => crops.find((c) => c.id === id)
