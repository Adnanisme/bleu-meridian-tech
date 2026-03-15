// Portfolio - real projects only
import nptr1 from '../assets/portfolio/nptr-1.webp';
import nptr2 from '../assets/portfolio/nptr-2.webp';
import nptr3 from '../assets/portfolio/nptr-3.webp';
import protrack1 from '../assets/portfolio/protrack-1.webp';
import protrack2 from '../assets/portfolio/protrack-2.webp';
import protrack3 from '../assets/portfolio/protrack-3.webp';
import spotts1 from '../assets/portfolio/spotts-1.webp';
import spotts2 from '../assets/portfolio/spotts-2.webp';
import spotts3 from '../assets/portfolio/spotts-3.webp';
import websites1 from '../assets/portfolio/websites-1.webp';
import websites2 from '../assets/portfolio/websites-2.webp';
import websites3 from '../assets/portfolio/websites-3.webp';
import website4 from '../assets/portfolio/website-4.webp';
import website5 from '../assets/portfolio/website-5.webp';

export const projectsData = [
  {
    id: 'nptr',
    title: 'National Petroleum Technology Repository',
    shortTitle: 'NPTR',
    client: 'Petroleum Technology Development Fund (PTDF)',
    category: 'Software Development',
    description: 'A unified platform for collecting, reviewing, approving, organizing, and sharing key materials such as policies, reports, research outputs, and innovation initiatives in one trusted place.',
    images: [nptr1, nptr2, nptr3],
    imageLabels: ['Repository & Policy Dashboard', 'Career & Development Portal', 'Knowledge Repository'],
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'SQLite', 'React Router'],
    displayType: 'desktop',
    challenge: 'Critical petroleum research, policies, and innovation data were scattered across emails, drives, and institutions with no unified access, ownership tracking, or approval workflows.',
    solution: 'We built NPTR, a full-stack national repository with role-based access control, tiered user permissions, structured approval workflows, a searchable knowledge base with advanced filtering, a career portal, and a data bank for verified datasets and indicators.',
    results: [
      'Centralized repository replacing fragmented document storage',
      'Multi-institution onboarding with role-based access',
      'Structured approval workflow from submission to publication',
      'Tiered access across government, academic, and industry users'
    ],
    timeline: '10 months',
    team: '8 members',
  },
  {
    id: 'protrack',
    title: 'Protrack 360',
    shortTitle: 'Protrack 360',
    client: 'Petroleum Technology Development Fund (PTDF)',
    category: 'Software Development',
    description: 'A secure, web-based system built for PTDF to manage people, departments, and projects across the organization with end-to-end tracking, automated notifications, and Microsoft SSO.',
    images: [protrack1, protrack2, protrack3],
    imageLabels: ['Executive Dashboard', 'Department Drill-Down', 'Analytics & Reporting'],
    tags: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'SQLite', 'Chart.js'],
    displayType: 'desktop',
    challenge: 'The organization needed a unified system to manage projects across multiple departments, track progress, handle approvals, and generate reports, replacing fragmented spreadsheets and manual processes.',
    solution: 'We built Protrack 360, an executive dashboard with department-level drill-downs, subdivision tracking, project lifecycle management with approval workflows, automated email notifications, Microsoft SSO integration, and comprehensive analytics.',
    results: [
      'Full project lifecycle management from creation to completion',
      'Department and subdivision-level visibility across the org',
      'Automated notifications for approvals, edits, and reminders',
      'Microsoft SSO integration for secure, seamless access'
    ],
    timeline: '8 months',
    team: '6 members',
  },
  {
    id: 'spotts',
    title: 'Spotts App',
    shortTitle: 'Spotts App',
    client: 'Everyday Users',
    category: 'App Development',
    description: 'Book sports facilities instantly. From football fields to tennis courts, find and reserve your perfect venue in seconds.',
    images: [spotts1, spotts2, spotts3],
    imageLabels: ['Venue Details', 'Booking Flow', 'Home Screen'],
    tags: ['Flutter', 'Dart', 'Laravel', 'Mobile'],
    displayType: 'mobile',
    challenge: 'Sports enthusiasts had no centralized way to discover nearby venues, check real-time availability, or book courts online, relying entirely on phone calls and walk-ins.',
    solution: 'We designed and built the Spotts App end-to-end, a mobile app with venue discovery, sport-specific filtering, real-time court availability, quick booking with date/time selection, secure payments, and a venue owner dashboard for managing bookings and tracking revenue.',
    results: [
      'Live on iOS and Android with real-time booking',
      'Venue owner dashboard for bookings and revenue tracking',
      'Secure payment integration with instant confirmation',
      'Built, owned, and operated by Bleu Meridian Technologies'
    ],
    timeline: '6 months',
    team: '5 members',
  },
  {
    id: 'websites',
    title: 'Client Websites',
    shortTitle: 'Client Websites',
    client: 'Multiple Clients',
    category: 'Web Platforms',
    description: 'Professional websites built for companies across agriculture, energy, oil & gas, sports tech, and automotive, each tailored to the client\'s brand and industry.',
    images: [websites1, websites2, websites3, website4, website5],
    imageLabels: ['Afzhars AgriGrains', 'Redline Holdings', 'Black Terra Energies', 'Spotts App Website', 'Karsource'],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    displayType: 'desktop',
    challenge: 'Multiple clients across different industries needed modern, professional web presences that accurately represented their brands and converted visitors into customers.',
    solution: 'We designed and developed bespoke websites for each client, from agricultural showcases to corporate platforms to automotive marketplaces. Each site was built with responsive design, SEO optimization, and performance in mind.',
    results: [
      '5 distinct websites across different industries',
      'Fully responsive across all devices',
      'SEO-optimized for organic discovery',
      'Custom design systems for each brand'
    ],
    timeline: '2-4 weeks per site',
    team: '3 members per project',
  },
];
