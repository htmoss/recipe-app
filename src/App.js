import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	const APP_ID = 'ad1763c3';
	const APP_KEY = '3d32cc5458336c8c145d5675df554181';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, [query]);

	const getRecipes = async () => {
		const response = await axios.get(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		setRecipes(response.data.hits);
		console.log(response.data);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className='App'>
			<div className='navbar'>
				<h1>FF</h1>
				<form className='search-form' onSubmit={getSearch}>
					<input
						className='search-bar'
						type='text'
						value={search}
						onChange={updateSearch}
						placeholder='Search for recipes...'
					/>
					<button className='search-button' type='submit'>
						<FaSearch />
					</button>
				</form>
			</div>
			<div className='intro'>
				<h1>Welcome to FoodFinder!</h1>
				{/* <p>Search for recipes in the box above</p> */}
			</div>
			<div className='container'>
				<div className='recipe-list'>
					{recipes.map((recipe) => (
						<Recipe
							key={uuidv4()}
							title={recipe.recipe.label}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							ingredients={recipe.recipe.ingredientLines}
							url={recipe.recipe.url}
							source={recipe.recipe.source}
							mins={recipe.recipe.totalTime}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
