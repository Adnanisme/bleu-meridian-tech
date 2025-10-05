import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlueMeridianModern from './components/BlueMeridian_Modern_React.jsx'
import CaseStudy from './components/CaseStudy.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlueMeridianModern />} />
        <Route path="/case-study/:id" element={<CaseStudy projects={projectsData} />} />
      </Routes>
    </Router>
  )
}

// Project data (shared between components)
const projectsData = [
  {
    title: 'Enterprise Resource Planning System',
    client: 'Oil And Gas Organization',
    category: 'Enterprise Software',
    description: 'Complete ERP solution with real-time analytics, inventory management, and multi-location support',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    challenge: 'Our client needed a unified system to manage operations across multiple locations with real-time visibility into inventory, procurement, and financial data. Legacy systems were siloed and causing inefficiencies.',
    solution: 'We built a modern, cloud-based ERP system with microservices architecture. The platform integrates inventory management, procurement workflows, financial reporting, and analytics in one seamless interface.',
    results: [
      '40% reduction in procurement cycle time',
      '99.9% system uptime across all locations',
      'Real-time inventory tracking across 50+ warehouses',
      '$2M annual cost savings from improved efficiency'
    ],
    timeline: '8 months',
    team: '12 members (4 backend, 3 frontend, 2 DevOps, 2 QA, 1 PM)'
  },
  {
    title: 'Mobile Banking Application',
    client: 'Financial Services',
    category: 'Mobile App',
    description: 'Secure mobile banking app with biometric authentication, instant transfers, and bill payments',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['React Native', 'AWS', 'Security'],
    challenge: 'The client needed a secure, user-friendly mobile banking solution that could handle millions of transactions while maintaining the highest security standards and regulatory compliance.',
    solution: 'Developed a cross-platform mobile app using React Native with end-to-end encryption, biometric authentication, and seamless integration with core banking systems. Implemented robust security measures including multi-factor authentication and fraud detection.',
    results: [
      '500K+ active users within 6 months',
      '4.8-star rating on app stores',
      'Zero security breaches since launch',
      '60% reduction in customer service calls'
    ],
    timeline: '6 months',
    team: '8 members (3 mobile developers, 2 backend, 1 security specialist, 1 designer, 1 PM)'
  },
  {
    title: 'E-Commerce Platform',
    client: 'Retail Company',
    category: 'Web Application',
    description: 'Headless commerce platform with 40% faster load times and seamless third-party integrations',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    challenge: 'The client\'s legacy e-commerce platform was slow, difficult to maintain, and couldn\'t handle peak traffic during sales. They needed a modern, scalable solution that could grow with their business.',
    solution: 'Built a headless commerce platform using Next.js for blazing-fast performance, integrated with a modern CMS for content management, and implemented edge caching for global delivery. Added seamless integrations with payment providers, shipping carriers, and marketing tools.',
    results: [
      '40% faster page load times',
      '65% increase in conversion rate',
      '3x traffic capacity during peak sales',
      '99.99% uptime during Black Friday'
    ],
    timeline: '5 months',
    team: '10 members (4 frontend, 3 backend, 1 DevOps, 1 designer, 1 PM)'
  },
  {
    title: 'Learning Management System',
    client: 'Education Sector',
    category: 'EdTech Platform',
    description: 'Comprehensive LMS with live classes, assessments, progress tracking, and certification',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['React', 'WebRTC', 'MongoDB'],
    challenge: 'Educational institutions needed a robust platform to support remote learning with live classes, interactive assessments, and comprehensive progress tracking for thousands of students.',
    solution: 'Developed a full-featured LMS with integrated video conferencing using WebRTC, adaptive assessments, automated grading, progress analytics, and a mobile-responsive design. Implemented features for live classes, recorded sessions, assignments, quizzes, and certification.',
    results: [
      '10,000+ concurrent users supported',
      '95% student satisfaction rate',
      '50% reduction in administrative workload',
      'Scaled to 25+ institutions within first year'
    ],
    timeline: '7 months',
    team: '14 members (5 fullstack, 2 video streaming specialists, 3 QA, 2 designers, 2 PMs)'
  },
  {
    title: 'IoT Dashboard & Analytics',
    client: 'Manufacturing',
    category: 'Data Analytics',
    description: 'Real-time monitoring dashboard for industrial IoT devices with predictive maintenance alerts',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['TypeScript', 'IoT', 'ML'],
    challenge: 'Manufacturing facility needed real-time monitoring of industrial equipment to prevent downtime, optimize operations, and predict maintenance needs before failures occurred.',
    solution: 'Created an IoT platform that ingests data from thousands of sensors, processes it in real-time, and provides actionable insights through an intuitive dashboard. Implemented machine learning models for predictive maintenance and anomaly detection.',
    results: [
      '45% reduction in equipment downtime',
      '$1.5M saved in maintenance costs annually',
      'Real-time monitoring of 5,000+ sensors',
      '85% accuracy in failure prediction'
    ],
    timeline: '9 months',
    team: '11 members (3 backend, 2 frontend, 2 ML engineers, 2 IoT specialists, 1 designer, 1 PM)'
  },
  {
    title: 'Healthcare Patient Portal',
    client: 'Health Services',
    category: 'Healthcare',
    description: 'HIPAA-compliant patient portal with appointment booking, telemedicine, and medical records',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['HIPAA', 'Security', 'Cloud'],
    challenge: 'Healthcare provider needed a secure, HIPAA-compliant portal to enable patients to access medical records, book appointments, and conduct telemedicine consultations while ensuring data privacy and security.',
    solution: 'Built a comprehensive patient portal with end-to-end encryption, secure video consultations, electronic health records (EHR) integration, appointment scheduling, prescription management, and billing. Achieved full HIPAA compliance with regular security audits.',
    results: [
      '30,000+ registered patients',
      '70% reduction in phone call volume',
      '100% HIPAA compliance maintained',
      '92% patient satisfaction score'
    ],
    timeline: '10 months',
    team: '13 members (4 fullstack, 2 security specialists, 2 integration engineers, 2 QA, 2 designers, 1 PM)'
  }
];

export default App
export { projectsData }
