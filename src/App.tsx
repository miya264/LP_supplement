import React from 'react';
import { LayoutWrapper } from './components/layout/LayoutWrapper';
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { Story } from './components/sections/Story';
import { Evidence } from './components/sections/Evidence';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <LayoutWrapper>
      <Hero />
      <Benefits />
      <Story />
      <Evidence />
      <BeforeAfter />
      <CTA />
      <FAQ />
      <Footer />
    </LayoutWrapper>
  );
}

export default App;