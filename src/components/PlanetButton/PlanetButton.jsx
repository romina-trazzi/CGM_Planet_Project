import './PlanetButton.css';

function PlanetButton({ onReset }) {
  return <button className ="planet_button" onClick={onReset}>Reset List</button>;
}

export default PlanetButton;
