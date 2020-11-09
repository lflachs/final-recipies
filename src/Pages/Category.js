import React from 'react';
import { apiUrl } from '../utils/index';
import Loader from '../components/Loader/Loader';
import CardList from '../components/Card/CardList';
import { fetching } from '../utils/fetch';

class Categories extends React.Component {
	state = { meals: [], loading: true };

	componentDidMount() {
		console.log(this.props);
		fetching(
			`${apiUrl}/filter.php?c=${this.props.match.params.filter}`
		).then((data) => this.setState({ meals: data, loading: false }));
	}
	componentDidUpdate(prevProps) {
		if (prevProps.match.params.filter !== this.props.match.params.filter)
			fetching(
				`${apiUrl}/filter.php?c=${this.props.match.params.filter}`
			).then((data) => this.setState({ meals: data, loading: false }));
	}

	render() {
		const { meals, loading } = this.state;
		const { favorites, onFavorite } = this.props;
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

export default Categories;
