import './App.css'
import AttributionFooter from './components/AttributionFooter';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <div className='container h-screen w-screen overflow-y-auto bg-red-600'>
        <Header />
        <AttributionFooter />
      </div>
    </div>
  );
}

export default App;
