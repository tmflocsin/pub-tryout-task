import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}