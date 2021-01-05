/* -------------------------------------------------------------------------- */
/*                            DESTRUCTURAR OBJETOS                            */
/* -------------------------------------------------------------------------- */

/*
* Como se extraen propiedades de objetos
*/
'use strict';

const JS = {
    'version': 'ES6',
    'frameworks': ['React', 'Svelte.js', 'EmberJS']
};


let {version, theFrameworks} = JS;


console.log(version, theFrameworks);