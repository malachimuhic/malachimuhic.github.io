import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="site-layout">
      <Header />

      {/* Left: sticky hero sidebar */}
      <aside className="site-sidebar">
        <Hero />
      </aside>

      {/* Right: scrollable content */}
      <div className="site-content">
        <main>
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
