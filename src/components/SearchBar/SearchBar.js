import React from 'react';
import searchIcon from '../../assets/search.svg';
class SearchBar extends React.Component {
	state = { userSearch: '' };
	handleChange(event) {
		this.setState({ userSearch: event.target.value });
	}
	render() {
		return (
			<div
				className='search-item'
				style={{
					borderBottom: '2px solid #FBB040',
					width: '300px',
					display: 'flex',
				}}
			>
				<input
					type='text'
					value={this.state.userSearch}
					onChange={(event) => this.handleChange(event)}
					placeholder='Ex: Peanut butter Cookies'
					style={{
						border: 'none',
						color: '#FBB040',
						width: '90%',
						fontSize: '20px',
					}}
				/>
				<img src={searchIcon} alt='search icon' />
			</div>
		);
	}
}

export default SearchBar;
