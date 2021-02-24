// - PROPIO DE REACT -
//import '@testing-library/jest-dom/extend-expect'; // Esto se ejecutará con cada prueba, es incluido para testear componentes.

// - ENZYME -
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });