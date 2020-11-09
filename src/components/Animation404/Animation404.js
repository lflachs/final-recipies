// Modules
import React from 'react';
import Lottie from 'react-lottie';

// Assets
import animationData from '../../lotties/25005-404-hamster-wheel.json';

export default function Animation404() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div>
			<Lottie options={defaultOptions} height={400} width={600} />
		</div>
	);
}
