import React from 'react';

class Button extends React.Component {
	state = { active: false };
	render() {
		const { name, ...props } = this.props;
		console.log(props);
		return <button {...props}>{name}</button>;
	}
}

export default Button;
