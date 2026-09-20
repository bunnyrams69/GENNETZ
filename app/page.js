import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import WhyDifferent from './components/WhyDifferent';
import WhatIDo from './components/WhatIDo';
import ProcessTimeline from './components/ProcessTimeline';
import Plans from './components/Plans';
import AboutChaithu from './components/AboutChaithu';
import PortfolioGrid from './components/PortfolioGrid';
import TrustCards from './components/TrustCards';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCanvas />
      <WhyDifferent />
      <WhatIDo />
      <ProcessTimeline />
      <Plans />
      <AboutChaithu />
      <PortfolioGrid />
      <TrustCards />
      <ContactCta />
      <Footer />
      <ScrollEffects />
    </>
  );
}
