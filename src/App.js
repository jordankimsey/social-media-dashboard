import './App.css'
import AttributionFooter from './components/AttributionFooter';
import Header from './components/Header';
import SocialCard from './components/socialCard/SocialCard';

function App() {
  return (
    <div className='App'>
      <div className='container h-screen w-screen overflow-y-auto'>
        <Header />
        <div>
          <SocialCard/>
        </div>
        <AttributionFooter />
      </div>
    </div>
  );
}

export default App;
