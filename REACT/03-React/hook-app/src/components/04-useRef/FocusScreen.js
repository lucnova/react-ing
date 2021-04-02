import React, { useRef } from 'react';

export const FocusScreen = () => {
    // * USO COMÚN ES PARA GUARDAR REFERENCIA A ALGO.
    //      En este caso solo se usa para tener referencia del elemento input
    //      aunque es mas preferible hacer un querySelector
	const inputRef = useRef();

	const handleFocusOnInput = () => {
        inputRef.current.select();

        console.log(inputRef);

        //document.querySelector('input').select();
    };

	return (
		<>
			<div className="row">
				<div className="col pt-5 px-5">
					<h1>FocusScreen</h1>

					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col pt-5 px-5">
					<input ref={inputRef} className="form-control" placeholder="Nombre"></input>

					<button className="btn btn-primary mt-3" onClick={handleFocusOnInput}>
						OK
					</button>
				</div>
			</div>
		</>
	);
};
