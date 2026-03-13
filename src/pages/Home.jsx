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
  return (
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
  );
}
