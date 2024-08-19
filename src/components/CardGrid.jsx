import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/CardGrid.css";

function CardGrid({ difficulty, pokemonData, currentScore, setCurrentScore, highScore, setHighScore }) {
  const cardCount = difficulty === "easy" ? 16 : 25;
  const [shuffledPokemonData, setShuffledPokemonData] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState(new Set());

  useEffect(() => {
    const shuffledData = [...pokemonData]
      .sort(() => Math.random() - 0.5)
      .slice(0, cardCount);
    setShuffledPokemonData(shuffledData);
  }, [pokemonData, cardCount]);

  const handleCardClick = (pokemon) => {
    if (clickedPokemon.has(pokemon.id)) {
      // Game over: reset current score and clickedPokemon set
      setCurrentScore(0);
      setClickedPokemon(new Set());
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedPokemon(new Set(clickedPokemon).add(pokemon.id));

      if (newScore > highScore) {
        setHighScore(newScore);
      }

      setShuffledPokemonData([...shuffledPokemonData].sort(() => Math.random() - 0.5));
    }
  };

  const cards = shuffledPokemonData.map((pokemon, index) => (
    pokemon ? <Card key={index} pokemon={pokemon} onClick={() => handleCardClick(pokemon)} /> : null
  ));

  return (
    <>
      <div className={`card-grid ${difficulty}`}>{cards}</div>
    </>
  );
}

CardGrid.propTypes = {
  difficulty: PropTypes.string.isRequired,
  pokemonData: PropTypes.array.isRequired,
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  highScore: PropTypes.number.isRequired,
  setHighScore: PropTypes.func.isRequired,
};

export default CardGrid;