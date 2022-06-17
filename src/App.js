// > 
import './App.css';

// margin: 41px;

// > components 
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Support />
      <Footer />
    </>
  );
}

export default App;
