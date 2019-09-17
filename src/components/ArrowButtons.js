import React from 'react';

import './ArrowButtons.css';

function ArrowButtons(props) {
	return (
		<div className="arrow-buttons">
			<button className="arrow-button">&lt;</button>
			<button className="arrow-button">&gt;</button>
		</div>
	);
}

export default ArrowButtons