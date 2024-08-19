import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";
import "../styles/Level.css";

function Level() {
  const location = useLocation();
  const { difficulty } = location.state || { difficulty: "easy" };
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
        const data = await response.json();
    
        // Determine the number of Pokémon to fetch based on difficulty
        const limit = difficulty === "easy" ? 16 : 25;
    
        // Randomly select a subset of Pokémon
        const selectedPokemon = [];
        const usedIndices = new Set();
        while (selectedPokemon.length < limit) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedPokemon.push(data.results[randomIndex]);
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
          const randomIndex = Math.floor(Math.random() * data.results.length);
          if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            const pokemon = data.results[randomIndex];
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonDetail = await pokemonResponse.json();
            if (pokemonDetail.sprites.front_default) {
              filteredPokemonDetails.push(pokemonDetail);
            }
          }
        }
    
        setPokemonData(filteredPokemonDetails);
      } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemonData();

    fetchPokemonData();
  }, [difficulty]);

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
            <Scoreboard />
          </div>
          <section className="game-board">
            <CardGrid difficulty={difficulty} pokemonData={pokemonData} />
          </section>
        </div>
      </div>
    </>
  );
}

export default Level;