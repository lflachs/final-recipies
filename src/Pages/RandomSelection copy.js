import React from 'react';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList';

function Favorite() {
	const { favorites, onFavorite } = this.props;
	return (
		<div className='card-list'>
			<CardList
				favorites={favorites}
				onFavorite={onFavorite}
				lists={favorites}
				imageKey={'strMealThumb'}
				titleKey={'strMeal'}
			/>
		</div>
	);
}

export default Favorite;
