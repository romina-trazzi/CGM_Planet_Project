import { planetsData } from '../../assets/planets';
import './PlanetList.css';

function PlanetList() {
  return (
    <div className='planet_list'>
      <menu>
        <div>PLANET LIST</div>
        {planetsData.map((planet, id) => (
          <li key={id}>{planet.name}</li>
        ))}
      </menu>
    </div>
  );
}

export default PlanetList;
