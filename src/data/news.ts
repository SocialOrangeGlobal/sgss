export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Gurmat Parchar Camp 2024',
    date: '2024-03-15',
    excerpt: 'Join us for an enriching Gurmat Parchar Camp designed to strengthen your connection with Gurbani.',
    content: `We are pleased to announce the upcoming Gurmat Parchar Camp at Sri Guru Singh Sabha, Craigieburn. This camp is designed for youth and adults who wish to deepen their understanding of Sikh scriptures, history, and way of life.\n\nThe camp will include daily Nitnem, Kirtan, Katha, and interactive sessions with experienced Granthis and Ragis. Participants will have the opportunity to learn Gurbani pronunciation, basic Kirtan, and Sikh history.\n\nRegistration is now open. Contact the Gurdwara office for more details.`,
    category: 'Events',
  },
  {
    id: '2',
    title: 'Punjabi School Enrollment Open',
    date: '2024-02-01',
    excerpt: 'Enroll your children in our Punjabi School program starting from Term 1.',
    content: `Sri Guru Singh Sabha Punjabi School is now accepting enrollments for the new academic year. Our school offers quality Punjabi language education in a nurturing environment.\n\nClasses are held every Sunday from 10:00 AM to 12:00 PM. Our qualified teachers use modern teaching methods to make learning Punjabi fun and effective.\n\nFor enrollment, please visit the Gurdwara office or contact us through the website.`,
    category: 'Education',
  },
  {
    id: '3',
    title: 'Keertan Classes Registration',
    date: '2024-01-20',
    excerpt: 'Learn the sacred art of Sikh devotional music with our experienced instructors.',
    content: `Our Keertan Classes are now accepting new students. Whether you are a beginner or have some experience, our classes cater to all skill levels.\n\nLessons cover Harmonium, Tabla, and vocal training. Students learn traditional Gurbani Keertan in the authentic Sikh tradition.\n\nClasses are conducted on Saturdays. Contact the Gurdwara for registration.`,
    category: 'Education',
  },
  {
    id: '4',
    title: 'Annual Nagar Kirtan Celebrations',
    date: '2024-04-14',
    excerpt: 'Join the grand Nagar Kirtan procession to celebrate Vaisakhi.',
    content: `Sri Guru Singh Sabha invites all Sangat to participate in the annual Nagar Kirtan procession celebrating Vaisakhi. This is one of the most significant events in the Sikh calendar.\n\nThe procession will begin from the Gurdwara and pass through the streets of Craigieburn. Traditional music, Gatka performances, and langar will be part of the celebrations.\n\nAll community members are welcome to participate.`,
    category: 'Events',
  },
];
