
// Здесь хранится компонент, проп тайпі прописані внизу 
import PropTypes from 'prop-types';

const Painting = ({ imageUrl, title, profileUrl, author, price, quantity }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p> Price: {price} credits </p>
      <p>Availability: {quantity < 10 ? 'low stock' : 'in stock'}</p>
      <button type="button">Add to a basket</button>
    </div>
  );
};

// prop-types должні біть прописані для каждого пропcа
// почти все пропсі обязательні, врядли єта карточка будет
// завершенной без какого-то пропса, поєтому прописіваем isRequired
Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default Painting;
