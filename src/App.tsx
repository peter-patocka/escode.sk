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
    AOS.init({
      once: true,
      duration: 400,
      easing: 'ease-out-cubic',
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
