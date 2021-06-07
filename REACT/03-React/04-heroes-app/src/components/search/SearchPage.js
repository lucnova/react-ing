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

				{q === '' && (
					<div className="alert alert-primary d-flex align-items-center">
						<div>Search a hero.</div>
					</div>
				)}

				{q !== '' && filteredHeroes.length === 0 && (
					<div className="alert alert-primary d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
							viewBox="0 0 16 16"
							role="img"
							aria-label="Warning:"
						>
							<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
						</svg>
						<div>No hero found with search given: {q}</div>
					</div>
				)}

				{q !== '' && filteredHeroes.length >= 1 && (
					<div id="searchResults" className="row row-cols-1 row-cols-md-4 g-4 my-3">
						{filteredHeroes.map((hero) => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</div>
				)}
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
