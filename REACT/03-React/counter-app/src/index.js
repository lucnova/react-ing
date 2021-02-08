/**
 * NOTA: Se puede comentar esa linea y usar JSX sin problemas.
 * https://es.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
 */
import React from 'react'; // COMPONENTE PRINCIPAL -> Da funciones de JSX tambien (leer nota)
import ReactDOM from 'react-dom'; // MANIPULAR DOM
import FirstApp from './FirstApp'; // COMPONENTE PROPIO

import './index.css';

/* Obtengo la referencia del elemento DOM a renderizar el objeto */
const myRoot = document.querySelector('#root');

/* Renderizarlo: render(COMPONENTE, idDOM) */
ReactDOM.render(<FirstApp title="Eu te amo" description="princeiza do cabeios naranjas" />, myRoot);
