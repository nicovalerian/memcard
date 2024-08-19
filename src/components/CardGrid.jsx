import Card from "./Card"
import PropTypes from 'prop-types';
import "../styles/CardGrid.css";

function CardGrid({ difficulty, pokemonData }) {
    const cardCount = difficulty === 'easy' ? 16 : 25;
    
    const shuffledPokemonData = [...pokemonData].sort(() => Math.random() - 0.5).slice(0, cardCount);

    const cards = shuffledPokemonData.map((pokemon, index) => (
        pokemon ? <Card key={index} pokemon={pokemon} /> : null
    ));

    return (
        <div className={`card-grid ${difficulty}`}>{cards}</div>
    )
}

CardGrid.propTypes = {
    difficulty: PropTypes.string.isRequired,
    pokemonData: PropTypes.array.isRequired,
};

export default CardGrid;