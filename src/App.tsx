/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import AllCompanies from './components/AllCompanies';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import FutureMap from './components/FutureMap';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white font-sans selection:bg-black/10 dark:selection:bg-white/20 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <AllCompanies />
      <Projects />
      <Timeline />
      <FutureMap />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}
