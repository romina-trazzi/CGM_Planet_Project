import { useState } from 'react';
import { planetsData } from '../assets/planets.js';
import './App.css';
import PlanetData from '../components/PlanetData/PlanetData.jsx';
import PlanetList from '../components/PlanetList/PlanetList.jsx';

function App() {
  const [planet, setPlanet] = useState('Please select a planet');

  return (
    <>
      <header>
        <h1>Data planet list</h1>
      </header>

      <main>
        <PlanetList />
        <PlanetData />
      </main>

      <footer>
        <span> Made with love by ~ Romina Trazzi 2023 ~ </span>
      </footer>
    </>
  );
}

export default App;

