/**
 * NOTA: Se puede comentar esa linea y usar JSX sin problemas.
 * https://es.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

/* Obtengo la referencia del elemento DOM a renderizar el objeto */
const myRoot = document.querySelector('#root');

/* Renderizarlo */
ReactDOM.render(<FirstApp />, myRoot);