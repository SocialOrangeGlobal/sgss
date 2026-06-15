export interface Program {
  id: string;
  name: string;
  timing: string;
}

export interface WeeklyProgram {
  id: string;
  day: string;
  programs: Program[];
}

export interface SpecialEvent {
  id: string;
  name: string;
  date: string;
  timing: string;
  description: string;
}

export const dailyPrograms: Program[] = [
  { id: '1', name: 'Parkash', timing: '5:30 AM To 6:30 AM' },
  { id: '2', name: 'Asa di vaar', timing: '7:00 am To 7:45 am' },
  { id: '3', name: 'Rehras sahib', timing: '6:00 pm To 6:30 pm' },
  { id: '4', name: 'Katha by Giani Ji', timing: '6:30 pm To 7:00 pm' },
  { id: '5', name: 'Kirtan by resident Ragi Jatha', timing: '7:00 pm To 7:30 pm' },
];

export const weeklyPrograms: WeeklyProgram[] = [
  {
    id: '1',
    day: 'Sunday',
    programs: [
      { id: 'w1', name: 'Parkash', timing: '5:30 AM To 6:30 AM' },
      { id: 'w2', name: 'Asa di Vaar', timing: '7:00 AM To 8:30 AM' },
      { id: 'w3', name: 'Divan', timing: '10:00 AM To 1:00 PM' },
      { id: 'w4', name: 'Rehras Sahib', timing: '6:00 PM To 6:30 PM' },
      { id: 'w5', name: 'Kirtan by Ragi Jatha', timing: '6:30 PM To 7:30 PM' },
    ],
  },
  {
    id: '2',
    day: 'Monday - Saturday',
    programs: [
      { id: 'w6', name: 'Parkash', timing: '5:30 AM To 6:30 AM' },
      { id: 'w7', name: 'Asa di vaar', timing: '7:00 am To 7:45 am' },
      { id: 'w8', name: 'Rehras sahib', timing: '6:00 pm To 6:30 pm' },
      { id: 'w9', name: 'Katha by Giani Ji', timing: '6:30 pm To 7:00 pm' },
      { id: 'w10', name: 'Kirtan by resident Ragi Jatha', timing: '7:00 pm To 7:30 pm' },
    ],
  },
];

export const specialPrograms: SpecialEvent[] = [
  {
    id: '1',
    name: 'Akhand Path',
    date: 'As per Sangat request',
    timing: 'Continuous 48 hours',
    description: 'Non-stop reading of Sri Guru Granth Sahib Ji',
  },
  {
    id: '2',
    name: 'Gurpurabs',
    date: 'As per Sikh Calendar',
    timing: 'Full day program',
    description: 'Celebrations of Sikh Guru birthdays and anniversaries',
  },
  {
    id: '3',
    name: 'Barsi / Antam Ardas',
    date: 'As per request',
    timing: 'Morning program',
    description: 'Annual remembrance ceremonies',
  },
];
