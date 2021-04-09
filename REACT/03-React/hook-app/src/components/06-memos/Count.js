import React from 'react';

// (1) SE ENVUELVE EL COMPONENTE CON UN memo(<>)

export const Count = React.memo(({ countValue = 0 }) => {
	console.log('* Count Component Re-Called *');

	return <small>{countValue}</small>;
});
