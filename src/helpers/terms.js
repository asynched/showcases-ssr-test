export const TERMS = [
  'iPhone',
  'Galaxy S21',
  'Xiaomi Mi 11',
  'Playstation 5',
  'PC Gamer',
]

export const getRandomTerm = () =>
  TERMS[Math.floor(Math.random() * TERMS.length)]
