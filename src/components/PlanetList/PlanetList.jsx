import { planetsData } from '../../assets/planets';
import './PlanetList.css';
import './PlanetListMq.css';

function PlanetList({ onSelect }) {
  return (
    <>
      <div className='title'>~ PLANET LIST ~ </div>
      <ul>
        {planetsData.map((planet, id) => (
          <li key={id + planet.name} onClick={() => onSelect(planet.name)}>
            {planet.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlanetList;

