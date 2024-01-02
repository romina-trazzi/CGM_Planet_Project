import { planetsData } from '../../assets/planets';
import './PlanetList.css';
import './PlanetListMq.css';

function PlanetList({ onSelect, isSelected }) {
  return (
    <>
      <div className='title'>~ PLANET LIST ~ </div>
      <ul>
        {planetsData.map((planet, id) => (
          <li
            key={id + planet.name}
            onClick={() => onSelect(planet.name)}
            className={isSelected === planet.name ? 'active' : undefined}
          >
            {planet.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlanetList;

