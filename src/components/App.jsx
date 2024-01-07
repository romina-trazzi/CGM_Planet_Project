import { useState } from 'react';
import './App.css';
import './AppMq.css';
import PlanetData from '../components/PlanetData/PlanetData.jsx';
import PlanetList from '../components/PlanetList/PlanetList.jsx';


function App() {
  const [selectedPlanet, setSelectedPlanet] = useState({});

  return (
    <>
      <main>
        <PlanetList isSelected={selectedPlanet.name}
        setPlanetState={setSelectedPlanet} />
         
        <PlanetData selectedPlanet={selectedPlanet} />

      </main>

    </>
  );
}

export default App;

// Componente + Props che gestisce la funzione Handler + funzione Handler(parametro)

