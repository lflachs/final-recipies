import React from 'react';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList';
import { apiUrl } from '../utils/index';
import { fetching } from '../utils/fetch';

class RandomSelection extends React.Component {
	state = { meals: [], loading: true, errors: null };
	componentDidMount() {
		fetching(`${apiUrl}/randomselection.php`)
			.then((data) => {
				console.log(data);
				this.setState({ meals: data, loading: false });
			})
			.catch((err) => this.setState({ errors: err }));
	}

	render() {
		const { onFavorite, favorites } = this.props;
		const { meals, errors, loading } = this.state;
		return loading ? (
			<Loader />
		) : (
			<div className='card-list'>
				<CardList
					favorites={favorites}
					onFavorite={onFavorite}
					lists={meals}
					imageKey={'strMealThumb'}
					titleKey={'strMeal'}
				/>
			</div>
		);
	}
}

export default RandomSelection;
