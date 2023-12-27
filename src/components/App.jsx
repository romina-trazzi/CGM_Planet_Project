import { useState } from 'react';
import { planetsData } from '../assets/planets.js';
import './App.css';

function App() {
  const [planet, setPlanet] = useState('Please select a planet');

  return (
    <>
      <header>
        <h1>Data planet list</h1>
      </header>

      <main>
        <div className='planet_list'></div>
        <div className='planet_data'></div>
      </main>

      <footer>
        <span> Created with love by ~ Romina Trazzi 2023 ~ </span>
      </footer>
    </>
  );
}

export default App;

