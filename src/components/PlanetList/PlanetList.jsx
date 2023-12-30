import { planetsData } from '../../assets/planets';
import './PlanetList.css';
import PlanetButton from '../PlanetButton/PlanetButton.jsx';

function PlanetList({ onSelect }) {
 
  return (
    <div className='planet_list'>
      <menu>
        <div className='title'>~ PLANET LIST ~</div>
        <ul>
          {planetsData.map((planet, id) => (
            <li key={id + planet.name} onClick={() => onSelect(planet.name)}>
              {planet.name}
            </li>
          ))}
        </ul>
      </menu>
    </div>
  );
}

export default PlanetList;


