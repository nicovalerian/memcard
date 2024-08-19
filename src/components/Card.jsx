import '../styles/Card.css'
import PropTypes from 'prop-types';

const exceptions = {
  'great-tusk': 'Great Tusk',
  'scream-tail': 'Scream Tail',
  'brute-bonnet': 'Brute Bonnet',
  'flutter-mane': 'Flutter Mane',
  'slither-wing': 'Slither Wing',
  'sandy-shocks': 'Sandy Shocks',
  'roaring-moon': 'Roaring Moon',
  'walking-wake': 'Walking Wake',
  'gouging-fire': 'Gouging Fire',
  'raging-bolt': 'Raging Bolt',
  'iron-treads': 'Iron Treads',
  'iron-bundle': 'Iron Bundle',
  'iron-hands': 'Iron Hands',
  'iron-jugulis': 'Iron Jugulis',
  'iron-moth': 'Iron Moth',
  'iron-thorns': 'Iron Thorns',
  'iron-valiant': 'Iron Valiant',
  'iron-leaves': 'Iron Leaves',
  'iron-boulder': 'Iron Boulder',
  'iron-crown': 'Iron Crown'
};

function filterName(name) {
  if (exceptions[name]) {
    return exceptions[name];
  }
  
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