import React from 'react';
import logo from '../../assets/Logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
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
			<Link to='/'>
				<img src={logo} alt="logo Let's cooking" className='logo' />
			</Link>
			<SearchBar />
		</div>
	);
}

export default Header;
