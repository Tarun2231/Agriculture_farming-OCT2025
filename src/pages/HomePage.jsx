import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Divisions from '../components/Divisions';
import AgriCropProcessing from '../components/AgriCropProcessing';
import IntegrationCycle from '../components/IntegrationCycle';
import IncomeStreams from '../components/IncomeStreams';
import BusinessVision from '../components/BusinessVision';
import Contact from '../components/Contact';

const HomePage = ({ isDarkMode }) => {
  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Divisions isDarkMode={isDarkMode} />
      <AgriCropProcessing isDarkMode={isDarkMode} />
      <IntegrationCycle isDarkMode={isDarkMode} />
      <IncomeStreams isDarkMode={isDarkMode} />
      <BusinessVision isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </main>
  );
};

export default HomePage;
