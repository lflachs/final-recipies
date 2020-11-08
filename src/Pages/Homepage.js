import React from 'react';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList';

class Homepage extends React.Component {
	render() {
		const { onFavorite, meals } = this.props;
		return meals.length < 0 ? (
			<Loader />
		) : (
			<div className='card-list'>
				{meals.map((meal, index) => (
					<Card
						key={index}
						item={meal}
						image={meal.strMealThumb}
						title={meal.strMeal}
						onFavorite={(item) => onFavorite(item)}
					/>
				))}
			</div>
		);
	}
}

export default Homepage;
