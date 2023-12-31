import './PlanetData.css';

function PlanetData({ selectedPlanet }) {
  const {
    name,
    image,
    title,
    description,
    distanceFromSun,
    diameter,
    gravity
  } = selectedPlanet;
  return (
    <>
      <div className='title'>~ PLANET DATA ~</div>
      {name ? (
        <div class='planet_info'>
          <p>{name}</p>
          <img src={image} />
          <p>{title}</p>
          <p>{description}</p>
          <p>{distanceFromSun}</p>
          <p>{diameter}</p>
          <p>{gravity}</p>
        </div>
      ) : (
        <p class='noplanet'>...PLEASE SELECT A PLANET...</p>
      )}
    </>
  );
}

export default PlanetData;

