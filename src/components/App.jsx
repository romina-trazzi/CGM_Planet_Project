import { useState } from 'react';
import { planetsData } from '../assets/planets.js';
import './App.css';
import PlanetData from '../components/PlanetData/PlanetData.jsx';
import PlanetList from '../components/PlanetList/PlanetList.jsx';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState({});

  // Handler Function
  function handleClick(planetName) {
    const prova = planetsData.filter((planet) => planet.name === planetName);
    setSelectedPlanet(prova);
  }

  return (
    <>
      <header>
        <h1>Data planet list</h1>
      </header>

      <main>
        <PlanetList onSelect={handleClick} />
        <PlanetData selectedPlanet={selectedPlanet} />
      </main>

      <footer>
        <span> Made with love by ~ Romina Trazzi 2023 ~ </span>
      </footer>
    </>
  );
}

export default App;

// Componente + Props + funzione anonima + callback Handler(parametro)

//

