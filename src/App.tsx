import './App.css';
import {MottoSection} from "./sections/MottoSection";
import {HeadlineSection} from "./sections/HeadlineSection";

function App() {
  return (
    <div data-testid="app-main" className="App">
      <HeadlineSection />
      <MottoSection />
    </div>
  );
}

export default App;
