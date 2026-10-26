import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Classes from '@/components/Classes';
import Schedule from '@/components/Schedule';
import Trainings from '@/components/Trainings';
import Online from '@/components/Online';
import Workshops from '@/components/Workshops';
import Privates from '@/components/Privates';
import Team from '@/components/Team';
import Books from '@/components/Books';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import FooterSizer from '@/components/FooterSizer';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <Classes />
        <Schedule />
        <Trainings />
        <Online />
        <Workshops />
        <Privates />
        <Team />
        <Books />
        <Contact />
      </main>
      <Footer />
      <Motion />
      <FooterSizer />
    </>
  );
}
