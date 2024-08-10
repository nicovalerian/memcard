import { Link } from "react-router-dom"
import CardGrid from './CardGrid'
import Scoreboard from './Scoreboard'
import "../styles/Level.css"

function Level() {
  return (
    <>
        <div className="mainscreen-wallpaper">
            <Link to="/">
                <button className="back-button">Back</button>
            </Link>
            <div className="game-wrapper">
              <Scoreboard />
              <section className="game-board">
                <CardGrid />
              </section>
            </div>
        </div>
    </>
  )
}

export default Level