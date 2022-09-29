// Дженерик секция, типа на веб сайте - топ продаж или что-то похожее.
// Тут також прописуємо проп тайтпи
// тут у ф-ю приходить заголовок, він рендериться за умовою
// тому в проп тайпс не вказуємо, що він обовязковий

import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

// Як зробити так щоб секція рендерила довільну розмітку ?
// У компонентів є чілдрени
// Один компонент можна поставити всередину іншого,
// це називається композиція
// передаэмо чілдрени пропами сюди у функцію

// значить тут по умові рендеримо тайтл 
// і завжди рендеримо чілдрен
// якщо чілдрен прийде undefined, то вони просто не зарендеряться

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node, 
};

export default Section;
