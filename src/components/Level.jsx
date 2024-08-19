import { Link, useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";
import "../styles/Level.css";

function Level() {
  const location = useLocation();
  const { difficulty } = location.state || { difficulty: "easy" };

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
            <CardGrid difficulty={difficulty}/>
          </section>
        </div>
      </div>
    </>
  );
}

export default Level;
