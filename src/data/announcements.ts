export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  priority: 'high' | 'medium' | 'low';
}

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Langar Service Update',
    date: '2024-06-01',
    content: 'Langar will be served daily after Rehras Sahib from 7:30 PM to 8:30 PM. All Sangat is welcome.',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Gurdwara Renovation Works',
    date: '2024-05-15',
    content: 'Phase 2 of the Gurdwara renovation is now complete. The new Langar Hall is open for use. Thank you to all who contributed.',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Youth Camp Registration Open',
    date: '2024-05-10',
    content: 'Youth Gurmat Camp registrations are now open. Limited spots available. Age group: 10-18 years. Contact the office for details.',
    priority: 'high',
  },
  {
    id: '4',
    title: 'New Sehaj Path Program',
    date: '2024-04-20',
    content: 'A new Sehaj Path program has been initiated. Sangat wishing to participate can register their names at the Gurdwara office.',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Parking Guidelines',
    date: '2024-04-05',
    content: 'Please note that parking on the side streets during peak times is not permitted. Please use the designated Gurdwara car park.',
    priority: 'low',
  },
];
