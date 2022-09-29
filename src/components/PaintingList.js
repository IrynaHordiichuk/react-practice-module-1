// Здесь создаем функцию которая будет рендерить коллекцию, список карточек
// Єта функция буде получать массив обьектов (карточек)
// Значит пишем пропс items, деструктуризируем
// Імпортуємо проптайпи тому що вони повинні бути в області
// бачення, тому що вони містять статичні властивості

import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
    return (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Painting
          imageUrl={item.url}
          title={item.title}
          author={item.author.tag}
          profileUrl={item.author.url}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
  </ul>
    );
}

// Пропси компонента пеінтінг перевіряє сам компонент, 
// там у файлі прописані проп тайпс для нього. А у цьому файлі 
// Пеінтінг ліст цікавить тільки ай ді
// та що саме має прийти у функцію PaintingList - масив обєктів.
// Тобто дублювати перевірку не потрібно, тут перевіряємо саме те що викор
// дана функція
PaintingList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
   id: PropTypes.string.isRequired,
  }),
  ),
};

export default PaintingList;
