import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CarCollection from './components/CarCollection';
import FeatureHighlight from './components/FeatureHighlight';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

/**
 * AutoVerse - Premium Indian Automotive Showcase
 * Built with React, TypeScript, Tailwind CSS, and Framer Motion.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-accent selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      <main>
        {/* Sections */}
        <section id="home">
          <Hero />
        </section>

        <Marquee />

        <CarCollection />
        <FeatureHighlight />
        <StatsBar />

        <Services />

        <Testimonials />

        <About />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Accessibility: Skip to Content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-6 focus:py-3 focus:font-bold"
      >
        Skip to main content
      </a>
      <div id="main-content" />
    </div>
  );
}

export default App;
