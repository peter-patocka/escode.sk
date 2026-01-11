import './App.css';
import {MottoSection} from "./sections/MottoSection";
import {HeadlineSection} from "./sections/HeadlineSection";
import {ServicesSection} from "./sections/ServicesSection";
import {WhyUsSection} from "./sections/WhyUsSection";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Check if user prefers reduced motion (with fallback for test environment)
    const prefersReducedMotion = window.matchMedia 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;
    
    AOS.init({
      once: true,
      duration: 400,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotion, // Disable animations if user prefers reduced motion
    });
  }, []);

  return (
    <div data-testid="app-main" className="App">
      <HeadlineSection />
      <MottoSection />
      <ServicesSection />
      <WhyUsSection />
    </div>
  );
}

export default App;
