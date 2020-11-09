// Modules
import React from 'react';

// Components
import Loader from '../components/Loader/Loader';
import CardList from '../components/Card/CardList';

// Utils
import { apiUrl } from '../utils/index';
import { fetching } from '../utils/fetch';

class RandomSelection extends React.Component {
	state = { meals: [], loading: true, errors: null };
	componentDidMount() {
		fetching(`${apiUrl}/randomselection.php`)
			.then((data) => {
				console.log(data);
				this.setState({ meals: data });
				setTimeout(() => this.setState({ loading: false }), 1000);
			})
			.catch((err) => this.setState({ errors: err }));
	}

	render() {
		const { onFavorite, favorites } = this.props;
		const { meals, errors, loading } = this.state;
		return loading || errors ? (
			<Loader />
		) : (
			<CardList
				favorites={favorites}
				onFavorite={onFavorite}
				lists={meals}
				imageKey={'strMealThumb'}
				titleKey={'strMeal'}
			/>
		);
	}
}

export default RandomSelection;
