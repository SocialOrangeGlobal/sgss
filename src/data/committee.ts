export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export const committeeMembers: CommitteeMember[] = [
  { id: '1', name: 'Sardar Balvinder Singh', role: 'President', phone: '0400 000 001', email: 'president@sgss.com.au' },
  { id: '2', name: 'Sardar Gurpreet Singh', role: 'Vice President', phone: '0400 000 002', email: 'vp@sgss.com.au' },
  { id: '3', name: 'Sardar Harjinder Singh', role: 'Secretary', phone: '0400 000 003', email: 'secretary@sgss.com.au' },
  { id: '4', name: 'Sardar Jaswinder Singh', role: 'Treasurer', phone: '0400 000 004', email: 'treasurer@sgss.com.au' },
  { id: '5', name: 'Sardar Kulwinder Singh', role: 'Committee Member', phone: '0400 000 005' },
  { id: '6', name: 'Sardar Lakhbir Singh', role: 'Committee Member', phone: '0400 000 006' },
  { id: '7', name: 'Sardar Manjinder Singh', role: 'Committee Member', phone: '0400 000 007' },
  { id: '8', name: 'Sardar Navjot Singh', role: 'Committee Member', phone: '0400 000 008' },
  { id: '9', name: 'Sardar Parminder Singh', role: 'Committee Member', phone: '0400 000 009' },
  { id: '10', name: 'Sardar Rajinder Singh', role: 'Committee Member', phone: '0400 000 010' },
];
