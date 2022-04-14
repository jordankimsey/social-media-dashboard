import './App.css'
import AttributionFooter from './components/AttributionFooter';
import Header from './components/Header';
import Overview from './components/overview/Overview';

import SocialCardSection from './components/socialCard/SocialCardSection';

function App() {
  return (
    <div className='App h-screen w-screen overflow-y-auto overflow-x-hidden'>
      <div className='container h-screen w-screen overflow-y-auto overflow-x-hidden flex flex-col items-center'>
        <Header />
        <div className='container flex flex-col justify-center items-center'>
          <SocialCardSection />
        </div>
        <div className='container overview-section mb-10'>
          <Overview />
        </div>
        <AttributionFooter />
      </div>
    </div>
  );
}

export default App;
