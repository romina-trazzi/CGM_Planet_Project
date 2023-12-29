import { planetsData } from '../../assets/planets';
import './PlanetData.css';

function PlanetData({ selectedPlanet }) {
  console.log(selectedPlanet);

  return (
    <div className='planet_data'>
      <div className='title'>PLANET DATA</div>
      {selectedPlanet.length > 0 ? (
        <>
          <div>
            {planet.name} <br />
            <br />
            {planet.image} <br />
            <br />
            {planet.title} <br />
            <br />
            {planet.description} <br />
            <br />
            {planet.distanceFromSun} <br />
            <br />
            {planet.diameter} <br />
            <br />
            {planet.gravity} <br />
            <br />
          </div>

        </>
      ) : (
        'Please select a planet'
      )}
    </div>
  );
}

export default PlanetData;

/*

.map((planet, id) => (
      <div key={id}>
       
      </div>

  */
