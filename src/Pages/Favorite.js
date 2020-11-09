import React from 'react';
import CardList from '../components/Card/CardList';

function Favorite({ favorites, onFavorite }) {
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
