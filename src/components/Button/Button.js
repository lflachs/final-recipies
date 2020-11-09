import React from 'react';
import './button.css';
class Button extends React.Component {
	state = { active: false };
	render() {
		const { name, active, ...props } = this.props;
		console.log(props);
		return (
			<button {...props} className='button'>
				{name}
			</button>
		);
	}
}

export default Button;
