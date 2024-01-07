import './PlanetData.css';
import './PlanetDataMq.css';

function PlanetData({ selectedPlanet }) {
  const {
    name,
    image,
    title,
    description,
    distanceFromSun,
    diameter,
    gravity,
  } = selectedPlanet;
  return (
    <>
      <div className='planet_data'>
        <div className='title'>~ PLANET DATA ~</div>
        {name ? (
          <div className='planet_info'>
            <p>{name}</p>
            <img src={image} />
            <p>{title}</p>
            <p>{description}</p>
            <p>{distanceFromSun}</p>
            <p>{diameter}</p>
            <p>{gravity}</p>
          </div>
        ) : (
          <p className='noplanet'>...PLEASE SELECT A PLANET...</p>
        )}
      </div>
    </>
  );
}

export default PlanetData;

