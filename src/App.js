import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage';
import { categories, apiUrl } from './utils/index';
import Button from './components/Card/Button/Button';

export default class App extends React.Component {
	state = { favorite: [], meals: [], filter: 'Seafood', errors: null };
	componentDidMount() {
		this.handleFetch(`${apiUrl}/randomselection.php`);
	}
	handleFetch(url) {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.meals) {
					this.setState({ meals: data.meals, loading: false, errors: null });
				} else {
					this.setState({ errors: 'no results found.' });
				}
			});
	}
	handleFavorite(favorite) {
		if (this.state.favorite.some((fav) => fav.idMeal === favorite.idMeal)) {
			this.setState({
				favorite: this.state.favorite.filter((fav) => {
					return fav.idMeal !== favorite.idMeal;
				}),
			});
		} else {
			this.setState({ favorite: [...this.state.favorite, favorite] });
		}
	}
	handleFilter(filter) {
		if (filter === 'All') {
			this.handleFetch(`${apiUrl}/randomselection.php`);
		}
		this.handleFetch(`${apiUrl}/filter.php?c=${filter}`);
	}
	render() {
		const { meals, errors } = this.state;
		return (
			<div>
				<Header />

				{categories.map((categorie, index) => (
					<Button
						key={index}
						name={categorie}
						onClick={(filter) => this.handleFilter(filter)}
					/>
				))}
				{errors && <p>{errors}</p>}
				<Homepage
					onFavorite={(item) => this.handleFavorite(item)}
					meals={meals}
				/>
			</div>
		);
	}
}
