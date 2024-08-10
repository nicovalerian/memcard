import "../styles/Scoreboard.css";

function Scoreboard() {
  return (
    <>
      <div className="scoreboard-wrapper">
        <div className="score-text">Current score: {0}</div>
        <div className="score-text">Highscore: {0}</div>
      </div>
    </>
  );
}

export default Scoreboard;
