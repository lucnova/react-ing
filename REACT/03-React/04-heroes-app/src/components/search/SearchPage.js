import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchPage = ({ history }) => {
	const { search } = useLocation(); // Hook de Router para obtener la location
	const { q = '' } = queryString.parse(search);

	const [formValues, handleInputChange] = useForm({
		searchTerm: q,
	});

	const { searchTerm } = formValues;

	const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();

		history.push(`?q=${searchTerm}`);
	};

	return (
		<div className="row">
			<div className="col">
				<h6>
					<i className="fas fa-database"></i> Results:
				</h6>

				<div id="searchResults" className="row row-cols-1 row-cols-md-4 g-4 my-3">
					{filteredHeroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>

			<div className="col-3">
				<h6>
					<i className="fas fa-search"></i> Search
				</h6>

				<form className="form-group">
					<input
						name="searchTerm"
						className="form-control"
						list="datalistOptions"
						placeholder="Type to search..."
						value={searchTerm}
						onChange={handleInputChange}
					/>

					<button className="btn btn-outline-primary" type="submit" onClick={handleSearch}>
						<i className="fas fa-search"></i> Buscar
					</button>
				</form>
			</div>
		</div>
	);
};
