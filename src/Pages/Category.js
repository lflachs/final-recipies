// Modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Utils
import { apiUrl } from '../utils/index';
import { fetching } from '../utils/fetch';

// Components
import Loader from '../components/Loader/Loader';
import CardList from '../components/Card/CardList';

class Categories extends React.Component {
	state = { meals: [], loading: true, errors: false };

	componentDidMount() {
		console.log(this.props);
		this.handleFetch();
	}
	handleFetch() {
		this.setState({ loading: true });
		fetching(`${apiUrl}/filter.php?c=${this.props.match.params.filter}`)
			.then((data) => {
				this.setState({ meals: data });
				setTimeout(() => this.setState({ loading: false }), 1000);
			})
			.catch((err) => this.setState({ errors: true }));
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.filter !== this.props.match.params.filter)
			this.handleFetch();
	}

	render() {
		const { meals, loading, errors } = this.state;
		const { favorites, onFavorite } = this.props;
		return (
			<>
				{errors && <Redirect to='/404' />}
				{loading ? (
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
				)}
			</>
		);
	}
}

export default Categories;
