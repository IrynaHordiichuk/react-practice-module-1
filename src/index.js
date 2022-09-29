import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element1 = <span>Good day</span>;
// const element2 = <span>world</span>;

// const jsxElement = <div>{element1}{element2}</div>;
// curly brackets - JSX expression, works like interpolation,
// сюда можно подставлять значения переменніх(identifier), expression(2+2), знач. пропсов і т.д.
// console.log(jsxElement);
// ! First concept: props object and children property
// we pass here type of the element(so called tag, type of HTML element(node))
// react element is an object which describes future DOM element
// props:{} are settings of the element, add text, children will appear
// if an element has more than 1 child - they are kept in an array of children;
// prop children - children of an element, то что будет в него вложено
// ReactDOM.render(element, document.querySelector('#root'));

// function Painting (props){
//     console.log(props);
//     return (<div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>Author: <a href={data.author.url}>{data.author.tag}</a> </p>
//     <p>Price:{data.price} credits</p>
//     <p>Availability: in stock or out of stock</p>
//     <button type="button">Add to a basket </button>
//     </div>)
// };

// =============================================================
// const icons = [
//     <FaRegThumbsUp />,
//     <MdPeople />,
//     <MdOutlineProductionQuantityLimits />,
//     <GiTreeDoor />,
//   ];
