import React from 'react';

export const SearchPage = () => {
	return (
		<div className="row">
			<div className="col">
				<h6><i className="fas fa-database"></i> Resultados:</h6>
				<div id="searchResults"></div>
			</div>
			<div className="col-2">
				<label className="form-label"><i className="fas fa-search"></i> Búsqueda</label>

				<input className="form-control" list="datalistOptions" placeholder="Type to search..." />
				<datalist id="datalistOptions">
					<option value="DC" />
					<option value="Marvel" />
				</datalist>
			</div>
		</div>
	);
};
