import '../styles/Card.css'
import PropTypes from 'prop-types';

function Card({ pokemon }) {
  return (
    <div className='card'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className='card-image' />
        <div className='card-text'>{pokemon.name}</div>
    </div>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Card