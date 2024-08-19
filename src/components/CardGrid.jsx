import Card from "./Card"
import PropTypes from 'prop-types';
import "../styles/CardGrid.css";

function CardGrid({ difficulty }) {
    let cardCount = 25;
    if (difficulty === 'easy') {
        cardCount = 16;
    }
    
    const cards = Array.from({ length: cardCount }, (_, index) => <Card key={index} />);
    return (
        <div className={`card-grid ${difficulty}`}>{cards}</div>
    )
}

CardGrid.propTypes = {
    difficulty: PropTypes.string.isRequired,
};

export default CardGrid;