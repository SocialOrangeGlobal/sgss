export interface Facility {
  id: string;
  name: string;
  description: string;
  details: string[];
  icon: string;
}

export const facilities: Facility[] = [
  {
    id: '1',
    name: 'Main Darbar Sahib',
    description: 'The main prayer hall where Sri Guru Granth Sahib Ji is installed and daily Divan takes place.',
    details: [
      'Air-conditioned main hall',
      'Capacity for 500+ Sangat',
      'State-of-the-art sound system',
      'Live streaming equipment',
    ],
    icon: 'temple',
  },
  {
    id: '2',
    name: 'Langar Hall',
    description: 'A spacious community kitchen and dining hall where free meals are served to all visitors.',
    details: [
      'Fully equipped commercial kitchen',
      'Dining capacity for 300 people',
      'Daily Langar service',
      'Special event catering capability',
    ],
    icon: 'utensils',
  },
  {
    id: '3',
    name: 'Punjabi School',
    description: 'A dedicated learning space for Punjabi language education for children and youth.',
    details: [
      'Multiple classrooms',
      'Modern teaching resources',
      'Sunday school sessions',
      'Qualified Punjabi teachers',
    ],
    icon: 'book',
  },
  {
    id: '4',
    name: 'Library',
    description: 'A collection of Sikh literature, scriptures, and religious texts available for Sangat.',
    details: [
      'Extensive collection of Gurbani literature',
      'Sikh history books',
      'Reference materials',
      'Available for all members',
    ],
    icon: 'library',
  },
  {
    id: '5',
    name: 'Car Park',
    description: 'Ample parking facilities for visitors on weekdays and during special events.',
    details: [
      'Large car park',
      'Accessible parking bays',
      'Lighting for evening services',
      'Security monitoring',
    ],
    icon: 'parking',
  },
  {
    id: '6',
    name: 'Youth & Community Room',
    description: 'A multi-purpose room for youth programs, meetings, and community events.',
    details: [
      'Projector and screen',
      'Seating for 50 people',
      'Available for community hire',
      'Air-conditioned',
    ],
    icon: 'users',
  },
];
