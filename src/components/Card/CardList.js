import React from 'react';
import Card from './Card';
import './Card.css';

function CardList({
	lists = [],
	imageKey,
	titleKey,
	favorites,
	onFavorite,
	meal,
}) {
	return (
		<div className='card-list'>
			{lists.map((list) => (
				<Card
					item={list}
					image={
						list[imageKey] ||
						'https://image.flaticon.com/icons/png/512/34/34754.png'
					}
					isFavorite={favorites.some((fav) => fav.idMeal === list.idMeal)}
					onFavorite={(item) => onFavorite(item)}
					title={list[titleKey] || 'Food'}
				/>
			))}
		</div>
	);
}

export default CardList;
