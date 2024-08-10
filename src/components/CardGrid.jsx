import Card from "./Card"

function CardGrid() {
    const cards = Array.from({ length: 16 }, (_, index) => <Card key={index} />);
    // Create an array of 16 cards, each with a unique key
    return (
        <div className='card-grid'>{cards}</div>
    )
}

export default CardGrid