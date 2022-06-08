import './styles/app/App.css';
import WorldMap from './pages/components/map';
import Header from './pages/components/header';
import Footer from './pages/components/footer';
import NavBar from './pages/components/navbar';
//import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <WorldMap />
      <Footer />
    </div>
  );
}

export default App;
