const heroImages = require.context('../assets/heroes', true); // IMPORTAR DINAMICO require -> es de Webpack
export default heroImages;