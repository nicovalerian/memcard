import PropTypes from "prop-types";
import "../styles/Scoreboard.css";

function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div className="scoreboard-wrapper">
        <div className="score-text">Current score: {currentScore}</div>
        <div className="score-text">Highscore: {highScore}</div>
      </div>
    </>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Scoreboard;