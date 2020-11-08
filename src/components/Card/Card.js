import React from 'react';
// import heart from '../../assets/heart.svg';
import heart from '../../assets/heart.svg';
import heartActive from '../../assets/heart-active.svg';
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
		const { image, title } = this.props;
		const { favorite } = this.state;
		return (
			<div
				className='card'
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<img
					src={favorite ? heartActive : heart}
					alt='favorite'
					onClick={this.handleFavorite}
				/>

				<h3>{title}</h3>
			</div>
		);
	}
}

export default Card;
