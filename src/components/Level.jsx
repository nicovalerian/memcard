import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";
import "../styles/Level.css";

function Level() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const location = useLocation();
  const { difficulty } = location.state || { difficulty: "easy" };
  const [pokemonData, setPokemonData] = useState([]);
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
      const data = await response.json();
      setAllPokemonData(data.results);
      fetchPokemonData(data.results);
    } catch (error) {
      console.error("Failed to fetch Pokémon data:", error);
    }
  };

  const fetchPokemonData = async (allData) => {
    try {
      const limit = difficulty === "easy" ? 16 : 25;
      const selectedPokemon = [];
      const usedIndices = new Set();
  
      while (selectedPokemon.length < limit) {
        const randomIndex = Math.floor(Math.random() * allData.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          selectedPokemon.push(allData[randomIndex]);
        }
      }
  
      // Fetch details for the selected Pokémon
      let pokemonDetails = await Promise.all(
        selectedPokemon.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        })
      );
  
      // Filter out Pokémon without sprites.front_default
      let filteredPokemonDetails = pokemonDetails.filter(pokemon => pokemon.sprites.front_default);
  
      // Continue fetching additional Pokémon until we have the required number
      while (filteredPokemonDetails.length < limit) {
        const randomIndex = Math.floor(Math.random() * allData.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          const pokemon = allData[randomIndex];
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonDetail = await pokemonResponse.json();
          if (pokemonDetail.sprites.front_default) {
            filteredPokemonDetails.push(pokemonDetail);
          }
        }
      }
  
      setPokemonData(filteredPokemonDetails);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchAllPokemonData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => {
    fetchPokemonData(allPokemonData);
    setCurrentScore(0);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="mainscreen-wallpaper">
        <div className="game-wrapper">
          <div className="top-board">
            <Link to="/">
              <button className="back-button">Back</button>
            </Link>
            <Scoreboard currentScore={currentScore} highScore={highScore} />
            <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
          </div>
          <section className="game-board">
            <CardGrid
              difficulty={difficulty}
              pokemonData={pokemonData}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              highScore={highScore}
              setHighScore={setHighScore}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Level;