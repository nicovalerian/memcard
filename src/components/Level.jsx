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
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
          })
        );
        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

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
            <CardGrid difficulty={difficulty} pokemonData={pokemonData}/>
          </section>
        </div>
      </div>
    </>
  );
}

export default Level;
