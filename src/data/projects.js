// Portfolio — real projects only
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

export const projectsData = [
  {
    id: 'nptr',
    title: 'National Petroleum Technology Repository',
    shortTitle: 'NPTR',
    client: 'Petroleum Technology Development Fund (PTDF)',
    category: 'Software Development',
    description: 'Nigeria\'s central knowledge hub for petroleum technology, research, and innovation — preserving institutional memory and powering evidence-based policy.',
    images: [nptr1, nptr2, nptr3],
    imageLabels: ['Landing Page & Policy Dashboard', 'Career & Development Portal', 'Knowledge Repository'],
    tags: ['React', 'Node.js', 'PostgreSQL', 'RBAC'],
    displayType: 'desktop',
    challenge: 'Nigeria\'s petroleum sector lacked a centralized system for storing and accessing research publications, prototypes, datasets, and policy documents. Knowledge was fragmented across institutions with no unified access control.',
    solution: 'We built NPTR — a full-stack national repository with role-based access control (RBAC), tiered user permissions, CRUD functionality across all content types, a policy dashboard with real-time analytics, a career portal, and a searchable knowledge base with advanced filtering.',
    results: [
      '128,940+ research items catalogued',
      '72 partner institutions onboarded',
      '38,000+ active users',
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
    description: 'Executive-level project and budget management system enabling real-time oversight of 605+ active projects across 12 departments.',
    images: [protrack1, protrack2, protrack3],
    imageLabels: ['Executive Dashboard', 'Department Drill-Down', 'Analytics & Reporting'],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Analytics'],
    displayType: 'desktop',
    challenge: 'PTDF needed a unified system to track hundreds of projects across multiple departments, monitor budgets, compare performance metrics, and generate reports — replacing fragmented spreadsheets and manual tracking.',
    solution: 'We built Protrack 360 — an executive dashboard with department-level drill-downs, subdivision tracking, progress monitoring, budget analytics with donut charts and trend lines, staff management, and automated report generation.',
    results: [
      '605 active projects tracked in real-time',
      '12 departments with subdivision-level visibility',
      '65.5% average completion rate monitored live',
      'Automated reporting replaced manual processes'
    ],
    timeline: '8 months',
    team: '6 members',
  },
  {
    id: 'spotts',
    title: 'Spotts',
    shortTitle: 'Spotts',
    client: 'Bleu Meridian Technologies (In-House Product)',
    category: 'App Development',
    description: 'A sports venue discovery and booking app — find courts, book sessions, and purchase gym passes across Abuja and beyond.',
    images: [spotts1, spotts2, spotts3],
    imageLabels: ['Venue Details', 'Booking Flow', 'Home Screen'],
    tags: ['React Native', 'Node.js', 'Mobile', 'Payments'],
    displayType: 'mobile',
    challenge: 'Sports enthusiasts in Abuja had no centralized way to discover nearby venues, check availability, compare pricing, or book courts — relying on phone calls and walk-ins.',
    solution: 'We designed and built Spotts end-to-end — a mobile app with venue discovery, sport-specific filtering, real-time court availability, date/time booking, pricing display, gym pass purchases, and venue reviews.',
    results: [
      'Live on iOS and Android',
      'Multiple venues onboarded across Abuja',
      'Real-time booking with instant confirmation',
      'In-house product owned by Bleu Meridian'
    ],
    timeline: '6 months',
    team: '5 members',
  },
  {
    id: 'websites',
    title: 'Client Websites',
    shortTitle: 'Web Platforms',
    client: 'Multiple Clients',
    category: 'Web Platforms',
    description: 'Professional websites built for companies across agriculture, energy, and oil & gas — each tailored to the client\'s brand and industry.',
    images: [websites1, websites2, websites3],
    imageLabels: ['Afzhars AgriGrains', 'Redline Holdings', 'Black Terra Energies'],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'SEO'],
    displayType: 'desktop',
    challenge: 'Multiple clients across different industries needed modern, professional web presences that accurately represented their brands and converted visitors into customers.',
    solution: 'We designed and developed bespoke websites for each client — from Afzhars AgriGrains\' agricultural showcase to Redline Holdings\' corporate platform to Black Terra Energies\' oil & gas portal. Each site was built with responsive design, SEO optimization, and performance in mind.',
    results: [
      '3 distinct websites across different industries',
      'Fully responsive across all devices',
      'SEO-optimized for organic discovery',
      'Custom design systems for each brand'
    ],
    timeline: '2-4 weeks per site',
    team: '3 members per project',
  },
];
