import '../styles/Card.css'

function Card() {
  return (
    <div className='card'>
        <img src='https://via.placeholder.com/200' alt='placeholder' className='card-image' />
        <div className='card-text'>{'Card Name'}</div>
    </div>
  )
}

export default Card