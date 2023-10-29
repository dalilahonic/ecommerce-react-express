import { createContext } from 'react';

const SectionsContext = createContext([
  'starters',
  'burgers_and_sandwiches',
  'salads',
  'noodles_and_pasta',
  'main_courses',
  'specialties',
  'sides',
  'desserts',
  'beverages',
]);

export default SectionsContext;
