// Modules
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import NotFound from './Pages/NotFound';
// CSS
import './App.css';

// Utils
import { categories } from './utils/index';
import Categories from './Pages/Category';
import RandomSelection from './Pages/RandomSelection';
import Favorite from './Pages/Favorite';

export default class App extends React.Component {
	state = { favorite: [] };

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
	render() {
		const { favorite } = this.state;
		return (
			<Router>
				<Header />
				<div className='button-list'>
					{categories.map((categorie, index) => (
						<NavLink
							activeClassName='is-active'
							to={categorie !== 'All' ? `/categories/${categorie}` : `/Home`}
						>
							<Button key={index} name={categorie} />
						</NavLink>
					))}
				</div>
				<Link to='/Favorite'>
					<Button name='Favorite' />
				</Link>

				<Switch>
					<Route
						path='/Home'
						exact
						render={() => (
							<RandomSelection
								favorites={this.state.favorite}
								onFavorite={(item) => this.handleFavorite(item)}
							/>
						)}
					/>
					<Route
						path='/favorite'
						exact
						render={() => (
							<Favorite
								onFavorite={(item) => this.handleFavorite(item)}
								meals={favorite}
								favorites={this.state.favorite}
							/>
						)}
					/>
					<Route
						path='/categories/:filter'
						exact
						render={(props) => (
							<Categories favorites={this.state.favorite} {...props} />
						)}
					/>
					<Route path='*' component={NotFound} />
				</Switch>
			</Router>
		);
	}
}
