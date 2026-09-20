import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Manifesto from './components/Manifesto';
import TrustCards from './components/TrustCards';
import PortfolioGrid from './components/PortfolioGrid';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCanvas />
      <Services />
      <ProcessTimeline />
      <Manifesto />
      <TrustCards />
      <PortfolioGrid />
      <ContactCta />
      <Footer />
      <ScrollEffects />
    </>
  );
}
