import '../styles/ErrorPage.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
        <div className='mainscreen-wallpaper'>
            <main className='text-box text-box-error '>
                <h1 className='title title-error'>Oh no, this route doesn&apos;t exist!</h1>
                <Link to="/" className='subtitle subtitle-error'>
                    You can go back to the home page by clicking here, though!
                </Link>
            </main>
        </div>
    </>
  );
};

export default ErrorPage;