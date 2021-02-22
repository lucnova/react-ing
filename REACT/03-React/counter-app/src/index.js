/**
 * NOTA: Se puede comentar esa linea y usar JSX sin problemas.
 * https://es.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
 */
import React from 'react'; // COMPONENTE PRINCIPAL -> Da funciones de JSX tambien (leer nota)
import ReactDOM from 'react-dom'; // MANIPULAR DOM
import FirstApp from './FirstApp'; // COMPONENTE PROPIO
//import CounterApp from './CounterApp';

import './index.css';   // Incluir Estilos

/* Obtengo la referencia del elemento DOM a renderizar el objeto */
const myRoot = document.querySelector('#root');

/* Renderizarlo: render(COMPONENTE, idDOM) */
ReactDOM.render(<FirstApp title={'Yo Opino'} description={'Opinando'} />, myRoot);

//ReactDOM.render(<CounterApp value={666} />, myRoot);
