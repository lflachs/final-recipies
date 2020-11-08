import React from 'react';

class Button extends React.Component {
	state = { active: false };
	render() {
		const { name, onClick } = this.props;
		return (
			<button value={name} onClick={(event) => onClick(event.target.value)}>
				{name}
			</button>
		);
	}
}

export default Button;
