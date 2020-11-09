// Modules
import React from 'react';

// Assets
import heart from '../../assets/heart.svg';
import heartActive from '../../assets/heart-active.svg';

// Style
import './Card.css';

class Card extends React.Component {
	state = { favorite: false };

	handleFavorite = () => {
		this.setState((prevState) => ({
			favorite: !prevState.favorite,
		}));
		this.props.onFavorite(this.props.item);
	};
	render() {
		const { image, title, isFavorite } = this.props;
		return (
			<div
				className='card'
				style={{
					backgroundImage: `linear-gradient(#00000020, #000000 90%), url(${image})`,
				}}
			>
				<img
					src={isFavorite ? heartActive : heart}
					alt='favorite'
					className='favorite-icon'
					onClick={this.handleFavorite}
				/>

				<h3>{title}</h3>
			</div>
		);
	}
}

export default Card;
