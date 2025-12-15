import SkipNav from '@/components/SkipNav';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <PageTransition>
      <SkipNav />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
      <Hero />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Stats />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
