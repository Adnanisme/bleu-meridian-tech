import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import FeaturedWork from '../components/sections/FeaturedWork';
import About from '../components/sections/About';
import Process from '../components/sections/Process';

import Partners from '../components/sections/Partners';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Bleu Meridian Technologies — Custom Software Development & App Development Company</title>
        <meta name="description" content="Bleu Meridian Technologies builds custom software, mobile apps, and web platforms for businesses worldwide. From enterprise solutions to startup MVPs — we design and engineer software that real people rely on. Headquartered in Abuja, Nigeria." />
        <meta name="keywords" content="custom software development, mobile app development, web application development, software engineering company, tech consulting, cloud infrastructure, digital transformation, app developers, React development, Flutter development, Laravel development, full-stack development, UI UX design, enterprise software, startup MVP development, SaaS development, cross-platform apps, software company Nigeria, software development Africa, Abuja tech company, web platform development, custom business software" />
        <link rel="canonical" href="https://bleumeridiantech.com/" />
        <meta property="og:title" content="Bleu Meridian Technologies — Custom Software & App Development" />
        <meta property="og:description" content="We design and engineer custom software, mobile apps, and web platforms for businesses worldwide. Built to be used. Built to last." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bleumeridiantech.com/" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <FeaturedWork />
        <About />
        <Process />

        <Partners />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
