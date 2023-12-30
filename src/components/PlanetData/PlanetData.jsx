import './PlanetData.css';

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
    <div className='planet_data'>
      <div className='title'>~ PLANET DATA ~</div>
      {name ? (
        <div>
          <p>{name}</p>
          {image}
          <p>{title}</p>
          <p>{description}</p>
          <p>{distanceFromSun}</p>
          <p>{diameter}</p>
          <p>{gravity}</p>
        </div>
      ) : (
        'Please select a planet'
      )}
    </div>
  );
}

export default PlanetData;

