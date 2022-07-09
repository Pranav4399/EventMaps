import './styles/app/App.css';
import WorldMap from './pages/components/map';
import Header from './pages/components/header';
import Footer from './pages/components/footer';
import NavBar from './pages/components/navbar';
import RightNavbar from './pages/components/rightNavbar';
//import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='body-container'>
        <Header />
        <WorldMap />
      </div> 
      <RightNavbar />
      <Footer />
    </div>
  );
}

export default App;
