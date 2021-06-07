import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchPage = () => {
	const [formValues, handleInputChange] = useForm({
		searchTerm: '',
	});

	const { searchTerm } = formValues;

	const filteredHeroes = heroes.filter((hero) => {
		return hero;
	});

	const handleSearch = (e) => {
		e.preventDefault();

		console.log(searchTerm);
	};

	return (
		<div className="row">
			<div className="col">
				<h6>
					<i className="fas fa-database"></i> Resultados:
				</h6>

				<div id="searchResults" className="row row-cols-1 row-cols-md-4 g-4 my-3">
					{filteredHeroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>

			<div className="col-3">
				<h6>
					<i className="fas fa-search"></i> Búsqueda
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
