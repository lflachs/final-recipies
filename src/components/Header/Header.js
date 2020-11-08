import React from 'react';
import logo from '../../assets/Logo.svg';
import SearchBar from '../SearchBar/SearchBar';
function Header() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '80%',
				padding: '20px',
			}}
		>
			<img src={logo} alt="logo Let's cooking" className='logo' />
			<SearchBar />
		</div>
	);
}

export default Header;
