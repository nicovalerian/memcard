import '../styles/Card.css'
import PropTypes from 'prop-types';
import "../styles/Card.css";

function filterName(name) {
  const [firstPart] = name.split('-');
  return firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
}

function Card({ pokemon, onClick }) {
  return (
    <div className='card' onClick={onClick}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className='card-image' />
        <div className='card-text'>{filterName(pokemon.name)}</div>
    </div>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card