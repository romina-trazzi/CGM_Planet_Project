import { planetsData } from '../../assets/planets';
import './PlanetList.css';

function PlanetList({ onSelect }) {
  return (
    <div className='planet_list'>
      <menu>
        <div className='title'>PLANET LIST</div>
        <ul>
          {planetsData.map((planet, id) => (
            <li key={id} onClick={() => onSelect(planetsData[id].name)}>
              {planet.name}
            </li>
          ))}
        </ul>
      </menu>
    </div>
  );
}

export default PlanetList;

// Props + azione={props}
