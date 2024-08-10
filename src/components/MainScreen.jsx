import { Link } from "react-router-dom"
import "../styles/MainScreen.css" 

function MainScreen() {
  return (
    <>
        <div className="mainscreen-wallpaper">
            <main className="text-box">
                    <div className='main-menu'>
                        <h1 className="title"><span className='redTitle'>Mem</span>Card</h1>
                        <h2 className="subtitle">Get points by clicking on an image but don&apos;t click on any more than once!</h2>
                        <p>Select difficulty:</p>

                        <Link to="/level">
                            <button className="difficulty-button easy-button">Easy</button>
                        </Link>
                        <Link to="/level">
                            <button className="difficulty-button hard-button">Hard</button>
                        </Link>
                        <p>Current highscore: <b>{0}</b> pts</p>
                    </div>
                </main>
        </div>
    </>
  )
}

export default MainScreen