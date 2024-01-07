import { planetsData } from '../../assets/planets';
import './PlanetList.css';
import './PlanetListMq.css';
import PlanetButton from '../PlanetButton/PlanetButton';


function PlanetList({isSelected, setPlanetState}) {

  // Handler Function
  function handleClick(planetName) {
    const findPlanet = planetsData.find((planet) => planet.name === planetName);
    if (findPlanet) {
      setPlanetState(findPlanet);
    }
  }

  function handleReset() {
    setPlanetState({});
  }

  return (
    <>
      <div className='planet_list'>
      
        <div className='title'>~ PLANET LIST ~ </div>

        <menu>
          <ul>
            {planetsData.map((planet, id) => (
              <li
                key={id + planet.name}
                onClick={() => handleClick(planet.name)}
                className={isSelected === planet.name ? 'active' : undefined}
              >
                {planet.name}
              </li>
            ))}
          </ul>
          <PlanetButton onReset={handleReset} />
        </menu>
      </div>
    </>
  );
}

export default PlanetList;

