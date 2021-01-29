/* NOTA: Se puede comentar esa linea y usar JSX sin problemas. */
//import React from 'react';
import ReactDOM from 'react-dom';

/* Declaro el objeto JSX */
const myTitle = <h1>Hello Everyone</h1>;
/* Obtengo la referencia del elemento DOM a renderizar el objeto */
const myRoot = document.querySelector('#root');

/* Renderizarlo */
ReactDOM.render(myTitle, myRoot);