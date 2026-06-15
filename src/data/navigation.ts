export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'NEWS', href: '/news' },
  {
    label: 'ABOUT US',
    href: '/about',
    children: [
      { label: 'FACILITIES', href: '/about/facilities' },
      { label: 'PRESENT RAAGI', href: '/about/present-raagi' },
      { label: 'PRESENT GRANTHI', href: '/about/present-granthi' },
      { label: 'GUIDELINES', href: '/about/guidelines' },
    ],
  },
  {
    label: 'SCHOOL & CLASSES',
    href: '/school',
    children: [
      { label: 'PUNJABI SCHOOL', href: '/school/punjabi-school' },
      { label: 'KEERTAN CLASSES', href: '/school/keertan-classes' },
      { label: 'CALENDER 2019', href: '/school/calendar' },
    ],
  },
  {
    label: 'RELIGION',
    href: '#',
    children: [
      { label: 'SIKH RELIGION', href: '/religion/sikh-religion' },
      { label: 'SIKH MUSIC', href: '/religion/sikh-music' },
      { label: 'LANGUAGE', href: '/religion/language' },
      { label: 'WHO IS A RAAGI', href: '/religion/who-is-a-raagi' },
      { label: 'WHO IS A GRANTHI', href: '/religion/who-is-a-granthi' },
    ],
  },
  {
    label: 'CONTACT US',
    href: '#',
    children: [
      { label: 'CONTACT INFORMATION', href: '/contact/information' },
      { label: 'BOOKINGS', href: '/contact/bookings' },
      { label: 'MANAGING COMMITTEE', href: '/contact/managing-committee' },
      // { label: 'LEAVE A MESSAGE', href: '/contact/leave-message' },
      // { label: 'CONSTITUTION', href: '/contact/constitution' },
      // { label: 'USER REGISTRATION', href: '/contact/registration' },
    ],
  },
  { label: 'EMPLOYMENT', href: '/employment' },
  {
    label: 'PROGRAMS',
    href: '#',
    children: [
      { label: 'DAILY AND WEEKLY', href: '/programs/daily-weekly' },
      { label: 'ANNOUNCEMENT', href: '/documents/Anouncement.pdf' },
    ],
  },
];
