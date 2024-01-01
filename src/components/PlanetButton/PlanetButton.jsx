import './PlanetButton.css';

function PlanetButton({ onReset }) {
  return (
    <button type='reset' className='planet_button' onClick={onReset} autofocus>
      Reset List
    </button>
  );
}

export default PlanetButton;
